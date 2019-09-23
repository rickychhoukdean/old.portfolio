import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";

export default function About(props) {
  return (
    <section id="about-section" className="about-section section-dark">
      <div className="about-flex">
        <div className="about-text">
          <div className="atext">
            <Fade top cascade duration={2000}>
              <span className="border trans"> About </span>
            </Fade>
          </div>
          <Fade duration={1000} delay={1000}>
            <div className="acontent">{props.content}</div>
          </Fade>
        </div>
        <div className="about-picture-holder">
          <Fade duration={3000}>
            <img className="about-picture" src={props.picture} alt="It's me" />
          </Fade>
        </div>
      </div>
    </section>
  );
}
