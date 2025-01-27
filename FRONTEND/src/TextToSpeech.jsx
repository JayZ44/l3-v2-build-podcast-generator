import React from "react";

const TextToSpeech = () => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => speak(podcast)}>Test Text-to-Speech</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
