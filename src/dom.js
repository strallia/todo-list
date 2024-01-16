import { projectList } from "./project";
import { todoList } from "./todo";

// PROJECTS
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  for (const project of projectList) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = project.title;
    tab.onclick = (event) => {handleProjectTabClick(event)};
    projectsDiv.appendChild(tab);
  };
}

function handleProjectTabClick(event) {
  const projectTitle = event.target.textContent;

  if (projectTitle === "All My Todo's") {
    displayTodoTabs();
    return;
  }

  const filteredTodoList = todoList.filter((item) => {
    return item.project === projectTitle;
  });
  displayTodoTabs(filteredTodoList);
}


// TODOS
const todosDiv = document.querySelector('.todos');

function displayTodoTabs(listArr = todoList) {
  todosDiv.textContent = '';

  for (const todo of listArr) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = todo.title;
    todosDiv.appendChild(tab);
  };
}

export { displayProjectTabs, displayTodoTabs };