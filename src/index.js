import {createTodo } from "./todo.js";
import { createProject } from "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayProjectTabs, 
  displayTodoTabsOfCurrentProject,
} from "./dom.js";

// SET LOCAL STORAGE
const todoList = [
  createTodo(
    '0',
    '0',
    'Default Todo',
    '2024-01-31',
    'Notes show here',
    'high',
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
let currentProject = projectList[0];

localStorage.setItem('todoList', JSON.stringify(todoList));
localStorage.setItem('projectList', JSON.stringify(projectList));
localStorage.setItem('currentProject', JSON.stringify(currentProject));


// RENDER DEFAULT UI
displayTodoTabsOfCurrentProject();
displayProjectTabs();
colorProjectTab(document.querySelector('.projects div:first-of-type'));