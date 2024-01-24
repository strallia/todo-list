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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/list.png */ "./src/icons/list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/today.png */ "./src/icons/today.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/all-todos.png */ "./src/icons/all-todos.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/edit.png */ "./src/icons/edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/arrow.png */ "./src/icons/arrow.png"), __webpack_require__.b);
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
  display: flex;
  flex-wrap: wrap;
  > .container-menu {
    flex: 1 0 auto;
  }
  > .container-todos {
    flex-grow: 50;
  }
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
    color: var(--sand);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4BAA4B;EAC5B,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,eAAe;EACf;IACE,cAAc;EAChB;EACA;IACE,aAAa;EACf;AACF;;;AAGA,eAAe;AACf;EACE,aAAa;EACb,sCAAsC;;EAEtC,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,4BAA4B;;EAE5B;IACE,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,6BAA6B;EAC/B;EACA;IACE,gDAAgC;IAChC,QAAQ;IACR,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;IACrB,SAAS;;IAET;MACE,aAAa;MACb,mBAAmB;MACnB,aAAa;MACb,SAAS;MACT,mBAAmB;MACnB,gBAAgB;IAClB;IACA;MACE,iCAAiC;MACjC,iBAAiB;IACnB;IACA;MACE,QAAQ;MACR,iBAAiB;IACnB;IACA;MACE,gDAAiC;IACnC;IACA;MACE,gDAAqC;IACvC;IACA;;MAEE,+BAA+B;MAC/B,kBAAkB;MAClB,iBAAiB;IACnB;IACA;;MAEE,iBAAiB;IACnB;EACF;EACA;IACE,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,sBAAsB;IACtB;MACE,aAAa;MACb,8BAA8B;MAC9B,oCAAoC;MACpC,mBAAmB;MACnB,gBAAgB;MAChB,mBAAmB;MACnB,gBAAgB;MAChB,MAAM;MACN,6BAA6B;MAC7B,gDAAgD;MAChD,kBAAkB;MAClB,mBAAmB;MACnB,UAAU;IACZ;IACA;MACE,cAAc;MACd,gBAAgB;MAChB,WAAW;IACb;EACF;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB;;MAEE,cAAc;IAChB;EACF;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;;EAEhB;IACE,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB;MACE;IACF;EACF;AACF;;;AAGA,aAAa;AACb;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,oBAAoB;;EAEpB;IACE,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,YAAY;;IAEZ;MACE,gBAAgB;MAChB,kBAAkB;MAClB,mBAAmB;MACnB,gBAAgB;MAChB,uBAAuB;MACvB,oBAAoB;IACtB;IACA;MACE,8FAA8F;IAChG;IACA;;MAEE,iBAAiB;IACnB;EACF;EACA;IACE,iCAAiC;IACjC,iBAAiB;EACnB;EACA;;IAEE,+BAA+B;IAC/B,kBAAkB;IAClB,iBAAiB;IACjB;MACE,iBAAiB;IACnB;IACA;MACE,YAAY;IACd;EACF;AACF;;;AAGA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;IACE,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB;MACE,gBAAgB;IAClB;IACA;;MAEE,iBAAiB;IACnB;IACA;;MAEE,aAAa;MACb,8BAA8B;MAC9B,SAAS;MACT,mBAAmB;MACnB,qBAAqB;IACvB;IACA;MACE,wBAAwB;IAC1B;IACA;MACE,oBAAoB;IACtB;IACA;;MAEE,gGAAgG;IAClG;IACA;MACE,+FAA+F;IACjG;IACA;MACE,aAAa;IACf;IACA;MACE,yBAAyB;IAC3B;EACF;EACA;IACE,8BAA8B;EAChC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,mCAAmC;IACnC;MACE,6BAA6B;IAC/B;IACA;;;MAGE,aAAa;IACf;EACF;AACF;;;AAGA,YAAY;AACZ;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;AACA;EACE,gDAAgC;EAChC,UAAU;AACZ;AACA;EACE,gDAAkC;EAClC,UAAU;AACZ;AACA;EACE,gDAAiC;EACjC,UAAU;AACZ;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,8FAA8F;AAChG;AACA;EACE,+FAA+F;AACjG;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,uBAAuB;AACzB;;;AAGA,UAAU;AACV;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;EAC1B,UAAU;;EAEV;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,wCAAwC;EAC1C;EACA;IACE,aAAa;IACb,eAAe;IACf,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB;MACE,aAAa;MACb,sBAAsB;MACtB,QAAQ;IACV;IACA;;;MAGE,aAAa;MACb,iCAAiC;MACjC,kBAAkB;IACpB;IACA;MACE,eAAe;MACf,iBAAiB;IACnB;IACA;MACE,aAAa;MACb,uBAAuB;MACvB,kBAAkB;MAClB,mBAAmB;MACnB,iCAAiC;MACjC,iBAAiB;MACjB,eAAe;IACjB;IACA;MACE,+BAA+B;IACjC;IACA;MACE,6BAA6B;IAC/B;IACA;MACE,2BAA2B;MAC3B,8BAA8B;IAChC;EACF;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 1px solid red; */\n  font-family: 'Nunito', sans-serif;\n}\n:root {\n  --navy: #102937;\n  --seagreen: #124d54;\n  --orange: #f9744b;\n  --wheat: #e1d9cf;\n  --sand: #ededed;\n}\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: var(--sand);\n}\ndiv.content {\n  display: flex;\n  flex-wrap: wrap;\n  > .container-menu {\n    flex: 1 0 auto;\n  }\n  > .container-todos {\n    flex-grow: 50;\n  }\n}\n\n\n/* CONTAINERS */\n.container-menu {\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  \n  text-align: center;\n  background-color: var(--navy);\n  color: var(--sand);\n  font-size: 16px;\n  height: 100vh;\n  overflow-y: auto;\n  gap: 20px;\n  grid-template-columns: 330px;\n\n  h1 {\n    font-size: 2.5em;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 20px;\n    color: var(--sand);\n    top: 0;\n    background-color: var(--navy);\n  }\n  h1::before {\n    content: url('./icons/list.png');\n    zoom: 9%;\n    filter: invert(1);\n  }\n  h1, h3, p {\n    user-select: none;\n  }\n  .container-default-projects {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin: 0 20px 0 20px;\n    gap: 10px;\n\n    .tab {\n      padding: 10px;\n      border-radius: 10px;\n      display: flex;\n      gap: 15px;\n      align-items: center;\n      font-size: 1.2em;\n    }\n    .tab:hover {\n      background-color: var(--seagreen);\n      font-weight: bold;\n    }\n    .tab::before {\n      zoom: 5%;\n      filter: invert(1);\n    }\n    .tab.today::before {\n      content: url('./icons/today.png');\n    }\n    .tab.all-todos::before {\n      content: url('./icons/all-todos.png');\n    }\n    .tab:active,\n    .tab[data-status=\"open\"] {\n      background-color: var(--orange);\n      color: var(--navy);\n      font-weight: bold;\n    }\n    .tab:active::before,\n    .tab[data-status=\"open\"]::before {\n      filter: invert(0);\n    }\n  }\n  .container-projects {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 10px;\n    padding: 0 20px 0 20px;\n    h3 {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px solid var(--sand);\n      margin-bottom: 10px;\n      font-size: 1.5em;\n      align-items: center;\n      position: sticky;\n      top: 0;\n      background-color: var(--navy);\n      box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0.3);\n      padding-left: 10px;\n      padding-right: 10px;\n      z-index: 1;\n    }\n    button.add-project {\n      color: inherit;\n      font-size: 1.5em;\n      width: 40px;\n    }\n  }\n  footer {\n    color: var(--sand);\n    font-size: 0.8em;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    a,\n    a:visited {\n      color: inherit;\n    }\n  }\n}\n.container-todos {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: auto;\n  padding: 20px 40px;\n  min-width: 300px;\n\n  > header {\n    flex-basis: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 20px;\n    color: var(--navy);\n    p {\n      color: var(--seagreen)\n    }\n  }\n}\n\n\n/* PROJECTS */\ndiv.projects {\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: 10px;\n  padding: 0 5px 0 5px;\n\n  > .tab {\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    align-items: center;\n    padding: 10px;\n    display: flex;\n    border-radius: 10px;\n    gap: 8px;\n    height: 40px;\n    \n    p {\n      text-align: left;\n      margin-right: auto;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      pointer-events: none;\n    }\n    button.edit:hover {\n      filter: invert(13%) sepia(34%) saturate(872%) hue-rotate(157deg) brightness(97%) contrast(97%);\n    }\n    button.edit::after,\n    button.delete::after {\n      filter: invert(1);\n    }\n  }\n  > .tab:hover {\n    background-color: var(--seagreen);\n    font-weight: bold;\n  }\n  > .tab:active,\n  > .tab[data-status=\"open\"] {\n    background-color: var(--orange);\n    color: var(--navy);\n    font-weight: bold;\n    button {\n      filter: invert(1);\n    }\n    button:hover {\n      filter: none;\n    }\n  }\n}\n\n\n/* TODO LIST */\ndiv.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  .tab {\n    border: 2px solid var(--wheat);\n    padding: 15px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 15px;\n    align-items: center;\n    border-radius: 10px;\n    .details {\n      grid-column: 1/4;\n    }\n    .header,\n    .details {\n      user-select: none;\n    }\n    .header,\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      gap: 12px;\n      align-items: center;\n      justify-items: center;\n    }\n    .note {\n      padding: 0 28px 5px 28px;\n    }\n    button {\n      filter: contrast(5%);\n    }\n    button.edit:hover,\n    button.view-mode:hover {\n      filter: invert(28%) sepia(64%) saturate(1046%) hue-rotate(141deg) brightness(92%) contrast(102%);\n    }\n    button.delete:hover {\n      filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n    }\n    .hidden {\n      display: none;\n    }\n    button.view-mode.up {\n      transform: rotate(180deg);\n    }\n  }\n  .tab:hover {\n    background-color: var(--wheat);\n  }\n  .high-priority {\n    border-left: 5px solid red;\n  }\n  .medium-priority {\n    border-left: 5px solid orange;\n  }\n  .checked {\n    border-left: 2px solid var(--wheat);\n    p.title {\n      text-decoration: line-through;\n    }\n    button.edit,\n    button.view-mode,\n    .due-date {\n      display: none;\n    }\n  }\n}\n\n\n/* BUTTONS */\nbutton{\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  cursor: pointer;\n  padding: 5px;\n}\nbutton.edit::after {\n  content: url('./icons/edit.png');\n  zoom: 3.5%;\n}\nbutton.delete::after {\n  content: url('./icons/delete.png');\n  zoom: 3.5%;\n}\nbutton.view-mode::after {\n  content: url('./icons/arrow.png');\n  zoom: 2.5%;\n}\nbutton.add-project:hover {\n  font-weight: bold;\n}\nbutton.edit:hover,\nbutton.add-project:hover {\n  filter: invert(27%) sepia(8%) saturate(3459%) hue-rotate(139deg) brightness(87%) contrast(95%);\n}\nbutton.delete:hover {\n  filter: invert(53%) sepia(65%) saturate(574%) hue-rotate(324deg) brightness(95%) contrast(105%);\n}\nbutton.add-todo {\n  margin-top: 10px;\n  padding: 15px;\n  border: 2px solid var(--wheat);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: var(--seagreen);\n  font-weight: bold;\n}\nbutton.add-todo::before {\n  content: '+';\n  margin-right: 10px;\n  font-size: 20px;\n}\nbutton.add-todo:hover {\n  background-color: var(--wheat);\n  color: var(--navy);\n}\nbutton.add-todo:active {\n  filter: brightness(80%);\n}\n\n\n/* FORMS */\ndialog {\n  width: 100vw;\n  height: 100vh;\n  border: none;\n  background-color: rgba(0,0,0,0.4);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n\n  form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 0 20px var(--navy);\n    min-width: 350px;\n    max-width: 450px;\n  }\n  h1 {\n    font-size: 30px;\n    padding: 20px;\n    background-color: var(--orange);\n    color: var(--navy);\n    border-bottom: 1px solid var(--seagreen);\n  }\n  div.inputs {\n    padding: 25px;\n    font-size: 18px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n    }\n    input,\n    textarea,\n    select {\n      padding: 10px;\n      border: 1px solid var(--seagreen);\n      border-radius: 5px;\n    }\n    textarea {\n      max-width: 100%;\n      max-height: 150px;\n    }\n    button {\n      padding: 10px;\n      background-color: green;\n      width: min-content;\n      border-radius: 10px;\n      border: 1px solid var(--seagreen);\n      font-weight: bold;\n      font-size: 16px;\n    }\n    button[type=\"submit\"] {\n      background-color: var(--orange);\n    }\n    button[type=\"reset\"] {\n      background-color: var(--sand);\n    }\n    div.buttons {\n      flex-direction: row-reverse;\n      justify-content: space-between;\n    }\n  }\n  label.required::after {\n    content: ' *';\n    color: red;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/icons/all-todos.png":
/*!*********************************!*\
  !*** ./src/icons/all-todos.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf1887579898c72be96c.png";

/***/ }),

