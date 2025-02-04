"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarkdownContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    word-break: break-word;\n    -webkit-touch-callout: default;\n\n    padding-right: 26px;\n\n    & *:last-child {\n        margin-bottom: 0;\n    }\n\n    & p img {\n        width: 100%;\n    }\n"])));

exports.MarkdownContainer = MarkdownContainer;