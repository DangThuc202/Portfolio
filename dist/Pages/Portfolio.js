"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FullWidthTabs;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _firebase = require("../firebase");
var _firestore = require("firebase/firestore");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSwipeableViewsReact18Fix = _interopRequireDefault(require("react-swipeable-views-react-18-fix"));
var _styles = require("@mui/material/styles");
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _CardProject = _interopRequireDefault(require("../components/CardProject"));
var _TechStackIcon = _interopRequireDefault(require("../components/TechStackIcon"));
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
var _Certificate = _interopRequireDefault(require("../components/Certificate"));
var _lucideReact = require("lucide-react");
var _Resume = _interopRequireDefault(require("../components/Resume"));
var _excluded = ["children", "value", "index"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TabPanel(_ref) {
  var children = _ref.children,
    value = _ref.value,
    index = _ref.index,
    other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "full-width-tabpanel-".concat(index),
    "aria-labelledby": "full-width-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      p: {
        xs: 1,
        sm: 3
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, children)));
}
TabPanel.propTypes = {
  children: _propTypes["default"].node,
  index: _propTypes["default"].number.isRequired,
  value: _propTypes["default"].number.isRequired
};
function a11yProps(index) {
  return {
    id: "full-width-tab-".concat(index),
    "aria-controls": "full-width-tabpanel-".concat(index)
  };
}
var a = [{
  img: "certificate1.png"
}];
var techStacks = [{
  icon: "javascript.svg",
  language: "JavaScript"
}, {
  icon: "typescript.svg",
  language: "Typescript"
}, {
  icon: "tailwind.svg",
  language: "Tailwind CSS"
}, {
  icon: "reactjs.svg",
  language: "ReactJS"
}, {
  icon: "nodejs.svg",
  language: "Node JS"
}, {
  icon: "docker.svg",
  language: "Docker"
}, {
  icon: "bootstrap.svg",
  language: "Bootstrap"
}, {
  icon: "ant-design.svg",
  language: "Ant Design"
}, {
  icon: "MUI.svg",
  language: "Material UI"
}, {
  icon: "linux.png",
  language: "Linux"
}, {
  icon: "mongo.svg",
  language: "Mongo DB"
}, {
  icon: "sql.svg",
  language: "SQL"
}];
var b = [{
  id: "Medical-appointment-booking-website",
  Description: "This website is designed to make it easier for users to book medical appointments online quickly and efficiently. The main purpose of the website is to assist users, especially patients, in finding doctors, scheduling appointments, and managing their medical needs with convenience and ease.",
  Img: "https://res.cloudinary.com/dsb4qpz24/image/upload/v1738566744/cecb2300-976e-4cae-bfdf-9fbd036025e7_jg34ny.jpg",
  Title: "Medical appointment booking website "
}, {
  id: "Backend-eCommerce ",
  Description: "This project is a backend system for an eCommerce platform, designed to provide a robust and scalable solution for online shopping. The main goal is to implement core functionalities such as user authentication, product management, order processing, and payment integration. It ensures secure transactions, efficient inventory tracking, and seamless API communication, offering a reliable foundation for eCommerce applications to deliver a smooth shopping experience",
  Img: "https://lh3.googleusercontent.com/pw/AP1GczN8nCgz3uDAYTz959bL9wjcgXhPsT2-czigri6o-HkkyyIJ2uEagCkxFUsJtdcFFKoSblBWf0VUi_UY2bgrcHCmgG-cFxBz8zH7CM9AM0B6YpxmkMJ1gmL6dGSzzb0efVgKBcnDg_4eWmhmv0TSypNx=w1326-h679-s-no-gm?authuser=0",
  Title: "Backend eCommerce"
}];
function FullWidthTabs() {
  var theme = (0, _styles.useTheme)();
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    projects = _useState4[0],
    setProjects = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    certificates = _useState6[0],
    setCertificates = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    showAllProjects = _useState8[0],
    setShowAllProjects = _useState8[1];
  var isMobile = window.innerWidth < 768;
  var initialItems = isMobile ? 4 : 6;
  (0, _react.useEffect)(function () {
    // Initialize AOS once
    _aos["default"].init({
      once: false // This will make animations occur only once
    });
  }, []);
  var fetchData = (0, _react.useCallback)(/*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var projectCollection, certificateCollection, _yield$Promise$all, _yield$Promise$all2, projectSnapshot, certificateSnapshot, projectData, certificateData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          projectCollection = (0, _firebase.collection)(_firebase.db, "projects");
          certificateCollection = (0, _firebase.collection)(_firebase.db, "certificates");
          _context.next = 5;
          return Promise.all([(0, _firestore.getDocs)(projectCollection), (0, _firestore.getDocs)(certificateCollection)]);
        case 5:
          _yield$Promise$all = _context.sent;
          _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
          projectSnapshot = _yield$Promise$all2[0];
          certificateSnapshot = _yield$Promise$all2[1];
          projectData = projectSnapshot.docs.map(function (doc) {
            return _objectSpread(_objectSpread({
              id: doc.id
            }, doc.data()), {}, {
              TechStack: doc.data().TechStack || []
            });
          });
          certificateData = certificateSnapshot.docs.map(function (doc) {
            return doc.data();
          });
          setProjects(projectData);
          setCertificates(certificateData);

          // Store in localStorage
          localStorage.setItem("projects", JSON.stringify(projectData));
          localStorage.setItem("certificates", JSON.stringify(certificateData));
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching data:", _context.t0);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  })), []);
  (0, _react.useEffect)(function () {
    fetchData();
  }, [fetchData]);
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  var displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden",
    id: "Portfolio"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center pb-10",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: "#6366f1",
      backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "Portfolio Showcase")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
  }, "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.")), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    elevation: 0,
    sx: {
      bgcolor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "20px",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
        backdropFilter: "blur(10px)",
        zIndex: 0
      }
    },
    className: "md:px-4"
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: value,
    onChange: handleChange,
    textColor: "secondary",
    indicatorColor: "secondary",
    variant: "fullWidth",
    sx: {
      // Existing styles remain unchanged
      minHeight: "70px",
      "& .MuiTab-root": {
        fontSize: {
          xs: "0.9rem",
          md: "1rem"
        },
        fontWeight: "600",
        color: "#94a3b8",
        textTransform: "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "20px 0",
        zIndex: 1,
        margin: "8px",
        borderRadius: "12px",
        "&:hover": {
          color: "#ffffff",
          backgroundColor: "rgba(139, 92, 246, 0.1)",
          transform: "translateY(-2px)",
          "& .lucide": {
            transform: "scale(1.1) rotate(5deg)"
          }
        },
        "&.Mui-selected": {
          color: "#fff",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
          boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
          "& .lucide": {
            color: "#a78bfa"
          }
        }
      },
      "& .MuiTabs-indicator": {
        height: 0
      },
      "& .MuiTabs-flexContainer": {
        gap: "8px"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.User, {
      className: "mb-2 w-5 h-5 transition-all duration-300"
    }),
    label: "Resume"
  }, a11yProps(0))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Code, {
      className: "mb-2 w-5 h-5 transition-all duration-300"
    }),
    label: "Projects"
  }, a11yProps(1))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Award, {
      className: "mb-2 w-5 h-5 transition-all duration-300"
    }),
    label: "Certificates"
  }, a11yProps(2))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Boxes, {
      className: "mb-2 w-5 h-5 transition-all duration-300"
    }),
    label: "Tech Stack"
  }, a11yProps(3))))), /*#__PURE__*/_react["default"].createElement(_reactSwipeableViewsReact18Fix["default"], {
    axis: theme.direction === "rtl" ? "x-reverse" : "x",
    index: value,
    onChangeIndex: setValue
  }, /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 0,
    dir: theme.direction
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto flex justify-center items-center overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:8 w-full"
  }, /*#__PURE__*/_react["default"].createElement(_Resume["default"], null)))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 1,
    dir: theme.direction
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto flex justify-center items-center overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5"
  }, b.map(function (b1, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: b1.id || index,
      "data-aos": index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left",
      "data-aos-duration": index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
    }, /*#__PURE__*/_react["default"].createElement(_CardProject["default"], {
      Img: b1.Img,
      Title: b1.Title,
      Description: b1.Description,
      id: b1.id
    }));
  })))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 2,
    dir: theme.direction
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto flex justify-center items-center overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4"
  }, a.map(function (a1, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      "data-aos": index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left",
      "data-aos-duration": index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
    }, /*#__PURE__*/_react["default"].createElement(_Certificate["default"], {
      ImgSertif: a1.img
    }));
  })))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 3,
    dir: theme.direction
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto flex justify-center items-center overflow-hidden pb-[5%]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5"
  }, techStacks.map(function (stack, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      "data-aos": index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left",
      "data-aos-duration": index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"
    }, /*#__PURE__*/_react["default"].createElement(_TechStackIcon["default"], {
      className: "text-center",
      TechStackIcon: stack.icon,
      Language: stack.language
    }));
  })))))));
}