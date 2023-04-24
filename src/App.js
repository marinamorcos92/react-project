import "./App.css";
import React from "react";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />

      <p className="App-footer">
        Coded by Marina Morcos{" "}
        <a
          className="App-link"
          href="https://github.com/marinamorcos92/react-project"
          target="_blank"
        >
          open source code
        </a>
      </p>
    </div>
  );
}

export default App;
