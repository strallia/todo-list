/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline: 1px solid red; */
}

body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

div.content {
  padding: 20px;

  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;

  > div {
    border: 1px solid purple;
  }
}


/* CONTAINERS */
.container {
  display: grid;
  grid-template-rows: 1fr auto;
}


/* PROJECTS */
div.projects {
  > .tab {
    background-color: lightgoldenrodyellow;
    border: 1px dashed orange;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5px;

    &[data-status="open"] {
      background-color: orange;
    }
  }
}


/* TODO LIST */
div.todos {
  > .tab {
    background-color: lightgoldenrodyellow;
    border: 1px dashed orange;
    padding: 5px;
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    gap: 5px;
    align-items: center;

    p {
      margin-right: auto;
    }
    .note {
     background-color: whitesmoke;
     grid-column: 2/5;
     border: 1px solid grey;
    }
    .priority {
      grid-column: 2/5;
    }
    button {
      height: min-content;
    }
  }
}


/* FORMS */
dialog {
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(5px);
}
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,gCAAgC;EAChC,SAAS;;EAET;IACE,wBAAwB;EAC1B;AACF;;;AAGA,eAAe;AACf;EACE,aAAa;EACb,4BAA4B;AAC9B;;;AAGA,aAAa;AACb;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,aAAa;IACb,+BAA+B;IAC/B,QAAQ;;IAER;MACE,wBAAwB;IAC1B;EACF;AACF;;;AAGA,cAAc;AACd;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,8CAA8C;IAC9C,QAAQ;IACR,mBAAmB;;IAEnB;MACE,kBAAkB;IACpB;IACA;KACC,4BAA4B;KAC5B,gBAAgB;KAChB,sBAAsB;IACvB;IACA;MACE,gBAAgB;IAClB;IACA;MACE,mBAAmB;IACrB;EACF;AACF;;;AAGA,UAAU;AACV;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\ndiv.content {\n  padding: 20px;\n\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  gap: 20px;\n\n  > div {\n    border: 1px solid purple;\n  }\n}\n\n\n/* CONTAINERS */\n.container {\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  > .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 5px;\n\n    &[data-status=\"open\"] {\n      background-color: orange;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  > .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: auto 1fr auto auto auto;\n    gap: 5px;\n    align-items: center;\n\n    p {\n      margin-right: auto;\n    }\n    .note {\n     background-color: whitesmoke;\n     grid-column: 2/5;\n     border: 1px solid grey;\n    }\n    .priority {\n      grid-column: 2/5;\n    }\n    button {\n      height: min-content;\n    }\n  }\n}\n\n\n/* FORMS */\ndialog {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n}\nform {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findProjectInstance: () => (/* binding */ findProjectInstance),
/* harmony export */   findTodoInstance: () => (/* binding */ findTodoInstance),
/* harmony export */   findTodosForCurrentProject: () => (/* binding */ findTodosForCurrentProject),
/* harmony export */   updateTodoData: () => (/* binding */ updateTodoData)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function findTodosForCurrentProject() {
  const projectTitle = _project__WEBPACK_IMPORTED_MODULE_0__.currentProject.title;
  if (projectTitle === "All My Todo's") {
    return _todo__WEBPACK_IMPORTED_MODULE_1__.todoList;
  } else {
    const filteredTodoList = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((item) => {
      return item.project === projectTitle;
    });
    return filteredTodoList;
  }
}

function findTodoInstance(todoTabNode) {
  const todoTitle = todoTabNode.getAttribute('data-title');
  const todoObj = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.find((todo) => {
    return todo.title === todoTitle;
  });
  return todoObj;
}

function findProjectInstance(projectTabNode) {
  const projectTitle = projectTabNode.getAttribute('data-title');
  const projectObj = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.find((project) => {
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



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorProjectTab: () => (/* binding */ colorProjectTab),
/* harmony export */   displayProjectTabs: () => (/* binding */ displayProjectTabs),
/* harmony export */   displayTodoTabs: () => (/* binding */ displayTodoTabs)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");





// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  projectsDiv.textContent = '';
  for (const project of _project__WEBPACK_IMPORTED_MODULE_0__.projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');

    tab.classList.add('tab');

    tab.setAttribute('data-title', project.title);
    tab.setAttribute('data-status', '');

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';

    titlePara.onclick = (event) => {
      const projectObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findProjectInstance)(event.target.parentNode);
      projectObj.setAsCurrentProject();
      colorProjectTab(event.target.parentNode);
      displayTodoTabs();
    };
    deleteBtn.onclick = (event) => {
      const removedProjectObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findProjectInstance)(event.target.parentNode);

      // delete todos of that project
      const removedTodos = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((todo) => {
        return todo.project === removedProjectObj.title;
      });
      removedTodos.forEach((todo) => {todo.removeFromList()});

      // remove project from master list
      removedProjectObj.removeFromList();
      displayProjectTabs();

      // set default project as current project
      _project__WEBPACK_IMPORTED_MODULE_0__.projectList[0].setAsCurrentProject();
      const defaultProjectTabNode = document.querySelector(
        `.projects > .tab[data-title="${_project__WEBPACK_IMPORTED_MODULE_0__.projectList[0].title}"]`
      );
      colorProjectTab(defaultProjectTabNode);
      displayTodoTabs();
    };

    tab.appendChild(titlePara);
    if (project !== _project__WEBPACK_IMPORTED_MODULE_0__.projectList[0]) tab.appendChild(deleteBtn);
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
  const todos = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodosForCurrentProject)();
  for (const todo of todos) {
    const tab = document.createElement('div');
    const checkbox = document.createElement('input');
    const titlePara = document.createElement('p');
    const dueDateDiv = document.createElement('div');
    const modeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const noteDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');

    tab.classList.add('tab');
    titlePara.classList.add('title');
    dueDateDiv.classList.add('due-date');
    modeBtn.classList.add('mode');
    deleteBtn.classList.add('delete');
    noteDiv.classList.add('note');
    priorityDiv.classList.add('priority');

    tab.setAttribute('data-title', todo.title);
    checkbox.setAttribute('type', 'checkbox');

    titlePara.textContent = todo.title;
    dueDateDiv.textContent = todo.dueDate;
    modeBtn .textContent = 'Edit';
    deleteBtn.textContent = 'X';
    noteDiv.textContent = todo.note;
    priorityDiv.textContent = `priority: ${todo.priority}`;

    checkbox.onclick = (event) => {
      const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodoInstance)(event.target.parentNode);
      todoObj.toggleStatus();
    };
    modeBtn.onclick = (event) => {
      // show edit view on click
      const todoNode = event.target.parentNode;
      const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodoInstance)(todoNode);
      displayEditTodoView(todoObj, todoNode);
    };
    deleteBtn.onclick = (event) => {
      const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodoInstance)(event.target.parentNode);
      todoObj.removeFromList();
      displayTodoTabs();
    };

    tab.appendChild(checkbox);
    tab.appendChild(titlePara);
    tab.appendChild(dueDateDiv);
    tab.appendChild(modeBtn);
    tab.appendChild(deleteBtn);
    tab.appendChild(noteDiv);
    tab.appendChild(priorityDiv);
    todosDiv.appendChild(tab);
  };
}

