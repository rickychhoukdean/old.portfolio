import React, {Fragment} from "react";
import logo from "./logo.svg";
import "./App.css";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Project />
    </Fragment>
  );
}

export default App;
