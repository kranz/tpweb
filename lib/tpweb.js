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

var _websock = _interopRequireDefault(__webpack_require__(/*! ./websock */ "./src/websock.js"));

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
  }, {
    key: "saluta",
    get: function get() {
      return _websock.default.greetme();
    }
  }]);

  return TpSocket;
}();

exports.default = TpSocket;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function Util() {
  _classCallCheck(this, Util);
};

exports.default = Util;
module.exports = exports["default"];

/***/ }),

/***/ "./src/websock.js":
/*!************************!*\
  !*** ./src/websock.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Websock;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base64 */ "./src/base64.js"));

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Websock() {
  'use strict';

  var api = {},
      // Public API
  websocket = null,
      // WebSocket object
  mode = 'base64',
      // Current WebSocket mode: 'binary', 'base64'
  rQ = [],
      // Receive queue
  rQi = 0,
      // Receive queue index
  rQmax = 10000,
      // Max receive queue size before compacting
  sQ = [],
      // Send queue
  eventHandlers = {
    'message': function message() {},
    'open': function open() {},
    'close': function close() {},
    'error': function error() {}
  },
      test_mode = false; //
  // Queue public functions
  //

  function greetme() {
    return 'ciccamelo! uno a zero!';
  }

  function get_sQ() {
    return sQ;
  }

  function get_rQ() {
    return rQ;
  }

  function get_rQi() {
    return rQi;
  }

  function set_rQi(val) {
    rQi = val;
  }

  function rQlen() {
    return rQ.length - rQi;
  }

  function rQpeek8() {
    return rQ[rQi];
  }

  function rQshift8() {
    return rQ[rQi++];
  }

  function rQunshift8(num) {
    if (rQi === 0) {
      rQ.unshift(num);
    } else {
      rQi -= 1;
      rQ[rQi] = num;
    }
  }

  function rQshift16() {
    return (rQ[rQi++] << 8) + rQ[rQi++];
  }

  function rQshift32() {
    return (rQ[rQi++] << 24) + (rQ[rQi++] << 16) + (rQ[rQi++] << 8) + rQ[rQi++];
  }

  function rQshiftStr(len) {
    if (typeof len === 'undefined') {
      len = rQlen();
    }

    var arr = rQ.slice(rQi, rQi + len);
    rQi += len;
    return String.fromCharCode.apply(null, arr);
  }

  function rQshiftBytes(len) {
    if (typeof len === 'undefined') {
      len = rQlen();
    }

    rQi += len;
    return rQ.slice(rQi - len, rQi);
  }

  function rQslice(start, end) {
    if (end) {
      return rQ.slice(rQi + start, rQi + end);
    }

    return rQ.slice(rQi + start);
  } // Check to see if we must wait for 'num' bytes (default to FBU.bytes)
  // to be available in the receive queue. Return true if we need to
  // wait (and possibly print a debug message), otherwise false.


  function rQwait(msg, num, goback) {
    var rQlen = rQ.length - rQi; // Skip rQlen() function call

    if (rQlen < num) {
      if (goback) {
        if (rQi < goback) {
          throw new Error('rQwait cannot backup ' + goback + ' bytes');
        }

        rQi -= goback;
      } // Util.Debug("   waiting for " + (num-rQlen) +
      //           " " + msg + " byte(s)");


      return true; // true means need more data
    }

    return false;
  } //
  // Private utility routines
  //


  function encode_message() {
    if (mode === 'binary') {
      // Put in a binary arraybuffer
      return new Uint8Array(sQ).buffer;
    } // base64 encode


    return _base.default.encode(sQ);
  }

  function decode_message(data) {
    // Util.Debug(">> decode_message: " + data);
    if (mode === 'binary') {
      // push arraybuffer values onto the end
      var u8 = new Uint8Array(data);

      for (var i = 0; i < u8.length; i++) {
        rQ.push(u8[i]);
      }
    } else {
      // base64 decode and concat to the end
      rQ = rQ.concat(_base.default.decode(data, 0));
    } // Util.Debug(">> decode_message, rQ: " + rQ);

  } //
  // Public Send functions
  //


  function flush() {
    if (websocket.bufferedAmount !== 0) {
      _util.default.Debug('bufferedAmount: ' + websocket.bufferedAmount);
    }

    if (websocket.bufferedAmount < api.maxBufferedAmount) {
      // Util.Debug("arr: " + arr);
      // Util.Debug("sQ: " + sQ);
      if (sQ.length > 0) {
        websocket.send(encode_message(sQ));
        sQ = [];
      }

      return true;
    }

    _util.default.Info('Delaying send, bufferedAmount: ' + websocket.bufferedAmount);

    return false;
  } // overridable for testing


  function send(arr) {
    // Util.Debug(">> send_array: " + arr);
    sQ = sQ.concat(arr);
    return flush();
  }

  function send_string(str) {
    // Util.Debug(">> send_string: " + str);
    api.send(str.split('').map(function (chr) {
      return chr.charCodeAt(0);
    }));
  } //
  // Other public functions


  function recv_message(e) {
    // Util.Debug(">> recv_message: " + e.data.length);
    try {
      decode_message(e.data);

      if (rQlen() > 0) {
        eventHandlers.message(); // Compact the receive queue

        if (rQ.length > rQmax) {
          // Util.Debug("Compacting receive queue");
          rQ = rQ.slice(rQi);
          rQi = 0;
        }
      } else {
        _util.default.Debug('Ignoring empty message');
      }
    } catch (exc) {
      if (typeof exc.stack !== 'undefined') {
        _util.default.Warn('recv_message, caught exception: ' + exc.stack);
      } else if (typeof exc.description !== 'undefined') {
        _util.default.Warn('recv_message, caught exception: ' + exc.description);
      } else {
        _util.default.Warn('recv_message, caught exception:' + exc);
      }

      if (typeof exc.name !== 'undefined') {
        eventHandlers.error(exc.name + ': ' + exc.message);
      } else {
        eventHandlers.error(exc);
      }
    } // Util.Debug("<< recv_message");

  } // Set event handlers


  function on(evt, handler) {
    eventHandlers[evt] = handler;
  }

  function init(protocols, ws_schema) {
    var bt = false;
    var wsbt = false; // var try_binary = false;

    rQ = [];
    rQi = 0;
    sQ = [];
    websocket = null; // Check for full typed array support

    if ('Uint8Array' in window && 'set' in Uint8Array.prototype) {
      bt = true;
    } // Check for full binary type support in WebSocket
    // Inspired by:
    // https://github.com/Modernizr/Modernizr/issues/370
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/websockets/binary.js


    try {
      if (bt && ('binaryType' in WebSocket.prototype || !!new WebSocket(ws_schema + '://.').binaryType)) {
        _util.default.Info('Detected binaryType support in WebSockets');

        wsbt = true;
      }
    } catch (exc) {} // Just ignore failed test localhost connections
    // Default protocols if not specified


    if (typeof protocols === 'undefined') {
      if (wsbt) {
        protocols = ['binary', 'base64'];
      } else {
        protocols = 'base64';
      }
    } // If no binary support, make sure it was not requested


    if (!wsbt) {
      if (protocols === 'binary') {
        throw new Error('WebSocket binary sub-protocol requested but not supported');
      }

      if (_typeof(protocols) === 'object') {
        var new_protocols = [];

        for (var i = 0; i < protocols.length; i++) {
          if (protocols[i] === 'binary') {
            _util.default.Error('Skipping unsupported WebSocket binary sub-protocol');
          } else {
            new_protocols.push(protocols[i]);
          }
        }

        if (new_protocols.length > 0) {
          protocols = new_protocols;
        } else {
          throw new Error('Only WebSocket binary sub-protocol was requested and not supported.');
        }
      }
    }

    return protocols;
  }

  function open(uri, protocols) {
    var ws_schema = uri.match(/^([a-z]+):\/\//)[1];
    protocols = init(protocols, ws_schema);

    if (test_mode) {
      websocket = {};
    } else {
      websocket = new WebSocket(uri, protocols);

      if (protocols.indexOf('binary') >= 0) {
        websocket.binaryType = 'arraybuffer';
      }
    }

    websocket.onmessage = recv_message;

    websocket.onopen = function () {
      _util.default.Debug('>> WebSock.onopen');

      if (websocket.protocol) {
        mode = websocket.protocol;

        _util.default.Info('Server chose sub-protocol: ' + websocket.protocol);
      } else {
        mode = 'base64';

        _util.default.Error('Server select no sub-protocol!: ' + websocket.protocol);
      }

      eventHandlers.open();

      _util.default.Debug('"<< WebSock.onopen');
    };

    websocket.onclose = function (e) {
      _util.default.Debug('>> WebSock.onclose');

      eventHandlers.close(e);

      _util.default.Debug('<< WebSock.onclose');
    };

    websocket.onerror = function (e) {
      _util.default.Debug('>> WebSock.onerror: ' + e);

      eventHandlers.error(e);

      _util.default.Debug('<< WebSock.onerror');
    };
  }

  function close() {
    if (websocket) {
      if (websocket.readyState === WebSocket.OPEN || websocket.readyState === WebSocket.CONNECTING) {
        _util.default.Info('Closing WebSocket connection');

        websocket.close();
      }

      websocket.onmessage = function (e) {
        return;
      };
    }
  } // Override internal functions for testing
  // Takes a send function, returns reference to recv function


  function testMode(override_send, data_mode) {
    test_mode = true;
    mode = data_mode;
    api.send = override_send;

    api.close = function () {};

    return recv_message;
  }

  function constructor() {
    // Configuration settings
    api.maxBufferedAmount = 200; // Direct access to send and receive queues

    api.get_sQ = get_sQ;
    api.get_rQ = get_rQ;
    api.get_rQi = get_rQi;
    api.set_rQi = set_rQi; // Routines to read from the receive queue

    api.rQlen = rQlen;
    api.rQpeek8 = rQpeek8;
    api.rQshift8 = rQshift8;
    api.rQunshift8 = rQunshift8;
    api.rQshift16 = rQshift16;
    api.rQshift32 = rQshift32;
    api.rQshiftStr = rQshiftStr;
    api.rQshiftBytes = rQshiftBytes;
    api.rQslice = rQslice;
    api.rQwait = rQwait;
    api.flush = flush;
    api.send = send;
    api.send_string = send_string;
    api.on = on;
    api.init = init;
    api.open = open;
    api.close = close;
    api.testMode = testMode;
    console.log(greetme);
    return api;
  }

  return constructor();
}

module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHdlYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHB3ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB3ZWIvLi9zcmMvYmFzZTY0LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL3Rwc29ja2V0LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdHB3ZWIvLi9zcmMvd2Vic29jay5qcyJdLCJuYW1lcyI6WyJCYXNlNjQiLCJfa2V5U3RyIiwiaW5wdXQiLCJvdXRwdXQiLCJjaHIxIiwiY2hyMiIsImNocjMiLCJlbmMxIiwiZW5jMiIsImVuYzMiLCJlbmM0IiwiaSIsIl91dGY4RW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOERlY29kZSIsInN0cmluZyIsInV0ZnRleHQiLCJuIiwiYyIsImMyIiwiYzMiLCJUcFNvY2tldCIsIl9uYW1lIiwiYjY0IiwiZW5jb2RlIiwiZ3JlZXRtZSIsIlV0aWwiLCJXZWJzb2NrIiwiYXBpIiwid2Vic29ja2V0IiwibW9kZSIsInJRIiwiclFpIiwiclFtYXgiLCJzUSIsImV2ZW50SGFuZGxlcnMiLCJ0ZXN0X21vZGUiLCJnZXRfc1EiLCJnZXRfclEiLCJnZXRfclFpIiwic2V0X3JRaSIsInZhbCIsInJRbGVuIiwiclFwZWVrOCIsInJRc2hpZnQ4IiwiclF1bnNoaWZ0OCIsIm51bSIsInVuc2hpZnQiLCJyUXNoaWZ0MTYiLCJyUXNoaWZ0MzIiLCJyUXNoaWZ0U3RyIiwibGVuIiwiYXJyIiwic2xpY2UiLCJhcHBseSIsInJRc2hpZnRCeXRlcyIsInJRc2xpY2UiLCJzdGFydCIsImVuZCIsInJRd2FpdCIsIm1zZyIsImdvYmFjayIsIkVycm9yIiwiZW5jb2RlX21lc3NhZ2UiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwiZGVjb2RlX21lc3NhZ2UiLCJkYXRhIiwidTgiLCJwdXNoIiwiY29uY2F0IiwiZGVjb2RlIiwiZmx1c2giLCJidWZmZXJlZEFtb3VudCIsIkRlYnVnIiwibWF4QnVmZmVyZWRBbW91bnQiLCJzZW5kIiwiSW5mbyIsInNlbmRfc3RyaW5nIiwic3RyIiwic3BsaXQiLCJtYXAiLCJjaHIiLCJyZWN2X21lc3NhZ2UiLCJlIiwibWVzc2FnZSIsImV4YyIsInN0YWNrIiwiV2FybiIsImRlc2NyaXB0aW9uIiwibmFtZSIsImVycm9yIiwib24iLCJldnQiLCJoYW5kbGVyIiwiaW5pdCIsInByb3RvY29scyIsIndzX3NjaGVtYSIsImJ0Iiwid3NidCIsIndpbmRvdyIsInByb3RvdHlwZSIsIldlYlNvY2tldCIsImJpbmFyeVR5cGUiLCJuZXdfcHJvdG9jb2xzIiwib3BlbiIsInVyaSIsIm1hdGNoIiwib25tZXNzYWdlIiwib25vcGVuIiwicHJvdG9jb2wiLCJvbmNsb3NlIiwiY2xvc2UiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIk9QRU4iLCJDT05ORUNUSU5HIiwidGVzdE1vZGUiLCJvdmVycmlkZV9zZW5kIiwiZGF0YV9tb2RlIiwiY29uc3RydWN0b3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQs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b24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRwd2ViXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRwd2ViXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRwd2ViXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4qXG4qICBCYXNlNjQgZW5jb2RlIC8gZGVjb2RlXG4qICBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9cbipcbioqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlNjQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9rZXlTdHIgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICB9XG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG4gIGVuY29kZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IHRoaXMuX3V0ZjhFbmNvZGUoaW5wdXQpO1xuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICB9XG4gICAgICBvdXRwdXQgPSBvdXRwdXQgK1xuICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBkZWNvZGluZ1xuICBkZWNvZGUoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjM7XG4gICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgJycpO1xuXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuICAgICAgZW5jMSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jNCA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblxuICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XG4gICAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG4gICAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuXG4gICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xuXG4gICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuICAgICAgfVxuICAgIH1cbiAgICBvdXRwdXQgPSB0aGlzLl91dGY4RGVjb2RlKG91dHB1dCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xuICBfdXRmOEVuY29kZShzdHJpbmcpIHtcbiAgICB2YXIgdXRmdGV4dCA9ICcnO1xuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJyk7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcbiAgICAgIGxldCBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG5cbiAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHV0ZnRleHQ7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcbiAgX3V0ZjhEZWNvZGUodXRmdGV4dCkge1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGMgPSAwO1xuICAgIHZhciBjMiA9IDA7XG4gICAgdmFyIGMzID0gMDtcblxuICAgIHdoaWxlIChpIDwgdXRmdGV4dC5sZW5ndGgpIHtcbiAgICAgIGMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMik7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJpbXBvcnQgVHBTb2NrZXQgZnJvbSAnLi90cHNvY2tldC5qcyc7XG5leHBvcnQgeyBUcFNvY2tldCB9O1xuIiwiaW1wb3J0IEJhc2U2NCBmcm9tICcuL2Jhc2U2NCc7XG5pbXBvcnQgV2Vic29jayBmcm9tICcuL3dlYnNvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcFNvY2tldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX25hbWUgPSAnQmFycmEtVGVtcGVzdCc7XG4gIH1cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgZW5jb2RlZE5hbWUoKSB7XG4gICAgbGV0IGI2NCA9IG5ldyBCYXNlNjQoKTtcblxuICAgIHJldHVybiBiNjQuZW5jb2RlKHRoaXMuX25hbWUpO1xuICB9XG5cbiAgZ2V0IHNhbHV0YSgpIHtcbiAgICByZXR1cm4gV2Vic29jay5ncmVldG1lKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG59XG4iLCIvKiBlc2xpbnQgY2FtZWxjYXNlOjAgbm8tbXVsdGktc3BhY2VzOjAgKi9cbmltcG9ydCBCYXNlNjQgZnJvbSAnLi9iYXNlNjQnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vic29jaygpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhcGkgPSB7fSwgICAgICAgLy8gUHVibGljIEFQSVxuICAgIHdlYnNvY2tldCA9IG51bGwsIC8vIFdlYlNvY2tldCBvYmplY3RcbiAgICBtb2RlID0gJ2Jhc2U2NCcsICAvLyBDdXJyZW50IFdlYlNvY2tldCBtb2RlOiAnYmluYXJ5JywgJ2Jhc2U2NCdcbiAgICByUSA9IFtdLCAgICAgICAgICAvLyBSZWNlaXZlIHF1ZXVlXG4gICAgclFpID0gMCwgICAgICAgICAgLy8gUmVjZWl2ZSBxdWV1ZSBpbmRleFxuICAgIHJRbWF4ID0gMTAwMDAsICAgIC8vIE1heCByZWNlaXZlIHF1ZXVlIHNpemUgYmVmb3JlIGNvbXBhY3RpbmdcbiAgICBzUSA9IFtdLCAgICAgICAgICAvLyBTZW5kIHF1ZXVlXG4gICAgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICdtZXNzYWdlJzogZnVuY3Rpb24gKCkge30sXG4gICAgICAnb3Blbic6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgJ2Nsb3NlJzogZnVuY3Rpb24gKCkge30sXG4gICAgICAnZXJyb3InOiBmdW5jdGlvbiAoKSB7fVxuICAgIH0sXG4gICAgdGVzdF9tb2RlID0gZmFsc2U7XG5cbiAgLy9cbiAgLy8gUXVldWUgcHVibGljIGZ1bmN0aW9uc1xuICAvL1xuICBmdW5jdGlvbiBncmVldG1lKCkge1xuICAgIHJldHVybiAnY2ljY2FtZWxvISB1bm8gYSB6ZXJvISc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRfc1EoKSB7XG4gICAgcmV0dXJuIHNRO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0X3JRKCkge1xuICAgIHJldHVybiByUTtcbiAgfVxuICBmdW5jdGlvbiBnZXRfclFpKCkge1xuICAgIHJldHVybiByUWk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0X3JRaSh2YWwpIHtcbiAgICByUWkgPSB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiByUWxlbigpIHtcbiAgICByZXR1cm4gclEubGVuZ3RoIC0gclFpO1xuICB9XG5cbiAgZnVuY3Rpb24gclFwZWVrOCgpIHtcbiAgICByZXR1cm4gKHJRW3JRaV0pO1xuICB9XG4gIGZ1bmN0aW9uIHJRc2hpZnQ4KCkge1xuICAgIHJldHVybiAoclFbclFpKytdKTtcbiAgfVxuICBmdW5jdGlvbiByUXVuc2hpZnQ4KG51bSkge1xuICAgIGlmIChyUWkgPT09IDApIHtcbiAgICAgIHJRLnVuc2hpZnQobnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgclFpIC09IDE7XG4gICAgICByUVtyUWldID0gbnVtO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByUXNoaWZ0MTYoKSB7XG4gICAgcmV0dXJuIChyUVtyUWkrK10gPDwgOCkgK1xuICAgICAgICAgICAoclFbclFpKytdKTtcbiAgfVxuICBmdW5jdGlvbiByUXNoaWZ0MzIoKSB7XG4gICAgcmV0dXJuIChyUVtyUWkrK10gPDwgMjQpICtcbiAgICAgICAgICAgKHJRW3JRaSsrXSA8PCAxNikgK1xuICAgICAgICAgICAoclFbclFpKytdIDw8IDgpICtcbiAgICAgICAgICAgKHJRW3JRaSsrXSk7XG4gIH1cbiAgZnVuY3Rpb24gclFzaGlmdFN0cihsZW4pIHtcbiAgICBpZiAodHlwZW9mIChsZW4pID09PSAndW5kZWZpbmVkJykgeyBsZW4gPSByUWxlbigpOyB9XG4gICAgbGV0IGFyciA9IHJRLnNsaWNlKHJRaSwgclFpICsgbGVuKTtcblxuICAgIHJRaSArPSBsZW47XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYXJyKTtcbiAgfVxuICBmdW5jdGlvbiByUXNoaWZ0Qnl0ZXMobGVuKSB7XG4gICAgaWYgKHR5cGVvZiAobGVuKSA9PT0gJ3VuZGVmaW5lZCcpIHsgbGVuID0gclFsZW4oKTsgfVxuICAgIHJRaSArPSBsZW47XG4gICAgcmV0dXJuIHJRLnNsaWNlKHJRaSAtIGxlbiwgclFpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJRc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIGlmIChlbmQpIHtcbiAgICAgIHJldHVybiByUS5zbGljZShyUWkgKyBzdGFydCwgclFpICsgZW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHJRLnNsaWNlKHJRaSArIHN0YXJ0KTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBtdXN0IHdhaXQgZm9yICdudW0nIGJ5dGVzIChkZWZhdWx0IHRvIEZCVS5ieXRlcylcbiAgLy8gdG8gYmUgYXZhaWxhYmxlIGluIHRoZSByZWNlaXZlIHF1ZXVlLiBSZXR1cm4gdHJ1ZSBpZiB3ZSBuZWVkIHRvXG4gIC8vIHdhaXQgKGFuZCBwb3NzaWJseSBwcmludCBhIGRlYnVnIG1lc3NhZ2UpLCBvdGhlcndpc2UgZmFsc2UuXG4gIGZ1bmN0aW9uIHJRd2FpdChtc2csIG51bSwgZ29iYWNrKSB7XG4gICAgdmFyIHJRbGVuID0gclEubGVuZ3RoIC0gclFpOyAvLyBTa2lwIHJRbGVuKCkgZnVuY3Rpb24gY2FsbFxuXG4gICAgaWYgKHJRbGVuIDwgbnVtKSB7XG4gICAgICBpZiAoZ29iYWNrKSB7XG4gICAgICAgIGlmIChyUWkgPCBnb2JhY2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JRd2FpdCBjYW5ub3QgYmFja3VwICcgKyBnb2JhY2sgKyAnIGJ5dGVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgclFpIC09IGdvYmFjaztcbiAgICAgIH1cbiAgICAgIC8vIFV0aWwuRGVidWcoXCIgICB3YWl0aW5nIGZvciBcIiArIChudW0tclFsZW4pICtcbiAgICAgIC8vICAgICAgICAgICBcIiBcIiArIG1zZyArIFwiIGJ5dGUocylcIik7XG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vIHRydWUgbWVhbnMgbmVlZCBtb3JlIGRhdGFcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy9cbiAgLy8gUHJpdmF0ZSB1dGlsaXR5IHJvdXRpbmVzXG4gIC8vXG5cbiAgZnVuY3Rpb24gZW5jb2RlX21lc3NhZ2UoKSB7XG4gICAgaWYgKG1vZGUgPT09ICdiaW5hcnknKSB7XG4gICAgICAvLyBQdXQgaW4gYSBiaW5hcnkgYXJyYXlidWZmZXJcbiAgICAgIHJldHVybiAobmV3IFVpbnQ4QXJyYXkoc1EpKS5idWZmZXI7XG4gICAgfVxuICAgIC8vIGJhc2U2NCBlbmNvZGVcbiAgICByZXR1cm4gQmFzZTY0LmVuY29kZShzUSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVfbWVzc2FnZShkYXRhKSB7XG4gICAgLy8gVXRpbC5EZWJ1ZyhcIj4+IGRlY29kZV9tZXNzYWdlOiBcIiArIGRhdGEpO1xuICAgIGlmIChtb2RlID09PSAnYmluYXJ5Jykge1xuICAgICAgLy8gcHVzaCBhcnJheWJ1ZmZlciB2YWx1ZXMgb250byB0aGUgZW5kXG4gICAgICBsZXQgdTggPSBuZXcgVWludDhBcnJheShkYXRhKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1OC5sZW5ndGg7IGkrKykge1xuICAgICAgICByUS5wdXNoKHU4W2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYmFzZTY0IGRlY29kZSBhbmQgY29uY2F0IHRvIHRoZSBlbmRcbiAgICAgIHJRID0gclEuY29uY2F0KEJhc2U2NC5kZWNvZGUoZGF0YSwgMCkpO1xuICAgIH1cbiAgICAvLyBVdGlsLkRlYnVnKFwiPj4gZGVjb2RlX21lc3NhZ2UsIHJROiBcIiArIHJRKTtcbiAgfVxuXG4gIC8vXG4gIC8vIFB1YmxpYyBTZW5kIGZ1bmN0aW9uc1xuICAvL1xuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmICh3ZWJzb2NrZXQuYnVmZmVyZWRBbW91bnQgIT09IDApIHtcbiAgICAgIFV0aWwuRGVidWcoJ2J1ZmZlcmVkQW1vdW50OiAnICsgd2Vic29ja2V0LmJ1ZmZlcmVkQW1vdW50KTtcbiAgICB9XG4gICAgaWYgKHdlYnNvY2tldC5idWZmZXJlZEFtb3VudCA8IGFwaS5tYXhCdWZmZXJlZEFtb3VudCkge1xuICAgICAgLy8gVXRpbC5EZWJ1ZyhcImFycjogXCIgKyBhcnIpO1xuICAgICAgLy8gVXRpbC5EZWJ1ZyhcInNROiBcIiArIHNRKTtcbiAgICAgIGlmIChzUS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdlYnNvY2tldC5zZW5kKGVuY29kZV9tZXNzYWdlKHNRKSk7XG4gICAgICAgIHNRID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgVXRpbC5JbmZvKCdEZWxheWluZyBzZW5kLCBidWZmZXJlZEFtb3VudDogJyArIHdlYnNvY2tldC5idWZmZXJlZEFtb3VudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGFibGUgZm9yIHRlc3RpbmdcbiAgZnVuY3Rpb24gc2VuZChhcnIpIHtcbiAgICAvLyBVdGlsLkRlYnVnKFwiPj4gc2VuZF9hcnJheTogXCIgKyBhcnIpO1xuICAgIHNRID0gc1EuY29uY2F0KGFycik7XG4gICAgcmV0dXJuIGZsdXNoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kX3N0cmluZyhzdHIpIHtcbiAgICAvLyBVdGlsLkRlYnVnKFwiPj4gc2VuZF9zdHJpbmc6IFwiICsgc3RyKTtcbiAgICBhcGkuc2VuZChzdHIuc3BsaXQoJycpLm1hcChcbiAgICAgIGZ1bmN0aW9uIChjaHIpIHsgcmV0dXJuIGNoci5jaGFyQ29kZUF0KDApOyB9KSk7XG4gIH1cblxuICAvL1xuICAvLyBPdGhlciBwdWJsaWMgZnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24gcmVjdl9tZXNzYWdlKGUpIHtcbiAgICAvLyBVdGlsLkRlYnVnKFwiPj4gcmVjdl9tZXNzYWdlOiBcIiArIGUuZGF0YS5sZW5ndGgpO1xuICAgIHRyeSB7XG4gICAgICBkZWNvZGVfbWVzc2FnZShlLmRhdGEpO1xuICAgICAgaWYgKHJRbGVuKCkgPiAwKSB7XG4gICAgICAgIGV2ZW50SGFuZGxlcnMubWVzc2FnZSgpO1xuICAgICAgICAvLyBDb21wYWN0IHRoZSByZWNlaXZlIHF1ZXVlXG4gICAgICAgIGlmIChyUS5sZW5ndGggPiByUW1heCkge1xuICAgICAgICAgIC8vIFV0aWwuRGVidWcoXCJDb21wYWN0aW5nIHJlY2VpdmUgcXVldWVcIik7XG4gICAgICAgICAgclEgPSByUS5zbGljZShyUWkpO1xuICAgICAgICAgIHJRaSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFV0aWwuRGVidWcoJ0lnbm9yaW5nIGVtcHR5IG1lc3NhZ2UnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGMpIHtcbiAgICAgIGlmICh0eXBlb2YgZXhjLnN0YWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBVdGlsLldhcm4oJ3JlY3ZfbWVzc2FnZSwgY2F1Z2h0IGV4Y2VwdGlvbjogJyArIGV4Yy5zdGFjayk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBleGMuZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIFV0aWwuV2FybigncmVjdl9tZXNzYWdlLCBjYXVnaHQgZXhjZXB0aW9uOiAnICsgZXhjLmRlc2NyaXB0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFV0aWwuV2FybigncmVjdl9tZXNzYWdlLCBjYXVnaHQgZXhjZXB0aW9uOicgKyBleGMpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBleGMubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5lcnJvcihleGMubmFtZSArICc6ICcgKyBleGMubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudEhhbmRsZXJzLmVycm9yKGV4Yyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFV0aWwuRGVidWcoXCI8PCByZWN2X21lc3NhZ2VcIik7XG4gIH1cblxuICAvLyBTZXQgZXZlbnQgaGFuZGxlcnNcbiAgZnVuY3Rpb24gb24oZXZ0LCBoYW5kbGVyKSB7XG4gICAgZXZlbnRIYW5kbGVyc1tldnRdID0gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvdG9jb2xzLCB3c19zY2hlbWEpIHtcbiAgICB2YXIgYnQgPSBmYWxzZTtcbiAgICB2YXIgd3NidCA9IGZhbHNlO1xuICAgIC8vIHZhciB0cnlfYmluYXJ5ID0gZmFsc2U7XG5cbiAgICByUSA9IFtdO1xuICAgIHJRaSA9IDA7XG4gICAgc1EgPSBbXTtcbiAgICB3ZWJzb2NrZXQgPSBudWxsO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGZ1bGwgdHlwZWQgYXJyYXkgc3VwcG9ydFxuICAgIGlmICgoJ1VpbnQ4QXJyYXknIGluIHdpbmRvdykgJiYgKCdzZXQnIGluIFVpbnQ4QXJyYXkucHJvdG90eXBlKSkge1xuICAgICAgYnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgZnVsbCBiaW5hcnkgdHlwZSBzdXBwb3J0IGluIFdlYlNvY2tldFxuICAgIC8vIEluc3BpcmVkIGJ5OlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zNzBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvd2Vic29ja2V0cy9iaW5hcnkuanNcbiAgICB0cnkge1xuICAgICAgaWYgKGJ0ICYmICgnYmluYXJ5VHlwZScgaW4gV2ViU29ja2V0LnByb3RvdHlwZSB8fFxuICAgICAgICAgICAgICAgICAgICAgISEobmV3IFdlYlNvY2tldCh3c19zY2hlbWEgKyAnOi8vLicpLmJpbmFyeVR5cGUpKSkge1xuICAgICAgICBVdGlsLkluZm8oJ0RldGVjdGVkIGJpbmFyeVR5cGUgc3VwcG9ydCBpbiBXZWJTb2NrZXRzJyk7XG4gICAgICAgIHdzYnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4Yykge1xuICAgICAgLy8gSnVzdCBpZ25vcmUgZmFpbGVkIHRlc3QgbG9jYWxob3N0IGNvbm5lY3Rpb25zXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBwcm90b2NvbHMgaWYgbm90IHNwZWNpZmllZFxuICAgIGlmICh0eXBlb2YgKHByb3RvY29scykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAod3NidCkge1xuICAgICAgICBwcm90b2NvbHMgPSBbJ2JpbmFyeScsICdiYXNlNjQnXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3RvY29scyA9ICdiYXNlNjQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIGJpbmFyeSBzdXBwb3J0LCBtYWtlIHN1cmUgaXQgd2FzIG5vdCByZXF1ZXN0ZWRcbiAgICBpZiAoIXdzYnQpIHtcbiAgICAgIGlmIChwcm90b2NvbHMgPT09ICdiaW5hcnknKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGJpbmFyeSBzdWItcHJvdG9jb2wgcmVxdWVzdGVkIGJ1dCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIChwcm90b2NvbHMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgbmV3X3Byb3RvY29scyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvdG9jb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHByb3RvY29sc1tpXSA9PT0gJ2JpbmFyeScpIHtcbiAgICAgICAgICAgIFV0aWwuRXJyb3IoJ1NraXBwaW5nIHVuc3VwcG9ydGVkIFdlYlNvY2tldCBiaW5hcnkgc3ViLXByb3RvY29sJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld19wcm90b2NvbHMucHVzaChwcm90b2NvbHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3X3Byb3RvY29scy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcHJvdG9jb2xzID0gbmV3X3Byb3RvY29scztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgV2ViU29ja2V0IGJpbmFyeSBzdWItcHJvdG9jb2wgd2FzIHJlcXVlc3RlZCBhbmQgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvdG9jb2xzO1xuICB9XG5cbiAgZnVuY3Rpb24gb3Blbih1cmksIHByb3RvY29scykge1xuICAgIHZhciB3c19zY2hlbWEgPSB1cmkubWF0Y2goL14oW2Etel0rKTpcXC9cXC8vKVsxXTtcblxuICAgIHByb3RvY29scyA9IGluaXQocHJvdG9jb2xzLCB3c19zY2hlbWEpO1xuICAgIGlmICh0ZXN0X21vZGUpIHtcbiAgICAgIHdlYnNvY2tldCA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKTtcbiAgICAgIGlmIChwcm90b2NvbHMuaW5kZXhPZignYmluYXJ5JykgPj0gMCkge1xuICAgICAgICB3ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICB9XG4gICAgfVxuICAgIHdlYnNvY2tldC5vbm1lc3NhZ2UgPSByZWN2X21lc3NhZ2U7XG4gICAgd2Vic29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIFV0aWwuRGVidWcoJz4+IFdlYlNvY2sub25vcGVuJyk7XG4gICAgICBpZiAod2Vic29ja2V0LnByb3RvY29sKSB7XG4gICAgICAgIG1vZGUgPSB3ZWJzb2NrZXQucHJvdG9jb2w7XG4gICAgICAgIFV0aWwuSW5mbygnU2VydmVyIGNob3NlIHN1Yi1wcm90b2NvbDogJyArIHdlYnNvY2tldC5wcm90b2NvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlID0gJ2Jhc2U2NCc7XG4gICAgICAgIFV0aWwuRXJyb3IoJ1NlcnZlciBzZWxlY3Qgbm8gc3ViLXByb3RvY29sITogJyArIHdlYnNvY2tldC5wcm90b2NvbCk7XG4gICAgICB9XG4gICAgICBldmVudEhhbmRsZXJzLm9wZW4oKTtcbiAgICAgIFV0aWwuRGVidWcoJ1wiPDwgV2ViU29jay5vbm9wZW4nKTtcbiAgICB9O1xuICAgIHdlYnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFV0aWwuRGVidWcoJz4+IFdlYlNvY2sub25jbG9zZScpO1xuICAgICAgZXZlbnRIYW5kbGVycy5jbG9zZShlKTtcbiAgICAgIFV0aWwuRGVidWcoJzw8IFdlYlNvY2sub25jbG9zZScpO1xuICAgIH07XG4gICAgd2Vic29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgVXRpbC5EZWJ1ZygnPj4gV2ViU29jay5vbmVycm9yOiAnICsgZSk7XG4gICAgICBldmVudEhhbmRsZXJzLmVycm9yKGUpO1xuICAgICAgVXRpbC5EZWJ1ZygnPDwgV2ViU29jay5vbmVycm9yJyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmICh3ZWJzb2NrZXQpIHtcbiAgICAgIGlmICgod2Vic29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fFxuICAgICAgICAgICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpKSB7XG4gICAgICAgIFV0aWwuSW5mbygnQ2xvc2luZyBXZWJTb2NrZXQgY29ubmVjdGlvbicpO1xuICAgICAgICB3ZWJzb2NrZXQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIHdlYnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm47IH07XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW50ZXJuYWwgZnVuY3Rpb25zIGZvciB0ZXN0aW5nXG4gIC8vIFRha2VzIGEgc2VuZCBmdW5jdGlvbiwgcmV0dXJucyByZWZlcmVuY2UgdG8gcmVjdiBmdW5jdGlvblxuICBmdW5jdGlvbiB0ZXN0TW9kZShvdmVycmlkZV9zZW5kLCBkYXRhX21vZGUpIHtcbiAgICB0ZXN0X21vZGUgPSB0cnVlO1xuICAgIG1vZGUgPSBkYXRhX21vZGU7XG4gICAgYXBpLnNlbmQgPSBvdmVycmlkZV9zZW5kO1xuICAgIGFwaS5jbG9zZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHJldHVybiByZWN2X21lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDb25maWd1cmF0aW9uIHNldHRpbmdzXG4gICAgYXBpLm1heEJ1ZmZlcmVkQW1vdW50ID0gMjAwO1xuICAgIC8vIERpcmVjdCBhY2Nlc3MgdG8gc2VuZCBhbmQgcmVjZWl2ZSBxdWV1ZXNcbiAgICBhcGkuZ2V0X3NRICAgICAgID0gZ2V0X3NRO1xuICAgIGFwaS5nZXRfclEgICAgICAgPSBnZXRfclE7XG4gICAgYXBpLmdldF9yUWkgICAgICA9IGdldF9yUWk7XG4gICAgYXBpLnNldF9yUWkgICAgICA9IHNldF9yUWk7XG5cbiAgICAvLyBSb3V0aW5lcyB0byByZWFkIGZyb20gdGhlIHJlY2VpdmUgcXVldWVcbiAgICBhcGkuclFsZW4gICAgICAgID0gclFsZW47XG4gICAgYXBpLnJRcGVlazggICAgICA9IHJRcGVlazg7XG4gICAgYXBpLnJRc2hpZnQ4ICAgICA9IHJRc2hpZnQ4O1xuICAgIGFwaS5yUXVuc2hpZnQ4ICAgPSByUXVuc2hpZnQ4O1xuICAgIGFwaS5yUXNoaWZ0MTYgICAgPSByUXNoaWZ0MTY7XG4gICAgYXBpLnJRc2hpZnQzMiAgICA9IHJRc2hpZnQzMjtcbiAgICBhcGkuclFzaGlmdFN0ciAgID0gclFzaGlmdFN0cjtcbiAgICBhcGkuclFzaGlmdEJ5dGVzID0gclFzaGlmdEJ5dGVzO1xuICAgIGFwaS5yUXNsaWNlICAgICAgPSByUXNsaWNlO1xuICAgIGFwaS5yUXdhaXQgICAgICAgPSByUXdhaXQ7XG5cbiAgICBhcGkuZmx1c2ggICAgICAgID0gZmx1c2g7XG4gICAgYXBpLnNlbmQgICAgICAgICA9IHNlbmQ7XG4gICAgYXBpLnNlbmRfc3RyaW5nICA9IHNlbmRfc3RyaW5nO1xuXG4gICAgYXBpLm9uICAgICAgICAgICA9IG9uO1xuICAgIGFwaS5pbml0ICAgICAgICAgPSBpbml0O1xuICAgIGFwaS5vcGVuICAgICAgICAgPSBvcGVuO1xuICAgIGFwaS5jbG9zZSAgICAgICAgPSBjbG9zZTtcbiAgICBhcGkudGVzdE1vZGUgICAgID0gdGVzdE1vZGU7XG5cbiAgICBjb25zb2xlLmxvZyhncmVldG1lKTtcblxuICAgIHJldHVybiBhcGk7XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0b3IoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=