import React, { useEffect } from "react";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

export default function Project() {
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
      }
    };
  }, []);

  return (
    <main className=" fixed-top">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="nav navbar-nav">
            <NavbarItem title="Projects" link="#project-section" />
            <li className="nav-item">
              <a
                className="ntext nav-link"
                href="https://resume.creddle.io/resume/7hk5dhz1slo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <NavbarItem title="About" link="#about-section" />
            {/* <NavbarItem title="Contact me!" link="#contact-section" /> */}
          </ul>
        </div>
      </nav>
    </main>
  );
}
