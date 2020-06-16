import React from "react";
import "./Project.scss";
import Tech from "./Tech/Tech";
export default function Project(props) {
  console.log(props);
  return (
    // <div
    //   className="project_title"
    // >
    //   <div className=" card card-style">
    //     <div className="link-container">
    //       <img className="card-img-top" src={props.thumbnail} alt="Project" />

    //       <span className="link-flex">
    //         <a href={props.github} target="_blank" rel="noopener noreferrer" className="link">
    //           <button className="github">
    //             <i class="fab fa-github"></i>
    //           </button>
    //         </a>
    //         <a href={props.deploy} target="_blank" rel="noopener noreferrer" className="link">
    //           <button className="deploy">
    //             <i class="fas fa-globe"></i>
    //           </button>
    //         </a>
    //       </span>
    //     </div>
    //     <h3 className="card-body" id="card-title">
    //       {props.title}
    //     </h3>
    //     <div className="card-body">
    //       <p className="card-text">{props.description}</p>
    //     </div>
    //     <div className="tech-used">
    //       <Tech tech={props.tech} />
    //     </div>
    //   </div>
    // </div>
    <div class="card">
      <div class="card__side card__side--front">
        <div class="card__picture card__picture--1">
          <img
            className="card-img-top"
            src={props.thumbnail}
            alt={props.title}
          />
        </div>
        <h4 class="card__heading">
          <span class="card__heading-span card__heading-span--1">
            {props.title}
          </span>
        </h4>
        <div class="card__details">{props.description}</div>
      </div>
      <div class="card__side card__side--back card__side--back--1">
        <div class="card__cta">
          <div class="card__tech-box">
  
          </div>
          <a href={props.deploy} class="btn btn--white">
            See live
          </a>
          <a href={props.github} class="btn btn--white">
            Check Github
          </a>
        </div>
      </div>
    </div>
  );
}
