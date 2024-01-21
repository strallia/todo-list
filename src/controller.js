// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts

import { currentProject, projectList, createProject } from "./project";
import { todoList, createTodo } from "./todo";

function findTodosForSelectProject(projectObj) {
  const projectID = projectObj.id;
  const filteredTodoList = todoList.filter((todo) => {
    return todo.projectID === projectID;
  });
  return filteredTodoList;
}

function returnTodoObj(node) {
  const todoID = node.getAttribute('data-todo-id');
  const todoObj = todoList.find((todo) => {
    return todo.todoID === todoID;
  });
  return todoObj;
}

function returnProjectObj(projectTabNode) {
  const projectID = projectTabNode.getAttribute('data-id');
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
  todoObj.title = title;
  todoObj.dueDate = dueDate;
  todoObj.note = note;
  todoObj.priority = priority;
}

function updateProjectData(projectObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, description] = valuesArr;
  projectObj.title = title;
  projectObj.description = description;
}

function updateTodosProjectValue(projectObj, newProjectValue) {
 const todos = findTodosForSelectProject(projectObj);
 for (const todo of todos) {
   todo.project = newProjectValue;
 }
}

function returnNodeListOfTodoTabs() {
  const todosDiv = document.querySelector('.todos');
  const nodeList = todosDiv.querySelectorAll('.tab');
  return [...nodeList];
}

function toggleTodoStatus(node) {
  const todoObj = returnTodoObj(node);
  todoObj.toggleStatus();
}

function removeTodoFromList(node) {
  const todoObj = returnTodoObj(node);
  todoObj.removeFromList();
}

function setCurrentProject(node) {
  const projectObj = returnProjectObj(node);
  projectObj.setAsCurrentProject();
}

function removeDataOfDeletedProject(node) {
  const removedProjectObj = returnProjectObj(node);
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
  incrementIDCounter();
  return id;
}
function incrementIDCounter() {
  ++projectIDCounter;
}
function assignTodoProjectID() {
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
  findTodosForSelectProject,
  returnTodoObj,
  returnProjectObj,
  updateTodoData,
  updateProjectData,
  updateTodosProjectValue,
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