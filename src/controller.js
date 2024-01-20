import { currentProject, projectList } from "./project";
import { todoList } from "./todo";

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

function findProjectInstance(projectTabNode) {
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

function returnNodeListOfTodoTabs() {
  const todosDiv = document.querySelector('.todos');
  const nodeList = todosDiv.querySelectorAll('.tab');
  return [...nodeList];
}

export { 
  findTodosForCurrentProject,
  returnTodoObj,
  findProjectInstance,
  updateTodoData,
  returnNodeListOfTodoTabs
};