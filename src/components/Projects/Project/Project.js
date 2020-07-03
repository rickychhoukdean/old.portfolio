import React from "react";
import "./Project.scss";
import Tech from "./Tech/Tech";
export default function Project(props) {
  return (
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
        <div className="tech-used">
          <Tech tech={props.tech} />
        </div>
      </div>
      <div class="card__side card__side--back card__side--back--1">
        <div class="card__cta">
          <div class="card__tech-box">More information</div>
          <div class="card__more-info">
            <div>
              <a
                href={props.deploy}
                class="cbtn cbtn--white"
                target="_blank"
                rel="noopener noreferrer"
              >
                See live
              </a>
            </div>
            <div>
              <a
                href={props.github}
                class="cbtn cbtn--white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
