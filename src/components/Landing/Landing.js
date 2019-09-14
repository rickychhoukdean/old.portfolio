import React, { Fragment } from "react";
import "./Landing.scss";

export default function Project() {
  return (
    <Fragment>
      <header className="parallax-head">
        <h1 className="parallax-content ">Ricky Chhoukdean</h1>
        <p className="parallax-content">WELCOME </p>
      </header>

      <section className="about-section section-light">
      

        <div class="pimg2">
        <div class="ptext">
          <span class="border trans">About me</span>
        </div>
      </div>
        <div className="about-flex">
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora
            facere dolores nisi facilis consequatur, odio hic minima nostrum.
            Perferendis eos earum praesentium, blanditiis sapiente labore
            aliquam ipsa architecto vitae. Minima soluta temporibus voluptates
            inventore commodi cumque esse suscipit optio aliquam et, dolorem a
            cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde
            eveniet placeat quisquam blanditiis voluptatem doloremque fugiat
            dolor repellendus ratione in. Distinctio provident dolorem modi
            cumque illo enim quidem tempora deserunt nostrum voluptate labore
            repellat quisquam quasi cum suscipit dolore ab consequuntur, ad
            porro earum temporibus. Laborum ad temporibus ex, omnis!
          </p>
          <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12208569_10153107228121372_3928536360214641030_n.jpg?_nc_cat=108&_nc_oc=AQkScMyjGbDO_I0Jo7QO-nW3-YRYBnFOLA74Iqy3gjNhhRxIXAmaLhdbkx4wv1eyCdg&_nc_ht=scontent-yyz1-1.xx&oh=5b126095a25925a9b8efa873dabad35e&oe=5DF01283" alt="It's me" className="about-image"/>
        </div>
      </section>

      <div class="pimg2">
        <div class="ptext">
          <span class="border trans">Projects</span>
        </div>
      </div>
    </Fragment>
  );
}
