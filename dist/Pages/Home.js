"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _dotlottieReact = require("@lottiefiles/dotlottie-react");
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Memoized Components
var StatusBadge = /*#__PURE__*/(0, _react.memo)(function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-block animate-float lg:mx-0",
    "data-aos": "zoom-in",
    "data-aos-delay": "400"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Sparkles, {
    className: "sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400"
  }), "Ready to Innovate"))));
});
var MainTitle = /*#__PURE__*/(0, _react.memo)(function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-2",
    "data-aos": "fade-up",
    "data-aos-delay": "600"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative inline-block"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
  }, "Frontend")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative inline-block mt-2"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
  }, "Developer"))));
});
var TechStack = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var tech = _ref.tech;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
  }, tech);
});
var CTAButton = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var href = _ref2.href,
    text = _ref2.text,
    Icon = _ref2.icon;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "group relative w-[160px]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10"
  }, text), /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-4 h-4 text-gray-200 ".concat(text === "Contact" ? "group-hover:translate-x-1" : "group-hover:rotate-45", " transform transition-all duration-300 z-10")
  })))));
});
var SocialLink = /*#__PURE__*/(0, _react.memo)(function (_ref3) {
  var Icon = _ref3.icon,
    link = _ref3.link;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "group relative p-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
  }))));
});

// Constants
var TYPING_SPEED = 100;
var ERASING_SPEED = 50;
var PAUSE_DURATION = 2000;
var WORDS = ["Network & Telecom Student", "Tech Enthusiast"];
var TECH_STACK = ["ReactJS", "Javascript", "Tailwind"];
var SOCIAL_LINKS = [{
  icon: _lucideReact.Github,
  link: "https://github.com/DangThuc202"
}, {
  icon: _lucideReact.Linkedin,
  link: "https://www.linkedin.com/in/thuc-dang-633821301/"
}];
var Home = function Home() {
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isTyping = _useState4[0],
    setIsTyping = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    wordIndex = _useState6[0],
    setWordIndex = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    charIndex = _useState8[0],
    setCharIndex = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isLoaded = _useState10[0],
    setIsLoaded = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isHovering = _useState12[0],
    setIsHovering = _useState12[1];

  // Optimize AOS initialization
  (0, _react.useEffect)(function () {
    var initAOS = function initAOS() {
      _aos["default"].init({
        once: true,
        offset: 10
      });
    };
    initAOS();
    window.addEventListener("resize", initAOS);
    return function () {
      return window.removeEventListener("resize", initAOS);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setIsLoaded(true);
    return function () {
      return setIsLoaded(false);
    };
  }, []);

  // Optimize typing effect
  var handleTyping = (0, _react.useCallback)(function () {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(function (prev) {
          return prev + WORDS[wordIndex][charIndex];
        });
        setCharIndex(function (prev) {
          return prev + 1;
        });
      } else {
        setTimeout(function () {
          return setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(function (prev) {
          return prev.slice(0, -1);
        });
        setCharIndex(function (prev) {
          return prev - 1;
        });
      } else {
        setWordIndex(function (prev) {
          return (prev + 1) % WORDS.length;
        });
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);
  (0, _react.useEffect)(function () {
    var timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return function () {
      return clearTimeout(timeout);
    };
  }, [handleTyping]);

  // Lottie configuration
  var lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true
    },
    style: {
      width: "100%",
      height: "100%"
    },
    className: "w-full h-full transition-all duration-500 ".concat(isHovering ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2" : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]")
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-[#030014] overflow-hidden",
    id: "Home"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-10 transition-all duration-1000 ".concat(isLoaded ? "opacity-100" : "opacity-0")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0",
    "data-aos": "fade-right",
    "data-aos-delay": "200"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4 sm:space-y-6"
  }, /*#__PURE__*/_react["default"].createElement(StatusBadge, null), /*#__PURE__*/_react["default"].createElement(MainTitle, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-8 flex items-center",
    "data-aos": "fade-up",
    "data-aos-delay": "800"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light"
  }, text), /*#__PURE__*/_react["default"].createElement("span", {
    className: "w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light",
    "data-aos": "fade-up",
    "data-aos-delay": "1000"
  }, "Welcome to my Portfolio"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap gap-3 justify-start cursor-pointer",
    "data-aos": "fade-up",
    "data-aos-delay": "1200"
  }, TECH_STACK.map(function (tech, index) {
    return /*#__PURE__*/_react["default"].createElement(TechStack, {
      key: index,
      tech: tech
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row gap-3 w-full justify-start",
    "data-aos": "fade-up",
    "data-aos-delay": "1400"
  }, /*#__PURE__*/_react["default"].createElement(CTAButton, {
    href: "#Portfolio",
    text: "Projects",
    icon: _lucideReact.ExternalLink
  }), /*#__PURE__*/_react["default"].createElement(CTAButton, {
    href: "#Contact",
    text: "Contact",
    icon: _lucideReact.Mail
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden sm:flex gap-4 justify-start",
    "data-aos": "fade-up",
    "data-aos-delay": "1600"
  }, SOCIAL_LINKS.map(function (social, index) {
    return /*#__PURE__*/_react["default"].createElement(SocialLink, (0, _extends2["default"])({
      key: index
    }, social));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0",
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    },
    "data-aos": "fade-left",
    "data-aos-delay": "600"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-full opacity-90"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ".concat(isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-10 w-full opacity-90 transform transition-transform duration-500 ".concat(isHovering ? "scale-105" : "scale-100")
  }, /*#__PURE__*/_react["default"].createElement(_dotlottieReact.DotLottieReact, lottieOptions)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 pointer-events-none transition-all duration-700 ".concat(isHovering ? "opacity-50" : "opacity-20")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ".concat(isHovering ? "scale-110" : "scale-100")
  }))))))));
};
var _default = exports["default"] = /*#__PURE__*/(0, _react.memo)(Home);