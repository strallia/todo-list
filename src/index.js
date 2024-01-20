import "./todo.js";
import "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayProjectTabs, 
  displayTodoTabsOfCurrentProject,
} from "./dom.js";

// RENDER DEFAULT UI
displayTodoTabsOfCurrentProject();
displayProjectTabs();
colorProjectTab(document.querySelector('.projects div:first-of-type'));