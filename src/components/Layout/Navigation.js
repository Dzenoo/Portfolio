import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaBars } from "react-icons/fa";
import "./Navigation.scss";

const Navigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const [theme, setTheme] = useState("light");

  const MenuOpenHandler = (ev) => {
    ev.preventDefault();

    setMenuIsVisible((prevState) => !prevState);
  };

  const activeClassNames = !menuIsVisible ? "Menu open" : "Menu closed";

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={`header ${theme}`}>
      <FaMoon onClick={toggleTheme} className="toggleTheme" />
      <div className="header__logo">
        <Link to="/">
          <h1>Dzenis Gudzevic |</h1>
        </Link>
        <FaBars className="openMenu" onClick={MenuOpenHandler} />
      </div>
      <div className="header__nav">
        <ul className={activeClassNames}>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Welcome"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
