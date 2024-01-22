import { findIndexOfProjectInMasterList, storageGetList, storageSetItem } from "./controller";

class ProjectItem {  
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  addToList() {
    const projectList = storageGetList('projectList');
    projectList.push(this);
    storageSetItem('projectList', projectList);
  } 

  removeFromList() {
    const projectList = storageGetList('projectList');
    const index = findIndexOfProjectInMasterList(projectList, this);
    projectList.splice(index, 1);
    storageSetItem('projectList', projectList);
  }
}

function createProject(id, title, description) {
  return new ProjectItem(id, title, description);
}

export { createProject, ProjectItem };