const projectList = [];

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

function createProject(title, description) {
  return new ProjectItem(title, description);
}

export { projectList };

const project1 = createProject('proj1', 'hello');
const project2 = createProject('proj2', 'hello');

project1.addToList();
project2.addToList();

console.table(projectList);

project2.edit('description', 'new proj2');
console.table(projectList);