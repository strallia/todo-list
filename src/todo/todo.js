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

export { createTodo };
