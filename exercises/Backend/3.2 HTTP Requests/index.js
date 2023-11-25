import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome to my website!</h1>
  <p><a href="http://localhost:5932/about">About</a></p> 
  <p><a href="http://localhost:5932/contact">Contact Me</a></p>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <h1>About</h1>
  <p>This site was made with Node.js, Express and npm.</p>
  `);
});


app.get("/contact", (req, res) => {
  res.send(`
  <h1>Contact Me</h1><p><a href="https://github.com/screm1n">My GitHub</a></p>
  `);
});

app.listen(5932, () => {
  console.log("Server running on port 5932.");
});