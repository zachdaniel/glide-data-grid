"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEventListener = useEventListener;
exports.degreesToRadians = degreesToRadians;
exports.useDebouncedMemo = useDebouncedMemo;
exports.EditPencil = exports.disabledProps = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function useEventListener(eventName, handler, element, passive, capture) {
  var _capture;

  capture = (_capture = capture) !== null && _capture !== void 0 ? _capture : false; // Create a ref that stores handler

  var savedHandler = React.useRef(); // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  React.useEffect(function () {
    savedHandler.current = handler;
  }, [handler]);
  React.useEffect(function () {
    // Make sure element supports addEventListener
    if (element === null || element.addEventListener === undefined) return;
    var el = element; // Create event listener that calls handler function stored in ref

    var eventListener = function eventListener(event) {
      var _savedHandler$current;

      (_savedHandler$current = savedHandler.current) === null || _savedHandler$current === void 0 ? void 0 : _savedHandler$current.call(el, event);
    };

    el.addEventListener(eventName, eventListener, {
      passive: passive,
      capture: capture
    }); // Remove event listener on cleanup

    return function () {
      el.removeEventListener(eventName, eventListener, {
        capture: capture
      });
    };
  }, [eventName, element, passive, capture] // Re-run if eventName or element changes
  );
}

var PI = Math.PI;

function degreesToRadians(degrees) {
  return degrees * PI / 180;
}

var disabledProps = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    opacity: 0.4;\n    pointer-events: none;\n"])));
exports.disabledProps = disabledProps;

var EditPencil = function EditPencil(props) {
  var _props$bgColor, _props$fgColor;

  var bg = (_props$bgColor = props.bgColor) !== null && _props$bgColor !== void 0 ? _props$bgColor : "currentColor";
  var fg = (_props$fgColor = props.fgColor) !== null && _props$fgColor !== void 0 ? _props$fgColor : "#ffffff";
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "8",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.25 10.1874V11.7499H5.8125L10.4208 7.14161L8.85833 5.57911L4.25 10.1874ZM11.6292 5.93328C11.7917 5.77078 11.7917 5.50828 11.6292 5.34578L10.6542 4.37078C10.4917 4.20828 10.2292 4.20828 10.0667 4.37078L9.30417 5.13328L10.8667 6.69578L11.6292 5.93328V5.93328Z",
    fill: fg
  }));
};

exports.EditPencil = EditPencil;

function useDebouncedMemo(factory, deps, time) {
  var _React$useState = React.useState(factory()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // eslint-disable-next-line react-hooks/exhaustive-deps


  var debouncedSetState = React.useCallback((0, _debounce.default)(setState, time), []);
  React.useEffect(function () {
    debouncedSetState(factory()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}