import "./todo.js";
import "./project.js";
import './styles.css';
import { 
  colorSelectedTab,
  displayProjectTabs, 
  displayTodoTabs, 
} from "./dom.js";

// RENDER DEFAULT UI
displayProjectTabs();
colorSelectedTab(document.querySelector('.projects div:first-of-type'));
displayTodoTabs();
