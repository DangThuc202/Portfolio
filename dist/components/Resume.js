"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var infos = [{
  title: "Summary",
  title2: "Dang Hoang Thuc",
  desc: "Innovative and results-oriented Frontend ReactJS Developer with less than 1 year of experience, specializing in ReactJS and modern web technologies. Passionate about coding and UI/UX design, with a strong focus on achieving mastery in frontend development. Dedicated to advancing skills in intermediate to advanced ReactJS concepts, state management, and performance optimization, with a goal to become a successful and well-rounded IT professional."
}, {
  title: "Education",
  title2: "Bachelor of Engineering in Information Technology",
  time: "2020-2024",
  point: "GPA: 3.0/4.0",
  university: "Hutech University"
}, {
  title: "Internal Projects",
  title2: "Medical appointment booking website",
  time: "11/2024 - Present",
  info: ["Generated statistical data and visualized the top-performing doctor of the month through interactive charts", "Implemented scheduling features, enabling users to book medical appointments seamlessly", "Integrated multilingual support on the user interface using React-i18next for an inclusive experience", "Designed a calendar feature for doctors using React Big Calendar, allowing them to view appointment details and mark unavailable days efficiently", "Set up automated email reminders to notify users about their appointments", "Doctor rating permission"]
}, {
  title: "Professional Experience",
  title2: "Software Development",
  time: "03/2024 - 11/2024",
  info: ["Developed UI components using modern Component Libraries for scalable and reusable design.", "Implemented dynamic and efficient routing for multi-page applications using React-router-dom.", "Utilized Redux Toolkit for efficient state management, ensuring smooth transitions for language switching and handling other global states across the application.", "Developed backend functionalities and business logic in practical projects using Node.js with Express.", "Implemented multi-language support with React-i18next, enabling seamless translation between English and Vietnamese.", "Managed form handling and validation effectively using React Hook Form."]
}];
var q = "text-[14px] relative pt-0 pr-0 pl-5 mt-[-2px] border-l-2 border-l-blue-300 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-blue-300 before:border-2 before:border-blue-300 mb-5";
var Resume = function Resume() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: " bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-xl text-white/90"
  }, infos.map(function (info, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-[26px] mb-5 ml-[-5px] font-semibold"
    }, info.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: q
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-[18px] mb-1 ml-[-5px] font-normal"
    }, info.title2), info.desc ? /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        fontStyle: "italic"
      }
    }, info.desc) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "ml-5"
    }, info.time ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "italic my-3"
    }, info.time) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), info.point ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-3"
    }, info.point) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)), info.university ? /*#__PURE__*/_react["default"].createElement("div", null, info.university) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), info.info ? /*#__PURE__*/_react["default"].createElement("ul", {
      className: "list-disc ml-3"
    }, info.info.map(function (info1, index) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: index
      }, info1);
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)));
  })));
};
var _default = exports["default"] = Resume;