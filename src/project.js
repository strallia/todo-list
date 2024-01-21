class ProjectItem {  
  constructor(id, title, description) {
    this.id = id;
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

  setAsCurrentProject() {
    currentProject = this;
  }
}

function createProject(id, title, description) {
  return new ProjectItem(id, title, description);
}

// An array of ProjectItem instances
const projectList = [
  createProject(
    '0',
    "All My Todos", 
    "Project containing all my todo's"
  ),
  createProject(
    '1',
    "Another Project", 
    "Project containing todos for another project"
  ),
];

let currentProject = projectList[0];

export { projectList, createProject, currentProject };