import React, { useState } from "react";

const Card = ({ name, scores }) => {
  const [toggle, setToggle] = useState(
    scores.sort((a, b) => (a.s > b.s ? -1 : 1))
  );

  const switchScores = () => {
    const newToggle = [...toggle].sort((a, b) => (a.s < b.s ? -1 : 1));
    setToggle(newToggle);
  };

  return (
    <div>
      <div className="card-country">
        <h2>HIGH SCORES: {name}</h2>
        <button onClick={switchScores}>Ascending</button>
        <div className="card-details">
          {toggle.map((score, index) => (
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
    </div>
  );
};

export default Card;
