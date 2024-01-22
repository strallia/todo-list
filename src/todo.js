import { findIndexOfTodoInMasterList, storageGetList, storageSetItem } from "./controller";

class TodoItem {
  constructor(projectID, todoID, title, dueDate, note, priority, status = 'open') {
    this.projectID = projectID;
    this.todoID = todoID;
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = status;
  }

  addToList() {
    const todoList = storageGetList('todoList');
    todoList.push(this);
    storageSetItem('todoList', todoList);
  } 

  removeFromList() {
    const todoList = storageGetList('todoList');
    const index = findIndexOfTodoInMasterList(todoList, this);
    todoList.splice(index, 1);
    storageSetItem('todoList', todoList);
  }
}

function createTodo(projectID, todoID, title, dueDate, note, priority, status) {
  return new TodoItem(projectID, todoID, title, dueDate, note, priority, status);
}

export { createTodo };