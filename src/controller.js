// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts

import { currentProject, projectList, createProject } from "./project";
import { todoList, createTodo } from "./todo";

function findTodosForCurrentProject() {
  const projectTitle = currentProject.title;
  if (projectTitle === "All My Todo's") {
    return todoList;
  } else {
    const filteredTodoList = todoList.filter((item) => {
      return item.project === projectTitle;
    });
    return filteredTodoList;
  }
}

function returnTodoObj(node) {
  const todoTitle = node.getAttribute('data-title');
  const todoObj = todoList.find((todo) => {
    return todo.title === todoTitle;
  });
  return todoObj;
}

function returnProjectObj(projectTabNode) {
  const projectTitle = projectTabNode.getAttribute('data-title');
  const projectObj = projectList.find((project) => {
      return project.title === projectTitle;
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
    return todo.project === removedProjectObj.title;
  });
  removedTodos.forEach((todo) => {todo.removeFromList()});
  removedProjectObj.removeFromList();
}

function createNewProject(title, description) {
  const newProject = createProject(title, description);
  newProject.addToList();
}

function createNewTodo(project, title, dueDate, note, priority, status) {
  const newTodo = createTodo(
    project, title, dueDate, note, priority, status
  );
  newTodo.addToList();
}


export { 
  findTodosForCurrentProject,
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
  createNewTodo
};