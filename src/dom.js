import { createProject, currentProject, projectList } from "./project";
import { createTodo } from "./todo";
import { findTodosForCurrentProject, removeTodoFromMasterList } from "./controller";


// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
  for (const project of projectList) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.setAttribute('data-index', projectList.indexOf(project));
    tab.setAttribute('data-status', '');
    tab.textContent = project.title;
    tab.onclick = (event) => {
      renderOpenProject(event.target)
    };
    projectsDiv.appendChild(tab);
  };
}

function colorProjectTab(projectNode) {
  const allProjectTabs = document.querySelectorAll('.projects > *');
  for (const tab of allProjectTabs) {
    tab.setAttribute('data-status', '');
  }
  projectNode.setAttribute('data-status', 'open');
}

function renderOpenProject(projectNode) {
  // set current project
  const selectedProjectIndex = projectNode.getAttribute('data-index');
  projectList[selectedProjectIndex].setAsCurrentProject();
  
  colorProjectTab(projectNode);
  displayTodoTabs();
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabs() {
  todosDiv.textContent = '';
  const todos = findTodosForCurrentProject();
  for (const todo of todos) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const dueDateDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const noteDiv = document.createElement('div');

    tab.classList.add('tab');
    deleteBtn.classList.add('delete');
    noteDiv.classList.add('note');

    titlePara.textContent = todo.title;
    dueDateDiv.textContent = todo.dueDate;
    deleteBtn.textContent = 'X';
    noteDiv.textContent = todo.note;

    deleteBtn.onclick = (event) => {
      removeTodoFromMasterList(event);
      displayTodoTabs();
    };

    tab.appendChild(titlePara);
    tab.appendChild(dueDateDiv);
    tab.appendChild(deleteBtn);
    tab.appendChild(noteDiv);
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

  // create instance of new project
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  const newProject = createProject(title, description);
  newProject.addToList();

  // re-display project tabs
  displayProjectTabs();

  // set visuals for opening newly added project
  const indexOfNewProject = projectList.length - 1;
  const nodeOfNewProject = document.querySelector(`[data-index="${indexOfNewProject}"]`);
  renderOpenProject(nodeOfNewProject);

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


export { 
  displayProjectTabs, 
  displayTodoTabs, 
  colorProjectTab
};