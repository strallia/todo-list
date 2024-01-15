class ProjectItem {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addToList() {
    projectList.push(this);
  } 

  removeFromList() {
    const index = projectList.indexOf(this);
    projectList.splice(index, 1);
  }

  edit(property, string) {
    this[property] = string;
  }
}

const projectList = [
  createProject(
    "My Todo's", 
    "Project containing all my todo's")
];

function createProject(title, description) {
  return new ProjectItem(title, description);
}

export { projectList };