import React from "react";
import "./Landing.scss";
import Fade from "react-reveal/Fade";

export default function Project(props) {
  return (
    <div id="overlay" className="pimg1">
      <div className="ptext">
        <span>
          <Fade top cascade duration={2000}>
            <h1 className="title">
              <span className="border trans"> {props.name} </span>
            </h1>
          </Fade>

          <Fade duration={1000} delay={500}>
            <h2 className="subtitle"> {props.subtitle} </h2>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <div className="links">
              <span>
                <a
                  href="https://github.com/rickychhoukdean"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github title-link"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/chhoukdean/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin title-link"></i>
                </a>
              </span>
            </div>
          </Fade>
        </span>
        <a href="#project-section">
          <div className="arrow bounce"></div>
        </a>
      </div>
    </div>
  );
}