function displayEditTodoView(todoObj,todoNode) {
  const titleContainer = todoNode.querySelector('.title');
  const dateContainer = todoNode.querySelector('.due-date');
  const modeBtn = todoNode.querySelector('.mode');
  const noteContainer = todoNode.querySelector('.note');
  const priorityContainer = todoNode.querySelector('.priority');

  titleContainer.textContent = '';
  dateContainer.textContent = '';
  noteContainer.textContent = '';
  priorityContainer.textContent = '';

  const titleInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const noteInput = document.createElement('textarea');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');
  const priorityOptionLow = document.createElement('option');
  const priorityOptionMedium = document.createElement('option');
  const priorityOptionHigh = document.createElement('option');

  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('value', `${todoObj.title}`);
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('value', `${todoObj.dueDate}`);
  priorityLabel.setAttribute('for', 'priority');
  prioritySelect.setAttribute('id', 'priority');
  priorityOptionLow.setAttribute('value', 'low');
  priorityOptionMedium.setAttribute('value', 'medium');
  priorityOptionHigh.setAttribute('value', 'high');

  const currentPriority = todoObj.priority;
  let selectOption;
  if (currentPriority === 'low') {
    selectOption = priorityOptionLow;
  } else if (currentPriority === 'medium') {
    selectOption = priorityOptionMedium;
  } else {
    selectOption = priorityOptionHigh;
  };
  selectOption.setAttribute('selected','');

  modeBtn.textContent = 'Save';
  noteInput.textContent = todoObj.note;
  priorityLabel.textContent = 'Priority';
  priorityOptionLow.textContent = 'Low';
  priorityOptionMedium.textContent = 'Medium';
  priorityOptionHigh.textContent = 'High';

  modeBtn.onclick = () => {
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.updateTodoData)(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    displayTodoTabs();
  };

  prioritySelect.appendChild(priorityOptionLow);
  prioritySelect.appendChild(priorityOptionMedium);
  prioritySelect.appendChild(priorityOptionHigh);

  titleContainer.appendChild(titleInput);
  dateContainer.appendChild(dateInput);
  noteContainer.appendChild(noteInput);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);
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
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, description);
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
  const project = _project__WEBPACK_IMPORTED_MODULE_0__.currentProject.title;  
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(project, title, dueDate, note, priority);
  newTodo.addToList();
  displayTodoTabs();
  todoForm.reset();
  todoDialog.close();
}

