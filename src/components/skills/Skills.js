import React from "react";
import { Link } from "react-router-dom";
import reactcert from "../assets/ReactCert.png";
import merncert from "../assets/MernCert.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills_section">
        <div className="skill_text">
          <h1>Skills & Certifications</h1>
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

        <div className="skills_container">
          <div className="bar">
            <p>Frontend</p>
            <div class="container">
              <div class="skills front"></div>
            </div>

            <p>React Js</p>
            <div class="container">
              <div class="skills react"></div>
            </div>

            <p>Backend</p>
            <div class="container">
              <div class="skills back"></div>
            </div>

            <p>Node Js</p>
            <div class="container">
              <div class="skills node"></div>
            </div>
          </div>

          <div className="flex">
            <div className="certificates">
              <div className="cart_card">
                <div className="card_front">
                  <h3>React, NodeJS, Express & MongoDB</h3>
                  <span>Dec.25, 2022</span>
                  <p>
                    MERN course from udemy. This course gives me a great skills
                    in both, frontend and backend
                  </p>
                </div>
                <div className="card_backend">
                  <img src={merncert} alt="react" />
                </div>
              </div>
            </div>{" "}
            <div className="certificates">
              <div className="cart_card">
                <div className="card_front">
                  <h3>React Js, Redux and Hooks</h3>
                  <span>Sep.19, 2022</span>
                  <p>
                    React course from udemy. This course gives me a great
                    introduction to ReactJS.
                  </p>
                </div>
                <div className="card_backend">
                  <img src={reactcert} alt="react" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
