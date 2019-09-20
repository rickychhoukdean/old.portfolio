import React from "react";
import "./Projects.scss";
import Project from "./Project/Project";
import allProjects from "./projectArray";
import Fade from "react-reveal/Fade";


let mapProjects = allProjects.map(x => {
  return (
    <Project
      key={x.id}
      title={x.title}
      description={x.description}
      thumbnail={x.thumbnail}
      tech={x.tech}
      site={x.site}
    />
  );
});

export default function Projects() {
  return (
    <section id="project-section" className="section-dark">
      <Fade big duration={3000}>
        <div className="Projects">{mapProjects}</div>
      </Fade>
    </section>
  );
}
