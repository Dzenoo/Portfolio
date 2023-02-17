import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="loading-overlay">
      <h1 className="wl_text">
        <div className="message">
          <div className="word1">Hello!</div>
          <div className="word2">Hola!</div>
          <div className="word3">Bonjour!</div>
        </div>
      </h1>
    </div>
  );
};

export default Welcome;
