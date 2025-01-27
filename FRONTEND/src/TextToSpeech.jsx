import React from "react";
import { useState } from "react";

const TextToSpeech = ({ podcast }) => {
  const [readSpeed, setReadSpeed] = useState(1);
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = readSpeed;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    window.speechSynthesis.pause();
  };

  const resumeSpeech = () => {
    window.speechSynthesis.resume();
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <div>
        <button onClick={() => speak(podcast)}>Read Podcast Aloud</button>
        <span>
          <button onClick={pauseSpeech}>Pause</button>
          <button onClick={resumeSpeech}>Resume</button>
          <button onClick={stopSpeech}>Stop</button>
        </span>
        <input
          type="range"
          min="0.1"
          max="3.5"
          step="0.1"
          defaultValue="1"
          onChange={(event) => {
            setReadSpeed(event.target.value);
          }}
        />
        <div>Read Speed: {readSpeed}</div>
      </div>
    </div>
  );
};

export default TextToSpeech;
