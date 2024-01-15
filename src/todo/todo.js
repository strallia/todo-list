const todoList = [];

class todoItem{
  constructor(title, dueDate, note, priority, status = 'open') {
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = status;
  }

  addToList() {
    todoList.push(this);
  } 

  removeFromList() {
    const index = todoList.indexOf(this);
    todoList.splice(index, 1);
  }

  edit(property, string) {
    this[property] = string;
  }

  toggleStatus() {
    this.status = this.status === 'open' ? 'closed' : 'open';
  }
}

function createTodo(title, dueDate, note, priority) {
  return new todoItem(title, dueDate, note, priority);
}

export { createTodo };