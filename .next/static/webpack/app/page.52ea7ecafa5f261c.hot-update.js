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

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"React Portfolio Website\",\n        description: \"Project 1 description\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    },\n    {\n        id: 2,\n        title: \"Potography Portfolio Website\",\n        description: \"Project 2 description\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    },\n    {\n        id: 3,\n        title: \"E-commerce Application\",\n        description: \"Project 3 description\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    },\n    {\n        id: 4,\n        title: \"Food Ordering Application\",\n        description: \"Project 4 description\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    },\n    {\n        id: 5,\n        title: \"React Firebase Template\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    },\n    {\n        id: 6,\n        title: \"Full-stack Roadmap\",\n        description: \"Project 5 description\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\",\n        logo: \"/images/logos/react-logo.png\",\n        linkUrl: \"https://reactjs.org\",\n        linkLabel: \"Learn React\"\n    }\n];\nconst ProjectsSection = ()=>{\n    var _selectedProject, _selectedProject1, _selectedProject2;\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView)(ref, {\n        once: true\n    });\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            onClick: ()=>setSelectedProject(project)\n                        }, project.id, false, {\n                            fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: !!selectedProject,\n                onClose: ()=>setSelectedProject(null),\n                title: (_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.title,\n                description: (_selectedProject1 = selectedProject) === null || _selectedProject1 === void 0 ? void 0 : _selectedProject1.description,\n                imgUrl: (_selectedProject2 = selectedProject) === null || _selectedProject2 === void 0 ? void 0 : _selectedProject2.image\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"HCekY8q6FkmKqN66/bUytlHFxho=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQ1I7QUFDRjtBQUNWO0FBQ3NCO0FBRWxELE1BQU1RLGVBQWU7SUFDbkI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxZQUFZO1FBQ1pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFUixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VSLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0E7UUFDRVIsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFTO1FBQ3RCQyxZQUFZO1FBQ1pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFUixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtJQUNBO1FBQ0VSLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsV0FBVztJQUNiO0NBQ0Q7QUFFRCxNQUFNQyxrQkFBa0I7UUErRFRDLGtCQUNNQSxtQkFDTEE7O0lBaEVkLE1BQU0sQ0FBQ04sS0FBS08sT0FBTyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTW9CLE1BQU1uQiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNb0IsV0FBV2Ysd0RBQVNBLENBQUNjLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBQzdDLE1BQU0sQ0FBQ0osaUJBQWlCSyxtQkFBbUIsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU13QixrQkFBa0IsQ0FBQ0M7UUFDdkJOLE9BQU9NO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJuQixhQUFhb0IsTUFBTSxDQUFDLENBQUNDLFVBQzVDQSxRQUFRaEIsR0FBRyxDQUFDaUIsUUFBUSxDQUFDakI7SUFHdkIsTUFBTWtCLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUTNCLElBQUc7OzBCQUNWLDhEQUFDNEI7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNsQyxtREFBVUE7d0JBQ1RvQyxTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVk3QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDVCxtREFBVUE7d0JBQ1RvQyxTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVk3QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDVCxtREFBVUE7d0JBQ1RvQyxTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVk3QixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDOEI7Z0JBQUd0QixLQUFLQTtnQkFBS2lCLFdBQVU7MEJBQ3JCWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBU2dCLHNCQUM5Qiw4REFBQ3ZDLGlEQUFNQSxDQUFDd0MsRUFBRTt3QkFFUkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTYixXQUFXLFlBQVk7d0JBQ2hDMEIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUMxQyxvREFBV0E7NEJBRVZPLE9BQU9tQixRQUFRbkIsS0FBSzs0QkFDcEJDLGFBQWFrQixRQUFRbEIsV0FBVzs0QkFDaEN3QyxRQUFRdEIsUUFBUWpCLEtBQUs7NEJBQ3JCNEIsU0FBUyxJQUFNaEIsbUJBQW1CSzsyQkFKN0JBLFFBQVFwQixFQUFFOzs7Ozt1QkFQWm9DOzs7Ozs7Ozs7OzBCQWdCWCw4REFBQ3hDLDhDQUFLQTtnQkFDSitDLFFBQVEsQ0FBQyxDQUFDakM7Z0JBQ1ZrQyxTQUFTLElBQU03QixtQkFBbUI7Z0JBQ2xDZCxLQUFLLEdBQUVTLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGlCQUFpQlQsS0FBSztnQkFDN0JDLFdBQVcsR0FBRVEsb0JBQUFBLDZCQUFBQSx3Q0FBQUEsa0JBQWlCUixXQUFXO2dCQUN6Q3dDLE1BQU0sR0FBRWhDLG9CQUFBQSw2QkFBQUEsd0NBQUFBLGtCQUFpQlAsS0FBSzs7Ozs7Ozs7Ozs7O0FBSXRDO0dBckVNTTs7UUFHYVgsb0RBQVNBOzs7S0FIdEJXO0FBdUVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcHJvamVjdHNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiUmVhY3QgUG9ydGZvbGlvIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDEgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ29zL3JlYWN0LWxvZ28ucG5nXCIsXG4gICAgbGlua1VybDogXCJodHRwczovL3JlYWN0anMub3JnXCIsXG4gICAgbGlua0xhYmVsOiBcIkxlYXJuIFJlYWN0XCJcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIlBvdG9ncmFwaHkgUG9ydGZvbGlvIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDIgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzIucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ29zL3JlYWN0LWxvZ28ucG5nXCIsXG4gICAgbGlua1VybDogXCJodHRwczovL3JlYWN0anMub3JnXCIsXG4gICAgbGlua0xhYmVsOiBcIkxlYXJuIFJlYWN0XCJcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkUtY29tbWVyY2UgQXBwbGljYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDMgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzMucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ29zL3JlYWN0LWxvZ28ucG5nXCIsXG4gICAgbGlua1VybDogXCJodHRwczovL3JlYWN0anMub3JnXCIsXG4gICAgbGlua0xhYmVsOiBcIkxlYXJuIFJlYWN0XCJcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIkZvb2QgT3JkZXJpbmcgQXBwbGljYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDQgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzQucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJNb2JpbGVcIl0sXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ29zL3JlYWN0LWxvZ28ucG5nXCIsXG4gICAgbGlua1VybDogXCJodHRwczovL3JlYWN0anMub3JnXCIsXG4gICAgbGlua0xhYmVsOiBcIkxlYXJuIFJlYWN0XCJcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiBcIlJlYWN0IEZpcmViYXNlIFRlbXBsYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0aGVudGljYXRpb24gYW5kIENSVUQgb3BlcmF0aW9uc1wiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNS5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgICBsb2dvOiBcIi9pbWFnZXMvbG9nb3MvcmVhY3QtbG9nby5wbmdcIixcbiAgICBsaW5rVXJsOiBcImh0dHBzOi8vcmVhY3Rqcy5vcmdcIixcbiAgICBsaW5rTGFiZWw6IFwiTGVhcm4gUmVhY3RcIlxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgdGl0bGU6IFwiRnVsbC1zdGFjayBSb2FkbWFwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCA1IGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy82LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICAgIGxvZ286IFwiL2ltYWdlcy9sb2dvcy9yZWFjdC1sb2dvLnBuZ1wiLFxuICAgIGxpbmtVcmw6IFwiaHR0cHM6Ly9yZWFjdGpzLm9yZ1wiLFxuICAgIGxpbmtMYWJlbDogXCJMZWFybiBSZWFjdFwiXG4gIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcbiAgICBzZXRUYWcobmV3VGFnKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXG4gICk7XG5cbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cbiAgICAgICAgTXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiQWxsXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiQWxsXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJXZWJcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJXZWJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIk1vYmlsZVwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIk1vYmlsZVwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49eyEhc2VsZWN0ZWRQcm9qZWN0fVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZFByb2plY3QobnVsbCl9XG4gICAgICAgIHRpdGxlPXtzZWxlY3RlZFByb2plY3Q/LnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17c2VsZWN0ZWRQcm9qZWN0Py5kZXNjcmlwdGlvbn1cbiAgICAgICAgaW1nVXJsPXtzZWxlY3RlZFByb2plY3Q/LmltYWdlfVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIk1vZGFsIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJwcmV2aWV3VXJsIiwibG9nbyIsImxpbmtVcmwiLCJsaW5rTGFiZWwiLCJQcm9qZWN0c1NlY3Rpb24iLCJzZWxlY3RlZFByb2plY3QiLCJzZXRUYWciLCJyZWYiLCJpc0luVmlldyIsIm9uY2UiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJoYW5kbGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiY2FyZFZhcmlhbnRzIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWdVcmwiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});