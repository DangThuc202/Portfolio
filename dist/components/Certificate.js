"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Fullscreen = _interopRequireDefault(require("@mui/icons-material/Fullscreen"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Certificate = function Certificate(_ref) {
  var ImgSertif = _ref.ImgSertif;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: "div",
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "",
    sx: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
        "& .overlay": {
          opacity: 1
        },
        "& .hover-content": {
          transform: "translate(-50%, -50%)",
          opacity: 1
        },
        "& .certificate-image": {
          filter: "contrast(1.05) brightness(1) saturate(1.1)"
        }
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        zIndex: 1
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "certificate-image",
    src: ImgSertif,
    alt: "Certificate",
    style: {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
      transition: "filter 0.3s ease"
    },
    onClick: handleOpen
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "overlay",
    sx: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      transition: "all 0.3s ease",
      cursor: "pointer",
      zIndex: 2
    },
    onClick: handleOpen
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "hover-content",
    sx: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -60%)",
      opacity: 0,
      transition: "all 0.4s ease",
      textAlign: "center",
      width: "100%",
      color: "white"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Fullscreen["default"], {
    sx: {
      fontSize: 40,
      mb: 1,
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    sx: {
      fontWeight: 600,
      textShadow: "0 2px 4px rgba(0,0,0,0.3)"
    }
  }, "View Certificate")), " ")), /*#__PURE__*/_react["default"].createElement(_material.Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    BackdropComponent: _material.Backdrop,
    BackdropProps: {
      timeout: 300,
      sx: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(5px)"
      }
    },
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      "& .MuiBackdrop-root": {
        backgroundColor: "rgba(0, 0, 0, 0.9)"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      position: "relative",
      width: "auto",
      maxWidth: "90vw",
      maxHeight: "90vh",
      m: 0,
      p: 0,
      outline: "none",
      "&:focus": {
        outline: "none"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: handleClose,
    sx: {
      position: "absolute",
      right: 16,
      top: 16,
      color: "white",
      bgcolor: "rgba(0,0,0,0.6)",
      zIndex: 1,
      padding: 1,
      "&:hover": {
        bgcolor: "rgba(0,0,0,0.8)",
        transform: "scale(1.1)"
      }
    },
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    sx: {
      fontSize: 24
    }
  })), /*#__PURE__*/_react["default"].createElement("img", {
    src: ImgSertif,
    alt: "Certificate Full View",
    style: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "90vh",
      margin: "0 auto",
      objectFit: "contain"
    }
  }))));
};
var _default = exports["default"] = Certificate;