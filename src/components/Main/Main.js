import React from "react";
import "./Main.css";

const Main = () => {
  const helloText = "I'm Dzenis.";
  const loveText = `I love to build amazing apps.`;

  return (
    <div className="main_section">
      <div className="text">
        <h1>
          Hello!
          <br />
          {helloText.split(" ").map((word, index) => (
            <span key={index}>
              {word.split("").map((char, index) => (
                <span key={index} className="char">
                  {char}
                </span>
              ))}
              {index < loveText.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
          <br />
          {loveText.split(" ").map((word, index) => (
            <span key={index}>
              {word.split("").map((char, index) => (
                <span key={index} className="char">
                  {char}
                </span>
              ))}
              {index < loveText.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>
        <p className="magician">
          MERN Stack Magician: Crafting Powerful Web Applications
        </p>
        <button>Contact me!</button>
      </div>
    </div>
  );
};

export default Main;
