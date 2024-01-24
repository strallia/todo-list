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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/today.png */ "./src/assets/icons/today.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/all-todos.png */ "./src/assets/icons/all-todos.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/edit.png */ "./src/assets/icons/edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/delete.png */ "./src/assets/icons/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/arrow.png */ "./src/assets/icons/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
  grid-template-rows: auto auto 1fr auto;
  text-align: center;
  background-color: var(--navy);
  color: var(--sand);
  font-size: 16px;
  height: 100vh;
  overflow-y: auto;
  gap: 20px;
  grid-template-columns: 330px;

  h1 {
    font-size: 2.5em;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    color: var(--sand);
    top: 0;
    background-color: var(--navy);
  }
  h1::before {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    zoom: 9%;
    filter: invert(1);
  }
  h1, h3, p {
    user-select: none;
  }
  .container-default-projects {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 20px 0 20px;
    gap: 10px;

    .tab {
      padding: 10px;
      border-radius: 10px;
      display: flex;
      gap: 15px;
      align-items: center;
      font-size: 1.2em;
    }
    .tab:hover {
      background-color: var(--seagreen);
      font-weight: bold;
    }
    .tab::before {
      zoom: 5%;
      filter: invert(1);
    }
    .tab.today::before {
      content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    }
    .tab.all-todos::before {
      content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    }
    .tab:active,
    .tab[data-status="open"] {
      background-color: var(--orange);
      color: var(--navy);
      font-weight: bold;
    }
    .tab:active::before,
    .tab[data-status="open"]::before {
      filter: invert(0);
    }
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
    gap: 8px;
    height: 40px;
    
    p {
      text-align: left;
      margin-right: auto;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  .tab {
    border: 2px solid var(--wheat);
    padding: 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 15px;
    align-items: center;
    border-radius: 10px;
    .details {
      grid-column: 1/4;
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
      padding: 0 28px 5px 28px;
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
    border-left: 5px solid red;
  }
  .medium-priority {
    border-left: 5px solid orange;
  }
  .checked {
    border-left: 2px solid var(--wheat);
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
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  padding: 5px;
}
button.edit::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  zoom: 3.5%;
}
button.delete::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  zoom: 3.5%;
}
button.view-mode::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
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
  margin-top: 10px;
  padding: 15px;
  border: 2px solid var(--wheat);
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--seagreen);
  font-weight: bold;
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
  width: 100vw;
  height: 100vh;
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
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px var(--navy);
    min-width: 350px;
    max-width: 450px;
  }
  h1 {
    font-size: 30px;
    padding: 20px;
    background-color: var(--orange);
    color: var(--navy);
    border-bottom: 1px solid var(--seagreen);
  }
  div.inputs {
    padding: 25px;
    font-size: 18px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    input,
    textarea,
    select {
      padding: 10px;
      border: 1px solid var(--seagreen);
      border-radius: 5px;
    }
    textarea {
      max-width: 100%;
      max-height: 150px;
    }
    button {
      padding: 10px;
      background-color: green;
      width: min-content;
      border-radius: 10px;
      border: 1px solid var(--seagreen);
      font-weight: bold;
      font-size: 16px;
    }
    button[type="submit"] {
      background-color: var(--orange);
    }
    button[type="reset"] {
      background-color: var(--sand);
    }
    div.buttons {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
  label.required::after {
    content: ' *';
    color: red;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4BAA4B;EAC5B,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sCAAsC;AACxC;;;AAGA,eAAe;AACf;EACE,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,4BAA4B;;EAE5B;IACE,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,6BAA6B;EAC/B;EACA;IACE,gDAAuC;IACvC,QAAQ;IACR,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;IACrB,SAAS;;IAET;MACE,aAAa;MACb,mBAAmB;MACnB,aAAa;MACb,SAAS;MACT,mBAAmB;MACnB,gBAAgB;IAClB;IACA;MACE,iCAAiC;MACjC,iBAAiB;IACnB;IACA;MACE,QAAQ;MACR,iBAAiB;IACnB;IACA;MACE,gDAAwC;IAC1C;IACA;MACE,gDAA4C;IAC9C;IACA;;MAEE,+BAA+B;MAC/B,kBAAkB;MAClB,iBAAiB;IACnB;IACA;;MAEE,iBAAiB;IACnB;EACF;EACA;IACE,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,sBAAsB;IACtB;MACE,aAAa;MACb,8BAA8B;MAC9B,oCAAoC;MACpC,mBAAmB;MACnB,gBAAgB;MAChB,mBAAmB;MACnB,gBAAgB;MAChB,MAAM;MACN,6BAA6B;MAC7B,gDAAgD;MAChD,kBAAkB;MAClB,mBAAmB;MACnB,UAAU;IACZ;IACA;MACE,cAAc;MACd,gBAAgB;MAChB,WAAW;IACb;EACF;EACA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB;;MAEE,cAAc;IAChB;EACF;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;;EAEhB;IACE,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB;MACE;IACF;EACF;AACF;;;AAGA,aAAa;AACb;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,oBAAoB;;EAEpB;IACE,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,YAAY;;IAEZ;MACE,gBAAgB;MAChB,kBAAkB;MAClB,YAAY;MACZ,mBAAmB;MACnB,gBAAgB;MAChB,uBAAuB;MACvB,oBAAoB;IACtB;IACA;MACE,8FAA8F;IAChG;IACA;;MAEE,iBAAiB;IACnB;EACF;EACA;IACE,iCAAiC;IACjC,iBAAiB;EACnB;EACA;;IAEE,+BAA+B;IAC/B,kBAAkB;IAClB,iBAAiB;IACjB;MACE,iBAAiB;IACnB;IACA;MACE,YAAY;IACd;EACF;AACF;;;AAGA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;IACE,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB;MACE,gBAAgB;IAClB;IACA;;MAEE,iBAAiB;IACnB;IACA;;MAEE,aAAa;MACb,8BAA8B;MAC9B,SAAS;MACT,mBAAmB;MACnB,qBAAqB;IACvB;IACA;MACE,wBAAwB;IAC1B;IACA;MACE,oBAAoB;IACtB;IACA;;MAEE,gGAAgG;IAClG;IACA;MACE,+FAA+F;IACjG;IACA;MACE,aAAa;IACf;IACA;MACE,yBAAyB;IAC3B;EACF;EACA;IACE,8BAA8B;EAChC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,mCAAmC;IACnC;MACE,6BAA6B;IAC/B;IACA;;;MAGE,aAAa;IACf;EACF;AACF;;;AAGA,YAAY;AACZ;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;AACA;EACE,gDAAuC;EACvC,UAAU;AACZ;AACA;EACE,gDAAyC;EACzC,UAAU;AACZ;AACA;EACE,gDAAwC;EACxC,UAAU;AACZ;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,8FAA8F;AAChG;AACA;EACE,+FAA+F;AACjG;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,uBAAuB;AACzB;;;AAGA,UAAU;AACV;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;EAC1B,UAAU;;EAEV;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,wCAAwC;EAC1C;EACA;IACE,aAAa;IACb,eAAe;IACf,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB;MACE,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;;;MAGE,aAAa;MACb,iCAAiC;MACjC,kBAAkB;IACpB;IACA;MACE,eAAe;MACf,iBAAiB;IACnB;IACA;MACE,aAAa;MACb,uBAAuB;MACvB,kBAAkB;MAClB,mBAAmB;MACnB,iCAAiC;MACjC,iBAAiB;MACjB,eAAe;IACjB;IACA;MACE,+BAA+B;IACjC;IACA;MACE,6BAA6B;IAC/B;IACA;MACE,2BAA2B;MAC3B,8BAA8B;IAChC;EACF;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n  font-family: 'Nunito', sans-serif;\n}\n:root {\n  --navy: #102937;\n  --seagreen: #124d54;\n  --orange: #f9744b;\n  --wheat: #e1d9cf;\n  --sand: #ededed;\n}\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: var(--sand);\n}\ndiv.content {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\n\n/* CONTAINERS */\n.container-menu {\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  text-align: center;\n  background-color: var(--navy);\n  color: var(--sand);\n  font-size: 16px;\n  height: 100vh;\n  overflow-y: auto;\n  gap: 20px;\n  grid-template-columns: 330px;\n\n  h1 {\n    font-size: 2.5em;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 20px;\n    color: var(--sand);\n    top: 0;\n    background-color: var(--navy);\n  }\n  h1::before {\n    content: url('./assets/icons/list.png');\n    zoom: 9%;\n    filter: invert(1);\n  }\n  h1, h3, p {\n    user-select: none;\n  }\n  .container-default-projects {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin: 0 20px 0 20px;\n    gap: 10px;\n\n    .tab {\n      padding: 10px;\n      border-radius: 10px;\n      display: flex;\n      gap: 15px;\n      align-items: center;\n      font-size: 1.2em;\n    }\n    .tab:hover {\n      background-color: var(--seagreen);\n      font-weight: bold;\n    }\n    .tab::before {\n      zoom: 5%;\n      filter: invert(1);\n    }\n    .tab.today::before {\n      content: url('./assets/icons/today.png');\n    }\n    .tab.all-todos::before {\n      content: url('./assets/icons/all-todos.png');\n    }\n    .tab:active,\n    .tab[data-status=\"open\"] {\n      background-color: var(--orange);\n      color: var(--navy);\n      font-weight: bold;\n    }\n    .tab:active::before,\n    .tab[data-status=\"open\"]::before {\n      filter: invert(0);\n    }\n  }\n  .container-projects {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 10px;\n    padding: 0 20px 0 20px;\n    h3 {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid var(--sand);\n      margin-bottom: 10px;\n      font-size: 1.5em;\n      align-items: center;\n      position: sticky;\n      top: 0;\n      background-color: var(--navy);\n      box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0.3);\n      padding-left: 10px;\n      padding-right: 10px;\n      z-index: 1;\n    }\n    button.add-project {\n      color: inherit;\n      font-size: 1.5em;\n      width: 40px;\n    }\n  }\n  footer {\n    color: var(--wheat);\n    font-size: 0.8em;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    a,\n    a:visited {\n      color: inherit;\n    }\n  }\n}\n.container-todos {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: auto;\n  padding: 20px 40px;\n  min-width: 300px;\n\n  > header {\n    flex-basis: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 20px;\n    color: var(--navy);\n    p {\n      color: var(--seagreen)\n    }\n  }\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: 10px;\n  padding: 0 5px 0 5px;\n\n  > .tab {\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    align-items: center;\n    padding: 10px;\n    display: flex;\n    border-radius: 10px;\n    gap: 8px;\n    height: 40px;\n    \n    p {\n      text-align: left;\n      margin-right: auto;\n      width: 200px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      pointer-events: none;\n    }\n    button.edit:hover {\n      filter: invert(13%) sepia(34%) saturate(872%) hue-rotate(157deg) brightness(97%) contrast(97%);\n    }\n    button.edit::after,\n    button.delete::after {\n      filter: invert(1);\n    }\n  }\n  > .tab:hover {\n    background-color: var(--seagreen);\n    font-weight: bold;\n  }\n  > .tab:active,\n  > .tab[data-status=\"open\"] {\n    background-color: var(--orange);\n    color: var(--navy);\n    font-weight: bold;\n    button {\n      filter: invert(1);\n    }\n    button:hover {\n      filter: none;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  .tab {\n    border: 2px solid var(--wheat);\n    padding: 15px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 15px;\n    align-items: center;\n    border-radius: 10px;\n    .details {\n      grid-column: 1/4;\n    }\n    .header,\n    .details {\n      user-select: none;\n    }\n    .header,\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      gap: 12px;\n      align-items: center;\n      justify-items: center;\n    }\n    .note {\n      padding: 0 28px 5px 28px;\n    }\n    button {\n      filter: contrast(5%);\n    }\n    button.edit:hover,\n    button.view-mode:hover {\n      filter: invert(28%) sepia(64%) saturate(1046%) hue-rotate(141deg) brightness(92%) contrast(102%);\n    }\n    button.delete:hover {\n      filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n    }\n    .hidden {\n      display: none;\n    }\n    button.view-mode.up {\n      transform: rotate(180deg);\n    }\n  }\n  .tab:hover {\n    background-color: var(--wheat);\n  }\n  .high-priority {\n    border-left: 5px solid red;\n  }\n  .medium-priority {\n    border-left: 5px solid orange;\n  }\n  .checked {\n    border-left: 2px solid var(--wheat);\n    p.title {\n      text-decoration: line-through;\n    }\n    button.edit,\n    button.view-mode,\n    .due-date {\n      display: none;\n    }\n  }\n}\n\n\n/* BUTTONS */\nbutton{\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  cursor: pointer;\n  padding: 5px;\n}\nbutton.edit::after {\n  content: url('./assets/icons/edit.png');\n  zoom: 3.5%;\n}\nbutton.delete::after {\n  content: url('./assets/icons/delete.png');\n  zoom: 3.5%;\n}\nbutton.view-mode::after {\n  content: url('./assets/icons/arrow.png');\n  zoom: 2.5%;\n}\nbutton.add-project:hover {\n  font-weight: bold;\n}\nbutton.edit:hover,\nbutton.add-project:hover {\n  filter: invert(27%) sepia(8%) saturate(3459%) hue-rotate(139deg) brightness(87%) contrast(95%);\n}\nbutton.delete:hover {\n  filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n}\nbutton.add-todo {\n  margin-top: 10px;\n  padding: 15px;\n  border: 2px solid var(--wheat);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: var(--seagreen);\n  font-weight: bold;\n}\nbutton.add-todo::before {\n  content: '+';\n  margin-right: 10px;\n  font-size: 20px;\n}\nbutton.add-todo:hover {\n  background-color: var(--wheat);\n  color: var(--navy);\n}\nbutton.add-todo:active {\n  filter: brightness(80%);\n}\n\n\n/* FORMS */\ndialog {\n  width: 100vw;\n  height: 100vh;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n\n  form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 0 20px var(--navy);\n    min-width: 350px;\n    max-width: 450px;\n  }\n  h1 {\n    font-size: 30px;\n    padding: 20px;\n    background-color: var(--orange);\n    color: var(--navy);\n    border-bottom: 1px solid var(--seagreen);\n  }\n  div.inputs {\n    padding: 25px;\n    font-size: 18px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n    input,\n    textarea,\n    select {\n      padding: 10px;\n      border: 1px solid var(--seagreen);\n      border-radius: 5px;\n    }\n    textarea {\n      max-width: 100%;\n      max-height: 150px;\n    }\n    button {\n      padding: 10px;\n      background-color: green;\n      width: min-content;\n      border-radius: 10px;\n      border: 1px solid var(--seagreen);\n      font-weight: bold;\n      font-size: 16px;\n    }\n    button[type=\"submit\"] {\n      background-color: var(--orange);\n    }\n    button[type=\"reset\"] {\n      background-color: var(--sand);\n    }\n    div.buttons {\n      flex-direction: row-reverse;\n      justify-content: space-between;\n    }\n  }\n  label.required::after {\n    content: ' *';\n    color: red;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony export */   filterTodoListForToday: () => (/* binding */ filterTodoListForToday),
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

function filterTodoListForToday(todos) {
  const date = new Date();
  const yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();

  if (mm.length === 1) {
    mm = '0' + mm.toString();
  }
  if (dd.length === 1) {
    dd = '0' + dd.toString();
  }
  const today = yyyy + '-' + mm + '-' + dd;
  
  const filteredList = todos.filter((todo) => {
    return todo.dueDate === today;
  })
  return filteredList;
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
/* harmony export */   displayDefaultProjectTabs: () => (/* binding */ displayDefaultProjectTabs),
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


// FILTERED PROJECT OPTIONS
const defaultProjectsDiv = document.querySelector('.container-default-projects');

function displayDefaultProjectTabs() {
  const allTodosTab = defaultProjectsDiv.querySelector('.all-todos');
  const todayTab = defaultProjectsDiv.querySelector('.today');

  allTodosTab.setAttribute('data-id', '0');
  todayTab.setAttribute('data-id', '1');

  allTodosTab.onclick = (event) => {
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(event.target);
    colorProjectTab(event.target);
    displayTodoTabsOfCurrentProject();
    displayProjectTabs();
  };
  todayTab.onclick = (event) => {
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(event.target);
    colorProjectTab(event.target);
    displayTodoTabsOfCurrentProject();
    displayProjectTabs();
  }
}


// PROJECT LIST
const containerMenu = document.querySelector('.container-menu');
const projectsDiv = document.querySelector('.projects');

function displayProjectTabs() {
  clearContent(projectsDiv);
  const projectList = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetList)('projectList').slice(2);  // exclude default projects
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

    tab.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(event.target);
      colorProjectTab(event.target);
      displayTodoTabsOfCurrentProject();
    };
    editBtn.onclick = (event) => {
      openProjectEditModal(event.target);
    };
    deleteBtn.onclick = (event) => {
      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.removeDataOfDeletedProject)(event.target); 
      displayProjectTabs();

      const deletedProjectID = event.target.getAttribute('data-id');
      const currentProject = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.storageGetCurrentProject)();
      if (currentProject.id === deletedProjectID) {
        const defaultProjectNode = containerMenu.querySelector('.tab.all-todos');
        (0,_controller__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(defaultProjectNode);
        colorProjectTab(defaultProjectNode);
      } else {
        const currentProjectNode = containerMenu.querySelector(
          `.tab[data-id="${currentProject.id}"]`
        );
        colorProjectTab(currentProjectNode);
      }
      displayTodoTabsOfCurrentProject();
      event.stopPropagation();
    };

    tab.appendChild(titlePara);
    appendChildren(tab, [editBtn, deleteBtn]);
    projectsDiv.appendChild(tab);
  };
}

