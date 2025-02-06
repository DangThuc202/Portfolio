"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _reactRouterDom = require("react-router-dom");
var _SocialLinks = _interopRequireDefault(require("../components/SocialLinks"));
var _Commentar = _interopRequireDefault(require("../components/Commentar"));
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ContactPage = function ContactPage() {
  var _useState = (0, _react.useState)({
      name: "",
      email: "",
      message: ""
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isSubmitting = _useState4[0],
    setIsSubmitting = _useState4[1];
  (0, _react.useEffect)(function () {
    _aos["default"].init({
      once: false
    });
  }, []);
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, name, value));
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var form, _formData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setIsSubmitting(true);
            _sweetalert["default"].fire({
              title: 'Sending Message...',
              html: 'Please wait while we send your message',
              allowOutsideClick: false,
              didOpen: function didOpen() {
                _sweetalert["default"].showLoading();
              }
            });
            _context.prev = 3;
            // Get form data
            form = e.target;
            _formData = new FormData(form); // Submit form
            _context.next = 8;
            return form.submit();
          case 8:
            // Show success message
            _sweetalert["default"].fire({
              title: 'Success!',
              text: 'Your message has been sent successfully!',
              icon: 'success',
              confirmButtonColor: '#6366f1',
              timer: 2000,
              timerProgressBar: true
            });

            // Reset form
            setFormData({
              name: "",
              email: "",
              message: ""
            });
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            _sweetalert["default"].fire({
              title: 'Error!',
              text: 'Something went wrong. Please try again later.',
              icon: 'error',
              confirmButtonColor: '#6366f1'
            });
          case 15:
            _context.prev = 15;
            setIsSubmitting(false);
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12, 15, 18]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    "data-aos": "fade-down",
    "data-aos-duration": "1000",
    className: "inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: "#6366f1",
      backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "Contact Me")), /*#__PURE__*/_react["default"].createElement("p", {
    "data-aos": "fade-up",
    "data-aos-duration": "1100",
    className: "text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
  }, "Open for professional connections.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-auto py-10 flex items-center justify-center px-[5%] md:px-0",
    id: "Contact"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1200",
    className: "bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-start mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
  }, "Connect with me"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400"
  }, "Available for collaboration and opportunities.")), /*#__PURE__*/_react["default"].createElement(_lucideReact.Share2, {
    className: "w-10 h-10 text-[#6366f1] opacity-50"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6"
  }, /*#__PURE__*/_react["default"].createElement(_SocialLinks["default"], null))))), /*#__PURE__*/_react["default"].createElement("div", null));
};
var _default = exports["default"] = ContactPage;