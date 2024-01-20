import "./todo.js";
import "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayProjectTabs, 
  setUpWireframeForAllTodos,
} from "./dom.js";

// RENDER DEFAULT UI
setUpWireframeForAllTodos();
displayProjectTabs();
colorProjectTab(document.querySelector('.projects div:first-of-type'));