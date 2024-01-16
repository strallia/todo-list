import "./todo.js";
import "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayProjectTabs, 
  displayTodoTabs, 
} from "./dom.js";

// RENDER DEFAULT UI
displayProjectTabs();
colorProjectTab(document.querySelector('.projects div:first-of-type'));
displayTodoTabs();
