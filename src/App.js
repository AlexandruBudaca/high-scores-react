import React from "react";
import "./App.css";
import allCountryScores from "./dataCountry/allCountryScores";
import Card from "./Card";

function App() {
  {
    allCountryScores.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>High Scores per Country</h1>
        {allCountryScores.map((country, index) => (
          <Card key={index} {...country} />
        ))}
      </header>
    </div>
  );
}

export default App;