const resetTodoBtn = document.querySelector(".add-todo button[type='reset']");
resetTodoBtn.onclick = () => {
  todoDialog.close(); 
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
class ProjectItem {  
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addToList() {
    projectList.push(this);
  } 

  removeFromList() {
    const index = projectList.indexOf(this);
    projectList.splice(index, 1);
  }

  edit(property, string) {
    this[property] = string;
  }

  setAsCurrentProject() {
    currentProject = this;
  }
}

function createProject(title, description) {
  return new ProjectItem(title, description);
}

// An array of ProjectItem instances
const projectList = [
  createProject(
    "All My Todo's", 
    "Project containing all my todo's"
  ),
  createProject(
    "Another Project", 
    "Project containing todos for another project"
  ),
];

let currentProject = projectList[0];



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
class TodoItem {
  constructor(project, title, dueDate, note, priority, status = 'open') {
    this.project = project;
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = status;
  }

  addToList() {
    todoList.push(this);
  } 

  removeFromList() {
    const index = todoList.indexOf(this);
    todoList.splice(index, 1);
  }

  edit(property, string) {
    this[property] = string;
  }

  toggleStatus() {
    this.status = this.status === 'open' ? 'closed' : 'open';
  }
}

function createTodo(project, title, dueDate, note, priority, status) {
  return new TodoItem(project, title, dueDate, note, priority, status);
}

// An array of TodoItem instances
const todoList = [
  createTodo(
    "All My Todo's",
    'Todo that belongs only in "All My Todos"',
    '2024-01-31',
    'Notes show here',
    'high',
  ),
  createTodo(
    'Another Project',
    'First Todo Item for "Another Project"',
    '2024-01-16',
    'Some random note for this todo',
    'medium',
  ),
  createTodo(
    'Another Project',
    'Second Todo Item for "Another Project"',
    '2024-02-22',
    'Things I gotta remember about this task',
    'medium',
  ),
];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





// RENDER DEFAULT UI
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectTabs)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.colorProjectTab)(document.querySelector('.projects div:first-of-type'));
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayTodoTabs)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBbUI7QUFDRztBQUNBO0FBS0o7O0FBRWxCO0FBQ0EsMkRBQWtCO0FBQ2xCLHdEQUFlO0FBQ2Ysd0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59XG5cbmRpdi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmcjtcbiAgZ2FwOiAyMHB4O1xuXG4gID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gIH1cbn1cblxuXG4vKiBDT05UQUlORVJTICovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cblxuXG4vKiBQUk9KRUNUUyAqL1xuZGl2LnByb2plY3RzIHtcbiAgPiAudGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgb3JhbmdlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICBnYXA6IDVweDtcblxuICAgICZbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBUT0RPIExJU1QgKi9cbmRpdi50b2RvcyB7XG4gID4gLnRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIG9yYW5nZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0byBhdXRvO1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gICAgLm5vdGUge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICBncmlkLWNvbHVtbjogMi81O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIH1cbiAgICAucHJpb3JpdHkge1xuICAgICAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLyogRk9STVMgKi9cbmRpYWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cbmZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUzs7RUFFVDtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOzs7QUFHQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOzs7QUFHQSxhQUFhO0FBQ2I7RUFDRTtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixRQUFROztJQUVSO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7QUFDRjs7O0FBR0EsY0FBYztBQUNkO0VBQ0U7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFFBQVE7SUFDUixtQkFBbUI7O0lBRW5CO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7S0FDQyw0QkFBNEI7S0FDNUIsZ0JBQWdCO0tBQ2hCLHNCQUFzQjtJQUN2QjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtBQUNGOzs7QUFHQSxVQUFVO0FBQ1Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbmRpdi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIH1cXG59XFxuXFxuXFxuLyogQ09OVEFJTkVSUyAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcblxcblxcbi8qIFBST0pFQ1RTICovXFxuZGl2LnByb2plY3RzIHtcXG4gID4gLnRhYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgb3JhbmdlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgJltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuLyogVE9ETyBMSVNUICovXFxuZGl2LnRvZG9zIHtcXG4gID4gLnRhYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgb3JhbmdlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvIGF1dG87XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLm5vdGUge1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgIGdyaWQtY29sdW1uOiAyLzU7XFxuICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICB9XFxuICAgIC5wcmlvcml0eSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuLyogRk9STVMgKi9cXG5kaWFsb2cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZmluZFRvZG9zRm9yQ3VycmVudFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICBpZiAocHJvamVjdFRpdGxlID09PSBcIkFsbCBNeSBUb2RvJ3NcIikge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5wcm9qZWN0ID09PSBwcm9qZWN0VGl0bGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkVG9kb0xpc3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFRvZG9JbnN0YW5jZSh0b2RvVGFiTm9kZSkge1xuICBjb25zdCB0b2RvVGl0bGUgPSB0b2RvVGFiTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgY29uc3QgdG9kb09iaiA9IHRvZG9MaXN0LmZpbmQoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kby50aXRsZSA9PT0gdG9kb1RpdGxlO1xuICB9KTtcbiAgcmV0dXJuIHRvZG9PYmo7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5zdGFuY2UocHJvamVjdFRhYk5vZGUpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRhYk5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gIGNvbnN0IHByb2plY3RPYmogPSBwcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RPYmo7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9EYXRhKHRvZG9PYmosIGlucHV0QXJyKSB7XG4gIGNvbnN0IHZhbHVlc0FyciA9IGlucHV0QXJyLm1hcCgoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gIH0pO1xuICBjb25zdCBbdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5XSA9IHZhbHVlc0FycjtcbiAgdG9kb09iai50aXRsZSA9IHRpdGxlO1xuICB0b2RvT2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0b2RvT2JqLm5vdGUgPSBub3RlO1xuICB0b2RvT2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmV4cG9ydCB7IFxuICBmaW5kVG9kb3NGb3JDdXJyZW50UHJvamVjdCxcbiAgZmluZFRvZG9JbnN0YW5jZSxcbiAgZmluZFByb2plY3RJbnN0YW5jZSxcbiAgdXBkYXRlVG9kb0RhdGFcbn07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgY3VycmVudFByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBcbiAgZmluZFRvZG9zRm9yQ3VycmVudFByb2plY3QsXG4gIGZpbmRUb2RvSW5zdGFuY2UsXG4gIGZpbmRQcm9qZWN0SW5zdGFuY2UsXG4gIHVwZGF0ZVRvZG9EYXRhXG59IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuXG4vLyBQUk9KRUNUIExJU1RcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFicygpIHtcbiAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIHByb2plY3QudGl0bGUpO1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJycpO1xuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICB0aXRsZVBhcmEub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE9iaiA9IGZpbmRQcm9qZWN0SW5zdGFuY2UoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgcHJvamVjdE9iai5zZXRBc0N1cnJlbnRQcm9qZWN0KCk7XG4gICAgICBjb2xvclByb2plY3RUYWIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgZGlzcGxheVRvZG9UYWJzKCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVtb3ZlZFByb2plY3RPYmogPSBmaW5kUHJvamVjdEluc3RhbmNlKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgICAgLy8gZGVsZXRlIHRvZG9zIG9mIHRoYXQgcHJvamVjdFxuICAgICAgY29uc3QgcmVtb3ZlZFRvZG9zID0gdG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIHJldHVybiB0b2RvLnByb2plY3QgPT09IHJlbW92ZWRQcm9qZWN0T2JqLnRpdGxlO1xuICAgICAgfSk7XG4gICAgICByZW1vdmVkVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge3RvZG8ucmVtb3ZlRnJvbUxpc3QoKX0pO1xuXG4gICAgICAvLyByZW1vdmUgcHJvamVjdCBmcm9tIG1hc3RlciBsaXN0XG4gICAgICByZW1vdmVkUHJvamVjdE9iai5yZW1vdmVGcm9tTGlzdCgpO1xuICAgICAgZGlzcGxheVByb2plY3RUYWJzKCk7XG5cbiAgICAgIC8vIHNldCBkZWZhdWx0IHByb2plY3QgYXMgY3VycmVudCBwcm9qZWN0XG4gICAgICBwcm9qZWN0TGlzdFswXS5zZXRBc0N1cnJlbnRQcm9qZWN0KCk7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdFRhYk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnByb2plY3RzID4gLnRhYltkYXRhLXRpdGxlPVwiJHtwcm9qZWN0TGlzdFswXS50aXRsZX1cIl1gXG4gICAgICApO1xuICAgICAgY29sb3JQcm9qZWN0VGFiKGRlZmF1bHRQcm9qZWN0VGFiTm9kZSk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnMoKTtcbiAgICB9O1xuXG4gICAgdGFiLmFwcGVuZENoaWxkKHRpdGxlUGFyYSk7XG4gICAgaWYgKHByb2plY3QgIT09IHByb2plY3RMaXN0WzBdKSB0YWIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xvclByb2plY3RUYWIocHJvamVjdFRhYk5vZGUpIHtcbiAgY29uc3QgYWxsUHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMgPiAqJyk7XG4gIGZvciAoY29uc3QgdGFiIG9mIGFsbFByb2plY3RUYWJzKSB7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gIH1cbiAgcHJvamVjdFRhYk5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICdvcGVuJyk7XG59XG5cblxuLy8gVE9ETyBMSVNUXG5jb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb1RhYnMoKSB7XG4gIHRvZG9zRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IHRvZG9zID0gZmluZFRvZG9zRm9yQ3VycmVudFByb2plY3QoKTtcbiAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIHRpdGxlUGFyYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBtb2RlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGUnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgbm90ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcblxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0b2RvLnRpdGxlKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgIHRpdGxlUGFyYS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBtb2RlQnRuIC50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgbm90ZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubm90ZTtcbiAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IGBwcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG5cbiAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0b2RvT2JqID0gZmluZFRvZG9JbnN0YW5jZShldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB0b2RvT2JqLnRvZ2dsZVN0YXR1cygpO1xuICAgIH07XG4gICAgbW9kZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBzaG93IGVkaXQgdmlldyBvbiBjbGlja1xuICAgICAgY29uc3QgdG9kb05vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRvZG9PYmogPSBmaW5kVG9kb0luc3RhbmNlKHRvZG9Ob2RlKTtcbiAgICAgIGRpc3BsYXlFZGl0VG9kb1ZpZXcodG9kb09iaiwgdG9kb05vZGUpO1xuICAgIH07XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9PYmogPSBmaW5kVG9kb0luc3RhbmNlKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIHRvZG9PYmoucmVtb3ZlRnJvbUxpc3QoKTtcbiAgICAgIGRpc3BsYXlUb2RvVGFicygpO1xuICAgIH07XG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh0aXRsZVBhcmEpO1xuICAgIHRhYi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQobW9kZUJ0bik7XG4gICAgdGFiLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgdGFiLmFwcGVuZENoaWxkKG5vdGVEaXYpO1xuICAgIHRhYi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXRUb2RvVmlldyh0b2RvT2JqLHRvZG9Ob2RlKSB7XG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKTtcbiAgY29uc3QgbW9kZUJ0biA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5tb2RlJyk7XG4gIGNvbnN0IG5vdGVDb250YWluZXIgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuXG4gIHRpdGxlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGRhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgbm90ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBwcmlvcml0eUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0b2RvT2JqLnRpdGxlfWApO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0b2RvT2JqLmR1ZURhdGV9YCk7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eU9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICBwcmlvcml0eU9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICBwcmlvcml0eU9wdGlvbkhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG5cbiAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gdG9kb09iai5wcmlvcml0eTtcbiAgbGV0IHNlbGVjdE9wdGlvbjtcbiAgaWYgKGN1cnJlbnRQcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICBzZWxlY3RPcHRpb24gPSBwcmlvcml0eU9wdGlvbkxvdztcbiAgfSBlbHNlIGlmIChjdXJyZW50UHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25NZWRpdW07XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25IaWdoO1xuICB9O1xuICBzZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsJycpO1xuXG4gIG1vZGVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gIG5vdGVJbnB1dC50ZXh0Q29udGVudCA9IHRvZG9PYmoubm90ZTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIHByaW9yaXR5T3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIHByaW9yaXR5T3B0aW9uTWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIHByaW9yaXR5T3B0aW9uSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICBtb2RlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgdXBkYXRlVG9kb0RhdGEoXG4gICAgICB0b2RvT2JqLFxuICAgICAgW3RpdGxlSW5wdXQsIGRhdGVJbnB1dCwgbm90ZUlucHV0LCBwcmlvcml0eVNlbGVjdF0gXG4gICAgKTtcbiAgICBkaXNwbGF5VG9kb1RhYnMoKTtcbiAgfTtcblxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbkxvdyk7XG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uTWVkaXVtKTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb25IaWdoKTtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVJbnB1dCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG59XG5cblxuLy8gXCJBRERcIiBCVVRUT05TXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLmFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge3Byb2plY3REaWFsb2cuc2hvdygpfTtcblxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLXRvZG9cIik7XG5jb25zdCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZy5hZGQtdG9kb1wiKTtcbmFkZFRvZG9CdG4ub25jbGljayA9ICgpID0+IHt0b2RvRGlhbG9nLnNob3coKX07XG5cblxuLy8gUFJPSkVDVCBGT1JNXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QgZm9ybVwiKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBpbnB1dFwiKTtcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCB0ZXh0YXJlYVwiKTtcblxuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QgYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xuc3VibWl0UHJvamVjdEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gY3JlYXRlIGluc3RhbmNlIG9mIG5ldyBwcm9qZWN0XG4gIGNvbnN0IHRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIG5ld1Byb2plY3QuYWRkVG9MaXN0KCk7XG5cbiAgLy8gc2V0IG5ldyBwcm9qZWN0IGluc3RhbmNlIGFzIGN1cnJlbnQgcHJvamVjdFxuICBuZXdQcm9qZWN0LnNldEFzQ3VycmVudFByb2plY3QoKTtcblxuICAvLyByZS1kaXNwbGF5IHByb2plY3QgdGFic1xuICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgY29uc3QgbmV3UHJvamVjdFRhYk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdHMgPiAudGFiW2RhdGEtdGl0bGU9XCIke3RpdGxlfVwiXWBcbiAgKTtcbiAgY29sb3JQcm9qZWN0VGFiKG5ld1Byb2plY3RUYWJOb2RlKTtcblxuICAvLyBkaXNwbGF5IG5ldyBwcm9qZWN0J3MgZW1wdHkgdG9kbyBsaXN0XG4gIGRpc3BsYXlUb2RvVGFicygpO1xuICBcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpOyBcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0ncmVzZXQnXVwiKTtcbnJlc2V0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufTtcblxuXG4vLyBUT0RPIEZPUk1cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBmb3JtXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGlucHV0I3RpdGxlXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjZHVlLWRhdGVcIik7XG5jb25zdCB0b2RvTm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyB0ZXh0YXJlYVwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBzZWxlY3RcIik7XG5cbmNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbnN1Ym1pdFRvZG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QudGl0bGU7ICBcbiAgY29uc3QgdGl0bGUgPSB0b2RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IHRvZG9EdWVEYXRlSW5wdXQudmFsdWU7XG4gIGNvbnN0IG5vdGUgPSB0b2RvTm90ZUlucHV0LnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eUlucHV0LnZhbHVlO1xuICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyhwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpO1xuICBuZXdUb2RvLmFkZFRvTGlzdCgpO1xuICBkaXNwbGF5VG9kb1RhYnMoKTtcbiAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgdG9kb0RpYWxvZy5jbG9zZSgpO1xufVxuXG5jb25zdCByZXNldFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdyZXNldCddXCIpO1xucmVzZXRUb2RvQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHRvZG9EaWFsb2cuY2xvc2UoKTsgXG59O1xuXG5cbmV4cG9ydCB7IFxuICBkaXNwbGF5UHJvamVjdFRhYnMsIFxuICBkaXNwbGF5VG9kb1RhYnMsIFxuICBjb2xvclByb2plY3RUYWJcbn07IiwiY2xhc3MgUHJvamVjdEl0ZW0geyAgXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBhZGRUb0xpc3QoKSB7XG4gICAgcHJvamVjdExpc3QucHVzaCh0aGlzKTtcbiAgfSBcblxuICByZW1vdmVGcm9tTGlzdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YodGhpcyk7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGVkaXQocHJvcGVydHksIHN0cmluZykge1xuICAgIHRoaXNbcHJvcGVydHldID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0QXNDdXJyZW50UHJvamVjdCgpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHRoaXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24pO1xufVxuXG4vLyBBbiBhcnJheSBvZiBQcm9qZWN0SXRlbSBpbnN0YW5jZXNcbmNvbnN0IHByb2plY3RMaXN0ID0gW1xuICBjcmVhdGVQcm9qZWN0KFxuICAgIFwiQWxsIE15IFRvZG8nc1wiLCBcbiAgICBcIlByb2plY3QgY29udGFpbmluZyBhbGwgbXkgdG9kbydzXCJcbiAgKSxcbiAgY3JlYXRlUHJvamVjdChcbiAgICBcIkFub3RoZXIgUHJvamVjdFwiLCBcbiAgICBcIlByb2plY3QgY29udGFpbmluZyB0b2RvcyBmb3IgYW5vdGhlciBwcm9qZWN0XCJcbiAgKSxcbl07XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0WzBdO1xuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdCwgY3VycmVudFByb2plY3QgfTsiLCJjbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgc3RhdHVzID0gJ29wZW4nKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGFkZFRvTGlzdCgpIHtcbiAgICB0b2RvTGlzdC5wdXNoKHRoaXMpO1xuICB9IFxuXG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0aGlzKTtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZWRpdChwcm9wZXJ0eSwgc3RyaW5nKSB7XG4gICAgdGhpc1twcm9wZXJ0eV0gPSBzdHJpbmc7XG4gIH1cblxuICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PT0gJ29wZW4nID8gJ2Nsb3NlZCcgOiAnb3Blbic7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICByZXR1cm4gbmV3IFRvZG9JdGVtKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgc3RhdHVzKTtcbn1cblxuLy8gQW4gYXJyYXkgb2YgVG9kb0l0ZW0gaW5zdGFuY2VzXG5jb25zdCB0b2RvTGlzdCA9IFtcbiAgY3JlYXRlVG9kbyhcbiAgICBcIkFsbCBNeSBUb2RvJ3NcIixcbiAgICAnVG9kbyB0aGF0IGJlbG9uZ3Mgb25seSBpbiBcIkFsbCBNeSBUb2Rvc1wiJyxcbiAgICAnMjAyNC0wMS0zMScsXG4gICAgJ05vdGVzIHNob3cgaGVyZScsXG4gICAgJ2hpZ2gnLFxuICApLFxuICBjcmVhdGVUb2RvKFxuICAgICdBbm90aGVyIFByb2plY3QnLFxuICAgICdGaXJzdCBUb2RvIEl0ZW0gZm9yIFwiQW5vdGhlciBQcm9qZWN0XCInLFxuICAgICcyMDI0LTAxLTE2JyxcbiAgICAnU29tZSByYW5kb20gbm90ZSBmb3IgdGhpcyB0b2RvJyxcbiAgICAnbWVkaXVtJyxcbiAgKSxcbiAgY3JlYXRlVG9kbyhcbiAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAnU2Vjb25kIFRvZG8gSXRlbSBmb3IgXCJBbm90aGVyIFByb2plY3RcIicsXG4gICAgJzIwMjQtMDItMjInLFxuICAgICdUaGluZ3MgSSBnb3R0YSByZW1lbWJlciBhYm91dCB0aGlzIHRhc2snLFxuICAgICdtZWRpdW0nLFxuICApLFxuXTtcblxuZXhwb3J0IHsgdG9kb0xpc3QsIGNyZWF0ZVRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3RvZG8uanNcIjtcbmltcG9ydCBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVByb2plY3RUYWJzLCBcbiAgZGlzcGxheVRvZG9UYWJzLCBcbn0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbi8vIFJFTkRFUiBERUZBVUxUIFVJXG5kaXNwbGF5UHJvamVjdFRhYnMoKTtcbmNvbG9yUHJvamVjdFRhYihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMgZGl2OmZpcnN0LW9mLXR5cGUnKSk7XG5kaXNwbGF5VG9kb1RhYnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==