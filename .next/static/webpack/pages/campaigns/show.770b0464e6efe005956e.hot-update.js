self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\marko\\kickstart\\pages\\campaigns\\show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var CampaignShow = /*#__PURE__*/function (_Component) {
  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CampaignShow);

    return _super.apply(this, arguments);
  }

  (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount;
      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become a contributor'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request made by the manager in order to withdraw money from the contract. Requests must be approved by contributors'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this account'
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ETH)',
        description: 'The balance that this account could spend'
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 10
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "Campaign Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              width: 10,
              children: this.renderCards()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              width: 6,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_12__.default, {
                address: this.props.address
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_13__.Link, {
                route: "/campaigns/".concat(this.props.address, "/requests"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
                    primary: true,
                    children: "View Requests"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 4
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_marko_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var campaign, summary;
        return C_Users_marko_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
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

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2ViMyIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7a0NBZ0JTO0FBQUEsd0JBT1QsS0FBS0MsS0FQSTtBQUFBLFVBRVpDLE9BRlksZUFFWkEsT0FGWTtBQUFBLFVBR1pDLE9BSFksZUFHWkEsT0FIWTtBQUFBLFVBSVpDLG1CQUpZLGVBSVpBLG1CQUpZO0FBQUEsVUFLWkMsYUFMWSxlQUtaQSxhQUxZO0FBQUEsVUFNWkMsY0FOWSxlQU1aQSxjQU5ZO0FBU2IsVUFBTUMsS0FBSyxHQUFHLENBQ2I7QUFDQ0MsY0FBTSxFQUFFTCxPQURUO0FBRUNNLFlBQUksRUFBRSxvQkFGUDtBQUdDQyxtQkFBVyxFQUNWLDZFQUpGO0FBS0NDLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCO0FBTFIsT0FEYSxFQVFiO0FBQ0NKLGNBQU0sRUFBRUosbUJBRFQ7QUFFQ0ssWUFBSSxFQUFFLDRCQUZQO0FBR0NDLG1CQUFXLEVBQ1Y7QUFKRixPQVJhLEVBY2I7QUFDQ0YsY0FBTSxFQUFFSCxhQURUO0FBRUNJLFlBQUksRUFBRSxvQkFGUDtBQUdDQyxtQkFBVyxFQUNWO0FBSkYsT0FkYSxFQW9CYjtBQUNDRixjQUFNLEVBQUVGLGNBRFQ7QUFFQ0csWUFBSSxFQUFFLHFCQUZQO0FBR0NDLG1CQUFXLEVBQ1Y7QUFKRixPQXBCYSxFQTBCYjtBQUNDRixjQUFNLEVBQUVLLGtFQUFBLENBQW1CWCxPQUFuQixFQUE0QixPQUE1QixDQURUO0FBRUNPLFlBQUksRUFBRSx3QkFGUDtBQUdDQyxtQkFBVyxFQUFFO0FBSGQsT0ExQmEsQ0FBZDtBQWlDQSwwQkFBTyw4REFBQywwREFBRDtBQUFZLGFBQUssRUFBRUg7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0E7Ozs2QkFFUTtBQUNSLDBCQUNDLDhEQUFDLHVEQUFEO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQyw4REFBQyxvREFBRDtBQUFBLGtDQUNDLDhEQUFDLHdEQUFEO0FBQUEsb0NBQ0MsOERBQUMsMkRBQUQ7QUFBYSxtQkFBSyxFQUFFLEVBQXBCO0FBQUEsd0JBQXlCLEtBQUtPLFdBQUw7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUdDLDhEQUFDLDJEQUFEO0FBQWEsbUJBQUssRUFBRSxDQUFwQjtBQUFBLHFDQUNDLDhEQUFDLGdFQUFEO0FBQWdCLHVCQUFPLEVBQUUsS0FBS2IsS0FBTCxDQUFXYztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFRQyw4REFBQyx3REFBRDtBQUFBLG1DQUNDLDhEQUFDLDJEQUFEO0FBQUEscUNBQ0MsOERBQUMsMENBQUQ7QUFBTSxxQkFBSyx1QkFBZ0IsS0FBS2QsS0FBTCxDQUFXYyxPQUEzQixjQUFYO0FBQUEsdUNBQ0M7QUFBQSx5Q0FDQyw4REFBQyxzREFBRDtBQUFRLDJCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQXVCQTs7OztnU0FwRjRCZCxLOzs7Ozs7QUFDdEJlLHdCLEdBQVdDLDREQUFRLENBQUNoQixLQUFLLENBQUNpQixLQUFOLENBQVlILE9BQWIsQzs7dUJBRUhDLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEU7OztBQUFoQkMsdUI7aURBRUM7QUFDTlAseUJBQU8sRUFBRWQsS0FBSyxDQUFDaUIsS0FBTixDQUFZSCxPQURmO0FBRU5YLHFDQUFtQixFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FGdEI7QUFHTnBCLHlCQUFPLEVBQUVvQixPQUFPLENBQUMsQ0FBRCxDQUhWO0FBSU5qQiwrQkFBYSxFQUFFaUIsT0FBTyxDQUFDLENBQUQsQ0FKaEI7QUFLTmhCLGdDQUFjLEVBQUVnQixPQUFPLENBQUMsQ0FBRCxDQUxqQjtBQU1ObkIseUJBQU8sRUFBRW1CLE9BQU8sQ0FBQyxDQUFEO0FBTlYsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOa0JDLDRDOztBQXdGM0IsK0RBQWV2QixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9zaG93Ljc3MGIwNDY0ZTZlZmUwMDU5NTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuXHJcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcblx0XHRcdG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXHJcblx0XHRcdGJhbGFuY2U6IHN1bW1hcnlbMV0sXHJcblx0XHRcdHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcblx0XHRcdGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG5cdFx0XHRtYW5hZ2VyOiBzdW1tYXJ5WzRdLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckNhcmRzKCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRiYWxhbmNlLFxyXG5cdFx0XHRtYW5hZ2VyLFxyXG5cdFx0XHRtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG5cdFx0XHRyZXF1ZXN0c0NvdW50LFxyXG5cdFx0XHRhcHByb3ZlcnNDb3VudCxcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBtYW5hZ2VyLFxyXG5cdFx0XHRcdG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0J1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leScsXHJcblx0XHRcdFx0c3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuXHRcdFx0XHRtZXRhOiAnTWluaW11bSBDb250cmlidXRpb24gKHdlaSknLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0J1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYSBjb250cmlidXRvcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnQSByZXF1ZXN0IG1hZGUgYnkgdGhlIG1hbmFnZXIgaW4gb3JkZXIgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgY29udHJpYnV0b3JzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0J051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgYWNjb3VudCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcclxuXHRcdFx0XHRtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoRVRIKScsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSB0aGF0IHRoaXMgYWNjb3VudCBjb3VsZCBzcGVuZCcsXHJcblx0XHRcdH0sXHJcblx0XHRdO1xyXG5cclxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XHJcblx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZC5Sb3c+XHJcblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcblx0XHRcdFx0XHRcdFx0PENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdFx0XHRcdDwvR3JpZC5Sb3c+XHJcblx0XHRcdFx0XHQ8R3JpZC5Sb3c+XHJcblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5PlZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvR3JpZC5Db2x1bW4+XHJcblx0XHRcdFx0XHQ8L0dyaWQuUm93PlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9