"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _reactRouterDom = require("react-router-dom");
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
var _Home = _interopRequireDefault(require("./Pages/Home"));
var _About = _interopRequireDefault(require("./Pages/About"));
var _Background = _interopRequireDefault(require("./components/Background"));
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _Portfolio = _interopRequireDefault(require("./Pages/Portfolio"));
var _Contact = _interopRequireDefault(require("./Pages/Contact"));
var _ProjectDetail = _interopRequireDefault(require("./components/ProjectDetail"));
var _WelcomeScreen = _interopRequireDefault(require("./Pages/WelcomeScreen"));
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var LandingPage = function LandingPage(_ref) {
  var showWelcome = _ref.showWelcome,
    setShowWelcome = _ref.setShowWelcome;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_framerMotion.AnimatePresence, {
    mode: "wait"
  }, showWelcome && /*#__PURE__*/_react["default"].createElement(_WelcomeScreen["default"], {
    onLoadingComplete: function onLoadingComplete() {
      return setShowWelcome(false);
    }
  })), !showWelcome && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_Background["default"], null), /*#__PURE__*/_react["default"].createElement(_Home["default"], null), /*#__PURE__*/_react["default"].createElement(_About["default"], null), /*#__PURE__*/_react["default"].createElement(_Portfolio["default"], null), /*#__PURE__*/_react["default"].createElement(_Contact["default"], null), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("center", null, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block text-sm pb-4 text-gray-500 text-center dark:text-gray-400"
  }, "\xA9 2025", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://flowbite.com/",
    className: "hover:underline"
  }, "Thuc Dang"), ". All Rights Reserved.")))));
};
var ProjectPageLayout = function ProjectPageLayout() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ProjectDetail["default"], null), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("center", null, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block text-sm pb-4 text-gray-500 text-center dark:text-gray-400"
  }, "\xA9 2023", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://flowbite.com/",
    className: "hover:underline"
  }, "EkiZR\u2122"), ". All Rights Reserved."))));
};
function App() {
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showWelcome = _useState2[0],
    setShowWelcome = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(LandingPage, {
      showWelcome: showWelcome,
      setShowWelcome: setShowWelcome
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/project/:id",
    element: /*#__PURE__*/_react["default"].createElement(ProjectPageLayout, null)
  })));
}
var _default = exports["default"] = App;