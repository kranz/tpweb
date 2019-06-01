(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tpweb", [], factory);
	else if(typeof exports === 'object')
		exports["tpweb"] = factory();
	else
		root["tpweb"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base64.js":
/*!***********************!*\
  !*** ./src/base64.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 =
/*#__PURE__*/
function () {
  function Base64() {
    _classCallCheck(this, Base64);

    this._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  } // public method for encoding


  _createClass(Base64, [{
    key: "encode",
    value: function encode(input) {
      var output = '';
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = this._utf8Encode(input);

      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
      }

      return output;
    } // public method for decoding

  }, {
    key: "decode",
    value: function decode(input) {
      var output = '';
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      }

      output = this._utf8Decode(output);
      return output;
    } // private method for UTF-8 encoding

  }, {
    key: "_utf8Encode",
    value: function _utf8Encode(string) {
      var utftext = '';
      string = string.replace(/\r\n/g, '\n');

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }

      return utftext;
    } // private method for UTF-8 decoding

  }, {
    key: "_utf8Decode",
    value: function _utf8Decode(utftext) {
      var string = '';
      var i = 0;
      var c = 0;
      var c2 = 0;
      var c3 = 0;

      while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode((c & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }

      return string;
    }
  }]);

  return Base64;
}();

exports.default = Base64;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TpSocket", {
  enumerable: true,
  get: function get() {
    return _tpsocket.default;
  }
});

var _tpsocket = _interopRequireDefault(__webpack_require__(/*! ./tpsocket.js */ "./src/tpsocket.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/tpsocket.js":
/*!*************************!*\
  !*** ./src/tpsocket.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base64 */ "./src/base64.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TpSocket =
/*#__PURE__*/
function () {
  function TpSocket() {
    _classCallCheck(this, TpSocket);

    this._name = 'Barra-Tempest';
  }

  _createClass(TpSocket, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "encodedName",
    get: function get() {
      var b64 = new _base.default();
      return b64.encode(this._name);
    }
  }]);

  return TpSocket;
}();

