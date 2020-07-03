import React from "react";
import "./Projects.scss";
import Project from "./Project/Project";
import allProjects from "./projectArray";
import Fade from "react-reveal/Fade";

let mapProjects = allProjects.map((x) => {
  return (
    <Project
      key={x.id}
      title={x.title}
      description={x.description}
      thumbnail={x.thumbnail}
      tech={x.tech}
      github={x.github}
      deploy={x.deploy}
    />
  );
});

document.addEventListener("touchstart", function () {}, true);


export default function Projects() {
  return (
    <section id="project-section" className="section-dark">
      <div className="pimg2">
        <div className="ptext">
          <Fade cascade top duration={2000}>
            <span className="border trans ">Projects</span>
          </Fade>
        </div>
      </div>
      <div className="Projects">{mapProjects}</div>
    </section>
  );
}
