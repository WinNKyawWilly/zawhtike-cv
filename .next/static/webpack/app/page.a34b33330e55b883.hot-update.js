"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ShowcaseImage.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/ShowcaseImage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ShowcaseImage = (param)=>{\n    let { src, alt, width = 300, height = 200 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative w-full h-64 mb-4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: src,\n                alt: alt,\n                layout: \"fill\",\n                objectFit: \"cover\",\n                className: \"transition-opacity duration-300 group-hover:opacity-90\"\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ShowcaseImage.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                    children: alt\n                }, void 0, false, {\n                    fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ShowcaseImage.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ShowcaseImage.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ShowcaseImage.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ShowcaseImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowcaseImage);\nvar _c;\n$RefreshReg$(_c, \"ShowcaseImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaG93Y2FzZUltYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ0s7QUFFL0IsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsR0FBRyxFQUFFQyxTQUFTLEdBQUcsRUFBRTtJQUM1RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLG1EQUFLQTtnQkFDSkUsS0FBS0E7Z0JBQ0xDLEtBQUtBO2dCQUNMSyxRQUFPO2dCQUNQQyxXQUFVO2dCQUNWRixXQUFVOzs7Ozs7MEJBRVosOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRztvQkFBRUgsV0FBVTs4QkFDVko7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7S0FqQk1GO0FBbUJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaG93Y2FzZUltYWdlLmpzeD8wZWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IFNob3djYXNlSW1hZ2UgPSAoeyBzcmMsIGFsdCwgd2lkdGggPSAzMDAsIGhlaWdodCA9IDIwMCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgaC02NCBtYi00IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1tZCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTA1XCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOm9wYWNpdHktOTBcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOmJnLW9wYWNpdHktMzBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgb3BhY2l0eS0wIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICB7YWx0fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3djYXNlSW1hZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTaG93Y2FzZUltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ShowcaseImage.jsx\n"));

/***/ })

});