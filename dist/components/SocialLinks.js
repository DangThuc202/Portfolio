"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _lucideReact = require("lucide-react");
var socialLinks = [{
  name: "Email",
  displayName: "thucdang.work@gmail.com",
  icon: _lucideReact.Mail,
  url: "https://www.linkedin.com/in/thuc-dang-633821301",
  color: "#D14836",
  gradient: "from-[#D14836] to-[#FFA500]"
}, {
  name: "PhoneNumber",
  displayName: "0901633324",
  icon: _lucideReact.Phone,
  url: "https://www.linkedin.com/in/thuc-dang-633821301",
  color: "#388E3C",
  gradient: "from-[#388E3C] to-[#81C784]"
}, {
  name: "LinkedIn",
  displayName: "LinkedIn",
  subText: "www.linkedin.com/in/thuc-dang-633821301",
  icon: _lucideReact.Linkedin,
  url: "https://www.linkedin.com/in/thuc-dang-633821301",
  color: "#0A66C2",
  gradient: "from-[#0A66C2] to-[#0077B5]"
}, {
  name: "GitHub",
  displayName: "Github",
  subText: "https://github.com/DangThuc202",
  icon: _lucideReact.Github,
  url: "https://github.com/DangThuc202",
  color: "#ffffff",
  gradient: "from-[#333] to-[#24292e]"
}];
var SocialLinks = function SocialLinks() {
  var _socialLinks$filter = socialLinks.filter(function (link) {
      return !link.isPrimary;
    }),
    _socialLinks$filter2 = (0, _slicedToArray2["default"])(_socialLinks$filter, 4),
    mail = _socialLinks$filter2[0],
    phone = _socialLinks$filter2[1],
    github = _socialLinks$filter2[2],
    linkedIn = _socialLinks$filter2[3];
  var copyToClipboard = function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
      alert("Copied to clipboard!");
    })["catch"](function (err) {
      console.error("Failed to copy: ", err);
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
  }, [mail, phone].map(function (link) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: link.name,
      onClick: function onClick() {
        return copyToClipboard(link.displayName);
      },
      rel: "noopener noreferrer",
      className: "group relative flex items-center gap-3 p-4 rounded-xl \r bg-white/5 border border-white/10 overflow-hidden\r hover:border-white/20 transition-all duration-500 cursor-pointer"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500\n                             bg-gradient-to-r ".concat(link.gradient)
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative flex items-center justify-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-20 rounded-lg transition-all duration-500\r group-hover:scale-125 group-hover:opacity-30",
      style: {
        backgroundColor: link.color
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative p-2 rounded-lg"
    }, /*#__PURE__*/_react["default"].createElement(link.icon, {
      className: "w-5 h-5 transition-all duration-500 group-hover:scale-110",
      style: {
        color: link.color
      }
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col min-w-0"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300"
    }, link.displayName), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300"
    }, link.subText)), /*#__PURE__*/_react["default"].createElement(_lucideReact.ExternalLink, {
      className: "w-4 h-4 text-gray-500 group-hover:text-white ml-auto\r opacity-0 group-hover:opacity-100 transition-all duration-300\r transform group-hover:translate-x-0 -translate-x-2"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent\r translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
    })));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, [github, linkedIn].map(function (link) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: link.name,
      href: link.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group relative flex items-center gap-3 p-4 rounded-xl \r bg-white/5 border border-white/10 overflow-hidden\r hover:border-white/20 transition-all duration-500"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500\n                             bg-gradient-to-r ".concat(link.gradient)
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative flex items-center justify-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-20 rounded-lg transition-all duration-500\r group-hover:scale-125 group-hover:opacity-30",
      style: {
        backgroundColor: link.color
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative p-2 rounded-lg"
    }, /*#__PURE__*/_react["default"].createElement(link.icon, {
      className: "w-5 h-5 transition-all duration-500 group-hover:scale-110",
      style: {
        color: link.color
      }
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col min-w-0"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300"
    }, link.displayName), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300"
    }, link.subText)), /*#__PURE__*/_react["default"].createElement(_lucideReact.ExternalLink, {
      className: "w-4 h-4 text-gray-500 group-hover:text-white ml-auto\r opacity-0 group-hover:opacity-100 transition-all duration-300\r transform group-hover:translate-x-0 -translate-x-2"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent\r translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
    })));
  }))));
};
var _default = exports["default"] = SocialLinks;