class TodoItem {
  constructor(projectID, todoID, title, dueDate, note, priority) {
    this.projectID = projectID;
    this.todoID = todoID;
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = 'open';
  }

  addToList() {
    todoList.push(this);
  } 

  removeFromList() {
    const index = todoList.indexOf(this);
    todoList.splice(index, 1);
  }

  toggleStatus() {
    this.status = this.status === 'open' ? 'closed' : 'open';
  }
}

function createTodo(projectID, todoID, title, dueDate, note, priority) {
  return new TodoItem(projectID, todoID, title, dueDate, note, priority);
}

// An array of TodoItem instances
const todoList = [
  createTodo(
    '0',
    '0',
    'Default Todo',
    '2024-01-31',
    'Notes show here',
    'high',
  ),
  createTodo(
    '1',
    '1',
    'First Todo Item for Sub-project',
    '2024-01-16',
    'Some random note for this todo',
    'medium',
  ),
  createTodo(
    '1',
    '2',
    'Second Todo Item for Sub-project',
    '2024-02-22',
    'Things I gotta remember about this task',
    'medium',
  ),
];

export { todoList, createTodo };