import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    // <div className="container">
    <Fragment>
      <Landing />
      <Navbar />
      <Projects />

    </Fragment>
    // </div>
  );
}

export default App;
