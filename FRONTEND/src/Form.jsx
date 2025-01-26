import React, { useState } from "react";
import "./Form.css";
import ReactMarkdown from "react-markdown";

const Form = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [podcast, setPodcast] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/generate/prompt`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate podcast");
      }

      const data = await response.json();
      setPodcast(data);
      console.log("Podcast generated:", data);
      // Handle successful response here
    } catch (error) {
      console.error("Error generating podcast:", error);
      // Handle error here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="card" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your podcast prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </form>
      <button type="submit" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Podcast"}
      </button>

      <div className="podcastBox">
        <ReactMarkdown>{podcast}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Form;
