"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AnimatedBackground = function AnimatedBackground() {
  var blobRefs = (0, _react.useRef)([]);
  var initialPositions = [{
    x: -4,
    y: 0
  }, {
    x: -4,
    y: 0
  }, {
    x: 20,
    y: -8
  }, {
    x: 20,
    y: -8
  }];
  (0, _react.useEffect)(function () {
    var currentScroll = 0;
    var requestId;
    var _handleScroll = function handleScroll() {
      var newScroll = window.pageYOffset;
      var scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;
      blobRefs.current.forEach(function (blob, index) {
        var initialPos = initialPositions[index];

        // Calculating movement in both X and Y direction
        var xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340; // Horizontal movement
        var yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40; // Vertical movement

        var x = initialPos.x + xOffset;
        var y = initialPos.y + yOffset;

        // Apply transformation with smooth transition
        blob.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
        blob.style.transition = "transform 1.4s ease-out";
      });
      requestId = requestAnimationFrame(_handleScroll);
    };
    window.addEventListener("scroll", _handleScroll);
    return function () {
      window.removeEventListener("scroll", _handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: function ref(_ref) {
      return blobRefs.current[0] = _ref;
    },
    className: "absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: function ref(_ref2) {
      return blobRefs.current[1] = _ref2;
    },
    className: "absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: function ref(_ref3) {
      return blobRefs.current[2] = _ref3;
    },
    className: "absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: function ref(_ref4) {
      return blobRefs.current[3] = _ref4;
    },
    className: "absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"
  }));
};
var _default = exports["default"] = AnimatedBackground;