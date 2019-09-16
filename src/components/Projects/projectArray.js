let ProjectObj = (function() {
  let nextId = 1;
  return function ProjectObj(title, description, thumbnail, tech) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tech = tech;
  };
})();

let allProjects = [];

const Caterly = new ProjectObj(
  "Caterly",
  "Caterly desctiption",
  "Caterly thumbnail",
  ["Express", "eJS", "Javascript", "Ajax",  "Web Sockets", "SASS", "PostreSQL", "jQuery"]
);

const Scheduler = new ProjectObj(
  "Scheduler",
  "Single-page application built using React to schedule interviews connecting to a RESTFul api. Focused strengthening best practices in React by building out components with Storybook, and integration / end to end testing via Jest and Cypress.",
  "Scheduler thumbnail",
  ["React", "PostgreSQL", "Web Sockets"]
);

const Tweeter = new ProjectObj(
  "Tweeter",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "Scheduler thumbnail",
  ["HTML", "CSS", "Express", "jQuery", "MongoDB"]
);

allProjects.push(Caterly);
allProjects.push(Scheduler);
allProjects.push(Tweeter);

export default allProjects;
