import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Seker Search</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search for something..." />
        <button>Search</button>
      </div>
      <div className="results">
        <div className="result-item">
          <h3>Example Result</h3>
          <p>This is a description of the result.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
