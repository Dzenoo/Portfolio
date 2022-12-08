import React, { useState } from "react";
import { motion } from "framer-motion";

import ProjectItem from "./ProjectItem";
import ProjectsData from "./ProjectsData";
import "./Projects.scss";

const Projects = () => {
  const [projekti, setProjekti] = useState(ProjectsData);

  const filterProject = (itemKategorija) => {
    const abdejtovaniProjekti = ProjectsData.filter((trProjekat) => {
      return trProjekat.kategorija === itemKategorija;
    });
    setProjekti(abdejtovaniProjekti);
  };
  return (
    <motion.div
      className="project__section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <h1>
        My <span>Work</span>
      </h1>
      <div className="buttons">
        <button onClick={() => filterProject("Website")}>Websites</button>
        <button onClick={() => filterProject("App")}>Applications</button>
        <button onClick={() => filterProject("Game")}>Games</button>
      </div>
      <div className="wrapper">
        {projekti.map((projekat) => {
          return (
            <div className="item">
              <ProjectItem
                key={projekat.id}
                title={projekat.name}
                image={projekat.image}
                description={projekat.desc}
                link={projekat.link}
                category={projekat.kategorija}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
