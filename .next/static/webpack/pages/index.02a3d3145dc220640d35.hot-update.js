self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\99_Study\\003_React\\workspace\\0001\\pages\\index.js",
    _this = undefined;



function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: ["Room: ", room]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Session;

function Sessions(_ref2) {
  var sessions = _ref2.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Seesion, {
      title: sessions[0].title,
      room: sessions[0].room.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c2 = Sessions;

var IndexPage = function IndexPage() {
  var _data$ = _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data[0],
      id = _data$.id,
      bio = _data$.bio,
      first = _data$.first,
      last = _data$.last,
      favorite = _data$.favorite,
      twitterHandle = _data$.twitterHandle,
      company = _data$.company,
      sessions = _data$.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "continer speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function (speaker) {
        var id = speaker.id,
            bio = speaker.bio,
            first = speaker.first,
            last = speaker.last,
            favorite = speaker.favorite,
            twitterHandle = speaker.twitterHandle,
            company = speaker.company,
            sessions = speaker.sessions;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card card-height p-4 mt-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "speaker-img d-flex flex-row justify-content-center align-items-chenter h-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "contain-fit",
                src: "/images/speaker-".concat(id, ".jpg"),
                width: "300",
                alt: "".concat(first, " ").concat(last)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "speaker-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "d-flex justify-content-between mb-3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "text-truncate w-200",
                  children: [first, " ", last]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [bio, " ", company, " ", twitterHandle, " ", favorite]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {
              sessions: sessions
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c3 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJuYW1lIiwiSW5kZXhQYWdlIiwiZGF0YSIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNwZWFrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULE9BQStCO0FBQUEsTUFBYkMsS0FBYSxRQUFiQSxLQUFhO0FBQUEsTUFBTkMsSUFBTSxRQUFOQSxJQUFNO0FBQzdCLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDR0QsS0FESCxvQkFDVTtBQUFBLDJCQUFlQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFGLE87O0FBUVQsU0FBU0csUUFBVCxRQUE2QjtBQUFBLE1BQVZDLFFBQVUsU0FBVkEsUUFBVTtBQUMzQixzQkFDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLDJCQUNFLDhEQUFDLE9BQUQ7QUFBUyxXQUFLLEVBQUVBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUgsS0FBNUI7QUFBbUMsVUFBSSxFQUFFRyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlGLElBQVosQ0FBaUJHO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOUUYsUTs7QUFRVCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUEsZUFDOENDLGlEQUQ5QztBQUFBLE1BQ2ZDLEVBRGUsVUFDZkEsRUFEZTtBQUFBLE1BQ1pDLEdBRFksVUFDWkEsR0FEWTtBQUFBLE1BQ1JDLEtBRFEsVUFDUkEsS0FEUTtBQUFBLE1BQ0ZDLElBREUsVUFDRkEsSUFERTtBQUFBLE1BQ0dDLFFBREgsVUFDR0EsUUFESDtBQUFBLE1BQ1lDLGFBRFosVUFDWUEsYUFEWjtBQUFBLE1BQzBCQyxPQUQxQixVQUMwQkEsT0FEMUI7QUFBQSxNQUNrQ1YsUUFEbEMsVUFDa0NBLFFBRGxDO0FBRXRCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNHRyxrREFBQSxDQUFTLFVBQVVRLE9BQVYsRUFBa0I7QUFBQSxZQUNyQlAsRUFEcUIsR0FDd0NPLE9BRHhDLENBQ3JCUCxFQURxQjtBQUFBLFlBQ2xCQyxHQURrQixHQUN3Q00sT0FEeEMsQ0FDbEJOLEdBRGtCO0FBQUEsWUFDZEMsS0FEYyxHQUN3Q0ssT0FEeEMsQ0FDZEwsS0FEYztBQUFBLFlBQ1JDLElBRFEsR0FDd0NJLE9BRHhDLENBQ1JKLElBRFE7QUFBQSxZQUNIQyxRQURHLEdBQ3dDRyxPQUR4QyxDQUNISCxRQURHO0FBQUEsWUFDTUMsYUFETixHQUN3Q0UsT0FEeEMsQ0FDTUYsYUFETjtBQUFBLFlBQ29CQyxPQURwQixHQUN3Q0MsT0FEeEMsQ0FDb0JELE9BRHBCO0FBQUEsWUFDNEJWLFFBRDVCLEdBQ3dDVyxPQUR4QyxDQUM0QlgsUUFENUI7QUFHNUIsNEJBQ0U7QUFBYyxtQkFBUyxFQUFDLDJEQUF4QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyw4RUFBZjtBQUFBLHFDQUNFO0FBQ0EseUJBQVMsRUFBQyxhQURWO0FBRUEsbUJBQUcsNEJBQXFCSSxFQUFyQixTQUZIO0FBR0EscUJBQUssRUFBQyxLQUhOO0FBSUEsbUJBQUcsWUFBS0UsS0FBTCxjQUFjQyxJQUFkO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFTRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxxQ0FBZjtBQUFBLHVDQUNFO0FBQUksMkJBQVMsRUFBQyxxQkFBZDtBQUFBLDZCQUNHRCxLQURILE9BQ1dDLElBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU1FO0FBQUEsdUNBQ0U7QUFBQSw2QkFBSUYsR0FBSixPQUFVSyxPQUFWLE9BQW9CRCxhQUFwQixPQUFvQ0QsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsZUFtQkUsOERBQUMsUUFBRDtBQUFVLHNCQUFRLEVBQUVSO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVJLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQTBCQyxPQTdCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F0Q0Q7O01BQU1GLFM7QUF3Q04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJhM2QzMTQ1ZGMyMjA2NDBkMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XG5cbmZ1bmN0aW9uIFNlc3Npb24oe3RpdGxlLCByb29tfSl7XG4gIHJldHVybihcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb219PC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pe1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIDxTZWVzaW9uIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX0gcm9vbT17c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfSAvPiAgICAgICAgICAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtpZCxiaW8sZmlyc3QsbGFzdCxmYXZvcml0ZSx0d2l0dGVySGFuZGxlLGNvbXBhbnksc2Vzc2lvbnN9ID0gZGF0YVswXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKXtcbiAgICAgICAgY29uc3Qge2lkLGJpbyxmaXJzdCxsYXN0LGZhdm9yaXRlLHR3aXR0ZXJIYW5kbGUsY29tcGFueSxzZXNzaW9uc30gPSBzcGVha2VyO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2hlbnRlciBoLTMwMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9