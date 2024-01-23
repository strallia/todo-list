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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/list.png */ "./src/assets/icons/list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/edit.png */ "./src/assets/icons/edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/delete.png */ "./src/assets/icons/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/arrow.png */ "./src/assets/icons/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline: 1px solid red; */
  font-family: 'Nunito', sans-serif;
}
:root {
  --navy: #102937;
  --seagreen: #124d54;
  --orange: #f9744b;
  --wheat: #e1d9cf;
  --sand: #ededed;
}
body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: var(--sand);
}
div.content {
  display: grid;
  grid-template-columns: min-content 1fr;
}


/* CONTAINERS */
.container-menu {
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  background-color: var(--navy);
  color: var(--sand);
  font-size: 16px;
  height: 100vh;
  overflow-y: auto;

  h1 {
    font-size: 2em;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    color: var(--sand);
    top: 0;
    background-color: var(--navy);
  }
  h1:before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    zoom: 8%;
    filter: invert(1);
  }
  h1, h3, p {
    user-select: none;
  }
  .container-projects {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 10px;
    padding: 0 20px 0 20px;
    h3 {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--sand);
      margin-bottom: 10px;
      font-size: 1.5em;
      align-items: center;
      position: sticky;
      top: 0;
      background-color: var(--navy);
      box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0.3);
      padding-left: 10px;
      padding-right: 10px;
      z-index: 1;
    }
    button.add-project {
      color: inherit;
      font-size: 1.5em;
      width: 40px;
    }
  }
  footer {
    color: var(--wheat);
    font-size: 0.8em;
    padding-bottom: 10px;
    padding-top: 10px;
    a,
    a:visited {
      color: inherit;
    }
  }
}
.container-todos {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 20px 40px;
  min-width: 300px;

  > header {
    flex-basis: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--navy);
    p {
      color: var(--seagreen)
    }
  }
}


/* PROJECTS */
div.projects {
  display: grid;
  grid-auto-rows: min-content;
  gap: 10px;
  padding: 0 5px 0 5px;

  > .tab {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    padding: 10px;
    display: flex;
    border-radius: 10px;
    gap: 12px;
    
    p {
      width: 190px;
      text-align: left;
      margin-right: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    button.edit:hover {
      filter: invert(13%) sepia(34%) saturate(872%) hue-rotate(157deg) brightness(97%) contrast(97%);
    }
    button.edit::after,
    button.delete::after {
      filter: invert(1);
    }
  }
  > .tab:hover {
    background-color: var(--seagreen);
    font-weight: bold;
  }
  > .tab:active,
  > .tab[data-status="open"] {
    background-color: var(--orange);
    color: var(--navy);
    font-weight: bold;
    button {
      filter: invert(1);
    }
    button:hover {
      filter: none;
    }
  }
}


/* TODO LIST */
div.todos {
  .tab {
    border-bottom: 2px solid var(--wheat);
    padding: 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 15px;
    align-items: center;

    .details {
      grid-column: 1/4;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .header,
    .details {
      user-select: none;
    }
    .header,
    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
      justify-items: center;
    }
    .note {
    background-color: whitesmoke;
    border: 1px solid grey;
    }
    button {
      filter: contrast(5%);
    }
    button.edit:hover,
    button.view-mode:hover {
      filter: invert(28%) sepia(64%) saturate(1046%) hue-rotate(141deg) brightness(92%) contrast(102%);
    }
    button.delete:hover {
      filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);
    }
    .hidden {
      display: none;
    }
    button.view-mode.up {
      transform: rotate(180deg);
    }
  }
  .tab:hover {
    background-color: var(--wheat);
  }
  .high-priority {
    border-left: 3px solid red;
  }
  .medium-priority {
    border-left: 3px solid orange;
  }
  .checked {
    border-left: none;
    p.title {
      text-decoration: line-through;
    }
    button.edit,
    button.view-mode,
    .due-date {
      display: none;
    }
  }
}


/* BUTTONS */
button{
  background-color: transparent;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}
button.edit::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  zoom: 3.5%;
}
button.delete::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  zoom: 3.5%;
}
button.view-mode::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  zoom: 2.5%;
}
button.add-project:hover {
  font-weight: bold;
}
button.edit:hover,
button.add-project:hover {
  filter: invert(27%) sepia(8%) saturate(3459%) hue-rotate(139deg) brightness(87%) contrast(95%);
}
button.delete:hover {
  filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);
}
button.add-todo {
  padding: 15px;
  border-bottom: 2px solid var(--wheat);
  border-radius: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--seagreen);
}
button.add-todo::before {
  content: '+';
  margin-right: 10px;
  font-size: 20px;
}
button.add-todo:hover {
  background-color: var(--wheat);
  color: var(--navy);
}
button.add-todo:active {
  filter: brightness(80%);
}


