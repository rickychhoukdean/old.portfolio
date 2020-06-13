import React from "react";
import "./Landing.scss";
import Fade from "react-reveal/Fade";
import video1 from "./Cn-tower.mp4";
import video2 from "./Cn-tower.webm";

export default function Project(props) {
  return (
    <section className="section-landing">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
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
    </section>
  );
}
