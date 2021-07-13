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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Header, {
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
          }, this)
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiVGFibGUiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Z0NBaUJPO0FBQUE7O0FBQ1gsYUFBTyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNsRCw0QkFDQyw4REFBQyw0REFBRDtBQUVDLGlCQUFPLEVBQUVELE9BRlY7QUFHQyxpQkFBTyxFQUFFLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSztBQUhyQixXQUNNRCxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFPQSxPQVJNLENBQVA7QUFTQTs7OzZCQUVRO0FBQUEsVUFDQUUsTUFEQSxHQUNrQ0MsNERBRGxDO0FBQUEsVUFDUUMsR0FEUixHQUNrQ0QseURBRGxDO0FBQUEsVUFDYUUsVUFEYixHQUNrQ0YsZ0VBRGxDO0FBQUEsVUFDeUJHLElBRHpCLEdBQ2tDSCwwREFEbEM7QUFFUiwwQkFDQyw4REFBQyx3REFBRDtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUMsOERBQUMseUNBQUQ7QUFBTSxlQUFLLHVCQUFnQixLQUFLUCxLQUFMLENBQVdLLE9BQTNCLGtCQUFYO0FBQUEsaUNBQ0M7QUFBQSxtQ0FDQyw4REFBQyxzREFBRDtBQUFRLHFCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQU9DLDhEQUFDLHFEQUFEO0FBQUEsaUNBQ0MsOERBQUMsTUFBRDtBQUFBLG1DQUNDLDhEQUFDLEdBQUQ7QUFBQSxzQ0FDQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUMsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUdDLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQsZUFJQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpELGVBS0MsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRCxlQU1DLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQsZUFPQyw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBdUJBOzs7O2dTQXJENEJMLEs7Ozs7OztBQUNwQkssdUIsR0FBWUwsS0FBSyxDQUFDVyxLLENBQWxCTixPO0FBQ0ZPLHdCLEdBQVdDLDREQUFRLENBQUNSLE9BQUQsQzs7dUJBQ0VPLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFOzs7QUFBckJDLDRCOzt1QkFFaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUN0QkMsS0FBSyxDQUFDQyxRQUFRLENBQUNKLFlBQUQsQ0FBVCxDQUFMLENBQThCO0FBQTlCLGlCQUNFSyxJQURGLEdBRUVwQixHQUZGLENBRU0sVUFBQ3FCLE9BQUQsRUFBVW5CLEtBQVYsRUFBb0I7QUFDeEIseUJBQU9RLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmIsUUFBakIsQ0FBMEJHLEtBQTFCLEVBQWlDWSxJQUFqQyxFQUFQO0FBQ0EsaUJBSkYsQ0FEc0IsQzs7O0FBQWpCZix3QjtpREFRQztBQUFFSSx5QkFBTyxFQUFQQSxPQUFGO0FBQVdKLDBCQUFRLEVBQVJBLFFBQVg7QUFBcUJnQiw4QkFBWSxFQUFaQTtBQUFyQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWRrQk8sNEM7O0FBd0QzQiwrREFBZXpCLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjUxOWRjOGM0ODAyMjg1ZGI3YjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XHJcblxyXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuXHRcdGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcblx0XHRjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG5cdFx0Y29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuXHRcdGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcblx0XHRcdEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpIC8vZ2V0cyBsaXN0IG9mIHRoZSBpbmZvIG5lZWRlZCBmcm9tIHRoZSBjb250cmFjdFxyXG5cdFx0XHRcdC5maWxsKClcclxuXHRcdFx0XHQubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50IH07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJSb3coKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PFJlcXVlc3RSb3dcclxuXHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRyZXF1ZXN0PXtyZXF1ZXN0fVxyXG5cdFx0XHRcdFx0YWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8aDM+UmVxdWVzdHM8L2gzPlxyXG5cdFx0XHRcdDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcblx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5PkFkZCBSZXF1ZXN0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHRcdDxIZWFkZXI+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvSGVhZGVyPlxyXG5cdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9