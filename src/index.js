import {createTodo } from "./todo.js";
import { createProject } from "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayDefaultProjectTabs,
  displayProjectTabs, 
  displayTodoTabsOfCurrentProject,
} from "./dom.js";
import { setCurrentProject, storageGetList, storageSetItem } from "./controller.js";


// INITIALIZE LOCAL STORAGE
if (!localStorage.length) {
  const todoList = [
    createTodo(
      '0',
      '0',
      'Default Todo',
      '2024-01-31',
      'Notes show here',
      'high',
      'closed'
    ),
    createTodo(
      '1',
      '1',
      'First Todo Item for Sub-project',
      '2024-01-16',
      'Some random note for this todo',
      'medium',
    ),
    createTodo(
      '1',
      '2',
      'Second Todo Item for Sub-project',
      '2024-02-22',
      'Things I gotta remember about this task',
      'medium',
    ),
  ];
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
  const currentProject = projectList[0];

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
  localStorage.setItem('projectIDCounter', 2);
  localStorage.setItem('todoIDCounter', 3);
}


// RENDER DEFAULT UI
displayDefaultProjectTabs();
displayProjectTabs();
const defaultProjectNode = document.querySelector('.container-menu .tab:first-of-type');
setCurrentProject(defaultProjectNode);
displayTodoTabsOfCurrentProject();
colorProjectTab(defaultProjectNode);