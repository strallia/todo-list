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


// A project and its todos must have the same id
// Starts at 2 b/c default projects have the previous id numbers
let projectIDCounter = 2;
function assignIDForProject() {
  const id = projectIDCounter.toString();
  ++projectIDCounter;
  return id;
}
function assignTodoProjectID() {
  const currentProject = storageGetCurrentProject();
  return currentProject.id;
}


// Every todo has a separate todoID to differentiate it from other todos
let todoIDCounter = 3;
function assignTodoID() {
  const id = todoIDCounter.toString();
  ++todoIDCounter;
  return id;
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
  assignIDForProject,
  assignTodoProjectID,
  assignTodoID
};