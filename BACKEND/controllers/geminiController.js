const express = require("express");
const gemini = express.Router();
const { generateAIResponse } = require("../queries/gemini.js");

gemini.post("/prompt", async (req, res) => {
  const AIResponse = await generateAIResponse(req.body);
  console.log(req.body);
  res.json(AIResponse);
});

module.exports = gemini;
