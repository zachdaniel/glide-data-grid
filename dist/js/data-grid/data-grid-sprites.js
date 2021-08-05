"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSpriteMap = buildSpriteMap;
exports.drawSprite = drawSprite;

var _sprites = require("./sprites");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var spriteList = Object.keys(_sprites.sprites);
var variantList = ["normal", "selected", "special", "specialSelected"];
var renderSize = 40;
var spriteCanvas;
var lastTheme;

function buildSpriteMap(_x) {
  return _buildSpriteMap.apply(this, arguments);
}

function _buildSpriteMap() {
  _buildSpriteMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(theme) {
    var _lastTheme, _lastTheme2, _lastTheme3, _lastTheme4;

    var themeExtract, ctx, x, _iterator, _step, key, sprite, y, _iterator2, _step2, variant, fgColor, bgColor, imgSource;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // spriteCanvas = new OffscreenCanvas(spriteList.length * renderSize, 4 * renderSize);
            themeExtract = {
              bgColorLight: theme.bgColorLight,
              fgColorDark: theme.fgColorDark,
              acceptColor: theme.acceptColor,
              columnHeaderBg: theme.dataViewer.columnHeader.bgColor
            };

            if (!(((_lastTheme = lastTheme) === null || _lastTheme === void 0 ? void 0 : _lastTheme.acceptColor) === themeExtract.acceptColor && ((_lastTheme2 = lastTheme) === null || _lastTheme2 === void 0 ? void 0 : _lastTheme2.bgColorLight) === themeExtract.bgColorLight && ((_lastTheme3 = lastTheme) === null || _lastTheme3 === void 0 ? void 0 : _lastTheme3.columnHeaderBg) === themeExtract.columnHeaderBg && ((_lastTheme4 = lastTheme) === null || _lastTheme4 === void 0 ? void 0 : _lastTheme4.fgColorDark) === themeExtract.fgColorDark)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            lastTheme = themeExtract;
            spriteCanvas = document.createElement("canvas");
            spriteCanvas.width = spriteList.length * renderSize;
            spriteCanvas.height = 4 * renderSize;
            ctx = spriteCanvas.getContext("2d");

            if (!(ctx === null)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return");

          case 10:
            x = 0;
            _iterator = _createForOfIteratorHelper(spriteList);
            _context.prev = 12;

            _iterator.s();

          case 14:
            if ((_step = _iterator.n()).done) {
              _context.next = 45;
              break;
            }

            key = _step.value;
            sprite = _sprites.sprites[key];
            y = 0;
            _iterator2 = _createForOfIteratorHelper(variantList);
            _context.prev = 19;

            _iterator2.s();

          case 21:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 34;
              break;
            }

            variant = _step2.value;
            fgColor = themeExtract.bgColorLight;
            bgColor = themeExtract.fgColorDark;

            if (variant === "selected") {
              bgColor = "white";
              fgColor = themeExtract.acceptColor;
            } else if (variant === "special") {
              bgColor = themeExtract.acceptColor;
              fgColor = themeExtract.columnHeaderBg;
            }

            imgSource = new Image();
            imgSource.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(sprite({
              fgColor: fgColor,
              bgColor: bgColor
            })));
            _context.next = 30;
            return imgSource.decode();

          case 30:
            ctx.drawImage(imgSource, x, y, renderSize, renderSize);
            y += renderSize;

          case 32:
            _context.next = 21;
            break;

          case 34:
            _context.next = 39;
            break;

          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](19);

            _iterator2.e(_context.t0);

          case 39:
            _context.prev = 39;

            _iterator2.f();

            return _context.finish(39);

          case 42:
            x += renderSize;

          case 43:
            _context.next = 14;
            break;

          case 45:
            _context.next = 50;
            break;

          case 47:
            _context.prev = 47;
            _context.t1 = _context["catch"](12);

            _iterator.e(_context.t1);

          case 50:
            _context.prev = 50;

            _iterator.f();

            return _context.finish(50);

          case 53:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 47, 50, 53], [19, 36, 39, 42]]);
  }));
  return _buildSpriteMap.apply(this, arguments);
}

function drawSprite(sprite, variant, ctx, x, y, size) {
  if (spriteCanvas === undefined) throw new Error();
  var xOffset = spriteList.indexOf(sprite) * renderSize;
  var yOffset = variantList.indexOf(variant) * renderSize;
  ctx.drawImage(spriteCanvas, xOffset, yOffset, renderSize, renderSize, x, y, size, size);
}