import React, { useEffect, useRef } from "react";
import "./Navbar.scss";


export default function Project() {
  //Scroll to part effect
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  const useMountEffect = fun => useEffect(fun, []);

  const myRef = useRef(null);

  useMountEffect(event => {
    scrollToRef(myRef);
  }); // Scroll on mount

  return (
    <main className=" fixed-top">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand " href="https://rickychhoukdean.github.io/">
         HOME
        </a>
        <button
          ref={myRef}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="ntext nav-link"
                href="wwww.example.com"
                onClick={event => {
                  event.preventDefault();

                  scrollToRef(myRef);
                }}
              >
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
            
            <li className="nav-item">
              <a className="ntext nav-link" href="wwww.example.com">
                About
              </a>
            </li>
            
            <li className="nav-item">
              <a className="ntext nav-link" href="wwww.example.com">
                Contact Me!
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
