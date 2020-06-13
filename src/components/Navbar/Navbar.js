import React, { useEffect } from "react";
import "./Navbar.scss";
import Fade from "react-reveal/Fade";

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
          <Fade top cascade duration={3000}>
            <ul className="nav navbar-nav">
              {/* <li className="nav-item">
                <a className="ntext nav-link" href="#about-section">
                  About
                </a>
              </li> */}
              <li className="nav-item">
                <a className="ntext nav-link" href="#project-section">
                  Projects
                </a>
              </li>
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
              <div className="underbar"></div>
            </ul>
          </Fade>
        </div>
      </nav>
    </main>
  );
}
