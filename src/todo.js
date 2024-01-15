class TodoItem {
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

const todoList = [
  createTodo(
    'My First Todo Item',
    '1/27',
    'Add notes here',
    'high',
    'open'
    )
];

function createTodo(title, dueDate, note, priority, status) {
  return new TodoItem(title, dueDate, note, priority, status);
}

export { createTodo };