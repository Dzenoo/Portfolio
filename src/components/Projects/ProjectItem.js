import React from "react";

import Card from "../UI/Card";
import "./ProjectItem.scss";

import { FaGithub } from "react-icons/fa";

const ProjectItem = (props) => {
  return (
    <Card className="item">
      <div className="image">
        <img src={props.image} alt={props.title} />
        <span className="category">{props.category}</span>
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="actions">
        <p>{props.description}</p>
        <a href={props.link}>
          <FaGithub />
        </a>
      </div>
    </Card>
  );
};

export default ProjectItem;
