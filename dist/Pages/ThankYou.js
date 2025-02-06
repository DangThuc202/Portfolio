"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lucideReact = require("lucide-react");
var _reactRouterDom = require("react-router-dom");
var ThankYouPage = function ThankYouPage() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen flex items-center justify-center px-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.CheckCircle, {
    className: "w-16 h-16 text-[#6366f1]"
  })), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
  }, "Thank You!"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400 text-lg mb-8"
  }, "Your message has been received. I'll get back to you as soon as possible."), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
  }, "Back to Home")));
};
var _default = exports["default"] = ThankYouPage;