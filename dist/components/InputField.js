"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var InputField = function InputField(_ref) {
  var field = _ref.field,
    label = _ref.label,
    Icon = _ref.icon,
    formData = _ref.formData,
    handleChange = _ref.handleChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];

  // Helper function to generate input classes dynamically
  var getInputClasses = function getInputClasses() {
    var isTextArea = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var baseClasses = "\n      w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent \n      focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 \n      focus:ring-offset-[#1c1e26] transition-all duration-300 peer\n    ";
    var hoverFocusClasses = isFocused ? "shadow-[0_4px_12px_rgba(99,102,241,0.4)] border-[#6366f1]" : "border-white/20 hover:border-[#6366f1]";
    return "".concat(baseClasses, " ").concat(hoverFocusClasses, " ").concat(isTextArea ? "h-52 pt-12" : "pl-12");
  };

  // Render input or textarea based on the field type
  var renderInputContent = function renderInputContent() {
    if (field === "message") {
      return /*#__PURE__*/_react["default"].createElement("textarea", {
        id: field,
        name: field,
        placeholder: label,
        value: formData[field],
        onChange: handleChange,
        onFocus: function onFocus() {
          return setIsFocused(true);
        },
        onBlur: function onBlur() {
          return setIsFocused(false);
        },
        className: getInputClasses(true),
        required: true
      });
    }
    return /*#__PURE__*/_react["default"].createElement("input", {
      id: field,
      type: field === "email" ? "email" : "text",
      name: field,
      placeholder: label,
      value: formData[field],
      onChange: handleChange,
      onFocus: function onFocus() {
        return setIsFocused(true);
      },
      onBlur: function onBlur() {
        return setIsFocused(false);
      },
      className: getInputClasses(),
      required: true
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-full group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute left-4 top-4 flex items-center space-x-2 text-gray-400 transition-colors group-hover:text-[#6366f1]"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-5 h-5"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: field,
    className: "\n            absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 \n            peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 \n            peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base \n            peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[#6366f1] peer-focus:text-sm\n          "
  }, label)), renderInputContent(), /*#__PURE__*/_react["default"].createElement("div", {
    className: "\n          absolute inset-0 border rounded-xl pointer-events-none \n          transition-all duration-300 \n          ".concat(isFocused ? "border-[#6366f1]" : "border-transparent", "\n        ")
  }));
};
var _default = exports["default"] = InputField;