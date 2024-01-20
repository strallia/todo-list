import { currentProject, projectList } from "./project";
import { todoList } from "./todo";
import { 
  findTodosForSelectProject,
  returnTodoObj,
  returnProjectObj,
  updateTodoData,
  returnNodeListOfTodoTabs,
  toggleTodoStatus,
  removeTodoFromList,
  setCurrentProject,
  removeDataOfDeletedProject,
  createNewProject,
  createNewTodo,
  updateProjectData,
  updateTodosProjectValue
} from "./controller";


// HELPER FUNCTIONS
function clearContent(node) {
  node.textContent = '';
}

function appendChildren(node, childrenArr) {
  for (const child of childrenArr) {
    node.appendChild(child)
  };
}


// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  clearContent(projectsDiv);
  for (const project of projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    tab.classList.add('tab');
    editBtn.classList.add('edit');

    tab.setAttribute('data-title', project.title);
    tab.setAttribute('data-status', '');
    deleteBtn.setAttribute('data-title', project.title);
    editBtn.setAttribute('data-title', project.title);

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';
    editBtn.textContent = 'Edit';

    titlePara.onclick = (event) => {
      setCurrentProject(event.target.parentNode);
      colorProjectTab(event.target.parentNode);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openProjectEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      removeDataOfDeletedProject(event.target.parentNode); 
      displayProjectTabs();

      const deletedProjectTitle = event.target.getAttribute('data-title');
      if (currentProject.title === deletedProjectTitle) {
        const defaultProjectNode = projectsDiv.firstChild;
        setCurrentProject(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
        displayTodoTabsOfCurrentProject();
      } else {
        const currentProjectNode = projectsDiv.querySelector(
          `.tab[data-title="${currentProject.title}"]`
        );
        colorProjectTab(currentProjectNode);
      }
    };

    tab.appendChild(titlePara);
    if (project !== projectList[0]) {
      appendChildren(tab, [editBtn, deleteBtn]);
    }
    projectsDiv.appendChild(tab);
  };
}

function colorProjectTab(projectTabNode) {
  const allProjectTabs = document.querySelectorAll('.projects > *');
  for (const tab of allProjectTabs) {
    tab.setAttribute('data-status', '');
  }
  projectTabNode.setAttribute('data-status', 'open');
}

