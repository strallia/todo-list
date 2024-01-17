import { currentProject } from "./project";
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

function findTodoInstance(todoTabNode) {
  const todoTitle = todoTabNode.getAttribute('data-title');
  const todoObj = todoList.find((todo) => {
    return todo.title === todoTitle;
  });
  return todoObj;
}

export { 
  findTodosForCurrentProject,
  findTodoInstance,
};