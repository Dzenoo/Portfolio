import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation_sidebar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <p>
        Full stack <br />
        developer
      </p>
      <ul className="menu">
        <li>
          <Link to="/">
            <AiOutlineHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <AiOutlineProject />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <AiOutlineFileText />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <IoIosCodeWorking />
            Skills
          </Link>
        </li>
      </ul>

      <div className="icons">
        <a href="https://github.com/Dzenoo" target="_blank">
          <AiOutlineGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dzenis-gudzevic-41460b244/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
