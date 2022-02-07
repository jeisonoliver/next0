self["webpackHotUpdate_N_E"]("pages/movies2",{

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Movies2; }
/* harmony export */ });
/* harmony import */ var C_Users_HP_next0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_next0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_next0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_next0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\HP\\next0\\pages\\movies2.js",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);



function Movies2() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var movies = router.query.movies;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)("http://www.omdbapi.com/?apikey=5c658291&s==".concat(movies), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

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
  }, data.Search.map(function (m) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/detalhado/".concat(m.imdbID),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 23
      }
    }, m.Title)));
  }));
}

_s(Movies2, "mZuyhWoEayG5q+fyCgnn11lj9Sg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, swr__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = Movies2;

function fetcher(_x) {
  return _fetcher.apply(this, arguments);
}

function _fetcher() {
  _fetcher = (0,C_Users_HP_next0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_HP_next0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {
    var res, json;
    return C_Users_HP_next0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetcher.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Movies2");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzMi5qcyJdLCJuYW1lcyI6WyJNb3ZpZXMyIiwicm91dGVyIiwidXNlUm91dGVyIiwibW92aWVzIiwicXVlcnkiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwiU2VhcmNoIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwidXJsIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFN0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUY2QixNQUd0QkMsTUFIc0IsR0FHWkYsTUFBTSxDQUFDRyxLQUhLLENBR3RCRCxNQUhzQjs7QUFBQSxnQkFJUEUsNENBQU0sc0RBQStDRixNQUEvQyxHQUF5REcsT0FBekQsQ0FKQztBQUFBLE1BSXRCQyxJQUpzQixXQUl0QkEsSUFKc0I7QUFBQSxNQUloQkMsS0FKZ0IsV0FJaEJBLEtBSmdCOztBQU03QixNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUFQO0FBRVgsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBRVgsU0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0tBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxHQUFaLENBQWlCLFVBQUNDLENBQUQ7QUFBQSxXQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxNQUFDLGtEQUFEO0FBQU0sVUFBSSx1QkFBZ0JBLENBQUMsQ0FBQ0MsTUFBbEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxDQUFDLENBQUNFLEtBQU4sQ0FERixDQURMLENBRGU7QUFBQSxHQUFqQixDQUhMLENBRko7QUFpQkg7O0dBM0J1QmIsTztVQUVMRSxrRCxFQUVPRyx3Qzs7O0tBSkZMLE87O1NBK0JUTSxPOzs7OztpUEFBZixpQkFBdUJRLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXNCQyxLQUFLLENBQUNELEdBQUQsQ0FGM0I7O0FBQUE7QUFFVUUsZUFGVjtBQUFBO0FBQUEsbUJBSXVCQSxHQUFHLENBQUNDLElBQUosRUFKdkI7O0FBQUE7QUFJVUEsZ0JBSlY7QUFBQSw2Q0FNV0EsSUFOWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllczIuOTIzN2FhMGQ1MWRlNzVhZDUxNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7bW92aWVzfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTVjNjU4MjkxJnM9PSR7bW92aWVzfWAsIGZldGNoZXIpICAgIFxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiBcclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFsaGFkby8ke20uaW1kYklEfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e20uVGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgKSAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=