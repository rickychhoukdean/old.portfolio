import React from "react";
import "./Tech.scss";

export default function Tech(props) {
  if (props.tech) {
    return props.tech.map(x => {
      return <span className="btn btn-outline-secondary tech">{x}</span>;
    });
  }
}
