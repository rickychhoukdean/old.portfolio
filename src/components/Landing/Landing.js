import React, { Fragment } from "react";
import "./Landing.scss";

export default function Project() {
  return (
    <Fragment>
        <div class="color-overlay"></div>
      <header className="parallax-head">
        <h1 className="parallax-content border trans ">RICKY CHHOUKDEAN</h1>
        {/* <p className="parallax-content">WELCOME </p> */}

      </header>

      <section className="about-section section-light">
      

        <div className="pimg2">
        <div className="ptext">
          
          <span className="border trans">About me</span>
        </div>
      </div>
        <div className="about-flex">
          <p className="about-text">
           Hi there! I'm Ricky Chhoukdean and I have a backgroud in progammatic digital marketing and mathematics.
          </p>
          <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12208569_10153107228121372_3928536360214641030_n.jpg?_nc_cat=108&_nc_oc=AQkScMyjGbDO_I0Jo7QO-nW3-YRYBnFOLA74Iqy3gjNhhRxIXAmaLhdbkx4wv1eyCdg&_nc_ht=scontent-yyz1-1.xx&oh=5b126095a25925a9b8efa873dabad35e&oe=5DF01283" alt="It's me" className="about-image"/>
        </div>
      </section>

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">Projects</span>
        </div>
      </div>
    </Fragment>
  );
}
