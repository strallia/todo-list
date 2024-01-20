import "./todo.js";
import "./project.js";
import './styles.css';
import { 
  colorProjectTab,
  displayProjectTabs, 
  setWireframeForAllTodos,
} from "./dom.js";

// RENDER DEFAULT UI
setWireframeForAllTodos();
displayProjectTabs();
colorProjectTab(document.querySelector('.projects div:first-of-type'));