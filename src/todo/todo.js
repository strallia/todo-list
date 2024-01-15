const todoList = [];

class todoItem{
  constructor(title, dueDate, note, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
  }
}

function createTodo(title, dueDate, note, priority) {
  return new todoItem(title, dueDate, note, priority);
}

function addToList(obj) {
  todoList.push(obj);
}

function removeFromList(index) {
  todoList.splice(index, 1);
} 

export { createTodo };
