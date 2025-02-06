"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _firestore = require("firebase/firestore");
var _storage = require("firebase/storage");
var _firebaseComment = require("../firebase-comment");
var _lucideReact = require("lucide-react");
var _aos = _interopRequireDefault(require("aos"));
require("aos/dist/aos.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Comment = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var comment = _ref.comment,
    formatDate = _ref.formatDate,
    index = _ref.index;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-start gap-3 "
  }, comment.profileImage ? /*#__PURE__*/_react["default"].createElement("img", {
    src: comment.profileImage,
    alt: "".concat(comment.userName, "'s profile"),
    className: "w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30",
    loading: "lazy"
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.UserCircle2, {
    className: "w-5 h-5"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow min-w-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between gap-4 mb-2"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-medium text-white truncate"
  }, comment.userName), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs text-gray-400 whitespace-nowrap"
  }, formatDate(comment.createdAt))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-300 text-sm break-words leading-relaxed relative bottom-2"
  }, comment.content))));
});
var CommentForm = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var onSubmit = _ref2.onSubmit,
    isSubmitting = _ref2.isSubmitting,
    error = _ref2.error;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    newComment = _useState2[0],
    setNewComment = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    userName = _useState4[0],
    setUserName = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    imagePreview = _useState6[0],
    setImagePreview = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    imageFile = _useState8[0],
    setImageFile = _useState8[1];
  var textareaRef = (0, _react.useRef)(null);
  var fileInputRef = (0, _react.useRef)(null);
  var handleImageChange = (0, _react.useCallback)(function (e) {
    var file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) return;
      setImageFile(file);
      var reader = new FileReader();
      reader.onloadend = function () {
        return setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  var handleTextareaChange = (0, _react.useCallback)(function (e) {
    setNewComment(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = "".concat(textareaRef.current.scrollHeight, "px");
    }
  }, []);
  var handleSubmit = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;
    onSubmit({
      newComment: newComment,
      userName: userName,
      imageFile: imageFile
    });
    setNewComment('');
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  }, [newComment, userName, imageFile, onSubmit]);
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-2",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-white"
  }, "Name ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-400"
  }, "*")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: userName,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    z: true,
    placeholder: "Enter your name",
    className: "w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-2",
    "data-aos": "fade-up",
    "data-aos-duration": "1200"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-white"
  }, "Message ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-400"
  }, "*")), /*#__PURE__*/_react["default"].createElement("textarea", {
    ref: textareaRef,
    value: newComment,
    onChange: handleTextareaChange,
    placeholder: "Write your message here...",
    className: "w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-2",
    "data-aos": "fade-up",
    "data-aos-duration": "1400"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-white"
  }, "Profile Photo ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-400"
  }, "(optional)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
  }, imagePreview ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: imagePreview,
    alt: "Profile preview",
    className: "w-16 h-16 rounded-full object-cover border-2 border-indigo-500/50"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setImagePreview(null);
      setImageFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    },
    className: "flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all group"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "w-4 h-4"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Remove Photo"))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    ref: fileInputRef,
    onChange: handleImageChange,
    accept: "image/*",
    className: "hidden"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-all border border-dashed border-indigo-500/50 hover:border-indigo-500 group"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.ImagePlus, {
    className: "w-5 h-5 group-hover:scale-110 transition-transform"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Choose Profile Photo")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center text-gray-400 text-sm mt-2"
  }, "Max file size: 5MB")))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    disabled: isSubmitting,
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center justify-center gap-2"
  }, isSubmitting ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_lucideReact.Loader2, {
    className: "w-4 h-4 animate-spin"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Posting...")) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_lucideReact.Send, {
    className: "w-4 h-4"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Post Comment")))));
});
var Komentar = function Komentar() {
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    comments = _useState10[0],
    setComments = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isSubmitting = _useState12[0],
    setIsSubmitting = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  (0, _react.useEffect)(function () {
    // Initialize AOS
    _aos["default"].init({
      once: false,
      duration: 1000
    });
  }, []);
  (0, _react.useEffect)(function () {
    var commentsRef = (0, _firestore.collection)(_firebaseComment.db, 'portfolio-comments');
    var q = (0, _firestore.query)(commentsRef, (0, _firestore.orderBy)('createdAt', 'desc'));
    return (0, _firestore.onSnapshot)(q, function (querySnapshot) {
      var commentsData = querySnapshot.docs.map(function (doc) {
        return _objectSpread({
          id: doc.id
        }, doc.data());
      });
      setComments(commentsData);
    });
  }, []);
  var uploadImage = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(imageFile) {
      var storageRef;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (imageFile) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", null);
          case 2:
            storageRef = (0, _storage.ref)(_firebaseComment.storage, "profile-images/".concat(Date.now(), "_").concat(imageFile.name));
            _context.next = 5;
            return (0, _storage.uploadBytes)(storageRef, imageFile);
          case 5:
            return _context.abrupt("return", (0, _storage.getDownloadURL)(storageRef));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), []);
  var handleCommentSubmit = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref4) {
      var newComment, userName, imageFile, profileImageUrl;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            newComment = _ref4.newComment, userName = _ref4.userName, imageFile = _ref4.imageFile;
            setError('');
            setIsSubmitting(true);
            _context2.prev = 3;
            _context2.next = 6;
            return uploadImage(imageFile);
          case 6:
            profileImageUrl = _context2.sent;
            _context2.next = 9;
            return (0, _firestore.addDoc)((0, _firestore.collection)(_firebaseComment.db, 'portfolio-comments'), {
              content: newComment,
              userName: userName,
              profileImage: profileImageUrl,
              createdAt: (0, _firestore.serverTimestamp)()
            });
          case 9:
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            setError('Failed to post comment. Please try again.');
            console.error('Error adding comment: ', _context2.t0);
          case 15:
            _context2.prev = 15;
            setIsSubmitting(false);
            return _context2.finish(15);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 11, 15, 18]]);
    }));
    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [uploadImage]);
  var formatDate = (0, _react.useCallback)(function (timestamp) {
    if (!timestamp) return '';
    var date = timestamp.toDate();
    var now = new Date();
    var diffMinutes = Math.floor((now - date) / (1000 * 60));
    var diffHours = Math.floor(diffMinutes / 60);
    var diffDays = Math.floor(diffHours / 24);
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return "".concat(diffMinutes, "m ago");
    if (diffHours < 24) return "".concat(diffHours, "h ago");
    if (diffDays < 7) return "".concat(diffDays, "d ago");
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-6 border-b border-white/10",
    "data-aos": "fade-down",
    "data-aos-duration": "800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 rounded-xl bg-indigo-500/20"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.MessageCircle, {
    className: "w-6 h-6 text-indigo-400"
  })), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-semibold text-white"
  }, "Comments ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-indigo-400"
  }, "(", comments.length, ")")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-6 space-y-6"
  }, error && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-2 p-4 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl",
    "data-aos": "fade-in"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.AlertCircle, {
    className: "w-5 h-5 flex-shrink-0"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm"
  }, error)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(CommentForm, {
    onSubmit: handleCommentSubmit,
    isSubmitting: isSubmitting,
    error: error
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4 h-[300px] overflow-y-auto custom-scrollbar",
    "data-aos": "fade-up",
    "data-aos-delay": "200"
  }, comments.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center py-8",
    "data-aos": "fade-in"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.UserCircle2, {
    className: "w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-50"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400"
  }, "No comments yet. Start the conversation!")) : comments.map(function (comment, index) {
    return /*#__PURE__*/_react["default"].createElement(Comment, {
      key: comment.id,
      comment: comment,
      formatDate: formatDate,
      index: index
    });
  }))), /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n            .custom-scrollbar::-webkit-scrollbar {\n                width: 6px;\n            }\n            .custom-scrollbar::-webkit-scrollbar-track {\n                background: rgba(255, 255, 255, 0.05);\n                border-radius: 6px;\n            }\n            .custom-scrollbar::-webkit-scrollbar-thumb {\n                background: rgba(99, 102, 241, 0.5);\n                border-radius: 6px;\n            }\n            .custom-scrollbar::-webkit-scrollbar-thumb:hover {\n                background: rgba(99, 102, 241, 0.7);\n            }\n        "));
};
var _default = exports["default"] = Komentar;