import React from "react";
import "./Project.scss";
import Tech from"./Tech/Tech"
export default function Project() {
  return (
    <main className="project_title">
      <div className="card card-style">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/640x360"
          alt="Project"
        />
        <h3 className="card-body" id="card-title">Body Title</h3>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="tech-used">
 
<Tech />
<Tech />
<Tech />

        </div>
      </div>
    </main>
  );
}
