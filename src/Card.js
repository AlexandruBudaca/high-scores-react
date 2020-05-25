import React from "react";

const Card = (country) => {
  return (
    <div className="card-country">
      <h2>HIGH SCORES: {country.name}</h2>
      <div className="card-details">
        {country.scores.map((score, index) => (
          <div key={index} className="card-scores">
            <div className="score-name">
              <h3>{score.n.toUpperCase()}</h3>
            </div>
            <div className="score">
              <h3>{score.s}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
