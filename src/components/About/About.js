import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section className="about-section section-dark">
      <div className="about-flex">
        <div className="about-text">
          <div className="atext">
            <Fade top cascade duration={2000}>
              <span className="border trans"> About </span>
            </Fade>
          </div>
          <Fade duration={1000} delay={1000}>
            <div className="acontent">
              Hi there! I'm Ricky Chhoukdean and I have a backgroud in
              progammatic digital marketing and mathematics. When I'm not coding
              you can find me training to one day be able to finally dunk a
              basketball.
            </div>
          </Fade>
        </div>
        <div className="about-picture-holder">
          <Fade duration={3000}>
            <img
              className="about-picture"
              src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12208569_10153107228121372_3928536360214641030_n.jpg?_nc_cat=108&_nc_oc=AQkScMyjGbDO_I0Jo7QO-nW3-YRYBnFOLA74Iqy3gjNhhRxIXAmaLhdbkx4wv1eyCdg&_nc_ht=scontent-yyz1-1.xx&oh=5b126095a25925a9b8efa873dabad35e&oe=5DF01283"
              alt="It's me"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}
