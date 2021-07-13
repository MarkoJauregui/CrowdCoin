self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\marko\\kickstart\\pages\\campaigns\\requests\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var RequestIndex = /*#__PURE__*/function (_Component) {
  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(RequestIndex, _Component);

  var _super = _createSuper(RequestIndex);

  function RequestIndex() {
    (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, RequestIndex);

    return _super.apply(this, arguments);
  }

  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(RequestIndex, [{
    key: "renderRow",
    value: function renderRow() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_12__.default, {
          request: request,
          address: _this.props.address
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 5
        }, _this);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Body;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "Requests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_9__.Link, {
          route: "/campaigns/".concat(this.props.address, "/requests/new"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
              primary: true,
              children: "Add Request"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Row, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Recipient"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Approval Count"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderCell, {
                children: "Finalize"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Body, {
            children: this.renderRow()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var address, campaign, requestCount, requests;
        return C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return Promise.all(Array(parseInt(requestCount)) //gets list of the info needed from the contract
                .fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 7:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiVGFibGUiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvdyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Z0NBaUJPO0FBQUE7O0FBQ1gsYUFBTyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNsRCw0QkFDQyw4REFBQyw0REFBRDtBQUVDLGlCQUFPLEVBQUVELE9BRlY7QUFHQyxpQkFBTyxFQUFFLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSztBQUhyQixXQUNNRCxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFPQSxPQVJNLENBQVA7QUFTQTs7OzZCQUVRO0FBQUEsVUFDQUUsTUFEQSxHQUNrQ0MsNERBRGxDO0FBQUEsVUFDUUMsR0FEUixHQUNrQ0QseURBRGxDO0FBQUEsVUFDYUUsVUFEYixHQUNrQ0YsZ0VBRGxDO0FBQUEsVUFDeUJHLElBRHpCLEdBQ2tDSCwwREFEbEM7QUFFUiwwQkFDQyw4REFBQyx3REFBRDtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUMsOERBQUMseUNBQUQ7QUFBTSxlQUFLLHVCQUFnQixLQUFLUCxLQUFMLENBQVdLLE9BQTNCLGtCQUFYO0FBQUEsaUNBQ0M7QUFBQSxtQ0FDQyw4REFBQyxzREFBRDtBQUFRLHFCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQU9DLDhEQUFDLHFEQUFEO0FBQUEsa0NBQ0MsOERBQUMsTUFBRDtBQUFBLG1DQUNDLDhEQUFDLEdBQUQ7QUFBQSxzQ0FDQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUMsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUdDLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQsZUFJQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpELGVBS0MsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRCxlQU1DLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQsZUFPQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFZQyw4REFBQyxJQUFEO0FBQUEsc0JBQU8sS0FBS00sU0FBTDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBd0JBOzs7O2dTQXRENEJYLEs7Ozs7OztBQUNwQkssdUIsR0FBWUwsS0FBSyxDQUFDWSxLLENBQWxCUCxPO0FBQ0ZRLHdCLEdBQVdDLDREQUFRLENBQUNULE9BQUQsQzs7dUJBQ0VRLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFOzs7QUFBckJDLDRCOzt1QkFFaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUN0QkMsS0FBSyxDQUFDQyxRQUFRLENBQUNKLFlBQUQsQ0FBVCxDQUFMLENBQThCO0FBQTlCLGlCQUNFSyxJQURGLEdBRUVyQixHQUZGLENBRU0sVUFBQ3NCLE9BQUQsRUFBVXBCLEtBQVYsRUFBb0I7QUFDeEIseUJBQU9TLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmQsUUFBakIsQ0FBMEJHLEtBQTFCLEVBQWlDYSxJQUFqQyxFQUFQO0FBQ0EsaUJBSkYsQ0FEc0IsQzs7O0FBQWpCaEIsd0I7aURBUUM7QUFBRUkseUJBQU8sRUFBUEEsT0FBRjtBQUFXSiwwQkFBUSxFQUFSQSxRQUFYO0FBQXFCaUIsOEJBQVksRUFBWkE7QUFBckIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFka0JPLDRDOztBQXlEM0IsK0RBQWUxQixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5hNzI4MTU0Y2RkYzExZTM0M2I3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xyXG5cclxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcblx0XHRjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuXHRcdGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuXHJcblx0XHRjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG5cdFx0XHRBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKSAvL2dldHMgbGlzdCBvZiB0aGUgaW5mbyBuZWVkZWQgZnJvbSB0aGUgY29udHJhY3RcclxuXHRcdFx0XHQuZmlsbCgpXHJcblx0XHRcdFx0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCB9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyUm93KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxSZXF1ZXN0Um93XHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0cmVxdWVzdD17cmVxdWVzdH1cclxuXHRcdFx0XHRcdGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgzPlJlcXVlc3RzPC9oMz5cclxuXHRcdFx0XHQ8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG5cdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0XHQ8SGVhZGVyPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QXBwcm92YWwgQ291bnQ8L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0hlYWRlcj5cclxuXHRcdFx0XHRcdDxCb2R5Pnt0aGlzLnJlbmRlclJvdygpfTwvQm9keT5cclxuXHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==