import React from "react";
import Fade from "react-reveal/Fade";


export default function NavbarItem(props) {
  return (
    <Fade top cascade duration={2000}>

    <li className="nav-item">
      <a className="ntext nav-link" href={props.link}>
        {props.title}
      </a>
    </li>
    </Fade>
  );
}
