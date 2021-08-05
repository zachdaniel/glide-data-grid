"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proveType = proveType;
exports.assert = assert;
exports.assertNever = assertNever;
exports.dontAwait = dontAwait;
exports.removeArrayItem = removeArrayItem;
exports.maybe = maybe;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function proveType(_val) {// do nothing, just prove the compiler thinks the types match
}

function panic() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This should not happen";
  throw new Error(message);
}

function assert(fact) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed";
  if (fact) return;
  return panic(message);
}

function assertNever(_never) {
  return panic("Hell froze over");
}

function dontAwait(p) {
  p.catch(function (e) {
    throw e;
  });
}

function removeArrayItem(arr, index) {
  return [].concat(_toConsumableArray(arr.slice(0, index)), _toConsumableArray(arr.slice(index + 1)));
}

function maybe(fn, defaultValue) {
  try {
    var result = fn();
    return result;
  } catch (_unused) {
    return defaultValue;
  }
}