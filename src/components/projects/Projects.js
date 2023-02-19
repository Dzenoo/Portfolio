import React, { useState } from "react";
import image from "../assets/3.png";

import "./Projects.css";

function Projects() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className="project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="img" />
      {showOverlay && (
        <div className="project-overlay">
          <h3>Project 1</h3>
          <p>This is created by me in 2022 exactly</p>
          <p>Technologies used: JavaScript, React</p>
          <a target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default Projects;
