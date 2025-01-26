import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <>
      <h1>Podcast Generator!</h1>
      <h5>
        Type in your podcast prompt and a podcast will be generated shortly
      </h5>
      <Form />
    </>
  );
}

export default App;
