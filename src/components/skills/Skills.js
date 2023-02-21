import React from "react";
import { Link } from "react-router-dom";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills_section">
        <div className="skill_text">
          <h1>Skills & Experience</h1>
          <p>
            With over a year of experience in web development, I have worked
            with clients to build a variety of dynamic, responsive web
            applications using the latest tools and technologies. Though I have
            not worked for a company, I have gained valuable experience through
            my work with clients, and have honed my skills
          </p>
          <p>
            In addition to my technical skills, I am a dedicated and
            detail-oriented developer who takes pride in producing high-quality
            work. I am always eager to expand my skill set and take on new
            challenges, and am confident in my ability to create engaging and
            high-performance web applications that meet the needs of businesses
            and users alike.
          </p>

          <a href="https://www.linkedin.com/in/dzenis-gudzevic-41460b244/">
            Visit my <span className="lnk">Linkedin</span> profile or
            <Link to="/contact" className="lnk">
              {" "}
              contact me
            </Link>
          </a>
        </div>

        <div className="skills_show_section"></div>
      </div>
    </>
  );
};

export default Skills;
