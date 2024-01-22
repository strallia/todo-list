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
    grid-template-columns: 1fr auto auto;
    gap: 5px;
    align-items: center;

    &[data-status="open"] {
      background-color: orange;
    }
    button {
      height: min-content;
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
  label.required:after {
    content: ' *';
    color: red;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,gCAAgC;EAChC,SAAS;;EAET;IACE,wBAAwB;EAC1B;AACF;;;AAGA,eAAe;AACf;EACE,aAAa;EACb,4BAA4B;AAC9B;;;AAGA,aAAa;AACb;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,mBAAmB;;IAEnB;MACE,wBAAwB;IAC1B;IACA;MACE,mBAAmB;IACrB;EACF;AACF;;;AAGA,cAAc;AACd;EACE;IACE,sCAAsC;IACtC,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,mBAAmB;;IAEnB;MACE,gBAAgB;MAChB,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;;MAEE,aAAa;MACb,8BAA8B;MAC9B,QAAQ;IACV;IACA;IACA,4BAA4B;IAC5B,sBAAsB;IACtB;IACA;MACE,mBAAmB;IACrB;IACA;MACE,aAAa;IACf;IACA;IACA,yBAAyB;IACzB;EACF;;AAEF;;;AAGA,UAAU;AACV;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;EAC1B;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;EACf;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\ndiv.content {\n  padding: 20px;\n\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  gap: 20px;\n\n  > div {\n    border: 1px solid purple;\n  }\n}\n\n\n/* CONTAINERS */\n.container {\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  > .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 5px;\n    align-items: center;\n\n    &[data-status=\"open\"] {\n      background-color: orange;\n    }\n    button {\n      height: min-content;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  .tab {\n    background-color: lightgoldenrodyellow;\n    border: 1px dashed orange;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 5px;\n    align-items: center;\n\n    .details {\n      grid-column: 1/4;\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n    .header,\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      gap: 5px;\n    }\n    .note {\n    background-color: whitesmoke;\n    border: 1px solid grey;\n    }\n    button {\n      height: min-content;\n    }\n    .hidden {\n      display: none;\n    }\n    button.view-mode.up {\n    transform: rotate(180deg);\n    }\n  }\n  \n}\n\n\n/* FORMS */\ndialog {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n  form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n  }\n  label.required:after {\n    content: ' *';\n    color: red;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony export */   assignIDForProject: () => (/* binding */ assignIDForProject),
/* harmony export */   assignTodoID: () => (/* binding */ assignTodoID),
/* harmony export */   assignTodoProjectID: () => (/* binding */ assignTodoProjectID),
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo),
/* harmony export */   findTodosForSelectProject: () => (/* binding */ findTodosForSelectProject),
/* harmony export */   removeDataOfDeletedProject: () => (/* binding */ removeDataOfDeletedProject),
/* harmony export */   removeTodoFromList: () => (/* binding */ removeTodoFromList),
/* harmony export */   returnNodeListOfTodoTabs: () => (/* binding */ returnNodeListOfTodoTabs),
/* harmony export */   returnProjectObj: () => (/* binding */ returnProjectObj),
/* harmony export */   returnTodoObj: () => (/* binding */ returnTodoObj),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),
/* harmony export */   toggleTodoStatus: () => (/* binding */ toggleTodoStatus),
/* harmony export */   updateProjectData: () => (/* binding */ updateProjectData),
/* harmony export */   updateTodoData: () => (/* binding */ updateTodoData),
/* harmony export */   updateTodosProjectValue: () => (/* binding */ updateTodosProjectValue)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts




function findTodosForSelectProject(projectObj) {
  const projectID = projectObj.id;
  const filteredTodoList = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((todo) => {
    return todo.projectID === projectID;
  });
  return filteredTodoList;
}

function returnTodoObj(node) {
  const todoID = node.getAttribute('data-todo-id');
  const todoObj = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.find((todo) => {
    return todo.todoID === todoID;
  });
  return todoObj;
}

function returnProjectObj(projectTabNode) {
  const projectID = projectTabNode.getAttribute('data-id');
  const projectObj = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.find((project) => {
      return project.id === projectID;
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

function updateProjectData(projectObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, description] = valuesArr;
  projectObj.title = title;
  projectObj.description = description;
}

function updateTodosProjectValue(projectObj, newProjectValue) {
 const todos = findTodosForSelectProject(projectObj);
 for (const todo of todos) {
   todo.project = newProjectValue;
 }
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
  const projectObj = returnProjectObj(node);
  projectObj.setAsCurrentProject();
}

function removeDataOfDeletedProject(node) {
  const removedProjectObj = returnProjectObj(node);
  const removedTodos = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((todo) => {
    return todo.projectID === removedProjectObj.id;
  });
  removedTodos.forEach((todo) => {todo.removeFromList()});
  removedProjectObj.removeFromList();
}

function createNewProject(title, description) {
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(assignIDForProject(), title, description);
  newProject.addToList();
}

function createNewTodo(title, dueDate, note, priority) {
  const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
    assignTodoProjectID(), assignTodoID(), title, dueDate, note, priority
  );
  newTodo.addToList();
}


// A project and its todos must have the same id
// Starts at 2 b/c default projects have the previous id numbers
let projectIDCounter = 2;
function assignIDForProject() {
  const id = projectIDCounter.toString();
  incrementIDCounter();
  return id;
}
function incrementIDCounter() {
  ++projectIDCounter;
}
function assignTodoProjectID() {
  return _project__WEBPACK_IMPORTED_MODULE_0__.currentProject.id;
}


// Every todo has a separate todoID to differentiate it from other todos
let todoIDCounter = 3;
function assignTodoID() {
  const id = todoIDCounter.toString();
  ++todoIDCounter;
  return id;
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
/* harmony export */   displayTodoTabsOfCurrentProject: () => (/* binding */ displayTodoTabsOfCurrentProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");





// HELPER FUNCTIONS
function clearContent(node) {
  node.textContent = '';
}

function appendChildren(node, childrenArr) {
  for (const child of childrenArr) {
    node.appendChild(child)
  };
}


// PROJECT LIST
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  clearContent(projectsDiv);
  for (const project of _project__WEBPACK_IMPORTED_MODULE_0__.projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    tab.classList.add('tab');
    editBtn.classList.add('edit');

    tab.setAttribute('data-id', project.id);
    tab.setAttribute('data-status', '');
    deleteBtn.setAttribute('data-id', project.id);
    editBtn.setAttribute('data-id', project.id);

    titlePara.textContent = project.title;
    deleteBtn.textContent = 'X';
    editBtn.textContent = 'Edit';

    titlePara.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(event.target.parentNode);
      colorProjectTab(event.target.parentNode);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openProjectEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_2__.removeDataOfDeletedProject)(event.target.parentNode); 
      displayProjectTabs();

      const deletedProjectID = event.target.getAttribute('data-id');
      if (_project__WEBPACK_IMPORTED_MODULE_0__.currentProject.id === deletedProjectID) {
        const defaultProjectNode = projectsDiv.firstChild;
        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
      } else {
        const currentProjectNode = projectsDiv.querySelector(
          `.tab[data-id="${_project__WEBPACK_IMPORTED_MODULE_0__.currentProject.id}"]`
        );
        colorProjectTab(currentProjectNode);
      }
      displayTodoTabsOfCurrentProject();
    };

    tab.appendChild(titlePara);
    if (project !== _project__WEBPACK_IMPORTED_MODULE_0__.projectList[0]) {
      appendChildren(tab, [editBtn, deleteBtn]);
    }
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

function openProjectEditModal(btnNode) {
  const projectObj = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.returnProjectObj)(btnNode);

  const body = document.querySelector('body');

  const dialog = document.createElement('dialog');
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const descriptionInput = document.createElement('textarea');

  dialog.classList.add('edit-project');
  descriptionInput.classList.add('description');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('value', projectObj.title);
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('required', '');
  descriptionInput.setAttribute('id', 'note');
  descriptionInput.setAttribute('name', 'note');
  saveBtn.setAttribute('type', 'submit');
  cancelBtn.setAttribute('type', 'reset');

  saveBtn.textContent = 'Save';
  cancelBtn.textContent = 'Cancel';
  descriptionInput.textContent = projectObj.description;

  saveBtn.onclick = (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();

    // update the todos project name
    const newTitle = titleInput.value;
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.updateTodosProjectValue)(projectObj, newTitle);

    // update project data in master list
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.updateProjectData)(
      projectObj,
      [titleInput, descriptionInput] 
    );

    // open the edited project's tab
    displayProjectTabs();
    const editedProjectNode = projectsDiv.querySelector(
      `.tab[data-id="${projectObj.id}`
    );
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(editedProjectNode);
    colorProjectTab(editedProjectNode);
    displayTodoTabsOfCurrentProject();

    dialog.close();
  };
  cancelBtn.onclick = () => {dialog.close()};

  appendChildren(form, [
    titleInput,
    descriptionInput,
    saveBtn,
    cancelBtn
  ]);
  dialog.appendChild(form);
  body.appendChild(dialog);
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabsOfCurrentProject() {
  clearContent(todosDiv);
  const todos = _project__WEBPACK_IMPORTED_MODULE_0__.currentProject === _project__WEBPACK_IMPORTED_MODULE_0__.projectList[0] 
    ? _todo__WEBPACK_IMPORTED_MODULE_1__.todoList
    : (0,_controller__WEBPACK_IMPORTED_MODULE_2__.findTodosForSelectProject)(_project__WEBPACK_IMPORTED_MODULE_0__.currentProject);
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

    tab.setAttribute('data-todo-id', todo.todoID);
    viewModeBtn.setAttribute('data-todo-id', todo.todoID);
    editBtn.setAttribute('data-todo-id', todo.todoID);
    deleteBtn.setAttribute('data-todo-id', todo.todoID);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('data-todo-id', todo.todoID);

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
      displayTodoTabsOfCurrentProject();
    };
    viewModeBtn.onclick = (event) => {
      rotateViewModeBtn(event.target);
      toggleDisplayOfDetails(event.target);
    };

    appendChildren(headerDiv, [titlePara, dueDatePara]);
    appendChildren(btnsDiv, [editBtn, deleteBtn, viewModeBtn]);
    appendChildren(detailsDiv, [notePara, priorityPara]);
    appendChildren(tab, [
      checkbox, 
      headerDiv,
      btnsDiv,
      detailsDiv
    ]);
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
    
    const formatDueDate = () => {
      const date = (todoObj.dueDate).split('-');
      let mm = date[1];
      let dd = date[2];
      if (mm.charAt(0) === '0') mm = mm.charAt(1);
      if (dd.charAt(0) === '0') dd = dd.charAt(1);
      return  mm + '/' + dd;
    }

    titlePara.textContent = todoObj.title;
    if (todoObj.dueDate) {
      dueDatePara.textContent = formatDueDate();
    }
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
  const todoID = btnNode.getAttribute('data-todo-id');
  const todoNode = todosDiv.querySelector(`.tab[data-todo-id="${todoID}`);
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
  titleInput.setAttribute('required', '');
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
    if (!form.checkValidity()) return form.reportValidity();
    (0,_controller__WEBPACK_IMPORTED_MODULE_2__.updateTodoData)(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    displayTodoTabsOfCurrentProject();
    dialog.close();
  };
  cancelBtn.onclick = () => {
    dialog.close();
  }

  appendChildren(prioritySelect, [
    priorityOptionLow,
    priorityOptionMedium,
    priorityOptionHigh
  ]);
  appendChildren(priorityContainer, [priorityLabel, prioritySelect]);
  appendChildren(form, [
    titleInput,
    dateInput,
    noteInput,
    priorityContainer,
    saveBtn,
    cancelBtn
  ]);
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
  if (!projectForm.checkValidity()) return projectForm.reportValidity();

  // create new project instance
  const title = projectTitleInput.value;
  const description = projectDescriptionInput.value;
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(title, description);

  // open new project
  displayProjectTabs();
  const newProjectNode = projectsDiv.lastChild;
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(newProjectNode);
  colorProjectTab(newProjectNode);
  displayTodoTabsOfCurrentProject();
  
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

function todaysDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = (today.getMonth() + 1).toString();
  let dd = (today.getDate()).toString();

  if (mm.length === 1) {mm = '0' + mm};
  if (dd.length === 1) {dd = '0' + dd};
  return yyyy + '-' + mm + '-' + dd;
}
todoDueDateInput.setAttribute('min', todaysDate());

const submitTodoBtn = document.querySelector(".add-todo button[type='submit']");
submitTodoBtn.onclick = (event) => {
  event.preventDefault();
  if (!todoForm.checkValidity()) return todoForm.reportValidity(); 
  const title = todoTitleInput.value;
  const dueDate = todoDueDateInput.value;
  const note = todoNoteInput.value;
  const priority = todoPriorityInput.value;
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createNewTodo)(title, dueDate, note, priority);
  displayTodoTabsOfCurrentProject();
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
  constructor(id, title, description) {
    this.id = id;
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

function createProject(id, title, description) {
  return new ProjectItem(id, title, description);
}

// An array of ProjectItem instances
const projectList = [
  createProject(
    '0',
    "All My Todos", 
    "Project containing all my todo's"
  ),
  createProject(
    '1',
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
  constructor(projectID, todoID, title, dueDate, note, priority) {
    this.projectID = projectID;
    this.todoID = todoID;
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = 'open';
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

function createTodo(projectID, todoID, title, dueDate, note, priority) {
  return new TodoItem(projectID, todoID, title, dueDate, note, priority);
}

// An array of TodoItem instances
const todoList = [
  createTodo(
    '0',
    '0',
    'Default Todo',
    '2024-01-31',
    'Notes show here',
    'high',
  ),
  createTodo(
    '1',
    '1',
    'First Todo Item for Sub-project',
    '2024-01-16',
    'Some random note for this todo',
    'medium',
  ),
  createTodo(
    '1',
    '2',
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
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayTodoTabsOfCurrentProject)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectTabs)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.colorProjectTab)(document.querySelector('.projects div:first-of-type'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59XG5cbmRpdi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmcjtcbiAgZ2FwOiAyMHB4O1xuXG4gID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gIH1cbn1cblxuXG4vKiBDT05UQUlORVJTICovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cblxuXG4vKiBQUk9KRUNUUyAqL1xuZGl2LnByb2plY3RzIHtcbiAgPiAudGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgb3JhbmdlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmW2RhdGEtc3RhdHVzPVwib3BlblwiXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qIFRPRE8gTElTVCAqL1xuZGl2LnRvZG9zIHtcbiAgLnRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIG9yYW5nZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICAuaGVhZGVyLFxuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLm5vdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgfVxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uLnZpZXctbW9kZS51cCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuLyogRk9STVMgKi9cbmRpYWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIGxhYmVsLnJlcXVpcmVkOmFmdGVyIHtcbiAgICBjb250ZW50OiAnIConO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUzs7RUFFVDtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOzs7QUFHQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOzs7QUFHQSxhQUFhO0FBQ2I7RUFDRTtJQUNFLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxRQUFRO0lBQ1IsbUJBQW1COztJQUVuQjtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7QUFDRjs7O0FBR0EsY0FBYztBQUNkO0VBQ0U7SUFDRSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFFBQVE7SUFDUixtQkFBbUI7O0lBRW5CO01BQ0UsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsUUFBUTtJQUNWO0lBQ0E7O01BRUUsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixRQUFRO0lBQ1Y7SUFDQTtJQUNBLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7SUFDQSx5QkFBeUI7SUFDekI7RUFDRjs7QUFFRjs7O0FBR0EsVUFBVTtBQUNWO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQjtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG5kaXYuY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMWZyO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgPiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICB9XFxufVxcblxcblxcbi8qIENPTlRBSU5FUlMgKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbn1cXG5cXG5cXG4vKiBQUk9KRUNUUyAqL1xcbmRpdi5wcm9qZWN0cyB7XFxuICA+IC50YWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIG9yYW5nZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8qIFRPRE8gTElTVCAqL1xcbmRpdi50b2RvcyB7XFxuICAudGFiIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmRldGFpbHMge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5oZWFkZXIsXFxuICAgIC5idXR0b25zIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICAubm90ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuICAgIC5oaWRkZW4ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgYnV0dG9uLnZpZXctbW9kZS51cCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcbn1cXG5cXG5cXG4vKiBGT1JNUyAqL1xcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbiAgbGFiZWwucmVxdWlyZWQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIConO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGlzIGZpbGUgaGFuZGxlcyBkYXRhIHJldHJpZXZhbCwgbWFuaXB1bGF0aW9uLCBcbi8vIGFuZCBjcmVhdGlvbiBiZXR3ZWVuIHRoZSBET00gYW5kIHRvZG8vcHJvamVjdCBzY3JpcHRzXG5cbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0KHByb2plY3RPYmopIHtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdE9iai5pZDtcbiAgY29uc3QgZmlsdGVyZWRUb2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3RJRCA9PT0gcHJvamVjdElEO1xuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRvZG9PYmoobm9kZSkge1xuICBjb25zdCB0b2RvSUQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJyk7XG4gIGNvbnN0IHRvZG9PYmogPSB0b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8udG9kb0lEID09PSB0b2RvSUQ7XG4gIH0pO1xuICByZXR1cm4gdG9kb09iajtcbn1cblxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdE9iaihwcm9qZWN0VGFiTm9kZSkge1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VGFiTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RMaXN0LmZpbmQoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SUQ7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdE9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb0RhdGEodG9kb09iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHldID0gdmFsdWVzQXJyO1xuICB0b2RvT2JqLnRpdGxlID0gdGl0bGU7XG4gIHRvZG9PYmouZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRvZG9PYmoubm90ZSA9IG5vdGU7XG4gIHRvZG9PYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERhdGEocHJvamVjdE9iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb25dID0gdmFsdWVzQXJyO1xuICBwcm9qZWN0T2JqLnRpdGxlID0gdGl0bGU7XG4gIHByb2plY3RPYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb3NQcm9qZWN0VmFsdWUocHJvamVjdE9iaiwgbmV3UHJvamVjdFZhbHVlKSB7XG4gY29uc3QgdG9kb3MgPSBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0KHByb2plY3RPYmopO1xuIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuICAgdG9kby5wcm9qZWN0ID0gbmV3UHJvamVjdFZhbHVlO1xuIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzKCkge1xuICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICBjb25zdCBub2RlTGlzdCA9IHRvZG9zRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgcmV0dXJuIFsuLi5ub2RlTGlzdF07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRvZG9TdGF0dXMobm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihub2RlKTtcbiAgdG9kb09iai50b2dnbGVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kb0Zyb21MaXN0KG5vZGUpIHtcbiAgY29uc3QgdG9kb09iaiA9IHJldHVyblRvZG9PYmoobm9kZSk7XG4gIHRvZG9PYmoucmVtb3ZlRnJvbUxpc3QoKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3Qobm9kZSkge1xuICBjb25zdCBwcm9qZWN0T2JqID0gcmV0dXJuUHJvamVjdE9iaihub2RlKTtcbiAgcHJvamVjdE9iai5zZXRBc0N1cnJlbnRQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0KG5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZFByb2plY3RPYmogPSByZXR1cm5Qcm9qZWN0T2JqKG5vZGUpO1xuICBjb25zdCByZW1vdmVkVG9kb3MgPSB0b2RvTGlzdC5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kby5wcm9qZWN0SUQgPT09IHJlbW92ZWRQcm9qZWN0T2JqLmlkO1xuICB9KTtcbiAgcmVtb3ZlZFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHt0b2RvLnJlbW92ZUZyb21MaXN0KCl9KTtcbiAgcmVtb3ZlZFByb2plY3RPYmoucmVtb3ZlRnJvbUxpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoYXNzaWduSURGb3JQcm9qZWN0KCksIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIG5ld1Byb2plY3QuYWRkVG9MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKFxuICAgIGFzc2lnblRvZG9Qcm9qZWN0SUQoKSwgYXNzaWduVG9kb0lEKCksIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eVxuICApO1xuICBuZXdUb2RvLmFkZFRvTGlzdCgpO1xufVxuXG5cbi8vIEEgcHJvamVjdCBhbmQgaXRzIHRvZG9zIG11c3QgaGF2ZSB0aGUgc2FtZSBpZFxuLy8gU3RhcnRzIGF0IDIgYi9jIGRlZmF1bHQgcHJvamVjdHMgaGF2ZSB0aGUgcHJldmlvdXMgaWQgbnVtYmVyc1xubGV0IHByb2plY3RJRENvdW50ZXIgPSAyO1xuZnVuY3Rpb24gYXNzaWduSURGb3JQcm9qZWN0KCkge1xuICBjb25zdCBpZCA9IHByb2plY3RJRENvdW50ZXIudG9TdHJpbmcoKTtcbiAgaW5jcmVtZW50SURDb3VudGVyKCk7XG4gIHJldHVybiBpZDtcbn1cbmZ1bmN0aW9uIGluY3JlbWVudElEQ291bnRlcigpIHtcbiAgKytwcm9qZWN0SURDb3VudGVyO1xufVxuZnVuY3Rpb24gYXNzaWduVG9kb1Byb2plY3RJRCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmlkO1xufVxuXG5cbi8vIEV2ZXJ5IHRvZG8gaGFzIGEgc2VwYXJhdGUgdG9kb0lEIHRvIGRpZmZlcmVudGlhdGUgaXQgZnJvbSBvdGhlciB0b2Rvc1xubGV0IHRvZG9JRENvdW50ZXIgPSAzO1xuZnVuY3Rpb24gYXNzaWduVG9kb0lEKCkge1xuICBjb25zdCBpZCA9IHRvZG9JRENvdW50ZXIudG9TdHJpbmcoKTtcbiAgKyt0b2RvSURDb3VudGVyO1xuICByZXR1cm4gaWQ7XG59XG5cblxuZXhwb3J0IHsgXG4gIGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QsXG4gIHJldHVyblRvZG9PYmosXG4gIHJldHVyblByb2plY3RPYmosXG4gIHVwZGF0ZVRvZG9EYXRhLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgdXBkYXRlVG9kb3NQcm9qZWN0VmFsdWUsXG4gIHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicyxcbiAgdG9nZ2xlVG9kb1N0YXR1cyxcbiAgcmVtb3ZlVG9kb0Zyb21MaXN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGNyZWF0ZU5ld1RvZG8sXG4gIGFzc2lnbklERm9yUHJvamVjdCxcbiAgYXNzaWduVG9kb1Byb2plY3RJRCxcbiAgYXNzaWduVG9kb0lEXG59OyIsImltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgXG4gIGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QsXG4gIHJldHVyblRvZG9PYmosXG4gIHJldHVyblByb2plY3RPYmosXG4gIHVwZGF0ZVRvZG9EYXRhLFxuICByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMsXG4gIHRvZ2dsZVRvZG9TdGF0dXMsXG4gIHJlbW92ZVRvZG9Gcm9tTGlzdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBjcmVhdGVOZXdUb2RvLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgdXBkYXRlVG9kb3NQcm9qZWN0VmFsdWVcbn0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbmZ1bmN0aW9uIGNsZWFyQ29udGVudChub2RlKSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW5BcnIpIHtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbkFycikge1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH07XG59XG5cblxuLy8gUFJPSkVDVCBMSVNUXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRhYnMoKSB7XG4gIGNsZWFyQ29udGVudChwcm9qZWN0c0Rpdik7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG5cbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pZCk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaWQpO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pZCk7XG5cbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgdGl0bGVQYXJhLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIGNvbG9yUHJvamVjdFRhYihldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Qcm9qZWN0RWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpOyBcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuXG4gICAgICBjb25zdCBkZWxldGVkUHJvamVjdElEID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBkZWxldGVkUHJvamVjdElEKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Tm9kZSA9IHByb2plY3RzRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0Tm9kZSk7XG4gICAgICAgIGNvbG9yUHJvamVjdFRhYihkZWZhdWx0UHJvamVjdE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3ROb2RlID0gcHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnRhYltkYXRhLWlkPVwiJHtjdXJyZW50UHJvamVjdC5pZH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yUHJvamVjdFRhYihjdXJyZW50UHJvamVjdE5vZGUpO1xuICAgICAgfVxuICAgICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIH07XG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQodGl0bGVQYXJhKTtcbiAgICBpZiAocHJvamVjdCAhPT0gcHJvamVjdExpc3RbMF0pIHtcbiAgICAgIGFwcGVuZENoaWxkcmVuKHRhYiwgW2VkaXRCdG4sIGRlbGV0ZUJ0bl0pO1xuICAgIH1cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xvclByb2plY3RUYWIocHJvamVjdFRhYk5vZGUpIHtcbiAgY29uc3QgYWxsUHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMgPiAqJyk7XG4gIGZvciAoY29uc3QgdGFiIG9mIGFsbFByb2plY3RUYWJzKSB7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gIH1cbiAgcHJvamVjdFRhYk5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICdvcGVuJyk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0RWRpdE1vZGFsKGJ0bk5vZGUpIHtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHJldHVyblByb2plY3RPYmooYnRuTm9kZSk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICBcbiAgZGlhbG9nLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0T2JqLnRpdGxlKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZScpO1xuICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xuXG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBkZXNjcmlwdGlvbklucHV0LnRleHRDb250ZW50ID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcblxuICBzYXZlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIHRvZG9zIHByb2plY3QgbmFtZVxuICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICB1cGRhdGVUb2Rvc1Byb2plY3RWYWx1ZShwcm9qZWN0T2JqLCBuZXdUaXRsZSk7XG5cbiAgICAvLyB1cGRhdGUgcHJvamVjdCBkYXRhIGluIG1hc3RlciBsaXN0XG4gICAgdXBkYXRlUHJvamVjdERhdGEoXG4gICAgICBwcm9qZWN0T2JqLFxuICAgICAgW3RpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXRdIFxuICAgICk7XG5cbiAgICAvLyBvcGVuIHRoZSBlZGl0ZWQgcHJvamVjdCdzIHRhYlxuICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuICAgIGNvbnN0IGVkaXRlZFByb2plY3ROb2RlID0gcHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudGFiW2RhdGEtaWQ9XCIke3Byb2plY3RPYmouaWR9YFxuICAgICk7XG4gICAgc2V0Q3VycmVudFByb2plY3QoZWRpdGVkUHJvamVjdE5vZGUpO1xuICAgIGNvbG9yUHJvamVjdFRhYihlZGl0ZWRQcm9qZWN0Tm9kZSk7XG4gICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH07XG4gIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge2RpYWxvZy5jbG9zZSgpfTtcblxuICBhcHBlbmRDaGlsZHJlbihmb3JtLCBbXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIHNhdmVCdG4sXG4gICAgY2FuY2VsQnRuXG4gIF0pO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbn1cblxuXG4vLyBUT0RPIExJU1RcbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKSB7XG4gIGNsZWFyQ29udGVudCh0b2Rvc0Rpdik7XG4gIGNvbnN0IHRvZG9zID0gY3VycmVudFByb2plY3QgPT09IHByb2plY3RMaXN0WzBdIFxuICAgID8gdG9kb0xpc3RcbiAgICA6IGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgdmlld01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIHRpdGxlUGFyYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGR1ZURhdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJywgJ2hpZGRlbicpO1xuICAgIG5vdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgICBwcmlvcml0eVBhcmEuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBidG5zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgdmlld01vZGVCdG4uY2xhc3NMaXN0LmFkZCgndmlldy1tb2RlJywgJ2Rvd24nKTtcblxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICB2aWV3TW9kZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcblxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHZpZXdNb2RlQnRuLnRleHRDb250ZW50ID0gJ+KWvCc7XG5cbiAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0b2dnbGVUb2RvU3RhdHVzKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Ub2RvRWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlVG9kb0Zyb21MaXN0KGV2ZW50LnRhcmdldCk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICB2aWV3TW9kZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICByb3RhdGVWaWV3TW9kZUJ0bihldmVudC50YXJnZXQpO1xuICAgICAgdG9nZ2xlRGlzcGxheU9mRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihoZWFkZXJEaXYsIFt0aXRsZVBhcmEsIGR1ZURhdGVQYXJhXSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4oYnRuc0RpdiwgW2VkaXRCdG4sIGRlbGV0ZUJ0biwgdmlld01vZGVCdG5dKTtcbiAgICBhcHBlbmRDaGlsZHJlbihkZXRhaWxzRGl2LCBbbm90ZVBhcmEsIHByaW9yaXR5UGFyYV0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhYiwgW1xuICAgICAgY2hlY2tib3gsIFxuICAgICAgaGVhZGVyRGl2LFxuICAgICAgYnRuc0RpdixcbiAgICAgIGRldGFpbHNEaXZcbiAgICBdKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xuICBkaXNwbGF5VG9kb0RldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9EZXRhaWxzKCkge1xuICBjb25zdCB0b2Rvc05vZGVMaXN0ID0gcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzKCk7XG4gIGZvciAoY29uc3QgdG9kb05vZGUgb2YgdG9kb3NOb2RlTGlzdCkge1xuICAgIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKHRvZG9Ob2RlKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5UGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1hdER1ZURhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gKHRvZG9PYmouZHVlRGF0ZSkuc3BsaXQoJy0nKTtcbiAgICAgIGxldCBtbSA9IGRhdGVbMV07XG4gICAgICBsZXQgZGQgPSBkYXRlWzJdO1xuICAgICAgaWYgKG1tLmNoYXJBdCgwKSA9PT0gJzAnKSBtbSA9IG1tLmNoYXJBdCgxKTtcbiAgICAgIGlmIChkZC5jaGFyQXQoMCkgPT09ICcwJykgZGQgPSBkZC5jaGFyQXQoMSk7XG4gICAgICByZXR1cm4gIG1tICsgJy8nICsgZGQ7XG4gICAgfVxuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gdG9kb09iai50aXRsZTtcbiAgICBpZiAodG9kb09iai5kdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGZvcm1hdER1ZURhdGUoKTtcbiAgICB9XG4gICAgbm90ZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gICAgcHJpb3JpdHlQYXJhLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgdG9kb09iai5wcmlvcml0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVWaWV3TW9kZUJ0bihidG5Ob2RlKSB7XG4gIGlmIChidG5Ob2RlLmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuICB9IGVsc2Uge1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcbiAgICBidG5Ob2RlLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZEZXRhaWxzKGJ0bk5vZGUpIHtcbiAgY29uc3QgdG9kb0lEID0gYnRuTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xuICBjb25zdCB0b2RvTm9kZSA9IHRvZG9zRGl2LnF1ZXJ5U2VsZWN0b3IoYC50YWJbZGF0YS10b2RvLWlkPVwiJHt0b2RvSUR9YCk7XG4gIGNvbnN0IGRldGFpbHNEaXYgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuXG4gIGlmIChkZXRhaWxzRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblRvZG9FZGl0TW9kYWwoYnRuTm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihidG5Ob2RlKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgbm90ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai50aXRsZX1gKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai5kdWVEYXRlfWApO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZS1kYXRlJyk7XG4gIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUnKTtcbiAgbm90ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdub3RlJyk7XG4gIHNhdmVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5T3B0aW9uTG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIHByaW9yaXR5T3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gIHByaW9yaXR5T3B0aW9uSGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHRvZG9PYmoucHJpb3JpdHk7XG4gIGxldCBzZWxlY3RPcHRpb247XG4gIGlmIChjdXJyZW50UHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25Mb3c7XG4gIH0gZWxzZSBpZiAoY3VycmVudFByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uTWVkaXVtO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uSGlnaDtcbiAgfTtcbiAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCcnKTtcblxuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICBub3RlSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBwcmlvcml0eU9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBwcmlvcml0eU9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBwcmlvcml0eU9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gIHNhdmVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB1cGRhdGVUb2RvRGF0YShcbiAgICAgIHRvZG9PYmosXG4gICAgICBbdGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBub3RlSW5wdXQsIHByaW9yaXR5U2VsZWN0XSBcbiAgICApO1xuICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfTtcbiAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH1cblxuICBhcHBlbmRDaGlsZHJlbihwcmlvcml0eVNlbGVjdCwgW1xuICAgIHByaW9yaXR5T3B0aW9uTG93LFxuICAgIHByaW9yaXR5T3B0aW9uTWVkaXVtLFxuICAgIHByaW9yaXR5T3B0aW9uSGlnaFxuICBdKTtcbiAgYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHlDb250YWluZXIsIFtwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdF0pO1xuICBhcHBlbmRDaGlsZHJlbihmb3JtLCBbXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgbm90ZUlucHV0LFxuICAgIHByaW9yaXR5Q29udGFpbmVyLFxuICAgIHNhdmVCdG4sXG4gICAgY2FuY2VsQnRuXG4gIF0pO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbn1cblxuXG4vLyBcIkFERFwiIEJVVFRPTlNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdERpYWxvZy5zaG93KCl9O1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdG9kb1wiKTtcbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLmFkZC10b2RvXCIpO1xuYWRkVG9kb0J0bi5vbmNsaWNrID0gKCkgPT4ge3RvZG9EaWFsb2cuc2hvdygpfTtcblxuXG4vLyBQUk9KRUNUIEZPUk1cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBmb3JtXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGlucHV0XCIpO1xuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IHRleHRhcmVhXCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG5zdWJtaXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFwcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuXG4gIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBpbnN0YW5jZVxuICBjb25zdCB0aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgLy8gb3BlbiBuZXcgcHJvamVjdFxuICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgY29uc3QgbmV3UHJvamVjdE5vZGUgPSBwcm9qZWN0c0Rpdi5sYXN0Q2hpbGQ7XG4gIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3ROb2RlKTtcbiAgY29sb3JQcm9qZWN0VGFiKG5ld1Byb2plY3ROb2RlKTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICBcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpOyBcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0ncmVzZXQnXVwiKTtcbnJlc2V0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufTtcblxuXG4vLyBUT0RPIEZPUk1cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBmb3JtXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGlucHV0I3RpdGxlXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjZHVlLWRhdGVcIik7XG5jb25zdCB0b2RvTm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyB0ZXh0YXJlYVwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBzZWxlY3RcIik7XG5cbmZ1bmN0aW9uIHRvZGF5c0RhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGxldCBtbSA9ICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGRkID0gKHRvZGF5LmdldERhdGUoKSkudG9TdHJpbmcoKTtcblxuICBpZiAobW0ubGVuZ3RoID09PSAxKSB7bW0gPSAnMCcgKyBtbX07XG4gIGlmIChkZC5sZW5ndGggPT09IDEpIHtkZCA9ICcwJyArIGRkfTtcbiAgcmV0dXJuIHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xufVxudG9kb0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5c0RhdGUoKSk7XG5cbmNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbnN1Ym1pdFRvZG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHRvZG9Gb3JtLnJlcG9ydFZhbGlkaXR5KCk7IFxuICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgbm90ZSA9IHRvZG9Ob3RlSW5wdXQudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGNyZWF0ZU5ld1RvZG8odGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICB0b2RvRm9ybS5yZXNldCgpO1xuICB0b2RvRGlhbG9nLmNsb3NlKCk7XG59XG5cbmNvbnN0IHJlc2V0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gYnV0dG9uW3R5cGU9J3Jlc2V0J11cIik7XG5yZXNldFRvZG9CdG4ub25jbGljayA9ICgpID0+IHtcbiAgdG9kb0RpYWxvZy5jbG9zZSgpOyBcbn07XG5cblxuZXhwb3J0IHsgXG4gIGRpc3BsYXlQcm9qZWN0VGFicywgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdFxufTsiLCJjbGFzcyBQcm9qZWN0SXRlbSB7ICBcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWRkVG9MaXN0KCkge1xuICAgIHByb2plY3RMaXN0LnB1c2godGhpcyk7XG4gIH0gXG5cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBlZGl0KHByb3BlcnR5LCBzdHJpbmcpIHtcbiAgICB0aGlzW3Byb3BlcnR5XSA9IHN0cmluZztcbiAgfVxuXG4gIHNldEFzQ3VycmVudFByb2plY3QoKSB7XG4gICAgY3VycmVudFByb2plY3QgPSB0aGlzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IFByb2plY3RJdGVtKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xufVxuXG4vLyBBbiBhcnJheSBvZiBQcm9qZWN0SXRlbSBpbnN0YW5jZXNcbmNvbnN0IHByb2plY3RMaXN0ID0gW1xuICBjcmVhdGVQcm9qZWN0KFxuICAgICcwJyxcbiAgICBcIkFsbCBNeSBUb2Rvc1wiLCBcbiAgICBcIlByb2plY3QgY29udGFpbmluZyBhbGwgbXkgdG9kbydzXCJcbiAgKSxcbiAgY3JlYXRlUHJvamVjdChcbiAgICAnMScsXG4gICAgXCJBbm90aGVyIFByb2plY3RcIiwgXG4gICAgXCJQcm9qZWN0IGNvbnRhaW5pbmcgdG9kb3MgZm9yIGFub3RoZXIgcHJvamVjdFwiXG4gICksXG5dO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFswXTtcblxuZXhwb3J0IHsgcHJvamVjdExpc3QsIGNyZWF0ZVByb2plY3QsIGN1cnJlbnRQcm9qZWN0IH07IiwiY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgdGhpcy50b2RvSUQgPSB0b2RvSUQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGF0dXMgPSAnb3Blbic7XG4gIH1cblxuICBhZGRUb0xpc3QoKSB7XG4gICAgdG9kb0xpc3QucHVzaCh0aGlzKTtcbiAgfSBcblxuICByZW1vdmVGcm9tTGlzdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmluZGV4T2YodGhpcyk7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzID09PSAnb3BlbicgPyAnY2xvc2VkJyA6ICdvcGVuJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIG5ldyBUb2RvSXRlbShwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KTtcbn1cblxuLy8gQW4gYXJyYXkgb2YgVG9kb0l0ZW0gaW5zdGFuY2VzXG5jb25zdCB0b2RvTGlzdCA9IFtcbiAgY3JlYXRlVG9kbyhcbiAgICAnMCcsXG4gICAgJzAnLFxuICAgICdEZWZhdWx0IFRvZG8nLFxuICAgICcyMDI0LTAxLTMxJyxcbiAgICAnTm90ZXMgc2hvdyBoZXJlJyxcbiAgICAnaGlnaCcsXG4gICksXG4gIGNyZWF0ZVRvZG8oXG4gICAgJzEnLFxuICAgICcxJyxcbiAgICAnRmlyc3QgVG9kbyBJdGVtIGZvciBTdWItcHJvamVjdCcsXG4gICAgJzIwMjQtMDEtMTYnLFxuICAgICdTb21lIHJhbmRvbSBub3RlIGZvciB0aGlzIHRvZG8nLFxuICAgICdtZWRpdW0nLFxuICApLFxuICBjcmVhdGVUb2RvKFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJ1NlY29uZCBUb2RvIEl0ZW0gZm9yIFN1Yi1wcm9qZWN0JyxcbiAgICAnMjAyNC0wMi0yMicsXG4gICAgJ1RoaW5ncyBJIGdvdHRhIHJlbWVtYmVyIGFib3V0IHRoaXMgdGFzaycsXG4gICAgJ21lZGl1bScsXG4gICksXG5dO1xuXG5leHBvcnQgeyB0b2RvTGlzdCwgY3JlYXRlVG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBcbiAgY29sb3JQcm9qZWN0VGFiLFxuICBkaXNwbGF5UHJvamVjdFRhYnMsIFxuICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0LFxufSBmcm9tIFwiLi9kb20uanNcIjtcblxuLy8gUkVOREVSIERFRkFVTFQgVUlcbmRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbmRpc3BsYXlQcm9qZWN0VGFicygpO1xuY29sb3JQcm9qZWN0VGFiKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyBkaXY6Zmlyc3Qtb2YtdHlwZScpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=