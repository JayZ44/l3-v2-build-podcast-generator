require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateAIResponse(prompt) {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY is undefined. Check your .env file.");
    }

    // Initialize the AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content
    const result = await model.generateContent(prompt);

    // Log the result
    console.log("Response:", result.response.text());
  } catch (error) {
    console.error("Error generating AI response:", error.message);
  }
}

// Call the async function
const prompt = "Explain how AI works";
generateAIResponse(prompt);
