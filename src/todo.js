class TodoItem {
  constructor(project, title, dueDate, note, priority, status = 'open') {
    this.project = project;
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

function createTodo(project, title, dueDate, note, priority, status) {
  return new TodoItem(project, title, dueDate, note, priority, status);
}

// An array of TodoItem instances
const todoList = [
  createTodo(
    "All My Todo's",
    'Todo that belongs only in "All My Todos"',
    '2024-01-31',
    'Add notes here',
    'high',
    'open'
  ),
  createTodo(
    'Another Project',
    'First Todo Item for "Another Project"',
    '2024-01-16',
    'Add notes here',
    'medium',
    'open'
  ),
  createTodo(
    'Another Project',
    'Second Todo Item for "Another Project"',
    '2024-02-22',
    'Add notes here',
    'medium',
    'open'
  ),
];

export { todoList, createTodo };