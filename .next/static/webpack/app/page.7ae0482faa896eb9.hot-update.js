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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"React Portfolio Website\",\n        description: \"Project 1 description\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Potography Portfolio Website\",\n        description: \"Project 2 description\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"E-commerce Application\",\n        description: \"Project 3 description\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"Food Ordering Application\",\n        description: \"Project 4 description\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \"React Firebase Template\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\"\n    },\n    {\n        id: 6,\n        title: \"Full-stack Roadmap\",\n        description: \"Project 5 description\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    var _selectedProject, _selectedProject1, _selectedProject2;\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView)(ref, {\n        once: true\n    });\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            onClick: ()=>setSelectedProject(project)\n                        }, project.id, false, {\n                            fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: !!selectedProject,\n                onClose: ()=>setSelectedProject(null),\n                title: (_selectedProject = selectedProject) === null || _selectedProject === void 0 ? void 0 : _selectedProject.title,\n                description: (_selectedProject1 = selectedProject) === null || _selectedProject1 === void 0 ? void 0 : _selectedProject1.description,\n                imgUrl: (_selectedProject2 = selectedProject) === null || _selectedProject2 === void 0 ? void 0 : _selectedProject2.image\n            }, void 0, false, {\n                fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/winnaingkyaw/GoodDeeds/KoZawHtike/zh-wnk/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"HCekY8q6FkmKqN66/bUytlHFxho=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQ1I7QUFDRjtBQUNWO0FBQ3NCO0FBRWxELE1BQU1RLGVBQWU7SUFDbkI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFlBQVk7SUFDZDtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsWUFBWTtJQUNkO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFTO1FBQ3RCQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFlBQVk7SUFDZDtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsWUFBWTtJQUNkO0NBQ0Q7QUFFRCxNQUFNQyxrQkFBa0I7UUErRFRDLGtCQUNNQSxtQkFDTEE7O0lBaEVkLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTWlCLE1BQU1oQiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNaUIsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBQzdDLE1BQU0sQ0FBQ0osaUJBQWlCSyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1xQixrQkFBa0IsQ0FBQ0M7UUFDdkJOLE9BQU9NO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJoQixhQUFhaUIsTUFBTSxDQUFDLENBQUNDLFVBQzVDQSxRQUFRYixHQUFHLENBQUNjLFFBQVEsQ0FBQ2Q7SUFHdkIsTUFBTWUsZUFBZTtRQUNuQkMsU0FBUztZQUFFQyxHQUFHO1lBQUlDLFNBQVM7UUFBRTtRQUM3QkMsU0FBUztZQUFFRixHQUFHO1lBQUdDLFNBQVM7UUFBRTtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFReEIsSUFBRzs7MEJBQ1YsOERBQUN5QjtnQkFBR0MsV0FBVTswQkFBK0Q7Ozs7OzswQkFHN0UsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQy9CLG1EQUFVQTt3QkFDVGlDLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWTFCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNULG1EQUFVQTt3QkFDVGlDLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWTFCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNULG1EQUFVQTt3QkFDVGlDLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWTFCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUMyQjtnQkFBR3RCLEtBQUtBO2dCQUFLaUIsV0FBVTswQkFDckJYLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDZixTQUFTZ0Isc0JBQzlCLDhEQUFDcEMsaURBQU1BLENBQUNxQyxFQUFFO3dCQUVSQyxVQUFVaEI7d0JBQ1ZDLFNBQVE7d0JBQ1JHLFNBQVNiLFdBQVcsWUFBWTt3QkFDaEMwQixZQUFZOzRCQUFFQyxVQUFVOzRCQUFLQyxPQUFPTCxRQUFRO3dCQUFJO2tDQUVoRCw0RUFBQ3ZDLG9EQUFXQTs0QkFFVk8sT0FBT2dCLFFBQVFoQixLQUFLOzRCQUNwQkMsYUFBYWUsUUFBUWYsV0FBVzs0QkFDaENxQyxRQUFRdEIsUUFBUWQsS0FBSzs0QkFDckJ5QixTQUFTLElBQU1oQixtQkFBbUJLOzJCQUo3QkEsUUFBUWpCLEVBQUU7Ozs7O3VCQVBaaUM7Ozs7Ozs7Ozs7MEJBZ0JYLDhEQUFDckMsOENBQUtBO2dCQUNKNEMsUUFBUSxDQUFDLENBQUNqQztnQkFDVmtDLFNBQVMsSUFBTTdCLG1CQUFtQjtnQkFDbENYLEtBQUssR0FBRU0sbUJBQUFBLDZCQUFBQSx1Q0FBQUEsaUJBQWlCTixLQUFLO2dCQUM3QkMsV0FBVyxHQUFFSyxvQkFBQUEsNkJBQUFBLHdDQUFBQSxrQkFBaUJMLFdBQVc7Z0JBQ3pDcUMsTUFBTSxHQUFFaEMsb0JBQUFBLDZCQUFBQSx3Q0FBQUEsa0JBQWlCSixLQUFLOzs7Ozs7Ozs7Ozs7QUFJdEM7R0FyRU1HOztRQUdhUixvREFBU0E7OztLQUh0QlE7QUF1RU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3g/MzcwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcbmltcG9ydCBQcm9qZWN0VGFnIGZyb20gXCIuL1Byb2plY3RUYWdcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VJblZpZXcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJSZWFjdCBQb3J0Zm9saW8gV2Vic2l0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2plY3QgMSBkZXNjcmlwdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMS5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIlBvdG9ncmFwaHkgUG9ydGZvbGlvIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDIgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzIucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJFLWNvbW1lcmNlIEFwcGxpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCAzIGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiRm9vZCBPcmRlcmluZyBBcHBsaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2plY3QgNCBkZXNjcmlwdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIk1vYmlsZVwiXSxcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiBcIlJlYWN0IEZpcmViYXNlIFRlbXBsYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0aGVudGljYXRpb24gYW5kIENSVUQgb3BlcmF0aW9uc1wiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNS5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiBcIkZ1bGwtc3RhY2sgUm9hZG1hcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2plY3QgNSBkZXNjcmlwdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNi5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVGFnQ2hhbmdlID0gKG5ld1RhZykgPT4ge1xuICAgIHNldFRhZyhuZXdUYWcpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEuZmlsdGVyKChwcm9qZWN0KSA9PlxuICAgIHByb2plY3QudGFnLmluY2x1ZGVzKHRhZylcbiAgKTtcblxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxuICAgIGFuaW1hdGU6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTQgbWItOCBtZDptYi0xMlwiPlxuICAgICAgICBNeSBQcm9qZWN0c1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBweS02XCI+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJBbGxcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIldlYlwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOCBtZDpnYXAtMTJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNJblZpZXcgPyBcImFuaW1hdGVcIiA6IFwiaW5pdGlhbFwifVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogaW5kZXggKiAwLjQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17ISFzZWxlY3RlZFByb2plY3R9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkUHJvamVjdChudWxsKX1cbiAgICAgICAgdGl0bGU9e3NlbGVjdGVkUHJvamVjdD8udGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtzZWxlY3RlZFByb2plY3Q/LmRlc2NyaXB0aW9ufVxuICAgICAgICBpbWdVcmw9e3NlbGVjdGVkUHJvamVjdD8uaW1hZ2V9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwiTW9kYWwiLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZyIsInByZXZpZXdVcmwiLCJQcm9qZWN0c1NlY3Rpb24iLCJzZWxlY3RlZFByb2plY3QiLCJzZXRUYWciLCJyZWYiLCJpc0luVmlldyIsIm9uY2UiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJoYW5kbGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiY2FyZFZhcmlhbnRzIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWdVcmwiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});