function colorProjectTab(projectTabNode) {
  const allProjectTabs = document.querySelectorAll('.container-menu .tab');
  for (const tab of allProjectTabs) {
    tab.setAttribute('data-status', '');
  }
  projectTabNode.setAttribute('data-status', 'open');
}

function openProjectEditModal(btnNode) {
  const projectObj = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.returnProjectObj)(btnNode);

  const dialog = document.querySelector('.edit-project');
  const form = dialog.querySelector('form');
  const titleInput = dialog.querySelector('input#title');
  const descriptionInput = dialog.querySelector('textarea');
  const saveBtn = dialog.querySelector('[type="submit"]');
  const cancelBtn = dialog.querySelector('[type="reset"]');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('value', projectObj.title);

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

    form.reset();
    dialog.close();
  };
  cancelBtn.onclick = () => {dialog.close()};
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
  let todos;
  if (currentProject.id === projectList[0].id) {  
    todos = todoList
  } else if (currentProject.id === projectList[1].id) {
    todos = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.filterTodoListForToday)(todoList);
  } else {
    todos = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.findTodosForSelectProject)(currentProject);
  }
  todos = (0,_controller__WEBPACK_IMPORTED_MODULE_0__.sortTodoListByStatus)(todos);
  for (const todo of todos) {
    const tab = document.createElement('div');
    const headerDiv = document.createElement('div');
    const titlePara = document.createElement('p');
    const dueDatePara = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const notePara = document.createElement('p');
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
    appendChildren(detailsDiv, [notePara]);
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

  const dialog = document.querySelector('.edit-todo');
  
  const form = dialog.querySelector('form');
  const titleInput = dialog.querySelector('input#title');
  const dateInput = dialog.querySelector('input#due-date');
  const noteInput = dialog.querySelector('textarea');
  const prioritySelect = dialog.querySelector('select');
  const priorityOptionLow = dialog.querySelector('[value="low"]');
  const priorityOptionMedium = dialog.querySelector('[value="medium"]');
  const priorityOptionHigh = dialog.querySelector('[value="high"]');
  const saveBtn = dialog.querySelector('[type="submit"]');
  const cancelBtn = dialog.querySelector('[type="reset"]');
  
  dialog.setAttribute('open', '');
  titleInput.setAttribute('value', `${todoObj.title}`);
  dateInput.setAttribute('value', `${todoObj.dueDate}`);

  noteInput.textContent = todoObj.note;
  
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

  saveBtn.onclick = (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.updateTodoData)(
      todoObj,
      [titleInput, dateInput, noteInput, prioritySelect] 
    );
    displayTodoTabsOfCurrentProject();
    form.reset();
    dialog.close();
  };
  cancelBtn.onclick = () => dialog.close();
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

