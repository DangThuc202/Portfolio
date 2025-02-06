"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    scrolled = _useState4[0],
    setScrolled = _useState4[1];
  var _useState5 = (0, _react.useState)("Home"),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    activeSection = _useState6[0],
    setActiveSection = _useState6[1];
  var navItems = [{
    href: "#Home",
    label: "Home"
  }, {
    href: "#About",
    label: "About"
  }, {
    href: "#Portfolio",
    label: "Portfolio"
  }, {
    href: "#Contact",
    label: "Contact"
  }];
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      setScrolled(window.scrollY > 20);
      var sections = navItems.map(function (item) {
        var section = document.querySelector(item.href);
        if (section) {
          return {
            id: item.href.replace("#", ""),
            offset: section.offsetTop - 550,
            height: section.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);
      var currentPosition = window.scrollY;
      var active = sections.find(function (section) {
        return currentPosition >= section.offset && currentPosition < section.offset + section.height;
      });
      if (active) {
        setActiveSection(active.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  var scrollToSection = function scrollToSection(e, href) {
    e.preventDefault();
    var section = document.querySelector(href);
    if (section) {
      var top = section.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "fixed w-full top-0 z-50 transition-all duration-500 ".concat(isOpen ? "bg-[#030014] opacity-100" : scrolled ? "bg-[#030014]/50 backdrop-blur-xl" : "bg-transparent")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto px-4 sm:px-6 lg:px-[10%]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between h-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#Home",
    onClick: function onClick(e) {
      return scrollToSection(e, "#Home");
    },
    className: "text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
  }, "Dang Hoang Thuc")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-8 flex items-center space-x-8"
  }, navItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: item.label,
      href: item.href,
      onClick: function onClick(e) {
        return scrollToSection(e, item.href);
      },
      className: "group relative px-1 py-2 text-sm font-medium"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "relative z-10 transition-colors duration-300 ".concat(activeSection === item.href.substring(1) ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold" : "text-[#e2d3fd] group-hover:text-white")
    }, item.label), /*#__PURE__*/_react["default"].createElement("span", {
      className: "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ".concat(activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:hidden"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ".concat(isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100")
  }, isOpen ? /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "w-6 h-6"
  }) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Menu, {
    className: "w-6 h-6"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:hidden h-2/5 fixed inset-0 bg-[#030014] transition-all duration-300 ease-in-out ".concat(isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%] pointer-events-none"),
    style: {
      top: "64px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-6 space-y-4 flex-1 "
  }, navItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: item.label,
      href: item.href,
      onClick: function onClick(e) {
        return scrollToSection(e, item.href);
      },
      className: "block px-4 py-3 text-lg font-medium transition-all duration-300 ease ".concat(activeSection === item.href.substring(1) ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold" : "text-[#e2d3fd] hover:text-white"),
      style: {
        transitionDelay: "".concat(index * 100, "ms"),
        transform: isOpen ? "translateX(0)" : "translateX(50px)",
        opacity: isOpen ? 1 : 0
      }
    }, item.label);
  })))));
};
var _default = exports["default"] = Navbar;