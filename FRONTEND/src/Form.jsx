import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form className="card" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter your podcast prompt..." />
      </form>
      <button type="submit">Generate Podcast</button>
    </div>
  );
};

export default Form;
