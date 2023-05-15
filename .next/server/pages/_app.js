(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
// EXTERNAL MODULE: ./pages/App.css
var App = __webpack_require__(639);
;// CONCATENATED MODULE: ./pages/_app.tsx






const outerTheme = (0,material_.createTheme)({
    palette: {
        primary: {
            main: colors_namespaceObject.green[50]
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ThemeProvider, {
        theme: outerTheme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Quizzical"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#da532c"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 639:
/***/ (() => {



/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(212)));
module.exports = __webpack_exports__;

})();