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
  const siblingTitleNode = event.target.previousSibling;
  const todoTitle = siblingTitleNode.textContent;
  const todoObj = todoList.find((todo) => {
    return todo.title === todoTitle;
  });
  todoObj.removeFromList();
}

export { 
  findTodosForCurrentProject,
  removeTodoFromMasterList 
};