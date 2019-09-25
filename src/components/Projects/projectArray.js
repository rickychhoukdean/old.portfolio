let ProjectObj = (function() {
  let nextId = 1;
  return function ProjectObj(
    title,
    description,
    thumbnail,
    tech,
    deploy,
    github
  ) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tech = tech;
    this.deploy = deploy;
    this.github = github;
  };
})();

let allProjects = [];

const Caterly = new ProjectObj(
  "Caterly",
  "Food ordering intermediary that connects customers and restaurants via text (Twilio API). Made with the intention of strengthening knowledge of creating a functional express-app from the ground up.",
  "https://i.imgur.com/Ax95QHM.jpg",
  ["Express", "Ajax", "WebSocket", "PostreSQL", "jQuery"],
  "http://cater-ly.herokuapp.com/",
  "https://github.com/ray1028/Caterly"
);

const Scheduler = new ProjectObj(
  "Scheduler",
  "Single-page application built using React to schedule interviews connecting to a RESTFul api. Focused strengthening best practices in React by building out components with Storybook, and integration / end to end testing via Jest and Cypress.",
  "https://i.gyazo.com/ac3354a1b419d9deac4673af6fbf7490.png",
  ["React", "PostgreSQL", "WebSocket"],
  "https://interviewscheduler.netlify.com",
  "https://github.com/rickychhoukdean/scheduler"
);

const Tweeter = new ProjectObj(
  "Tweeter",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "https://i.imgur.com/8Hez5zi.png",
  ["Express", "jQuery", "Ajax", "MongoDB"],
  "https://ricky-tweeter.herokuapp.com/",
  "https://github.com/rickychhoukdean/tweeter"
);

const Jungle = new ProjectObj(
  "Jungle ",
  "E-commerce application made with Ruby and the rails framework. Made with the intetion of strengthening understanding of MVC principles, Ruby and Rails.",
  "https://i.imgur.com/07ASq7N.jpg",
  ["Ruby", "Rails", "Stripe", "Postgres"],
  "https://rickyjungle.herokuapp.com/",
  "https://github.com/rickychhoukdean/jungle"
);

console.log(allProjects)

allProjects.push(Caterly);
allProjects.push(Scheduler);
allProjects.push(Tweeter);
allProjects.push(Jungle);

export default allProjects;
