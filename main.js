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
  .tab {
    background-color: lightgoldenrodyellow;
    border: 1px dashed orange;
    padding: 5px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 5px;
    align-items: center;

    .details {
      grid-column: 1/4;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .header,
    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 5px;
    }
    .note {
    background-color: whitesmoke;
    border: 1px solid grey;
    }
    button {
      height: min-content;
    }
    .hidden {
      display: none;
    }
    button.view-mode.up {
    transform: rotate(180deg);
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
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,gCAAgC;EAChC,SAAS;;EAET;IACE,wBAAwB;EAC1B;AACF;;;AAGA,eAAe;AACf;EACE,aAAa;EACb,4BAA4B;AAC9B;;;AAGA,aAAa;AACb;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,aAAa;IACb,+BAA+B;IAC/B,QAAQ;;IAER;MACE,wBAAwB;IAC1B;EACF;AACF;;;AAGA,cAAc;AACd;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,mBAAmB;;IAEnB;MACE,gBAAgB;MAChB,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;;MAEE,aAAa;MACb,8BAA8B;MAC9B,QAAQ;IACV;IACA;IACA,4BAA4B;IAC5B,sBAAsB;IACtB;IACA;MACE,mBAAmB;IACrB;IACA;MACE,aAAa;IACf;IACA;IACA,yBAAyB;IACzB;EACF;;AAEF;;;AAGA,UAAU;AACV;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;EAC1B;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;EACf;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\ndiv.content {\n  padding: 20px;\n\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  gap: 20px;\n\n  > div {\n    border: 1px solid purple;\n  }\n}\n\n\n/* CONTAINERS */\n.container {\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  > .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 5px;\n\n    &[data-status=\"open\"] {\n      background-color: orange;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 5px;\n    align-items: center;\n\n    .details {\n      grid-column: 1/4;\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n    .header,\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      gap: 5px;\n    }\n    .note {\n    background-color: whitesmoke;\n    border: 1px solid grey;\n    }\n    button {\n      height: min-content;\n    }\n    .hidden {\n      display: none;\n    }\n    button.view-mode.up {\n    transform: rotate(180deg);\n    }\n  }\n  \n}\n\n\n/* FORMS */\ndialog {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n  form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo),
/* harmony export */   findProjectInstance: () => (/* binding */ findProjectInstance),
/* harmony export */   findTodosForCurrentProject: () => (/* binding */ findTodosForCurrentProject),
/* harmony export */   removeDataOfDeletedProject: () => (/* binding */ removeDataOfDeletedProject),
/* harmony export */   removeTodoFromList: () => (/* binding */ removeTodoFromList),
/* harmony export */   returnNodeListOfTodoTabs: () => (/* binding */ returnNodeListOfTodoTabs),
/* harmony export */   returnTodoObj: () => (/* binding */ returnTodoObj),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),
/* harmony export */   toggleTodoStatus: () => (/* binding */ toggleTodoStatus),
/* harmony export */   updateTodoData: () => (/* binding */ updateTodoData)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts




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

function returnTodoObj(node) {
  const todoTitle = node.getAttribute('data-title');
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

function returnNodeListOfTodoTabs() {
  const todosDiv = document.querySelector('.todos');
  const nodeList = todosDiv.querySelectorAll('.tab');
  return [...nodeList];
}

function toggleTodoStatus(node) {
  const todoObj = returnTodoObj(node);
  todoObj.toggleStatus();
}

function removeTodoFromList(node) {
  const todoObj = returnTodoObj(node);
  todoObj.removeFromList();
}

function setCurrentProject(node) {
  const projectObj = findProjectInstance(node);
  projectObj.setAsCurrentProject();
}

function removeDataOfDeletedProject(node) {
  const removedProjectObj = findProjectInstance(node);
  const removedTodos = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((todo) => {
    return todo.project === removedProjectObj.title;
  });
  removedTodos.forEach((todo) => {todo.removeFromList()});
  removedProjectObj.removeFromList();
}

function createNewProject(title, description) {
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(title, description);
  newProject.addToList();
}

function createNewTodo(project, title, dueDate, note, priority, status) {
  const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
    project, title, dueDate, note, priority, status
  );
  newTodo.addToList();
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
/* harmony export */   setWireframeForAllTodos: () => (/* binding */ setWireframeForAllTodos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");





// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function clearContent(node) {
  node.textContent = '';
}

function displayProjectTabs() {
  clearContent(projectsDiv);
  for (const project of _project__WEBPACK_IMPORTED_MODULE_0__.projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');

    tab.classList.add('tab');

    tab.setAttribute('data-title', project.title);
    tab.setAttribute('data-status', '');
    deleteBtn.setAttribute('data-title', project.title);

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';

    titlePara.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(event.target.parentNode);
      colorProjectTab(event.target.parentNode);
      setWireframeForAllTodos();
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.removeDataOfDeletedProject)(event.target.parentNode); 
      displayProjectTabs();

      const deletedProjectTitle = event.target.getAttribute('data-title');
      if (_project__WEBPACK_IMPORTED_MODULE_0__.currentProject.title === deletedProjectTitle) {
        const defaultProjectNode = projectsDiv.firstChild;
        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
        setWireframeForAllTodos();
      } else {
        const currentProjectNode = projectsDiv.querySelector(
          `.tab[data-title="${_project__WEBPACK_IMPORTED_MODULE_0__.currentProject.title}"]`
        );
        colorProjectTab(currentProjectNode);
      }
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

function setWireframeForAllTodos() {
  clearContent(todosDiv);
  const todos = _project__WEBPACK_IMPORTED_MODULE_0__.currentProject === _project__WEBPACK_IMPORTED_MODULE_0__.projectList[0] 
    ? _todo__WEBPACK_IMPORTED_MODULE_1__.todoList
    : (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodosForCurrentProject)();
  for (const todo of todos) {
    const tab = document.createElement('div');
    const headerDiv = document.createElement('div');
    const titlePara = document.createElement('p');
    const dueDatePara = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const notePara = document.createElement('p');
    const priorityPara = document.createElement('p');
    const btnsDiv = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const viewModeBtn = document.createElement('button');
    const checkbox = document.createElement('input');

    tab.classList.add('tab');
    headerDiv.classList.add('header');
    titlePara.classList.add('title');
    dueDatePara.classList.add('due-date');
    detailsDiv.classList.add('details', 'hidden');
    notePara.classList.add('note');
    priorityPara.classList.add('priority');
    btnsDiv.classList.add('buttons');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');
    viewModeBtn.classList.add('view-mode', 'down');

    tab.setAttribute('data-title', todo.title);
    viewModeBtn.setAttribute('data-title', todo.title);
    editBtn.setAttribute('data-title', todo.title);
    deleteBtn.setAttribute('data-title', todo.title);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('data-title', todo.title);

    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'X';
    viewModeBtn.textContent = '▼';

    checkbox.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.toggleTodoStatus)(event.target);
    };
    editBtn.onclick = (event) => {
      openTodoEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.removeTodoFromList)(event.target);
      setWireframeForAllTodos();
    };
    viewModeBtn.onclick = (event) => {
      rotateViewModeBtn(event.target);
      toggleDisplayOfDetails(event.target);
    };

    headerDiv.appendChild(titlePara);
    headerDiv.appendChild(dueDatePara);

    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);
    btnsDiv.appendChild(viewModeBtn);

    detailsDiv.appendChild(notePara);
    detailsDiv.appendChild(priorityPara);

    tab.appendChild(checkbox);
    tab.appendChild(headerDiv);
    tab.appendChild(btnsDiv);
    tab.appendChild(detailsDiv);

    todosDiv.appendChild(tab);
  };
  displayTodoDetails();
}

function displayTodoDetails() {
  const todosNodeList = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.returnNodeListOfTodoTabs)();
  for (const todoNode of todosNodeList) {
    const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.returnTodoObj)(todoNode);

    const titlePara = todoNode.querySelector('.title');
    const dueDatePara = todoNode.querySelector('.due-date');
    const notePara = todoNode.querySelector('.note');
    const priorityPara = todoNode.querySelector('.priority');

    titlePara.textContent = todoObj.title;
    dueDatePara.textContent = todoObj.dueDate;
    notePara.textContent = todoObj.note;
    priorityPara.textContent = 'Priority: ' + todoObj.priority;
  }
}

