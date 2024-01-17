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

function removeTodoFromMasterList(event) {
  const titleNode = event.target.parentNode.firstChild;
  const todoTitle = titleNode.textContent;
  const todoObj = todoList.find((todo) => {
    return todo.title === todoTitle;
  });
  todoObj.removeFromList();
}

export { 
  findTodosForCurrentProject,
  removeTodoFromMasterList 
};