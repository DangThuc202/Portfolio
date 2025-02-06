"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var TechStackIcon = function TechStackIcon(_ref) {
  var TechStackIcon = _ref.TechStackIcon,
    Language = _ref.Language;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: TechStackIcon,
    alt: "".concat(Language, " icon"),
    className: "relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-center"
  }, Language));
};
var _default = exports["default"] = TechStackIcon;