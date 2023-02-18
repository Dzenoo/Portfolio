import React, { useRef, useState, useEffect } from "react";
import "./MainAfter.css";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

const logos = [
  {
    image: img3,
    className: "html_logo",
  },

  {
    image: img2,
    className: "css_logo",
  },
  {
    image: img1,
    className: "js_logo",
  },
  {
    image: img7,
    className: "react_logo",
  },

  {
    image: img5,
    className: "node_logo",
  },
  {
    image: img4,
    className: "ex_logo",
  },
  {
    image: img6,
    className: "mongo_logo",
  },
];

const MainAfter = () => {
  const logoRefs = useRef([]);

  const handleMouseMove = (event, index) => {
    const logo = logoRefs.current[index];
    const logoRect = logo.getBoundingClientRect();
    const logoCenterX = logoRect.left + logoRect.width / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
    const dx = event.clientX - logoCenterX;
    const dy = event.clientY - logoCenterY;
    logo.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = (index) => {
    const logo = logoRefs.current[index];
    logo.style.transform = "";
  };

  return (
    <>
      <div className="about_section">
        <div className="about_text">
          <h1 className="animate">Full-Stack Wizard</h1>
          <p className="animate">
            I'm a developer, which means I'm one part magician, one part
            detective, and one part caffeine addict. Professional
            procrastinator, but somehow always get the job done.
            <br />
            <br />
            As a full-stack MERN developer, I have extensive experience building
            modern, responsive web applications that are optimized for
            performance and scalability.
            <br />
            <br />
            With a passion for solving complex problems and a deep understanding
            of the latest web development practices, I bring a wealth of
            knowledge and expertise to every project I work on.
          </p>
        </div>
        <div className="logo_list">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.image}
              className={logo.className}
              ref={(el) => (logoRefs.current[index] = el)}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainAfter;