function openProjectEditModal(btnNode) {
  const projectObj = returnProjectObj(btnNode);

  const body = document.querySelector('body');

  const dialog = document.createElement('dialog');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const descriptionInput = document.createElement('textarea');

  dialog.classList.add('edit-project');
  descriptionInput.classList.add('description');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('value', projectObj.title);
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  descriptionInput.setAttribute('id', 'note');
  descriptionInput.setAttribute('name', 'note');
  saveBtn.setAttribute('type', 'submit');
  cancelBtn.setAttribute('type', 'reset');

  saveBtn.textContent = 'Save';
  cancelBtn.textContent = 'Cancel';
  descriptionInput.textContent = projectObj.description;

  saveBtn.onclick = (event) => {
    event.preventDefault();
    // update the todos project name
    const newTitle = titleInput.value;
    updateTodosProjectValue(projectObj, newTitle);

    // update project data in master list
    updateProjectData(
      projectObj,
      [titleInput, descriptionInput] 
    );

    // open the edited project's tab
    displayProjectTabs();
    const editedProjectNode = projectsDiv.querySelector(
      `.tab[data-title="${projectObj.title}`
    );
    setCurrentProject(editedProjectNode);
    colorProjectTab(editedProjectNode);
    displayTodoTabsOfCurrentProject();

    dialog.close();
  };
  cancelBtn.onclick = () => {dialog.close()};

  appendChildren(form, [
    titleInput,
    descriptionInput,
    saveBtn,
    cancelBtn
  ]);
  dialog.appendChild(form);
  body.appendChild(dialog);
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabsOfCurrentProject() {
  clearContent(todosDiv);
  const todos = currentProject === projectList[0] 
    ? todoList
    : findTodosForSelectProject(currentProject);
  for (const todo of todos) {
    const tab = document.createElement('div');
    const headerDiv = document.createElement('div');
    const titlePara = document.createElement('p');
    const dueDatePara = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const notePara = document.createElement('p');
    const priorityPara = document.createElement('p');
    const btnsDiv = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const viewModeBtn = document.createElement('button');
    const checkbox = document.createElement('input');

    tab.classList.add('tab');
    headerDiv.classList.add('header');
    titlePara.classList.add('title');
    dueDatePara.classList.add('due-date');
    detailsDiv.classList.add('details', 'hidden');
    notePara.classList.add('note');
    priorityPara.classList.add('priority');
    btnsDiv.classList.add('buttons');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');
    viewModeBtn.classList.add('view-mode', 'down');

    tab.setAttribute('data-title', todo.title);
    viewModeBtn.setAttribute('data-title', todo.title);
    editBtn.setAttribute('data-title', todo.title);
    deleteBtn.setAttribute('data-title', todo.title);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('data-title', todo.title);

    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'X';
    viewModeBtn.textContent = '▼';

    checkbox.onclick = (event) => {
      toggleTodoStatus(event.target);
    };
    editBtn.onclick = (event) => {
      openTodoEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      removeTodoFromList(event.target);
      displayTodoTabsOfCurrentProject();
    };
    viewModeBtn.onclick = (event) => {
      rotateViewModeBtn(event.target);
      toggleDisplayOfDetails(event.target);
    };

    appendChildren(headerDiv, [titlePara, dueDatePara]);
    appendChildren(btnsDiv, [editBtn, deleteBtn, viewModeBtn]);
    appendChildren(detailsDiv, [notePara, priorityPara]);
    appendChildren(tab, [
      checkbox, 
      headerDiv,
      btnsDiv,
      detailsDiv
    ]);
    todosDiv.appendChild(tab);
  };
  displayTodoDetails();
}

function displayTodoDetails() {
  const todosNodeList = returnNodeListOfTodoTabs();
  for (const todoNode of todosNodeList) {
    const todoObj = returnTodoObj(todoNode);

    const titlePara = todoNode.querySelector('.title');
    const dueDatePara = todoNode.querySelector('.due-date');
    const notePara = todoNode.querySelector('.note');
    const priorityPara = todoNode.querySelector('.priority');

    titlePara.textContent = todoObj.title;
    dueDatePara.textContent = todoObj.dueDate;
    notePara.textContent = todoObj.note;
    priorityPara.textContent = 'Priority: ' + todoObj.priority;
  }
}

function rotateViewModeBtn(btnNode) {
  if (btnNode.classList.contains('down')) {
    btnNode.classList.remove('down');
    btnNode.classList.add('up');
  } else {
    btnNode.classList.remove('up');
    btnNode.classList.add('down');
  }
}

function toggleDisplayOfDetails(btnNode) {
  const todoTitle = btnNode.getAttribute('data-title');
  const todoNode = todosDiv.querySelector(`.tab[data-title="${todoTitle}`);
  const detailsDiv = todoNode.querySelector('.details');

  if (detailsDiv.classList.contains('hidden')) {
    detailsDiv.classList.remove('hidden');
  } else {
    detailsDiv.classList.add('hidden');
  }
}

function openTodoEditModal(btnNode) {
  const todoObj = returnTodoObj(btnNode);

  const body = document.querySelector('body');

  const dialog = document.createElement('dialog');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const noteInput = document.createElement('textarea');
  const priorityContainer = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');
  const priorityOptionLow = document.createElement('option');
  const priorityOptionMedium = document.createElement('option');
  const priorityOptionHigh = document.createElement('option');

  dialog.classList.add('edit-todo');
  noteInput.classList.add('note');
  priorityContainer.classList.add('priority');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('value', `${todoObj.title}`);
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('value', `${todoObj.dueDate}`);
  dateInput.setAttribute('id', 'due-date');
  dateInput.setAttribute('name', 'due-date');
  noteInput.setAttribute('id', 'note');
  noteInput.setAttribute('name', 'note');
  saveBtn.setAttribute('type', 'submit');
  priorityLabel.setAttribute('for', 'priority');
  prioritySelect.setAttribute('id', 'priority');
  prioritySelect.setAttribute('name', 'priority');
  priorityOptionLow.setAttribute('value', 'low');
  priorityOptionMedium.setAttribute('value', 'medium');
  priorityOptionHigh.setAttribute('value', 'high');
  cancelBtn.setAttribute('type', 'reset');

  const currentPriority = todoObj.priority;
  let selectOption;
  if (currentPriority === 'low') {
    selectOption = priorityOptionLow;
  } else if (currentPriority === 'medium') {
    selectOption = priorityOptionMedium;
  } else {
    selectOption = priorityOptionHigh;
  };
  selectOption.setAttribute('selected','');

  saveBtn.textContent = 'Save';
  noteInput.textContent = todoObj.note;
  priorityLabel.textContent = 'Priority';
  priorityOptionLow.textContent = 'Low';
  priorityOptionMedium.textContent = 'Medium';
  priorityOptionHigh.textContent = 'High';
  cancelBtn.textContent = 'Cancel';

  saveBtn.onclick = (event) => {
    event.preventDefault();
    updateTodoData(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    displayTodoTabsOfCurrentProject();
    dialog.close();
  };
  cancelBtn.onclick = () => {
    dialog.close();
  }

  appendChildren(prioritySelect, [
    priorityOptionLow,
    priorityOptionMedium,
    priorityOptionHigh
  ]);
  appendChildren(priorityContainer, [priorityLabel, prioritySelect]);
  appendChildren(form, [
    titleInput,
    dateInput,
    noteInput,
    priorityContainer,
    saveBtn,
    cancelBtn
  ]);
  dialog.appendChild(form);
  body.appendChild(dialog);
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
  if (!projectForm.checkValidity()) return projectForm.reportValidity();

  // create new project instance
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  createNewProject(title, description);

  // open new project
  displayProjectTabs();
  const newProjectNode = projectsDiv.lastChild;
  setCurrentProject(newProjectNode);
  colorProjectTab(newProjectNode);
  displayTodoTabsOfCurrentProject();
  
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

function todaysDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = (today.getMonth() + 1).toString();
  let dd = (today.getDate()).toString();
  
  if (mm.length === 1) {mm = '0' + mm};
  if (dd.length === 1) {dd = '0' + dd};
  return yyyy + '-' + mm + '-' + dd;
}
todoDueDateInput.setAttribute('min', todaysDate());

const submitTodoBtn = document.querySelector(".add-todo button[type='submit']");
submitTodoBtn.onclick = (event) => {
  event.preventDefault();
  if (!todoForm.checkValidity()) return todoForm.reportValidity();
  const project = currentProject.title;  
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  createNewTodo(project, title, dueDate, note, priority);
  displayTodoTabsOfCurrentProject();
  todoForm.reset();
  todoDialog.close();
}

const resetTodoBtn = document.querySelector(".add-todo button[type='reset']");
resetTodoBtn.onclick = () => {
  todoDialog.close(); 
};


export { 
  displayProjectTabs, 
  colorProjectTab,
  displayTodoTabsOfCurrentProject
};