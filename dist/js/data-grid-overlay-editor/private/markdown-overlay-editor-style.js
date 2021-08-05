"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownOverlayEditorStyle = void 0;

var _styles = require("../../common/styles");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarkdownOverlayEditorStyle = _styles.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-width: ", "px;\n    display: flex;\n    position: relative;\n    color: ", ";\n\n    .edit-icon {\n        position: absolute;\n        top: 0px;\n        right: -3px;\n        width: 24px;\n        height: 24px;\n        color: ", ";\n\n        cursor: pointer;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        > * {\n            width: 24px;\n            height: 24px;\n        }\n    }\n\n    textarea {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: 0px;\n        height: 0px;\n\n        opacity: 0;\n    }\n"])), function (p) {
  return p.targetRect.width;
}, function (p) {
  return p.theme.fgColorDark;
}, function (p) {
  return p.theme.acceptColor;
});

exports.MarkdownOverlayEditorStyle = MarkdownOverlayEditorStyle;