import React, { useState } from "react";
import { projects } from "../helpers/helper";
import { AiOutlineGithub } from "react-icons/ai";

import "./Projects.css";

function Projects() {
  const [projectsList, setProjectsList] = useState(projects);

  return (
    <>
      <div className="project_list">
        {projectsList.map((project) => (
          <div key={project.id} className="project_item">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <a href={project.github} target="_blank" rel="noreferrer">
                <AiOutlineGithub className="github-link" />
              </a>
              <p>{project.description}</p>
              <div className="spans">
                {project.technologies.map((tech) => (
                  <>
                    <span>{tech}</span>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