function rotateViewModeBtn(btnNode) {
  if (btnNode.classList.contains('down')) {
    btnNode.classList.remove('down');
    btnNode.classList.add('up');
  } else {
    btnNode.classList.remove('up');
    btnNode.classList.add('down');
  }
}

function toggleDisplayOfDetails(btnNode) {
  const todoTitle = btnNode.getAttribute('data-title');
  const todoNode = todosDiv.querySelector(`.tab[data-title="${todoTitle}`);
  const detailsDiv = todoNode.querySelector('.details');

  if (detailsDiv.classList.contains('hidden')) {
    detailsDiv.classList.remove('hidden');
  } else {
    detailsDiv.classList.add('hidden');
  }
}

function openTodoEditModal(btnNode) {
  const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.returnTodoObj)(btnNode);

  const body = document.querySelector('body');

  const dialog = document.createElement('dialog');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const dateInput = document.createElement('input');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const noteInput = document.createElement('textarea');
  const priorityContainer = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');
  const priorityOptionLow = document.createElement('option');
  const priorityOptionMedium = document.createElement('option');
  const priorityOptionHigh = document.createElement('option');

  dialog.classList.add('edit-todo');
  noteInput.classList.add('note');
  priorityContainer.classList.add('priority');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('value', `${todoObj.title}`);
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('value', `${todoObj.dueDate}`);
  dateInput.setAttribute('id', 'due-date');
  dateInput.setAttribute('name', 'due-date');
  noteInput.setAttribute('id', 'note');
  noteInput.setAttribute('name', 'note');
  saveBtn.setAttribute('type', 'submit');
  priorityLabel.setAttribute('for', 'priority');
  prioritySelect.setAttribute('id', 'priority');
  prioritySelect.setAttribute('name', 'priority');
  priorityOptionLow.setAttribute('value', 'low');
  priorityOptionMedium.setAttribute('value', 'medium');
  priorityOptionHigh.setAttribute('value', 'high');
  cancelBtn.setAttribute('type', 'reset');

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

  saveBtn.textContent = 'Save';
  noteInput.textContent = todoObj.note;
  priorityLabel.textContent = 'Priority';
  priorityOptionLow.textContent = 'Low';
  priorityOptionMedium.textContent = 'Medium';
  priorityOptionHigh.textContent = 'High';
  cancelBtn.textContent = 'Cancel';

  saveBtn.onclick = (event) => {
    event.preventDefault();
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.updateTodoData)(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    setWireframeForAllTodos();
    dialog.close();
  };
  cancelBtn.onclick = () => {
    dialog.close();
  }

  prioritySelect.appendChild(priorityOptionLow);
  prioritySelect.appendChild(priorityOptionMedium);
  prioritySelect.appendChild(priorityOptionHigh);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  form.appendChild(titleInput);
  form.appendChild(dateInput);
  form.appendChild(noteInput);
  form.appendChild(priorityContainer);
  form.appendChild(saveBtn);
  form.appendChild(cancelBtn);

  dialog.appendChild(form);

  body.appendChild(dialog);
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

  // create new project instance
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(title, description);

  // open new project
  displayProjectTabs();
  const newProjectNode = projectsDiv.lastChild;
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(newProjectNode);
  colorProjectTab(newProjectNode);
  setWireframeForAllTodos();
  
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
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createNewTodo)(project, title, dueDate, note, priority);
  setWireframeForAllTodos();
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
    "All My Todos", 
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
    'All My Todos',
    'Default Todo',
    '2024-01-31',
    'Notes show here',
    'high',
  ),
  createTodo(
    'Another Project',
    'First Todo Item for Sub-project',
    '2024-01-16',
    'Some random note for this todo',
    'medium',
  ),
  createTodo(
    'Another Project',
    'Second Todo Item for Sub-project',
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
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.setWireframeForAllTodos)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectTabs)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.colorProjectTab)(document.querySelector('.projects div:first-of-type'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cblxuZGl2LmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMWZyO1xuICBnYXA6IDIwcHg7XG5cbiAgPiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgfVxufVxuXG5cbi8qIENPTlRBSU5FUlMgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xufVxuXG5cbi8qIFBST0pFQ1RTICovXG5kaXYucHJvamVjdHMge1xuICA+IC50YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBvcmFuZ2U7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICAgIGdhcDogNXB4O1xuXG4gICAgJltkYXRhLXN0YXR1cz1cIm9wZW5cIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qIFRPRE8gTElTVCAqL1xuZGl2LnRvZG9zIHtcbiAgLnRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIG9yYW5nZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICAuaGVhZGVyLFxuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLm5vdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgfVxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uLnZpZXctbW9kZS51cCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuLyogRk9STVMgKi9cbmRpYWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFNBQVM7O0VBRVQ7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7O0FBR0EsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7O0FBR0EsYUFBYTtBQUNiO0VBQ0U7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsUUFBUTs7SUFFUjtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGO0FBQ0Y7OztBQUdBLGNBQWM7QUFDZDtFQUNFO0lBQ0Usc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxRQUFRO0lBQ1IsbUJBQW1COztJQUVuQjtNQUNFLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFFBQVE7SUFDVjtJQUNBOztNQUVFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsUUFBUTtJQUNWO0lBQ0E7SUFDQSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGFBQWE7SUFDZjtJQUNBO0lBQ0EseUJBQXlCO0lBQ3pCO0VBQ0Y7O0FBRUY7OztBQUdBLFVBQVU7QUFDVjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUI7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuZGl2LmNvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmcjtcXG4gIGdhcDogMjBweDtcXG5cXG4gID4gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBDT05UQUlORVJTICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuXFxuXFxuLyogUFJPSkVDVFMgKi9cXG5kaXYucHJvamVjdHMge1xcbiAgPiAudGFiIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBvcmFuZ2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICAmW2RhdGEtc3RhdHVzPVxcXCJvcGVuXFxcIl0ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vKiBUT0RPIExJU1QgKi9cXG5kaXYudG9kb3Mge1xcbiAgLnRhYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgb3JhbmdlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5kZXRhaWxzIHtcXG4gICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICAuaGVhZGVyLFxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgfVxcbiAgICAuaGlkZGVuIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIGJ1dHRvbi52aWV3LW1vZGUudXAge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuICB9XFxuICBcXG59XFxuXFxuXFxuLyogRk9STVMgKi9cXG5kaWFsb2cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhpcyBmaWxlIGhhbmRsZXMgZGF0YSByZXRyaWV2YWwsIG1hbmlwdWxhdGlvbiwgXG4vLyBhbmQgY3JlYXRpb24gYmV0d2VlbiB0aGUgRE9NIGFuZCB0b2RvL3Byb2plY3Qgc2NyaXB0c1xuXG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgcHJvamVjdExpc3QsIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvTGlzdCwgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZnVuY3Rpb24gZmluZFRvZG9zRm9yQ3VycmVudFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICBpZiAocHJvamVjdFRpdGxlID09PSBcIkFsbCBNeSBUb2RvJ3NcIikge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5wcm9qZWN0ID09PSBwcm9qZWN0VGl0bGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkVG9kb0xpc3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuVG9kb09iaihub2RlKSB7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gIGNvbnN0IHRvZG9PYmogPSB0b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8udGl0bGUgPT09IHRvZG9UaXRsZTtcbiAgfSk7XG4gIHJldHVybiB0b2RvT2JqO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdEluc3RhbmNlKHByb2plY3RUYWJOb2RlKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUYWJOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICBjb25zdCBwcm9qZWN0T2JqID0gcHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0T2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvRGF0YSh0b2RvT2JqLCBpbnB1dEFycikge1xuICBjb25zdCB2YWx1ZXNBcnIgPSBpbnB1dEFyci5tYXAoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICB9KTtcbiAgY29uc3QgW3RpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eV0gPSB2YWx1ZXNBcnI7XG4gIHRvZG9PYmoudGl0bGUgPSB0aXRsZTtcbiAgdG9kb09iai5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdG9kb09iai5ub3RlID0gbm90ZTtcbiAgdG9kb09iai5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMoKSB7XG4gIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG4gIGNvbnN0IG5vZGVMaXN0ID0gdG9kb3NEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICByZXR1cm4gWy4uLm5vZGVMaXN0XTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb1N0YXR1cyhub2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKG5vZGUpO1xuICB0b2RvT2JqLnRvZ2dsZVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvRnJvbUxpc3Qobm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihub2RlKTtcbiAgdG9kb09iai5yZW1vdmVGcm9tTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChub2RlKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSBmaW5kUHJvamVjdEluc3RhbmNlKG5vZGUpO1xuICBwcm9qZWN0T2JqLnNldEFzQ3VycmVudFByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3Qobm9kZSkge1xuICBjb25zdCByZW1vdmVkUHJvamVjdE9iaiA9IGZpbmRQcm9qZWN0SW5zdGFuY2Uobm9kZSk7XG4gIGNvbnN0IHJlbW92ZWRUb2RvcyA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3QgPT09IHJlbW92ZWRQcm9qZWN0T2JqLnRpdGxlO1xuICB9KTtcbiAgcmVtb3ZlZFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHt0b2RvLnJlbW92ZUZyb21MaXN0KCl9KTtcbiAgcmVtb3ZlZFByb2plY3RPYmoucmVtb3ZlRnJvbUxpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgbmV3UHJvamVjdC5hZGRUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyhwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyhcbiAgICBwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1c1xuICApO1xuICBuZXdUb2RvLmFkZFRvTGlzdCgpO1xufVxuXG5cbmV4cG9ydCB7IFxuICBmaW5kVG9kb3NGb3JDdXJyZW50UHJvamVjdCxcbiAgcmV0dXJuVG9kb09iaixcbiAgZmluZFByb2plY3RJbnN0YW5jZSxcbiAgdXBkYXRlVG9kb0RhdGEsXG4gIHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicyxcbiAgdG9nZ2xlVG9kb1N0YXR1cyxcbiAgcmVtb3ZlVG9kb0Zyb21MaXN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGNyZWF0ZU5ld1RvZG9cbn07IiwiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBcbiAgZmluZFRvZG9zRm9yQ3VycmVudFByb2plY3QsXG4gIHJldHVyblRvZG9PYmosXG4gIGZpbmRQcm9qZWN0SW5zdGFuY2UsXG4gIHVwZGF0ZVRvZG9EYXRhLFxuICByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMsXG4gIHRvZ2dsZVRvZG9TdGF0dXMsXG4gIHJlbW92ZVRvZG9Gcm9tTGlzdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBjcmVhdGVOZXdUb2RvXG59IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuXG4vLyBQUk9KRUNUIExJU1RcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudChub2RlKSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUYWJzKCkge1xuICBjbGVhckNvbnRlbnQocHJvamVjdHNEaXYpO1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgcHJvamVjdC50aXRsZSk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIHByb2plY3QudGl0bGUpO1xuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICB0aXRsZVBhcmEub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFByb2plY3QoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgY29sb3JQcm9qZWN0VGFiKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIHNldFdpcmVmcmFtZUZvckFsbFRvZG9zKCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpOyBcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuXG4gICAgICBjb25zdCBkZWxldGVkUHJvamVjdFRpdGxlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBkZWxldGVkUHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Tm9kZSA9IHByb2plY3RzRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0Tm9kZSk7XG4gICAgICAgIGNvbG9yUHJvamVjdFRhYihkZWZhdWx0UHJvamVjdE5vZGUpO1xuICAgICAgICBzZXRXaXJlZnJhbWVGb3JBbGxUb2RvcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3ROb2RlID0gcHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnRhYltkYXRhLXRpdGxlPVwiJHtjdXJyZW50UHJvamVjdC50aXRsZX1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yUHJvamVjdFRhYihjdXJyZW50UHJvamVjdE5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQodGl0bGVQYXJhKTtcbiAgICBpZiAocHJvamVjdCAhPT0gcHJvamVjdExpc3RbMF0pIHRhYi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHRhYik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbG9yUHJvamVjdFRhYihwcm9qZWN0VGFiTm9kZSkge1xuICBjb25zdCBhbGxQcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cyA+IConKTtcbiAgZm9yIChjb25zdCB0YWIgb2YgYWxsUHJvamVjdFRhYnMpIHtcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICcnKTtcbiAgfVxuICBwcm9qZWN0VGFiTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ29wZW4nKTtcbn1cblxuXG4vLyBUT0RPIExJU1RcbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5cbmZ1bmN0aW9uIHNldFdpcmVmcmFtZUZvckFsbFRvZG9zKCkge1xuICBjbGVhckNvbnRlbnQodG9kb3NEaXYpO1xuICBjb25zdCB0b2RvcyA9IGN1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0TGlzdFswXSBcbiAgICA/IHRvZG9MaXN0XG4gICAgOiBmaW5kVG9kb3NGb3JDdXJyZW50UHJvamVjdCgpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgdmlld01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIHRpdGxlUGFyYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGR1ZURhdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJywgJ2hpZGRlbicpO1xuICAgIG5vdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgICBwcmlvcml0eVBhcmEuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBidG5zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgdmlld01vZGVCdG4uY2xhc3NMaXN0LmFkZCgndmlldy1tb2RlJywgJ2Rvd24nKTtcblxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0b2RvLnRpdGxlKTtcbiAgICB2aWV3TW9kZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0b2RvLnRpdGxlKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIHRvZG8udGl0bGUpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0b2RvLnRpdGxlKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCB0b2RvLnRpdGxlKTtcblxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHZpZXdNb2RlQnRuLnRleHRDb250ZW50ID0gJ+KWvCc7XG5cbiAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0b2dnbGVUb2RvU3RhdHVzKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Ub2RvRWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlVG9kb0Zyb21MaXN0KGV2ZW50LnRhcmdldCk7XG4gICAgICBzZXRXaXJlZnJhbWVGb3JBbGxUb2RvcygpO1xuICAgIH07XG4gICAgdmlld01vZGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcm90YXRlVmlld01vZGVCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRvZ2dsZURpc3BsYXlPZkRldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlUGFyYSk7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQYXJhKTtcblxuICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQodmlld01vZGVCdG4pO1xuXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChub3RlUGFyYSk7XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVBhcmEpO1xuXG4gICAgdGFiLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQoYnRuc0Rpdik7XG4gICAgdGFiLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuXG4gICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgfTtcbiAgZGlzcGxheVRvZG9EZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRGV0YWlscygpIHtcbiAgY29uc3QgdG9kb3NOb2RlTGlzdCA9IHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicygpO1xuICBmb3IgKGNvbnN0IHRvZG9Ob2RlIG9mIHRvZG9zTm9kZUxpc3QpIHtcbiAgICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaih0b2RvTm9kZSk7XG5cbiAgICBjb25zdCB0aXRsZVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBjb25zdCBkdWVEYXRlUGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpO1xuICAgIGNvbnN0IG5vdGVQYXJhID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLm5vdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcblxuICAgIHRpdGxlUGFyYS50ZXh0Q29udGVudCA9IHRvZG9PYmoudGl0bGU7XG4gICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLmR1ZURhdGU7XG4gICAgbm90ZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gICAgcHJpb3JpdHlQYXJhLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgdG9kb09iai5wcmlvcml0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVWaWV3TW9kZUJ0bihidG5Ob2RlKSB7XG4gIGlmIChidG5Ob2RlLmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuICB9IGVsc2Uge1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcbiAgICBidG5Ob2RlLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZEZXRhaWxzKGJ0bk5vZGUpIHtcbiAgY29uc3QgdG9kb1RpdGxlID0gYnRuTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgY29uc3QgdG9kb05vZGUgPSB0b2Rvc0Rpdi5xdWVyeVNlbGVjdG9yKGAudGFiW2RhdGEtdGl0bGU9XCIke3RvZG9UaXRsZX1gKTtcbiAgY29uc3QgZGV0YWlsc0RpdiA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XG5cbiAgaWYgKGRldGFpbHNEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuVG9kb0VkaXRNb2RhbChidG5Ob2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKGJ0bk5vZGUpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG9kbycpO1xuICBub3RlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICBcbiAgZGlhbG9nLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0b2RvT2JqLnRpdGxlfWApO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai5kdWVEYXRlfWApO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZS1kYXRlJyk7XG4gIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUnKTtcbiAgbm90ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdub3RlJyk7XG4gIHNhdmVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5T3B0aW9uTG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIHByaW9yaXR5T3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gIHByaW9yaXR5T3B0aW9uSGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHRvZG9PYmoucHJpb3JpdHk7XG4gIGxldCBzZWxlY3RPcHRpb247XG4gIGlmIChjdXJyZW50UHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25Mb3c7XG4gIH0gZWxzZSBpZiAoY3VycmVudFByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uTWVkaXVtO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uSGlnaDtcbiAgfTtcbiAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCcnKTtcblxuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICBub3RlSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBwcmlvcml0eU9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBwcmlvcml0eU9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBwcmlvcml0eU9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gIHNhdmVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlVG9kb0RhdGEoXG4gICAgICB0b2RvT2JqLFxuICAgICAgW3RpdGxlSW5wdXQsIGRhdGVJbnB1dCwgbm90ZUlucHV0LCBwcmlvcml0eVNlbGVjdF0gXG4gICAgKTtcbiAgICBzZXRXaXJlZnJhbWVGb3JBbGxUb2RvcygpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9O1xuICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uTG93KTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb25NZWRpdW0pO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbkhpZ2gpO1xuXG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5vdGVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbn1cblxuXG4vLyBcIkFERFwiIEJVVFRPTlNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdERpYWxvZy5zaG93KCl9O1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdG9kb1wiKTtcbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLmFkZC10b2RvXCIpO1xuYWRkVG9kb0J0bi5vbmNsaWNrID0gKCkgPT4ge3RvZG9EaWFsb2cuc2hvdygpfTtcblxuXG4vLyBQUk9KRUNUIEZPUk1cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBmb3JtXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGlucHV0XCIpO1xuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IHRleHRhcmVhXCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG5zdWJtaXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBjcmVhdGUgbmV3IHByb2plY3QgaW5zdGFuY2VcbiAgY29uc3QgdGl0bGUgPSBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuXG4gIC8vIG9wZW4gbmV3IHByb2plY3RcbiAgZGlzcGxheVByb2plY3RUYWJzKCk7XG4gIGNvbnN0IG5ld1Byb2plY3ROb2RlID0gcHJvamVjdHNEaXYubGFzdENoaWxkO1xuICBzZXRDdXJyZW50UHJvamVjdChuZXdQcm9qZWN0Tm9kZSk7XG4gIGNvbG9yUHJvamVjdFRhYihuZXdQcm9qZWN0Tm9kZSk7XG4gIHNldFdpcmVmcmFtZUZvckFsbFRvZG9zKCk7XG4gIFxuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufVxuXG5jb25zdCByZXNldFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGJ1dHRvblt0eXBlPSdyZXNldCddXCIpO1xucmVzZXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTsgXG59O1xuXG5cbi8vIFRPRE8gRk9STVxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGZvcm1cIik7XG5jb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjdGl0bGVcIik7XG5jb25zdCB0b2RvRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBpbnB1dCNkdWUtZGF0ZVwiKTtcbmNvbnN0IHRvZG9Ob3RlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIHRleHRhcmVhXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIHNlbGVjdFwiKTtcblxuY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xuc3VibWl0VG9kb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdC50aXRsZTsgIFxuICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgbm90ZSA9IHRvZG9Ob3RlSW5wdXQudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGNyZWF0ZU5ld1RvZG8ocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KTtcbiAgc2V0V2lyZWZyYW1lRm9yQWxsVG9kb3MoKTtcbiAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgdG9kb0RpYWxvZy5jbG9zZSgpO1xufVxuXG5jb25zdCByZXNldFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdyZXNldCddXCIpO1xucmVzZXRUb2RvQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHRvZG9EaWFsb2cuY2xvc2UoKTsgXG59O1xuXG5cbmV4cG9ydCB7IFxuICBkaXNwbGF5UHJvamVjdFRhYnMsIFxuICBjb2xvclByb2plY3RUYWIsXG4gIHNldFdpcmVmcmFtZUZvckFsbFRvZG9zXG59OyIsImNsYXNzIFByb2plY3RJdGVtIHsgIFxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWRkVG9MaXN0KCkge1xuICAgIHByb2plY3RMaXN0LnB1c2godGhpcyk7XG4gIH0gXG5cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBlZGl0KHByb3BlcnR5LCBzdHJpbmcpIHtcbiAgICB0aGlzW3Byb3BlcnR5XSA9IHN0cmluZztcbiAgfVxuXG4gIHNldEFzQ3VycmVudFByb2plY3QoKSB7XG4gICAgY3VycmVudFByb2plY3QgPSB0aGlzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvamVjdEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uKTtcbn1cblxuLy8gQW4gYXJyYXkgb2YgUHJvamVjdEl0ZW0gaW5zdGFuY2VzXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtcbiAgY3JlYXRlUHJvamVjdChcbiAgICBcIkFsbCBNeSBUb2Rvc1wiLCBcbiAgICBcIlByb2plY3QgY29udGFpbmluZyBhbGwgbXkgdG9kbydzXCJcbiAgKSxcbiAgY3JlYXRlUHJvamVjdChcbiAgICBcIkFub3RoZXIgUHJvamVjdFwiLCBcbiAgICBcIlByb2plY3QgY29udGFpbmluZyB0b2RvcyBmb3IgYW5vdGhlciBwcm9qZWN0XCJcbiAgKSxcbl07XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0WzBdO1xuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdCwgY3VycmVudFByb2plY3QgfTsiLCJjbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgc3RhdHVzID0gJ29wZW4nKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGFkZFRvTGlzdCgpIHtcbiAgICB0b2RvTGlzdC5wdXNoKHRoaXMpO1xuICB9IFxuXG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0aGlzKTtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgdG9nZ2xlU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMgPT09ICdvcGVuJyA/ICdjbG9zZWQnIDogJ29wZW4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8ocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgcmV0dXJuIG5ldyBUb2RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cyk7XG59XG5cbi8vIEFuIGFycmF5IG9mIFRvZG9JdGVtIGluc3RhbmNlc1xuY29uc3QgdG9kb0xpc3QgPSBbXG4gIGNyZWF0ZVRvZG8oXG4gICAgJ0FsbCBNeSBUb2RvcycsXG4gICAgJ0RlZmF1bHQgVG9kbycsXG4gICAgJzIwMjQtMDEtMzEnLFxuICAgICdOb3RlcyBzaG93IGhlcmUnLFxuICAgICdoaWdoJyxcbiAgKSxcbiAgY3JlYXRlVG9kbyhcbiAgICAnQW5vdGhlciBQcm9qZWN0JyxcbiAgICAnRmlyc3QgVG9kbyBJdGVtIGZvciBTdWItcHJvamVjdCcsXG4gICAgJzIwMjQtMDEtMTYnLFxuICAgICdTb21lIHJhbmRvbSBub3RlIGZvciB0aGlzIHRvZG8nLFxuICAgICdtZWRpdW0nLFxuICApLFxuICBjcmVhdGVUb2RvKFxuICAgICdBbm90aGVyIFByb2plY3QnLFxuICAgICdTZWNvbmQgVG9kbyBJdGVtIGZvciBTdWItcHJvamVjdCcsXG4gICAgJzIwMjQtMDItMjInLFxuICAgICdUaGluZ3MgSSBnb3R0YSByZW1lbWJlciBhYm91dCB0aGlzIHRhc2snLFxuICAgICdtZWRpdW0nLFxuICApLFxuXTtcblxuZXhwb3J0IHsgdG9kb0xpc3QsIGNyZWF0ZVRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3RvZG8uanNcIjtcbmltcG9ydCBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVByb2plY3RUYWJzLCBcbiAgc2V0V2lyZWZyYW1lRm9yQWxsVG9kb3MsXG59IGZyb20gXCIuL2RvbS5qc1wiO1xuXG4vLyBSRU5ERVIgREVGQVVMVCBVSVxuc2V0V2lyZWZyYW1lRm9yQWxsVG9kb3MoKTtcbmRpc3BsYXlQcm9qZWN0VGFicygpO1xuY29sb3JQcm9qZWN0VGFiKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyBkaXY6Zmlyc3Qtb2YtdHlwZScpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=