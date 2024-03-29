import { 
  storageGetList,
  storageGetCurrentProject,
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
  sortTodoListByStatus,
  moveCheckedTodoInListOrder,
  filterTodoListForToday,
} from "./controller";


// DOM HELPER FUNCTIONS
function clearContent(node) {
  node.textContent = '';
}

function appendChildren(node, childrenArr) {
  for (const child of childrenArr) {
    node.appendChild(child)
  };
}


// FILTERED PROJECT OPTIONS
const defaultProjectsDiv = document.querySelector('.container-default-projects');

function displayDefaultProjectTabs() {
  const allTodosTab = defaultProjectsDiv.querySelector('.all-todos');
  const todayTab = defaultProjectsDiv.querySelector('.today');

  allTodosTab.setAttribute('data-id', '0');
  todayTab.setAttribute('data-id', '1');

  allTodosTab.onclick = (event) => {
    setCurrentProject(event.target);
    colorProjectTab(event.target);
    displayTodoTabsOfCurrentProject();
    displayProjectTabs();
  };
  todayTab.onclick = (event) => {
    setCurrentProject(event.target);
    colorProjectTab(event.target);
    displayTodoTabsOfCurrentProject();
    displayProjectTabs();
  }
}


// PROJECT LIST
const containerMenu = document.querySelector('.container-menu');
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  clearContent(projectsDiv);
  const projectList = storageGetList('projectList').slice(2);  // exclude default projects
  for (const project of projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    tab.classList.add('tab');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');

    tab.setAttribute('data-id', project.id);
    tab.setAttribute('data-status', '');
    deleteBtn.setAttribute('data-id', project.id);
    editBtn.setAttribute('data-id', project.id);

    titlePara.textContent = project.title;

    tab.onclick = (event) => {
      setCurrentProject(event.target);
      colorProjectTab(event.target);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openProjectEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      removeDataOfDeletedProject(event.target); 
      displayProjectTabs();

      const deletedProjectID = event.target.getAttribute('data-id');
      const currentProject = storageGetCurrentProject();
      if (currentProject.id === deletedProjectID) {
        const defaultProjectNode = containerMenu.querySelector('.tab.all-todos');
        setCurrentProject(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
      } else {
        const currentProjectNode = containerMenu.querySelector(
          `.tab[data-id="${currentProject.id}"]`
        );
        colorProjectTab(currentProjectNode);
      }
      displayTodoTabsOfCurrentProject();
      event.stopPropagation();
    };

    tab.appendChild(titlePara);
    appendChildren(tab, [editBtn, deleteBtn]);
    projectsDiv.appendChild(tab);
  };
}

function colorProjectTab(projectTabNode) {
  const allProjectTabs = document.querySelectorAll('.container-menu .tab');
  for (const tab of allProjectTabs) {
    tab.setAttribute('data-status', '');
  }
  projectTabNode.setAttribute('data-status', 'open');
}

function openProjectEditModal(btnNode) {
  const projectObj = returnProjectObj(btnNode);

  const dialog = document.querySelector('.edit-project');
  const form = dialog.querySelector('form');
  const titleInput = dialog.querySelector('input#title');
  const descriptionInput = dialog.querySelector('textarea');
  const saveBtn = dialog.querySelector('[type="submit"]');
  const cancelBtn = dialog.querySelector('[type="reset"]');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('value', projectObj.title);

  descriptionInput.textContent = projectObj.description;

  saveBtn.onclick = (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();

    // update project data in master list
    updateProjectData(
      projectObj,
      [titleInput, descriptionInput] 
    );

    // open the edited project's tab
    displayProjectTabs();
    const editedProjectNode = projectsDiv.querySelector(
      `.tab[data-id="${projectObj.id}`
    );
    setCurrentProject(editedProjectNode);
    colorProjectTab(editedProjectNode);
    displayTodoTabsOfCurrentProject();

    form.reset();
    dialog.close();
  };
  cancelBtn.onclick = () => {dialog.close()};
}


