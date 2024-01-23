import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { Translate } from '@google-cloud/translate';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "angela",
  port: 3000,
});

const app = express();
const port = 4000;

db.connect();

let quiz = [];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

let totalCorrect = 0;

// Configure o cliente do Google Translate com suas credenciais
const translate = new Translate({ projectId: 'solution.js', keyFilename: 'package.json' });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function traduzirTexto(texto, idiomaOrigem, idiomaDestino) {
  try {
    const [traducao] = await translate.translate(texto, { from: en, to: pt });
    return traducao;
  } catch (erro) {
    console.error('Erro na tradução:', erro);
    return texto;
  }
}

async function traduzirDados() {
  try {
    const consulta = "SELECT * FROM flags";
    const resultado = await db.query(consulta);

    const dadosTraduzidos = await Promise.all(
      resultado.rows.map(async (linha) => {
        const linhasTraduzidas = await Promise.all(
          Object.entries(linha).map(async ([coluna, valor]) => ({
            [coluna]: await traduzirTexto(valor, 'en', 'pt'),
          }))
        );

        return Object.assign({}, ...linhasTraduzidas);
      })
    );

    return dadosTraduzidos;
  } catch (erro) {
    console.error('Erro ao traduzir dados:', erro);
    return [];
  }
}

async function nextQuestion() {
  const dadosTraduzidos = await traduzirDados();
  const randomCountry = dadosTraduzidos[Math.floor(Math.random() * dadosTraduzidos.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
