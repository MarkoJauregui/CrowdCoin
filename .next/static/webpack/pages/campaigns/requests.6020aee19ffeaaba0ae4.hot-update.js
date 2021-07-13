self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "C:\\Users\\marko\\kickstart\\components\\RequestRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var RequestRow = /*#__PURE__*/function (_Component) {
  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onApprove", /*#__PURE__*/(0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var campaign, accounts;
      return C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(_this.props.address);
              _context.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onFinalize", /*#__PURE__*/(0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var campaign, accounts;
      return C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(_this.props.address);
              _context2.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(request.value, 'ether')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            color: "orange",
            basic: true,
            onClick: this.onFinalize,
            children: [' ', "Finalize"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwid2ViMyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7OzZnQkFDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsc0JBREssR0FDTUMsNERBQVEsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FEZDtBQUFBO0FBQUEscUJBR1lDLG9FQUFBLEVBSFo7O0FBQUE7QUFHTEMsc0JBSEs7QUFBQTtBQUFBLHFCQUlMTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLGNBQWpCLENBQWdDLE1BQUtMLEtBQUwsQ0FBV00sRUFBM0MsRUFBK0NDLElBQS9DLENBQW9EO0FBQ3pEQyxvQkFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQUQyQyxlQUFwRCxDQUpLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7OzhnQkFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkwsc0JBRE0sR0FDS0MsNERBQVEsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FEYjtBQUFBO0FBQUEscUJBR1dDLG9FQUFBLEVBSFg7O0FBQUE7QUFHTkMsc0JBSE07QUFBQTtBQUFBLHFCQUlOTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJLLGVBQWpCLENBQWlDLE1BQUtULEtBQUwsQ0FBV00sRUFBNUMsRUFBZ0RDLElBQWhELENBQXFEO0FBQzFEQyxvQkFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQUQ0QyxlQUFyRCxDQUpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7NkJBU0o7QUFBQSxVQUNBTyxHQURBLEdBQ2NDLHlEQURkO0FBQUEsVUFDS0MsSUFETCxHQUNjRCwwREFEZDtBQUFBLHdCQUVnQyxLQUFLWCxLQUZyQztBQUFBLFVBRUFNLEVBRkEsZUFFQUEsRUFGQTtBQUFBLFVBRUlPLE9BRkosZUFFSUEsT0FGSjtBQUFBLFVBRWFDLGNBRmIsZUFFYUEsY0FGYjtBQUlSLDBCQUNDLDhEQUFDLEdBQUQ7QUFBQSxnQ0FDQyw4REFBQyxJQUFEO0FBQUEsb0JBQU9SO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDLDhEQUFDLElBQUQ7QUFBQSxvQkFBT08sT0FBTyxDQUFDRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFHQyw4REFBQyxJQUFEO0FBQUEsb0JBQU9iLGtFQUFBLENBQW1CVyxPQUFPLENBQUNHLEtBQTNCLEVBQWtDLE9BQWxDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRCxlQUlDLDhEQUFDLElBQUQ7QUFBQSxvQkFBT0gsT0FBTyxDQUFDSTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQsZUFLQyw4REFBQyxJQUFEO0FBQUEscUJBQ0VKLE9BQU8sQ0FBQ0ssYUFEVixPQUMwQkosY0FEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxELGVBUUMsOERBQUMsSUFBRDtBQUFBLG9CQUNFRCxPQUFPLENBQUNNLFFBQVIsR0FBbUIsSUFBbkIsZ0JBQ0EsOERBQUMsc0RBQUQ7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBc0IsaUJBQUssTUFBM0I7QUFBNEIsbUJBQU8sRUFBRSxLQUFLQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQsZUFlQyw4REFBQyxJQUFEO0FBQUEsb0JBQ0VQLE9BQU8sQ0FBQ00sUUFBUixHQUFtQixJQUFuQixnQkFDQSw4REFBQyxzREFBRDtBQUFRLGlCQUFLLEVBQUMsUUFBZDtBQUF1QixpQkFBSyxNQUE1QjtBQUE2QixtQkFBTyxFQUFFLEtBQUtFLFVBQTNDO0FBQUEsdUJBQ0UsR0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBMEJBOzs7O0VBakR1QkMsNkM7O0FBbUR6QiwrREFBZXpCLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjYwMjBhZWUxOWZmZWFhYmEwYWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcblx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcblx0XHRhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xyXG5cdFx0XHRmcm9tOiBhY2NvdW50c1swXSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdG9uRmluYWxpemUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcblxyXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cdFx0YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcblx0XHRcdGZyb206IGFjY291bnRzWzBdLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG5cdFx0Y29uc3QgeyBpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJvdz5cclxuXHRcdFx0XHQ8Q2VsbD57aWR9PC9DZWxsPlxyXG5cdFx0XHRcdDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfTwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG5cdFx0XHRcdDxDZWxsPlxyXG5cdFx0XHRcdFx0e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fVxyXG5cdFx0XHRcdDwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD5cclxuXHRcdFx0XHRcdHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PlxyXG5cdFx0XHRcdFx0XHRcdEFwcHJvdmVcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD5cclxuXHRcdFx0XHRcdHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cIm9yYW5nZVwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25GaW5hbGl6ZX0+XHJcblx0XHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0XHRGaW5hbGl6ZVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9DZWxsPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=