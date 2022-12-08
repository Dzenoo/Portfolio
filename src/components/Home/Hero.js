import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Hero.scss";

import img from "../../assets/PhoImg.png";
import pdf from "../../assets/Resume.jpg";

const Hero = () => {
  return (
    <motion.div
      className="hero__section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0066ff"
          fill-opacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,106.7C840,139,960,181,1080,170.7C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="hero__left">
        <span>Front end | React</span>
        <h1 className="hero__title">
          Hello! I'm Dzenis.<br></br>I love to build amazing apps.
        </h1>
        <p>
          I'm very interested in this section of programming and i hope you
          enjoy with my work! Let's browse on which technologies i'm good.
        </p>
        <div className="social">
          <h1>20+ Projects</h1>
          <h1>10+ Happy clients</h1>
          <h1>1 Year of Experience </h1>
        </div>
        <div className="hero__actions">
          <button className="download_btn">
            <a href={pdf} download="Resume.jpg">
              Download Resume
            </a>
          </button>
          <Link to="/Contact">
            <button>Let's talk</button>
          </Link>
        </div>
      </div>
      <div className="hero__right">
        <img className="phone__img" src={img} />
      </div>
    </motion.div>
  );
};

export default Hero;
