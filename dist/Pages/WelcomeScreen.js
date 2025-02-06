"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _lucideReact = require("lucide-react");
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TypewriterEffect = function TypewriterEffect(_ref) {
  var text = _ref.text;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayText = _useState2[0],
    setDisplayText = _useState2[1];
  (0, _react.useEffect)(function () {
    var index = 0;
    var timer = setInterval(function () {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260);
    return function () {
      return clearInterval(timer);
    };
  }, [text]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block"
  }, displayText, /*#__PURE__*/_react["default"].createElement("span", {
    className: "animate-pulse"
  }, "|"));
};
var BackgroundEffect = function BackgroundEffect() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float"
  }));
};
var IconButton = function IconButton(_ref2) {
  var Icon = _ref2.Icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group hover:scale-110 transition-transform duration-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
  })));
};
var WelcomeScreen = function WelcomeScreen(_ref3) {
  var onLoadingComplete = _ref3.onLoadingComplete;
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  (0, _react.useEffect)(function () {
    _aos["default"].init({
      duration: 1000,
      once: false,
      mirror: false
    });
    var timer = setTimeout(function () {
      setIsLoading(false);
      setTimeout(function () {
        onLoadingComplete === null || onLoadingComplete === void 0 || onLoadingComplete();
      }, 1000);
    }, 4000);
    return function () {
      return clearTimeout(timer);
    };
  }, [onLoadingComplete]);
  var containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  var childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.AnimatePresence, null, isLoading && /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "fixed inset-0 bg-[#030014]",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: "exit",
    variants: containerVariants
  }, /*#__PURE__*/_react["default"].createElement(BackgroundEffect, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative min-h-screen flex items-center justify-center px-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full max-w-4xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12",
    variants: childVariants
  }, [_lucideReact.Code2, _lucideReact.User, _lucideReact.Github].map(function (Icon, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      "data-aos": "fade-down",
      "data-aos-delay": index * 200
    }, /*#__PURE__*/_react["default"].createElement(IconButton, {
      Icon: Icon
    }));
  })), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "text-center mb-6 sm:mb-8 md:mb-12",
    variants: childVariants
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-2 sm:mb-4"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "data-aos": "fade-right",
    "data-aos-delay": "200",
    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
  }, "Welcome"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    "data-aos": "fade-right",
    "data-aos-delay": "400",
    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
  }, "To"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    "data-aos": "fade-right",
    "data-aos-delay": "600",
    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
  }, "My")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    "data-aos": "fade-up",
    "data-aos-delay": "800",
    className: "inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
  }, "Portfolio"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    "data-aos": "fade-up",
    "data-aos-delay": "1000",
    className: "inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
  }, "Website")))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "text-center",
    variants: childVariants,
    "data-aos": "fade-up",
    "data-aos-delay": "1200"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.eki.my.id",
    className: "inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Globe, {
    className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-600"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
  }, /*#__PURE__*/_react["default"].createElement(TypewriterEffect, {
    text: "www.eki.my.id"
  })))))))));
};
var _default = exports["default"] = WelcomeScreen;