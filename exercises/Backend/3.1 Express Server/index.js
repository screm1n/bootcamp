import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3856, () => {
  console.log("Server running on port 3856.");
});