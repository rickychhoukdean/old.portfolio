import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Fragment>
      <Landing />
      <Navbar />
        <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
