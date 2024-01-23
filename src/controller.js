// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts

import { createProject } from "./project";
import { createTodo } from "./todo";

function storageGetList(listString) {
  const plainList = JSON.parse(localStorage.getItem(listString));
  const instantiatedList = plainList.map((plainObj) => {
    if (listString === 'projectList') {
      const id = plainObj.id;
      const title = plainObj.title;
      const description = plainObj.description;
      return createProject(id, title, description);
    } else if (listString === 'todoList') {
      const projectID = plainObj.projectID;
      const todoID = plainObj.todoID;
      const title = plainObj.title;
      const dueDate = plainObj.dueDate;
      const note = plainObj.note;
      const priority = plainObj.priority;
      const status = plainObj.status;
      return createTodo(projectID, todoID, title, dueDate, note, priority, status);
    }
  })
  return instantiatedList;
}

function storageGetCurrentProject() {
  const plainObj = JSON.parse(localStorage.getItem('currentProject'));
  const id = plainObj.id;
  const title = plainObj.title;
  const description = plainObj.description;
  const instantiatedObj = createProject(id, title, description);
  return instantiatedObj;
}

function storageGetIDCounter(typeString) {
  return localStorage.getItem(typeString);
}

function storageSetItem(keyString, value) {
  localStorage.setItem(keyString, JSON.stringify(value));
}

function findIndexOfTodoInMasterList(todoList, todoObj) {
  const index = todoList.map((e) => e.todoID).indexOf(todoObj.todoID);
  return index;
}

function findIndexOfProjectInMasterList(projectList, projectObj) {
  const index = projectList.map((e) => e.id).indexOf(projectObj.id);
  return index;
}

function findTodosForSelectProject(projectObj) {
  const projectID = projectObj.id;
  const todoList = storageGetList('todoList');
  const filteredTodoList = todoList.filter((todo) => {
    return todo.projectID === projectID;
  });
  return filteredTodoList;
}

function returnTodoObj(node) {
  const todoID = node.getAttribute('data-todo-id');
  const todoList = storageGetList('todoList');
  const todoObj = todoList.find((todo) => {
    return todo.todoID === todoID;
  });
  return todoObj;
}

function returnProjectObj(projectTabNode) {
  const projectID = projectTabNode.getAttribute('data-id');
  const projectList = storageGetList('projectList');
  const projectObj = projectList.find((project) => {
      return project.id === projectID;
  });
  return projectObj;
}

function updateTodoData(todoObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, dueDate, note, priority] = valuesArr;
  const updatedObj = {
    projectID: todoObj.projectID,
    todoID: todoObj.todoID,
    title, 
    dueDate,
    note,
    priority,
    status: todoObj.status
  }
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj);
  todoList[index] = updatedObj;
  storageSetItem('todoList', todoList);
}

function updateProjectData(projectObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, description] = valuesArr;
  const updatedObj = {
    id: projectObj.id,
    title, 
    description
  }
  const projectList = storageGetList('projectList');
  const index = findIndexOfProjectInMasterList(projectList, projectObj);
  projectList[index] = updatedObj;
  storageSetItem('projectList', projectList);
}

function returnNodeListOfTodoTabs() {
  const todosDiv = document.querySelector('.todos');
  const nodeList = todosDiv.querySelectorAll('.tab');
  return [...nodeList];
}

function toggleTodoStatus(node) {
  const todoObj = returnTodoObj(node);
  let newStatus;
  if (node.checked) {
    newStatus = 'closed';
  } else {
    newStatus = 'open'
  }
  const updatedObj = {
    projectID: todoObj.projectID,
    todoID: todoObj.todoID,
    title: todoObj.title, 
    dueDate: todoObj.dueDate,
    note: todoObj.note,
    priority: todoObj.priority,
    status: newStatus
  }
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj)
  todoList[index] = updatedObj;
  storageSetItem('todoList', todoList);
}

function removeTodoFromList(node) {
  const todoObj = returnTodoObj(node);
  todoObj.removeFromList();
}

function setCurrentProject(node) {
  const projectObj = returnProjectObj(node);
  storageSetItem('currentProject', projectObj);
}

function removeDataOfDeletedProject(node) {
  const removedProjectObj = returnProjectObj(node);
  const todoList = storageGetList('todoList');
  const removedTodos = todoList.filter((todo) => {
    return todo.projectID === removedProjectObj.id;
  });
  removedTodos.forEach((todo) => {todo.removeFromList()});
  removedProjectObj.removeFromList();
}

function createNewProject(title, description) {
  const newProject = createProject(assignIDForProject(), title, description);
  newProject.addToList();
}

function createNewTodo(title, dueDate, note, priority) {
  const newTodo = createTodo(
    assignTodoProjectID(), assignTodoID(), title, dueDate, note, priority
  );
  newTodo.addToList();
}

function sortTodoListByStatus(todos) {
  const openTodos = todos.filter((todo) => todo.status === 'open');
  const closedTodos = todos.filter((todo) => todo.status === 'closed');
  const sortedList = [...openTodos, ...closedTodos];
  return sortedList;
}

function filterTodoListForToday(todos) {
  const date = new Date();
  const yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();

  if (mm.length === 1) {
    mm = '0' + mm.toString();
  }
  if (dd.length === 1) {
    dd = '0' + dd.toString();
  }
  const today = yyyy + '-' + mm + '-' + dd;
  
  const filteredList = todos.filter((todo) => {
    return todo.dueDate === today;
  })
  return filteredList;
}

function moveCheckedTodoInListOrder(node) {
  const todoObj = returnTodoObj(node);
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj);
  todoList.splice(index, 1);
  if (todoObj.status === 'closed') todoList.push(todoObj);
  if (todoObj.status === 'open') todoList.unshift(todoObj);
  storageSetItem('todoList', todoList);
}


// A project and its todos must share the same id
function assignIDForProject() {
  let id = +storageGetIDCounter('projectIDCounter');
  let incrementID = id + 1
  storageSetItem('projectIDCounter', incrementID);
  return id.toString();
}
function assignTodoProjectID() {
  const currentProject = storageGetCurrentProject();
  return currentProject.id;
}


// Every todo has a separate todoID to differentiate it from other todos
function assignTodoID() {
  let id = +storageGetIDCounter('todoIDCounter');
  let incrementID = id + 1
  storageSetItem('todoIDCounter', incrementID);
  return id.toString();
}


export { 
  storageGetList,
  storageGetCurrentProject,
  storageSetItem,
  findIndexOfTodoInMasterList,
  findIndexOfProjectInMasterList,
  findTodosForSelectProject,
  returnTodoObj,
  returnProjectObj,
  updateTodoData,
  updateProjectData,
  returnNodeListOfTodoTabs,
  toggleTodoStatus,
  removeTodoFromList,
  setCurrentProject,
  removeDataOfDeletedProject,
  createNewProject,
  createNewTodo,
  sortTodoListByStatus,
  filterTodoListForToday,
  moveCheckedTodoInListOrder,
  assignIDForProject,
  assignTodoProjectID,
  assignTodoID
};