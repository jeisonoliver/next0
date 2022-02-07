(function() {
var exports = {};
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Movies2; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HP\\next0\\pages\\movies2.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Movies2() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    movies
  } = router.query;
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(`http://www.omdbapi.com/?apikey=5c658291&s==${movies}`, fetcher);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  }, "falha na requisi\xE7\xE3o...");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }
  }, "carregando...");
  return __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, data.Search.map(m => __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/detalhado/${m.imdbID}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 23
    }
  }, m.Title)))));
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/movies2.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZXMyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxIUFxcbmV4dDBcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJNb3ZpZXMyIiwicm91dGVyIiwidXNlUm91dGVyIiwibW92aWVzIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiU2VhcmNoIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFrQjtBQUU3QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFDQztBQUFELE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFDQSxRQUFNO0FBQUNDLFFBQUQ7QUFBT0M7QUFBUCxNQUFnQkMsMENBQU0sQ0FBRSw4Q0FBNkNKLE1BQU8sRUFBdEQsRUFBeURLLE9BQXpELENBQTVCO0FBRUEsTUFBSUYsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBUDtBQUVYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUVYLFNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdLQSxJQUFJLENBQUNJLE1BQUwsQ0FBWUMsR0FBWixDQUFrQkMsQ0FBRCxJQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLGNBQWFBLENBQUMsQ0FBQ0MsTUFBTyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxDQUFDLENBQUNFLEtBQU4sQ0FERixDQURMLENBREYsQ0FITCxDQUZKO0FBaUJIOztBQUlELGVBQWVMLE9BQWYsQ0FBdUJNLEdBQXZCLEVBQTRCO0FBRXhCLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBdkI7QUFFQSxRQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBRUEsU0FBT0EsSUFBUDtBQUVILEM7Ozs7Ozs7Ozs7O0FDM0NELHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9tb3ZpZXMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMyKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHttb3ZpZXN9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NWM2NTgyOTEmcz09JHttb3ZpZXN9YCwgZmV0Y2hlcikgICAgXHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCggKG0pID0+IFxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWxoYWRvLyR7bS5pbWRiSUR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT57bS5UaXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICApICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9