const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

//GEMINI CONTROLLER

const geminiController = require("./controllers/geminiController.js");
app.use("/generate", geminiController);

// ROUTES
app.get("/", (req, res) => {
  res.send("The Podcast Generator");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
