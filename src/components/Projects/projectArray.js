let ProjectObj = (function() {
  let nextId = 1;
  return function ProjectObj(title, description, thumbnail, tech, site) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tech = tech;
    this.site = site;
  };
})();

let allProjects = [];

const Caterly = new ProjectObj(
  "Caterly",
  "Food ordering intermediary that connects customers and restaurants allowing the customer to order food from a list of restaurants and have the restaurant respond to them via text (Twilio API). Made with the intention of strengthening knowledge of creating a functional express-app from the ground up.",
  "https://i.imgur.com/Ax95QHM.jpg",
  ["Express", "Ajax",  "Web Sockets", "PostreSQL", "jQuery"],
  "placeholder.com"
);

const Scheduler = new ProjectObj(
  "Scheduler",
  "Single-page application built using React to schedule interviews connecting to a RESTFul api. Focused strengthening best practices in React by building out components with Storybook, and integration / end to end testing via Jest and Cypress.",
  "https://i.gyazo.com/ac3354a1b419d9deac4673af6fbf7490.png",
  ["React", "PostgreSQL", "Web Sockets"],
  "https://interviewscheduler.netlify.com"
);

const Tweeter = new ProjectObj(
  "Tweeter",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "https://i.imgur.com/8Hez5zi.png",
  // "https://i.imgur.com/M7LmSwD.png",
  ["Express", "jQuery", "MongoDB"],
  "test"
);

const TinyApp = new ProjectObj(
  "TinyApp",
  "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML and CSS .",
  "https://i.imgur.com/mAw0VtX.jpg",
  ["Express", "jQuery", "MongoDB"],
  "test"
);

allProjects.push(Caterly);
allProjects.push(Scheduler);
allProjects.push(Tweeter);
allProjects.push(TinyApp);


export default allProjects;
