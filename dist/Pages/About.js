"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Memoized Components
var Header = /*#__PURE__*/(0, _react.memo)(function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center lg:mb-8 mb-2 px-[5%]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-block relative group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
    "data-aos": "zoom-in-up",
    "data-aos-duration": "600"
  }, "About Me")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2",
    "data-aos": "zoom-in-up",
    "data-aos-duration": "800"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Sparkles, {
    className: "w-5 h-5 text-purple-400"
  }), "Transforming ideas into digital experiences", /*#__PURE__*/_react["default"].createElement(_lucideReact.Sparkles, {
    className: "w-5 h-5 text-purple-400"
  })));
});
var ProfileImage = /*#__PURE__*/(0, _react.memo)(function () {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-6 opacity-[25%] z-0 hidden sm:block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "/Photo.png",
    alt: "Profile",
    className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2",
    loading: "lazy"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow"
  }))))));
});
var StatCard = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var Icon = _ref.icon,
    color = _ref.color,
    value = _ref.value,
    label = _ref.label,
    description = _ref.description,
    animation = _ref.animation;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-aos": animation,
    "data-aos-duration": 1300,
    className: "relative group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -z-10 inset-0 bg-gradient-to-br ".concat(color, " opacity-10 group-hover:opacity-20 transition-opacity duration-300")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-8 h-8 text-white"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-4xl font-bold text-white",
    "data-aos": "fade-up-left",
    "data-aos-duration": "1500",
    "data-aos-anchor-placement": "top-bottom"
  }, value)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm uppercase tracking-wider text-gray-300 mb-2",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
    "data-aos-anchor-placement": "top-bottom"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-gray-400",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    "data-aos-anchor-placement": "top-bottom"
  }, description), /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowUpRight, {
    className: "w-4 h-4 text-white/50 group-hover:text-white transition-colors"
  })))));
});
var AboutPage = function AboutPage() {
  // Memoized calculations
  var _useMemo = (0, _react.useMemo)(function () {
      var storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
      var storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
      var experience = "< 1";
      return {
        totalProjects: storedProjects.length,
        totalCertificates: storedCertificates.length,
        YearExperience: experience
      };
    }, []),
    totalProjects = _useMemo.totalProjects,
    totalCertificates = _useMemo.totalCertificates,
    YearExperience = _useMemo.YearExperience;

  // Optimized AOS initialization
  (0, _react.useEffect)(function () {
    var initAOS = function initAOS() {
      _aos["default"].init({
        once: false
      });
    };
    initAOS();

    // Debounced resize handler
    var resizeTimer;
    var handleResize = function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized stats data

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0",
    id: "About"
  }, /*#__PURE__*/_react["default"].createElement(Header, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full mx-auto pt-8 sm:pt-12 relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6 text-center lg:text-left"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl sm:text-4xl lg:text-5xl font-bold",
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
  }, "Hello, I'm"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block mt-2 text-gray-200",
    "data-aos": "fade-right",
    "data-aos-duration": "1300"
  }, "Dang Hoang Thuc")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0",
    "data-aos": "fade-right",
    "data-aos-duration": "1500"
  }, "A passionate React.js developer with less than 1 year of experience crafting dynamic, responsive user interfaces and bringing designs to life. My career goal is to deepen my expertise in frontend development while broadening my capabilities in backend technologies, enabling me to excel as a full-stack developer and deliver comprehensive, impactful solutions. while contributing to impactful projects within a collaborative and innovative team. Outside of work, I stay active at the gym and sharpen my coding skills on Codewars, with a strong focus on mastering advanced JavaScript and React features.")), /*#__PURE__*/_react["default"].createElement(ProfileImage, null))), /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        @keyframes float {\n          0%,\n          100% {\n            transform: translateY(0);\n          }\n          50% {\n            transform: translateY(-20px);\n          }\n        }\n        @keyframes spin-slower {\n          to {\n            transform: rotate(360deg);\n          }\n        }\n        .animate-bounce-slow {\n          animation: bounce 3s infinite;\n        }\n        .animate-pulse-slow {\n          animation: pulse 3s infinite;\n        }\n        .animate-spin-slower {\n          animation: spin-slower 8s linear infinite;\n        }\n      "));
};
var _default = exports["default"] = /*#__PURE__*/(0, _react.memo)(AboutPage);