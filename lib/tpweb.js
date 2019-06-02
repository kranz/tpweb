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
      } //   console.log("   waiting for " + (num-rQlen) +
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
    //   console.log(">> decode_message: " + data);
    if (mode === 'binary') {
      // push arraybuffer values onto the end
      var u8 = new Uint8Array(data);

      for (var i = 0; i < u8.length; i++) {
        rQ.push(u8[i]);
      }
    } else {
      // base64 decode and concat to the end
      rQ = rQ.concat(_base.default.decode(data, 0));
    } //   console.log(">> decode_message, rQ: " + rQ);

  } //
  // Public Send functions
  //


  function flush() {
    if (websocket.bufferedAmount !== 0) {
      console.log('bufferedAmount: ' + websocket.bufferedAmount);
    }

    if (websocket.bufferedAmount < api.maxBufferedAmount) {
      //   console.log("arr: " + arr);
      //   console.log("sQ: " + sQ);
      if (sQ.length > 0) {
        websocket.send(encode_message(sQ));
        sQ = [];
      }

      return true;
    }

    console.log('Delaying send, bufferedAmount: ' + websocket.bufferedAmount);
    return false;
  } // overridable for testing


  function send(arr) {
    //   console.log(">> send_array: " + arr);
    sQ = sQ.concat(arr);
    return flush();
  }

  function send_string(str) {
    //   console.log(">> send_string: " + str);
    api.send(str.split('').map(function (chr) {
      return chr.charCodeAt(0);
    }));
  } //
  // Other public functions


  function recv_message(e) {
    //   console.log(">> recv_message: " + e.data.length);
    try {
      decode_message(e.data);

      if (rQlen() > 0) {
        eventHandlers.message(); // Compact the receive queue

        if (rQ.length > rQmax) {
          //   console.log("Compacting receive queue");
          rQ = rQ.slice(rQi);
          rQi = 0;
        }
      } else {
        console.log('Ignoring empty message');
      }
    } catch (exc) {
      if (typeof exc.stack !== 'undefined') {
        console.warn('recv_message, caught exception: ' + exc.stack);
      } else if (typeof exc.description !== 'undefined') {
        console.warn('recv_message, caught exception: ' + exc.description);
      } else {
        console.warn('recv_message, caught exception:' + exc);
      }

      if (typeof exc.name !== 'undefined') {
        eventHandlers.error(exc.name + ': ' + exc.message);
      } else {
        eventHandlers.error(exc);
      }
    } //   console.log("<< recv_message");

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
        console.log('Detected binaryType support in WebSockets');
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
            console.error('Skipping unsupported WebSocket binary sub-protocol');
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
      console.log('>> WebSock.onopen');

      if (websocket.protocol) {
        mode = websocket.protocol;
        console.log('Server chose sub-protocol: ' + websocket.protocol);
      } else {
        mode = 'base64';
        console.error('Server select no sub-protocol!: ' + websocket.protocol);
      }

      eventHandlers.open();
      console.log('"<< WebSock.onopen');
    };

    websocket.onclose = function (e) {
      console.log('>> WebSock.onclose');
      eventHandlers.close(e);
      console.log('<< WebSock.onclose');
    };

    websocket.onerror = function (e) {
      console.log('>> WebSock.onerror: ' + e);
      eventHandlers.error(e);
      console.log('<< WebSock.onerror');
    };
  }

  function close() {
    if (websocket) {
      if (websocket.readyState === WebSocket.OPEN || websocket.readyState === WebSocket.CONNECTING) {
        console.log('Closing WebSocket connection');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHdlYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHB3ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB3ZWIvLi9zcmMvYmFzZTY0LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL3Rwc29ja2V0LmpzIiwid2VicGFjazovL3Rwd2ViLy4vc3JjL3dlYnNvY2suanMiXSwibmFtZXMiOlsiQmFzZTY0IiwiX2tleVN0ciIsImlucHV0Iiwib3V0cHV0IiwiY2hyMSIsImNocjIiLCJjaHIzIiwiZW5jMSIsImVuYzIiLCJlbmMzIiwiZW5jNCIsImkiLCJfdXRmOEVuY29kZSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpc05hTiIsImNoYXJBdCIsInJlcGxhY2UiLCJpbmRleE9mIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiX3V0ZjhEZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMiIsImMzIiwiVHBTb2NrZXQiLCJfbmFtZSIsImI2NCIsImVuY29kZSIsImdyZWV0bWUiLCJXZWJzb2NrIiwiYXBpIiwid2Vic29ja2V0IiwibW9kZSIsInJRIiwiclFpIiwiclFtYXgiLCJzUSIsImV2ZW50SGFuZGxlcnMiLCJ0ZXN0X21vZGUiLCJnZXRfc1EiLCJnZXRfclEiLCJnZXRfclFpIiwic2V0X3JRaSIsInZhbCIsInJRbGVuIiwiclFwZWVrOCIsInJRc2hpZnQ4IiwiclF1bnNoaWZ0OCIsIm51bSIsInVuc2hpZnQiLCJyUXNoaWZ0MTYiLCJyUXNoaWZ0MzIiLCJyUXNoaWZ0U3RyIiwibGVuIiwiYXJyIiwic2xpY2UiLCJhcHBseSIsInJRc2hpZnRCeXRlcyIsInJRc2xpY2UiLCJzdGFydCIsImVuZCIsInJRd2FpdCIsIm1zZyIsImdvYmFjayIsIkVycm9yIiwiZW5jb2RlX21lc3NhZ2UiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwiZGVjb2RlX21lc3NhZ2UiLCJkYXRhIiwidTgiLCJwdXNoIiwiY29uY2F0IiwiZGVjb2RlIiwiZmx1c2giLCJidWZmZXJlZEFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXhCdWZmZXJlZEFtb3VudCIsInNlbmQiLCJzZW5kX3N0cmluZyIsInN0ciIsInNwbGl0IiwibWFwIiwiY2hyIiwicmVjdl9tZXNzYWdlIiwiZSIsIm1lc3NhZ2UiLCJleGMiLCJzdGFjayIsIndhcm4iLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJlcnJvciIsIm9uIiwiZXZ0IiwiaGFuZGxlciIsImluaXQiLCJwcm90b2NvbHMiLCJ3c19zY2hlbWEiLCJidCIsIndzYnQiLCJ3aW5kb3ciLCJwcm90b3R5cGUiLCJXZWJTb2NrZXQiLCJiaW5hcnlUeXBlIiwibmV3X3Byb3RvY29scyIsIm9wZW4iLCJ1cmkiLCJtYXRjaCIsIm9ubWVzc2FnZSIsIm9ub3BlbiIsInByb3RvY29sIiwib25jbG9zZSIsImNsb3NlIiwib25lcnJvciIsInJlYWR5U3RhdGUiLCJPUEVOIiwiQ09OTkVDVElORyIsInRlc3RNb2RlIiwib3ZlcnJpZGVfc2VuZCIsImRhdGFfbW9kZSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztJQU9xQkEsTTs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLG1FQUFmO0FBQ0QsRyxDQUNEOzs7OzsyQkFDT0MsSyxFQUFPO0FBQ1osVUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJQyxJQUFKLEVBQVVDLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0NDLElBQWxDLEVBQXdDQyxJQUF4QztBQUNBLFVBQUlDLENBQUMsR0FBRyxDQUFSO0FBRUFULFdBQUssR0FBRyxLQUFLVSxXQUFMLENBQWlCVixLQUFqQixDQUFSOztBQUNBLGFBQU9TLENBQUMsR0FBR1QsS0FBSyxDQUFDVyxNQUFqQixFQUF5QjtBQUN2QlQsWUFBSSxHQUFHRixLQUFLLENBQUNZLFVBQU4sQ0FBaUJILENBQUMsRUFBbEIsQ0FBUDtBQUNBTixZQUFJLEdBQUdILEtBQUssQ0FBQ1ksVUFBTixDQUFpQkgsQ0FBQyxFQUFsQixDQUFQO0FBQ0FMLFlBQUksR0FBR0osS0FBSyxDQUFDWSxVQUFOLENBQWlCSCxDQUFDLEVBQWxCLENBQVA7QUFFQUosWUFBSSxHQUFHSCxJQUFJLElBQUksQ0FBZjtBQUNBSSxZQUFJLEdBQUksQ0FBQ0osSUFBSSxHQUFHLENBQVIsS0FBYyxDQUFmLEdBQXFCQyxJQUFJLElBQUksQ0FBcEM7QUFDQUksWUFBSSxHQUFJLENBQUNKLElBQUksR0FBRyxFQUFSLEtBQWUsQ0FBaEIsR0FBc0JDLElBQUksSUFBSSxDQUFyQztBQUNBSSxZQUFJLEdBQUdKLElBQUksR0FBRyxFQUFkOztBQUVBLFlBQUlTLEtBQUssQ0FBQ1YsSUFBRCxDQUFULEVBQWlCO0FBQ2ZJLGNBQUksR0FBR0MsSUFBSSxHQUFHLEVBQWQ7QUFDRCxTQUZELE1BRU8sSUFBSUssS0FBSyxDQUFDVCxJQUFELENBQVQsRUFBaUI7QUFDdEJJLGNBQUksR0FBRyxFQUFQO0FBQ0Q7O0FBQ0RQLGNBQU0sR0FBR0EsTUFBTSxHQUNmLEtBQUtGLE9BQUwsQ0FBYWUsTUFBYixDQUFvQlQsSUFBcEIsQ0FEUyxHQUNtQixLQUFLTixPQUFMLENBQWFlLE1BQWIsQ0FBb0JSLElBQXBCLENBRG5CLEdBRVQsS0FBS1AsT0FBTCxDQUFhZSxNQUFiLENBQW9CUCxJQUFwQixDQUZTLEdBRW1CLEtBQUtSLE9BQUwsQ0FBYWUsTUFBYixDQUFvQk4sSUFBcEIsQ0FGNUI7QUFHRDs7QUFDRCxhQUFPUCxNQUFQO0FBQ0QsSyxDQUVEOzs7OzJCQUNPRCxLLEVBQU87QUFDWixVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLElBQUosRUFBVUMsSUFBVixFQUFnQkMsSUFBaEI7QUFDQSxVQUFJQyxJQUFKLEVBQVVDLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QjtBQUNBLFVBQUlDLENBQUMsR0FBRyxDQUFSO0FBRUFULFdBQUssR0FBR0EsS0FBSyxDQUFDZSxPQUFOLENBQWMscUJBQWQsRUFBcUMsRUFBckMsQ0FBUjs7QUFFQSxhQUFPTixDQUFDLEdBQUdULEtBQUssQ0FBQ1csTUFBakIsRUFBeUI7QUFFdkJOLFlBQUksR0FBRyxLQUFLTixPQUFMLENBQWFpQixPQUFiLENBQXFCaEIsS0FBSyxDQUFDYyxNQUFOLENBQWFMLENBQUMsRUFBZCxDQUFyQixDQUFQO0FBQ0FILFlBQUksR0FBRyxLQUFLUCxPQUFMLENBQWFpQixPQUFiLENBQXFCaEIsS0FBSyxDQUFDYyxNQUFOLENBQWFMLENBQUMsRUFBZCxDQUFyQixDQUFQO0FBQ0FGLFlBQUksR0FBRyxLQUFLUixPQUFMLENBQWFpQixPQUFiLENBQXFCaEIsS0FBSyxDQUFDYyxNQUFOLENBQWFMLENBQUMsRUFBZCxDQUFyQixDQUFQO0FBQ0FELFlBQUksR0FBRyxLQUFLVCxPQUFMLENBQWFpQixPQUFiLENBQXFCaEIsS0FBSyxDQUFDYyxNQUFOLENBQWFMLENBQUMsRUFBZCxDQUFyQixDQUFQO0FBRUFQLFlBQUksR0FBSUcsSUFBSSxJQUFJLENBQVQsR0FBZUMsSUFBSSxJQUFJLENBQTlCO0FBQ0FILFlBQUksR0FBSSxDQUFDRyxJQUFJLEdBQUcsRUFBUixLQUFlLENBQWhCLEdBQXNCQyxJQUFJLElBQUksQ0FBckM7QUFDQUgsWUFBSSxHQUFJLENBQUNHLElBQUksR0FBRyxDQUFSLEtBQWMsQ0FBZixHQUFvQkMsSUFBM0I7QUFFQVAsY0FBTSxHQUFHQSxNQUFNLEdBQUdnQixNQUFNLENBQUNDLFlBQVAsQ0FBb0JoQixJQUFwQixDQUFsQjs7QUFFQSxZQUFJSyxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmTixnQkFBTSxHQUFHQSxNQUFNLEdBQUdnQixNQUFNLENBQUNDLFlBQVAsQ0FBb0JmLElBQXBCLENBQWxCO0FBQ0Q7O0FBQ0QsWUFBSUssSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZlAsZ0JBQU0sR0FBR0EsTUFBTSxHQUFHZ0IsTUFBTSxDQUFDQyxZQUFQLENBQW9CZCxJQUFwQixDQUFsQjtBQUNEO0FBQ0Y7O0FBQ0RILFlBQU0sR0FBRyxLQUFLa0IsV0FBTCxDQUFpQmxCLE1BQWpCLENBQVQ7QUFDQSxhQUFPQSxNQUFQO0FBQ0QsSyxDQUVEOzs7O2dDQUNZbUIsTSxFQUFRO0FBQ2xCLFVBQUlDLE9BQU8sR0FBRyxFQUFkO0FBRUFELFlBQU0sR0FBR0EsTUFBTSxDQUFDTCxPQUFQLENBQWUsT0FBZixFQUF3QixJQUF4QixDQUFUOztBQUNBLFdBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDVCxNQUEzQixFQUFtQ1csQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFJQyxDQUFDLEdBQUdILE1BQU0sQ0FBQ1IsVUFBUCxDQUFrQlUsQ0FBbEIsQ0FBUjs7QUFFQSxZQUFJQyxDQUFDLEdBQUcsR0FBUixFQUFhO0FBQ1hGLGlCQUFPLElBQUlKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkssQ0FBcEIsQ0FBWDtBQUNELFNBRkQsTUFFTyxJQUFLQSxDQUFDLEdBQUcsR0FBTCxJQUFjQSxDQUFDLEdBQUcsSUFBdEIsRUFBNkI7QUFDbENGLGlCQUFPLElBQUlKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQkssQ0FBQyxJQUFJLENBQU4sR0FBVyxHQUEvQixDQUFYO0FBQ0FGLGlCQUFPLElBQUlKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQkssQ0FBQyxHQUFHLEVBQUwsR0FBVyxHQUEvQixDQUFYO0FBQ0QsU0FITSxNQUdBO0FBQ0xGLGlCQUFPLElBQUlKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQkssQ0FBQyxJQUFJLEVBQU4sR0FBWSxHQUFoQyxDQUFYO0FBQ0FGLGlCQUFPLElBQUlKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFzQkssQ0FBQyxJQUFJLENBQU4sR0FBVyxFQUFaLEdBQWtCLEdBQXRDLENBQVg7QUFDQUYsaUJBQU8sSUFBSUosTUFBTSxDQUFDQyxZQUFQLENBQXFCSyxDQUFDLEdBQUcsRUFBTCxHQUFXLEdBQS9CLENBQVg7QUFDRDtBQUNGOztBQUNELGFBQU9GLE9BQVA7QUFDRCxLLENBRUQ7Ozs7Z0NBQ1lBLE8sRUFBUztBQUNuQixVQUFJRCxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlYLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBSWMsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUlDLEVBQUUsR0FBRyxDQUFUOztBQUVBLGFBQU9oQixDQUFDLEdBQUdZLE9BQU8sQ0FBQ1YsTUFBbkIsRUFBMkI7QUFDekJZLFNBQUMsR0FBR0YsT0FBTyxDQUFDVCxVQUFSLENBQW1CSCxDQUFuQixDQUFKOztBQUNBLFlBQUljLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFDWEgsZ0JBQU0sSUFBSUgsTUFBTSxDQUFDQyxZQUFQLENBQW9CSyxDQUFwQixDQUFWO0FBQ0FkLFdBQUM7QUFDRixTQUhELE1BR08sSUFBS2MsQ0FBQyxHQUFHLEdBQUwsSUFBY0EsQ0FBQyxHQUFHLEdBQXRCLEVBQTRCO0FBQ2pDQyxZQUFFLEdBQUdILE9BQU8sQ0FBQ1QsVUFBUixDQUFtQkgsQ0FBQyxHQUFHLENBQXZCLENBQUw7QUFDQVcsZ0JBQU0sSUFBSUgsTUFBTSxDQUFDQyxZQUFQLENBQXFCLENBQUNLLENBQUMsR0FBRyxFQUFMLEtBQVksQ0FBYixHQUFtQkMsRUFBRSxHQUFHLEVBQTVDLENBQVY7QUFDQWYsV0FBQyxJQUFJLENBQUw7QUFDRCxTQUpNLE1BSUE7QUFDTGUsWUFBRSxHQUFHSCxPQUFPLENBQUNULFVBQVIsQ0FBbUJILENBQUMsR0FBRyxDQUF2QixDQUFMO0FBQ0FnQixZQUFFLEdBQUdKLE9BQU8sQ0FBQ1QsVUFBUixDQUFtQkgsQ0FBQyxHQUFHLENBQXZCLENBQUw7QUFDQVcsZ0JBQU0sSUFBSUgsTUFBTSxDQUFDQyxZQUFQLENBQXFCLENBQUNLLENBQUMsR0FBRyxFQUFMLEtBQVksRUFBYixHQUFvQixDQUFDQyxFQUFFLEdBQUcsRUFBTixLQUFhLENBQWpDLEdBQXVDQyxFQUFFLEdBQUcsRUFBaEUsQ0FBVjtBQUNBaEIsV0FBQyxJQUFJLENBQUw7QUFDRDtBQUNGOztBQUNELGFBQU9XLE1BQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hISDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJNLFE7OztBQUNuQixzQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxlQUFiO0FBQ0Q7Ozs7d0JBQ1U7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O3dCQUVpQjtBQUNoQixVQUFJQyxHQUFHLEdBQUcsbUJBQVY7QUFFQSxhQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxLQUFLRixLQUFoQixDQUFQO0FBQ0Q7Ozt3QkFFWTtBQUNYLGFBQU8saUJBQVFHLE9BQVIsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSDs7Ozs7O0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUNoQzs7QUFFQSxNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUFBLE1BQW9CO0FBQ2xCQyxXQUFTLEdBQUcsSUFEZDtBQUFBLE1BQ29CO0FBQ2xCQyxNQUFJLEdBQUcsUUFGVDtBQUFBLE1BRW9CO0FBQ2xCQyxJQUFFLEdBQUcsRUFIUDtBQUFBLE1BR29CO0FBQ2xCQyxLQUFHLEdBQUcsQ0FKUjtBQUFBLE1BSW9CO0FBQ2xCQyxPQUFLLEdBQUcsS0FMVjtBQUFBLE1BS29CO0FBQ2xCQyxJQUFFLEdBQUcsRUFOUDtBQUFBLE1BTW9CO0FBQ2xCQyxlQUFhLEdBQUc7QUFDZCxlQUFXLG1CQUFZLENBQUUsQ0FEWDtBQUVkLFlBQVEsZ0JBQVksQ0FBRSxDQUZSO0FBR2QsYUFBUyxpQkFBWSxDQUFFLENBSFQ7QUFJZCxhQUFTLGlCQUFZLENBQUU7QUFKVCxHQVBsQjtBQUFBLE1BYUVDLFNBQVMsR0FBRyxLQWJkLENBSGdDLENBa0JoQztBQUNBO0FBQ0E7O0FBQ0EsV0FBU1YsT0FBVCxHQUFtQjtBQUNqQixXQUFPLHdCQUFQO0FBQ0Q7O0FBRUQsV0FBU1csTUFBVCxHQUFrQjtBQUNoQixXQUFPSCxFQUFQO0FBQ0Q7O0FBRUQsV0FBU0ksTUFBVCxHQUFrQjtBQUNoQixXQUFPUCxFQUFQO0FBQ0Q7O0FBQ0QsV0FBU1EsT0FBVCxHQUFtQjtBQUNqQixXQUFPUCxHQUFQO0FBQ0Q7O0FBQ0QsV0FBU1EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEJULE9BQUcsR0FBR1MsR0FBTjtBQUNEOztBQUVELFdBQVNDLEtBQVQsR0FBaUI7QUFDZixXQUFPWCxFQUFFLENBQUN4QixNQUFILEdBQVl5QixHQUFuQjtBQUNEOztBQUVELFdBQVNXLE9BQVQsR0FBbUI7QUFDakIsV0FBUVosRUFBRSxDQUFDQyxHQUFELENBQVY7QUFDRDs7QUFDRCxXQUFTWSxRQUFULEdBQW9CO0FBQ2xCLFdBQVFiLEVBQUUsQ0FBQ0MsR0FBRyxFQUFKLENBQVY7QUFDRDs7QUFDRCxXQUFTYSxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixRQUFJZCxHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ2JELFFBQUUsQ0FBQ2dCLE9BQUgsQ0FBV0QsR0FBWDtBQUNELEtBRkQsTUFFTztBQUNMZCxTQUFHLElBQUksQ0FBUDtBQUNBRCxRQUFFLENBQUNDLEdBQUQsQ0FBRixHQUFVYyxHQUFWO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTRSxTQUFULEdBQXFCO0FBQ25CLFdBQU8sQ0FBQ2pCLEVBQUUsQ0FBQ0MsR0FBRyxFQUFKLENBQUYsSUFBYSxDQUFkLElBQ0NELEVBQUUsQ0FBQ0MsR0FBRyxFQUFKLENBRFY7QUFFRDs7QUFDRCxXQUFTaUIsU0FBVCxHQUFxQjtBQUNuQixXQUFPLENBQUNsQixFQUFFLENBQUNDLEdBQUcsRUFBSixDQUFGLElBQWEsRUFBZCxLQUNDRCxFQUFFLENBQUNDLEdBQUcsRUFBSixDQUFGLElBQWEsRUFEZCxLQUVDRCxFQUFFLENBQUNDLEdBQUcsRUFBSixDQUFGLElBQWEsQ0FGZCxJQUdDRCxFQUFFLENBQUNDLEdBQUcsRUFBSixDQUhWO0FBSUQ7O0FBQ0QsV0FBU2tCLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLFFBQUksT0FBUUEsR0FBUixLQUFpQixXQUFyQixFQUFrQztBQUFFQSxTQUFHLEdBQUdULEtBQUssRUFBWDtBQUFnQjs7QUFDcEQsUUFBSVUsR0FBRyxHQUFHckIsRUFBRSxDQUFDc0IsS0FBSCxDQUFTckIsR0FBVCxFQUFjQSxHQUFHLEdBQUdtQixHQUFwQixDQUFWO0FBRUFuQixPQUFHLElBQUltQixHQUFQO0FBQ0EsV0FBT3RDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQndDLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRixHQUFoQyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBU0csWUFBVCxDQUFzQkosR0FBdEIsRUFBMkI7QUFDekIsUUFBSSxPQUFRQSxHQUFSLEtBQWlCLFdBQXJCLEVBQWtDO0FBQUVBLFNBQUcsR0FBR1QsS0FBSyxFQUFYO0FBQWdCOztBQUNwRFYsT0FBRyxJQUFJbUIsR0FBUDtBQUNBLFdBQU9wQixFQUFFLENBQUNzQixLQUFILENBQVNyQixHQUFHLEdBQUdtQixHQUFmLEVBQW9CbkIsR0FBcEIsQ0FBUDtBQUNEOztBQUVELFdBQVN3QixPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDM0IsUUFBSUEsR0FBSixFQUFTO0FBQ1AsYUFBTzNCLEVBQUUsQ0FBQ3NCLEtBQUgsQ0FBU3JCLEdBQUcsR0FBR3lCLEtBQWYsRUFBc0J6QixHQUFHLEdBQUcwQixHQUE1QixDQUFQO0FBQ0Q7O0FBQ0QsV0FBTzNCLEVBQUUsQ0FBQ3NCLEtBQUgsQ0FBU3JCLEdBQUcsR0FBR3lCLEtBQWYsQ0FBUDtBQUNELEdBckYrQixDQXVGaEM7QUFDQTtBQUNBOzs7QUFDQSxXQUFTRSxNQUFULENBQWdCQyxHQUFoQixFQUFxQmQsR0FBckIsRUFBMEJlLE1BQTFCLEVBQWtDO0FBQ2hDLFFBQUluQixLQUFLLEdBQUdYLEVBQUUsQ0FBQ3hCLE1BQUgsR0FBWXlCLEdBQXhCLENBRGdDLENBQ0g7O0FBRTdCLFFBQUlVLEtBQUssR0FBR0ksR0FBWixFQUFpQjtBQUNmLFVBQUllLE1BQUosRUFBWTtBQUNWLFlBQUk3QixHQUFHLEdBQUc2QixNQUFWLEVBQWtCO0FBQ2hCLGdCQUFNLElBQUlDLEtBQUosQ0FBVSwwQkFBMEJELE1BQTFCLEdBQW1DLFFBQTdDLENBQU47QUFDRDs7QUFDRDdCLFdBQUcsSUFBSTZCLE1BQVA7QUFDRCxPQU5jLENBT2Y7QUFDQTs7O0FBQ0EsYUFBTyxJQUFQLENBVGUsQ0FTRDtBQUNmOztBQUNELFdBQU8sS0FBUDtBQUNELEdBekcrQixDQTJHaEM7QUFDQTtBQUNBOzs7QUFFQSxXQUFTRSxjQUFULEdBQTBCO0FBQ3hCLFFBQUlqQyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQjtBQUNBLGFBQVEsSUFBSWtDLFVBQUosQ0FBZTlCLEVBQWYsQ0FBRCxDQUFxQitCLE1BQTVCO0FBQ0QsS0FKdUIsQ0FLeEI7OztBQUNBLFdBQU8sY0FBT3hDLE1BQVAsQ0FBY1MsRUFBZCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU2dDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzVCO0FBQ0EsUUFBSXJDLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCO0FBQ0EsVUFBSXNDLEVBQUUsR0FBRyxJQUFJSixVQUFKLENBQWVHLElBQWYsQ0FBVDs7QUFFQSxXQUFLLElBQUk5RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHK0QsRUFBRSxDQUFDN0QsTUFBdkIsRUFBK0JGLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMwQixVQUFFLENBQUNzQyxJQUFILENBQVFELEVBQUUsQ0FBQy9ELENBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ0w7QUFDQTBCLFFBQUUsR0FBR0EsRUFBRSxDQUFDdUMsTUFBSCxDQUFVLGNBQU9DLE1BQVAsQ0FBY0osSUFBZCxFQUFvQixDQUFwQixDQUFWLENBQUw7QUFDRCxLQVoyQixDQWE1Qjs7QUFDRCxHQXRJK0IsQ0F3SWhDO0FBQ0E7QUFDQTs7O0FBRUEsV0FBU0ssS0FBVCxHQUFpQjtBQUNmLFFBQUkzQyxTQUFTLENBQUM0QyxjQUFWLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2xDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUI5QyxTQUFTLENBQUM0QyxjQUEzQztBQUNEOztBQUNELFFBQUk1QyxTQUFTLENBQUM0QyxjQUFWLEdBQTJCN0MsR0FBRyxDQUFDZ0QsaUJBQW5DLEVBQXNEO0FBQ3BEO0FBQ0E7QUFDQSxVQUFJMUMsRUFBRSxDQUFDM0IsTUFBSCxHQUFZLENBQWhCLEVBQW1CO0FBQ2pCc0IsaUJBQVMsQ0FBQ2dELElBQVYsQ0FBZWQsY0FBYyxDQUFDN0IsRUFBRCxDQUE3QjtBQUNBQSxVQUFFLEdBQUcsRUFBTDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOztBQUNEd0MsV0FBTyxDQUFDQyxHQUFSLENBQVksb0NBQW9DOUMsU0FBUyxDQUFDNEMsY0FBMUQ7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQTNKK0IsQ0E2SmhDOzs7QUFDQSxXQUFTSSxJQUFULENBQWN6QixHQUFkLEVBQW1CO0FBQ2pCO0FBQ0FsQixNQUFFLEdBQUdBLEVBQUUsQ0FBQ29DLE1BQUgsQ0FBVWxCLEdBQVYsQ0FBTDtBQUNBLFdBQU9vQixLQUFLLEVBQVo7QUFDRDs7QUFFRCxXQUFTTSxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN4QjtBQUNBbkQsT0FBRyxDQUFDaUQsSUFBSixDQUFTRSxHQUFHLENBQUNDLEtBQUosQ0FBVSxFQUFWLEVBQWNDLEdBQWQsQ0FDUCxVQUFVQyxHQUFWLEVBQWU7QUFBRSxhQUFPQSxHQUFHLENBQUMxRSxVQUFKLENBQWUsQ0FBZixDQUFQO0FBQTJCLEtBRHJDLENBQVQ7QUFFRCxHQXhLK0IsQ0EwS2hDO0FBQ0E7OztBQUVBLFdBQVMyRSxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QjtBQUNBLFFBQUk7QUFDRmxCLG9CQUFjLENBQUNrQixDQUFDLENBQUNqQixJQUFILENBQWQ7O0FBQ0EsVUFBSXpCLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZQLHFCQUFhLENBQUNrRCxPQUFkLEdBRGUsQ0FFZjs7QUFDQSxZQUFJdEQsRUFBRSxDQUFDeEIsTUFBSCxHQUFZMEIsS0FBaEIsRUFBdUI7QUFDckI7QUFDQUYsWUFBRSxHQUFHQSxFQUFFLENBQUNzQixLQUFILENBQVNyQixHQUFULENBQUw7QUFDQUEsYUFBRyxHQUFHLENBQU47QUFDRDtBQUNGLE9BUkQsTUFRTztBQUNMMEMsZUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRDtBQUNGLEtBYkQsQ0FhRSxPQUFPVyxHQUFQLEVBQVk7QUFDWixVQUFJLE9BQU9BLEdBQUcsQ0FBQ0MsS0FBWCxLQUFxQixXQUF6QixFQUFzQztBQUNwQ2IsZUFBTyxDQUFDYyxJQUFSLENBQWEscUNBQXFDRixHQUFHLENBQUNDLEtBQXREO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBT0QsR0FBRyxDQUFDRyxXQUFYLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ2pEZixlQUFPLENBQUNjLElBQVIsQ0FBYSxxQ0FBcUNGLEdBQUcsQ0FBQ0csV0FBdEQ7QUFDRCxPQUZNLE1BRUE7QUFDTGYsZUFBTyxDQUFDYyxJQUFSLENBQWEsb0NBQW9DRixHQUFqRDtBQUNEOztBQUNELFVBQUksT0FBT0EsR0FBRyxDQUFDSSxJQUFYLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DdkQscUJBQWEsQ0FBQ3dELEtBQWQsQ0FBb0JMLEdBQUcsQ0FBQ0ksSUFBSixHQUFXLElBQVgsR0FBa0JKLEdBQUcsQ0FBQ0QsT0FBMUM7QUFDRCxPQUZELE1BRU87QUFDTGxELHFCQUFhLENBQUN3RCxLQUFkLENBQW9CTCxHQUFwQjtBQUNEO0FBQ0YsS0E1QnNCLENBNkJ2Qjs7QUFDRCxHQTNNK0IsQ0E2TWhDOzs7QUFDQSxXQUFTTSxFQUFULENBQVlDLEdBQVosRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ3hCM0QsaUJBQWEsQ0FBQzBELEdBQUQsQ0FBYixHQUFxQkMsT0FBckI7QUFDRDs7QUFFRCxXQUFTQyxJQUFULENBQWNDLFNBQWQsRUFBeUJDLFNBQXpCLEVBQW9DO0FBQ2xDLFFBQUlDLEVBQUUsR0FBRyxLQUFUO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQVgsQ0FGa0MsQ0FHbEM7O0FBRUFwRSxNQUFFLEdBQUcsRUFBTDtBQUNBQyxPQUFHLEdBQUcsQ0FBTjtBQUNBRSxNQUFFLEdBQUcsRUFBTDtBQUNBTCxhQUFTLEdBQUcsSUFBWixDQVJrQyxDQVVsQzs7QUFDQSxRQUFLLGdCQUFnQnVFLE1BQWpCLElBQTZCLFNBQVNwQyxVQUFVLENBQUNxQyxTQUFyRCxFQUFpRTtBQUMvREgsUUFBRSxHQUFHLElBQUw7QUFDRCxLQWJpQyxDQWNsQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSTtBQUNGLFVBQUlBLEVBQUUsS0FBSyxnQkFBZ0JJLFNBQVMsQ0FBQ0QsU0FBMUIsSUFDSSxDQUFDLENBQUUsSUFBSUMsU0FBSixDQUFjTCxTQUFTLEdBQUcsTUFBMUIsRUFBa0NNLFVBRDlDLENBQU4sRUFDa0U7QUFDaEU3QixlQUFPLENBQUNDLEdBQVIsQ0FBWSwyQ0FBWjtBQUNBd0IsWUFBSSxHQUFHLElBQVA7QUFDRDtBQUNGLEtBTkQsQ0FNRSxPQUFPYixHQUFQLEVBQVksQ0FFYixDQUZDLENBQ0E7QUFHRjs7O0FBQ0EsUUFBSSxPQUFRVSxTQUFSLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDLFVBQUlHLElBQUosRUFBVTtBQUNSSCxpQkFBUyxHQUFHLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBWjtBQUNELE9BRkQsTUFFTztBQUNMQSxpQkFBUyxHQUFHLFFBQVo7QUFDRDtBQUNGLEtBbkNpQyxDQXFDbEM7OztBQUNBLFFBQUksQ0FBQ0csSUFBTCxFQUFXO0FBQ1QsVUFBSUgsU0FBUyxLQUFLLFFBQWxCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSWxDLEtBQUosQ0FBVSwyREFBVixDQUFOO0FBQ0Q7O0FBQ0QsVUFBSSxRQUFRa0MsU0FBUixNQUF1QixRQUEzQixFQUFxQztBQUNuQyxZQUFJUSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsYUFBSyxJQUFJbkcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJGLFNBQVMsQ0FBQ3pGLE1BQTlCLEVBQXNDRixDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGNBQUkyRixTQUFTLENBQUMzRixDQUFELENBQVQsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JxRSxtQkFBTyxDQUFDaUIsS0FBUixDQUFjLG9EQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xhLHlCQUFhLENBQUNuQyxJQUFkLENBQW1CMkIsU0FBUyxDQUFDM0YsQ0FBRCxDQUE1QjtBQUNEO0FBQ0Y7O0FBQ0QsWUFBSW1HLGFBQWEsQ0FBQ2pHLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJ5RixtQkFBUyxHQUFHUSxhQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU0sSUFBSTFDLEtBQUosQ0FBVSxxRUFBVixDQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFdBQU9rQyxTQUFQO0FBQ0Q7O0FBRUQsV0FBU1MsSUFBVCxDQUFjQyxHQUFkLEVBQW1CVixTQUFuQixFQUE4QjtBQUM1QixRQUFJQyxTQUFTLEdBQUdTLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLGdCQUFWLEVBQTRCLENBQTVCLENBQWhCO0FBRUFYLGFBQVMsR0FBR0QsSUFBSSxDQUFDQyxTQUFELEVBQVlDLFNBQVosQ0FBaEI7O0FBQ0EsUUFBSTdELFNBQUosRUFBZTtBQUNiUCxlQUFTLEdBQUcsRUFBWjtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLEdBQUcsSUFBSXlFLFNBQUosQ0FBY0ksR0FBZCxFQUFtQlYsU0FBbkIsQ0FBWjs7QUFDQSxVQUFJQSxTQUFTLENBQUNwRixPQUFWLENBQWtCLFFBQWxCLEtBQStCLENBQW5DLEVBQXNDO0FBQ3BDaUIsaUJBQVMsQ0FBQzBFLFVBQVYsR0FBdUIsYUFBdkI7QUFDRDtBQUNGOztBQUNEMUUsYUFBUyxDQUFDK0UsU0FBVixHQUFzQnpCLFlBQXRCOztBQUNBdEQsYUFBUyxDQUFDZ0YsTUFBVixHQUFtQixZQUFZO0FBQzdCbkMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsVUFBSTlDLFNBQVMsQ0FBQ2lGLFFBQWQsRUFBd0I7QUFDdEJoRixZQUFJLEdBQUdELFNBQVMsQ0FBQ2lGLFFBQWpCO0FBQ0FwQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBZ0M5QyxTQUFTLENBQUNpRixRQUF0RDtBQUNELE9BSEQsTUFHTztBQUNMaEYsWUFBSSxHQUFHLFFBQVA7QUFDQTRDLGVBQU8sQ0FBQ2lCLEtBQVIsQ0FBYyxxQ0FBcUM5RCxTQUFTLENBQUNpRixRQUE3RDtBQUNEOztBQUNEM0UsbUJBQWEsQ0FBQ3NFLElBQWQ7QUFDQS9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0QsS0FYRDs7QUFZQTlDLGFBQVMsQ0FBQ2tGLE9BQVYsR0FBb0IsVUFBVTNCLENBQVYsRUFBYTtBQUMvQlYsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQXhDLG1CQUFhLENBQUM2RSxLQUFkLENBQW9CNUIsQ0FBcEI7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDRCxLQUpEOztBQUtBOUMsYUFBUyxDQUFDb0YsT0FBVixHQUFvQixVQUFVN0IsQ0FBVixFQUFhO0FBQy9CVixhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBeUJTLENBQXJDO0FBQ0FqRCxtQkFBYSxDQUFDd0QsS0FBZCxDQUFvQlAsQ0FBcEI7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDRCxLQUpEO0FBS0Q7O0FBRUQsV0FBU3FDLEtBQVQsR0FBaUI7QUFDZixRQUFJbkYsU0FBSixFQUFlO0FBQ2IsVUFBS0EsU0FBUyxDQUFDcUYsVUFBVixLQUF5QlosU0FBUyxDQUFDYSxJQUFwQyxJQUNDdEYsU0FBUyxDQUFDcUYsVUFBVixLQUF5QlosU0FBUyxDQUFDYyxVQUR4QyxFQUNxRDtBQUNuRDFDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0E5QyxpQkFBUyxDQUFDbUYsS0FBVjtBQUNEOztBQUNEbkYsZUFBUyxDQUFDK0UsU0FBVixHQUFzQixVQUFVeEIsQ0FBVixFQUFhO0FBQUU7QUFBUyxPQUE5QztBQUNEO0FBQ0YsR0E5VCtCLENBZ1VoQztBQUNBOzs7QUFDQSxXQUFTaUMsUUFBVCxDQUFrQkMsYUFBbEIsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQzFDbkYsYUFBUyxHQUFHLElBQVo7QUFDQU4sUUFBSSxHQUFHeUYsU0FBUDtBQUNBM0YsT0FBRyxDQUFDaUQsSUFBSixHQUFXeUMsYUFBWDs7QUFDQTFGLE9BQUcsQ0FBQ29GLEtBQUosR0FBWSxZQUFZLENBQUUsQ0FBMUI7O0FBQ0EsV0FBTzdCLFlBQVA7QUFDRDs7QUFFRCxXQUFTcUMsV0FBVCxHQUF1QjtBQUNyQjtBQUNBNUYsT0FBRyxDQUFDZ0QsaUJBQUosR0FBd0IsR0FBeEIsQ0FGcUIsQ0FHckI7O0FBQ0FoRCxPQUFHLENBQUNTLE1BQUosR0FBbUJBLE1BQW5CO0FBQ0FULE9BQUcsQ0FBQ1UsTUFBSixHQUFtQkEsTUFBbkI7QUFDQVYsT0FBRyxDQUFDVyxPQUFKLEdBQW1CQSxPQUFuQjtBQUNBWCxPQUFHLENBQUNZLE9BQUosR0FBbUJBLE9BQW5CLENBUHFCLENBU3JCOztBQUNBWixPQUFHLENBQUNjLEtBQUosR0FBbUJBLEtBQW5CO0FBQ0FkLE9BQUcsQ0FBQ2UsT0FBSixHQUFtQkEsT0FBbkI7QUFDQWYsT0FBRyxDQUFDZ0IsUUFBSixHQUFtQkEsUUFBbkI7QUFDQWhCLE9BQUcsQ0FBQ2lCLFVBQUosR0FBbUJBLFVBQW5CO0FBQ0FqQixPQUFHLENBQUNvQixTQUFKLEdBQW1CQSxTQUFuQjtBQUNBcEIsT0FBRyxDQUFDcUIsU0FBSixHQUFtQkEsU0FBbkI7QUFDQXJCLE9BQUcsQ0FBQ3NCLFVBQUosR0FBbUJBLFVBQW5CO0FBQ0F0QixPQUFHLENBQUMyQixZQUFKLEdBQW1CQSxZQUFuQjtBQUNBM0IsT0FBRyxDQUFDNEIsT0FBSixHQUFtQkEsT0FBbkI7QUFDQTVCLE9BQUcsQ0FBQytCLE1BQUosR0FBbUJBLE1BQW5CO0FBRUEvQixPQUFHLENBQUM0QyxLQUFKLEdBQW1CQSxLQUFuQjtBQUNBNUMsT0FBRyxDQUFDaUQsSUFBSixHQUFtQkEsSUFBbkI7QUFDQWpELE9BQUcsQ0FBQ2tELFdBQUosR0FBbUJBLFdBQW5CO0FBRUFsRCxPQUFHLENBQUNnRSxFQUFKLEdBQW1CQSxFQUFuQjtBQUNBaEUsT0FBRyxDQUFDbUUsSUFBSixHQUFtQkEsSUFBbkI7QUFDQW5FLE9BQUcsQ0FBQzZFLElBQUosR0FBbUJBLElBQW5CO0FBQ0E3RSxPQUFHLENBQUNvRixLQUFKLEdBQW1CQSxLQUFuQjtBQUNBcEYsT0FBRyxDQUFDeUYsUUFBSixHQUFtQkEsUUFBbkI7QUFFQTNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZakQsT0FBWjtBQUVBLFdBQU9FLEdBQVA7QUFDRDs7QUFFRCxTQUFPNEYsV0FBVyxFQUFsQjtBQUNEIiwiZmlsZSI6InRwd2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0cHdlYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0cHdlYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0cHdlYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuKlxuKiAgQmFzZTY0IGVuY29kZSAvIGRlY29kZVxuKiAgaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vXG4qXG4qKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZTY0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fa2V5U3RyID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgfVxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuICBlbmNvZGUoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSB0aGlzLl91dGY4RW5jb2RlKGlucHV0KTtcbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG4gICAgICBlbmMxID0gY2hyMSA+PiAyO1xuICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG4gICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuXG4gICAgICBpZiAoaXNOYU4oY2hyMikpIHtcbiAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcbiAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcbiAgICAgICAgZW5jNCA9IDY0O1xuICAgICAgfVxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcbiAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMykgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcbiAgZGVjb2RlKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9ICcnO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzO1xuICAgIHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csICcnKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cbiAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xuICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcblxuICAgICAgaWYgKGVuYzMgIT09IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICB9XG4gICAgICBpZiAoZW5jNCAhPT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0ID0gdGhpcy5fdXRmOERlY29kZShvdXRwdXQpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcbiAgX3V0ZjhFbmNvZGUoc3RyaW5nKSB7XG4gICAgdmFyIHV0ZnRleHQgPSAnJztcblxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpO1xuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XG4gICAgICBsZXQgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1dGZ0ZXh0O1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG4gIF91dGY4RGVjb2RlKHV0ZnRleHQpIHtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjID0gMDtcbiAgICB2YXIgYzIgPSAwO1xuICAgIHZhciBjMyA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IHV0ZnRleHQubGVuZ3RoKSB7XG4gICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDIpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiaW1wb3J0IFRwU29ja2V0IGZyb20gJy4vdHBzb2NrZXQuanMnO1xuZXhwb3J0IHsgVHBTb2NrZXQgfTtcbiIsImltcG9ydCBCYXNlNjQgZnJvbSAnLi9iYXNlNjQnO1xuaW1wb3J0IFdlYnNvY2sgZnJvbSAnLi93ZWJzb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHBTb2NrZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9uYW1lID0gJ0JhcnJhLVRlbXBlc3QnO1xuICB9XG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGVuY29kZWROYW1lKCkge1xuICAgIGxldCBiNjQgPSBuZXcgQmFzZTY0KCk7XG5cbiAgICByZXR1cm4gYjY0LmVuY29kZSh0aGlzLl9uYW1lKTtcbiAgfVxuXG4gIGdldCBzYWx1dGEoKSB7XG4gICAgcmV0dXJuIFdlYnNvY2suZ3JlZXRtZSgpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQgY2FtZWxjYXNlOjAgbm8tbXVsdGktc3BhY2VzOjAgKi9cbmltcG9ydCBCYXNlNjQgZnJvbSAnLi9iYXNlNjQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWJzb2NrKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGFwaSA9IHt9LCAgICAgICAvLyBQdWJsaWMgQVBJXG4gICAgd2Vic29ja2V0ID0gbnVsbCwgLy8gV2ViU29ja2V0IG9iamVjdFxuICAgIG1vZGUgPSAnYmFzZTY0JywgIC8vIEN1cnJlbnQgV2ViU29ja2V0IG1vZGU6ICdiaW5hcnknLCAnYmFzZTY0J1xuICAgIHJRID0gW10sICAgICAgICAgIC8vIFJlY2VpdmUgcXVldWVcbiAgICByUWkgPSAwLCAgICAgICAgICAvLyBSZWNlaXZlIHF1ZXVlIGluZGV4XG4gICAgclFtYXggPSAxMDAwMCwgICAgLy8gTWF4IHJlY2VpdmUgcXVldWUgc2l6ZSBiZWZvcmUgY29tcGFjdGluZ1xuICAgIHNRID0gW10sICAgICAgICAgIC8vIFNlbmQgcXVldWVcbiAgICBldmVudEhhbmRsZXJzID0ge1xuICAgICAgJ21lc3NhZ2UnOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICdvcGVuJzogZnVuY3Rpb24gKCkge30sXG4gICAgICAnY2xvc2UnOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICdlcnJvcic6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSxcbiAgICB0ZXN0X21vZGUgPSBmYWxzZTtcblxuICAvL1xuICAvLyBRdWV1ZSBwdWJsaWMgZnVuY3Rpb25zXG4gIC8vXG4gIGZ1bmN0aW9uIGdyZWV0bWUoKSB7XG4gICAgcmV0dXJuICdjaWNjYW1lbG8hIHVubyBhIHplcm8hJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldF9zUSgpIHtcbiAgICByZXR1cm4gc1E7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRfclEoKSB7XG4gICAgcmV0dXJuIHJRO1xuICB9XG4gIGZ1bmN0aW9uIGdldF9yUWkoKSB7XG4gICAgcmV0dXJuIHJRaTtcbiAgfVxuICBmdW5jdGlvbiBzZXRfclFpKHZhbCkge1xuICAgIHJRaSA9IHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJRbGVuKCkge1xuICAgIHJldHVybiByUS5sZW5ndGggLSByUWk7XG4gIH1cblxuICBmdW5jdGlvbiByUXBlZWs4KCkge1xuICAgIHJldHVybiAoclFbclFpXSk7XG4gIH1cbiAgZnVuY3Rpb24gclFzaGlmdDgoKSB7XG4gICAgcmV0dXJuIChyUVtyUWkrK10pO1xuICB9XG4gIGZ1bmN0aW9uIHJRdW5zaGlmdDgobnVtKSB7XG4gICAgaWYgKHJRaSA9PT0gMCkge1xuICAgICAgclEudW5zaGlmdChudW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByUWkgLT0gMTtcbiAgICAgIHJRW3JRaV0gPSBudW07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJRc2hpZnQxNigpIHtcbiAgICByZXR1cm4gKHJRW3JRaSsrXSA8PCA4KSArXG4gICAgICAgICAgIChyUVtyUWkrK10pO1xuICB9XG4gIGZ1bmN0aW9uIHJRc2hpZnQzMigpIHtcbiAgICByZXR1cm4gKHJRW3JRaSsrXSA8PCAyNCkgK1xuICAgICAgICAgICAoclFbclFpKytdIDw8IDE2KSArXG4gICAgICAgICAgIChyUVtyUWkrK10gPDwgOCkgK1xuICAgICAgICAgICAoclFbclFpKytdKTtcbiAgfVxuICBmdW5jdGlvbiByUXNoaWZ0U3RyKGxlbikge1xuICAgIGlmICh0eXBlb2YgKGxlbikgPT09ICd1bmRlZmluZWQnKSB7IGxlbiA9IHJRbGVuKCk7IH1cbiAgICBsZXQgYXJyID0gclEuc2xpY2UoclFpLCByUWkgKyBsZW4pO1xuXG4gICAgclFpICs9IGxlbjtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBhcnIpO1xuICB9XG4gIGZ1bmN0aW9uIHJRc2hpZnRCeXRlcyhsZW4pIHtcbiAgICBpZiAodHlwZW9mIChsZW4pID09PSAndW5kZWZpbmVkJykgeyBsZW4gPSByUWxlbigpOyB9XG4gICAgclFpICs9IGxlbjtcbiAgICByZXR1cm4gclEuc2xpY2UoclFpIC0gbGVuLCByUWkpO1xuICB9XG5cbiAgZnVuY3Rpb24gclFzbGljZShzdGFydCwgZW5kKSB7XG4gICAgaWYgKGVuZCkge1xuICAgICAgcmV0dXJuIHJRLnNsaWNlKHJRaSArIHN0YXJ0LCByUWkgKyBlbmQpO1xuICAgIH1cbiAgICByZXR1cm4gclEuc2xpY2UoclFpICsgc3RhcnQpO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIG11c3Qgd2FpdCBmb3IgJ251bScgYnl0ZXMgKGRlZmF1bHQgdG8gRkJVLmJ5dGVzKVxuICAvLyB0byBiZSBhdmFpbGFibGUgaW4gdGhlIHJlY2VpdmUgcXVldWUuIFJldHVybiB0cnVlIGlmIHdlIG5lZWQgdG9cbiAgLy8gd2FpdCAoYW5kIHBvc3NpYmx5IHByaW50IGEgZGVidWcgbWVzc2FnZSksIG90aGVyd2lzZSBmYWxzZS5cbiAgZnVuY3Rpb24gclF3YWl0KG1zZywgbnVtLCBnb2JhY2spIHtcbiAgICB2YXIgclFsZW4gPSByUS5sZW5ndGggLSByUWk7IC8vIFNraXAgclFsZW4oKSBmdW5jdGlvbiBjYWxsXG5cbiAgICBpZiAoclFsZW4gPCBudW0pIHtcbiAgICAgIGlmIChnb2JhY2spIHtcbiAgICAgICAgaWYgKHJRaSA8IGdvYmFjaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignclF3YWl0IGNhbm5vdCBiYWNrdXAgJyArIGdvYmFjayArICcgYnl0ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByUWkgLT0gZ29iYWNrO1xuICAgICAgfVxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIiAgIHdhaXRpbmcgZm9yIFwiICsgKG51bS1yUWxlbikgK1xuICAgICAgLy8gICAgICAgICAgIFwiIFwiICsgbXNnICsgXCIgYnl0ZShzKVwiKTtcbiAgICAgIHJldHVybiB0cnVlOyAgLy8gdHJ1ZSBtZWFucyBuZWVkIG1vcmUgZGF0YVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvL1xuICAvLyBQcml2YXRlIHV0aWxpdHkgcm91dGluZXNcbiAgLy9cblxuICBmdW5jdGlvbiBlbmNvZGVfbWVzc2FnZSgpIHtcbiAgICBpZiAobW9kZSA9PT0gJ2JpbmFyeScpIHtcbiAgICAgIC8vIFB1dCBpbiBhIGJpbmFyeSBhcnJheWJ1ZmZlclxuICAgICAgcmV0dXJuIChuZXcgVWludDhBcnJheShzUSkpLmJ1ZmZlcjtcbiAgICB9XG4gICAgLy8gYmFzZTY0IGVuY29kZVxuICAgIHJldHVybiBCYXNlNjQuZW5jb2RlKHNRKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZV9tZXNzYWdlKGRhdGEpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiPj4gZGVjb2RlX21lc3NhZ2U6IFwiICsgZGF0YSk7XG4gICAgaWYgKG1vZGUgPT09ICdiaW5hcnknKSB7XG4gICAgICAvLyBwdXNoIGFycmF5YnVmZmVyIHZhbHVlcyBvbnRvIHRoZSBlbmRcbiAgICAgIGxldCB1OCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHU4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJRLnB1c2godThbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBiYXNlNjQgZGVjb2RlIGFuZCBjb25jYXQgdG8gdGhlIGVuZFxuICAgICAgclEgPSByUS5jb25jYXQoQmFzZTY0LmRlY29kZShkYXRhLCAwKSk7XG4gICAgfVxuICAgIC8vICAgY29uc29sZS5sb2coXCI+PiBkZWNvZGVfbWVzc2FnZSwgclE6IFwiICsgclEpO1xuICB9XG5cbiAgLy9cbiAgLy8gUHVibGljIFNlbmQgZnVuY3Rpb25zXG4gIC8vXG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKHdlYnNvY2tldC5idWZmZXJlZEFtb3VudCAhPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ2J1ZmZlcmVkQW1vdW50OiAnICsgd2Vic29ja2V0LmJ1ZmZlcmVkQW1vdW50KTtcbiAgICB9XG4gICAgaWYgKHdlYnNvY2tldC5idWZmZXJlZEFtb3VudCA8IGFwaS5tYXhCdWZmZXJlZEFtb3VudCkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImFycjogXCIgKyBhcnIpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInNROiBcIiArIHNRKTtcbiAgICAgIGlmIChzUS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdlYnNvY2tldC5zZW5kKGVuY29kZV9tZXNzYWdlKHNRKSk7XG4gICAgICAgIHNRID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0RlbGF5aW5nIHNlbmQsIGJ1ZmZlcmVkQW1vdW50OiAnICsgd2Vic29ja2V0LmJ1ZmZlcmVkQW1vdW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBvdmVycmlkYWJsZSBmb3IgdGVzdGluZ1xuICBmdW5jdGlvbiBzZW5kKGFycikge1xuICAgIC8vICAgY29uc29sZS5sb2coXCI+PiBzZW5kX2FycmF5OiBcIiArIGFycik7XG4gICAgc1EgPSBzUS5jb25jYXQoYXJyKTtcbiAgICByZXR1cm4gZmx1c2goKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRfc3RyaW5nKHN0cikge1xuICAgIC8vICAgY29uc29sZS5sb2coXCI+PiBzZW5kX3N0cmluZzogXCIgKyBzdHIpO1xuICAgIGFwaS5zZW5kKHN0ci5zcGxpdCgnJykubWFwKFxuICAgICAgZnVuY3Rpb24gKGNocikgeyByZXR1cm4gY2hyLmNoYXJDb2RlQXQoMCk7IH0pKTtcbiAgfVxuXG4gIC8vXG4gIC8vIE90aGVyIHB1YmxpYyBmdW5jdGlvbnNcblxuICBmdW5jdGlvbiByZWN2X21lc3NhZ2UoZSkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCI+PiByZWN2X21lc3NhZ2U6IFwiICsgZS5kYXRhLmxlbmd0aCk7XG4gICAgdHJ5IHtcbiAgICAgIGRlY29kZV9tZXNzYWdlKGUuZGF0YSk7XG4gICAgICBpZiAoclFsZW4oKSA+IDApIHtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5tZXNzYWdlKCk7XG4gICAgICAgIC8vIENvbXBhY3QgdGhlIHJlY2VpdmUgcXVldWVcbiAgICAgICAgaWYgKHJRLmxlbmd0aCA+IHJRbWF4KSB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkNvbXBhY3RpbmcgcmVjZWl2ZSBxdWV1ZVwiKTtcbiAgICAgICAgICByUSA9IHJRLnNsaWNlKHJRaSk7XG4gICAgICAgICAgclFpID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lnbm9yaW5nIGVtcHR5IG1lc3NhZ2UnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGMpIHtcbiAgICAgIGlmICh0eXBlb2YgZXhjLnN0YWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3JlY3ZfbWVzc2FnZSwgY2F1Z2h0IGV4Y2VwdGlvbjogJyArIGV4Yy5zdGFjayk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBleGMuZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmVjdl9tZXNzYWdlLCBjYXVnaHQgZXhjZXB0aW9uOiAnICsgZXhjLmRlc2NyaXB0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmVjdl9tZXNzYWdlLCBjYXVnaHQgZXhjZXB0aW9uOicgKyBleGMpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBleGMubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5lcnJvcihleGMubmFtZSArICc6ICcgKyBleGMubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudEhhbmRsZXJzLmVycm9yKGV4Yyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vICAgY29uc29sZS5sb2coXCI8PCByZWN2X21lc3NhZ2VcIik7XG4gIH1cblxuICAvLyBTZXQgZXZlbnQgaGFuZGxlcnNcbiAgZnVuY3Rpb24gb24oZXZ0LCBoYW5kbGVyKSB7XG4gICAgZXZlbnRIYW5kbGVyc1tldnRdID0gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvdG9jb2xzLCB3c19zY2hlbWEpIHtcbiAgICB2YXIgYnQgPSBmYWxzZTtcbiAgICB2YXIgd3NidCA9IGZhbHNlO1xuICAgIC8vIHZhciB0cnlfYmluYXJ5ID0gZmFsc2U7XG5cbiAgICByUSA9IFtdO1xuICAgIHJRaSA9IDA7XG4gICAgc1EgPSBbXTtcbiAgICB3ZWJzb2NrZXQgPSBudWxsO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGZ1bGwgdHlwZWQgYXJyYXkgc3VwcG9ydFxuICAgIGlmICgoJ1VpbnQ4QXJyYXknIGluIHdpbmRvdykgJiYgKCdzZXQnIGluIFVpbnQ4QXJyYXkucHJvdG90eXBlKSkge1xuICAgICAgYnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgZnVsbCBiaW5hcnkgdHlwZSBzdXBwb3J0IGluIFdlYlNvY2tldFxuICAgIC8vIEluc3BpcmVkIGJ5OlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zNzBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvd2Vic29ja2V0cy9iaW5hcnkuanNcbiAgICB0cnkge1xuICAgICAgaWYgKGJ0ICYmICgnYmluYXJ5VHlwZScgaW4gV2ViU29ja2V0LnByb3RvdHlwZSB8fFxuICAgICAgICAgICAgICAgICAgICAgISEobmV3IFdlYlNvY2tldCh3c19zY2hlbWEgKyAnOi8vLicpLmJpbmFyeVR5cGUpKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGV0ZWN0ZWQgYmluYXJ5VHlwZSBzdXBwb3J0IGluIFdlYlNvY2tldHMnKTtcbiAgICAgICAgd3NidCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXhjKSB7XG4gICAgICAvLyBKdXN0IGlnbm9yZSBmYWlsZWQgdGVzdCBsb2NhbGhvc3QgY29ubmVjdGlvbnNcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHByb3RvY29scyBpZiBub3Qgc3BlY2lmaWVkXG4gICAgaWYgKHR5cGVvZiAocHJvdG9jb2xzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh3c2J0KSB7XG4gICAgICAgIHByb3RvY29scyA9IFsnYmluYXJ5JywgJ2Jhc2U2NCddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvdG9jb2xzID0gJ2Jhc2U2NCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gYmluYXJ5IHN1cHBvcnQsIG1ha2Ugc3VyZSBpdCB3YXMgbm90IHJlcXVlc3RlZFxuICAgIGlmICghd3NidCkge1xuICAgICAgaWYgKHByb3RvY29scyA9PT0gJ2JpbmFyeScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJTb2NrZXQgYmluYXJ5IHN1Yi1wcm90b2NvbCByZXF1ZXN0ZWQgYnV0IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgKHByb3RvY29scykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBuZXdfcHJvdG9jb2xzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocHJvdG9jb2xzW2ldID09PSAnYmluYXJ5Jykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2tpcHBpbmcgdW5zdXBwb3J0ZWQgV2ViU29ja2V0IGJpbmFyeSBzdWItcHJvdG9jb2wnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3X3Byb3RvY29scy5wdXNoKHByb3RvY29sc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdfcHJvdG9jb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwcm90b2NvbHMgPSBuZXdfcHJvdG9jb2xzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25seSBXZWJTb2NrZXQgYmluYXJ5IHN1Yi1wcm90b2NvbCB3YXMgcmVxdWVzdGVkIGFuZCBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm90b2NvbHM7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKHVyaSwgcHJvdG9jb2xzKSB7XG4gICAgdmFyIHdzX3NjaGVtYSA9IHVyaS5tYXRjaCgvXihbYS16XSspOlxcL1xcLy8pWzFdO1xuXG4gICAgcHJvdG9jb2xzID0gaW5pdChwcm90b2NvbHMsIHdzX3NjaGVtYSk7XG4gICAgaWYgKHRlc3RfbW9kZSkge1xuICAgICAgd2Vic29ja2V0ID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpO1xuICAgICAgaWYgKHByb3RvY29scy5pbmRleE9mKCdiaW5hcnknKSA+PSAwKSB7XG4gICAgICAgIHdlYnNvY2tldC5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgIH1cbiAgICB9XG4gICAgd2Vic29ja2V0Lm9ubWVzc2FnZSA9IHJlY3ZfbWVzc2FnZTtcbiAgICB3ZWJzb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJz4+IFdlYlNvY2sub25vcGVuJyk7XG4gICAgICBpZiAod2Vic29ja2V0LnByb3RvY29sKSB7XG4gICAgICAgIG1vZGUgPSB3ZWJzb2NrZXQucHJvdG9jb2w7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgY2hvc2Ugc3ViLXByb3RvY29sOiAnICsgd2Vic29ja2V0LnByb3RvY29sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGUgPSAnYmFzZTY0JztcbiAgICAgICAgY29uc29sZS5lcnJvcignU2VydmVyIHNlbGVjdCBubyBzdWItcHJvdG9jb2whOiAnICsgd2Vic29ja2V0LnByb3RvY29sKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50SGFuZGxlcnMub3BlbigpO1xuICAgICAgY29uc29sZS5sb2coJ1wiPDwgV2ViU29jay5vbm9wZW4nKTtcbiAgICB9O1xuICAgIHdlYnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCc+PiBXZWJTb2NrLm9uY2xvc2UnKTtcbiAgICAgIGV2ZW50SGFuZGxlcnMuY2xvc2UoZSk7XG4gICAgICBjb25zb2xlLmxvZygnPDwgV2ViU29jay5vbmNsb3NlJyk7XG4gICAgfTtcbiAgICB3ZWJzb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnPj4gV2ViU29jay5vbmVycm9yOiAnICsgZSk7XG4gICAgICBldmVudEhhbmRsZXJzLmVycm9yKGUpO1xuICAgICAgY29uc29sZS5sb2coJzw8IFdlYlNvY2sub25lcnJvcicpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAod2Vic29ja2V0KSB7XG4gICAgICBpZiAoKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHxcbiAgICAgICAgICAod2Vic29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2xvc2luZyBXZWJTb2NrZXQgY29ubmVjdGlvbicpO1xuICAgICAgICB3ZWJzb2NrZXQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIHdlYnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkgeyByZXR1cm47IH07XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW50ZXJuYWwgZnVuY3Rpb25zIGZvciB0ZXN0aW5nXG4gIC8vIFRha2VzIGEgc2VuZCBmdW5jdGlvbiwgcmV0dXJucyByZWZlcmVuY2UgdG8gcmVjdiBmdW5jdGlvblxuICBmdW5jdGlvbiB0ZXN0TW9kZShvdmVycmlkZV9zZW5kLCBkYXRhX21vZGUpIHtcbiAgICB0ZXN0X21vZGUgPSB0cnVlO1xuICAgIG1vZGUgPSBkYXRhX21vZGU7XG4gICAgYXBpLnNlbmQgPSBvdmVycmlkZV9zZW5kO1xuICAgIGFwaS5jbG9zZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHJldHVybiByZWN2X21lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDb25maWd1cmF0aW9uIHNldHRpbmdzXG4gICAgYXBpLm1heEJ1ZmZlcmVkQW1vdW50ID0gMjAwO1xuICAgIC8vIERpcmVjdCBhY2Nlc3MgdG8gc2VuZCBhbmQgcmVjZWl2ZSBxdWV1ZXNcbiAgICBhcGkuZ2V0X3NRICAgICAgID0gZ2V0X3NRO1xuICAgIGFwaS5nZXRfclEgICAgICAgPSBnZXRfclE7XG4gICAgYXBpLmdldF9yUWkgICAgICA9IGdldF9yUWk7XG4gICAgYXBpLnNldF9yUWkgICAgICA9IHNldF9yUWk7XG5cbiAgICAvLyBSb3V0aW5lcyB0byByZWFkIGZyb20gdGhlIHJlY2VpdmUgcXVldWVcbiAgICBhcGkuclFsZW4gICAgICAgID0gclFsZW47XG4gICAgYXBpLnJRcGVlazggICAgICA9IHJRcGVlazg7XG4gICAgYXBpLnJRc2hpZnQ4ICAgICA9IHJRc2hpZnQ4O1xuICAgIGFwaS5yUXVuc2hpZnQ4ICAgPSByUXVuc2hpZnQ4O1xuICAgIGFwaS5yUXNoaWZ0MTYgICAgPSByUXNoaWZ0MTY7XG4gICAgYXBpLnJRc2hpZnQzMiAgICA9IHJRc2hpZnQzMjtcbiAgICBhcGkuclFzaGlmdFN0ciAgID0gclFzaGlmdFN0cjtcbiAgICBhcGkuclFzaGlmdEJ5dGVzID0gclFzaGlmdEJ5dGVzO1xuICAgIGFwaS5yUXNsaWNlICAgICAgPSByUXNsaWNlO1xuICAgIGFwaS5yUXdhaXQgICAgICAgPSByUXdhaXQ7XG5cbiAgICBhcGkuZmx1c2ggICAgICAgID0gZmx1c2g7XG4gICAgYXBpLnNlbmQgICAgICAgICA9IHNlbmQ7XG4gICAgYXBpLnNlbmRfc3RyaW5nICA9IHNlbmRfc3RyaW5nO1xuXG4gICAgYXBpLm9uICAgICAgICAgICA9IG9uO1xuICAgIGFwaS5pbml0ICAgICAgICAgPSBpbml0O1xuICAgIGFwaS5vcGVuICAgICAgICAgPSBvcGVuO1xuICAgIGFwaS5jbG9zZSAgICAgICAgPSBjbG9zZTtcbiAgICBhcGkudGVzdE1vZGUgICAgID0gdGVzdE1vZGU7XG5cbiAgICBjb25zb2xlLmxvZyhncmVldG1lKTtcblxuICAgIHJldHVybiBhcGk7XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0b3IoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=