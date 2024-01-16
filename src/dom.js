import { createProject, projectList } from "./project";
import { todoList } from "./todo";

// PROJECTS
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
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


// ADD BUTTONS
const addProjectBtn = document.querySelector("button.add-project");
const projectDialog = document.querySelector("dialog.add-project");
addProjectBtn.onclick = () => {projectDialog.show()};

const addTodoBtn = document.querySelector("button.add-todo");
addTodoBtn.onclick = () => {console.log('add todo button clicked')};


// PROJECT FORM
const projectForm = document.querySelector(".add-project form");
const projectTitleInput = document.querySelector(".add-project input");
const projectDescriptionInput = document.querySelector(".add-project textarea");

const submitProjectBtn = document.querySelector("button[type='submit']");
submitProjectBtn.onclick = (event) => {
  event.preventDefault();
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  const newProject = createProject(title, description);
  newProject.addToList();
  displayProjectTabs();
  projectForm.reset();
  projectDialog.close(); 
}

const resetProjectBtn = document.querySelector("button[type='reset']");
resetProjectBtn.onclick = () => {
  projectDialog.close(); 
};

export { displayProjectTabs, displayTodoTabs };