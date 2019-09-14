import React from "react";
import "./Navbar.scss";

export default function Project() {
  return (
    <main className="navbar-main">
   <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">

<a class="navbar-brand " href="#"><i class="fas fa-home"></i> Ricky Chhoukdean</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>



<div class="collapse navbar-collapse" id="  ">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item"> <a class="nav-link" href="wwww.example.com">My Projects</a> </li>
        <li class="nav-item"> <a class="nav-link" href="wwww.example.com">Resume</a> </li>
        <li class="nav-item"> <a class="nav-link" href="wwww.example.com">About</a> </li>
        <li class="nav-item"> <a class="nav-link" href="wwww.example.com">Contact Me!</a> </li>
</ul>
</div>
</nav>
    </main>
  );
}