exports.default = TpSocket;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHdlYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHB3ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB3ZWIvLi9zcmMvYmFzZTY0LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL3Rwc29ja2V0LmpzIl0sIm5hbWVzIjpbIkJhc2U2NCIsIl9rZXlTdHIiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhFbmNvZGUiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiaXNOYU4iLCJjaGFyQXQiLCJyZXBsYWNlIiwiaW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl91dGY4RGVjb2RlIiwic3RyaW5nIiwidXRmdGV4dCIsIm4iLCJjIiwiYzIiLCJjMyIsIlRwU29ja2V0IiwiX25hbWUiLCJiNjQiLCJlbmNvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0lBT3FCQSxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsbUVBQWY7QUFDRCxHLENBQ0Q7Ozs7OzJCQUNPQyxLLEVBQU87QUFDWixVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLElBQUosRUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsSUFBbEMsRUFBd0NDLElBQXhDO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFFQVQsV0FBSyxHQUFHLEtBQUtVLFdBQUwsQ0FBaUJWLEtBQWpCLENBQVI7O0FBQ0EsYUFBT1MsQ0FBQyxHQUFHVCxLQUFLLENBQUNXLE1BQWpCLEVBQXlCO0FBQ3ZCVCxZQUFJLEdBQUdGLEtBQUssQ0FBQ1ksVUFBTixDQUFpQkgsQ0FBQyxFQUFsQixDQUFQO0FBQ0FOLFlBQUksR0FBR0gsS0FBSyxDQUFDWSxVQUFOLENBQWlCSCxDQUFDLEVBQWxCLENBQVA7QUFDQUwsWUFBSSxHQUFHSixLQUFLLENBQUNZLFVBQU4sQ0FBaUJILENBQUMsRUFBbEIsQ0FBUDtBQUVBSixZQUFJLEdBQUdILElBQUksSUFBSSxDQUFmO0FBQ0FJLFlBQUksR0FBSSxDQUFDSixJQUFJLEdBQUcsQ0FBUixLQUFjLENBQWYsR0FBcUJDLElBQUksSUFBSSxDQUFwQztBQUNBSSxZQUFJLEdBQUksQ0FBQ0osSUFBSSxHQUFHLEVBQVIsS0FBZSxDQUFoQixHQUFzQkMsSUFBSSxJQUFJLENBQXJDO0FBQ0FJLFlBQUksR0FBR0osSUFBSSxHQUFHLEVBQWQ7O0FBRUEsWUFBSVMsS0FBSyxDQUFDVixJQUFELENBQVQsRUFBaUI7QUFDZkksY0FBSSxHQUFHQyxJQUFJLEdBQUcsRUFBZDtBQUNELFNBRkQsTUFFTyxJQUFJSyxLQUFLLENBQUNULElBQUQsQ0FBVCxFQUFpQjtBQUN0QkksY0FBSSxHQUFHLEVBQVA7QUFDRDs7QUFDRFAsY0FBTSxHQUFHQSxNQUFNLEdBQ2YsS0FBS0YsT0FBTCxDQUFhZSxNQUFiLENBQW9CVCxJQUFwQixDQURTLEdBQ21CLEtBQUtOLE9BQUwsQ0FBYWUsTUFBYixDQUFvQlIsSUFBcEIsQ0FEbkIsR0FFVCxLQUFLUCxPQUFMLENBQWFlLE1BQWIsQ0FBb0JQLElBQXBCLENBRlMsR0FFbUIsS0FBS1IsT0FBTCxDQUFhZSxNQUFiLENBQW9CTixJQUFwQixDQUY1QjtBQUdEOztBQUNELGFBQU9QLE1BQVA7QUFDRCxLLENBRUQ7Ozs7MkJBQ09ELEssRUFBTztBQUNaLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxJQUFoQjtBQUNBLFVBQUlDLElBQUosRUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFFQVQsV0FBSyxHQUFHQSxLQUFLLENBQUNlLE9BQU4sQ0FBYyxxQkFBZCxFQUFxQyxFQUFyQyxDQUFSOztBQUVBLGFBQU9OLENBQUMsR0FBR1QsS0FBSyxDQUFDVyxNQUFqQixFQUF5QjtBQUV2Qk4sWUFBSSxHQUFHLEtBQUtOLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUJoQixLQUFLLENBQUNjLE1BQU4sQ0FBYUwsQ0FBQyxFQUFkLENBQXJCLENBQVA7QUFDQUgsWUFBSSxHQUFHLEtBQUtQLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUJoQixLQUFLLENBQUNjLE1BQU4sQ0FBYUwsQ0FBQyxFQUFkLENBQXJCLENBQVA7QUFDQUYsWUFBSSxHQUFHLEtBQUtSLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUJoQixLQUFLLENBQUNjLE1BQU4sQ0FBYUwsQ0FBQyxFQUFkLENBQXJCLENBQVA7QUFDQUQsWUFBSSxHQUFHLEtBQUtULE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUJoQixLQUFLLENBQUNjLE1BQU4sQ0FBYUwsQ0FBQyxFQUFkLENBQXJCLENBQVA7QUFFQVAsWUFBSSxHQUFJRyxJQUFJLElBQUksQ0FBVCxHQUFlQyxJQUFJLElBQUksQ0FBOUI7QUFDQUgsWUFBSSxHQUFJLENBQUNHLElBQUksR0FBRyxFQUFSLEtBQWUsQ0FBaEIsR0FBc0JDLElBQUksSUFBSSxDQUFyQztBQUNBSCxZQUFJLEdBQUksQ0FBQ0csSUFBSSxHQUFHLENBQVIsS0FBYyxDQUFmLEdBQW9CQyxJQUEzQjtBQUVBUCxjQUFNLEdBQUdBLE1BQU0sR0FBR2dCLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmhCLElBQXBCLENBQWxCOztBQUVBLFlBQUlLLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2ZOLGdCQUFNLEdBQUdBLE1BQU0sR0FBR2dCLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmYsSUFBcEIsQ0FBbEI7QUFDRDs7QUFDRCxZQUFJSyxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmUCxnQkFBTSxHQUFHQSxNQUFNLEdBQUdnQixNQUFNLENBQUNDLFlBQVAsQ0FBb0JkLElBQXBCLENBQWxCO0FBQ0Q7QUFDRjs7QUFDREgsWUFBTSxHQUFHLEtBQUtrQixXQUFMLENBQWlCbEIsTUFBakIsQ0FBVDtBQUNBLGFBQU9BLE1BQVA7QUFDRCxLLENBRUQ7Ozs7Z0NBQ1ltQixNLEVBQVE7QUFDbEIsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQUQsWUFBTSxHQUFHQSxNQUFNLENBQUNMLE9BQVAsQ0FBZSxPQUFmLEVBQXdCLElBQXhCLENBQVQ7O0FBQ0EsV0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixNQUFNLENBQUNULE1BQTNCLEVBQW1DVyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQUlDLENBQUMsR0FBR0gsTUFBTSxDQUFDUixVQUFQLENBQWtCVSxDQUFsQixDQUFSOztBQUVBLFlBQUlDLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFDWEYsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQW9CSyxDQUFwQixDQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUtBLENBQUMsR0FBRyxHQUFMLElBQWNBLENBQUMsR0FBRyxJQUF0QixFQUE2QjtBQUNsQ0YsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQXFCSyxDQUFDLElBQUksQ0FBTixHQUFXLEdBQS9CLENBQVg7QUFDQUYsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQXFCSyxDQUFDLEdBQUcsRUFBTCxHQUFXLEdBQS9CLENBQVg7QUFDRCxTQUhNLE1BR0E7QUFDTEYsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQXFCSyxDQUFDLElBQUksRUFBTixHQUFZLEdBQWhDLENBQVg7QUFDQUYsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQXNCSyxDQUFDLElBQUksQ0FBTixHQUFXLEVBQVosR0FBa0IsR0FBdEMsQ0FBWDtBQUNBRixpQkFBTyxJQUFJSixNQUFNLENBQUNDLFlBQVAsQ0FBcUJLLENBQUMsR0FBRyxFQUFMLEdBQVcsR0FBL0IsQ0FBWDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT0YsT0FBUDtBQUNELEssQ0FFRDs7OztnQ0FDWUEsTyxFQUFTO0FBQ25CLFVBQUlELE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSVgsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJYyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsVUFBSUMsRUFBRSxHQUFHLENBQVQ7O0FBRUEsYUFBT2hCLENBQUMsR0FBR1ksT0FBTyxDQUFDVixNQUFuQixFQUEyQjtBQUN6QlksU0FBQyxHQUFHRixPQUFPLENBQUNULFVBQVIsQ0FBbUJILENBQW5CLENBQUo7O0FBQ0EsWUFBSWMsQ0FBQyxHQUFHLEdBQVIsRUFBYTtBQUNYSCxnQkFBTSxJQUFJSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JLLENBQXBCLENBQVY7QUFDQWQsV0FBQztBQUNGLFNBSEQsTUFHTyxJQUFLYyxDQUFDLEdBQUcsR0FBTCxJQUFjQSxDQUFDLEdBQUcsR0FBdEIsRUFBNEI7QUFDakNDLFlBQUUsR0FBR0gsT0FBTyxDQUFDVCxVQUFSLENBQW1CSCxDQUFDLEdBQUcsQ0FBdkIsQ0FBTDtBQUNBVyxnQkFBTSxJQUFJSCxNQUFNLENBQUNDLFlBQVAsQ0FBcUIsQ0FBQ0ssQ0FBQyxHQUFHLEVBQUwsS0FBWSxDQUFiLEdBQW1CQyxFQUFFLEdBQUcsRUFBNUMsQ0FBVjtBQUNBZixXQUFDLElBQUksQ0FBTDtBQUNELFNBSk0sTUFJQTtBQUNMZSxZQUFFLEdBQUdILE9BQU8sQ0FBQ1QsVUFBUixDQUFtQkgsQ0FBQyxHQUFHLENBQXZCLENBQUw7QUFDQWdCLFlBQUUsR0FBR0osT0FBTyxDQUFDVCxVQUFSLENBQW1CSCxDQUFDLEdBQUcsQ0FBdkIsQ0FBTDtBQUNBVyxnQkFBTSxJQUFJSCxNQUFNLENBQUNDLFlBQVAsQ0FBcUIsQ0FBQ0ssQ0FBQyxHQUFHLEVBQUwsS0FBWSxFQUFiLEdBQW9CLENBQUNDLEVBQUUsR0FBRyxFQUFOLEtBQWEsQ0FBakMsR0FBdUNDLEVBQUUsR0FBRyxFQUFoRSxDQUFWO0FBQ0FoQixXQUFDLElBQUksQ0FBTDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT1csTUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztJQUVxQk0sUTs7O0FBQ25CLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLGVBQWI7QUFDRDs7Ozt3QkFDVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7d0JBRWlCO0FBQ2hCLFVBQUlDLEdBQUcsR0FBRyxtQkFBVjtBQUVBLGFBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEtBQUtGLEtBQWhCLENBQVA7QUFDRCIsImZpbGUiOiJ0cHdlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidHB3ZWJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widHB3ZWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHB3ZWJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbipcbiogIEJhc2U2NCBlbmNvZGUgLyBkZWNvZGVcbiogIGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvL1xuKlxuKiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2U2NCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2tleVN0ciA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIH1cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcbiAgZW5jb2RlKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9ICcnO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gdGhpcy5fdXRmOEVuY29kZShpbnB1dCk7XG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xuICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xuICAgICAgZW5jNCA9IGNocjMgJiA2MztcblxuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cbiAgICAgIG91dHB1dCA9IG91dHB1dCArXG4gICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXG4gICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG4gIGRlY29kZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcbiAgICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCAnJyk7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG4gICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcbiAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cbiAgICAgIGlmIChlbmMzICE9PSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgfVxuICAgICAgaWYgKGVuYzQgIT09IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dHB1dCA9IHRoaXMuX3V0ZjhEZWNvZGUob3V0cHV0KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXG4gIF91dGY4RW5jb2RlKHN0cmluZykge1xuICAgIHZhciB1dGZ0ZXh0ID0gJyc7XG5cbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKTtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuICAgICAgbGV0IGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXRmdGV4dDtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBkZWNvZGluZ1xuICBfdXRmOERlY29kZSh1dGZ0ZXh0KSB7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYyA9IDA7XG4gICAgdmFyIGMyID0gMDtcbiAgICB2YXIgYzMgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCB1dGZ0ZXh0Lmxlbmd0aCkge1xuICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGMzID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAyKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xuICAgICAgICBpICs9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cbiIsImltcG9ydCBUcFNvY2tldCBmcm9tICcuL3Rwc29ja2V0LmpzJztcbmV4cG9ydCB7IFRwU29ja2V0IH07XG4iLCJpbXBvcnQgQmFzZTY0IGZyb20gJy4vYmFzZTY0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHBTb2NrZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9uYW1lID0gJ0JhcnJhLVRlbXBlc3QnO1xuICB9XG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGVuY29kZWROYW1lKCkge1xuICAgIGxldCBiNjQgPSBuZXcgQmFzZTY0KCk7XG5cbiAgICByZXR1cm4gYjY0LmVuY29kZSh0aGlzLl9uYW1lKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9