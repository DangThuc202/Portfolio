"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FeatureItem = function FeatureItem(_ref) {
  var feature = _ref.feature;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative mt-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm md:text-base text-gray-300 group-hover:text-white transition-colors"
  }, feature));
};
var handleGithubClick = function handleGithubClick(githubLink) {
  if (githubLink === "Private") {
    _sweetalert["default"].fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#3085d6",
      background: "#030014",
      color: "#ffffff"
    });
    return false;
  }
  return true;
};
var ProjectDetails = function ProjectDetails() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var projects = [{
    id: "Medical-appointment-booking-website",
    Github: "https://github.com/booking-web",
    Description: "This website is designed to make it easier for users to book medical appointments online quickly and efficiently. The main purpose of the website is to assist users, especially patients, in finding doctors, scheduling appointments, and managing their medical needs with convenience and ease.",
    Features: ["Generated statistical data and visualized the top-performing doctor of the month through interactive charts", "Implemented scheduling features, enabling users to book medical appointments seamlessly", "Integrated multilingual support on the user interface using React-i18next for an inclusive experience", "Designed a calendar feature for doctors using React Big Calendar, allowing them to view appointment details and mark unavailable days efficiently", "Set up automated email reminders to notify users about their appointments"],
    Img: "https://res.cloudinary.com/dsb4qpz24/image/upload/v1738566744/cecb2300-976e-4cae-bfdf-9fbd036025e7_jg34ny.jpg",
    Title: "Medical appointment booking website"
  }, {
    id: "Backend-eCommerce",
    Github: "https://github.com/DangThuc202/Backend-eCommerce-nodejs-",
    Description: "This project is a backend system for an eCommerce platform, designed to provide a robust and scalable solution for online shopping. The main goal is to implement core functionalities such as user authentication, product management, order processing, and payment integration. It ensures secure transactions, efficient inventory tracking, and seamless API communication, offering a reliable foundation for eCommerce applications to deliver a smooth shopping experience",
    Features: ["Storage of hot product list in cache using Redis.", "Use of public/private key pair for transaction authentication and user verification.", "Increase in product quantity in the cart will lead to price increase."],
    Title: "Backend eCommerce"
  }];
  var project = projects.find(function (p) {
    return p.id === id;
  });
  if (!project) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "min-h-screen bg-[#030014] flex items-center justify-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center space-y-6 animate-fadeIn"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
    }), /*#__PURE__*/_react["default"].createElement("h2", {
      className: "text-xl md:text-3xl font-bold text-white"
    }, "Loading Project...")));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -inset-[10px] opacity-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return navigate(-1);
    },
    className: "group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowLeft, {
    className: "w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Back")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Projects"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronRight, {
    className: "w-3 h-3 md:w-4 md:h-4"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white/90 truncate"
  }, project.Title))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid lg:grid-cols-2 gap-8 md:gap-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6 md:space-y-10 animate-slideInLeft"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4 md:space-y-6"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
  }, project.Title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative h-1 w-16 md:w-24"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "prose prose-invert max-w-none"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-base md:text-lg text-gray-300/90 leading-relaxed"
  }, project.Description)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap gap-3 md:gap-4"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: project.Github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base",
    onClick: function onClick(e) {
      return !handleGithubClick(project.Github) && e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]"
  }), /*#__PURE__*/_react["default"].createElement(_lucideReact.Github, {
    className: "relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "relative font-medium"
  }, "Github")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6 md:space-y-10 animate-slideInRight"
  }, project.Img ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: project.Img,
    alt: project.Title,
    className: "w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-semibold text-white/90 flex items-center gap-3"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Star, {
    className: "w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300"
  }), "Key Features"), project.Features.length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-none space-y-2"
  }, project.Features.map(function (feature, index) {
    return /*#__PURE__*/_react["default"].createElement(FeatureItem, {
      key: index,
      feature: feature
    });
  })) : /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400 opacity-50"
  }, "No features added.")))))), /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        @keyframes blob {\n          0% {\n            transform: translate(0px, 0px) scale(1);\n          }\n          33% {\n            transform: translate(30px, -50px) scale(1.1);\n          }\n          66% {\n            transform: translate(-20px, 20px) scale(0.9);\n          }\n          100% {\n            transform: translate(0px, 0px) scale(1);\n          }\n        }\n        .animate-blob {\n          animation: blob 10s infinite;\n        }\n        .animation-delay-2000 {\n          animation-delay: 2s;\n        }\n        .animation-delay-4000 {\n          animation-delay: 4s;\n        }\n        .animate-fadeIn {\n          animation: fadeIn 0.7s ease-out;\n        }\n        .animate-slideInLeft {\n          animation: slideInLeft 0.7s ease-out;\n        }\n        .animate-slideInRight {\n          animation: slideInRight 0.7s ease-out;\n        }\n        @keyframes fadeIn {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n        @keyframes slideInLeft {\n          from {\n            opacity: 0;\n            transform: translateX(-30px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n        @keyframes slideInRight {\n          from {\n            opacity: 0;\n            transform: translateX(30px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n      "));
};
var _default = exports["default"] = ProjectDetails;