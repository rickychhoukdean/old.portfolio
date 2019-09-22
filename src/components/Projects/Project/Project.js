import React from "react";
import "./Project.scss";
import Tech from "./Tech/Tech";
export default function Project(props) {
  return (
    <a
      href={props.site}
      className="project_title"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card card-style">
        <img className="card-img-top" src={props.thumbnail} alt="Project" />
        <h3 className="card-body" id="card-title">
          {props.title}
        </h3>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
        <div className="tech-used">
          <Tech tech={props.tech} />
        </div>
      </div>
    </a>
  );
}