/* FORMS */
dialog {
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(5px);
  z-index: 2;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
  }
  label.required::after {
    content: ' *';
    color: red;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n  font-family: 'Nunito', sans-serif;\n}\n:root {\n  --navy: #102937;\n  --seagreen: #124d54;\n  --orange: #f9744b;\n  --wheat: #e1d9cf;\n  --sand: #ededed;\n}\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: var(--sand);\n}\ndiv.content {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\n\n/* CONTAINERS */\n.container-menu {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  text-align: center;\n  background-color: var(--navy);\n  color: var(--sand);\n  font-size: 16px;\n  height: 100vh;\n  overflow-y: auto;\n\n  h1 {\n    font-size: 2em;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 20px;\n    color: var(--sand);\n    top: 0;\n    background-color: var(--navy);\n  }\n  h1:before {\n    content: url('./assets/icons/list.png');\n    zoom: 8%;\n    filter: invert(1);\n  }\n  h1, h3, p {\n    user-select: none;\n  }\n  .container-projects {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 10px;\n    padding: 0 20px 0 20px;\n    h3 {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid var(--sand);\n      margin-bottom: 10px;\n      font-size: 1.5em;\n      align-items: center;\n      position: sticky;\n      top: 0;\n      background-color: var(--navy);\n      box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0.3);\n      padding-left: 10px;\n      padding-right: 10px;\n      z-index: 1;\n    }\n    button.add-project {\n      color: inherit;\n      font-size: 1.5em;\n      width: 40px;\n    }\n  }\n  footer {\n    color: var(--wheat);\n    font-size: 0.8em;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    a,\n    a:visited {\n      color: inherit;\n    }\n  }\n}\n.container-todos {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: auto;\n  padding: 20px 40px;\n  min-width: 300px;\n\n  > header {\n    flex-basis: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 20px;\n    color: var(--navy);\n    p {\n      color: var(--seagreen)\n    }\n  }\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: 10px;\n  padding: 0 5px 0 5px;\n\n  > .tab {\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    align-items: center;\n    padding: 10px;\n    display: flex;\n    border-radius: 10px;\n    gap: 12px;\n    \n    p {\n      width: 190px;\n      text-align: left;\n      margin-right: auto;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    button.edit:hover {\n      filter: invert(13%) sepia(34%) saturate(872%) hue-rotate(157deg) brightness(97%) contrast(97%);\n    }\n    button.edit::after,\n    button.delete::after {\n      filter: invert(1);\n    }\n  }\n  > .tab:hover {\n    background-color: var(--seagreen);\n    font-weight: bold;\n  }\n  > .tab:active,\n  > .tab[data-status=\"open\"] {\n    background-color: var(--orange);\n    color: var(--navy);\n    font-weight: bold;\n    button {\n      filter: invert(1);\n    }\n    button:hover {\n      filter: none;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  .tab {\n    border-bottom: 2px solid var(--wheat);\n    padding: 15px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 15px;\n    align-items: center;\n\n    .details {\n      grid-column: 1/4;\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n    .header,\n    .details {\n      user-select: none;\n    }\n    .header,\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      gap: 12px;\n      align-items: center;\n      justify-items: center;\n    }\n    .note {\n    background-color: whitesmoke;\n    border: 1px solid grey;\n    }\n    button {\n      filter: contrast(5%);\n    }\n    button.edit:hover,\n    button.view-mode:hover {\n      filter: invert(28%) sepia(64%) saturate(1046%) hue-rotate(141deg) brightness(92%) contrast(102%);\n    }\n    button.delete:hover {\n      filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n    }\n    .hidden {\n      display: none;\n    }\n    button.view-mode.up {\n      transform: rotate(180deg);\n    }\n  }\n  .tab:hover {\n    background-color: var(--wheat);\n  }\n  .high-priority {\n    border-left: 3px solid red;\n  }\n  .medium-priority {\n    border-left: 3px solid orange;\n  }\n  .checked {\n    border-left: none;\n    p.title {\n      text-decoration: line-through;\n    }\n    button.edit,\n    button.view-mode,\n    .due-date {\n      display: none;\n    }\n  }\n}\n\n\n/* BUTTONS */\nbutton{\n  background-color: transparent;\n  border: none;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  cursor: pointer;\n}\nbutton.edit::after {\n  content: url('./assets/icons/edit.png');\n  zoom: 3.5%;\n}\nbutton.delete::after {\n  content: url('./assets/icons/delete.png');\n  zoom: 3.5%;\n}\nbutton.view-mode::after {\n  content: url('./assets/icons/arrow.png');\n  zoom: 2.5%;\n}\nbutton.add-project:hover {\n  font-weight: bold;\n}\nbutton.edit:hover,\nbutton.add-project:hover {\n  filter: invert(27%) sepia(8%) saturate(3459%) hue-rotate(139deg) brightness(87%) contrast(95%);\n}\nbutton.delete:hover {\n  filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n}\nbutton.add-todo {\n  padding: 15px;\n  border-bottom: 2px solid var(--wheat);\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: var(--seagreen);\n}\nbutton.add-todo::before {\n  content: '+';\n  margin-right: 10px;\n  font-size: 20px;\n}\nbutton.add-todo:hover {\n  background-color: var(--wheat);\n  color: var(--navy);\n}\nbutton.add-todo:active {\n  filter: brightness(80%);\n}\n\n\n/* FORMS */\ndialog {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n\n  form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n  }\n  label.required::after {\n    content: ' *';\n    color: red;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony export */   findIndexOfProjectInMasterList: () => (/* binding */ findIndexOfProjectInMasterList),
/* harmony export */   findIndexOfTodoInMasterList: () => (/* binding */ findIndexOfTodoInMasterList),
/* harmony export */   findTodosForSelectProject: () => (/* binding */ findTodosForSelectProject),
/* harmony export */   moveCheckedTodoInListOrder: () => (/* binding */ moveCheckedTodoInListOrder),
/* harmony export */   removeDataOfDeletedProject: () => (/* binding */ removeDataOfDeletedProject),
/* harmony export */   removeTodoFromList: () => (/* binding */ removeTodoFromList),
/* harmony export */   returnNodeListOfTodoTabs: () => (/* binding */ returnNodeListOfTodoTabs),
/* harmony export */   returnProjectObj: () => (/* binding */ returnProjectObj),
/* harmony export */   returnTodoObj: () => (/* binding */ returnTodoObj),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),
/* harmony export */   sortTodoListByStatus: () => (/* binding */ sortTodoListByStatus),
/* harmony export */   storageGetCurrentProject: () => (/* binding */ storageGetCurrentProject),
/* harmony export */   storageGetList: () => (/* binding */ storageGetList),
/* harmony export */   storageSetItem: () => (/* binding */ storageSetItem),
/* harmony export */   toggleTodoStatus: () => (/* binding */ toggleTodoStatus),
/* harmony export */   updateProjectData: () => (/* binding */ updateProjectData),
/* harmony export */   updateTodoData: () => (/* binding */ updateTodoData)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
// This file handles data retrieval, manipulation, 
// and creation between the DOM and todo/project scripts




function storageGetList(listString) {
  const plainList = JSON.parse(localStorage.getItem(listString));
  const instantiatedList = plainList.map((plainObj) => {
    if (listString === 'projectList') {
      const id = plainObj.id;
      const title = plainObj.title;
      const description = plainObj.description;
      return (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(id, title, description);
    } else if (listString === 'todoList') {
      const projectID = plainObj.projectID;
      const todoID = plainObj.todoID;
      const title = plainObj.title;
      const dueDate = plainObj.dueDate;
      const note = plainObj.note;
      const priority = plainObj.priority;
      const status = plainObj.status;
      return (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(projectID, todoID, title, dueDate, note, priority, status);
    }
  })
  return instantiatedList;
}

function storageGetCurrentProject() {
  const plainObj = JSON.parse(localStorage.getItem('currentProject'));
  const id = plainObj.id;
  const title = plainObj.title;
  const description = plainObj.description;
  const instantiatedObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(id, title, description);
  return instantiatedObj;
}

function storageGetIDCounter(typeString) {
  return localStorage.getItem(typeString);
}

function storageSetItem(keyString, value) {
  localStorage.setItem(keyString, JSON.stringify(value));
}

function findIndexOfTodoInMasterList(todoList, todoObj) {
  const index = todoList.map((e) => e.todoID).indexOf(todoObj.todoID);
  return index;
}

function findIndexOfProjectInMasterList(projectList, projectObj) {
  const index = projectList.map((e) => e.id).indexOf(projectObj.id);
  return index;
}

function findTodosForSelectProject(projectObj) {
  const projectID = projectObj.id;
  const todoList = storageGetList('todoList');
  const filteredTodoList = todoList.filter((todo) => {
    return todo.projectID === projectID;
  });
  return filteredTodoList;
}

function returnTodoObj(node) {
  const todoID = node.getAttribute('data-todo-id');
  const todoList = storageGetList('todoList');
  const todoObj = todoList.find((todo) => {
    return todo.todoID === todoID;
  });
  return todoObj;
}

function returnProjectObj(projectTabNode) {
  const projectID = projectTabNode.getAttribute('data-id');
  const projectList = storageGetList('projectList');
  const projectObj = projectList.find((project) => {
      return project.id === projectID;
  });
  return projectObj;
}

function updateTodoData(todoObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, dueDate, note, priority] = valuesArr;
  const updatedObj = {
    projectID: todoObj.projectID,
    todoID: todoObj.todoID,
    title, 
    dueDate,
    note,
    priority,
    status: todoObj.status
  }
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj);
  todoList[index] = updatedObj;
  storageSetItem('todoList', todoList);
}

function updateProjectData(projectObj, inputArr) {
  const valuesArr = inputArr.map((input) => {
    return input.value;
  });
  const [title, description] = valuesArr;
  const updatedObj = {
    id: projectObj.id,
    title, 
    description
  }
  const projectList = storageGetList('projectList');
  const index = findIndexOfProjectInMasterList(projectList, projectObj);
  projectList[index] = updatedObj;
  storageSetItem('projectList', projectList);
}

function returnNodeListOfTodoTabs() {
  const todosDiv = document.querySelector('.todos');
  const nodeList = todosDiv.querySelectorAll('.tab');
  return [...nodeList];
}

function toggleTodoStatus(node) {
  const todoObj = returnTodoObj(node);
  let newStatus;
  if (node.checked) {
    newStatus = 'closed';
  } else {
    newStatus = 'open'
  }
  const updatedObj = {
    projectID: todoObj.projectID,
    todoID: todoObj.todoID,
    title: todoObj.title, 
    dueDate: todoObj.dueDate,
    note: todoObj.note,
    priority: todoObj.priority,
    status: newStatus
  }
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj)
  todoList[index] = updatedObj;
  storageSetItem('todoList', todoList);
}

function removeTodoFromList(node) {
  const todoObj = returnTodoObj(node);
  todoObj.removeFromList();
}

function setCurrentProject(node) {
  const projectObj = returnProjectObj(node);
  storageSetItem('currentProject', projectObj);
}

