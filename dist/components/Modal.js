"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ProjectCardModal = function ProjectCardModal(_ref) {
  var title = _ref.title,
    description = _ref.description,
    link = _ref.link;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-colors duration-200",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm"
  }, "Details"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowRight, {
    className: "w-4 h-4"
  })), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-full max-w-md rounded-lg bg-gray-900 p-6 text-white shadow-lg animate-slide-up sm:p-8",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute top-4 right-4 rounded-md p-2 hover:bg-gray-800 transition-colors duration-200",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Eye, {
    className: "h-5 w-5"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-4 text-2xl font-bold"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-6 text-gray-400"
  }, description), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200"
  }, "Live Demo ", /*#__PURE__*/_react["default"].createElement(_lucideReact.ExternalLink, {
    className: "ml-2 inline-block h-5 w-5"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition-colors duration-200",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Close")))));
};
var _default = exports["default"] = ProjectCardModal;