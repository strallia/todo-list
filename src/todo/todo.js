const todoList = [];

class todoItem{
  constructor(title, dueDate, note, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
  }

  removeFromList() {
    const index = todoList.indexOf(this);
    todoList.splice(index, 1);
  }

  edit(property, string) {
    this[property] = string;
  }
}

function createTodo(title, dueDate, note, priority) {
  return new todoItem(title, dueDate, note, priority);
}

function addToList(obj) {
  todoList.push(obj);
} 

export { createTodo };