function removeDataOfDeletedProject(node) {
  const removedProjectObj = returnProjectObj(node);
  const todoList = storageGetList('todoList');
  const removedTodos = todoList.filter((todo) => {
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

function sortTodoListByStatus(todos) {
  const openTodos = todos.filter((todo) => todo.status === 'open');
  const closedTodos = todos.filter((todo) => todo.status === 'closed');
  const sortedList = [...openTodos, ...closedTodos];
  return sortedList;
}

function moveCheckedTodoInListOrder(node) {
  const todoObj = returnTodoObj(node);
  const todoList = storageGetList('todoList');
  const index = findIndexOfTodoInMasterList(todoList, todoObj);
  todoList.splice(index, 1);
  if (todoObj.status === 'closed') todoList.push(todoObj);
  if (todoObj.status === 'open') todoList.unshift(todoObj);
  storageSetItem('todoList', todoList);
}


// A project and its todos must share the same id
function assignIDForProject() {
  let id = +storageGetIDCounter('projectIDCounter');
  let incrementID = id + 1
  storageSetItem('projectIDCounter', incrementID);
  return id.toString();
}
function assignTodoProjectID() {
  const currentProject = storageGetCurrentProject();
  return currentProject.id;
}


// Every todo has a separate todoID to differentiate it from other todos
function assignTodoID() {
  let id = +storageGetIDCounter('todoIDCounter');
  let incrementID = id + 1
  storageSetItem('todoIDCounter', incrementID);
  return id.toString();
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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



// DOM HELPER FUNCTIONS
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
  const projectList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('projectList');
  for (const project of projectList) {
    const tab = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    tab.classList.add('tab');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');

    tab.setAttribute('data-id', project.id);
    tab.setAttribute('data-status', '');
    deleteBtn.setAttribute('data-id', project.id);
    editBtn.setAttribute('data-id', project.id);

    titlePara.textContent = project.title;

    titlePara.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(event.target.parentNode);
      colorProjectTab(event.target.parentNode);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openProjectEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.removeDataOfDeletedProject)(event.target.parentNode); 
      displayProjectTabs();

      const deletedProjectID = event.target.getAttribute('data-id');
      const currentProject = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetCurrentProject)();
      if (currentProject.id === deletedProjectID) {
        const defaultProjectNode = projectsDiv.firstChild;
        (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
      } else {
        const currentProjectNode = projectsDiv.querySelector(
          `.tab[data-id="${currentProject.id}"]`
        );
        colorProjectTab(currentProjectNode);
      }
      displayTodoTabsOfCurrentProject();
    };

    tab.appendChild(titlePara);
    if (project !== projectList[0]) {
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
  const projectObj = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.returnProjectObj)(btnNode);

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

    // update project data in master list
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.updateProjectData)(
      projectObj,
      [titleInput, descriptionInput] 
    );

    // open the edited project's tab
    displayProjectTabs();
    const editedProjectNode = projectsDiv.querySelector(
      `.tab[data-id="${projectObj.id}`
    );
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(editedProjectNode);
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


// TODO HEADER
const todoHeader = document.querySelector('.container-todos > header')
function displayTodoHeaderContent() {
  const h1 = todoHeader.querySelector('h1');
  const para = todoHeader.querySelector('p');

  const currentProject = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetCurrentProject)();

  h1.textContent = currentProject.title;
  para.textContent = currentProject.description;
}


// TODO LIST
const todosDiv = document.querySelector('.todos');

function displayTodoTabsOfCurrentProject() {
  displayTodoHeaderContent();
  clearContent(todosDiv);
  const projectList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('projectList');
  const todoList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('todoList');
  const currentProject = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetCurrentProject)('currentProject');
  let todos = currentProject.id === projectList[0].id
    ? todoList
    : (0,_controller__WEBPACK_IMPORTED_MODULE_0__.findTodosForSelectProject)(currentProject);
  todos = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.sortTodoListByStatus)(todos);
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
    
    if (todo.priority === 'high') {
      tab.classList.add('high-priority');
    } else if (todo.priority === 'medium') {
      tab.classList.add('medium-priority');
    }
    if (todo.status === 'closed') {
      checkbox.checked = true;
      tab.classList.add('checked');
    }

    checkbox.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.toggleTodoStatus)(event.target);
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.moveCheckedTodoInListOrder)(event.target);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openTodoEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.removeTodoFromList)(event.target);
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
  const todosNodeList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.returnNodeListOfTodoTabs)();
  for (const todoNode of todosNodeList) {
    const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.returnTodoObj)(todoNode);

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
  const todoObj = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.returnTodoObj)(btnNode);

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
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.updateTodoData)(
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
  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(title, description);

  // open new project
  displayProjectTabs();
  const newProjectNode = projectsDiv.lastChild;
  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(newProjectNode);
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
  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)(title, dueDate, note, priority);
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
/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


class ProjectItem {  
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  addToList() {
    const projectList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('projectList');
    projectList.push(this);
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageSetItem)('projectList', projectList);
  } 

  removeFromList() {
    const projectList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('projectList');
    const index = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.findIndexOfProjectInMasterList)(projectList, this);
    projectList.splice(index, 1);
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageSetItem)('projectList', projectList);
  }
}

function createProject(id, title, description) {
  return new ProjectItem(id, title, description);
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


class TodoItem {
  constructor(projectID, todoID, title, dueDate, note, priority, status = 'open') {
    this.projectID = projectID;
    this.todoID = todoID;
    this.title = title;
    this.dueDate = dueDate;
    this.note = note;
    this.priority = priority;
    this.status = status;
  }

  addToList() {
    const todoList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('todoList');
    todoList.push(this);
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageSetItem)('todoList', todoList);
  } 

  removeFromList() {
    const todoList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('todoList');
    const index = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.findIndexOfTodoInMasterList)(todoList, this);
    todoList.splice(index, 1);
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageSetItem)('todoList', todoList);
  }
}

function createTodo(projectID, todoID, title, dueDate, note, priority, status) {
  return new TodoItem(projectID, todoID, title, dueDate, note, priority, status);
}



/***/ }),

/***/ "./src/assets/icons/arrow.png":
/*!************************************!*\
  !*** ./src/assets/icons/arrow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0beda3df974b74fa82c5.png";

/***/ }),

/***/ "./src/assets/icons/delete.png":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4b58337bd3477db466.png";

/***/ }),

