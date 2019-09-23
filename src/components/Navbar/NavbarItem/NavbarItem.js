import React from "react";

export default function NavbarItem(props) {
  return (
    <li className="nav-item">
      <a className="ntext nav-link" href={props.link}>
        {props.title}
      </a>
    </li>
  );
}
