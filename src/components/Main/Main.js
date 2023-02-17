import React, { useState } from "react";
import "./Main.css";
import MainAfter from "./MainAfter";

const helloText = "I'm Dzenis.";
const loveText = `I love to build amazing apps.`;

const Main = () => {
  const numSpans = 90;
  const spanArray = [];
  let spt = [">", ">", ">"];

  for (let i = 0; i < numSpans; i++) {
    spanArray.push(<span key={i}></span>);
  }

  return (
    <>
      <div className="main_section">
        <div className="scroll">
          <p>
            Scroll Down{"  "}
            {spt.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </p>
        </div>
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
        <div className="second_hero">{spanArray}</div>
      </div>
      <MainAfter />
    </>
  );
};

export default Main;