/***/ "./src/assets/icons/edit.png":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/assets/icons/list.png":
/*!***********************************!*\
  !*** ./src/assets/icons/list.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab02702144b12ab122f.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");







// INITIALIZE LOCAL STORAGE
if (!localStorage.length) {
  const todoList = [
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      '0',
      '0',
      'Default Todo',
      '2024-01-31',
      'Notes show here',
      'high',
      'closed'
    ),
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      '1',
      '1',
      'First Todo Item for Sub-project',
      '2024-01-16',
      'Some random note for this todo',
      'medium',
    ),
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      '1',
      '2',
      'Second Todo Item for Sub-project',
      '2024-02-22',
      'Things I gotta remember about this task',
      'medium',
    ),
  ];
  const projectList = [
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(
      '0',
      "All My Todos", 
      "Project containing all my todo's"
    ),
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(
      '1',
      "Another Project", 
      "Project containing todos for another project"
    ),
  ];
  const currentProject = projectList[0];

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
  localStorage.setItem('projectIDCounter', 2);
  localStorage.setItem('todoIDCounter', 3);
}


// RENDER DEFAULT UI
const defaultProject = (0,_controller_js__WEBPACK_IMPORTED_MODULE_4__.storageGetList)('projectList')[0];
(0,_controller_js__WEBPACK_IMPORTED_MODULE_4__.storageSetItem)('currentProject', defaultProject);
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayTodoTabsOfCurrentProject)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectTabs)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.colorProjectTab)(document.querySelector('.projects div:first-of-type'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssT0FBTyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVks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QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx1QkFBdUIsOERBQWM7QUFDckMsOERBQWM7QUFDZCx3RUFBK0I7QUFDL0IsMkRBQWtCO0FBQ2xCLHdEQUFlLHdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29ucy9saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2VkaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cbjpyb290IHtcbiAgLS1uYXZ5OiAjMTAyOTM3O1xuICAtLXNlYWdyZWVuOiAjMTI0ZDU0O1xuICAtLW9yYW5nZTogI2Y5NzQ0YjtcbiAgLS13aGVhdDogI2UxZDljZjtcbiAgLS1zYW5kOiAjZWRlZGVkO1xufVxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5kKTtcbn1cbmRpdi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XG59XG5cblxuLyogQ09OVEFJTkVSUyAqL1xuLmNvbnRhaW5lci1tZW51IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xuICBjb2xvcjogdmFyKC0tc2FuZCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1zYW5kKTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XG4gIH1cbiAgaDE6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgem9vbTogOCU7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgaDEsIGgzLCBwIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gICAgaDMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zYW5kKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMThweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBidXR0b24uYWRkLXByb2plY3Qge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG4gIGZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXdoZWF0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGEsXG4gICAgYTp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuLmNvbnRhaW5lci10b2RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcblxuICA+IGhlYWRlciB7XG4gICAgZmxleC1iYXNpczogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXNlYWdyZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cbi8qIFBST0pFQ1RTICovXG5kaXYucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XG5cbiAgPiAudGFiIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGdhcDogMTJweDtcbiAgICBcbiAgICBwIHtcbiAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgICBidXR0b24uZWRpdDpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGludmVydCgxMyUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoODcyJSkgaHVlLXJvdGF0ZSgxNTdkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5NyUpO1xuICAgIH1cbiAgICBidXR0b24uZWRpdDo6YWZ0ZXIsXG4gICAgYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgfVxuICB9XG4gID4gLnRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhZ3JlZW4pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gID4gLnRhYjphY3RpdmUsXG4gID4gLnRhYltkYXRhLXN0YXR1cz1cIm9wZW5cIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJ1dHRvbiB7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB9XG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBUT0RPIExJU1QgKi9cbmRpdi50b2RvcyB7XG4gIC50YWIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBnYXA6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICAuaGVhZGVyLFxuICAgIC5kZXRhaWxzIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgICAuaGVhZGVyLFxuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubm90ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmlsdGVyOiBjb250cmFzdCg1JSk7XG4gICAgfVxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyLFxuICAgIGJ1dHRvbi52aWV3LW1vZGU6aG92ZXIge1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMjglKSBzZXBpYSg2NCUpIHNhdHVyYXRlKDEwNDYlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDEwMiUpO1xuICAgIH1cbiAgICBidXR0b24uZGVsZXRlOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNjUlKSBzYXR1cmF0ZSg1NzQlKSBodWUtcm90YXRlKDMyNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNSUpO1xuICAgIH1cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGJ1dHRvbi52aWV3LW1vZGUudXAge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgLnRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xuICB9XG4gIC5oaWdoLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcbiAgfVxuICAubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZTtcbiAgfVxuICAuY2hlY2tlZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgcC50aXRsZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgYnV0dG9uLmVkaXQsXG4gICAgYnV0dG9uLnZpZXctbW9kZSxcbiAgICAuZHVlLWRhdGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBCVVRUT05TICovXG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbi5lZGl0OjphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgem9vbTogMy41JTtcbn1cbmJ1dHRvbi5kZWxldGU6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICB6b29tOiAzLjUlO1xufVxuYnV0dG9uLnZpZXctbW9kZTo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIHpvb206IDIuNSU7XG59XG5idXR0b24uYWRkLXByb2plY3Q6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJ1dHRvbi5lZGl0OmhvdmVyLFxuYnV0dG9uLmFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg4JSkgc2F0dXJhdGUoMzQ1OSUpIGh1ZS1yb3RhdGUoMTM5ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTUlKTtcbn1cbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcbn1cbmJ1dHRvbi5hZGQtdG9kbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcbn1cbmJ1dHRvbi5hZGQtdG9kbzo6YmVmb3JlIHtcbiAgY29udGVudDogJysnO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmJ1dHRvbi5hZGQtdG9kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoZWF0KTtcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xufVxuYnV0dG9uLmFkZC10b2RvOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xufVxuXG5cbi8qIEZPUk1TICovXG5kaWFsb2cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIHotaW5kZXg6IDI7XG5cbiAgZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIGxhYmVsLnJlcXVpcmVkOjphZnRlciB7XG4gICAgY29udGVudDogJyAqJztcbiAgICBjb2xvcjogcmVkO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7OztBQUdBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7O0VB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QUNaO0FBQ0E7RUFDRSxnREFBeUM7RUFDekMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnREFBd0M7RUFDeEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSw4RkFBOEY7QUFDaEc7QUFDQTtFQUNFLCtGQUErRjtBQUNqRztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBR0EsVUFBVTtBQUNWO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixVQUFVOztFQUVWO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxufVxcbjpyb290IHtcXG4gIC0tbmF2eTogIzEwMjkzNztcXG4gIC0tc2VhZ3JlZW46ICMxMjRkNTQ7XFxuICAtLW9yYW5nZTogI2Y5NzQ0YjtcXG4gIC0td2hlYXQ6ICNlMWQ5Y2Y7XFxuICAtLXNhbmQ6ICNlZGVkZWQ7XFxufVxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQpO1xcbn1cXG5kaXYuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcblxcbi8qIENPTlRBSU5FUlMgKi9cXG4uY29udGFpbmVyLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgY29sb3I6IHZhcigtLXNhbmQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zYW5kKTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIH1cXG4gIGgxOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IHVybCgnLi9hc3NldHMvaWNvbnMvbGlzdC5wbmcnKTtcXG4gICAgem9vbTogOCU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgfVxcbiAgaDEsIGgzLCBwIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICAuY29udGFpbmVyLXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcbiAgICBoMyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNhbmQpO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMThweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5hZGQtcHJvamVjdCB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgfVxcbiAgfVxcbiAgZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXdoZWF0KTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBhLFxcbiAgICBhOnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuICB9XFxufVxcbi5jb250YWluZXItdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICA+IGhlYWRlciB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBwIHtcXG4gICAgICBjb2xvcjogdmFyKC0tc2VhZ3JlZW4pXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuLyogUFJPSkVDVFMgKi9cXG5kaXYucHJvamVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xcblxcbiAgPiAudGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEycHg7XFxuICAgIFxcbiAgICBwIHtcXG4gICAgICB3aWR0aDogMTkwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxMyUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoODcyJSkgaHVlLXJvdGF0ZSgxNTdkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5NyUpO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0OjphZnRlcixcXG4gICAgYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICB9XFxuICB9XFxuICA+IC50YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgPiAudGFiOmFjdGl2ZSxcXG4gID4gLnRhYltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgfVxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vKiBUT0RPIExJU1QgKi9cXG5kaXYudG9kb3Mge1xcbiAgLnRhYiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAuZGV0YWlscyB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLmhlYWRlcixcXG4gICAgLmRldGFpbHMge1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5oZWFkZXIsXFxuICAgIC5idXR0b25zIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBnYXA6IDEycHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLm5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZmlsdGVyOiBjb250cmFzdCg1JSk7XFxuICAgIH1cXG4gICAgYnV0dG9uLmVkaXQ6aG92ZXIsXFxuICAgIGJ1dHRvbi52aWV3LW1vZGU6aG92ZXIge1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDI4JSkgc2VwaWEoNjQlKSBzYXR1cmF0ZSgxMDQ2JSkgaHVlLXJvdGF0ZSgxNDFkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCgxMDIlKTtcXG4gICAgfVxcbiAgICBidXR0b24uZGVsZXRlOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcXG4gICAgfVxcbiAgICAuaGlkZGVuIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIGJ1dHRvbi52aWV3LW1vZGUudXAge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIC50YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGVhdCk7XFxuICB9XFxuICAuaGlnaC1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbiAgfVxcbiAgLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xcbiAgfVxcbiAgLmNoZWNrZWQge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgcC50aXRsZSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIH1cXG4gICAgYnV0dG9uLmVkaXQsXFxuICAgIGJ1dHRvbi52aWV3LW1vZGUsXFxuICAgIC5kdWUtZGF0ZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vKiBCVVRUT05TICovXFxuYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b24uZWRpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy9lZGl0LnBuZycpO1xcbiAgem9vbTogMy41JTtcXG59XFxuYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy9kZWxldGUucG5nJyk7XFxuICB6b29tOiAzLjUlO1xcbn1cXG5idXR0b24udmlldy1tb2RlOjphZnRlciB7XFxuICBjb250ZW50OiB1cmwoJy4vYXNzZXRzL2ljb25zL2Fycm93LnBuZycpO1xcbiAgem9vbTogMi41JTtcXG59XFxuYnV0dG9uLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5idXR0b24uZWRpdDpob3ZlcixcXG5idXR0b24uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg4JSkgc2F0dXJhdGUoMzQ1OSUpIGh1ZS1yb3RhdGUoMTM5ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTUlKTtcXG59XFxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuYnV0dG9uLmFkZC10b2RvIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hlYXQpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcXG59XFxuYnV0dG9uLmFkZC10b2RvOjpiZWZvcmUge1xcbiAgY29udGVudDogJysnO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5idXR0b24uYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xcbn1cXG5idXR0b24uYWRkLXRvZG86YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyAqL1xcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIGZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIGxhYmVsLnJlcXVpcmVkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGlzIGZpbGUgaGFuZGxlcyBkYXRhIHJldHJpZXZhbCwgbWFuaXB1bGF0aW9uLCBcbi8vIGFuZCBjcmVhdGlvbiBiZXR3ZWVuIHRoZSBET00gYW5kIHRvZG8vcHJvamVjdCBzY3JpcHRzXG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBzdG9yYWdlR2V0TGlzdChsaXN0U3RyaW5nKSB7XG4gIGNvbnN0IHBsYWluTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdFN0cmluZykpO1xuICBjb25zdCBpbnN0YW50aWF0ZWRMaXN0ID0gcGxhaW5MaXN0Lm1hcCgocGxhaW5PYmopID0+IHtcbiAgICBpZiAobGlzdFN0cmluZyA9PT0gJ3Byb2plY3RMaXN0Jykge1xuICAgICAgY29uc3QgaWQgPSBwbGFpbk9iai5pZDtcbiAgICAgIGNvbnN0IHRpdGxlID0gcGxhaW5PYmoudGl0bGU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBsYWluT2JqLmRlc2NyaXB0aW9uO1xuICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3QoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIGlmIChsaXN0U3RyaW5nID09PSAndG9kb0xpc3QnKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSBwbGFpbk9iai5wcm9qZWN0SUQ7XG4gICAgICBjb25zdCB0b2RvSUQgPSBwbGFpbk9iai50b2RvSUQ7XG4gICAgICBjb25zdCB0aXRsZSA9IHBsYWluT2JqLnRpdGxlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IHBsYWluT2JqLmR1ZURhdGU7XG4gICAgICBjb25zdCBub3RlID0gcGxhaW5PYmoubm90ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGxhaW5PYmoucHJpb3JpdHk7XG4gICAgICBjb25zdCBzdGF0dXMgPSBwbGFpbk9iai5zdGF0dXM7XG4gICAgICByZXR1cm4gY3JlYXRlVG9kbyhwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGluc3RhbnRpYXRlZExpc3Q7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgcGxhaW5PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdCcpKTtcbiAgY29uc3QgaWQgPSBwbGFpbk9iai5pZDtcbiAgY29uc3QgdGl0bGUgPSBwbGFpbk9iai50aXRsZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwbGFpbk9iai5kZXNjcmlwdGlvbjtcbiAgY29uc3QgaW5zdGFudGlhdGVkT2JqID0gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIGluc3RhbnRpYXRlZE9iajtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUdldElEQ291bnRlcih0eXBlU3RyaW5nKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlU3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVNldEl0ZW0oa2V5U3RyaW5nLCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlTdHJpbmcsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iaikge1xuICBjb25zdCBpbmRleCA9IHRvZG9MaXN0Lm1hcCgoZSkgPT4gZS50b2RvSUQpLmluZGV4T2YodG9kb09iai50b2RvSUQpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdEluTWFzdGVyTGlzdChwcm9qZWN0TGlzdCwgcHJvamVjdE9iaikge1xuICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0Lm1hcCgoZSkgPT4gZS5pZCkuaW5kZXhPZihwcm9qZWN0T2JqLmlkKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0KHByb2plY3RPYmopIHtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdE9iai5pZDtcbiAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgY29uc3QgZmlsdGVyZWRUb2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3RJRCA9PT0gcHJvamVjdElEO1xuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRvZG9PYmoobm9kZSkge1xuICBjb25zdCB0b2RvSUQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJyk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IHRvZG9PYmogPSB0b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8udG9kb0lEID09PSB0b2RvSUQ7XG4gIH0pO1xuICByZXR1cm4gdG9kb09iajtcbn1cblxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdE9iaihwcm9qZWN0VGFiTm9kZSkge1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VGFiTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKTtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RMaXN0LmZpbmQoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SUQ7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdE9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb0RhdGEodG9kb09iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHldID0gdmFsdWVzQXJyO1xuICBjb25zdCB1cGRhdGVkT2JqID0ge1xuICAgIHByb2plY3RJRDogdG9kb09iai5wcm9qZWN0SUQsXG4gICAgdG9kb0lEOiB0b2RvT2JqLnRvZG9JRCxcbiAgICB0aXRsZSwgXG4gICAgZHVlRGF0ZSxcbiAgICBub3RlLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1czogdG9kb09iai5zdGF0dXNcbiAgfVxuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iaik7XG4gIHRvZG9MaXN0W2luZGV4XSA9IHVwZGF0ZWRPYmo7XG4gIHN0b3JhZ2VTZXRJdGVtKCd0b2RvTGlzdCcsIHRvZG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERhdGEocHJvamVjdE9iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb25dID0gdmFsdWVzQXJyO1xuICBjb25zdCB1cGRhdGVkT2JqID0ge1xuICAgIGlkOiBwcm9qZWN0T2JqLmlkLFxuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvblxuICB9XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZQcm9qZWN0SW5NYXN0ZXJMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0T2JqKTtcbiAgcHJvamVjdExpc3RbaW5kZXhdID0gdXBkYXRlZE9iajtcbiAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMoKSB7XG4gIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG4gIGNvbnN0IG5vZGVMaXN0ID0gdG9kb3NEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICByZXR1cm4gWy4uLm5vZGVMaXN0XTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb1N0YXR1cyhub2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKG5vZGUpO1xuICBsZXQgbmV3U3RhdHVzO1xuICBpZiAobm9kZS5jaGVja2VkKSB7XG4gICAgbmV3U3RhdHVzID0gJ2Nsb3NlZCc7XG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdHVzID0gJ29wZW4nXG4gIH1cbiAgY29uc3QgdXBkYXRlZE9iaiA9IHtcbiAgICBwcm9qZWN0SUQ6IHRvZG9PYmoucHJvamVjdElELFxuICAgIHRvZG9JRDogdG9kb09iai50b2RvSUQsXG4gICAgdGl0bGU6IHRvZG9PYmoudGl0bGUsIFxuICAgIGR1ZURhdGU6IHRvZG9PYmouZHVlRGF0ZSxcbiAgICBub3RlOiB0b2RvT2JqLm5vdGUsXG4gICAgcHJpb3JpdHk6IHRvZG9PYmoucHJpb3JpdHksXG4gICAgc3RhdHVzOiBuZXdTdGF0dXNcbiAgfVxuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iailcbiAgdG9kb0xpc3RbaW5kZXhdID0gdXBkYXRlZE9iajtcbiAgc3RvcmFnZVNldEl0ZW0oJ3RvZG9MaXN0JywgdG9kb0xpc3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvRnJvbUxpc3Qobm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihub2RlKTtcbiAgdG9kb09iai5yZW1vdmVGcm9tTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChub2RlKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSByZXR1cm5Qcm9qZWN0T2JqKG5vZGUpO1xuICBzdG9yYWdlU2V0SXRlbSgnY3VycmVudFByb2plY3QnLCBwcm9qZWN0T2JqKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3Qobm9kZSkge1xuICBjb25zdCByZW1vdmVkUHJvamVjdE9iaiA9IHJldHVyblByb2plY3RPYmoobm9kZSk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IHJlbW92ZWRUb2RvcyA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3RJRCA9PT0gcmVtb3ZlZFByb2plY3RPYmouaWQ7XG4gIH0pO1xuICByZW1vdmVkVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge3RvZG8ucmVtb3ZlRnJvbUxpc3QoKX0pO1xuICByZW1vdmVkUHJvamVjdE9iai5yZW1vdmVGcm9tTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChhc3NpZ25JREZvclByb2plY3QoKSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgbmV3UHJvamVjdC5hZGRUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyh0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oXG4gICAgYXNzaWduVG9kb1Byb2plY3RJRCgpLCBhc3NpZ25Ub2RvSUQoKSwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5XG4gICk7XG4gIG5ld1RvZG8uYWRkVG9MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUb2RvTGlzdEJ5U3RhdHVzKHRvZG9zKSB7XG4gIGNvbnN0IG9wZW5Ub2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5zdGF0dXMgPT09ICdvcGVuJyk7XG4gIGNvbnN0IGNsb3NlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnN0YXR1cyA9PT0gJ2Nsb3NlZCcpO1xuICBjb25zdCBzb3J0ZWRMaXN0ID0gWy4uLm9wZW5Ub2RvcywgLi4uY2xvc2VkVG9kb3NdO1xuICByZXR1cm4gc29ydGVkTGlzdDtcbn1cblxuZnVuY3Rpb24gbW92ZUNoZWNrZWRUb2RvSW5MaXN0T3JkZXIobm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihub2RlKTtcbiAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZlRvZG9Jbk1hc3Rlckxpc3QodG9kb0xpc3QsIHRvZG9PYmopO1xuICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICBpZiAodG9kb09iai5zdGF0dXMgPT09ICdjbG9zZWQnKSB0b2RvTGlzdC5wdXNoKHRvZG9PYmopO1xuICBpZiAodG9kb09iai5zdGF0dXMgPT09ICdvcGVuJykgdG9kb0xpc3QudW5zaGlmdCh0b2RvT2JqKTtcbiAgc3RvcmFnZVNldEl0ZW0oJ3RvZG9MaXN0JywgdG9kb0xpc3QpO1xufVxuXG5cbi8vIEEgcHJvamVjdCBhbmQgaXRzIHRvZG9zIG11c3Qgc2hhcmUgdGhlIHNhbWUgaWRcbmZ1bmN0aW9uIGFzc2lnbklERm9yUHJvamVjdCgpIHtcbiAgbGV0IGlkID0gK3N0b3JhZ2VHZXRJRENvdW50ZXIoJ3Byb2plY3RJRENvdW50ZXInKTtcbiAgbGV0IGluY3JlbWVudElEID0gaWQgKyAxXG4gIHN0b3JhZ2VTZXRJdGVtKCdwcm9qZWN0SURDb3VudGVyJywgaW5jcmVtZW50SUQpO1xuICByZXR1cm4gaWQudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGFzc2lnblRvZG9Qcm9qZWN0SUQoKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdC5pZDtcbn1cblxuXG4vLyBFdmVyeSB0b2RvIGhhcyBhIHNlcGFyYXRlIHRvZG9JRCB0byBkaWZmZXJlbnRpYXRlIGl0IGZyb20gb3RoZXIgdG9kb3NcbmZ1bmN0aW9uIGFzc2lnblRvZG9JRCgpIHtcbiAgbGV0IGlkID0gK3N0b3JhZ2VHZXRJRENvdW50ZXIoJ3RvZG9JRENvdW50ZXInKTtcbiAgbGV0IGluY3JlbWVudElEID0gaWQgKyAxXG4gIHN0b3JhZ2VTZXRJdGVtKCd0b2RvSURDb3VudGVyJywgaW5jcmVtZW50SUQpO1xuICByZXR1cm4gaWQudG9TdHJpbmcoKTtcbn1cblxuXG5leHBvcnQgeyBcbiAgc3RvcmFnZUdldExpc3QsXG4gIHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCxcbiAgc3RvcmFnZVNldEl0ZW0sXG4gIGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCxcbiAgZmluZEluZGV4T2ZQcm9qZWN0SW5NYXN0ZXJMaXN0LFxuICBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0LFxuICByZXR1cm5Ub2RvT2JqLFxuICByZXR1cm5Qcm9qZWN0T2JqLFxuICB1cGRhdGVUb2RvRGF0YSxcbiAgdXBkYXRlUHJvamVjdERhdGEsXG4gIHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicyxcbiAgdG9nZ2xlVG9kb1N0YXR1cyxcbiAgcmVtb3ZlVG9kb0Zyb21MaXN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGNyZWF0ZU5ld1RvZG8sXG4gIHNvcnRUb2RvTGlzdEJ5U3RhdHVzLFxuICBtb3ZlQ2hlY2tlZFRvZG9Jbkxpc3RPcmRlcixcbiAgYXNzaWduSURGb3JQcm9qZWN0LFxuICBhc3NpZ25Ub2RvUHJvamVjdElELFxuICBhc3NpZ25Ub2RvSURcbn07IiwiaW1wb3J0IHsgXG4gIHN0b3JhZ2VHZXRMaXN0LFxuICBzdG9yYWdlR2V0Q3VycmVudFByb2plY3QsXG4gIGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QsXG4gIHJldHVyblRvZG9PYmosXG4gIHJldHVyblByb2plY3RPYmosXG4gIHVwZGF0ZVRvZG9EYXRhLFxuICByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMsXG4gIHRvZ2dsZVRvZG9TdGF0dXMsXG4gIHJlbW92ZVRvZG9Gcm9tTGlzdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBjcmVhdGVOZXdUb2RvLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgc29ydFRvZG9MaXN0QnlTdGF0dXMsXG4gIG1vdmVDaGVja2VkVG9kb0luTGlzdE9yZGVyXG59IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuXG4vLyBET00gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gY2xlYXJDb250ZW50KG5vZGUpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihub2RlLCBjaGlsZHJlbkFycikge1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuQXJyKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfTtcbn1cblxuXG4vLyBQUk9KRUNUIExJU1RcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFicygpIHtcbiAgY2xlYXJDb250ZW50KHByb2plY3RzRGl2KTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pZCk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaWQpO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pZCk7XG5cbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgdGl0bGVQYXJhLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIGNvbG9yUHJvamVjdFRhYihldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Qcm9qZWN0RWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpOyBcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuXG4gICAgICBjb25zdCBkZWxldGVkUHJvamVjdElEID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdG9yYWdlR2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gZGVsZXRlZFByb2plY3RJRCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdE5vZGUgPSBwcm9qZWN0c0Rpdi5maXJzdENoaWxkO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChkZWZhdWx0UHJvamVjdE5vZGUpO1xuICAgICAgICBjb2xvclByb2plY3RUYWIoZGVmYXVsdFByb2plY3ROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0Tm9kZSA9IHByb2plY3RzRGl2LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC50YWJbZGF0YS1pZD1cIiR7Y3VycmVudFByb2plY3QuaWR9XCJdYFxuICAgICAgICApO1xuICAgICAgICBjb2xvclByb2plY3RUYWIoY3VycmVudFByb2plY3ROb2RlKTtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICB9O1xuXG4gICAgdGFiLmFwcGVuZENoaWxkKHRpdGxlUGFyYSk7XG4gICAgaWYgKHByb2plY3QgIT09IHByb2plY3RMaXN0WzBdKSB7XG4gICAgICBhcHBlbmRDaGlsZHJlbih0YWIsIFtlZGl0QnRuLCBkZWxldGVCdG5dKTtcbiAgICB9XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29sb3JQcm9qZWN0VGFiKHByb2plY3RUYWJOb2RlKSB7XG4gIGNvbnN0IGFsbFByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzID4gKicpO1xuICBmb3IgKGNvbnN0IHRhYiBvZiBhbGxQcm9qZWN0VGFicykge1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJycpO1xuICB9XG4gIHByb2plY3RUYWJOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnb3BlbicpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEVkaXRNb2RhbChidG5Ob2RlKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSByZXR1cm5Qcm9qZWN0T2JqKGJ0bk5vZGUpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICBkaWFsb2cuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdE9iai50aXRsZSk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25vdGUnKTtcbiAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKTtcblxuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgZGVzY3JpcHRpb25JbnB1dC50ZXh0Q29udGVudCA9IHByb2plY3RPYmouZGVzY3JpcHRpb247XG5cbiAgc2F2ZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuXG4gICAgLy8gdXBkYXRlIHByb2plY3QgZGF0YSBpbiBtYXN0ZXIgbGlzdFxuICAgIHVwZGF0ZVByb2plY3REYXRhKFxuICAgICAgcHJvamVjdE9iaixcbiAgICAgIFt0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0XSBcbiAgICApO1xuXG4gICAgLy8gb3BlbiB0aGUgZWRpdGVkIHByb2plY3QncyB0YWJcbiAgICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgICBjb25zdCBlZGl0ZWRQcm9qZWN0Tm9kZSA9IHByb2plY3RzRGl2LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRhYltkYXRhLWlkPVwiJHtwcm9qZWN0T2JqLmlkfWBcbiAgICApO1xuICAgIHNldEN1cnJlbnRQcm9qZWN0KGVkaXRlZFByb2plY3ROb2RlKTtcbiAgICBjb2xvclByb2plY3RUYWIoZWRpdGVkUHJvamVjdE5vZGUpO1xuICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcblxuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9O1xuICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IHtkaWFsb2cuY2xvc2UoKX07XG5cbiAgYXBwZW5kQ2hpbGRyZW4oZm9ybSwgW1xuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBzYXZlQnRuLFxuICAgIGNhbmNlbEJ0blxuICBdKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICBib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG59XG5cblxuLy8gVE9ETyBIRUFERVJcbmNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRvZG9zID4gaGVhZGVyJylcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvSGVhZGVyQ29udGVudCgpIHtcbiAgY29uc3QgaDEgPSB0b2RvSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHBhcmEgPSB0b2RvSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIGgxLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjtcbn1cblxuXG4vLyBUT0RPIExJU1RcbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKSB7XG4gIGRpc3BsYXlUb2RvSGVhZGVyQ29udGVudCgpO1xuICBjbGVhckNvbnRlbnQodG9kb3NEaXYpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpO1xuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgnY3VycmVudFByb2plY3QnKTtcbiAgbGV0IHRvZG9zID0gY3VycmVudFByb2plY3QuaWQgPT09IHByb2plY3RMaXN0WzBdLmlkXG4gICAgPyB0b2RvTGlzdFxuICAgIDogZmluZFRvZG9zRm9yU2VsZWN0UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gIHRvZG9zID0gc29ydFRvZG9MaXN0QnlTdGF0dXModG9kb3MpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJpb3JpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgdmlld01vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIHRpdGxlUGFyYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGR1ZURhdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJywgJ2hpZGRlbicpO1xuICAgIG5vdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgICBwcmlvcml0eVBhcmEuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBidG5zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgdmlld01vZGVCdG4uY2xhc3NMaXN0LmFkZCgndmlldy1tb2RlJywgJ2Rvd24nKTtcblxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICB2aWV3TW9kZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgICB9XG4gICAgaWYgKHRvZG8uc3RhdHVzID09PSAnY2xvc2VkJykge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIH1cblxuICAgIGNoZWNrYm94Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRvZ2dsZVRvZG9TdGF0dXMoZXZlbnQudGFyZ2V0KTtcbiAgICAgIG1vdmVDaGVja2VkVG9kb0luTGlzdE9yZGVyKGV2ZW50LnRhcmdldCk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Ub2RvRWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlVG9kb0Zyb21MaXN0KGV2ZW50LnRhcmdldCk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICB2aWV3TW9kZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICByb3RhdGVWaWV3TW9kZUJ0bihldmVudC50YXJnZXQpO1xuICAgICAgdG9nZ2xlRGlzcGxheU9mRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihoZWFkZXJEaXYsIFt0aXRsZVBhcmEsIGR1ZURhdGVQYXJhXSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4oYnRuc0RpdiwgW2VkaXRCdG4sIGRlbGV0ZUJ0biwgdmlld01vZGVCdG5dKTtcbiAgICBhcHBlbmRDaGlsZHJlbihkZXRhaWxzRGl2LCBbbm90ZVBhcmEsIHByaW9yaXR5UGFyYV0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhYiwgW1xuICAgICAgY2hlY2tib3gsIFxuICAgICAgaGVhZGVyRGl2LFxuICAgICAgYnRuc0RpdixcbiAgICAgIGRldGFpbHNEaXZcbiAgICBdKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xuICBkaXNwbGF5VG9kb0RldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9EZXRhaWxzKCkge1xuICBjb25zdCB0b2Rvc05vZGVMaXN0ID0gcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzKCk7XG4gIGZvciAoY29uc3QgdG9kb05vZGUgb2YgdG9kb3NOb2RlTGlzdCkge1xuICAgIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKHRvZG9Ob2RlKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5UGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1hdER1ZURhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gKHRvZG9PYmouZHVlRGF0ZSkuc3BsaXQoJy0nKTtcbiAgICAgIGxldCBtbSA9IGRhdGVbMV07XG4gICAgICBsZXQgZGQgPSBkYXRlWzJdO1xuICAgICAgaWYgKG1tLmNoYXJBdCgwKSA9PT0gJzAnKSBtbSA9IG1tLmNoYXJBdCgxKTtcbiAgICAgIGlmIChkZC5jaGFyQXQoMCkgPT09ICcwJykgZGQgPSBkZC5jaGFyQXQoMSk7XG4gICAgICByZXR1cm4gIG1tICsgJy8nICsgZGQ7XG4gICAgfVxuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gdG9kb09iai50aXRsZTtcbiAgICBpZiAodG9kb09iai5kdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGZvcm1hdER1ZURhdGUoKTtcbiAgICB9XG4gICAgbm90ZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gICAgcHJpb3JpdHlQYXJhLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgdG9kb09iai5wcmlvcml0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVWaWV3TW9kZUJ0bihidG5Ob2RlKSB7XG4gIGlmIChidG5Ob2RlLmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuICB9IGVsc2Uge1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcbiAgICBidG5Ob2RlLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZEZXRhaWxzKGJ0bk5vZGUpIHtcbiAgY29uc3QgdG9kb0lEID0gYnRuTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xuICBjb25zdCB0b2RvTm9kZSA9IHRvZG9zRGl2LnF1ZXJ5U2VsZWN0b3IoYC50YWJbZGF0YS10b2RvLWlkPVwiJHt0b2RvSUR9YCk7XG4gIGNvbnN0IGRldGFpbHNEaXYgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuXG4gIGlmIChkZXRhaWxzRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblRvZG9FZGl0TW9kYWwoYnRuTm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihidG5Ob2RlKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgbm90ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai50aXRsZX1gKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai5kdWVEYXRlfWApO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZS1kYXRlJyk7XG4gIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUnKTtcbiAgbm90ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdub3RlJyk7XG4gIHNhdmVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5T3B0aW9uTG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIHByaW9yaXR5T3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gIHByaW9yaXR5T3B0aW9uSGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHRvZG9PYmoucHJpb3JpdHk7XG4gIGxldCBzZWxlY3RPcHRpb247XG4gIGlmIChjdXJyZW50UHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25Mb3c7XG4gIH0gZWxzZSBpZiAoY3VycmVudFByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uTWVkaXVtO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uSGlnaDtcbiAgfTtcbiAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCcnKTtcblxuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICBub3RlSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBwcmlvcml0eU9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBwcmlvcml0eU9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBwcmlvcml0eU9wdGlvbkhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gIHNhdmVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB1cGRhdGVUb2RvRGF0YShcbiAgICAgIHRvZG9PYmosXG4gICAgICBbdGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBub3RlSW5wdXQsIHByaW9yaXR5U2VsZWN0XSBcbiAgICApO1xuICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfTtcbiAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH1cblxuICBhcHBlbmRDaGlsZHJlbihwcmlvcml0eVNlbGVjdCwgW1xuICAgIHByaW9yaXR5T3B0aW9uTG93LFxuICAgIHByaW9yaXR5T3B0aW9uTWVkaXVtLFxuICAgIHByaW9yaXR5T3B0aW9uSGlnaFxuICBdKTtcbiAgYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHlDb250YWluZXIsIFtwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdF0pO1xuICBhcHBlbmRDaGlsZHJlbihmb3JtLCBbXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgbm90ZUlucHV0LFxuICAgIHByaW9yaXR5Q29udGFpbmVyLFxuICAgIHNhdmVCdG4sXG4gICAgY2FuY2VsQnRuXG4gIF0pO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbn1cblxuXG4vLyBcIkFERFwiIEJVVFRPTlNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdERpYWxvZy5zaG93KCl9O1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdG9kb1wiKTtcbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLmFkZC10b2RvXCIpO1xuYWRkVG9kb0J0bi5vbmNsaWNrID0gKCkgPT4ge3RvZG9EaWFsb2cuc2hvdygpfTtcblxuXG4vLyBQUk9KRUNUIEZPUk1cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBmb3JtXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGlucHV0XCIpO1xuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IHRleHRhcmVhXCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG5zdWJtaXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFwcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuXG4gIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBpbnN0YW5jZVxuICBjb25zdCB0aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgLy8gb3BlbiBuZXcgcHJvamVjdFxuICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgY29uc3QgbmV3UHJvamVjdE5vZGUgPSBwcm9qZWN0c0Rpdi5sYXN0Q2hpbGQ7XG4gIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3ROb2RlKTtcbiAgY29sb3JQcm9qZWN0VGFiKG5ld1Byb2plY3ROb2RlKTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICBcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpOyBcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0ncmVzZXQnXVwiKTtcbnJlc2V0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufTtcblxuXG4vLyBUT0RPIEZPUk1cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBmb3JtXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGlucHV0I3RpdGxlXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjZHVlLWRhdGVcIik7XG5jb25zdCB0b2RvTm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyB0ZXh0YXJlYVwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBzZWxlY3RcIik7XG5cbmZ1bmN0aW9uIHRvZGF5c0RhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGxldCBtbSA9ICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGRkID0gKHRvZGF5LmdldERhdGUoKSkudG9TdHJpbmcoKTtcblxuICBpZiAobW0ubGVuZ3RoID09PSAxKSB7bW0gPSAnMCcgKyBtbX07XG4gIGlmIChkZC5sZW5ndGggPT09IDEpIHtkZCA9ICcwJyArIGRkfTtcbiAgcmV0dXJuIHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xufVxudG9kb0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5c0RhdGUoKSk7XG5cbmNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbnN1Ym1pdFRvZG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHRvZG9Gb3JtLnJlcG9ydFZhbGlkaXR5KCk7IFxuICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgbm90ZSA9IHRvZG9Ob3RlSW5wdXQudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGNyZWF0ZU5ld1RvZG8odGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICB0b2RvRm9ybS5yZXNldCgpO1xuICB0b2RvRGlhbG9nLmNsb3NlKCk7XG59XG5cbmNvbnN0IHJlc2V0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gYnV0dG9uW3R5cGU9J3Jlc2V0J11cIik7XG5yZXNldFRvZG9CdG4ub25jbGljayA9ICgpID0+IHtcbiAgdG9kb0RpYWxvZy5jbG9zZSgpOyBcbn07XG5cblxuZXhwb3J0IHsgXG4gIGRpc3BsYXlQcm9qZWN0VGFicywgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdFxufTsiLCJpbXBvcnQgeyBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QsIHN0b3JhZ2VHZXRMaXN0LCBzdG9yYWdlU2V0SXRlbSB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuY2xhc3MgUHJvamVjdEl0ZW0geyAgXG4gIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGFkZFRvTGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnB1c2godGhpcyk7XG4gICAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xuICB9IFxuXG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QocHJvamVjdExpc3QsIHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IFByb2plY3RJdGVtKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0SXRlbSB9OyIsImltcG9ydCB7IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCwgc3RvcmFnZUdldExpc3QsIHN0b3JhZ2VTZXRJdGVtIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cyA9ICdvcGVuJykge1xuICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgIHRoaXMudG9kb0lEID0gdG9kb0lEO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgYWRkVG9MaXN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gICAgdG9kb0xpc3QucHVzaCh0aGlzKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG4gIH0gXG5cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdGhpcyk7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgcmV0dXJuIG5ldyBUb2RvSXRlbShwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2NyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVByb2plY3RUYWJzLCBcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCxcbn0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlR2V0TGlzdCwgc3RvcmFnZVNldEl0ZW0gfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cblxuLy8gSU5JVElBTElaRSBMT0NBTCBTVE9SQUdFXG5pZiAoIWxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBbXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdEZWZhdWx0IFRvZG8nLFxuICAgICAgJzIwMjQtMDEtMzEnLFxuICAgICAgJ05vdGVzIHNob3cgaGVyZScsXG4gICAgICAnaGlnaCcsXG4gICAgICAnY2xvc2VkJ1xuICAgICksXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICcxJyxcbiAgICAgICcxJyxcbiAgICAgICdGaXJzdCBUb2RvIEl0ZW0gZm9yIFN1Yi1wcm9qZWN0JyxcbiAgICAgICcyMDI0LTAxLTE2JyxcbiAgICAgICdTb21lIHJhbmRvbSBub3RlIGZvciB0aGlzIHRvZG8nLFxuICAgICAgJ21lZGl1bScsXG4gICAgKSxcbiAgICBjcmVhdGVUb2RvKFxuICAgICAgJzEnLFxuICAgICAgJzInLFxuICAgICAgJ1NlY29uZCBUb2RvIEl0ZW0gZm9yIFN1Yi1wcm9qZWN0JyxcbiAgICAgICcyMDI0LTAyLTIyJyxcbiAgICAgICdUaGluZ3MgSSBnb3R0YSByZW1lbWJlciBhYm91dCB0aGlzIHRhc2snLFxuICAgICAgJ21lZGl1bScsXG4gICAgKSxcbiAgXTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICcwJyxcbiAgICAgIFwiQWxsIE15IFRvZG9zXCIsIFxuICAgICAgXCJQcm9qZWN0IGNvbnRhaW5pbmcgYWxsIG15IHRvZG8nc1wiXG4gICAgKSxcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgJzEnLFxuICAgICAgXCJBbm90aGVyIFByb2plY3RcIiwgXG4gICAgICBcIlByb2plY3QgY29udGFpbmluZyB0b2RvcyBmb3IgYW5vdGhlciBwcm9qZWN0XCJcbiAgICApLFxuICBdO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0WzBdO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0SURDb3VudGVyJywgMik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvSURDb3VudGVyJywgMyk7XG59XG5cblxuLy8gUkVOREVSIERFRkFVTFQgVUlcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0JylbMF07XG5zdG9yYWdlU2V0SXRlbSgnY3VycmVudFByb2plY3QnLCBkZWZhdWx0UHJvamVjdCk7XG5kaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG5kaXNwbGF5UHJvamVjdFRhYnMoKTtcbmNvbG9yUHJvamVjdFRhYihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMgZGl2OmZpcnN0LW9mLXR5cGUnKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9