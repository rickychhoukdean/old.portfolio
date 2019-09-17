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
  "Food ordering intermediary that connects customers and restaurants. Created customer and restaurant interfaces allowing the customer to order food from a list of restaurants and have the restaurant respond to them via  text (Twilio API). Made with the intention of strengthening knowledge of creating a functional express-app from the ground up.",
  "https://github.com/rickychhoukdean/scheduler/raw/master/src/images/create.png",
  ["Express", "Ajax",  "Web Sockets", "PostreSQL", "jQuery"]
);

const Scheduler = new ProjectObj(
  "Scheduler",
  "Single-page application built using React to schedule interviews connecting to a RESTFul api. Focused strengthening best practices in React by building out components with Storybook, and integration / end to end testing via Jest and Cypress.",
  "https://github.com/rickychhoukdean/scheduler/raw/master/src/images/create.png",
  ["React", "PostgreSQL", "Web Sockets"]
);

const Tweeter = new ProjectObj(
  "Tweeter",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "https://github.com/rickychhoukdean/tweeter/raw/master/Screenshots/Desktop-Screenshot.png",
  ["Express", "jQuery", "MongoDB"]
);

const TinyApp = new ProjectObj(
  "TinyApp",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "https://github.com/rickychhoukdean/tweeter/raw/master/Screenshots/Desktop-Screenshot.png",
  ["Express", "jQuery", "MongoDB"]
);

allProjects.push(Caterly);
allProjects.push(Scheduler);
allProjects.push(Tweeter);
allProjects.push(TinyApp);


export default allProjects;
