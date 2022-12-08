import React from "react";
import { motion } from "framer-motion";

import "./Skills.scss";
import SkillsImage from "../../assets/skills.png";

const Skills = () => {
  return (
    <motion.div
      className="skills__section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <h1>
        Skills & <span className="titleSpan">Education</span>
      </h1>
      <div className="wrap">
        <div className="skills__img">
          <img src={SkillsImage} />
        </div>
        <div className="skills__container">
          <div className="skills_item">
            <span>2018</span>
            <div className="wrapper">
              <h1>High School Diploma</h1>
              <p>Gimnazija, Novi Pazar</p>
            </div>
          </div>
          <div className="skills_item">
            <span>2022</span>
            <div className="wrapper">
              <h1>Online Education</h1>
              <p>Udemy certificates of completion</p>
              <p>W3Schools tutorials</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
