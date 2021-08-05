"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styles = require("../../common/styles");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DrilldownOverlayEditorStyle = _styles.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n\n    .doe-bubble {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        border-radius: 100px;\n\n        padding: 0 8px;\n        height: 24px;\n\n        background-color: ", ";\n        color: ", ";\n        margin: 2px;\n\n        border-radius: 6px;\n\n        box-shadow: 0 0 1px rgba(62, 65, 86, 0.4), 0 1px 3px rgba(62, 65, 86, 0.4);\n\n        img {\n            height: 16px;\n            object-fit: contain;\n\n            margin-right: 4px;\n        }\n    }\n\n    textarea {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: 0px;\n        height: 0px;\n\n        opacity: 0;\n    }\n"])), function (p) {
  return p.theme.dataViewer.gridColor;
}, function (p) {
  return p.theme.fgColorDark;
});

var DrilldownOverlayEditor = function DrilldownOverlayEditor(p) {
  var drilldowns = p.drilldowns,
      onKeyDown = p.onKeyDown;
  return /*#__PURE__*/React.createElement(DrilldownOverlayEditorStyle, null, drilldowns.map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "doe-bubble"
    }, d.img !== undefined && /*#__PURE__*/React.createElement("img", {
      src: d.img
    }), /*#__PURE__*/React.createElement("div", null, d.text));
  }), /*#__PURE__*/React.createElement("textarea", {
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};

var _default = DrilldownOverlayEditor;
exports.default = _default;