/***/ "./src/assets/icons/all-todos.png":
/*!****************************************!*\
  !*** ./src/assets/icons/all-todos.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf1887579898c72be96c.png";

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

/***/ }),

/***/ "./src/assets/icons/today.png":
/*!************************************!*\
  !*** ./src/assets/icons/today.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a334cc3375ef76e30d3b.png";

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
      '2',
      '0',
      'First Todo Item for Sub-project',
      '2024-01-23',
      'Some random note for this todo',
      'medium',
    ),
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      '2',
      '1',
      'Second Todo Item for Sub-project',
      '2024-02-22',
      'Things I gotta remember about this task',
      'medium',
    ),
  ];
  const projectList = [
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(
      '0',
      "All Todos", 
      ""
    ),
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(
      '1',
      "Today's Todos", 
      ""
    ),
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(
      '2',
      "Another Project", 
      "Project containing todos for another project"
    ),
  ];
  const currentProject = projectList[0];

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
  localStorage.setItem('projectIDCounter', 3);
  localStorage.setItem('todoIDCounter', 2);
}


// RENDER DEFAULT UI
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayDefaultProjectTabs)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayProjectTabs)();
const defaultProjectNode = document.querySelector('.container-menu .tab:first-of-type');
(0,_controller_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentProject)(defaultProjectNode);
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayTodoTabsOfCurrentProject)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.colorProjectTab)(defaultProjectNode);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDRDQUE0QyxxSUFBK0M7QUFDM0YsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSEFBb0g7QUFDcEgseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUss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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFMEM7QUFDTjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVEQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVU7QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFhO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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c3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2xpc3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbnMvdG9kYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbnMvYWxsLXRvZG9zLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2VkaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbnMvZGVsZXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xufVxuOnJvb3Qge1xuICAtLW5hdnk6ICMxMDI5Mzc7XG4gIC0tc2VhZ3JlZW46ICMxMjRkNTQ7XG4gIC0tb3JhbmdlOiAjZjk3NDRiO1xuICAtLXdoZWF0OiAjZTFkOWNmO1xuICAtLXNhbmQ6ICNlZGVkZWQ7XG59XG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQpO1xufVxuZGl2LmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuXG4vKiBDT05UQUlORVJTICovXG4uY29udGFpbmVyLW1lbnUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgY29sb3I6IHZhcigtLXNhbmQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweDtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLXNhbmQpO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgfVxuICBoMTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgem9vbTogOSU7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgaDEsIGgzLCBwIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyLWRlZmF1bHQtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAudGFiIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTVweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAudGFiOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAudGFiOjpiZWZvcmUge1xuICAgICAgem9vbTogNSU7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB9XG4gICAgLnRhYi50b2RheTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICB9XG4gICAgLnRhYi5hbGwtdG9kb3M6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgfVxuICAgIC50YWI6YWN0aXZlLFxuICAgIC50YWJbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgICBjb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRhYjphY3RpdmU6OmJlZm9yZSxcbiAgICAudGFiW2RhdGEtc3RhdHVzPVwib3BlblwiXTo6YmVmb3JlIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDApO1xuICAgIH1cbiAgfVxuICAuY29udGFpbmVyLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gICAgaDMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zYW5kKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMThweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBidXR0b24uYWRkLXByb2plY3Qge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG4gIGZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXdoZWF0KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGEsXG4gICAgYTp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuLmNvbnRhaW5lci10b2RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcblxuICA+IGhlYWRlciB7XG4gICAgZmxleC1iYXNpczogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXNlYWdyZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cbi8qIFBST0pFQ1RTICovXG5kaXYucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XG5cbiAgPiAudGFiIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBcbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEzJSkgc2VwaWEoMzQlKSBzYXR1cmF0ZSg4NzIlKSBodWUtcm90YXRlKDE1N2RlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDk3JSk7XG4gICAgfVxuICAgIGJ1dHRvbi5lZGl0OjphZnRlcixcbiAgICBidXR0b24uZGVsZXRlOjphZnRlciB7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB9XG4gIH1cbiAgPiAudGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFncmVlbik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgPiAudGFiOmFjdGl2ZSxcbiAgPiAudGFiW2RhdGEtc3RhdHVzPVwib3BlblwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgICBjb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIH1cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qIFRPRE8gTElTVCAqL1xuZGl2LnRvZG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICAudGFiIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBnYXA6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5kZXRhaWxzIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gICAgfVxuICAgIC5oZWFkZXIsXG4gICAgLmRldGFpbHMge1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkZXIsXG4gICAgLmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5ub3RlIHtcbiAgICAgIHBhZGRpbmc6IDAgMjhweCA1cHggMjhweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGZpbHRlcjogY29udHJhc3QoNSUpO1xuICAgIH1cbiAgICBidXR0b24uZWRpdDpob3ZlcixcbiAgICBidXR0b24udmlldy1tb2RlOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDI4JSkgc2VwaWEoNjQlKSBzYXR1cmF0ZSgxMDQ2JSkgaHVlLXJvdGF0ZSgxNDFkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCgxMDIlKTtcbiAgICB9XG4gICAgYnV0dG9uLmRlbGV0ZTpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcbiAgICB9XG4gICAgLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBidXR0b24udmlldy1tb2RlLnVwIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG4gIC50YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoZWF0KTtcbiAgfVxuICAuaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIH1cbiAgLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBvcmFuZ2U7XG4gIH1cbiAgLmNoZWNrZWQge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0td2hlYXQpO1xuICAgIHAudGl0bGUge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICAgIGJ1dHRvbi5lZGl0LFxuICAgIGJ1dHRvbi52aWV3LW1vZGUsXG4gICAgLmR1ZS1kYXRlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuLyogQlVUVE9OUyAqL1xuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmJ1dHRvbi5lZGl0OjphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgem9vbTogMy41JTtcbn1cbmJ1dHRvbi5kZWxldGU6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICB6b29tOiAzLjUlO1xufVxuYnV0dG9uLnZpZXctbW9kZTo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIHpvb206IDIuNSU7XG59XG5idXR0b24uYWRkLXByb2plY3Q6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJ1dHRvbi5lZGl0OmhvdmVyLFxuYnV0dG9uLmFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg4JSkgc2F0dXJhdGUoMzQ1OSUpIGh1ZS1yb3RhdGUoMTM5ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTUlKTtcbn1cbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcbn1cbmJ1dHRvbi5hZGQtdG9kbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoZWF0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tc2VhZ3JlZW4pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJ1dHRvbi5hZGQtdG9kbzo6YmVmb3JlIHtcbiAgY29udGVudDogJysnO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmJ1dHRvbi5hZGQtdG9kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoZWF0KTtcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xufVxuYnV0dG9uLmFkZC10b2RvOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xufVxuXG5cbi8qIEZPUk1TICovXG5kaWFsb2cge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgei1pbmRleDogMjtcblxuICBmb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1uYXZ5KTtcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWFncmVlbik7XG4gIH1cbiAgZGl2LmlucHV0cyB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICBpbnB1dCxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYWdyZWVuKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VhZ3JlZW4pO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgfVxuICAgIGJ1dHRvblt0eXBlPVwicmVzZXRcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZCk7XG4gICAgfVxuICAgIGRpdi5idXR0b25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbiAgbGFiZWwucmVxdWlyZWQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnIConO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7O0FBR0EsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsNEJBQTRCOztFQUU1QjtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGdEQUF1QztJQUN2QyxRQUFRO0lBQ1IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hC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TUFHRSxhQUFhO01BQ2IsaUNBQWlDO01BQ2pDLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlDQUFpQztNQUNqQyxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLDJCQUEyQjtNQUMzQiw4QkFBOEI7SUFDaEM7RUFDRjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0byZkaXNwbGF5PXN3YXAnKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG59XFxuOnJvb3Qge1xcbiAgLS1uYXZ5OiAjMTAyOTM3O1xcbiAgLS1zZWFncmVlbjogIzEyNGQ1NDtcXG4gIC0tb3JhbmdlOiAjZjk3NDRiO1xcbiAgLS13aGVhdDogI2UxZDljZjtcXG4gIC0tc2FuZDogI2VkZWRlZDtcXG59XFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZCk7XFxufVxcbmRpdi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuXFxuLyogQ09OVEFJTkVSUyAqL1xcbi5jb250YWluZXItbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweDtcXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2FuZCk7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICB9XFxuICBoMTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy9saXN0LnBuZycpO1xcbiAgICB6b29tOiA5JTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxuICBoMSwgaDMsIHAge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIC5jb250YWluZXItZGVmYXVsdC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAudGFiIHtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICAgIC50YWI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAudGFiOjpiZWZvcmUge1xcbiAgICAgIHpvb206IDUlO1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICB9XFxuICAgIC50YWIudG9kYXk6OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy90b2RheS5wbmcnKTtcXG4gICAgfVxcbiAgICAudGFiLmFsbC10b2Rvczo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiB1cmwoJy4vYXNzZXRzL2ljb25zL2FsbC10b2Rvcy5wbmcnKTtcXG4gICAgfVxcbiAgICAudGFiOmFjdGl2ZSxcXG4gICAgLnRhYltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAudGFiOmFjdGl2ZTo6YmVmb3JlLFxcbiAgICAudGFiW2RhdGEtc3RhdHVzPVxcXCJvcGVuXFxcIl06OmJlZm9yZSB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMCk7XFxuICAgIH1cXG4gIH1cXG4gIC5jb250YWluZXItcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxuICAgIGgzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2FuZCk7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgICAgYm94LXNoYWRvdzogMCAxOHB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICB9XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0td2hlYXQpO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGEsXFxuICAgIGE6dmlzaXRlZCB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIH1cXG4gIH1cXG59XFxuLmNvbnRhaW5lci10b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG5cXG4gID4gaGVhZGVyIHtcXG4gICAgZmxleC1iYXNpczogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIHAge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWFncmVlbilcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vKiBQUk9KRUNUUyAqL1xcbmRpdi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XFxuXFxuICA+IC50YWIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIFxcbiAgICBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxMyUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoODcyJSkgaHVlLXJvdGF0ZSgxNTdkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5NyUpO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0OjphZnRlcixcXG4gICAgYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICB9XFxuICB9XFxuICA+IC50YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgPiAudGFiOmFjdGl2ZSxcXG4gID4gLnRhYltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgfVxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgIGZpbHRlcjogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vKiBUT0RPIExJU1QgKi9cXG5kaXYudG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICAudGFiIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hlYXQpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLmRldGFpbHMge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIH1cXG4gICAgLmhlYWRlcixcXG4gICAgLmRldGFpbHMge1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5oZWFkZXIsXFxuICAgIC5idXR0b25zIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBnYXA6IDEycHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLm5vdGUge1xcbiAgICAgIHBhZGRpbmc6IDAgMjhweCA1cHggMjhweDtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGZpbHRlcjogY29udHJhc3QoNSUpO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyLFxcbiAgICBidXR0b24udmlldy1tb2RlOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgyOCUpIHNlcGlhKDY0JSkgc2F0dXJhdGUoMTA0NiUpIGh1ZS1yb3RhdGUoMTQxZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoMTAyJSk7XFxuICAgIH1cXG4gICAgYnV0dG9uLmRlbGV0ZTpob3ZlciB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSg2NSUpIHNhdHVyYXRlKDU3NCUpIGh1ZS1yb3RhdGUoMzI0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTA1JSk7XFxuICAgIH1cXG4gICAgLmhpZGRlbiB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBidXR0b24udmlldy1tb2RlLnVwIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuICB9XFxuICAudGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xcbiAgfVxcbiAgLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcXG4gIH1cXG4gIC5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIG9yYW5nZTtcXG4gIH1cXG4gIC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XFxuICAgIHAudGl0bGUge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5lZGl0LFxcbiAgICBidXR0b24udmlldy1tb2RlLFxcbiAgICAuZHVlLWRhdGUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuLyogQlVUVE9OUyAqL1xcbmJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5idXR0b24uZWRpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy9lZGl0LnBuZycpO1xcbiAgem9vbTogMy41JTtcXG59XFxuYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9pY29ucy9kZWxldGUucG5nJyk7XFxuICB6b29tOiAzLjUlO1xcbn1cXG5idXR0b24udmlldy1tb2RlOjphZnRlciB7XFxuICBjb250ZW50OiB1cmwoJy4vYXNzZXRzL2ljb25zL2Fycm93LnBuZycpO1xcbiAgem9vbTogMi41JTtcXG59XFxuYnV0dG9uLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5idXR0b24uZWRpdDpob3ZlcixcXG5idXR0b24uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg4JSkgc2F0dXJhdGUoMzQ1OSUpIGh1ZS1yb3RhdGUoMTM5ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTUlKTtcXG59XFxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDY1JSkgc2F0dXJhdGUoNTc0JSkgaHVlLXJvdGF0ZSgzMjRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuYnV0dG9uLmFkZC10b2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hlYXQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5idXR0b24uYWRkLXRvZG86OmJlZm9yZSB7XFxuICBjb250ZW50OiAnKyc7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbmJ1dHRvbi5hZGQtdG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGVhdCk7XFxuICBjb2xvcjogdmFyKC0tbmF2eSk7XFxufVxcbmJ1dHRvbi5hZGQtdG9kbzphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcblxcbi8qIEZPUk1TICovXFxuZGlhbG9nIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICBmb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLW5hdnkpO1xcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgfVxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlYWdyZWVuKTtcXG4gIH1cXG4gIGRpdi5pbnB1dHMge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICBpbnB1dCxcXG4gICAgdGV4dGFyZWEsXFxuICAgIHNlbGVjdCB7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFncmVlbik7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuICAgIHRleHRhcmVhIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYWdyZWVuKTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICB9XFxuICAgIGJ1dHRvblt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5kKTtcXG4gICAgfVxcbiAgICBkaXYuYnV0dG9ucyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbiAgfVxcbiAgbGFiZWwucmVxdWlyZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAqJztcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoaXMgZmlsZSBoYW5kbGVzIGRhdGEgcmV0cmlldmFsLCBtYW5pcHVsYXRpb24sIFxuLy8gYW5kIGNyZWF0aW9uIGJldHdlZW4gdGhlIERPTSBhbmQgdG9kby9wcm9qZWN0IHNjcmlwdHNcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VHZXRMaXN0KGxpc3RTdHJpbmcpIHtcbiAgY29uc3QgcGxhaW5MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsaXN0U3RyaW5nKSk7XG4gIGNvbnN0IGluc3RhbnRpYXRlZExpc3QgPSBwbGFpbkxpc3QubWFwKChwbGFpbk9iaikgPT4ge1xuICAgIGlmIChsaXN0U3RyaW5nID09PSAncHJvamVjdExpc3QnKSB7XG4gICAgICBjb25zdCBpZCA9IHBsYWluT2JqLmlkO1xuICAgICAgY29uc3QgdGl0bGUgPSBwbGFpbk9iai50aXRsZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGxhaW5PYmouZGVzY3JpcHRpb247XG4gICAgICByZXR1cm4gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RTdHJpbmcgPT09ICd0b2RvTGlzdCcpIHtcbiAgICAgIGNvbnN0IHByb2plY3RJRCA9IHBsYWluT2JqLnByb2plY3RJRDtcbiAgICAgIGNvbnN0IHRvZG9JRCA9IHBsYWluT2JqLnRvZG9JRDtcbiAgICAgIGNvbnN0IHRpdGxlID0gcGxhaW5PYmoudGl0bGU7XG4gICAgICBjb25zdCBkdWVEYXRlID0gcGxhaW5PYmouZHVlRGF0ZTtcbiAgICAgIGNvbnN0IG5vdGUgPSBwbGFpbk9iai5ub3RlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBwbGFpbk9iai5wcmlvcml0eTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYWluT2JqLnN0YXR1cztcbiAgICAgIHJldHVybiBjcmVhdGVUb2RvKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cyk7XG4gICAgfVxuICB9KVxuICByZXR1cm4gaW5zdGFudGlhdGVkTGlzdDtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0KCkge1xuICBjb25zdCBwbGFpbk9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JykpO1xuICBjb25zdCBpZCA9IHBsYWluT2JqLmlkO1xuICBjb25zdCB0aXRsZSA9IHBsYWluT2JqLnRpdGxlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHBsYWluT2JqLmRlc2NyaXB0aW9uO1xuICBjb25zdCBpbnN0YW50aWF0ZWRPYmogPSBjcmVhdGVQcm9qZWN0KGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICByZXR1cm4gaW5zdGFudGlhdGVkT2JqO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlR2V0SURDb3VudGVyKHR5cGVTdHJpbmcpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHR5cGVTdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlU2V0SXRlbShrZXlTdHJpbmcsIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleVN0cmluZywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0KHRvZG9MaXN0LCB0b2RvT2JqKSB7XG4gIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QubWFwKChlKSA9PiBlLnRvZG9JRCkuaW5kZXhPZih0b2RvT2JqLnRvZG9JRCk7XG4gIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4T2ZQcm9qZWN0SW5NYXN0ZXJMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QubWFwKChlKSA9PiBlLmlkKS5pbmRleE9mKHByb2plY3RPYmouaWQpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QocHJvamVjdE9iaikge1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0T2JqLmlkO1xuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBmaWx0ZXJlZFRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8ucHJvamVjdElEID09PSBwcm9qZWN0SUQ7XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWRUb2RvTGlzdDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuVG9kb09iaihub2RlKSB7XG4gIGNvbnN0IHRvZG9JRCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnKTtcbiAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgY29uc3QgdG9kb09iaiA9IHRvZG9MaXN0LmZpbmQoKHRvZG8pID0+IHtcbiAgICByZXR1cm4gdG9kby50b2RvSUQgPT09IHRvZG9JRDtcbiAgfSk7XG4gIHJldHVybiB0b2RvT2JqO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0T2JqKHByb2plY3RUYWJOb2RlKSB7XG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RUYWJOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpO1xuICBjb25zdCBwcm9qZWN0T2JqID0gcHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT09IHByb2plY3RJRDtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0T2JqO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvRGF0YSh0b2RvT2JqLCBpbnB1dEFycikge1xuICBjb25zdCB2YWx1ZXNBcnIgPSBpbnB1dEFyci5tYXAoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICB9KTtcbiAgY29uc3QgW3RpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eV0gPSB2YWx1ZXNBcnI7XG4gIGNvbnN0IHVwZGF0ZWRPYmogPSB7XG4gICAgcHJvamVjdElEOiB0b2RvT2JqLnByb2plY3RJRCxcbiAgICB0b2RvSUQ6IHRvZG9PYmoudG9kb0lELFxuICAgIHRpdGxlLCBcbiAgICBkdWVEYXRlLFxuICAgIG5vdGUsXG4gICAgcHJpb3JpdHksXG4gICAgc3RhdHVzOiB0b2RvT2JqLnN0YXR1c1xuICB9XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0KHRvZG9MaXN0LCB0b2RvT2JqKTtcbiAgdG9kb0xpc3RbaW5kZXhdID0gdXBkYXRlZE9iajtcbiAgc3RvcmFnZVNldEl0ZW0oJ3RvZG9MaXN0JywgdG9kb0xpc3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0RGF0YShwcm9qZWN0T2JqLCBpbnB1dEFycikge1xuICBjb25zdCB2YWx1ZXNBcnIgPSBpbnB1dEFyci5tYXAoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICB9KTtcbiAgY29uc3QgW3RpdGxlLCBkZXNjcmlwdGlvbl0gPSB2YWx1ZXNBcnI7XG4gIGNvbnN0IHVwZGF0ZWRPYmogPSB7XG4gICAgaWQ6IHByb2plY3RPYmouaWQsXG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uXG4gIH1cbiAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKTtcbiAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QocHJvamVjdExpc3QsIHByb2plY3RPYmopO1xuICBwcm9qZWN0TGlzdFtpbmRleF0gPSB1cGRhdGVkT2JqO1xuICBzdG9yYWdlU2V0SXRlbSgncHJvamVjdExpc3QnLCBwcm9qZWN0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicygpIHtcbiAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgY29uc3Qgbm9kZUxpc3QgPSB0b2Rvc0Rpdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gIHJldHVybiBbLi4ubm9kZUxpc3RdO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2RvU3RhdHVzKG5vZGUpIHtcbiAgY29uc3QgdG9kb09iaiA9IHJldHVyblRvZG9PYmoobm9kZSk7XG4gIGxldCBuZXdTdGF0dXM7XG4gIGlmIChub2RlLmNoZWNrZWQpIHtcbiAgICBuZXdTdGF0dXMgPSAnY2xvc2VkJztcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0dXMgPSAnb3BlbidcbiAgfVxuICBjb25zdCB1cGRhdGVkT2JqID0ge1xuICAgIHByb2plY3RJRDogdG9kb09iai5wcm9qZWN0SUQsXG4gICAgdG9kb0lEOiB0b2RvT2JqLnRvZG9JRCxcbiAgICB0aXRsZTogdG9kb09iai50aXRsZSwgXG4gICAgZHVlRGF0ZTogdG9kb09iai5kdWVEYXRlLFxuICAgIG5vdGU6IHRvZG9PYmoubm90ZSxcbiAgICBwcmlvcml0eTogdG9kb09iai5wcmlvcml0eSxcbiAgICBzdGF0dXM6IG5ld1N0YXR1c1xuICB9XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0KHRvZG9MaXN0LCB0b2RvT2JqKVxuICB0b2RvTGlzdFtpbmRleF0gPSB1cGRhdGVkT2JqO1xuICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG9Gcm9tTGlzdChub2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKG5vZGUpO1xuICB0b2RvT2JqLnJlbW92ZUZyb21MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KG5vZGUpIHtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHJldHVyblByb2plY3RPYmoobm9kZSk7XG4gIHN0b3JhZ2VTZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsIHByb2plY3RPYmopO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEYXRhT2ZEZWxldGVkUHJvamVjdChub2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRQcm9qZWN0T2JqID0gcmV0dXJuUHJvamVjdE9iaihub2RlKTtcbiAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgY29uc3QgcmVtb3ZlZFRvZG9zID0gdG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8ucHJvamVjdElEID09PSByZW1vdmVkUHJvamVjdE9iai5pZDtcbiAgfSk7XG4gIHJlbW92ZWRUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7dG9kby5yZW1vdmVGcm9tTGlzdCgpfSk7XG4gIHJlbW92ZWRQcm9qZWN0T2JqLnJlbW92ZUZyb21MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KGFzc2lnbklERm9yUHJvamVjdCgpLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBuZXdQcm9qZWN0LmFkZFRvTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUb2RvKHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSkge1xuICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyhcbiAgICBhc3NpZ25Ub2RvUHJvamVjdElEKCksIGFzc2lnblRvZG9JRCgpLCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHlcbiAgKTtcbiAgbmV3VG9kby5hZGRUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gc29ydFRvZG9MaXN0QnlTdGF0dXModG9kb3MpIHtcbiAgY29uc3Qgb3BlblRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnN0YXR1cyA9PT0gJ29wZW4nKTtcbiAgY29uc3QgY2xvc2VkVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uc3RhdHVzID09PSAnY2xvc2VkJyk7XG4gIGNvbnN0IHNvcnRlZExpc3QgPSBbLi4ub3BlblRvZG9zLCAuLi5jbG9zZWRUb2Rvc107XG4gIHJldHVybiBzb3J0ZWRMaXN0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvTGlzdEZvclRvZGF5KHRvZG9zKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gIGxldCBtbSA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuXG4gIGlmIChtbS5sZW5ndGggPT09IDEpIHtcbiAgICBtbSA9ICcwJyArIG1tLnRvU3RyaW5nKCk7XG4gIH1cbiAgaWYgKGRkLmxlbmd0aCA9PT0gMSkge1xuICAgIGRkID0gJzAnICsgZGQudG9TdHJpbmcoKTtcbiAgfVxuICBjb25zdCB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICBcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8uZHVlRGF0ZSA9PT0gdG9kYXk7XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZExpc3Q7XG59XG5cbmZ1bmN0aW9uIG1vdmVDaGVja2VkVG9kb0luTGlzdE9yZGVyKG5vZGUpIHtcbiAgY29uc3QgdG9kb09iaiA9IHJldHVyblRvZG9PYmoobm9kZSk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0KHRvZG9MaXN0LCB0b2RvT2JqKTtcbiAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRvZG9PYmouc3RhdHVzID09PSAnY2xvc2VkJykgdG9kb0xpc3QucHVzaCh0b2RvT2JqKTtcbiAgaWYgKHRvZG9PYmouc3RhdHVzID09PSAnb3BlbicpIHRvZG9MaXN0LnVuc2hpZnQodG9kb09iaik7XG4gIHN0b3JhZ2VTZXRJdGVtKCd0b2RvTGlzdCcsIHRvZG9MaXN0KTtcbn1cblxuXG4vLyBBIHByb2plY3QgYW5kIGl0cyB0b2RvcyBtdXN0IHNoYXJlIHRoZSBzYW1lIGlkXG5mdW5jdGlvbiBhc3NpZ25JREZvclByb2plY3QoKSB7XG4gIGxldCBpZCA9ICtzdG9yYWdlR2V0SURDb3VudGVyKCdwcm9qZWN0SURDb3VudGVyJyk7XG4gIGxldCBpbmNyZW1lbnRJRCA9IGlkICsgMVxuICBzdG9yYWdlU2V0SXRlbSgncHJvamVjdElEQ291bnRlcicsIGluY3JlbWVudElEKTtcbiAgcmV0dXJuIGlkLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBhc3NpZ25Ub2RvUHJvamVjdElEKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpO1xuICByZXR1cm4gY3VycmVudFByb2plY3QuaWQ7XG59XG5cblxuLy8gRXZlcnkgdG9kbyBoYXMgYSBzZXBhcmF0ZSB0b2RvSUQgdG8gZGlmZmVyZW50aWF0ZSBpdCBmcm9tIG90aGVyIHRvZG9zXG5mdW5jdGlvbiBhc3NpZ25Ub2RvSUQoKSB7XG4gIGxldCBpZCA9ICtzdG9yYWdlR2V0SURDb3VudGVyKCd0b2RvSURDb3VudGVyJyk7XG4gIGxldCBpbmNyZW1lbnRJRCA9IGlkICsgMVxuICBzdG9yYWdlU2V0SXRlbSgndG9kb0lEQ291bnRlcicsIGluY3JlbWVudElEKTtcbiAgcmV0dXJuIGlkLnRvU3RyaW5nKCk7XG59XG5cblxuZXhwb3J0IHsgXG4gIHN0b3JhZ2VHZXRMaXN0LFxuICBzdG9yYWdlR2V0Q3VycmVudFByb2plY3QsXG4gIHN0b3JhZ2VTZXRJdGVtLFxuICBmaW5kSW5kZXhPZlRvZG9Jbk1hc3Rlckxpc3QsXG4gIGZpbmRJbmRleE9mUHJvamVjdEluTWFzdGVyTGlzdCxcbiAgZmluZFRvZG9zRm9yU2VsZWN0UHJvamVjdCxcbiAgcmV0dXJuVG9kb09iaixcbiAgcmV0dXJuUHJvamVjdE9iaixcbiAgdXBkYXRlVG9kb0RhdGEsXG4gIHVwZGF0ZVByb2plY3REYXRhLFxuICByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMsXG4gIHRvZ2dsZVRvZG9TdGF0dXMsXG4gIHJlbW92ZVRvZG9Gcm9tTGlzdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICBjcmVhdGVOZXdUb2RvLFxuICBzb3J0VG9kb0xpc3RCeVN0YXR1cyxcbiAgZmlsdGVyVG9kb0xpc3RGb3JUb2RheSxcbiAgbW92ZUNoZWNrZWRUb2RvSW5MaXN0T3JkZXIsXG4gIGFzc2lnbklERm9yUHJvamVjdCxcbiAgYXNzaWduVG9kb1Byb2plY3RJRCxcbiAgYXNzaWduVG9kb0lEXG59OyIsImltcG9ydCB7IFxuICBzdG9yYWdlR2V0TGlzdCxcbiAgc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0LFxuICBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0LFxuICByZXR1cm5Ub2RvT2JqLFxuICByZXR1cm5Qcm9qZWN0T2JqLFxuICB1cGRhdGVUb2RvRGF0YSxcbiAgcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzLFxuICB0b2dnbGVUb2RvU3RhdHVzLFxuICByZW1vdmVUb2RvRnJvbUxpc3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0LFxuICByZW1vdmVEYXRhT2ZEZWxldGVkUHJvamVjdCxcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgY3JlYXRlTmV3VG9kbyxcbiAgdXBkYXRlUHJvamVjdERhdGEsXG4gIHNvcnRUb2RvTGlzdEJ5U3RhdHVzLFxuICBtb3ZlQ2hlY2tlZFRvZG9Jbkxpc3RPcmRlcixcbiAgZmlsdGVyVG9kb0xpc3RGb3JUb2RheSxcbn0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5cbi8vIERPTSBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQobm9kZSkge1xuICBub2RlLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuQXJyKSB7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW5BcnIpIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9O1xufVxuXG5cbi8vIEZJTFRFUkVEIFBST0pFQ1QgT1BUSU9OU1xuY29uc3QgZGVmYXVsdFByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1kZWZhdWx0LXByb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZWZhdWx0UHJvamVjdFRhYnMoKSB7XG4gIGNvbnN0IGFsbFRvZG9zVGFiID0gZGVmYXVsdFByb2plY3RzRGl2LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdG9kb3MnKTtcbiAgY29uc3QgdG9kYXlUYWIgPSBkZWZhdWx0UHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5cbiAgYWxsVG9kb3NUYWIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJzAnKTtcbiAgdG9kYXlUYWIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJzEnKTtcblxuICBhbGxUb2Rvc1RhYi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3QoZXZlbnQudGFyZ2V0KTtcbiAgICBjb2xvclByb2plY3RUYWIoZXZlbnQudGFyZ2V0KTtcbiAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgZGlzcGxheVByb2plY3RUYWJzKCk7XG4gIH07XG4gIHRvZGF5VGFiLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdChldmVudC50YXJnZXQpO1xuICAgIGNvbG9yUHJvamVjdFRhYihldmVudC50YXJnZXQpO1xuICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgfVxufVxuXG5cbi8vIFBST0pFQ1QgTElTVFxuY29uc3QgY29udGFpbmVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWVudScpO1xuY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUYWJzKCkge1xuICBjbGVhckNvbnRlbnQocHJvamVjdHNEaXYpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpLnNsaWNlKDIpOyAgLy8gZXhjbHVkZSBkZWZhdWx0IHByb2plY3RzXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaWQpO1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJycpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmlkKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaWQpO1xuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgIHRhYi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBzZXRDdXJyZW50UHJvamVjdChldmVudC50YXJnZXQpO1xuICAgICAgY29sb3JQcm9qZWN0VGFiKGV2ZW50LnRhcmdldCk7XG4gICAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfTtcbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5Qcm9qZWN0RWRpdE1vZGFsKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcbiAgICBkZWxldGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QoZXZlbnQudGFyZ2V0KTsgXG4gICAgICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcblxuICAgICAgY29uc3QgZGVsZXRlZFByb2plY3RJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IGRlbGV0ZWRQcm9qZWN0SUQpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3ROb2RlID0gY29udGFpbmVyTWVudS5xdWVyeVNlbGVjdG9yKCcudGFiLmFsbC10b2RvcycpO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdChkZWZhdWx0UHJvamVjdE5vZGUpO1xuICAgICAgICBjb2xvclByb2plY3RUYWIoZGVmYXVsdFByb2plY3ROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0Tm9kZSA9IGNvbnRhaW5lck1lbnUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnRhYltkYXRhLWlkPVwiJHtjdXJyZW50UHJvamVjdC5pZH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yUHJvamVjdFRhYihjdXJyZW50UHJvamVjdE5vZGUpO1xuICAgICAgfVxuICAgICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHRhYi5hcHBlbmRDaGlsZCh0aXRsZVBhcmEpO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhYiwgW2VkaXRCdG4sIGRlbGV0ZUJ0bl0pO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHRhYik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbG9yUHJvamVjdFRhYihwcm9qZWN0VGFiTm9kZSkge1xuICBjb25zdCBhbGxQcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXItbWVudSAudGFiJyk7XG4gIGZvciAoY29uc3QgdGFiIG9mIGFsbFByb2plY3RUYWJzKSB7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnJyk7XG4gIH1cbiAgcHJvamVjdFRhYk5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICdvcGVuJyk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0RWRpdE1vZGFsKGJ0bk5vZGUpIHtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHJldHVyblByb2plY3RPYmooYnRuTm9kZSk7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdCcpO1xuICBjb25zdCBmb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0aXRsZScpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IHNhdmVCdG4gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwicmVzZXRcIl0nKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3RPYmoudGl0bGUpO1xuXG4gIGRlc2NyaXB0aW9uSW5wdXQudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmRlc2NyaXB0aW9uO1xuXG4gIHNhdmVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcblxuICAgIC8vIHVwZGF0ZSBwcm9qZWN0IGRhdGEgaW4gbWFzdGVyIGxpc3RcbiAgICB1cGRhdGVQcm9qZWN0RGF0YShcbiAgICAgIHByb2plY3RPYmosXG4gICAgICBbdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dF0gXG4gICAgKTtcblxuICAgIC8vIG9wZW4gdGhlIGVkaXRlZCBwcm9qZWN0J3MgdGFiXG4gICAgZGlzcGxheVByb2plY3RUYWJzKCk7XG4gICAgY29uc3QgZWRpdGVkUHJvamVjdE5vZGUgPSBwcm9qZWN0c0Rpdi5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50YWJbZGF0YS1pZD1cIiR7cHJvamVjdE9iai5pZH1gXG4gICAgKTtcbiAgICBzZXRDdXJyZW50UHJvamVjdChlZGl0ZWRQcm9qZWN0Tm9kZSk7XG4gICAgY29sb3JQcm9qZWN0VGFiKGVkaXRlZFByb2plY3ROb2RlKTtcbiAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH07XG4gIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge2RpYWxvZy5jbG9zZSgpfTtcbn1cblxuXG4vLyBUT0RPIEhFQURFUlxuY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdG9kb3MgPiBoZWFkZXInKVxuZnVuY3Rpb24gZGlzcGxheVRvZG9IZWFkZXJDb250ZW50KCkge1xuICBjb25zdCBoMSA9IHRvZG9IZWFkZXIucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY29uc3QgcGFyYSA9IHRvZG9IZWFkZXIucXVlcnlTZWxlY3RvcigncCcpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgaDEudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uO1xufVxuXG5cbi8vIFRPRE8gTElTVFxuY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpIHtcbiAgZGlzcGxheVRvZG9IZWFkZXJDb250ZW50KCk7XG4gIGNsZWFyQ29udGVudCh0b2Rvc0Rpdik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0KCdjdXJyZW50UHJvamVjdCcpO1xuICBsZXQgdG9kb3M7XG4gIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gcHJvamVjdExpc3RbMF0uaWQpIHsgIFxuICAgIHRvZG9zID0gdG9kb0xpc3RcbiAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gcHJvamVjdExpc3RbMV0uaWQpIHtcbiAgICB0b2RvcyA9IGZpbHRlclRvZG9MaXN0Rm9yVG9kYXkodG9kb0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9zID0gZmluZFRvZG9zRm9yU2VsZWN0UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gIH1cbiAgdG9kb3MgPSBzb3J0VG9kb0xpc3RCeVN0YXR1cyh0b2Rvcyk7XG4gIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBub3RlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHZpZXdNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICB0aXRsZVBhcmEuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkdWVEYXRlUGFyYS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycsICdoaWRkZW4nKTtcbiAgICBub3RlUGFyYS5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG4gICAgYnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIHZpZXdNb2RlQnRuLmNsYXNzTGlzdC5hZGQoJ3ZpZXctbW9kZScsICdkb3duJyk7XG5cbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvLnRvZG9JRCk7XG4gICAgdmlld01vZGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvLnRvZG9JRCk7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIHRvZG8udG9kb0lEKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvLnRvZG9JRCk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvLnRvZG9JRCk7XG4gICAgXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgfVxuICAgIGlmICh0b2RvLnN0YXR1cyA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICB9XG5cbiAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0b2dnbGVUb2RvU3RhdHVzKGV2ZW50LnRhcmdldCk7XG4gICAgICBtb3ZlQ2hlY2tlZFRvZG9Jbkxpc3RPcmRlcihldmVudC50YXJnZXQpO1xuICAgICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIH07XG4gICAgZWRpdEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBvcGVuVG9kb0VkaXRNb2RhbChldmVudC50YXJnZXQpO1xuICAgIH07XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlbW92ZVRvZG9Gcm9tTGlzdChldmVudC50YXJnZXQpO1xuICAgICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIH07XG4gICAgdmlld01vZGVCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcm90YXRlVmlld01vZGVCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRvZ2dsZURpc3BsYXlPZkRldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oaGVhZGVyRGl2LCBbdGl0bGVQYXJhLCBkdWVEYXRlUGFyYV0pO1xuICAgIGFwcGVuZENoaWxkcmVuKGJ0bnNEaXYsIFtlZGl0QnRuLCBkZWxldGVCdG4sIHZpZXdNb2RlQnRuXSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZGV0YWlsc0RpdiwgW25vdGVQYXJhXSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4odGFiLCBbXG4gICAgICBjaGVja2JveCwgXG4gICAgICBoZWFkZXJEaXYsXG4gICAgICBidG5zRGl2LFxuICAgICAgZGV0YWlsc0RpdlxuICAgIF0pO1xuICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKHRhYik7XG4gIH07XG4gIGRpc3BsYXlUb2RvRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb0RldGFpbHMoKSB7XG4gIGNvbnN0IHRvZG9zTm9kZUxpc3QgPSByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMoKTtcbiAgZm9yIChjb25zdCB0b2RvTm9kZSBvZiB0b2Rvc05vZGVMaXN0KSB7XG4gICAgY29uc3QgdG9kb09iaiA9IHJldHVyblRvZG9PYmoodG9kb05vZGUpO1xuXG4gICAgY29uc3QgdGl0bGVQYXJhID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKTtcbiAgICBjb25zdCBub3RlUGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlJyk7XG4gICAgXG4gICAgY29uc3QgZm9ybWF0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSAodG9kb09iai5kdWVEYXRlKS5zcGxpdCgnLScpO1xuICAgICAgbGV0IG1tID0gZGF0ZVsxXTtcbiAgICAgIGxldCBkZCA9IGRhdGVbMl07XG4gICAgICBpZiAobW0uY2hhckF0KDApID09PSAnMCcpIG1tID0gbW0uY2hhckF0KDEpO1xuICAgICAgaWYgKGRkLmNoYXJBdCgwKSA9PT0gJzAnKSBkZCA9IGRkLmNoYXJBdCgxKTtcbiAgICAgIHJldHVybiAgbW0gKyAnLycgKyBkZDtcbiAgICB9XG5cbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLnRpdGxlO1xuICAgIGlmICh0b2RvT2JqLmR1ZURhdGUpIHtcbiAgICAgIGR1ZURhdGVQYXJhLnRleHRDb250ZW50ID0gZm9ybWF0RHVlRGF0ZSgpO1xuICAgIH1cbiAgICBub3RlUGFyYS50ZXh0Q29udGVudCA9IHRvZG9PYmoubm90ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVWaWV3TW9kZUJ0bihidG5Ob2RlKSB7XG4gIGlmIChidG5Ob2RlLmNsYXNzTGlzdC5jb250YWlucygnZG93bicpKSB7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuICB9IGVsc2Uge1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcbiAgICBidG5Ob2RlLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZEZXRhaWxzKGJ0bk5vZGUpIHtcbiAgY29uc3QgdG9kb0lEID0gYnRuTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcpO1xuICBjb25zdCB0b2RvTm9kZSA9IHRvZG9zRGl2LnF1ZXJ5U2VsZWN0b3IoYC50YWJbZGF0YS10b2RvLWlkPVwiJHt0b2RvSUR9YCk7XG4gIGNvbnN0IGRldGFpbHNEaXYgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpO1xuXG4gIGlmIChkZXRhaWxzRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblRvZG9FZGl0TW9kYWwoYnRuTm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihidG5Ob2RlKTtcblxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvJyk7XG4gIFxuICBjb25zdCBmb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0aXRsZScpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignaW5wdXQjZHVlLWRhdGUnKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbkxvdyA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCJsb3dcIl0nKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25NZWRpdW0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwibWVkaXVtXCJdJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uSGlnaCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCJoaWdoXCJdJyk7XG4gIGNvbnN0IHNhdmVCdG4gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwicmVzZXRcIl0nKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3RvZG9PYmoudGl0bGV9YCk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kb09iai5kdWVEYXRlfWApO1xuXG4gIG5vdGVJbnB1dC50ZXh0Q29udGVudCA9IHRvZG9PYmoubm90ZTtcbiAgXG4gIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHRvZG9PYmoucHJpb3JpdHk7XG4gIGxldCBzZWxlY3RPcHRpb247XG4gIGlmIChjdXJyZW50UHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgc2VsZWN0T3B0aW9uID0gcHJpb3JpdHlPcHRpb25Mb3c7XG4gIH0gZWxzZSBpZiAoY3VycmVudFByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uTWVkaXVtO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uSGlnaDtcbiAgfTtcbiAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCcnKTtcblxuICBzYXZlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgdXBkYXRlVG9kb0RhdGEoXG4gICAgICB0b2RvT2JqLFxuICAgICAgW3RpdGxlSW5wdXQsIGRhdGVJbnB1dCwgbm90ZUlucHV0LCBwcmlvcml0eVNlbGVjdF0gXG4gICAgKTtcbiAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9O1xuICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IGRpYWxvZy5jbG9zZSgpO1xufVxuXG5cbi8vIFwiQUREXCIgQlVUVE9OU1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLXByb2plY3RcIik7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZy5hZGQtcHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4ub25jbGljayA9ICgpID0+IHtwcm9qZWN0RGlhbG9nLnNob3coKX07XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC10b2RvXCIpO1xuY29uc3QgdG9kb0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cuYWRkLXRvZG9cIik7XG5hZGRUb2RvQnRuLm9uY2xpY2sgPSAoKSA9PiB7dG9kb0RpYWxvZy5zaG93KCl9O1xuXG5cbi8vIFBST0pFQ1QgRk9STVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGZvcm1cIik7XG5jb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QgaW5wdXRcIik7XG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QgdGV4dGFyZWFcIik7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbnN1Ym1pdFByb2plY3RCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG5cbiAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0IGluc3RhbmNlXG4gIGNvbnN0IHRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAvLyBvcGVuIG5ldyBwcm9qZWN0XG4gIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuICBjb25zdCBuZXdQcm9qZWN0Tm9kZSA9IHByb2plY3RzRGl2Lmxhc3RDaGlsZDtcbiAgc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdE5vZGUpO1xuICBjb2xvclByb2plY3RUYWIobmV3UHJvamVjdE5vZGUpO1xuICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gIFxuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufVxuXG5jb25zdCByZXNldFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGJ1dHRvblt0eXBlPSdyZXNldCddXCIpO1xucmVzZXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTsgXG59O1xuXG5cbi8vIFRPRE8gRk9STVxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGZvcm1cIik7XG5jb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjdGl0bGVcIik7XG5jb25zdCB0b2RvRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBpbnB1dCNkdWUtZGF0ZVwiKTtcbmNvbnN0IHRvZG9Ob3RlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIHRleHRhcmVhXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIHNlbGVjdFwiKTtcblxuZnVuY3Rpb24gdG9kYXlzRGF0ZSgpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG1tID0gKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICBsZXQgZGQgPSAodG9kYXkuZ2V0RGF0ZSgpKS50b1N0cmluZygpO1xuXG4gIGlmIChtbS5sZW5ndGggPT09IDEpIHttbSA9ICcwJyArIG1tfTtcbiAgaWYgKGRkLmxlbmd0aCA9PT0gMSkge2RkID0gJzAnICsgZGR9O1xuICByZXR1cm4geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG59XG50b2RvRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXlzRGF0ZSgpKTtcblxuY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xuc3VibWl0VG9kb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghdG9kb0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdG9kb0Zvcm0ucmVwb3J0VmFsaWRpdHkoKTsgXG4gIGNvbnN0IHRpdGxlID0gdG9kb1RpdGxlSW5wdXQudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlO1xuICBjb25zdCBub3RlID0gdG9kb05vdGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSB0b2RvUHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgY3JlYXRlTmV3VG9kbyh0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpO1xuICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gIHRvZG9Gb3JtLnJlc2V0KCk7XG4gIHRvZG9EaWFsb2cuY2xvc2UoKTtcbn1cblxuY29uc3QgcmVzZXRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBidXR0b25bdHlwZT0ncmVzZXQnXVwiKTtcbnJlc2V0VG9kb0J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICB0b2RvRGlhbG9nLmNsb3NlKCk7IFxufTtcblxuXG5leHBvcnQgeyBcbiAgZGlzcGxheURlZmF1bHRQcm9qZWN0VGFicyxcbiAgZGlzcGxheVByb2plY3RUYWJzLCBcbiAgY29sb3JQcm9qZWN0VGFiLFxuICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0XG59OyIsImltcG9ydCB7IGZpbmRJbmRleE9mUHJvamVjdEluTWFzdGVyTGlzdCwgc3RvcmFnZUdldExpc3QsIHN0b3JhZ2VTZXRJdGVtIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jbGFzcyBQcm9qZWN0SXRlbSB7ICBcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWRkVG9MaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gICAgcHJvamVjdExpc3QucHVzaCh0aGlzKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgncHJvamVjdExpc3QnLCBwcm9qZWN0TGlzdCk7XG4gIH0gXG5cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mUHJvamVjdEluTWFzdGVyTGlzdChwcm9qZWN0TGlzdCwgdGhpcyk7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgncHJvamVjdExpc3QnLCBwcm9qZWN0TGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvamVjdEl0ZW0oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIFByb2plY3RJdGVtIH07IiwiaW1wb3J0IHsgZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0LCBzdG9yYWdlR2V0TGlzdCwgc3RvcmFnZVNldEl0ZW0gfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmNsYXNzIFRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IocHJvamVjdElELCB0b2RvSUQsIHRpdGxlLCBkdWVEYXRlLCBub3RlLCBwcmlvcml0eSwgc3RhdHVzID0gJ29wZW4nKSB7XG4gICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgdGhpcy50b2RvSUQgPSB0b2RvSUQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBhZGRUb0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgICB0b2RvTGlzdC5wdXNoKHRoaXMpO1xuICAgIHN0b3JhZ2VTZXRJdGVtKCd0b2RvTGlzdCcsIHRvZG9MaXN0KTtcbiAgfSBcblxuICByZW1vdmVGcm9tTGlzdCgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0KHRvZG9MaXN0LCB0aGlzKTtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VTZXRJdGVtKCd0b2RvTGlzdCcsIHRvZG9MaXN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICByZXR1cm4gbmV3IFRvZG9JdGVtKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7Y3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBcbiAgY29sb3JQcm9qZWN0VGFiLFxuICBkaXNwbGF5RGVmYXVsdFByb2plY3RUYWJzLFxuICBkaXNwbGF5UHJvamVjdFRhYnMsIFxuICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0LFxufSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0LCBzdG9yYWdlR2V0TGlzdCwgc3RvcmFnZVNldEl0ZW0gfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cblxuLy8gSU5JVElBTElaRSBMT0NBTCBTVE9SQUdFXG5pZiAoIWxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBbXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICcyJyxcbiAgICAgICcwJyxcbiAgICAgICdGaXJzdCBUb2RvIEl0ZW0gZm9yIFN1Yi1wcm9qZWN0JyxcbiAgICAgICcyMDI0LTAxLTIzJyxcbiAgICAgICdTb21lIHJhbmRvbSBub3RlIGZvciB0aGlzIHRvZG8nLFxuICAgICAgJ21lZGl1bScsXG4gICAgKSxcbiAgICBjcmVhdGVUb2RvKFxuICAgICAgJzInLFxuICAgICAgJzEnLFxuICAgICAgJ1NlY29uZCBUb2RvIEl0ZW0gZm9yIFN1Yi1wcm9qZWN0JyxcbiAgICAgICcyMDI0LTAyLTIyJyxcbiAgICAgICdUaGluZ3MgSSBnb3R0YSByZW1lbWJlciBhYm91dCB0aGlzIHRhc2snLFxuICAgICAgJ21lZGl1bScsXG4gICAgKSxcbiAgXTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICcwJyxcbiAgICAgIFwiQWxsIFRvZG9zXCIsIFxuICAgICAgXCJcIlxuICAgICksXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICcxJyxcbiAgICAgIFwiVG9kYXkncyBUb2Rvc1wiLCBcbiAgICAgIFwiXCJcbiAgICApLFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICAnMicsXG4gICAgICBcIkFub3RoZXIgUHJvamVjdFwiLCBcbiAgICAgIFwiUHJvamVjdCBjb250YWluaW5nIHRvZG9zIGZvciBhbm90aGVyIHByb2plY3RcIlxuICAgICksXG4gIF07XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3RbMF07XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3QpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJRENvdW50ZXInLCAzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9JRENvdW50ZXInLCAyKTtcbn1cblxuXG4vLyBSRU5ERVIgREVGQVVMVCBVSVxuZGlzcGxheURlZmF1bHRQcm9qZWN0VGFicygpO1xuZGlzcGxheVByb2plY3RUYWJzKCk7XG5jb25zdCBkZWZhdWx0UHJvamVjdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1lbnUgLnRhYjpmaXJzdC1vZi10eXBlJyk7XG5zZXRDdXJyZW50UHJvamVjdChkZWZhdWx0UHJvamVjdE5vZGUpO1xuZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuY29sb3JQcm9qZWN0VGFiKGRlZmF1bHRQcm9qZWN0Tm9kZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9