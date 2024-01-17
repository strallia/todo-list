import { createProject, currentProject, projectList } from "./project";
import { createTodo, todoList } from "./todo";
import { 
  findTodosForCurrentProject,
  findTodoInstance,
  findProjectInstance,
} from "./controller";


// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
  for (const project of projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');

    tab.classList.add('tab');

    tab.setAttribute('data-title', project.title);
    tab.setAttribute('data-status', '');

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';

    titlePara.onclick = (event) => {
      const projectObj = findProjectInstance(event.target.parentNode);
      projectObj.setAsCurrentProject();
      colorProjectTab(event.target.parentNode);
      displayTodoTabs();
    };
    deleteBtn.onclick = (event) => {
      const removedProjectObj = findProjectInstance(event.target.parentNode);

      // delete todos of that project
      const removedTodos = todoList.filter((todo) => {
        return todo.project === removedProjectObj.title;
      });
      removedTodos.forEach((todo) => {todo.removeFromList()});

      // remove project from master list
      removedProjectObj.removeFromList();
      displayProjectTabs();

      // set default project as current project
      projectList[0].setAsCurrentProject();
      const defaultProjectTabNode = document.querySelector(
        `.projects > .tab[data-title="${projectList[0].title}"]`
      );
      colorProjectTab(defaultProjectTabNode);
      displayTodoTabs();
    };

    tab.appendChild(titlePara);
    tab.appendChild(deleteBtn);
    projectsDiv.appendChild(tab);
  };
}

function colorProjectTab(projectTabNode) {
  const allProjectTabs = document.querySelectorAll('.projects > *');
  for (const tab of allProjectTabs) {
    tab.setAttribute('data-status', '');
  }
  projectTabNode.setAttribute('data-status', 'open');
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabs() {
  todosDiv.textContent = '';
  const todos = findTodosForCurrentProject();
  for (const todo of todos) {
    const tab = document.createElement('div');
    const checkbox = document.createElement('input');
    const titlePara = document.createElement('p');
    const dueDateDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const noteDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');

    tab.classList.add('tab');
    deleteBtn.classList.add('delete');
    noteDiv.classList.add('note');
    priorityDiv.classList.add('priority');

    tab.setAttribute('data-title', todo.title);
    checkbox.setAttribute('type', 'checkbox');

    titlePara.textContent = todo.title;
    dueDateDiv.textContent = todo.dueDate;
    deleteBtn.textContent = 'X';
    noteDiv.textContent = todo.note;
    priorityDiv.textContent = `priority: ${todo.priority}`;

    checkbox.onclick = (event) => {
      const todoObj = findTodoInstance(event.target.parentNode);
      todoObj.toggleStatus();
    };
    deleteBtn.onclick = (event) => {
      const todoObj = findTodoInstance(event.target.parentNode);
      todoObj.removeFromList();
      displayTodoTabs();
    };

    tab.appendChild(checkbox);
    tab.appendChild(titlePara);
    tab.appendChild(dueDateDiv);
    tab.appendChild(deleteBtn);
    tab.appendChild(noteDiv);
    tab.appendChild(priorityDiv);
    todosDiv.appendChild(tab);
  };
}


// "ADD" BUTTONS
const addProjectBtn = document.querySelector("button.add-project");
const projectDialog = document.querySelector("dialog.add-project");
addProjectBtn.onclick = () => {projectDialog.show()};

const addTodoBtn = document.querySelector("button.add-todo");
const todoDialog = document.querySelector("dialog.add-todo");
addTodoBtn.onclick = () => {todoDialog.show()};


// PROJECT FORM
const projectForm = document.querySelector(".add-project form");
const projectTitleInput = document.querySelector(".add-project input");
const projectDescriptionInput = document.querySelector(".add-project textarea");

const submitProjectBtn = document.querySelector(".add-project button[type='submit']");
submitProjectBtn.onclick = (event) => {
  event.preventDefault();

  // create instance of new project
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  const newProject = createProject(title, description);
  newProject.addToList();

  // set new project instance as current project
  newProject.setAsCurrentProject();

  // re-display project tabs
  displayProjectTabs();
  const newProjectTabNode = document.querySelector(
    `.projects > .tab[data-title="${title}"]`
  );
  colorProjectTab(newProjectTabNode);

  // display new project's empty todo list
  displayTodoTabs();
  
  projectForm.reset();
  projectDialog.close(); 
}

const resetProjectBtn = document.querySelector(".add-project button[type='reset']");
resetProjectBtn.onclick = () => {
  projectDialog.close(); 
};


// TODO FORM
const todoForm = document.querySelector(".add-todo form");
const todoTitleInput = document.querySelector(".add-todo input#title");
const todoDueDateInput = document.querySelector(".add-todo input#due-date");
const todoNoteInput = document.querySelector(".add-todo textarea");
const todoPriorityInput = document.querySelector(".add-todo select");

const submitTodoBtn = document.querySelector(".add-todo button[type='submit']");
submitTodoBtn.onclick = (event) => {
  event.preventDefault();
  const project = currentProject.title;  
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  const newTodo = createTodo(project, title, dueDate, note, priority);
  newTodo.addToList();
  displayTodoTabs();
  todoForm.reset();
  todoDialog.close();
}

const resetTodoBtn = document.querySelector(".add-todo button[type='reset']");
resetTodoBtn.onclick = () => {
  todoDialog.close(); 
};


export { 
  displayProjectTabs, 
  displayTodoTabs, 
  colorProjectTab
};