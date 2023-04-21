import "./App.css";
import React from "react";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />

      <footer className="App-footer">
        <a
          className="App-link"
          href="https://github.com/marinamorcos92/react-project"
          target="_blank"
        >
          Open source code
        </a>
        coded by Marina Morcos
      </footer>
    </div>
  );
}

export default App;
