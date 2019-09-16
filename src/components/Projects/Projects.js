import React, { Fragment } from "react";
import "./Projects.scss";
import Project from "./Project/Project";
import allProjects from "./projectArray";

let mapProjects = allProjects.map(x => {
  return (
    <Project
      key={x.id}
      title={x.title}
      description={x.description}
      thumbnail={x.thumbnail}
      tech={x.tech}
    />
  );
});

export default function Projects() {
  return (
    <Fragment>
      <section className="Projects">{mapProjects}</section>
    </Fragment>
  );
}
