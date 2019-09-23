import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Fragment>
      <Landing name="Ricky Chhoukdean" subtitle="Fullstack Developer" />
      <About
        content="Hi there! I'm Ricky Chhoukdean and I have a backgroud in
              progammatic digital marketing and mathematics. When I'm not coding
              you can find me training to one day be able to finally dunk a
              basketball."
        picture="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12208569_10153107228121372_3928536360214641030_n.jpg?_nc_cat=108&_nc_oc=AQkScMyjGbDO_I0Jo7QO-nW3-YRYBnFOLA74Iqy3gjNhhRxIXAmaLhdbkx4wv1eyCdg&_nc_ht=scontent-yyz1-1.xx&oh=5b126095a25925a9b8efa873dabad35e&oe=5DF01283"
      />
      <Navbar />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
