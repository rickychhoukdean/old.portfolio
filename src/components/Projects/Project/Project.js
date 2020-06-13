import React from "react";
import "./Project.scss";
import Tech from "./Tech/Tech";
export default function Project(props) {
  return (
    <div
      className="project_title"
    >
      <div className=" card card-style">
        <div className="link-container">
          <img className="card-img-top" src={props.thumbnail} alt="Project" />

          <span className="link-flex">
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="link">
              <button className="github">
                <i className="fab fa-github"></i>
              </button>
            </a>
            <a href={props.deploy} target="_blank" rel="noopener noreferrer" className="link">
              <button className="deploy">
                <i className="fas fa-globe"></i>
              </button>
            </a>
          </span>
        </div>
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
    </div>
  );
}
