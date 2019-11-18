import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  document.addEventListener("touchstart", function() {}, true);

  return (
    <Fragment>
      <Landing name="Ricky Chhoukdean" subtitle="Fullstack Developer" />
      <About
        content="Full-stack web developer with a background in programmatic digital marketing and mathematics. Throughout my entire life, whether it be in school or work, I have always been in contact with coding and enjoyed these moments. The entire building process from designing, problem solving, testing and finally bringing ideas to life has captivated me and now I'm all in on becoming a developer. "
        picture="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12208569_10153107228121372_3928536360214641030_n.jpg?_nc_cat=108&_nc_oc=AQkScMyjGbDO_I0Jo7QO-nW3-YRYBnFOLA74Iqy3gjNhhRxIXAmaLhdbkx4wv1eyCdg&_nc_ht=scontent-yyz1-1.xx&oh=5b126095a25925a9b8efa873dabad35e&oe=5DF01283"
      />
      <Navbar />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
