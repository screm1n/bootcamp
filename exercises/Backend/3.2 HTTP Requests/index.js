import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome to my website</h1>
  <p>This site was made with Node.js, Express and npm.</p>
  <h2>Contact Me</h2>
  <p><a href="https://github.com/screm1n">My GitHub</a></p>
  `);
});

app.listen(5932, () => {
  console.log("Server running on port 5932.");
});