"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberOverlayEditorStyle = void 0;

var _styles = require("../../common/styles");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NumberOverlayEditorStyle = _styles.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    color: ", ";\n\n    > input {\n        color: ", ";\n    }\n"])), function (p) {
  return p.theme.fgColorDark;
}, function (p) {
  return p.theme.fgColorDark;
});

exports.NumberOverlayEditorStyle = NumberOverlayEditorStyle;