import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";
import { AppContext } from "../../context/app-context";
import logo from "../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const appCtx = useContext(AppContext);
  const { setIsLoading, isMenu } = appCtx;

  const navigationClasses = !isMenu
    ? "navigation_sidebar hide"
    : "navigation_sidebar show";

  return (
    <>
      <div className={navigationClasses}>
        <Link
          to="/"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
        <p>
          Full stack <br />
          developer
        </p>
        <ul className="menu">
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <AiOutlineProject />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <AiOutlineFileText />
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <IoIosCodeWorking />
              Skills
            </Link>
          </li>
        </ul>

        <div className="icons">
          <a href="https://github.com/Dzenoo" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dzenis-gudzevic-41460b244/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
