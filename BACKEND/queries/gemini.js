require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateAIResponse = async (prompt) => {
  console.log(prompt);
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY is undefined. Check your .env file.");
    }

    // Initialize the AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are a podcast generator. Users will input a text, audio, and/or image prompt, and you will output text resembling a podcast according to the prompt(s). In your response, type as if you were writing a script on paper.",
    });

    // Generate content
    const result = await model.generateContentStream({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.1,
      },
    });

    let fullResponse = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullResponse += chunkText;
    }

    return fullResponse;
  } catch (error) {
    console.error("Error generating AI response:", error.message);
    throw error; // Re-throw to handle in controller
  }
};

// Call the async function
// const prompt =
//   "A cat trying to explain to a dog why cats are better than dogs. The dog is the podcast host, and is not having any of the cat's nonsense.";
// generateAIResponse(prompt);

module.exports = {
  generateAIResponse,
};
