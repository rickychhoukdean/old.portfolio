import React, { Fragment } from "react";
import "./Projects.scss";
import Project from "./Project/Project";

let ProjectObj = function() {
  let nextId = 1;
  return function ProjectObj(title, description, thumbnail, tech) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tech = tech;
  } 
}();

const Caterly = new ProjectObj(
  "Caterly",
  "Caterly desctiption",
  "Caterly thumbnail",
  ["tech", "array"]
);

const Scheduler = new ProjectObj(
  "Scheduler",
  "Scheduler desctiption",
  "Scheduler thumbnail",
  ["React", "array"]
);


export default function Projects() {
  return (
    <Fragment>
      <section className="Projects" >
        <Project
          title={Caterly.title}
          description={Caterly.description}
          thumbnail={Caterly.thumbnail}
          tech={Caterly.tech}
        />
        <Project
          title={Scheduler.title}
          description={Scheduler.description}
          thumbnail={Scheduler.thumbnail}
          tech={Scheduler.tech}
        />
      </section>
    </Fragment>
  );
}
