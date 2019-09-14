import React, { Fragment } from "react";
import "./Projects.scss";
import Project from "./Project/Project";

export default function Projects() {
  return (
    <Fragment>
      <section className="Projects">
        <Project />
        <Project />

        <Project />
        <Project />
        <Project />

      </section>
    </Fragment>
  );
}
