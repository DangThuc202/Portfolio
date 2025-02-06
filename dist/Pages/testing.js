"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TestAOS = function TestAOS() {
  (0, _react.useEffect)(function () {
    // Inisialisasi AOS
    _aos["default"].init();

    // Function untuk mengecek will-change property
    var checkWillChange = function checkWillChange() {
      // Mengambil semua elemen dengan data-aos
      var aosElements = document.querySelectorAll('[data-aos]');
      console.log("Ditemukan ".concat(aosElements.length, " elemen dengan data-aos"));
      aosElements.forEach(function (element, index) {
        // Tambahkan border pada elemen
        element.style.border = '2px dashed red';

        // Mengambil computed style
        var computedStyle = window.getComputedStyle(element);
        var willChange = computedStyle.getPropertyValue('will-change');
        console.log("Element ".concat(index + 1, ":"), {
          'data-aos': element.getAttribute('data-aos'),
          'will-change': willChange,
          'element': element.tagName,
          'classes': element.className
        });
      });
    };

    // Jalankan pengecekan setelah AOS diinisialisasi
    setTimeout(checkWillChange, 100);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n                    [data-aos] {\n                        will-change: transform, opacity !important;\n                    }\n                "));
};
var _default = exports["default"] = TestAOS;