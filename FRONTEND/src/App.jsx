import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

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