/***/ "./src/icons/arrow.png":
/*!*****************************!*\
  !*** ./src/icons/arrow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0beda3df974b74fa82c5.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4b58337bd3477db466.png";

/***/ }),

/***/ "./src/icons/edit.png":
/*!****************************!*\
  !*** ./src/icons/edit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/icons/list.png":
/*!****************************!*\
  !*** ./src/icons/list.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab02702144b12ab122f.png";

/***/ }),

/***/ "./src/icons/today.png":
/*!*****************************!*\
  !*** ./src/icons/today.png ***!
  \*****************************/
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
      'First todo item',
      '2024-01-24',
      'Notes for todo items show here',
      'high',
    ),
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      '2',
      '1',
      'Second todo item',
      '2024-03-18',
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
      "Example Project", 
      "This is where project descriptions go"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZHQUFtQztBQUMvRSw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLDZHQUFtQztBQUMvRSw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QywrR0FBb0M7QUFDaEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSEFBb0g7QUFDcEgseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLFVBQVUsS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxPQUFPLFVBQVUsS0FBSyxLQUFLLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLHFHQUFxRyxLQUFLLGNBQWMsZUFBZSwyQkFBMkIsK0JBQStCLHdDQUF3QyxHQUFHLFNBQVMsb0JBQW9CLHdCQUF3QixzQkFBc0IscUJBQXFCLG9CQUFvQixHQUFHLFFBQVEsc0JBQXNCLGtCQUFrQixpQ0FBaUMsa0NBQWtDLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsS0FBSyx3QkFBd0Isb0JBQW9CLEtBQUssR0FBRyx5Q0FBeUMsa0JBQWtCLDJDQUEyQywyQkFBMkIsa0NBQWtDLHVCQUF1QixvQkFBb0Isa0JBQWtCLHFCQUFxQixjQUFjLGlDQUFpQyxVQUFVLHVCQUF1QixvQkFBb0IsMEJBQTBCLGdCQUFnQixvQkFBb0IseUJBQXlCLGFBQWEsb0NBQW9DLEtBQUssZ0JBQWdCLHVDQUF1QyxlQUFlLHdCQUF3QixLQUFLLGVBQWUsd0JBQXdCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsdUJBQXVCLDRCQUE0QixnQkFBZ0IsY0FBYyxzQkFBc0IsNEJBQTRCLHNCQUFzQixrQkFBa0IsNEJBQTRCLHlCQUF5QixPQUFPLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLE9BQU8sb0JBQW9CLGlCQUFpQiwwQkFBMEIsT0FBTywwQkFBMEIsMENBQTBDLE9BQU8sOEJBQThCLDhDQUE4QyxPQUFPLG9EQUFvRCx3Q0FBd0MsMkJBQTJCLDBCQUEwQixPQUFPLG9FQUFvRSwwQkFBMEIsT0FBTyxLQUFLLHlCQUF5QixvQkFBb0IsbUNBQW1DLGdCQUFnQiw2QkFBNkIsVUFBVSxzQkFBc0IsdUNBQXVDLDZDQUE2Qyw0QkFBNEIseUJBQXlCLDRCQUE0Qix5QkFBeUIsZUFBZSxzQ0FBc0MseURBQXlELDJCQUEyQiw0QkFBNEIsbUJBQW1CLE9BQU8sMEJBQTBCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLE9BQU8sS0FBSyxZQUFZLHlCQUF5Qix1QkFBdUIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGtCQUFrQixxQkFBcUIsdUJBQXVCLHFCQUFxQixnQkFBZ0Isd0JBQXdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix5QkFBeUIsU0FBUyxxQ0FBcUMsS0FBSyxHQUFHLG9DQUFvQyxrQkFBa0IsZ0NBQWdDLGNBQWMseUJBQXlCLGNBQWMsb0JBQW9CLDJDQUEyQywwQkFBMEIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsZUFBZSxtQkFBbUIsZUFBZSx5QkFBeUIsMkJBQTJCLDRCQUE0Qix5QkFBeUIsZ0NBQWdDLDZCQUE2QixPQUFPLHlCQUF5Qix1R0FBdUcsT0FBTyxxREFBcUQsMEJBQTBCLE9BQU8sS0FBSyxrQkFBa0Isd0NBQXdDLHdCQUF3QixLQUFLLG9EQUFvRCxzQ0FBc0MseUJBQXlCLHdCQUF3QixjQUFjLDBCQUEwQixPQUFPLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsY0FBYyxVQUFVLHFDQUFxQyxvQkFBb0Isb0JBQW9CLDJDQUEyQyxnQkFBZ0IsMEJBQTBCLDBCQUEwQixnQkFBZ0IseUJBQXlCLE9BQU8sOEJBQThCLDBCQUEwQixPQUFPLDhCQUE4QixzQkFBc0IsdUNBQXVDLGtCQUFrQiw0QkFBNEIsOEJBQThCLE9BQU8sYUFBYSxpQ0FBaUMsT0FBTyxjQUFjLDZCQUE2QixPQUFPLHNEQUFzRCx5R0FBeUcsT0FBTywyQkFBMkIsd0dBQXdHLE9BQU8sZUFBZSxzQkFBc0IsT0FBTywyQkFBMkIsa0NBQWtDLE9BQU8sS0FBSyxnQkFBZ0IscUNBQXFDLEtBQUssb0JBQW9CLGlDQUFpQyxLQUFLLHNCQUFzQixvQ0FBb0MsS0FBSyxjQUFjLDBDQUEwQyxlQUFlLHNDQUFzQyxPQUFPLDBEQUEwRCxzQkFBc0IsT0FBTyxLQUFLLEdBQUcsNEJBQTRCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLDRCQUE0QiwwQkFBMEIsb0JBQW9CLGlCQUFpQixHQUFHLHNCQUFzQixxQ0FBcUMsZUFBZSxHQUFHLHdCQUF3Qix1Q0FBdUMsZUFBZSxHQUFHLDJCQUEyQixzQ0FBc0MsZUFBZSxHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyxnREFBZ0QsbUdBQW1HLEdBQUcsdUJBQXVCLG9HQUFvRyxHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsMkJBQTJCLHNCQUFzQixHQUFHLDJCQUEyQixpQkFBaUIsdUJBQXVCLG9CQUFvQixHQUFHLHlCQUF5QixtQ0FBbUMsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0QixHQUFHLDJCQUEyQixpQkFBaUIsa0JBQWtCLGlCQUFpQixzQ0FBc0MsK0JBQStCLGVBQWUsWUFBWSx5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLDhCQUE4QiwwQkFBMEIsdUJBQXVCLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLEtBQUssUUFBUSxzQkFBc0Isb0JBQW9CLHNDQUFzQyx5QkFBeUIsK0NBQStDLEtBQUssZ0JBQWdCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsYUFBYSxzQkFBc0IsK0JBQStCLGlCQUFpQixPQUFPLHlDQUF5QyxzQkFBc0IsMENBQTBDLDJCQUEyQixPQUFPLGdCQUFnQix3QkFBd0IsMEJBQTBCLE9BQU8sY0FBYyxzQkFBc0IsZ0NBQWdDLDJCQUEyQiw0QkFBNEIsMENBQTBDLDBCQUEwQix3QkFBd0IsT0FBTywrQkFBK0Isd0NBQXdDLE9BQU8sOEJBQThCLHNDQUFzQyxPQUFPLG1CQUFtQixvQ0FBb0MsdUNBQXVDLE9BQU8sS0FBSywyQkFBMkIsb0JBQW9CLGlCQUFpQixLQUFLLEdBQUcsbUJBQW1CO0FBQ3huWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3RiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUUwQztBQUNOOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQWE7QUFDMUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBVTtBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQWE7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQ2xCO0FBQ0EsaUVBQWlCO0FBQ2pCLHdFQUErQjtBQUMvQix3REFBZSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbnMvdG9kYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9hbGwtdG9kb3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9lZGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaWNvbnMvZGVsZXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaWNvbnMvYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG46cm9vdCB7XG4gIC0tbmF2eTogIzEwMjkzNztcbiAgLS1zZWFncmVlbjogIzEyNGQ1NDtcbiAgLS1vcmFuZ2U6ICNmOTc0NGI7XG4gIC0td2hlYXQ6ICNlMWQ5Y2Y7XG4gIC0tc2FuZDogI2VkZWRlZDtcbn1cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZCk7XG59XG5kaXYuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgPiAuY29udGFpbmVyLW1lbnUge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICB9XG4gID4gLmNvbnRhaW5lci10b2RvcyB7XG4gICAgZmxleC1ncm93OiA1MDtcbiAgfVxufVxuXG5cbi8qIENPTlRBSU5FUlMgKi9cbi5jb250YWluZXItbWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xuICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgY29sb3I6IHZhcigtLXNhbmQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweDtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLXNhbmQpO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgfVxuICBoMTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgem9vbTogOSU7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgaDEsIGgzLCBwIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyLWRlZmF1bHQtcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAudGFiIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTVweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAudGFiOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAudGFiOjpiZWZvcmUge1xuICAgICAgem9vbTogNSU7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB9XG4gICAgLnRhYi50b2RheTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICB9XG4gICAgLnRhYi5hbGwtdG9kb3M6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgfVxuICAgIC50YWI6YWN0aXZlLFxuICAgIC50YWJbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgICBjb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRhYjphY3RpdmU6OmJlZm9yZSxcbiAgICAudGFiW2RhdGEtc3RhdHVzPVwib3BlblwiXTo6YmVmb3JlIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDApO1xuICAgIH1cbiAgfVxuICAuY29udGFpbmVyLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gICAgaDMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zYW5kKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMThweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBidXR0b24uYWRkLXByb2plY3Qge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG4gIGZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXNhbmQpO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYSxcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG4uY29udGFpbmVyLXRvZG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuXG4gID4gaGVhZGVyIHtcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tc2VhZ3JlZW4pXG4gICAgfVxuICB9XG59XG5cblxuLyogUFJPSkVDVFMgKi9cbmRpdi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweCAwIDVweDtcblxuICA+IC50YWIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIFxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uLmVkaXQ6aG92ZXIge1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMTMlKSBzZXBpYSgzNCUpIHNhdHVyYXRlKDg3MiUpIGh1ZS1yb3RhdGUoMTU3ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTclKTtcbiAgICB9XG4gICAgYnV0dG9uLmVkaXQ6OmFmdGVyLFxuICAgIGJ1dHRvbi5kZWxldGU6OmFmdGVyIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIH1cbiAgfVxuICA+IC50YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYWdyZWVuKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICA+IC50YWI6YWN0aXZlLFxuICA+IC50YWJbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBidXR0b24ge1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgfVxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuLyogVE9ETyBMSVNUICovXG5kaXYudG9kb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIC50YWIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoZWF0KTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgIGdhcDogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLmRldGFpbHMge1xuICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICB9XG4gICAgLmhlYWRlcixcbiAgICAuZGV0YWlscyB7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgLmhlYWRlcixcbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLm5vdGUge1xuICAgICAgcGFkZGluZzogMCAyOHB4IDVweCAyOHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgZmlsdGVyOiBjb250cmFzdCg1JSk7XG4gICAgfVxuICAgIGJ1dHRvbi5lZGl0OmhvdmVyLFxuICAgIGJ1dHRvbi52aWV3LW1vZGU6aG92ZXIge1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMjglKSBzZXBpYSg2NCUpIHNhdHVyYXRlKDEwNDYlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDEwMiUpO1xuICAgIH1cbiAgICBidXR0b24uZGVsZXRlOmhvdmVyIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNjUlKSBzYXR1cmF0ZSg1NzQlKSBodWUtcm90YXRlKDMyNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNSUpO1xuICAgIH1cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGJ1dHRvbi52aWV3LW1vZGUudXAge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgLnRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xuICB9XG4gIC5oaWdoLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbiAgfVxuICAubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIG9yYW5nZTtcbiAgfVxuICAuY2hlY2tlZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS13aGVhdCk7XG4gICAgcC50aXRsZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgYnV0dG9uLmVkaXQsXG4gICAgYnV0dG9uLnZpZXctbW9kZSxcbiAgICAuZHVlLWRhdGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBCVVRUT05TICovXG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuYnV0dG9uLmVkaXQ6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICB6b29tOiAzLjUlO1xufVxuYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIHpvb206IDMuNSU7XG59XG5idXR0b24udmlldy1tb2RlOjphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgem9vbTogMi41JTtcbn1cbmJ1dHRvbi5hZGQtcHJvamVjdDpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYnV0dG9uLmVkaXQ6aG92ZXIsXG5idXR0b24uYWRkLXByb2plY3Q6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCgyNyUpIHNlcGlhKDglKSBzYXR1cmF0ZSgzNDU5JSkgaHVlLXJvdGF0ZSgxMzlkZWcpIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5NSUpO1xufVxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNjUlKSBzYXR1cmF0ZSg1NzQlKSBodWUtcm90YXRlKDMyNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNSUpO1xufVxuYnV0dG9uLmFkZC10b2RvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hlYXQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWFncmVlbik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYnV0dG9uLmFkZC10b2RvOjpiZWZvcmUge1xuICBjb250ZW50OiAnKyc7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuYnV0dG9uLmFkZC10b2RvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xuICBjb2xvcjogdmFyKC0tbmF2eSk7XG59XG5idXR0b24uYWRkLXRvZG86YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG59XG5cblxuLyogRk9STVMgKi9cbmRpYWxvZyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICB6LWluZGV4OiAyO1xuXG4gIGZvcm0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLW5hdnkpO1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgICBjb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlYWdyZWVuKTtcbiAgfVxuICBkaXYuaW5wdXRzIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIGlucHV0LFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VhZ3JlZW4pO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFncmVlbik7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgICB9XG4gICAgYnV0dG9uW3R5cGU9XCJyZXNldFwiXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5kKTtcbiAgICB9XG4gICAgZGl2LmJ1dHRvbnMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuICBsYWJlbC5yZXF1aXJlZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgKic7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7OztBQUdBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7O0VBRXRDLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCw0QkFBNEI7O0VBRTVCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFD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a0I7SUFDbEIsd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixRQUFRO0lBQ1Y7SUFDQTs7O01BR0UsYUFBYTtNQUNiLGlDQUFpQztNQUNqQyxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQ0FBaUM7TUFDakMsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7SUFDQTtNQUNFLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IsOEJBQThCO0lBQ2hDO0VBQ0Y7RUFDQTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8mZGlzcGxheT1zd2FwJyk7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxufVxcbjpyb290IHtcXG4gIC0tbmF2eTogIzEwMjkzNztcXG4gIC0tc2VhZ3JlZW46ICMxMjRkNTQ7XFxuICAtLW9yYW5nZTogI2Y5NzQ0YjtcXG4gIC0td2hlYXQ6ICNlMWQ5Y2Y7XFxuICAtLXNhbmQ6ICNlZGVkZWQ7XFxufVxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQpO1xcbn1cXG5kaXYuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgPiAuY29udGFpbmVyLW1lbnUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gIH1cXG4gID4gLmNvbnRhaW5lci10b2RvcyB7XFxuICAgIGZsZXgtZ3JvdzogNTA7XFxuICB9XFxufVxcblxcblxcbi8qIENPTlRBSU5FUlMgKi9cXG4uY29udGFpbmVyLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweDtcXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2FuZCk7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICB9XFxuICBoMTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogdXJsKCcuL2ljb25zL2xpc3QucG5nJyk7XFxuICAgIHpvb206IDklO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIH1cXG4gIGgxLCBoMywgcCB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcbiAgLmNvbnRhaW5lci1kZWZhdWx0LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIC50YWIge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gICAgLnRhYjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhZ3JlZW4pO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgIC50YWI6OmJlZm9yZSB7XFxuICAgICAgem9vbTogNSU7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIH1cXG4gICAgLnRhYi50b2RheTo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiB1cmwoJy4vaWNvbnMvdG9kYXkucG5nJyk7XFxuICAgIH1cXG4gICAgLnRhYi5hbGwtdG9kb3M6OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogdXJsKCcuL2ljb25zL2FsbC10b2Rvcy5wbmcnKTtcXG4gICAgfVxcbiAgICAudGFiOmFjdGl2ZSxcXG4gICAgLnRhYltkYXRhLXN0YXR1cz1cXFwib3BlblxcXCJdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAudGFiOmFjdGl2ZTo6YmVmb3JlLFxcbiAgICAudGFiW2RhdGEtc3RhdHVzPVxcXCJvcGVuXFxcIl06OmJlZm9yZSB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMCk7XFxuICAgIH1cXG4gIH1cXG4gIC5jb250YWluZXItcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxuICAgIGgzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2FuZCk7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgICAgYm94LXNoYWRvdzogMCAxOHB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICB9XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2FuZCk7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYSxcXG4gICAgYTp2aXNpdGVkIHtcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgfVxcbiAgfVxcbn1cXG4uY29udGFpbmVyLXRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcblxcbiAgPiBoZWFkZXIge1xcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgcCB7XFxuICAgICAgY29sb3I6IHZhcigtLXNlYWdyZWVuKVxcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8qIFBST0pFQ1RTICovXFxuZGl2LnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDVweCAwIDVweDtcXG5cXG4gID4gLnRhYiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgXFxuICAgIHAge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbiAgICBidXR0b24uZWRpdDpob3ZlciB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMTMlKSBzZXBpYSgzNCUpIHNhdHVyYXRlKDg3MiUpIGh1ZS1yb3RhdGUoMTU3ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTclKTtcXG4gICAgfVxcbiAgICBidXR0b24uZWRpdDo6YWZ0ZXIsXFxuICAgIGJ1dHRvbi5kZWxldGU6OmFmdGVyIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgfVxcbiAgfVxcbiAgPiAudGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhZ3JlZW4pO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gID4gLnRhYjphY3RpdmUsXFxuICA+IC50YWJbZGF0YS1zdGF0dXM9XFxcIm9wZW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIH1cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuLyogVE9ETyBMSVNUICovXFxuZGl2LnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLnRhYiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoZWF0KTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC5kZXRhaWxzIHtcXG4gICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICB9XFxuICAgIC5oZWFkZXIsXFxuICAgIC5kZXRhaWxzIHtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuaGVhZGVyLFxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZ2FwOiAxMnB4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5ub3RlIHtcXG4gICAgICBwYWRkaW5nOiAwIDI4cHggNXB4IDI4cHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmaWx0ZXI6IGNvbnRyYXN0KDUlKTtcXG4gICAgfVxcbiAgICBidXR0b24uZWRpdDpob3ZlcixcXG4gICAgYnV0dG9uLnZpZXctbW9kZTpob3ZlciB7XFxuICAgICAgZmlsdGVyOiBpbnZlcnQoMjglKSBzZXBpYSg2NCUpIHNhdHVyYXRlKDEwNDYlKSBodWUtcm90YXRlKDE0MWRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDEwMiUpO1xcbiAgICB9XFxuICAgIGJ1dHRvbi5kZWxldGU6aG92ZXIge1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoNjUlKSBzYXR1cmF0ZSg1NzQlKSBodWUtcm90YXRlKDMyNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgICB9XFxuICAgIC5oaWRkZW4ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgYnV0dG9uLnZpZXctbW9kZS51cCB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcbiAgfVxcbiAgLnRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoZWF0KTtcXG4gIH1cXG4gIC5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XFxuICB9XFxuICAubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBvcmFuZ2U7XFxuICB9XFxuICAuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0td2hlYXQpO1xcbiAgICBwLnRpdGxlIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgfVxcbiAgICBidXR0b24uZWRpdCxcXG4gICAgYnV0dG9uLnZpZXctbW9kZSxcXG4gICAgLmR1ZS1kYXRlIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8qIEJVVFRPTlMgKi9cXG5idXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuYnV0dG9uLmVkaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IHVybCgnLi9pY29ucy9lZGl0LnBuZycpO1xcbiAgem9vbTogMy41JTtcXG59XFxuYnV0dG9uLmRlbGV0ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKCcuL2ljb25zL2RlbGV0ZS5wbmcnKTtcXG4gIHpvb206IDMuNSU7XFxufVxcbmJ1dHRvbi52aWV3LW1vZGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IHVybCgnLi9pY29ucy9hcnJvdy5wbmcnKTtcXG4gIHpvb206IDIuNSU7XFxufVxcbmJ1dHRvbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuYnV0dG9uLmVkaXQ6aG92ZXIsXFxuYnV0dG9uLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDM0NTklKSBodWUtcm90YXRlKDEzOWRlZykgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSg2NSUpIHNhdHVyYXRlKDU3NCUpIGh1ZS1yb3RhdGUoMzI0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTA1JSk7XFxufVxcbmJ1dHRvbi5hZGQtdG9kbyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoZWF0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWFncmVlbik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuYnV0dG9uLmFkZC10b2RvOjpiZWZvcmUge1xcbiAgY29udGVudDogJysnO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5idXR0b24uYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hlYXQpO1xcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xcbn1cXG5idXR0b24uYWRkLXRvZG86YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyAqL1xcbmRpYWxvZyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1uYXZ5KTtcXG4gICAgbWluLXdpZHRoOiAzNTBweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIH1cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWFncmVlbik7XFxuICB9XFxuICBkaXYuaW5wdXRzIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgaW5wdXQsXFxuICAgIHRleHRhcmVhLFxcbiAgICBzZWxlY3Qge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VhZ3JlZW4pO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFncmVlbik7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgfVxcbiAgICBidXR0b25bdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZCk7XFxuICAgIH1cXG4gICAgZGl2LmJ1dHRvbnMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gIH1cXG4gIGxhYmVsLnJlcXVpcmVkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgKic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGlzIGZpbGUgaGFuZGxlcyBkYXRhIHJldHJpZXZhbCwgbWFuaXB1bGF0aW9uLCBcbi8vIGFuZCBjcmVhdGlvbiBiZXR3ZWVuIHRoZSBET00gYW5kIHRvZG8vcHJvamVjdCBzY3JpcHRzXG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5mdW5jdGlvbiBzdG9yYWdlR2V0TGlzdChsaXN0U3RyaW5nKSB7XG4gIGNvbnN0IHBsYWluTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGlzdFN0cmluZykpO1xuICBjb25zdCBpbnN0YW50aWF0ZWRMaXN0ID0gcGxhaW5MaXN0Lm1hcCgocGxhaW5PYmopID0+IHtcbiAgICBpZiAobGlzdFN0cmluZyA9PT0gJ3Byb2plY3RMaXN0Jykge1xuICAgICAgY29uc3QgaWQgPSBwbGFpbk9iai5pZDtcbiAgICAgIGNvbnN0IHRpdGxlID0gcGxhaW5PYmoudGl0bGU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHBsYWluT2JqLmRlc2NyaXB0aW9uO1xuICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3QoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIGlmIChsaXN0U3RyaW5nID09PSAndG9kb0xpc3QnKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSBwbGFpbk9iai5wcm9qZWN0SUQ7XG4gICAgICBjb25zdCB0b2RvSUQgPSBwbGFpbk9iai50b2RvSUQ7XG4gICAgICBjb25zdCB0aXRsZSA9IHBsYWluT2JqLnRpdGxlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IHBsYWluT2JqLmR1ZURhdGU7XG4gICAgICBjb25zdCBub3RlID0gcGxhaW5PYmoubm90ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGxhaW5PYmoucHJpb3JpdHk7XG4gICAgICBjb25zdCBzdGF0dXMgPSBwbGFpbk9iai5zdGF0dXM7XG4gICAgICByZXR1cm4gY3JlYXRlVG9kbyhwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGluc3RhbnRpYXRlZExpc3Q7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgcGxhaW5PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdCcpKTtcbiAgY29uc3QgaWQgPSBwbGFpbk9iai5pZDtcbiAgY29uc3QgdGl0bGUgPSBwbGFpbk9iai50aXRsZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwbGFpbk9iai5kZXNjcmlwdGlvbjtcbiAgY29uc3QgaW5zdGFudGlhdGVkT2JqID0gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIGluc3RhbnRpYXRlZE9iajtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUdldElEQ291bnRlcih0eXBlU3RyaW5nKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlU3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVNldEl0ZW0oa2V5U3RyaW5nLCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlTdHJpbmcsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iaikge1xuICBjb25zdCBpbmRleCA9IHRvZG9MaXN0Lm1hcCgoZSkgPT4gZS50b2RvSUQpLmluZGV4T2YodG9kb09iai50b2RvSUQpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mUHJvamVjdEluTWFzdGVyTGlzdChwcm9qZWN0TGlzdCwgcHJvamVjdE9iaikge1xuICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0Lm1hcCgoZSkgPT4gZS5pZCkuaW5kZXhPZihwcm9qZWN0T2JqLmlkKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBmaW5kVG9kb3NGb3JTZWxlY3RQcm9qZWN0KHByb2plY3RPYmopIHtcbiAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdE9iai5pZDtcbiAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgY29uc3QgZmlsdGVyZWRUb2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3RJRCA9PT0gcHJvamVjdElEO1xuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRvZG9PYmoobm9kZSkge1xuICBjb25zdCB0b2RvSUQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJyk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IHRvZG9PYmogPSB0b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIHRvZG8udG9kb0lEID09PSB0b2RvSUQ7XG4gIH0pO1xuICByZXR1cm4gdG9kb09iajtcbn1cblxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdE9iaihwcm9qZWN0VGFiTm9kZSkge1xuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0VGFiTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKTtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RMaXN0LmZpbmQoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SUQ7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdE9iajtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kb0RhdGEodG9kb09iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHldID0gdmFsdWVzQXJyO1xuICBjb25zdCB1cGRhdGVkT2JqID0ge1xuICAgIHByb2plY3RJRDogdG9kb09iai5wcm9qZWN0SUQsXG4gICAgdG9kb0lEOiB0b2RvT2JqLnRvZG9JRCxcbiAgICB0aXRsZSwgXG4gICAgZHVlRGF0ZSxcbiAgICBub3RlLFxuICAgIHByaW9yaXR5LFxuICAgIHN0YXR1czogdG9kb09iai5zdGF0dXNcbiAgfVxuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iaik7XG4gIHRvZG9MaXN0W2luZGV4XSA9IHVwZGF0ZWRPYmo7XG4gIHN0b3JhZ2VTZXRJdGVtKCd0b2RvTGlzdCcsIHRvZG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERhdGEocHJvamVjdE9iaiwgaW5wdXRBcnIpIHtcbiAgY29uc3QgdmFsdWVzQXJyID0gaW5wdXRBcnIubWFwKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb25dID0gdmFsdWVzQXJyO1xuICBjb25zdCB1cGRhdGVkT2JqID0ge1xuICAgIGlkOiBwcm9qZWN0T2JqLmlkLFxuICAgIHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvblxuICB9XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZQcm9qZWN0SW5NYXN0ZXJMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0T2JqKTtcbiAgcHJvamVjdExpc3RbaW5kZXhdID0gdXBkYXRlZE9iajtcbiAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Ob2RlTGlzdE9mVG9kb1RhYnMoKSB7XG4gIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG4gIGNvbnN0IG5vZGVMaXN0ID0gdG9kb3NEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICByZXR1cm4gWy4uLm5vZGVMaXN0XTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb1N0YXR1cyhub2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKG5vZGUpO1xuICBsZXQgbmV3U3RhdHVzO1xuICBpZiAobm9kZS5jaGVja2VkKSB7XG4gICAgbmV3U3RhdHVzID0gJ2Nsb3NlZCc7XG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdHVzID0gJ29wZW4nXG4gIH1cbiAgY29uc3QgdXBkYXRlZE9iaiA9IHtcbiAgICBwcm9qZWN0SUQ6IHRvZG9PYmoucHJvamVjdElELFxuICAgIHRvZG9JRDogdG9kb09iai50b2RvSUQsXG4gICAgdGl0bGU6IHRvZG9PYmoudGl0bGUsIFxuICAgIGR1ZURhdGU6IHRvZG9PYmouZHVlRGF0ZSxcbiAgICBub3RlOiB0b2RvT2JqLm5vdGUsXG4gICAgcHJpb3JpdHk6IHRvZG9PYmoucHJpb3JpdHksXG4gICAgc3RhdHVzOiBuZXdTdGF0dXNcbiAgfVxuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iailcbiAgdG9kb0xpc3RbaW5kZXhdID0gdXBkYXRlZE9iajtcbiAgc3RvcmFnZVNldEl0ZW0oJ3RvZG9MaXN0JywgdG9kb0xpc3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvRnJvbUxpc3Qobm9kZSkge1xuICBjb25zdCB0b2RvT2JqID0gcmV0dXJuVG9kb09iaihub2RlKTtcbiAgdG9kb09iai5yZW1vdmVGcm9tTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChub2RlKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSByZXR1cm5Qcm9qZWN0T2JqKG5vZGUpO1xuICBzdG9yYWdlU2V0SXRlbSgnY3VycmVudFByb2plY3QnLCBwcm9qZWN0T2JqKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3Qobm9kZSkge1xuICBjb25zdCByZW1vdmVkUHJvamVjdE9iaiA9IHJldHVyblByb2plY3RPYmoobm9kZSk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gIGNvbnN0IHJlbW92ZWRUb2RvcyA9IHRvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLnByb2plY3RJRCA9PT0gcmVtb3ZlZFByb2plY3RPYmouaWQ7XG4gIH0pO1xuICByZW1vdmVkVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge3RvZG8ucmVtb3ZlRnJvbUxpc3QoKX0pO1xuICByZW1vdmVkUHJvamVjdE9iai5yZW1vdmVGcm9tTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChhc3NpZ25JREZvclByb2plY3QoKSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgbmV3UHJvamVjdC5hZGRUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyh0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oXG4gICAgYXNzaWduVG9kb1Byb2plY3RJRCgpLCBhc3NpZ25Ub2RvSUQoKSwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5XG4gICk7XG4gIG5ld1RvZG8uYWRkVG9MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUb2RvTGlzdEJ5U3RhdHVzKHRvZG9zKSB7XG4gIGNvbnN0IG9wZW5Ub2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5zdGF0dXMgPT09ICdvcGVuJyk7XG4gIGNvbnN0IGNsb3NlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnN0YXR1cyA9PT0gJ2Nsb3NlZCcpO1xuICBjb25zdCBzb3J0ZWRMaXN0ID0gWy4uLm9wZW5Ub2RvcywgLi4uY2xvc2VkVG9kb3NdO1xuICByZXR1cm4gc29ydGVkTGlzdDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyVG9kb0xpc3RGb3JUb2RheSh0b2Rvcykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICBsZXQgbW0gPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcblxuICBpZiAobW0ubGVuZ3RoID09PSAxKSB7XG4gICAgbW0gPSAnMCcgKyBtbS50b1N0cmluZygpO1xuICB9XG4gIGlmIChkZC5sZW5ndGggPT09IDEpIHtcbiAgICBkZCA9ICcwJyArIGRkLnRvU3RyaW5nKCk7XG4gIH1cbiAgY29uc3QgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcbiAgXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgIHJldHVybiB0b2RvLmR1ZURhdGUgPT09IHRvZGF5O1xuICB9KVxuICByZXR1cm4gZmlsdGVyZWRMaXN0O1xufVxuXG5mdW5jdGlvbiBtb3ZlQ2hlY2tlZFRvZG9Jbkxpc3RPcmRlcihub2RlKSB7XG4gIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKG5vZGUpO1xuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdG9kb09iaik7XG4gIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIGlmICh0b2RvT2JqLnN0YXR1cyA9PT0gJ2Nsb3NlZCcpIHRvZG9MaXN0LnB1c2godG9kb09iaik7XG4gIGlmICh0b2RvT2JqLnN0YXR1cyA9PT0gJ29wZW4nKSB0b2RvTGlzdC51bnNoaWZ0KHRvZG9PYmopO1xuICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG59XG5cblxuLy8gQSBwcm9qZWN0IGFuZCBpdHMgdG9kb3MgbXVzdCBzaGFyZSB0aGUgc2FtZSBpZFxuZnVuY3Rpb24gYXNzaWduSURGb3JQcm9qZWN0KCkge1xuICBsZXQgaWQgPSArc3RvcmFnZUdldElEQ291bnRlcigncHJvamVjdElEQ291bnRlcicpO1xuICBsZXQgaW5jcmVtZW50SUQgPSBpZCArIDFcbiAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RJRENvdW50ZXInLCBpbmNyZW1lbnRJRCk7XG4gIHJldHVybiBpZC50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gYXNzaWduVG9kb1Byb2plY3RJRCgpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdG9yYWdlR2V0Q3VycmVudFByb2plY3QoKTtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmlkO1xufVxuXG5cbi8vIEV2ZXJ5IHRvZG8gaGFzIGEgc2VwYXJhdGUgdG9kb0lEIHRvIGRpZmZlcmVudGlhdGUgaXQgZnJvbSBvdGhlciB0b2Rvc1xuZnVuY3Rpb24gYXNzaWduVG9kb0lEKCkge1xuICBsZXQgaWQgPSArc3RvcmFnZUdldElEQ291bnRlcigndG9kb0lEQ291bnRlcicpO1xuICBsZXQgaW5jcmVtZW50SUQgPSBpZCArIDFcbiAgc3RvcmFnZVNldEl0ZW0oJ3RvZG9JRENvdW50ZXInLCBpbmNyZW1lbnRJRCk7XG4gIHJldHVybiBpZC50b1N0cmluZygpO1xufVxuXG5cbmV4cG9ydCB7IFxuICBzdG9yYWdlR2V0TGlzdCxcbiAgc3RvcmFnZUdldEN1cnJlbnRQcm9qZWN0LFxuICBzdG9yYWdlU2V0SXRlbSxcbiAgZmluZEluZGV4T2ZUb2RvSW5NYXN0ZXJMaXN0LFxuICBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QsXG4gIGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QsXG4gIHJldHVyblRvZG9PYmosXG4gIHJldHVyblByb2plY3RPYmosXG4gIHVwZGF0ZVRvZG9EYXRhLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzLFxuICB0b2dnbGVUb2RvU3RhdHVzLFxuICByZW1vdmVUb2RvRnJvbUxpc3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0LFxuICByZW1vdmVEYXRhT2ZEZWxldGVkUHJvamVjdCxcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgY3JlYXRlTmV3VG9kbyxcbiAgc29ydFRvZG9MaXN0QnlTdGF0dXMsXG4gIGZpbHRlclRvZG9MaXN0Rm9yVG9kYXksXG4gIG1vdmVDaGVja2VkVG9kb0luTGlzdE9yZGVyLFxuICBhc3NpZ25JREZvclByb2plY3QsXG4gIGFzc2lnblRvZG9Qcm9qZWN0SUQsXG4gIGFzc2lnblRvZG9JRFxufTsiLCJpbXBvcnQgeyBcbiAgc3RvcmFnZUdldExpc3QsXG4gIHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCxcbiAgZmluZFRvZG9zRm9yU2VsZWN0UHJvamVjdCxcbiAgcmV0dXJuVG9kb09iaixcbiAgcmV0dXJuUHJvamVjdE9iaixcbiAgdXBkYXRlVG9kb0RhdGEsXG4gIHJldHVybk5vZGVMaXN0T2ZUb2RvVGFicyxcbiAgdG9nZ2xlVG9kb1N0YXR1cyxcbiAgcmVtb3ZlVG9kb0Zyb21MaXN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgcmVtb3ZlRGF0YU9mRGVsZXRlZFByb2plY3QsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGNyZWF0ZU5ld1RvZG8sXG4gIHVwZGF0ZVByb2plY3REYXRhLFxuICBzb3J0VG9kb0xpc3RCeVN0YXR1cyxcbiAgbW92ZUNoZWNrZWRUb2RvSW5MaXN0T3JkZXIsXG4gIGZpbHRlclRvZG9MaXN0Rm9yVG9kYXksXG59IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuXG4vLyBET00gSEVMUEVSIEZVTkNUSU9OU1xuZnVuY3Rpb24gY2xlYXJDb250ZW50KG5vZGUpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihub2RlLCBjaGlsZHJlbkFycikge1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuQXJyKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfTtcbn1cblxuXG4vLyBGSUxURVJFRCBQUk9KRUNUIE9QVElPTlNcbmNvbnN0IGRlZmF1bHRQcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZGVmYXVsdC1wcm9qZWN0cycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGVmYXVsdFByb2plY3RUYWJzKCkge1xuICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRlZmF1bHRQcm9qZWN0c0Rpdi5xdWVyeVNlbGVjdG9yKCcuYWxsLXRvZG9zJyk7XG4gIGNvbnN0IHRvZGF5VGFiID0gZGVmYXVsdFByb2plY3RzRGl2LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuXG4gIGFsbFRvZG9zVGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsICcwJyk7XG4gIHRvZGF5VGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsICcxJyk7XG5cbiAgYWxsVG9kb3NUYWIub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0KGV2ZW50LnRhcmdldCk7XG4gICAgY29sb3JQcm9qZWN0VGFiKGV2ZW50LnRhcmdldCk7XG4gICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuICB9O1xuICB0b2RheVRhYi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3QoZXZlbnQudGFyZ2V0KTtcbiAgICBjb2xvclByb2plY3RUYWIoZXZlbnQudGFyZ2V0KTtcbiAgICBkaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG4gICAgZGlzcGxheVByb2plY3RUYWJzKCk7XG4gIH1cbn1cblxuXG4vLyBQUk9KRUNUIExJU1RcbmNvbnN0IGNvbnRhaW5lck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1lbnUnKTtcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFicygpIHtcbiAgY2xlYXJDb250ZW50KHByb2plY3RzRGl2KTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBzdG9yYWdlR2V0TGlzdCgncHJvamVjdExpc3QnKS5zbGljZSgyKTsgIC8vIGV4Y2x1ZGUgZGVmYXVsdCBwcm9qZWN0c1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmlkKTtcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsICcnKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pZCk7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmlkKTtcblxuICAgIHRpdGxlUGFyYS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICB0YWIub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFByb2plY3QoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGNvbG9yUHJvamVjdFRhYihldmVudC50YXJnZXQpO1xuICAgICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIH07XG4gICAgZWRpdEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBvcGVuUHJvamVjdEVkaXRNb2RhbChldmVudC50YXJnZXQpO1xuICAgIH07XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJlbW92ZURhdGFPZkRlbGV0ZWRQcm9qZWN0KGV2ZW50LnRhcmdldCk7IFxuICAgICAgZGlzcGxheVByb2plY3RUYWJzKCk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRQcm9qZWN0SUQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBkZWxldGVkUHJvamVjdElEKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Tm9kZSA9IGNvbnRhaW5lck1lbnUucXVlcnlTZWxlY3RvcignLnRhYi5hbGwtdG9kb3MnKTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoZGVmYXVsdFByb2plY3ROb2RlKTtcbiAgICAgICAgY29sb3JQcm9qZWN0VGFiKGRlZmF1bHRQcm9qZWN0Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdE5vZGUgPSBjb250YWluZXJNZW51LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC50YWJbZGF0YS1pZD1cIiR7Y3VycmVudFByb2plY3QuaWR9XCJdYFxuICAgICAgICApO1xuICAgICAgICBjb2xvclByb2plY3RUYWIoY3VycmVudFByb2plY3ROb2RlKTtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQodGl0bGVQYXJhKTtcbiAgICBhcHBlbmRDaGlsZHJlbih0YWIsIFtlZGl0QnRuLCBkZWxldGVCdG5dKTtcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xvclByb2plY3RUYWIocHJvamVjdFRhYk5vZGUpIHtcbiAgY29uc3QgYWxsUHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLW1lbnUgLnRhYicpO1xuICBmb3IgKGNvbnN0IHRhYiBvZiBhbGxQcm9qZWN0VGFicykge1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJycpO1xuICB9XG4gIHByb2plY3RUYWJOb2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnb3BlbicpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEVkaXRNb2RhbChidG5Ob2RlKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSByZXR1cm5Qcm9qZWN0T2JqKGJ0bk5vZGUpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QnKTtcbiAgY29uc3QgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICBjb25zdCBzYXZlQnRuID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInJlc2V0XCJdJyk7XG4gIFxuICBkaWFsb2cuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0T2JqLnRpdGxlKTtcblxuICBkZXNjcmlwdGlvbklucHV0LnRleHRDb250ZW50ID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcblxuICBzYXZlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG5cbiAgICAvLyB1cGRhdGUgcHJvamVjdCBkYXRhIGluIG1hc3RlciBsaXN0XG4gICAgdXBkYXRlUHJvamVjdERhdGEoXG4gICAgICBwcm9qZWN0T2JqLFxuICAgICAgW3RpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXRdIFxuICAgICk7XG5cbiAgICAvLyBvcGVuIHRoZSBlZGl0ZWQgcHJvamVjdCdzIHRhYlxuICAgIGRpc3BsYXlQcm9qZWN0VGFicygpO1xuICAgIGNvbnN0IGVkaXRlZFByb2plY3ROb2RlID0gcHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudGFiW2RhdGEtaWQ9XCIke3Byb2plY3RPYmouaWR9YFxuICAgICk7XG4gICAgc2V0Q3VycmVudFByb2plY3QoZWRpdGVkUHJvamVjdE5vZGUpO1xuICAgIGNvbG9yUHJvamVjdFRhYihlZGl0ZWRQcm9qZWN0Tm9kZSk7XG4gICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9O1xuICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IHtkaWFsb2cuY2xvc2UoKX07XG59XG5cblxuLy8gVE9ETyBIRUFERVJcbmNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXRvZG9zID4gaGVhZGVyJylcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvSGVhZGVyQ29udGVudCgpIHtcbiAgY29uc3QgaDEgPSB0b2RvSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHBhcmEgPSB0b2RvSGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIGgxLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjtcbn1cblxuXG4vLyBUT0RPIExJU1RcbmNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKSB7XG4gIGRpc3BsYXlUb2RvSGVhZGVyQ29udGVudCgpO1xuICBjbGVhckNvbnRlbnQodG9kb3NEaXYpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpO1xuICBjb25zdCB0b2RvTGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCd0b2RvTGlzdCcpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0b3JhZ2VHZXRDdXJyZW50UHJvamVjdCgnY3VycmVudFByb2plY3QnKTtcbiAgbGV0IHRvZG9zO1xuICBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IHByb2plY3RMaXN0WzBdLmlkKSB7ICBcbiAgICB0b2RvcyA9IHRvZG9MaXN0XG4gIH0gZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IHByb2plY3RMaXN0WzFdLmlkKSB7XG4gICAgdG9kb3MgPSBmaWx0ZXJUb2RvTGlzdEZvclRvZGF5KHRvZG9MaXN0KTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvcyA9IGZpbmRUb2Rvc0ZvclNlbGVjdFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICB9XG4gIHRvZG9zID0gc29ydFRvZG9MaXN0QnlTdGF0dXModG9kb3MpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB2aWV3TW9kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgdGl0bGVQYXJhLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZHVlRGF0ZVBhcmEuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnLCAnaGlkZGVuJyk7XG4gICAgbm90ZVBhcmEuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuICAgIGJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICB2aWV3TW9kZUJ0bi5jbGFzc0xpc3QuYWRkKCd2aWV3LW1vZGUnLCAnZG93bicpO1xuXG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIHZpZXdNb2RlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnLCB0b2RvLnRvZG9JRCk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJywgdG9kby50b2RvSUQpO1xuICAgIFxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICAgIH1cbiAgICBpZiAodG9kby5zdGF0dXMgPT09ICdjbG9zZWQnKSB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfVxuXG4gICAgY2hlY2tib3gub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgdG9nZ2xlVG9kb1N0YXR1cyhldmVudC50YXJnZXQpO1xuICAgICAgbW92ZUNoZWNrZWRUb2RvSW5MaXN0T3JkZXIoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICB9O1xuICAgIGVkaXRCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgb3BlblRvZG9FZGl0TW9kYWwoZXZlbnQudGFyZ2V0KTtcbiAgICB9O1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICByZW1vdmVUb2RvRnJvbUxpc3QoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGRpc3BsYXlUb2RvVGFic09mQ3VycmVudFByb2plY3QoKTtcbiAgICB9O1xuICAgIHZpZXdNb2RlQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHJvdGF0ZVZpZXdNb2RlQnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICB0b2dnbGVEaXNwbGF5T2ZEZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGhlYWRlckRpdiwgW3RpdGxlUGFyYSwgZHVlRGF0ZVBhcmFdKTtcbiAgICBhcHBlbmRDaGlsZHJlbihidG5zRGl2LCBbZWRpdEJ0biwgZGVsZXRlQnRuLCB2aWV3TW9kZUJ0bl0pO1xuICAgIGFwcGVuZENoaWxkcmVuKGRldGFpbHNEaXYsIFtub3RlUGFyYV0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHRhYiwgW1xuICAgICAgY2hlY2tib3gsIFxuICAgICAgaGVhZGVyRGl2LFxuICAgICAgYnRuc0RpdixcbiAgICAgIGRldGFpbHNEaXZcbiAgICBdKTtcbiAgICB0b2Rvc0Rpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICB9O1xuICBkaXNwbGF5VG9kb0RldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9EZXRhaWxzKCkge1xuICBjb25zdCB0b2Rvc05vZGVMaXN0ID0gcmV0dXJuTm9kZUxpc3RPZlRvZG9UYWJzKCk7XG4gIGZvciAoY29uc3QgdG9kb05vZGUgb2YgdG9kb3NOb2RlTGlzdCkge1xuICAgIGNvbnN0IHRvZG9PYmogPSByZXR1cm5Ub2RvT2JqKHRvZG9Ob2RlKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYSA9IHRvZG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVQYXJhID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlJyk7XG4gICAgY29uc3Qgbm90ZVBhcmEgPSB0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1hdER1ZURhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gKHRvZG9PYmouZHVlRGF0ZSkuc3BsaXQoJy0nKTtcbiAgICAgIGxldCBtbSA9IGRhdGVbMV07XG4gICAgICBsZXQgZGQgPSBkYXRlWzJdO1xuICAgICAgaWYgKG1tLmNoYXJBdCgwKSA9PT0gJzAnKSBtbSA9IG1tLmNoYXJBdCgxKTtcbiAgICAgIGlmIChkZC5jaGFyQXQoMCkgPT09ICcwJykgZGQgPSBkZC5jaGFyQXQoMSk7XG4gICAgICByZXR1cm4gIG1tICsgJy8nICsgZGQ7XG4gICAgfVxuXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gdG9kb09iai50aXRsZTtcbiAgICBpZiAodG9kb09iai5kdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGZvcm1hdER1ZURhdGUoKTtcbiAgICB9XG4gICAgbm90ZVBhcmEudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlVmlld01vZGVCdG4oYnRuTm9kZSkge1xuICBpZiAoYnRuTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rvd24nKSkge1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xuICAgIGJ0bk5vZGUuY2xhc3NMaXN0LmFkZCgndXAnKTtcbiAgfSBlbHNlIHtcbiAgICBidG5Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3VwJyk7XG4gICAgYnRuTm9kZS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9mRGV0YWlscyhidG5Ob2RlKSB7XG4gIGNvbnN0IHRvZG9JRCA9IGJ0bk5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taWQnKTtcbiAgY29uc3QgdG9kb05vZGUgPSB0b2Rvc0Rpdi5xdWVyeVNlbGVjdG9yKGAudGFiW2RhdGEtdG9kby1pZD1cIiR7dG9kb0lEfWApO1xuICBjb25zdCBkZXRhaWxzRGl2ID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcblxuICBpZiAoZGV0YWlsc0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSBlbHNlIHtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Ub2RvRWRpdE1vZGFsKGJ0bk5vZGUpIHtcbiAgY29uc3QgdG9kb09iaiA9IHJldHVyblRvZG9PYmooYnRuTm9kZSk7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kbycpO1xuICBcbiAgY29uc3QgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2R1ZS1kYXRlJyk7XG4gIGNvbnN0IG5vdGVJbnB1dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb25Mb3cgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwibG93XCJdJyk7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uTWVkaXVtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIm1lZGl1bVwiXScpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbkhpZ2ggPSBkaWFsb2cucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiaGlnaFwiXScpO1xuICBjb25zdCBzYXZlQnRuID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInJlc2V0XCJdJyk7XG4gIFxuICBkaWFsb2cuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0b2RvT2JqLnRpdGxlfWApO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3RvZG9PYmouZHVlRGF0ZX1gKTtcblxuICBub3RlSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvT2JqLm5vdGU7XG4gIFxuICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSB0b2RvT2JqLnByaW9yaXR5O1xuICBsZXQgc2VsZWN0T3B0aW9uO1xuICBpZiAoY3VycmVudFByaW9yaXR5ID09PSAnbG93Jykge1xuICAgIHNlbGVjdE9wdGlvbiA9IHByaW9yaXR5T3B0aW9uTG93O1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICBzZWxlY3RPcHRpb24gPSBwcmlvcml0eU9wdGlvbk1lZGl1bTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RPcHRpb24gPSBwcmlvcml0eU9wdGlvbkhpZ2g7XG4gIH07XG4gIHNlbGVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywnJyk7XG5cbiAgc2F2ZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIHVwZGF0ZVRvZG9EYXRhKFxuICAgICAgdG9kb09iaixcbiAgICAgIFt0aXRsZUlucHV0LCBkYXRlSW5wdXQsIG5vdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3RdIFxuICAgICk7XG4gICAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfTtcbiAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBkaWFsb2cuY2xvc2UoKTtcbn1cblxuXG4vLyBcIkFERFwiIEJVVFRPTlNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1wcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cuYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7cHJvamVjdERpYWxvZy5zaG93KCl9O1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQtdG9kb1wiKTtcbmNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nLmFkZC10b2RvXCIpO1xuYWRkVG9kb0J0bi5vbmNsaWNrID0gKCkgPT4ge3RvZG9EaWFsb2cuc2hvdygpfTtcblxuXG4vLyBQUk9KRUNUIEZPUk1cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBmb3JtXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IGlucHV0XCIpO1xuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0IHRleHRhcmVhXCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG5zdWJtaXRQcm9qZWN0QnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFwcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiBwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuXG4gIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBpbnN0YW5jZVxuICBjb25zdCB0aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgLy8gb3BlbiBuZXcgcHJvamVjdFxuICBkaXNwbGF5UHJvamVjdFRhYnMoKTtcbiAgY29uc3QgbmV3UHJvamVjdE5vZGUgPSBwcm9qZWN0c0Rpdi5sYXN0Q2hpbGQ7XG4gIHNldEN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3ROb2RlKTtcbiAgY29sb3JQcm9qZWN0VGFiKG5ld1Byb2plY3ROb2RlKTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICBcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpOyBcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdCBidXR0b25bdHlwZT0ncmVzZXQnXVwiKTtcbnJlc2V0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7IFxufTtcblxuXG4vLyBUT0RPIEZPUk1cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBmb3JtXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGlucHV0I3RpdGxlXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gaW5wdXQjZHVlLWRhdGVcIik7XG5jb25zdCB0b2RvTm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyB0ZXh0YXJlYVwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kbyBzZWxlY3RcIik7XG5cbmZ1bmN0aW9uIHRvZGF5c0RhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGxldCBtbSA9ICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgbGV0IGRkID0gKHRvZGF5LmdldERhdGUoKSkudG9TdHJpbmcoKTtcblxuICBpZiAobW0ubGVuZ3RoID09PSAxKSB7bW0gPSAnMCcgKyBtbX07XG4gIGlmIChkZC5sZW5ndGggPT09IDEpIHtkZCA9ICcwJyArIGRkfTtcbiAgcmV0dXJuIHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xufVxudG9kb0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5c0RhdGUoKSk7XG5cbmNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvIGJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbnN1Ym1pdFRvZG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHRvZG9Gb3JtLnJlcG9ydFZhbGlkaXR5KCk7IFxuICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgbm90ZSA9IHRvZG9Ob3RlSW5wdXQudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGNyZWF0ZU5ld1RvZG8odGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5KTtcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCgpO1xuICB0b2RvRm9ybS5yZXNldCgpO1xuICB0b2RvRGlhbG9nLmNsb3NlKCk7XG59XG5cbmNvbnN0IHJlc2V0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8gYnV0dG9uW3R5cGU9J3Jlc2V0J11cIik7XG5yZXNldFRvZG9CdG4ub25jbGljayA9ICgpID0+IHtcbiAgdG9kb0RpYWxvZy5jbG9zZSgpOyBcbn07XG5cblxuZXhwb3J0IHsgXG4gIGRpc3BsYXlEZWZhdWx0UHJvamVjdFRhYnMsXG4gIGRpc3BsYXlQcm9qZWN0VGFicywgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdFxufTsiLCJpbXBvcnQgeyBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QsIHN0b3JhZ2VHZXRMaXN0LCBzdG9yYWdlU2V0SXRlbSB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuY2xhc3MgUHJvamVjdEl0ZW0geyAgXG4gIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGFkZFRvTGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHN0b3JhZ2VHZXRMaXN0KCdwcm9qZWN0TGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnB1c2godGhpcyk7XG4gICAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xuICB9IFxuXG4gIHJlbW92ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gc3RvcmFnZUdldExpc3QoJ3Byb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZlByb2plY3RJbk1hc3Rlckxpc3QocHJvamVjdExpc3QsIHRoaXMpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZVNldEl0ZW0oJ3Byb2plY3RMaXN0JywgcHJvamVjdExpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IFByb2plY3RJdGVtKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBQcm9qZWN0SXRlbSB9OyIsImltcG9ydCB7IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCwgc3RvcmFnZUdldExpc3QsIHN0b3JhZ2VTZXRJdGVtIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgdG9kb0lELCB0aXRsZSwgZHVlRGF0ZSwgbm90ZSwgcHJpb3JpdHksIHN0YXR1cyA9ICdvcGVuJykge1xuICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgIHRoaXMudG9kb0lEID0gdG9kb0lEO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgYWRkVG9MaXN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gc3RvcmFnZUdldExpc3QoJ3RvZG9MaXN0Jyk7XG4gICAgdG9kb0xpc3QucHVzaCh0aGlzKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG4gIH0gXG5cbiAgcmVtb3ZlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBzdG9yYWdlR2V0TGlzdCgndG9kb0xpc3QnKTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mVG9kb0luTWFzdGVyTGlzdCh0b2RvTGlzdCwgdGhpcyk7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlU2V0SXRlbSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgcmV0dXJuIG5ldyBUb2RvSXRlbShwcm9qZWN0SUQsIHRvZG9JRCwgdGl0bGUsIGR1ZURhdGUsIG5vdGUsIHByaW9yaXR5LCBzdGF0dXMpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2NyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgXG4gIGNvbG9yUHJvamVjdFRhYixcbiAgZGlzcGxheURlZmF1bHRQcm9qZWN0VGFicyxcbiAgZGlzcGxheVByb2plY3RUYWJzLCBcbiAgZGlzcGxheVRvZG9UYWJzT2ZDdXJyZW50UHJvamVjdCxcbn0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCwgc3RvcmFnZUdldExpc3QsIHN0b3JhZ2VTZXRJdGVtIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuXG5cbi8vIElOSVRJQUxJWkUgTE9DQUwgU1RPUkFHRVxuaWYgKCFsb2NhbFN0b3JhZ2UubGVuZ3RoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gW1xuICAgIGNyZWF0ZVRvZG8oXG4gICAgICAnMicsXG4gICAgICAnMCcsXG4gICAgICAnRmlyc3QgdG9kbyBpdGVtJyxcbiAgICAgICcyMDI0LTAxLTI0JyxcbiAgICAgICdOb3RlcyBmb3IgdG9kbyBpdGVtcyBzaG93IGhlcmUnLFxuICAgICAgJ2hpZ2gnLFxuICAgICksXG4gICAgY3JlYXRlVG9kbyhcbiAgICAgICcyJyxcbiAgICAgICcxJyxcbiAgICAgICdTZWNvbmQgdG9kbyBpdGVtJyxcbiAgICAgICcyMDI0LTAzLTE4JyxcbiAgICAgICdUaGluZ3MgSSBnb3R0YSByZW1lbWJlciBhYm91dCB0aGlzIHRhc2snLFxuICAgICAgJ21lZGl1bScsXG4gICAgKSxcbiAgXTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICcwJyxcbiAgICAgIFwiQWxsIFRvZG9zXCIsIFxuICAgICAgXCJcIlxuICAgICksXG4gICAgY3JlYXRlUHJvamVjdChcbiAgICAgICcxJyxcbiAgICAgIFwiVG9kYXkncyBUb2Rvc1wiLCBcbiAgICAgIFwiXCJcbiAgICApLFxuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICAnMicsXG4gICAgICBcIkV4YW1wbGUgUHJvamVjdFwiLCBcbiAgICAgIFwiVGhpcyBpcyB3aGVyZSBwcm9qZWN0IGRlc2NyaXB0aW9ucyBnb1wiXG4gICAgKSxcbiAgXTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFswXTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElEQ291bnRlcicsIDMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0lEQ291bnRlcicsIDIpO1xufVxuXG5cbi8vIFJFTkRFUiBERUZBVUxUIFVJXG5kaXNwbGF5RGVmYXVsdFByb2plY3RUYWJzKCk7XG5kaXNwbGF5UHJvamVjdFRhYnMoKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWVudSAudGFiOmZpcnN0LW9mLXR5cGUnKTtcbnNldEN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0Tm9kZSk7XG5kaXNwbGF5VG9kb1RhYnNPZkN1cnJlbnRQcm9qZWN0KCk7XG5jb2xvclByb2plY3RUYWIoZGVmYXVsdFByb2plY3ROb2RlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=