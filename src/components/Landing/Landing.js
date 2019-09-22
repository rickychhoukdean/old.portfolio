import React from "react";
import "./Landing.scss";
import Fade from "react-reveal/Fade";

export default function Project(props) {
  return (
    <div id="overlay" className="pimg1">
      <div className="ptext">
        <span>
          <div className="title">
            <Fade top cascade duration={2000}>
              <span className="border trans"> {props.name} </span>
            </Fade>
          </div>

          <Fade duration={1000} delay={1000}>
            <div className="subtitle"> {props.subtitle} </div>
          </Fade>
          <Fade duration={1000} delay={2000}>
            <div className="links">
              <i className="fab fa-github title-link"> </i>
              <i className="fab fa-linkedin title-link"></i>
            </div>
          </Fade>
        </span>
        <div className="arrow bounce" onClick={downArrow}></div>
      </div>
    </div>
  );
}