// TODO HEADER
const todoHeader = document.querySelector('.container-todos > header')
function displayTodoHeaderContent() {
  const h1 = todoHeader.querySelector('h1');
  const para = todoHeader.querySelector('p');

  const currentProject = storageGetCurrentProject();

  h1.textContent = currentProject.title;
  para.textContent = currentProject.description;
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabsOfCurrentProject() {
  displayTodoHeaderContent();
  clearContent(todosDiv);
  const projectList = storageGetList('projectList');
  const todoList = storageGetList('todoList');
  const currentProject = storageGetCurrentProject('currentProject');
  let todos;
  if (currentProject.id === projectList[0].id) {  
    todos = todoList
  } else if (currentProject.id === projectList[1].id) {
    todos = filterTodoListForToday(todoList);
  } else {
    todos = findTodosForSelectProject(currentProject);
  }
  todos = sortTodoListByStatus(todos);
  for (const todo of todos) {
    const tab = document.createElement('div');
    const headerDiv = document.createElement('div');
    const titlePara = document.createElement('p');
    const dueDatePara = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const notePara = document.createElement('p');
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
    btnsDiv.classList.add('buttons');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');
    viewModeBtn.classList.add('view-mode', 'down');

    tab.setAttribute('data-todo-id', todo.todoID);
    viewModeBtn.setAttribute('data-todo-id', todo.todoID);
    editBtn.setAttribute('data-todo-id', todo.todoID);
    deleteBtn.setAttribute('data-todo-id', todo.todoID);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('data-todo-id', todo.todoID);
    
    if (todo.priority === 'high') {
      tab.classList.add('high-priority');
    } else if (todo.priority === 'medium') {
      tab.classList.add('medium-priority');
    }
    if (todo.status === 'closed') {
      checkbox.checked = true;
      tab.classList.add('checked');
    }

    checkbox.onclick = (event) => {
      toggleTodoStatus(event.target);
      moveCheckedTodoInListOrder(event.target);
      displayTodoTabsOfCurrentProject();
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
    appendChildren(detailsDiv, [notePara]);
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
    
    const formatDueDate = () => {
      const date = (todoObj.dueDate).split('-');
      let mm = date[1];
      let dd = date[2];
      if (mm.charAt(0) === '0') mm = mm.charAt(1);
      if (dd.charAt(0) === '0') dd = dd.charAt(1);
      return  mm + '/' + dd;
    }

    titlePara.textContent = todoObj.title;
    if (todoObj.dueDate) {
      dueDatePara.textContent = formatDueDate();
    }
    notePara.textContent = todoObj.note;
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
  const todoID = btnNode.getAttribute('data-todo-id');
  const todoNode = todosDiv.querySelector(`.tab[data-todo-id="${todoID}`);
  const detailsDiv = todoNode.querySelector('.details');

  if (detailsDiv.classList.contains('hidden')) {
    detailsDiv.classList.remove('hidden');
  } else {
    detailsDiv.classList.add('hidden');
  }
}

function openTodoEditModal(btnNode) {
  const todoObj = returnTodoObj(btnNode);

  const dialog = document.querySelector('.edit-todo');
  
  const form = dialog.querySelector('form');
  const titleInput = dialog.querySelector('input#title');
  const dateInput = dialog.querySelector('input#due-date');
  const noteInput = dialog.querySelector('textarea');
  const prioritySelect = dialog.querySelector('select');
  const priorityOptionLow = dialog.querySelector('[value="low"]');
  const priorityOptionMedium = dialog.querySelector('[value="medium"]');
  const priorityOptionHigh = dialog.querySelector('[value="high"]');
  const saveBtn = dialog.querySelector('[type="submit"]');
  const cancelBtn = dialog.querySelector('[type="reset"]');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('value', `${todoObj.title}`);
  dateInput.setAttribute('value', `${todoObj.dueDate}`);

  noteInput.textContent = todoObj.note;
  
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

  saveBtn.onclick = (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    updateTodoData(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    displayTodoTabsOfCurrentProject();
    form.reset();
    dialog.close();
  };
  cancelBtn.onclick = () => dialog.close();
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
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  createNewTodo(title, dueDate, note, priority);
  displayTodoTabsOfCurrentProject();
  todoForm.reset();
  todoDialog.close();
}

const resetTodoBtn = document.querySelector(".add-todo button[type='reset']");
resetTodoBtn.onclick = () => {
  todoDialog.close(); 
};


export { 
  displayDefaultProjectTabs,
  displayProjectTabs, 
  colorProjectTab,
  displayTodoTabsOfCurrentProject
};