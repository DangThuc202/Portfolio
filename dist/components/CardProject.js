"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var CardProject = function CardProject(_ref) {
  var Img = _ref.Img,
    Title = _ref.Title,
    Description = _ref.Description,
    id = _ref.id;
  // Handle kasus ketika ProjectLink kosong

  var handleDetails = function handleDetails(e) {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "group relative w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative p-5 z-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative overflow-hidden rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: Img,
    alt: Title,
    className: "w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 space-y-3"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent"
  }, Title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-300/80 text-sm leading-relaxed line-clamp-2"
  }, Description), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4 flex items-center justify-between"
  }, id ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/project/".concat(id),
    onClick: handleDetails,
    className: "inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm font-medium"
  }, "Details"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowRight, {
    className: "w-4 h-4"
  })) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-500 text-sm"
  }, "Details Not Available"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"
  }))));
};
var _default = exports["default"] = CardProject;