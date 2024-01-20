import { createProject, currentProject, projectList } from "./project";
import { createTodo, todoList } from "./todo";
import { 
  findTodosForCurrentProject,
  returnTodoObj,
  findProjectInstance,
  updateTodoData,
  returnNodeListOfTodoTabs
} from "./controller";


// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
  for (const project of projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');

    tab.classList.add('tab');

    tab.setAttribute('data-title', project.title);
    tab.setAttribute('data-status', '');

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';

    titlePara.onclick = (event) => {
      const projectObj = findProjectInstance(event.target.parentNode);
      projectObj.setAsCurrentProject();
      colorProjectTab(event.target.parentNode);
      setUpWireframeForAllTodos();
    };
    deleteBtn.onclick = (event) => {
      const removedProjectObj = findProjectInstance(event.target.parentNode);

      // delete todos of that project
      const removedTodos = todoList.filter((todo) => {
        return todo.project === removedProjectObj.title;
      });
      removedTodos.forEach((todo) => {todo.removeFromList()});

      // remove project from master list
      removedProjectObj.removeFromList();
      displayProjectTabs();

      // set default project as current project
      projectList[0].setAsCurrentProject();
      const defaultProjectTabNode = document.querySelector(
        `.projects > .tab[data-title="${projectList[0].title}"]`
      );
      colorProjectTab(defaultProjectTabNode);
      setUpWireframeForAllTodos();
    };

    tab.appendChild(titlePara);
    if (project !== projectList[0]) tab.appendChild(deleteBtn);
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


// TODO LIST
const todosDiv = document.querySelector('.todos');

function clearContent(node) {
  node.textContent = '';
}

function setUpWireframeForAllTodos() {
  clearContent(todosDiv);
  const todos = findTodosForCurrentProject();
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
    
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'X';
    viewModeBtn.textContent = '▼';

    checkbox.onclick = (event) => {
      const todoObj = returnTodoObj(event.target.parentNode);
      todoObj.toggleStatus();
    };
    editBtn.onclick = (event) => {
      openTodoEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      const todoObj = returnTodoObj(event.target);
      todoObj.removeFromList();
      setUpWireframeForAllTodos();
    };
    viewModeBtn.onclick = (event) => {
      rotateViewModeBtn(event.target);
      toggleDisplayOfDetails(event.target);
    };

    headerDiv.appendChild(titlePara);
    headerDiv.appendChild(dueDatePara);

    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);
    btnsDiv.appendChild(viewModeBtn);

    detailsDiv.appendChild(notePara);
    detailsDiv.appendChild(priorityPara);

    tab.appendChild(checkbox);
    tab.appendChild(headerDiv);
    tab.appendChild(btnsDiv);
    tab.appendChild(detailsDiv);

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
    setUpWireframeForAllTodos();
    dialog.close();
  };
  cancelBtn.onclick = () => {
    dialog.close();
  }

  prioritySelect.appendChild(priorityOptionLow);
  prioritySelect.appendChild(priorityOptionMedium);
  prioritySelect.appendChild(priorityOptionHigh);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  form.appendChild(titleInput);
  form.appendChild(dateInput);
  form.appendChild(noteInput);
  form.appendChild(priorityContainer);
  form.appendChild(saveBtn);
  form.appendChild(cancelBtn);

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

  // create instance of new project
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  const newProject = createProject(title, description);
  newProject.addToList();

  // set new project instance as current project
  newProject.setAsCurrentProject();

  // re-display project tabs
  displayProjectTabs();
  const newProjectTabNode = document.querySelector(
    `.projects > .tab[data-title="${title}"]`
  );
  colorProjectTab(newProjectTabNode);

  // display new project's empty todo list
  setUpWireframeForAllTodos();
  
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
  setUpWireframeForAllTodos();
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
  setUpWireframeForAllTodos
};