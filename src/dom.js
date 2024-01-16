import { createProject, currentProject, projectList } from "./project";
import { createTodo, todoList } from "./todo";

// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
  for (const project of projectList) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.setAttribute('data-index', projectList.indexOf(project));
    tab.textContent = project.title;
    tab.onclick = (event) => {handleProjectTabClick(event)};
    projectsDiv.appendChild(tab);
  };
}

function handleProjectTabClick(event) {
  const selectedProject = event.target;
  const projectTitle = selectedProject.textContent;

  // re-display project tabs
  if (projectTitle === "All My Todo's") {
    displayTodoTabs();
  } else {
    const filteredTodoList = todoList.filter((item) => {
      return item.project === projectTitle;
    });
    displayTodoTabs(filteredTodoList);
  }

  // set current project
  const selectedProjectIndex = selectedProject.getAttribute('data-index');
  projectList[selectedProjectIndex].setAsCurrentProject();
}


// TODO LIST
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


// "ADD" BUTTONS
const addProjectBtn = document.querySelector("button.add-project");
const projectDialog = document.querySelector("dialog.add-project");
addProjectBtn.onclick = () => {projectDialog.show()};

const addTodoBtn = document.querySelector("button.add-todo");
const todoDialog = document.querySelector("dialog.add-todo");
addTodoBtn.onclick = () => {todoDialog.show()};


// PROJECT FORM
const projectForm = document.querySelector(".add-project form");
const projectTitleInput = document.querySelector(".add-project input");
const projectDescriptionInput = document.querySelector(".add-project textarea");

const submitProjectBtn = document.querySelector(".add-project button[type='submit']");
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

const resetProjectBtn = document.querySelector(".add-project button[type='reset']");
resetProjectBtn.onclick = () => {
  projectDialog.close(); 
};


// TODO FORM
const todoForm = document.querySelector(".add-todo form");
const todoTitleInput = document.querySelector(".add-todo input#title");
const todoDueDateInput = document.querySelector(".add-todo input#due-date");
const todoNoteInput = document.querySelector(".add-todo textarea");
const todoPriorityInput = document.querySelector(".add-todo select");

const submitTodoBtn = document.querySelector(".add-todo button[type='submit']");
submitTodoBtn.onclick = (event) => {
  event.preventDefault();
  const project = currentProject.title;  
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  const newTodo = createTodo(project, title, dueDate, note, priority);
  newTodo.addToList();
  displayTodoTabs();
  todoForm.reset();
  todoDialog.close();
}

const resetTodoBtn = document.querySelector(".add-todo button[type='reset']");
resetTodoBtn.onclick = () => {
  todoDialog.close(); 
};


export { displayProjectTabs, displayTodoTabs };