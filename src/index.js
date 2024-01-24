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
      '2',
      '0',
      'First todo item',
      '2024-01-24',
      'Notes for todo items show here',
      'high',
    ),
    createTodo(
      '2',
      '1',
      'Second todo item',
      '2024-03-18',
      'Things I gotta remember about this task',
      'medium',
    ),
  ];
  const projectList = [
    createProject(
      '0',
      "All Todos", 
      ""
    ),
    createProject(
      '1',
      "Today's Todos", 
      ""
    ),
    createProject(
      '2',
      "Example Project", 
      "This is where project descriptions go"
    ),
  ];
  const currentProject = projectList[0];

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
  localStorage.setItem('projectIDCounter', 3);
  localStorage.setItem('todoIDCounter', 2);
}


// RENDER DEFAULT UI
displayDefaultProjectTabs();
displayProjectTabs();
const defaultProjectNode = document.querySelector('.container-menu .tab:first-of-type');
setCurrentProject(defaultProjectNode);
displayTodoTabsOfCurrentProject();
colorProjectTab(defaultProjectNode);