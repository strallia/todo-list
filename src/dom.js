import { projectList } from "./project";
import { todoList } from "./todo";

// PROJECTS
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  for (const project of projectList) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = project.title;
    projectsDiv.appendChild(tab);
  };
}


// TODOS
const todosDiv = document.querySelector('.todos');

function displayTodoTabs() {
  for (const todo of todoList) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = todo.title;
    todosDiv.appendChild(tab);
  };
}

export { displayProjectTabs, displayTodoTabs };