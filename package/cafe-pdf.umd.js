(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cafe-pdf"] = factory();
	else
		root["cafe-pdf"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "cafe-pdf.umd." + ({"1":"noprefetch-78-EUC-H-bcmap","2":"noprefetch-78-EUC-V-bcmap","3":"noprefetch-78-H-bcmap","4":"noprefetch-78-RKSJ-H-bcmap","5":"noprefetch-78-RKSJ-V-bcmap","6":"noprefetch-78-V-bcmap","7":"noprefetch-78ms-RKSJ-H-bcmap","8":"noprefetch-78ms-RKSJ-V-bcmap","9":"noprefetch-83pv-RKSJ-H-bcmap","10":"noprefetch-90ms-RKSJ-H-bcmap","11":"noprefetch-90ms-RKSJ-V-bcmap","12":"noprefetch-90msp-RKSJ-H-bcmap","13":"noprefetch-90msp-RKSJ-V-bcmap","14":"noprefetch-90pv-RKSJ-H-bcmap","15":"noprefetch-90pv-RKSJ-V-bcmap","16":"noprefetch-Add-H-bcmap","17":"noprefetch-Add-RKSJ-H-bcmap","18":"noprefetch-Add-RKSJ-V-bcmap","19":"noprefetch-Add-V-bcmap","20":"noprefetch-Adobe-CNS1-0-bcmap","21":"noprefetch-Adobe-CNS1-1-bcmap","22":"noprefetch-Adobe-CNS1-2-bcmap","23":"noprefetch-Adobe-CNS1-3-bcmap","24":"noprefetch-Adobe-CNS1-4-bcmap","25":"noprefetch-Adobe-CNS1-5-bcmap","26":"noprefetch-Adobe-CNS1-6-bcmap","27":"noprefetch-Adobe-CNS1-UCS2-bcmap","28":"noprefetch-Adobe-GB1-0-bcmap","29":"noprefetch-Adobe-GB1-1-bcmap","30":"noprefetch-Adobe-GB1-2-bcmap","31":"noprefetch-Adobe-GB1-3-bcmap","32":"noprefetch-Adobe-GB1-4-bcmap","33":"noprefetch-Adobe-GB1-5-bcmap","34":"noprefetch-Adobe-GB1-UCS2-bcmap","35":"noprefetch-Adobe-Japan1-0-bcmap","36":"noprefetch-Adobe-Japan1-1-bcmap","37":"noprefetch-Adobe-Japan1-2-bcmap","38":"noprefetch-Adobe-Japan1-3-bcmap","39":"noprefetch-Adobe-Japan1-4-bcmap","40":"noprefetch-Adobe-Japan1-5-bcmap","41":"noprefetch-Adobe-Japan1-6-bcmap","42":"noprefetch-Adobe-Japan1-UCS2-bcmap","43":"noprefetch-Adobe-Korea1-0-bcmap","44":"noprefetch-Adobe-Korea1-1-bcmap","45":"noprefetch-Adobe-Korea1-2-bcmap","46":"noprefetch-Adobe-Korea1-UCS2-bcmap","47":"noprefetch-B5-H-bcmap","48":"noprefetch-B5-V-bcmap","49":"noprefetch-B5pc-H-bcmap","50":"noprefetch-B5pc-V-bcmap","51":"noprefetch-CNS-EUC-H-bcmap","52":"noprefetch-CNS-EUC-V-bcmap","53":"noprefetch-CNS1-H-bcmap","54":"noprefetch-CNS1-V-bcmap","55":"noprefetch-CNS2-H-bcmap","56":"noprefetch-CNS2-V-bcmap","57":"noprefetch-ETHK-B5-H-bcmap","58":"noprefetch-ETHK-B5-V-bcmap","59":"noprefetch-ETen-B5-H-bcmap","60":"noprefetch-ETen-B5-V-bcmap","61":"noprefetch-ETenms-B5-H-bcmap","62":"noprefetch-ETenms-B5-V-bcmap","63":"noprefetch-EUC-H-bcmap","64":"noprefetch-EUC-V-bcmap","65":"noprefetch-Ext-H-bcmap","66":"noprefetch-Ext-RKSJ-H-bcmap","67":"noprefetch-Ext-RKSJ-V-bcmap","68":"noprefetch-Ext-V-bcmap","69":"noprefetch-GB-EUC-H-bcmap","70":"noprefetch-GB-EUC-V-bcmap","71":"noprefetch-GB-H-bcmap","72":"noprefetch-GB-V-bcmap","73":"noprefetch-GBK-EUC-H-bcmap","74":"noprefetch-GBK-EUC-V-bcmap","75":"noprefetch-GBK2K-H-bcmap","76":"noprefetch-GBK2K-V-bcmap","77":"noprefetch-GBKp-EUC-H-bcmap","78":"noprefetch-GBKp-EUC-V-bcmap","79":"noprefetch-GBT-EUC-H-bcmap","80":"noprefetch-GBT-EUC-V-bcmap","81":"noprefetch-GBT-H-bcmap","82":"noprefetch-GBT-V-bcmap","83":"noprefetch-GBTpc-EUC-H-bcmap","84":"noprefetch-GBTpc-EUC-V-bcmap","85":"noprefetch-GBpc-EUC-H-bcmap","86":"noprefetch-GBpc-EUC-V-bcmap","87":"noprefetch-H-bcmap","88":"noprefetch-HKdla-B5-H-bcmap","89":"noprefetch-HKdla-B5-V-bcmap","90":"noprefetch-HKdlb-B5-H-bcmap","91":"noprefetch-HKdlb-B5-V-bcmap","92":"noprefetch-HKgccs-B5-H-bcmap","93":"noprefetch-HKgccs-B5-V-bcmap","94":"noprefetch-HKm314-B5-H-bcmap","95":"noprefetch-HKm314-B5-V-bcmap","96":"noprefetch-HKm471-B5-H-bcmap","97":"noprefetch-HKm471-B5-V-bcmap","98":"noprefetch-HKscs-B5-H-bcmap","99":"noprefetch-HKscs-B5-V-bcmap","100":"noprefetch-Hankaku-bcmap","101":"noprefetch-Hiragana-bcmap","102":"noprefetch-KSC-EUC-H-bcmap","103":"noprefetch-KSC-EUC-V-bcmap","104":"noprefetch-KSC-H-bcmap","105":"noprefetch-KSC-Johab-H-bcmap","106":"noprefetch-KSC-Johab-V-bcmap","107":"noprefetch-KSC-V-bcmap","108":"noprefetch-KSCms-UHC-H-bcmap","109":"noprefetch-KSCms-UHC-HW-H-bcmap","110":"noprefetch-KSCms-UHC-HW-V-bcmap","111":"noprefetch-KSCms-UHC-V-bcmap","112":"noprefetch-KSCpc-EUC-H-bcmap","113":"noprefetch-KSCpc-EUC-V-bcmap","114":"noprefetch-Katakana-bcmap","115":"noprefetch-NWP-H-bcmap","116":"noprefetch-NWP-V-bcmap","117":"noprefetch-RKSJ-H-bcmap","118":"noprefetch-RKSJ-V-bcmap","119":"noprefetch-Roman-bcmap","120":"noprefetch-UniCNS-UCS2-H-bcmap","121":"noprefetch-UniCNS-UCS2-V-bcmap","122":"noprefetch-UniCNS-UTF16-H-bcmap","123":"noprefetch-UniCNS-UTF16-V-bcmap","124":"noprefetch-UniCNS-UTF32-H-bcmap","125":"noprefetch-UniCNS-UTF32-V-bcmap","126":"noprefetch-UniCNS-UTF8-H-bcmap","127":"noprefetch-UniCNS-UTF8-V-bcmap","128":"noprefetch-UniGB-UCS2-H-bcmap","129":"noprefetch-UniGB-UCS2-V-bcmap","130":"noprefetch-UniGB-UTF16-H-bcmap","131":"noprefetch-UniGB-UTF16-V-bcmap","132":"noprefetch-UniGB-UTF32-H-bcmap","133":"noprefetch-UniGB-UTF32-V-bcmap","134":"noprefetch-UniGB-UTF8-H-bcmap","135":"noprefetch-UniGB-UTF8-V-bcmap","136":"noprefetch-UniJIS-UCS2-H-bcmap","137":"noprefetch-UniJIS-UCS2-HW-H-bcmap","138":"noprefetch-UniJIS-UCS2-HW-V-bcmap","139":"noprefetch-UniJIS-UCS2-V-bcmap","140":"noprefetch-UniJIS-UTF16-H-bcmap","141":"noprefetch-UniJIS-UTF16-V-bcmap","142":"noprefetch-UniJIS-UTF32-H-bcmap","143":"noprefetch-UniJIS-UTF32-V-bcmap","144":"noprefetch-UniJIS-UTF8-H-bcmap","145":"noprefetch-UniJIS-UTF8-V-bcmap","146":"noprefetch-UniJIS2004-UTF16-H-bcmap","147":"noprefetch-UniJIS2004-UTF16-V-bcmap","148":"noprefetch-UniJIS2004-UTF32-H-bcmap","149":"noprefetch-UniJIS2004-UTF32-V-bcmap","150":"noprefetch-UniJIS2004-UTF8-H-bcmap","151":"noprefetch-UniJIS2004-UTF8-V-bcmap","152":"noprefetch-UniJISPro-UCS2-HW-V-bcmap","153":"noprefetch-UniJISPro-UCS2-V-bcmap","154":"noprefetch-UniJISPro-UTF8-V-bcmap","155":"noprefetch-UniJISX0213-UTF32-H-bcmap","156":"noprefetch-UniJISX0213-UTF32-V-bcmap","157":"noprefetch-UniJISX02132004-UTF32-H-bcmap","158":"noprefetch-UniJISX02132004-UTF32-V-bcmap","159":"noprefetch-UniKS-UCS2-H-bcmap","160":"noprefetch-UniKS-UCS2-V-bcmap","161":"noprefetch-UniKS-UTF16-H-bcmap","162":"noprefetch-UniKS-UTF16-V-bcmap","163":"noprefetch-UniKS-UTF32-H-bcmap","164":"noprefetch-UniKS-UTF32-V-bcmap","165":"noprefetch-UniKS-UTF8-H-bcmap","166":"noprefetch-UniKS-UTF8-V-bcmap","167":"noprefetch-V-bcmap","168":"noprefetch-WP-Symbol-bcmap","169":"pdfjsWorker"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpcafe_pdf"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcafe_pdf"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "00b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error = global.Error;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0472":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./78-EUC-H.bcmap": [
		"38ab",
		1
	],
	"./78-EUC-V.bcmap": [
		"6770",
		2
	],
	"./78-H.bcmap": [
		"1934",
		3
	],
	"./78-RKSJ-H.bcmap": [
		"7b41",
		4
	],
	"./78-RKSJ-V.bcmap": [
		"89f1",
		5
	],
	"./78-V.bcmap": [
		"5113",
		6
	],
	"./78ms-RKSJ-H.bcmap": [
		"062b",
		7
	],
	"./78ms-RKSJ-V.bcmap": [
		"6041",
		8
	],
	"./83pv-RKSJ-H.bcmap": [
		"8ce2",
		9
	],
	"./90ms-RKSJ-H.bcmap": [
		"4325",
		10
	],
	"./90ms-RKSJ-V.bcmap": [
		"392a",
		11
	],
	"./90msp-RKSJ-H.bcmap": [
		"7857",
		12
	],
	"./90msp-RKSJ-V.bcmap": [
		"735c",
		13
	],
	"./90pv-RKSJ-H.bcmap": [
		"2535",
		14
	],
	"./90pv-RKSJ-V.bcmap": [
		"5814",
		15
	],
	"./Add-H.bcmap": [
		"ff41",
		16
	],
	"./Add-RKSJ-H.bcmap": [
		"912c",
		17
	],
	"./Add-RKSJ-V.bcmap": [
		"8a5c",
		18
	],
	"./Add-V.bcmap": [
		"4fda",
		19
	],
	"./Adobe-CNS1-0.bcmap": [
		"a420",
		20
	],
	"./Adobe-CNS1-1.bcmap": [
		"04ed",
		21
	],
	"./Adobe-CNS1-2.bcmap": [
		"2268",
		22
	],
	"./Adobe-CNS1-3.bcmap": [
		"9a9d",
		23
	],
	"./Adobe-CNS1-4.bcmap": [
		"b2ae",
		24
	],
	"./Adobe-CNS1-5.bcmap": [
		"89ec",
		25
	],
	"./Adobe-CNS1-6.bcmap": [
		"b76e",
		26
	],
	"./Adobe-CNS1-UCS2.bcmap": [
		"853e",
		27
	],
	"./Adobe-GB1-0.bcmap": [
		"a277",
		28
	],
	"./Adobe-GB1-1.bcmap": [
		"5774",
		29
	],
	"./Adobe-GB1-2.bcmap": [
		"a5c8",
		30
	],
	"./Adobe-GB1-3.bcmap": [
		"0a4f",
		31
	],
	"./Adobe-GB1-4.bcmap": [
		"20e6",
		32
	],
	"./Adobe-GB1-5.bcmap": [
		"3627",
		33
	],
	"./Adobe-GB1-UCS2.bcmap": [
		"ada7",
		34
	],
	"./Adobe-Japan1-0.bcmap": [
		"87f3",
		35
	],
	"./Adobe-Japan1-1.bcmap": [
		"4ee5",
		36
	],
	"./Adobe-Japan1-2.bcmap": [
		"21aa",
		37
	],
	"./Adobe-Japan1-3.bcmap": [
		"24a0",
		38
	],
	"./Adobe-Japan1-4.bcmap": [
		"102f",
		39
	],
	"./Adobe-Japan1-5.bcmap": [
		"2da4",
		40
	],
	"./Adobe-Japan1-6.bcmap": [
		"3cab",
		41
	],
	"./Adobe-Japan1-UCS2.bcmap": [
		"6b0e",
		42
	],
	"./Adobe-Korea1-0.bcmap": [
		"2dc4",
		43
	],
	"./Adobe-Korea1-1.bcmap": [
		"bf4d",
		44
	],
	"./Adobe-Korea1-2.bcmap": [
		"4174",
		45
	],
	"./Adobe-Korea1-UCS2.bcmap": [
		"c67b",
		46
	],
	"./B5-H.bcmap": [
		"a9c8",
		47
	],
	"./B5-V.bcmap": [
		"cfd9",
		48
	],
	"./B5pc-H.bcmap": [
		"161a",
		49
	],
	"./B5pc-V.bcmap": [
		"dc60",
		50
	],
	"./CNS-EUC-H.bcmap": [
		"75ec",
		51
	],
	"./CNS-EUC-V.bcmap": [
		"e7e7",
		52
	],
	"./CNS1-H.bcmap": [
		"980b",
		53
	],
	"./CNS1-V.bcmap": [
		"0b0b",
		54
	],
	"./CNS2-H.bcmap": [
		"8f0b",
		55
	],
	"./CNS2-V.bcmap": [
		"d4d8",
		56
	],
	"./ETHK-B5-H.bcmap": [
		"78c9",
		57
	],
	"./ETHK-B5-V.bcmap": [
		"464f",
		58
	],
	"./ETen-B5-H.bcmap": [
		"03f0",
		59
	],
	"./ETen-B5-V.bcmap": [
		"318e",
		60
	],
	"./ETenms-B5-H.bcmap": [
		"5a95",
		61
	],
	"./ETenms-B5-V.bcmap": [
		"440c",
		62
	],
	"./EUC-H.bcmap": [
		"3d52",
		63
	],
	"./EUC-V.bcmap": [
		"1e09",
		64
	],
	"./Ext-H.bcmap": [
		"9c34",
		65
	],
	"./Ext-RKSJ-H.bcmap": [
		"5667",
		66
	],
	"./Ext-RKSJ-V.bcmap": [
		"0a9c",
		67
	],
	"./Ext-V.bcmap": [
		"7533",
		68
	],
	"./GB-EUC-H.bcmap": [
		"6d53",
		69
	],
	"./GB-EUC-V.bcmap": [
		"de1a",
		70
	],
	"./GB-H.bcmap": [
		"7499",
		71
	],
	"./GB-V.bcmap": [
		"c587",
		72
	],
	"./GBK-EUC-H.bcmap": [
		"cada",
		73
	],
	"./GBK-EUC-V.bcmap": [
		"6797",
		74
	],
	"./GBK2K-H.bcmap": [
		"87b0",
		75
	],
	"./GBK2K-V.bcmap": [
		"0372",
		76
	],
	"./GBKp-EUC-H.bcmap": [
		"74ec",
		77
	],
	"./GBKp-EUC-V.bcmap": [
		"365c",
		78
	],
	"./GBT-EUC-H.bcmap": [
		"f20c",
		79
	],
	"./GBT-EUC-V.bcmap": [
		"79f0",
		80
	],
	"./GBT-H.bcmap": [
		"3a9d",
		81
	],
	"./GBT-V.bcmap": [
		"263d",
		82
	],
	"./GBTpc-EUC-H.bcmap": [
		"64f9",
		83
	],
	"./GBTpc-EUC-V.bcmap": [
		"4fa4",
		84
	],
	"./GBpc-EUC-H.bcmap": [
		"6c1f",
		85
	],
	"./GBpc-EUC-V.bcmap": [
		"10c3",
		86
	],
	"./H.bcmap": [
		"405c",
		87
	],
	"./HKdla-B5-H.bcmap": [
		"0b93",
		88
	],
	"./HKdla-B5-V.bcmap": [
		"c91d",
		89
	],
	"./HKdlb-B5-H.bcmap": [
		"4084",
		90
	],
	"./HKdlb-B5-V.bcmap": [
		"ebf9",
		91
	],
	"./HKgccs-B5-H.bcmap": [
		"3154",
		92
	],
	"./HKgccs-B5-V.bcmap": [
		"4a6f",
		93
	],
	"./HKm314-B5-H.bcmap": [
		"9e7f",
		94
	],
	"./HKm314-B5-V.bcmap": [
		"0a13",
		95
	],
	"./HKm471-B5-H.bcmap": [
		"371a",
		96
	],
	"./HKm471-B5-V.bcmap": [
		"76bb",
		97
	],
	"./HKscs-B5-H.bcmap": [
		"f56a",
		98
	],
	"./HKscs-B5-V.bcmap": [
		"9586",
		99
	],
	"./Hankaku.bcmap": [
		"2713",
		100
	],
	"./Hiragana.bcmap": [
		"2ede",
		101
	],
	"./KSC-EUC-H.bcmap": [
		"7542",
		102
	],
	"./KSC-EUC-V.bcmap": [
		"a0fa",
		103
	],
	"./KSC-H.bcmap": [
		"0319",
		104
	],
	"./KSC-Johab-H.bcmap": [
		"445e",
		105
	],
	"./KSC-Johab-V.bcmap": [
		"48ad",
		106
	],
	"./KSC-V.bcmap": [
		"af45",
		107
	],
	"./KSCms-UHC-H.bcmap": [
		"4741",
		108
	],
	"./KSCms-UHC-HW-H.bcmap": [
		"078f",
		109
	],
	"./KSCms-UHC-HW-V.bcmap": [
		"ef27",
		110
	],
	"./KSCms-UHC-V.bcmap": [
		"ec7f",
		111
	],
	"./KSCpc-EUC-H.bcmap": [
		"e668",
		112
	],
	"./KSCpc-EUC-V.bcmap": [
		"0cd5",
		113
	],
	"./Katakana.bcmap": [
		"3198",
		114
	],
	"./NWP-H.bcmap": [
		"3370",
		115
	],
	"./NWP-V.bcmap": [
		"55f2",
		116
	],
	"./RKSJ-H.bcmap": [
		"cd66",
		117
	],
	"./RKSJ-V.bcmap": [
		"f62b",
		118
	],
	"./Roman.bcmap": [
		"e0b2",
		119
	],
	"./UniCNS-UCS2-H.bcmap": [
		"fd51",
		120
	],
	"./UniCNS-UCS2-V.bcmap": [
		"2582",
		121
	],
	"./UniCNS-UTF16-H.bcmap": [
		"716b",
		122
	],
	"./UniCNS-UTF16-V.bcmap": [
		"2440",
		123
	],
	"./UniCNS-UTF32-H.bcmap": [
		"cdfb",
		124
	],
	"./UniCNS-UTF32-V.bcmap": [
		"d0de",
		125
	],
	"./UniCNS-UTF8-H.bcmap": [
		"51af",
		126
	],
	"./UniCNS-UTF8-V.bcmap": [
		"0d7b",
		127
	],
	"./UniGB-UCS2-H.bcmap": [
		"6c16",
		128
	],
	"./UniGB-UCS2-V.bcmap": [
		"47ef",
		129
	],
	"./UniGB-UTF16-H.bcmap": [
		"5570",
		130
	],
	"./UniGB-UTF16-V.bcmap": [
		"12d8",
		131
	],
	"./UniGB-UTF32-H.bcmap": [
		"088f",
		132
	],
	"./UniGB-UTF32-V.bcmap": [
		"020f",
		133
	],
	"./UniGB-UTF8-H.bcmap": [
		"611c",
		134
	],
	"./UniGB-UTF8-V.bcmap": [
		"3eb7",
		135
	],
	"./UniJIS-UCS2-H.bcmap": [
		"ebc2",
		136
	],
	"./UniJIS-UCS2-HW-H.bcmap": [
		"8765",
		137
	],
	"./UniJIS-UCS2-HW-V.bcmap": [
		"7647",
		138
	],
	"./UniJIS-UCS2-V.bcmap": [
		"6cea",
		139
	],
	"./UniJIS-UTF16-H.bcmap": [
		"1ec0",
		140
	],
	"./UniJIS-UTF16-V.bcmap": [
		"10b3",
		141
	],
	"./UniJIS-UTF32-H.bcmap": [
		"0a34",
		142
	],
	"./UniJIS-UTF32-V.bcmap": [
		"1d7a",
		143
	],
	"./UniJIS-UTF8-H.bcmap": [
		"d5c6",
		144
	],
	"./UniJIS-UTF8-V.bcmap": [
		"0043",
		145
	],
	"./UniJIS2004-UTF16-H.bcmap": [
		"d9984",
		146
	],
	"./UniJIS2004-UTF16-V.bcmap": [
		"706a",
		147
	],
	"./UniJIS2004-UTF32-H.bcmap": [
		"c7aa",
		148
	],
	"./UniJIS2004-UTF32-V.bcmap": [
		"2908",
		149
	],
	"./UniJIS2004-UTF8-H.bcmap": [
		"d9c0",
		150
	],
	"./UniJIS2004-UTF8-V.bcmap": [
		"9645",
		151
	],
	"./UniJISPro-UCS2-HW-V.bcmap": [
		"6438",
		152
	],
	"./UniJISPro-UCS2-V.bcmap": [
		"d79f",
		153
	],
	"./UniJISPro-UTF8-V.bcmap": [
		"6fd8",
		154
	],
	"./UniJISX0213-UTF32-H.bcmap": [
		"3358",
		155
	],
	"./UniJISX0213-UTF32-V.bcmap": [
		"782d",
		156
	],
	"./UniJISX02132004-UTF32-H.bcmap": [
		"0ecd",
		157
	],
	"./UniJISX02132004-UTF32-V.bcmap": [
		"90aa",
		158
	],
	"./UniKS-UCS2-H.bcmap": [
		"3645",
		159
	],
	"./UniKS-UCS2-V.bcmap": [
		"83e6",
		160
	],
	"./UniKS-UTF16-H.bcmap": [
		"e09f",
		161
	],
	"./UniKS-UTF16-V.bcmap": [
		"06c1",
		162
	],
	"./UniKS-UTF32-H.bcmap": [
		"9ab3",
		163
	],
	"./UniKS-UTF32-V.bcmap": [
		"9051",
		164
	],
	"./UniKS-UTF8-H.bcmap": [
		"05bc",
		165
	],
	"./UniKS-UTF8-V.bcmap": [
		"b4db",
		166
	],
	"./V.bcmap": [
		"d5c5",
		167
	],
	"./WP-Symbol.bcmap": [
		"63a9",
		168
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "0472";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("c6b6");
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;
var arraySlice = __webpack_require__("f36a");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $values = __webpack_require__("6f53").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0af4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f8b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0b16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__("1985");
var util = __webpack_require__("35e8");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__("b383");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "0b25":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var toIntegerOrInfinity = __webpack_require__("5926");
var toLength = __webpack_require__("50c4");

var RangeError = global.RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0c47":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setToStringTag = __webpack_require__("d44e");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0ccb":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__("e330");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var $repeat = __webpack_require__("1148");
var requireObjectCoercible = __webpack_require__("1d80");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d3b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "10d1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var redefineAll = __webpack_require__("e2cc");
var InternalMetadataModule = __webpack_require__("f183");
var collection = __webpack_require__("6d61");
var collectionWeak = __webpack_require__("acac");
var isObject = __webpack_require__("861d");
var isExtensible = __webpack_require__("4fad");
var enforceIternalState = __webpack_require__("69f3").enforce;
var NATIVE_WEAK_MAP = __webpack_require__("7f9a");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  var nativeSet = uncurryThis(WeakMapPrototype.set);
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var RangeError = global.RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var arraySlice = __webpack_require__("f36a");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var stickyHelpers = __webpack_require__("9f7f");
var fails = __webpack_require__("d039");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "129f":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "134b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var pdfjs = __webpack_require__("cf3f");

var PdfjsWorker = __webpack_require__("84f2");

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();
}

module.exports = pdfjs;

/***/ }),

/***/ "143c":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "1448":
/***/ (function(module, exports, __webpack_require__) {

var arrayFromConstructorAndList = __webpack_require__("dfb9");
var typedArraySpeciesConstructor = __webpack_require__("b6b7");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "145e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "170b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");
var typedArraySpeciesConstructor = __webpack_require__("b6b7");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  var C = typedArraySpeciesConstructor(O);
  return new C(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "182d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var toPositiveInteger = __webpack_require__("f8cd");

var RangeError = global.RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "1985":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module), __webpack_require__("c8ba")))

/***/ }),

/***/ "19aa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isPrototypeOf = __webpack_require__("3a9b");

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "1fe2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionWeak = __webpack_require__("acac");

// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "219c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var aCallable = __webpack_require__("59ed");
var internalSort = __webpack_require__("addb");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var FF = __webpack_require__("04d1");
var IE_OR_EDGE = __webpack_require__("d998");
var V8 = __webpack_require__("2d00");
var WEBKIT = __webpack_require__("512c");

var Array = global.Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var un$Sort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {
  un$Sort(new Uint16Array(2), null);
}) && fails(function () {
  un$Sort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!un$Sort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  un$Sort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return un$Sort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var isArrayIteratorMethod = __webpack_require__("e95a");
var lengthOfArrayLike = __webpack_require__("07fa");
var isPrototypeOf = __webpack_require__("3a9b");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23dc":
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__("d44e");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var correctIsRegExpLogic = __webpack_require__("ab13");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "25a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduceRight = __webpack_require__("d58f").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var isPrototypeOf = __webpack_require__("3a9b");
var $toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var regExpFlags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2954":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var typedArraySpeciesConstructor = __webpack_require__("b6b7");
var fails = __webpack_require__("d039");
var arraySlice = __webpack_require__("f36a");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = typedArraySpeciesConstructor(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2b3d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("3ca3");
var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var USE_NATIVE_URL = __webpack_require__("0d3b");
var global = __webpack_require__("da84");
var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var defineProperties = __webpack_require__("37e8");
var redefine = __webpack_require__("6eeb");
var anInstance = __webpack_require__("19aa");
var hasOwn = __webpack_require__("1a2d");
var assign = __webpack_require__("60da");
var arrayFrom = __webpack_require__("4df4");
var arraySlice = __webpack_require__("f36a");
var codeAt = __webpack_require__("6547").codeAt;
var toASCII = __webpack_require__("5fb2");
var $toString = __webpack_require__("577e");
var setToStringTag = __webpack_require__("d44e");
var URLSearchParamsModule = __webpack_require__("9861");
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global.URL;
var TypeError = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (charAt(input, 0) == '[') {
    if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(stringSlice(input, 1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return hasOwn(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.length--;
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements -- TODO
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, chr, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = replace(input, TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    chr = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (chr && exec(ALPHA, chr)) {
          buffer += toLowerCase(chr);
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
          buffer += toLowerCase(chr);
        } else if (chr == ':') {
          if (stateOverride && (
            (isSpecial(url) != hasOwn(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            push(url.path, '');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && chr == '#') {
          url.scheme = base.scheme;
          url.path = arraySlice(base.path);
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (chr == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (chr == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (chr == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = arraySlice(base.path);
          url.query = base.query;
        } else if (chr == '/' || (chr == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (chr == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = arraySlice(base.path);
          url.query = '';
          state = QUERY;
        } else if (chr == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = arraySlice(base.path);
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = arraySlice(base.path);
          url.path.length--;
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (chr == '/' || chr == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (chr == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (chr != '/' && chr != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (chr == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += chr;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (chr == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (chr == '[') seenBracket = true;
          else if (chr == ']') seenBracket = false;
          buffer += chr;
        } break;

      case PORT:
        if (exec(DIGIT, chr)) {
          buffer += chr;
        } else if (
          chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (chr == '/' || chr == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (chr == EOF) {
            url.host = base.host;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '?') {
            url.host = base.host;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.host = base.host;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (chr == '/' || chr == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
          if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += chr;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (chr != '/' && chr != '\\') continue;
        } else if (!stateOverride && chr == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && chr == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (chr != EOF) {
          state = PATH;
          if (chr != '/') continue;
        } break;

      case PATH:
        if (
          chr == EOF || chr == '/' ||
          (chr == '\\' && isSpecial(url)) ||
          (!stateOverride && (chr == '?' || chr == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
              push(url.path, '');
            }
          } else if (isSingleDot(buffer)) {
            if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
              push(url.path, '');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
            }
            push(url.path, buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              shift(url.path);
            }
          }
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(chr, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (chr == '?') {
          url.query = '';
          state = QUERY;
        } else if (chr == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (chr != EOF) {
          url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && chr == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (chr != EOF) {
          if (chr == "'" && isSpecial(url)) url.query += '%27';
          else if (chr == '#') url.query += '%23';
          else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = $toString(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    try {
      baseState = getInternalURLState(base);
    } catch (error) {
      failure = parseURL(baseState = {}, $toString(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = $toString(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = call(serializeURL, that);
    that.origin = call(getOrigin, that);
    that.protocol = call(getProtocol, that);
    that.username = call(getUsername, that);
    that.password = call(getPassword, that);
    that.host = call(getHost, that);
    that.hostname = call(getHostname, that);
    that.port = call(getPort, that);
    that.pathname = call(getPathname, that);
    that.search = call(getSearch, that);
    that.searchParams = call(getSearchParams, that);
    that.hash = call(getHash, that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URLConstructor(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : $toString(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = $toString(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, $toString(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom($toString(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom($toString(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, $toString(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, $toString(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = $toString(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, $toString(pathname), PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = $toString(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = $toString(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return call(serializeURL, this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return call(serializeURL, this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2c3e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var UNSUPPORTED_Y = __webpack_require__("9f7f").UNSUPPORTED_Y;
var classof = __webpack_require__("c6b6");
var defineProperty = __webpack_require__("9bf2").f;
var getInternalState = __webpack_require__("69f3").get;

var RegExpPrototype = RegExp.prototype;
var TypeError = global.TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && UNSUPPORTED_Y) {
  defineProperty(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "2ca0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var bind = __webpack_require__("0366");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var fails = __webpack_require__("d039");
var html = __webpack_require__("1be4");
var arraySlice = __webpack_require__("f36a");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(isCallable(fn) ? fn : Function(fn), undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "2f5a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3280":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var apply = __webpack_require__("2ba4");
var $lastIndexOf = __webpack_require__("e58c");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});


/***/ }),

/***/ "3410":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toObject = __webpack_require__("7b0b");
var nativeGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "3a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $findIndex = __webpack_require__("b727").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3c5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var lengthOfArrayLike = __webpack_require__("07fa");
var toOffset = __webpack_require__("182d");
var toObject = __webpack_require__("7b0b");
var fails = __webpack_require__("d039");

var RangeError = global.RangeError;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3fcc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $map = __webpack_require__("b727").map;
var typedArraySpeciesConstructor = __webpack_require__("b6b7");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor(O))(length);
  });
});


/***/ }),

/***/ "4000":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = __webpack_require__("7037").default;

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d3b7");

__webpack_require__("944a");

__webpack_require__("0c47");

__webpack_require__("23dc");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

__webpack_require__("e6cf");

__webpack_require__("ac1f");

__webpack_require__("5319");

__webpack_require__("1276");

__webpack_require__("4e82");

__webpack_require__("498a");

__webpack_require__("caad");

__webpack_require__("2532");

__webpack_require__("8ba4");

__webpack_require__("a9e3");

__webpack_require__("07ac");

__webpack_require__("b0c0");

__webpack_require__("a434");

__webpack_require__("fb6a");

__webpack_require__("159b");

__webpack_require__("b636");

__webpack_require__("3410");

__webpack_require__("25f0");

__webpack_require__("e9c4");

__webpack_require__("841c");

__webpack_require__("99af");

__webpack_require__("b680");

__webpack_require__("2b3d");

__webpack_require__("9861");

__webpack_require__("00b4");

__webpack_require__("466d");

__webpack_require__("a15b");

__webpack_require__("b64b");

__webpack_require__("4d63");

__webpack_require__("c607");

__webpack_require__("2c3e");

__webpack_require__("2ca0");

__webpack_require__("cca6");

__webpack_require__("9129");

__webpack_require__("10d1");

__webpack_require__("a79d");

__webpack_require__("dca8");

__webpack_require__("f8c9");

__webpack_require__("5d41");

__webpack_require__("e439");

__webpack_require__("6062");

__webpack_require__("d81d");

/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __w_pdfjs_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __w_pdfjs_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __w_pdfjs_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __w_pdfjs_require__.d = function (exports, name, getter) {
        /******/
        if (!__w_pdfjs_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __w_pdfjs_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __w_pdfjs_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __w_pdfjs_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __w_pdfjs_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __w_pdfjs_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __w_pdfjs_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __w_pdfjs_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __w_pdfjs_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __w_pdfjs_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "AnnotationLayerBuilder", {
        enumerable: true,
        get: function get() {
          return _annotation_layer_builder.AnnotationLayerBuilder;
        }
      });
      Object.defineProperty(exports, "DefaultAnnotationLayerFactory", {
        enumerable: true,
        get: function get() {
          return _annotation_layer_builder.DefaultAnnotationLayerFactory;
        }
      });
      Object.defineProperty(exports, "DefaultTextLayerFactory", {
        enumerable: true,
        get: function get() {
          return _text_layer_builder.DefaultTextLayerFactory;
        }
      });
      Object.defineProperty(exports, "TextLayerBuilder", {
        enumerable: true,
        get: function get() {
          return _text_layer_builder.TextLayerBuilder;
        }
      });
      Object.defineProperty(exports, "EventBus", {
        enumerable: true,
        get: function get() {
          return _ui_utils.EventBus;
        }
      });
      Object.defineProperty(exports, "NullL10n", {
        enumerable: true,
        get: function get() {
          return _ui_utils.NullL10n;
        }
      });
      Object.defineProperty(exports, "ProgressBar", {
        enumerable: true,
        get: function get() {
          return _ui_utils.ProgressBar;
        }
      });
      Object.defineProperty(exports, "PDFLinkService", {
        enumerable: true,
        get: function get() {
          return _pdf_link_service.PDFLinkService;
        }
      });
      Object.defineProperty(exports, "SimpleLinkService", {
        enumerable: true,
        get: function get() {
          return _pdf_link_service.SimpleLinkService;
        }
      });
      Object.defineProperty(exports, "DownloadManager", {
        enumerable: true,
        get: function get() {
          return _download_manager.DownloadManager;
        }
      });
      Object.defineProperty(exports, "GenericL10n", {
        enumerable: true,
        get: function get() {
          return _genericl10n.GenericL10n;
        }
      });
      Object.defineProperty(exports, "PDFFindController", {
        enumerable: true,
        get: function get() {
          return _pdf_find_controller.PDFFindController;
        }
      });
      Object.defineProperty(exports, "PDFHistory", {
        enumerable: true,
        get: function get() {
          return _pdf_history.PDFHistory;
        }
      });
      Object.defineProperty(exports, "PDFPageView", {
        enumerable: true,
        get: function get() {
          return _pdf_page_view.PDFPageView;
        }
      });
      Object.defineProperty(exports, "PDFSinglePageViewer", {
        enumerable: true,
        get: function get() {
          return _pdf_single_page_viewer.PDFSinglePageViewer;
        }
      });
      Object.defineProperty(exports, "PDFViewer", {
        enumerable: true,
        get: function get() {
          return _pdf_viewer.PDFViewer;
        }
      });

      var _annotation_layer_builder = __w_pdfjs_require__(1);

      var _text_layer_builder = __w_pdfjs_require__(8);

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdf_link_service = __w_pdfjs_require__(7);

      var _download_manager = __w_pdfjs_require__(9);

      var _genericl10n = __w_pdfjs_require__(10);

      var _pdf_find_controller = __w_pdfjs_require__(12);

      var _pdf_history = __w_pdfjs_require__(14);

      var _pdf_page_view = __w_pdfjs_require__(15);

      var _pdf_single_page_viewer = __w_pdfjs_require__(18);

      var _pdf_viewer = __w_pdfjs_require__(20);

      var pdfjsVersion = '2.3.200';
      var pdfjsBuild = '4ae3f9fc';
      (0, _ui_utils.getGlobalEventBus)(true);
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DefaultAnnotationLayerFactory = exports.AnnotationLayerBuilder = void 0;

      var _pdfjsLib = __w_pdfjs_require__(2);

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdf_link_service = __w_pdfjs_require__(7);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var AnnotationLayerBuilder = /*#__PURE__*/function () {
        function AnnotationLayerBuilder(_ref) {
          var pageDiv = _ref.pageDiv,
              pdfPage = _ref.pdfPage,
              linkService = _ref.linkService,
              downloadManager = _ref.downloadManager,
              _ref$imageResourcesPa = _ref.imageResourcesPath,
              imageResourcesPath = _ref$imageResourcesPa === void 0 ? '' : _ref$imageResourcesPa,
              _ref$renderInteractiv = _ref.renderInteractiveForms,
              renderInteractiveForms = _ref$renderInteractiv === void 0 ? false : _ref$renderInteractiv,
              _ref$l10n = _ref.l10n,
              l10n = _ref$l10n === void 0 ? _ui_utils.NullL10n : _ref$l10n;

          _classCallCheck(this, AnnotationLayerBuilder);

          this.pageDiv = pageDiv;
          this.pdfPage = pdfPage;
          this.linkService = linkService;
          this.downloadManager = downloadManager;
          this.imageResourcesPath = imageResourcesPath;
          this.renderInteractiveForms = renderInteractiveForms;
          this.l10n = l10n;
          this.div = null;
          this._cancelled = false;
        }

        _createClass(AnnotationLayerBuilder, [{
          key: "render",
          value: function render(viewport) {
            var _this = this;

            var intent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'display';
            this.pdfPage.getAnnotations({
              intent: intent
            }).then(function (annotations) {
              if (_this._cancelled) {
                return;
              }

              var parameters = {
                viewport: viewport.clone({
                  dontFlip: true
                }),
                div: _this.div,
                annotations: annotations,
                page: _this.pdfPage,
                imageResourcesPath: _this.imageResourcesPath,
                renderInteractiveForms: _this.renderInteractiveForms,
                linkService: _this.linkService,
                downloadManager: _this.downloadManager
              };

              if (_this.div) {
                _pdfjsLib.AnnotationLayer.update(parameters);
              } else {
                if (annotations.length === 0) {
                  return;
                }

                _this.div = document.createElement('div');
                _this.div.className = 'annotationLayer';

                _this.pageDiv.appendChild(_this.div);

                parameters.div = _this.div;

                _pdfjsLib.AnnotationLayer.render(parameters);

                _this.l10n.translate(_this.div);
              }
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._cancelled = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            if (!this.div) {
              return;
            }

            this.div.setAttribute('hidden', 'true');
          }
        }]);

        return AnnotationLayerBuilder;
      }();

      exports.AnnotationLayerBuilder = AnnotationLayerBuilder;

      var DefaultAnnotationLayerFactory = /*#__PURE__*/function () {
        function DefaultAnnotationLayerFactory() {
          _classCallCheck(this, DefaultAnnotationLayerFactory);
        }

        _createClass(DefaultAnnotationLayerFactory, [{
          key: "createAnnotationLayerBuilder",
          value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
            var imageResourcesPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var renderInteractiveForms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var l10n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _ui_utils.NullL10n;
            return new AnnotationLayerBuilder({
              pageDiv: pageDiv,
              pdfPage: pdfPage,
              imageResourcesPath: imageResourcesPath,
              renderInteractiveForms: renderInteractiveForms,
              linkService: new _pdf_link_service.SimpleLinkService(),
              l10n: l10n
            });
          }
        }]);

        return DefaultAnnotationLayerFactory;
      }();

      exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      var pdfjsLib;

      if (typeof window !== 'undefined' && window['pdfjs-dist/build/pdf']) {
        pdfjsLib = window['pdfjs-dist/build/pdf'];
      } else {
        pdfjsLib = __webpack_require__("cf3f");
      }

      module.exports = pdfjsLib;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isValidRotation = isValidRotation;
      exports.isValidScrollMode = isValidScrollMode;
      exports.isValidSpreadMode = isValidSpreadMode;
      exports.isPortraitOrientation = isPortraitOrientation;
      exports.getGlobalEventBus = getGlobalEventBus;
      exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
      exports.noContextMenuHandler = noContextMenuHandler;
      exports.parseQueryString = parseQueryString;
      exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
      exports.getVisibleElements = getVisibleElements;
      exports.roundToDivide = roundToDivide;
      exports.getPageSizeInches = getPageSizeInches;
      exports.approximateFraction = approximateFraction;
      exports.getOutputScale = getOutputScale;
      exports.scrollIntoView = scrollIntoView;
      exports.watchScroll = watchScroll;
      exports.binarySearchFirstItem = binarySearchFirstItem;
      exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
      exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
      exports.moveToEndOfArray = moveToEndOfArray;
      exports.WaitOnType = exports.animationStarted = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.SpreadMode = exports.ScrollMode = exports.TextLayerMode = exports.RendererType = exports.PresentationModeState = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = void 0;

      var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
          return;
        }

        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      var CSS_UNITS = 96.0 / 72.0;
      exports.CSS_UNITS = CSS_UNITS;
      var DEFAULT_SCALE_VALUE = 'auto';
      exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
      var DEFAULT_SCALE = 1.0;
      exports.DEFAULT_SCALE = DEFAULT_SCALE;
      var MIN_SCALE = 0.10;
      exports.MIN_SCALE = MIN_SCALE;
      var MAX_SCALE = 10.0;
      exports.MAX_SCALE = MAX_SCALE;
      var UNKNOWN_SCALE = 0;
      exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
      var MAX_AUTO_SCALE = 1.25;
      exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
      var SCROLLBAR_PADDING = 40;
      exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
      var VERTICAL_PADDING = 5;
      exports.VERTICAL_PADDING = VERTICAL_PADDING;
      var PresentationModeState = {
        UNKNOWN: 0,
        NORMAL: 1,
        CHANGING: 2,
        FULLSCREEN: 3
      };
      exports.PresentationModeState = PresentationModeState;
      var RendererType = {
        CANVAS: 'canvas',
        SVG: 'svg'
      };
      exports.RendererType = RendererType;
      var TextLayerMode = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_ENHANCE: 2
      };
      exports.TextLayerMode = TextLayerMode;
      var ScrollMode = {
        UNKNOWN: -1,
        VERTICAL: 0,
        HORIZONTAL: 1,
        WRAPPED: 2
      };
      exports.ScrollMode = ScrollMode;
      var SpreadMode = {
        UNKNOWN: -1,
        NONE: 0,
        ODD: 1,
        EVEN: 2
      };
      exports.SpreadMode = SpreadMode;

      function formatL10nValue(text, args) {
        if (!args) {
          return text;
        }

        return text.replace(/\{\{\s*(\w+)\s*\}\}/g, function (all, name) {
          return name in args ? args[name] : '{{' + name + '}}';
        });
      }

      var NullL10n = {
        getLanguage: function () {
          var _getLanguage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", 'en-us');

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getLanguage() {
            return _getLanguage.apply(this, arguments);
          }

          return getLanguage;
        }(),
        getDirection: function () {
          var _getDirection = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", 'ltr');

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function getDirection() {
            return _getDirection.apply(this, arguments);
          }

          return getDirection;
        }(),
        get: function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(property, args, fallback) {
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", formatL10nValue(fallback, args));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function get(_x, _x2, _x3) {
            return _get.apply(this, arguments);
          }

          return get;
        }(),
        translate: function () {
          var _translate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(element) {
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function translate(_x4) {
            return _translate.apply(this, arguments);
          }

          return translate;
        }()
      };
      exports.NullL10n = NullL10n;

      function getOutputScale(ctx) {
        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var pixelRatio = devicePixelRatio / backingStoreRatio;
        return {
          sx: pixelRatio,
          sy: pixelRatio,
          scaled: pixelRatio !== 1
        };
      }

      function scrollIntoView(element, spot) {
        var skipOverflowHiddenElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var parent = element.offsetParent;

        if (!parent) {
          console.error('offsetParent is not set -- cannot scroll');
          return;
        }

        var offsetY = element.offsetTop + element.clientTop;
        var offsetX = element.offsetLeft + element.clientLeft;

        while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || skipOverflowHiddenElements && getComputedStyle(parent).overflow === 'hidden') {
          if (parent.dataset._scaleY) {
            offsetY /= parent.dataset._scaleY;
            offsetX /= parent.dataset._scaleX;
          }

          offsetY += parent.offsetTop;
          offsetX += parent.offsetLeft;
          parent = parent.offsetParent;

          if (!parent) {
            return;
          }
        }

        if (spot) {
          if (spot.top !== undefined) {
            offsetY += spot.top;
          }

          if (spot.left !== undefined) {
            offsetX += spot.left;
            parent.scrollLeft = offsetX;
          }
        }

        parent.scrollTop = offsetY;
      }

      function watchScroll(viewAreaElement, callback) {
        var debounceScroll = function debounceScroll(evt) {
          if (rAF) {
            return;
          }

          rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
            rAF = null;
            var currentX = viewAreaElement.scrollLeft;
            var lastX = state.lastX;

            if (currentX !== lastX) {
              state.right = currentX > lastX;
            }

            state.lastX = currentX;
            var currentY = viewAreaElement.scrollTop;
            var lastY = state.lastY;

            if (currentY !== lastY) {
              state.down = currentY > lastY;
            }

            state.lastY = currentY;
            callback(state);
          });
        };

        var state = {
          right: true,
          down: true,
          lastX: viewAreaElement.scrollLeft,
          lastY: viewAreaElement.scrollTop,
          _eventHandler: debounceScroll
        };
        var rAF = null;
        viewAreaElement.addEventListener('scroll', debounceScroll, true);
        return state;
      }

      function parseQueryString(query) {
        var parts = query.split('&');
        var params = Object.create(null);

        for (var i = 0, ii = parts.length; i < ii; ++i) {
          var param = parts[i].split('=');
          var key = param[0].toLowerCase();
          var value = param.length > 1 ? param[1] : null;
          params[decodeURIComponent(key)] = decodeURIComponent(value);
        }

        return params;
      }

      function binarySearchFirstItem(items, condition) {
        var minIndex = 0;
        var maxIndex = items.length - 1;

        if (items.length === 0 || !condition(items[maxIndex])) {
          return items.length;
        }

        if (condition(items[minIndex])) {
          return minIndex;
        }

        while (minIndex < maxIndex) {
          var currentIndex = minIndex + maxIndex >> 1;
          var currentItem = items[currentIndex];

          if (condition(currentItem)) {
            maxIndex = currentIndex;
          } else {
            minIndex = currentIndex + 1;
          }
        }

        return minIndex;
      }

      function approximateFraction(x) {
        if (Math.floor(x) === x) {
          return [x, 1];
        }

        var xinv = 1 / x;
        var limit = 8;

        if (xinv > limit) {
          return [1, limit];
        } else if (Math.floor(xinv) === xinv) {
          return [1, xinv];
        }

        var x_ = x > 1 ? xinv : x;
        var a = 0,
            b = 1,
            c = 1,
            d = 1;

        while (true) {
          var p = a + c,
              q = b + d;

          if (q > limit) {
            break;
          }

          if (x_ <= p / q) {
            c = p;
            d = q;
          } else {
            a = p;
            b = q;
          }
        }

        var result;

        if (x_ - a / b < c / d - x_) {
          result = x_ === x ? [a, b] : [b, a];
        } else {
          result = x_ === x ? [c, d] : [d, c];
        }

        return result;
      }

      function roundToDivide(x, div) {
        var r = x % div;
        return r === 0 ? x : Math.round(x - r + div);
      }

      function getPageSizeInches(_ref) {
        var view = _ref.view,
            userUnit = _ref.userUnit,
            rotate = _ref.rotate;

        var _view = _slicedToArray(view, 4),
            x1 = _view[0],
            y1 = _view[1],
            x2 = _view[2],
            y2 = _view[3];

        var changeOrientation = rotate % 180 !== 0;
        var width = (x2 - x1) / 72 * userUnit;
        var height = (y2 - y1) / 72 * userUnit;
        return {
          width: changeOrientation ? height : width,
          height: changeOrientation ? width : height
        };
      }

      function backtrackBeforeAllVisibleElements(index, views, top) {
        if (index < 2) {
          return index;
        }

        var elt = views[index].div;
        var pageTop = elt.offsetTop + elt.clientTop;

        if (pageTop >= top) {
          elt = views[index - 1].div;
          pageTop = elt.offsetTop + elt.clientTop;
        }

        for (var i = index - 2; i >= 0; --i) {
          elt = views[i].div;

          if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
            break;
          }

          index = i;
        }

        return index;
      }

      function getVisibleElements(scrollEl, views) {
        var sortByVisibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var horizontal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var top = scrollEl.scrollTop,
            bottom = top + scrollEl.clientHeight;
        var left = scrollEl.scrollLeft,
            right = left + scrollEl.clientWidth;

        function isElementBottomAfterViewTop(view) {
          var element = view.div;
          var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
          return elementBottom > top;
        }

        function isElementRightAfterViewLeft(view) {
          var element = view.div;
          var elementRight = element.offsetLeft + element.clientLeft + element.clientWidth;
          return elementRight > left;
        }

        var visible = [],
            numViews = views.length;
        var firstVisibleElementInd = numViews === 0 ? 0 : binarySearchFirstItem(views, horizontal ? isElementRightAfterViewLeft : isElementBottomAfterViewTop);

        if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
          firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
        }

        var lastEdge = horizontal ? right : -1;

        for (var i = firstVisibleElementInd; i < numViews; i++) {
          var view = views[i],
              element = view.div;
          var currentWidth = element.offsetLeft + element.clientLeft;
          var currentHeight = element.offsetTop + element.clientTop;
          var viewWidth = element.clientWidth,
              viewHeight = element.clientHeight;
          var viewRight = currentWidth + viewWidth;
          var viewBottom = currentHeight + viewHeight;

          if (lastEdge === -1) {
            if (viewBottom >= bottom) {
              lastEdge = viewBottom;
            }
          } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
            break;
          }

          if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
            continue;
          }

          var hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
          var hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
          var percent = (viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100 / viewHeight / viewWidth | 0;
          visible.push({
            id: view.id,
            x: currentWidth,
            y: currentHeight,
            view: view,
            percent: percent
          });
        }

        var first = visible[0],
            last = visible[visible.length - 1];

        if (sortByVisibility) {
          visible.sort(function (a, b) {
            var pc = a.percent - b.percent;

            if (Math.abs(pc) > 0.001) {
              return -pc;
            }

            return a.id - b.id;
          });
        }

        return {
          first: first,
          last: last,
          views: visible
        };
      }

      function noContextMenuHandler(evt) {
        evt.preventDefault();
      }

      function isDataSchema(url) {
        var i = 0,
            ii = url.length;

        while (i < ii && url[i].trim() === '') {
          i++;
        }

        return url.substring(i, i + 5).toLowerCase() === 'data:';
      }

      function getPDFFileNameFromURL(url) {
        var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document.pdf';

        if (typeof url !== 'string') {
          return defaultFilename;
        }

        if (isDataSchema(url)) {
          console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.');
          return defaultFilename;
        }

        var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
        var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
        var splitURI = reURI.exec(url);
        var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);

        if (suggestedFilename) {
          suggestedFilename = suggestedFilename[0];

          if (suggestedFilename.includes('%')) {
            try {
              suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
            } catch (ex) {}
          }
        }

        return suggestedFilename || defaultFilename;
      }

      function normalizeWheelEventDelta(evt) {
        var delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
        var angle = Math.atan2(evt.deltaY, evt.deltaX);

        if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
          delta = -delta;
        }

        var MOUSE_DOM_DELTA_PIXEL_MODE = 0;
        var MOUSE_DOM_DELTA_LINE_MODE = 1;
        var MOUSE_PIXELS_PER_LINE = 30;
        var MOUSE_LINES_PER_PAGE = 30;

        if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
          delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
        } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
          delta /= MOUSE_LINES_PER_PAGE;
        }

        return delta;
      }

      function isValidRotation(angle) {
        return Number.isInteger(angle) && angle % 90 === 0;
      }

      function isValidScrollMode(mode) {
        return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
      }

      function isValidSpreadMode(mode) {
        return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
      }

      function isPortraitOrientation(size) {
        return size.width <= size.height;
      }

      var WaitOnType = {
        EVENT: 'event',
        TIMEOUT: 'timeout'
      };
      exports.WaitOnType = WaitOnType;

      function waitOnEventOrTimeout(_ref2) {
        var target = _ref2.target,
            name = _ref2.name,
            _ref2$delay = _ref2.delay,
            delay = _ref2$delay === void 0 ? 0 : _ref2$delay;
        return new Promise(function (resolve, reject) {
          if (_typeof(target) !== 'object' || !(name && typeof name === 'string') || !(Number.isInteger(delay) && delay >= 0)) {
            throw new Error('waitOnEventOrTimeout - invalid parameters.');
          }

          function handler(type) {
            if (target instanceof EventBus) {
              target.off(name, eventHandler);
            } else {
              target.removeEventListener(name, eventHandler);
            }

            if (timeout) {
              clearTimeout(timeout);
            }

            resolve(type);
          }

          var eventHandler = handler.bind(null, WaitOnType.EVENT);

          if (target instanceof EventBus) {
            target.on(name, eventHandler);
          } else {
            target.addEventListener(name, eventHandler);
          }

          var timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
          var timeout = setTimeout(timeoutHandler, delay);
        });
      }

      var animationStarted = new Promise(function (resolve) {
        window.requestAnimationFrame(resolve);
      });
      exports.animationStarted = animationStarted;

      var EventBus = /*#__PURE__*/function () {
        function EventBus() {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref3$dispatchToDOM = _ref3.dispatchToDOM,
              dispatchToDOM = _ref3$dispatchToDOM === void 0 ? false : _ref3$dispatchToDOM;

          _classCallCheck(this, EventBus);

          this._listeners = Object.create(null);
          this._dispatchToDOM = dispatchToDOM === true;
        }

        _createClass(EventBus, [{
          key: "on",
          value: function on(eventName, listener) {
            var eventListeners = this._listeners[eventName];

            if (!eventListeners) {
              eventListeners = [];
              this._listeners[eventName] = eventListeners;
            }

            eventListeners.push(listener);
          }
        }, {
          key: "off",
          value: function off(eventName, listener) {
            var eventListeners = this._listeners[eventName];
            var i;

            if (!eventListeners || (i = eventListeners.indexOf(listener)) < 0) {
              return;
            }

            eventListeners.splice(i, 1);
          }
        }, {
          key: "dispatch",
          value: function dispatch(eventName) {
            var eventListeners = this._listeners[eventName];

            if (!eventListeners || eventListeners.length === 0) {
              if (this._dispatchToDOM) {
                var _args5 = Array.prototype.slice.call(arguments, 1);

                this._dispatchDOMEvent(eventName, _args5);
              }

              return;
            }

            var args = Array.prototype.slice.call(arguments, 1);
            eventListeners.slice(0).forEach(function (listener) {
              listener.apply(null, args);
            });

            if (this._dispatchToDOM) {
              this._dispatchDOMEvent(eventName, args);
            }
          }
        }, {
          key: "_dispatchDOMEvent",
          value: function _dispatchDOMEvent(eventName) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var details = Object.create(null);

            if (args && args.length > 0) {
              var obj = args[0];

              for (var key in obj) {
                var value = obj[key];

                if (key === 'source') {
                  if (value === window || value === document) {
                    return;
                  }

                  continue;
                }

                details[key] = value;
              }
            }

            var event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, details);
            document.dispatchEvent(event);
          }
        }]);

        return EventBus;
      }();

      exports.EventBus = EventBus;
      var globalEventBus = null;

      function getGlobalEventBus() {
        var dispatchToDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!globalEventBus) {
          globalEventBus = new EventBus({
            dispatchToDOM: dispatchToDOM
          });
        }

        return globalEventBus;
      }

      function clamp(v, min, max) {
        return Math.min(Math.max(v, min), max);
      }

      var ProgressBar = /*#__PURE__*/function () {
        function ProgressBar(id) {
          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              height = _ref4.height,
              width = _ref4.width,
              units = _ref4.units;

          _classCallCheck(this, ProgressBar);

          this.visible = true;
          this.div = document.querySelector(id + ' .progress');
          this.bar = this.div.parentNode;
          this.height = height || 100;
          this.width = width || 100;
          this.units = units || '%';
          this.div.style.height = this.height + this.units;
          this.percent = 0;
        }

        _createClass(ProgressBar, [{
          key: "_updateBar",
          value: function _updateBar() {
            if (this._indeterminate) {
              this.div.classList.add('indeterminate');
              this.div.style.width = this.width + this.units;
              return;
            }

            this.div.classList.remove('indeterminate');
            var progressSize = this.width * this._percent / 100;
            this.div.style.width = progressSize + this.units;
          }
        }, {
          key: "setWidth",
          value: function setWidth(viewer) {
            if (!viewer) {
              return;
            }

            var container = viewer.parentNode;
            var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;

            if (scrollbarWidth > 0) {
              this.bar.setAttribute('style', 'width: calc(100% - ' + scrollbarWidth + 'px);');
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            if (!this.visible) {
              return;
            }

            this.visible = false;
            this.bar.classList.add('hidden');
            document.body.classList.remove('loadingInProgress');
          }
        }, {
          key: "show",
          value: function show() {
            if (this.visible) {
              return;
            }

            this.visible = true;
            document.body.classList.add('loadingInProgress');
            this.bar.classList.remove('hidden');
          }
        }, {
          key: "percent",
          get: function get() {
            return this._percent;
          },
          set: function set(val) {
            this._indeterminate = isNaN(val);
            this._percent = clamp(val, 0, 100);

            this._updateBar();
          }
        }]);

        return ProgressBar;
      }();

      exports.ProgressBar = ProgressBar;

      function moveToEndOfArray(arr, condition) {
        var moved = [],
            len = arr.length;
        var write = 0;

        for (var read = 0; read < len; ++read) {
          if (condition(arr[read])) {
            moved.push(arr[read]);
          } else {
            arr[write] = arr[read];
            ++write;
          }
        }

        for (var _read = 0; write < len; ++_read, ++write) {
          arr[write] = moved[_read];
        }
      }
      /***/

    },
    /* 4 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      module.exports = __w_pdfjs_require__(5);
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (module) {
        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        var runtime = function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined;
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }

          exports.wrap = wrap;

          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";
          var ContinueSentinel = {};

          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {}

          var IteratorPrototype = {};

          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;

              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }

            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          exports.awrap = function (arg) {
            return {
              __await: arg
            };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);

              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;

                if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped;
                  resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }

            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);

          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };

          exports.AsyncIterator = AsyncIterator;

          exports.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;

                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);

                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);

                if (record.type === "normal") {
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];

            if (method === undefined) {
              context.delegate = null;

              if (context.method === "throw") {
                if (delegate.iterator["return"]) {
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;

              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              return info;
            }

            context.delegate = null;
            return ContinueSentinel;
          }

          defineIteratorMethods(Gp);
          Gp[toStringTagSymbol] = "Generator";

          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];

            for (var key in object) {
              keys.push(key);
            }

            keys.reverse();
            return function next() {
              while (keys.length) {
                var key = keys.pop();

                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];

              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;
                  return next;
                };

                return next.next = next;
              }
            }

            return {
              next: doneResult
            };
          }

          exports.values = values;

          function doneResult() {
            return {
              value: undefined,
              done: true
            };
          }

          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined;
              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;

              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;

                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }

                  return thrown;
                }
              }

              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                this.arg = undefined;
              }

              return ContinueSentinel;
            }
          };
          return exports;
        }((false ? undefined : _typeof(module)) === "object" ? module.exports : {});

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
        /* WEBPACK VAR INJECTION */

      }).call(this, __w_pdfjs_require__(6)(module));
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};

          module.paths = [];
          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };
      /***/

    },
    /* 7 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SimpleLinkService = exports.PDFLinkService = void 0;

      var _ui_utils = __w_pdfjs_require__(3);

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var PDFLinkService = /*#__PURE__*/function () {
        function PDFLinkService() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              eventBus = _ref.eventBus,
              _ref$externalLinkTarg = _ref.externalLinkTarget,
              externalLinkTarget = _ref$externalLinkTarg === void 0 ? null : _ref$externalLinkTarg,
              _ref$externalLinkRel = _ref.externalLinkRel,
              externalLinkRel = _ref$externalLinkRel === void 0 ? null : _ref$externalLinkRel,
              _ref$externalLinkEnab = _ref.externalLinkEnabled,
              externalLinkEnabled = _ref$externalLinkEnab === void 0 ? true : _ref$externalLinkEnab;

          _classCallCheck(this, PDFLinkService);

          this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
          this.externalLinkTarget = externalLinkTarget;
          this.externalLinkRel = externalLinkRel;
          this.externalLinkEnabled = externalLinkEnabled;
          this.baseUrl = null;
          this.pdfDocument = null;
          this.pdfViewer = null;
          this.pdfHistory = null;
          this._pagesRefCache = null;
        }

        _createClass(PDFLinkService, [{
          key: "setDocument",
          value: function setDocument(pdfDocument) {
            var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this.baseUrl = baseUrl;
            this.pdfDocument = pdfDocument;
            this._pagesRefCache = Object.create(null);
          }
        }, {
          key: "setViewer",
          value: function setViewer(pdfViewer) {
            this.pdfViewer = pdfViewer;
          }
        }, {
          key: "setHistory",
          value: function setHistory(pdfHistory) {
            this.pdfHistory = pdfHistory;
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(dest) {
            var _this = this;

            var goToDestination = function goToDestination(_ref2) {
              var namedDest = _ref2.namedDest,
                  explicitDest = _ref2.explicitDest;
              var destRef = explicitDest[0],
                  pageNumber;

              if (destRef instanceof Object) {
                pageNumber = _this._cachedPageNumber(destRef);

                if (pageNumber === null) {
                  _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
                    _this.cachePageRef(pageIndex + 1, destRef);

                    goToDestination({
                      namedDest: namedDest,
                      explicitDest: explicitDest
                    });
                  })["catch"](function () {
                    console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid page reference, for dest=\"".concat(dest, "\"."));
                  });

                  return;
                }
              } else if (Number.isInteger(destRef)) {
                pageNumber = destRef + 1;
              } else {
                console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid destination reference, for dest=\"".concat(dest, "\"."));
                return;
              }

              if (!pageNumber || pageNumber < 1 || pageNumber > _this.pagesCount) {
                console.error("PDFLinkService.navigateTo: \"".concat(pageNumber, "\" is not ") + "a valid page number, for dest=\"".concat(dest, "\"."));
                return;
              }

              if (_this.pdfHistory) {
                _this.pdfHistory.pushCurrentPosition();

                _this.pdfHistory.push({
                  namedDest: namedDest,
                  explicitDest: explicitDest,
                  pageNumber: pageNumber
                });
              }

              _this.pdfViewer.scrollPageIntoView({
                pageNumber: pageNumber,
                destArray: explicitDest
              });
            };

            new Promise(function (resolve, reject) {
              if (typeof dest === 'string') {
                _this.pdfDocument.getDestination(dest).then(function (destArray) {
                  resolve({
                    namedDest: dest,
                    explicitDest: destArray
                  });
                });

                return;
              }

              resolve({
                namedDest: '',
                explicitDest: dest
              });
            }).then(function (data) {
              if (!Array.isArray(data.explicitDest)) {
                console.error("PDFLinkService.navigateTo: \"".concat(data.explicitDest, "\" is") + " not a valid destination array, for dest=\"".concat(dest, "\"."));
                return;
              }

              goToDestination(data);
            });
          }
        }, {
          key: "getDestinationHash",
          value: function getDestinationHash(dest) {
            if (typeof dest === 'string') {
              return this.getAnchorUrl('#' + escape(dest));
            }

            if (Array.isArray(dest)) {
              var str = JSON.stringify(dest);
              return this.getAnchorUrl('#' + escape(str));
            }

            return this.getAnchorUrl('');
          }
        }, {
          key: "getAnchorUrl",
          value: function getAnchorUrl(anchor) {
            return (this.baseUrl || '') + anchor;
          }
        }, {
          key: "setHash",
          value: function setHash(hash) {
            var pageNumber, dest;

            if (hash.includes('=')) {
              var params = (0, _ui_utils.parseQueryString)(hash);

              if ('search' in params) {
                this.eventBus.dispatch('findfromurlhash', {
                  source: this,
                  query: params['search'].replace(/"/g, ''),
                  phraseSearch: params['phrase'] === 'true'
                });
              }

              if ('nameddest' in params) {
                this.navigateTo(params.nameddest);
                return;
              }

              if ('page' in params) {
                pageNumber = params.page | 0 || 1;
              }

              if ('zoom' in params) {
                var zoomArgs = params.zoom.split(',');
                var zoomArg = zoomArgs[0];
                var zoomArgNumber = parseFloat(zoomArg);

                if (!zoomArg.includes('Fit')) {
                  dest = [null, {
                    name: 'XYZ'
                  }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
                } else {
                  if (zoomArg === 'Fit' || zoomArg === 'FitB') {
                    dest = [null, {
                      name: zoomArg
                    }];
                  } else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
                    dest = [null, {
                      name: zoomArg
                    }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
                  } else if (zoomArg === 'FitR') {
                    if (zoomArgs.length !== 5) {
                      console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
                    } else {
                      dest = [null, {
                        name: zoomArg
                      }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
                    }
                  } else {
                    console.error("PDFLinkService.setHash: \"".concat(zoomArg, "\" is not ") + 'a valid zoom value.');
                  }
                }
              }

              if (dest) {
                this.pdfViewer.scrollPageIntoView({
                  pageNumber: pageNumber || this.page,
                  destArray: dest,
                  allowNegativeOffset: true
                });
              } else if (pageNumber) {
                this.page = pageNumber;
              }

              if ('pagemode' in params) {
                this.eventBus.dispatch('pagemode', {
                  source: this,
                  mode: params.pagemode
                });
              }
            } else {
              dest = unescape(hash);

              try {
                dest = JSON.parse(dest);

                if (!Array.isArray(dest)) {
                  dest = dest.toString();
                }
              } catch (ex) {}

              if (typeof dest === 'string' || isValidExplicitDestination(dest)) {
                this.navigateTo(dest);
                return;
              }

              console.error("PDFLinkService.setHash: \"".concat(unescape(hash), "\" is not ") + 'a valid destination.');
            }
          }
        }, {
          key: "executeNamedAction",
          value: function executeNamedAction(action) {
            switch (action) {
              case 'GoBack':
                if (this.pdfHistory) {
                  this.pdfHistory.back();
                }

                break;

              case 'GoForward':
                if (this.pdfHistory) {
                  this.pdfHistory.forward();
                }

                break;

              case 'NextPage':
                if (this.page < this.pagesCount) {
                  this.page++;
                }

                break;

              case 'PrevPage':
                if (this.page > 1) {
                  this.page--;
                }

                break;

              case 'LastPage':
                this.page = this.pagesCount;
                break;

              case 'FirstPage':
                this.page = 1;
                break;

              default:
                break;
            }

            this.eventBus.dispatch('namedaction', {
              source: this,
              action: action
            });
          }
        }, {
          key: "cachePageRef",
          value: function cachePageRef(pageNum, pageRef) {
            if (!pageRef) {
              return;
            }

            var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
            this._pagesRefCache[refStr] = pageNum;
          }
        }, {
          key: "_cachedPageNumber",
          value: function _cachedPageNumber(pageRef) {
            var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
            return this._pagesRefCache && this._pagesRefCache[refStr] || null;
          }
        }, {
          key: "isPageVisible",
          value: function isPageVisible(pageNumber) {
            return this.pdfViewer.isPageVisible(pageNumber);
          }
        }, {
          key: "pagesCount",
          get: function get() {
            return this.pdfDocument ? this.pdfDocument.numPages : 0;
          }
        }, {
          key: "page",
          get: function get() {
            return this.pdfViewer.currentPageNumber;
          },
          set: function set(value) {
            this.pdfViewer.currentPageNumber = value;
          }
        }, {
          key: "rotation",
          get: function get() {
            return this.pdfViewer.pagesRotation;
          },
          set: function set(value) {
            this.pdfViewer.pagesRotation = value;
          }
        }]);

        return PDFLinkService;
      }();

      exports.PDFLinkService = PDFLinkService;

      function isValidExplicitDestination(dest) {
        if (!Array.isArray(dest)) {
          return false;
        }

        var destLength = dest.length,
            allowNull = true;

        if (destLength < 2) {
          return false;
        }

        var page = dest[0];

        if (!(_typeof(page) === 'object' && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
          return false;
        }

        var zoom = dest[1];

        if (!(_typeof(zoom) === 'object' && typeof zoom.name === 'string')) {
          return false;
        }

        switch (zoom.name) {
          case 'XYZ':
            if (destLength !== 5) {
              return false;
            }

            break;

          case 'Fit':
          case 'FitB':
            return destLength === 2;

          case 'FitH':
          case 'FitBH':
          case 'FitV':
          case 'FitBV':
            if (destLength !== 3) {
              return false;
            }

            break;

          case 'FitR':
            if (destLength !== 6) {
              return false;
            }

            allowNull = false;
            break;

          default:
            return false;
        }

        for (var i = 2; i < destLength; i++) {
          var param = dest[i];

          if (!(typeof param === 'number' || allowNull && param === null)) {
            return false;
          }
        }

        return true;
      }

      var SimpleLinkService = /*#__PURE__*/function () {
        function SimpleLinkService() {
          _classCallCheck(this, SimpleLinkService);

          this.externalLinkTarget = null;
          this.externalLinkRel = null;
          this.externalLinkEnabled = true;
        }

        _createClass(SimpleLinkService, [{
          key: "navigateTo",
          value: function navigateTo(dest) {}
        }, {
          key: "getDestinationHash",
          value: function getDestinationHash(dest) {
            return '#';
          }
        }, {
          key: "getAnchorUrl",
          value: function getAnchorUrl(hash) {
            return '#';
          }
        }, {
          key: "setHash",
          value: function setHash(hash) {}
        }, {
          key: "executeNamedAction",
          value: function executeNamedAction(action) {}
        }, {
          key: "cachePageRef",
          value: function cachePageRef(pageNum, pageRef) {}
        }, {
          key: "isPageVisible",
          value: function isPageVisible(pageNumber) {
            return true;
          }
        }, {
          key: "pagesCount",
          get: function get() {
            return 0;
          }
        }, {
          key: "page",
          get: function get() {
            return 0;
          },
          set: function set(value) {}
        }, {
          key: "rotation",
          get: function get() {
            return 0;
          },
          set: function set(value) {}
        }]);

        return SimpleLinkService;
      }();

      exports.SimpleLinkService = SimpleLinkService;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DefaultTextLayerFactory = exports.TextLayerBuilder = void 0;

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdfjsLib = __w_pdfjs_require__(2);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var EXPAND_DIVS_TIMEOUT = 300;

      var TextLayerBuilder = /*#__PURE__*/function () {
        function TextLayerBuilder(_ref) {
          var textLayerDiv = _ref.textLayerDiv,
              eventBus = _ref.eventBus,
              pageIndex = _ref.pageIndex,
              viewport = _ref.viewport,
              _ref$findController = _ref.findController,
              findController = _ref$findController === void 0 ? null : _ref$findController,
              _ref$enhanceTextSelec = _ref.enhanceTextSelection,
              enhanceTextSelection = _ref$enhanceTextSelec === void 0 ? false : _ref$enhanceTextSelec;

          _classCallCheck(this, TextLayerBuilder);

          this.textLayerDiv = textLayerDiv;
          this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
          this.textContent = null;
          this.textContentItemsStr = [];
          this.textContentStream = null;
          this.renderingDone = false;
          this.pageIdx = pageIndex;
          this.pageNumber = this.pageIdx + 1;
          this.matches = [];
          this.viewport = viewport;
          this.textDivs = [];
          this.findController = findController;
          this.textLayerRenderTask = null;
          this.enhanceTextSelection = enhanceTextSelection;
          this._onUpdateTextLayerMatches = null;

          this._bindMouse();
        }

        _createClass(TextLayerBuilder, [{
          key: "_finishRendering",
          value: function _finishRendering() {
            this.renderingDone = true;

            if (!this.enhanceTextSelection) {
              var endOfContent = document.createElement('div');
              endOfContent.className = 'endOfContent';
              this.textLayerDiv.appendChild(endOfContent);
            }

            this.eventBus.dispatch('textlayerrendered', {
              source: this,
              pageNumber: this.pageNumber,
              numTextDivs: this.textDivs.length
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this = this;

            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!(this.textContent || this.textContentStream) || this.renderingDone) {
              return;
            }

            this.cancel();
            this.textDivs = [];
            var textLayerFrag = document.createDocumentFragment();
            this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
              textContent: this.textContent,
              textContentStream: this.textContentStream,
              container: textLayerFrag,
              viewport: this.viewport,
              textDivs: this.textDivs,
              textContentItemsStr: this.textContentItemsStr,
              timeout: timeout,
              enhanceTextSelection: this.enhanceTextSelection
            });
            this.textLayerRenderTask.promise.then(function () {
              _this.textLayerDiv.appendChild(textLayerFrag);

              _this._finishRendering();

              _this._updateMatches();
            }, function (reason) {});

            if (!this._onUpdateTextLayerMatches) {
              this._onUpdateTextLayerMatches = function (evt) {
                if (evt.pageIndex === _this.pageIdx || evt.pageIndex === -1) {
                  _this._updateMatches();
                }
              };

              this.eventBus.on('updatetextlayermatches', this._onUpdateTextLayerMatches);
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            if (this.textLayerRenderTask) {
              this.textLayerRenderTask.cancel();
              this.textLayerRenderTask = null;
            }

            if (this._onUpdateTextLayerMatches) {
              this.eventBus.off('updatetextlayermatches', this._onUpdateTextLayerMatches);
              this._onUpdateTextLayerMatches = null;
            }
          }
        }, {
          key: "setTextContentStream",
          value: function setTextContentStream(readableStream) {
            this.cancel();
            this.textContentStream = readableStream;
          }
        }, {
          key: "setTextContent",
          value: function setTextContent(textContent) {
            this.cancel();
            this.textContent = textContent;
          }
        }, {
          key: "_convertMatches",
          value: function _convertMatches(matches, matchesLength) {
            if (!matches) {
              return [];
            }

            var findController = this.findController,
                textContentItemsStr = this.textContentItemsStr;
            var i = 0,
                iIndex = 0;
            var end = textContentItemsStr.length - 1;
            var queryLen = findController.state.query.length;
            var result = [];

            for (var m = 0, mm = matches.length; m < mm; m++) {
              var matchIdx = matches[m];

              while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
              }

              if (i === textContentItemsStr.length) {
                console.error('Could not find a matching mapping');
              }

              var match = {
                begin: {
                  divIdx: i,
                  offset: matchIdx - iIndex
                }
              };

              if (matchesLength) {
                matchIdx += matchesLength[m];
              } else {
                matchIdx += queryLen;
              }

              while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
              }

              match.end = {
                divIdx: i,
                offset: matchIdx - iIndex
              };
              result.push(match);
            }

            return result;
          }
        }, {
          key: "_renderMatches",
          value: function _renderMatches(matches) {
            if (matches.length === 0) {
              return;
            }

            var findController = this.findController,
                pageIdx = this.pageIdx,
                textContentItemsStr = this.textContentItemsStr,
                textDivs = this.textDivs;
            var isSelectedPage = pageIdx === findController.selected.pageIdx;
            var selectedMatchIdx = findController.selected.matchIdx;
            var highlightAll = findController.state.highlightAll;
            var prevEnd = null;
            var infinity = {
              divIdx: -1,
              offset: undefined
            };

            function beginText(begin, className) {
              var divIdx = begin.divIdx;
              textDivs[divIdx].textContent = '';
              appendTextToDiv(divIdx, 0, begin.offset, className);
            }

            function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
              var div = textDivs[divIdx];
              var content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
              var node = document.createTextNode(content);

              if (className) {
                var span = document.createElement('span');
                span.className = className;
                span.appendChild(node);
                div.appendChild(span);
                return;
              }

              div.appendChild(node);
            }

            var i0 = selectedMatchIdx,
                i1 = i0 + 1;

            if (highlightAll) {
              i0 = 0;
              i1 = matches.length;
            } else if (!isSelectedPage) {
              return;
            }

            for (var i = i0; i < i1; i++) {
              var match = matches[i];
              var begin = match.begin;
              var end = match.end;
              var isSelected = isSelectedPage && i === selectedMatchIdx;
              var highlightSuffix = isSelected ? ' selected' : '';

              if (isSelected) {
                findController.scrollMatchIntoView({
                  element: textDivs[begin.divIdx],
                  pageIndex: pageIdx,
                  matchIndex: selectedMatchIdx
                });
              }

              if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                if (prevEnd !== null) {
                  appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                }

                beginText(begin);
              } else {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
              }

              if (begin.divIdx === end.divIdx) {
                appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
              } else {
                appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix);

                for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                  textDivs[n0].className = 'highlight middle' + highlightSuffix;
                }

                beginText(end, 'highlight end' + highlightSuffix);
              }

              prevEnd = end;
            }

            if (prevEnd) {
              appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
            }
          }
        }, {
          key: "_updateMatches",
          value: function _updateMatches() {
            if (!this.renderingDone) {
              return;
            }

            var findController = this.findController,
                matches = this.matches,
                pageIdx = this.pageIdx,
                textContentItemsStr = this.textContentItemsStr,
                textDivs = this.textDivs;
            var clearedUntilDivIdx = -1;

            for (var i = 0, ii = matches.length; i < ii; i++) {
              var match = matches[i];
              var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);

              for (var n = begin, end = match.end.divIdx; n <= end; n++) {
                var div = textDivs[n];
                div.textContent = textContentItemsStr[n];
                div.className = '';
              }

              clearedUntilDivIdx = match.end.divIdx + 1;
            }

            if (!findController || !findController.highlightMatches) {
              return;
            }

            var pageMatches = findController.pageMatches[pageIdx] || null;
            var pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
            this.matches = this._convertMatches(pageMatches, pageMatchesLength);

            this._renderMatches(this.matches);
          }
        }, {
          key: "_bindMouse",
          value: function _bindMouse() {
            var _this2 = this;

            var div = this.textLayerDiv;
            var expandDivsTimer = null;
            div.addEventListener('mousedown', function (evt) {
              if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
                _this2.textLayerRenderTask.expandTextDivs(true);

                if (expandDivsTimer) {
                  clearTimeout(expandDivsTimer);
                  expandDivsTimer = null;
                }

                return;
              }

              var end = div.querySelector('.endOfContent');

              if (!end) {
                return;
              }

              var adjustTop = evt.target !== div;
              adjustTop = adjustTop && window.getComputedStyle(end).getPropertyValue('-moz-user-select') !== 'none';

              if (adjustTop) {
                var divBounds = div.getBoundingClientRect();
                var r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
                end.style.top = (r * 100).toFixed(2) + '%';
              }

              end.classList.add('active');
            });
            div.addEventListener('mouseup', function () {
              if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
                expandDivsTimer = setTimeout(function () {
                  if (_this2.textLayerRenderTask) {
                    _this2.textLayerRenderTask.expandTextDivs(false);
                  }

                  expandDivsTimer = null;
                }, EXPAND_DIVS_TIMEOUT);
                return;
              }

              var end = div.querySelector('.endOfContent');

              if (!end) {
                return;
              }

              end.style.top = '';
              end.classList.remove('active');
            });
          }
        }]);

        return TextLayerBuilder;
      }();

      exports.TextLayerBuilder = TextLayerBuilder;

      var DefaultTextLayerFactory = /*#__PURE__*/function () {
        function DefaultTextLayerFactory() {
          _classCallCheck(this, DefaultTextLayerFactory);
        }

        _createClass(DefaultTextLayerFactory, [{
          key: "createTextLayerBuilder",
          value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
            var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return new TextLayerBuilder({
              textLayerDiv: textLayerDiv,
              pageIndex: pageIndex,
              viewport: viewport,
              enhanceTextSelection: enhanceTextSelection
            });
          }
        }]);

        return DefaultTextLayerFactory;
      }();

      exports.DefaultTextLayerFactory = DefaultTextLayerFactory;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DownloadManager = void 0;

      var _pdfjsLib = __w_pdfjs_require__(2);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      ;
      var DISABLE_CREATE_OBJECT_URL = _pdfjsLib.apiCompatibilityParams.disableCreateObjectURL || false;

      function _download(blobUrl, filename) {
        var a = document.createElement('a');

        if (!a.click) {
          throw new Error('DownloadManager: "a.click()" is not supported.');
        }

        a.href = blobUrl;
        a.target = '_parent';

        if ('download' in a) {
          a.download = filename;
        }

        (document.body || document.documentElement).appendChild(a);
        a.click();
        a.remove();
      }

      var DownloadManager = /*#__PURE__*/function () {
        function DownloadManager(_ref) {
          var _ref$disableCreateObj = _ref.disableCreateObjectURL,
              disableCreateObjectURL = _ref$disableCreateObj === void 0 ? DISABLE_CREATE_OBJECT_URL : _ref$disableCreateObj;

          _classCallCheck(this, DownloadManager);

          this.disableCreateObjectURL = disableCreateObjectURL;
        }

        _createClass(DownloadManager, [{
          key: "downloadUrl",
          value: function downloadUrl(url, filename) {
            if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, 'http://example.com')) {
              return;
            }

            _download(url + '#pdfjs.action=download', filename);
          }
        }, {
          key: "downloadData",
          value: function downloadData(data, filename, contentType) {
            if (navigator.msSaveBlob) {
              navigator.msSaveBlob(new Blob([data], {
                type: contentType
              }), filename);
              return;
            }

            var blobUrl = (0, _pdfjsLib.createObjectURL)(data, contentType, this.disableCreateObjectURL);

            _download(blobUrl, filename);
          }
        }, {
          key: "download",
          value: function download(blob, url, filename) {
            if (navigator.msSaveBlob) {
              if (!navigator.msSaveBlob(blob, filename)) {
                this.downloadUrl(url, filename);
              }

              return;
            }

            if (this.disableCreateObjectURL) {
              this.downloadUrl(url, filename);
              return;
            }

            var blobUrl = URL.createObjectURL(blob);

            _download(blobUrl, filename);
          }
        }]);

        return DownloadManager;
      }();

      exports.DownloadManager = DownloadManager;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GenericL10n = void 0;

      var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

      __w_pdfjs_require__(11);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var webL10n = document.webL10n;

      var GenericL10n = /*#__PURE__*/function () {
        function GenericL10n(lang) {
          _classCallCheck(this, GenericL10n);

          this._lang = lang;
          this._ready = new Promise(function (resolve, reject) {
            webL10n.setLanguage(lang, function () {
              resolve(webL10n);
            });
          });
        }

        _createClass(GenericL10n, [{
          key: "getLanguage",
          value: function () {
            var _getLanguage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var l10n;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._ready;

                    case 2:
                      l10n = _context.sent;
                      return _context.abrupt("return", l10n.getLanguage());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getLanguage() {
              return _getLanguage.apply(this, arguments);
            }

            return getLanguage;
          }()
        }, {
          key: "getDirection",
          value: function () {
            var _getDirection = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              var l10n;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._ready;

                    case 2:
                      l10n = _context2.sent;
                      return _context2.abrupt("return", l10n.getDirection());

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getDirection() {
              return _getDirection.apply(this, arguments);
            }

            return getDirection;
          }()
        }, {
          key: "get",
          value: function () {
            var _get = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(property, args, fallback) {
              var l10n;
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._ready;

                    case 2:
                      l10n = _context3.sent;
                      return _context3.abrupt("return", l10n.get(property, args, fallback));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function get(_x, _x2, _x3) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "translate",
          value: function () {
            var _translate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(element) {
              var l10n;
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this._ready;

                    case 2:
                      l10n = _context4.sent;
                      return _context4.abrupt("return", l10n.translate(element));

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function translate(_x4) {
              return _translate.apply(this, arguments);
            }

            return translate;
          }()
        }]);

        return GenericL10n;
      }();

      exports.GenericL10n = GenericL10n;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      document.webL10n = function (window, document, undefined) {
        var gL10nData = {};
        var gTextData = '';
        var gTextProp = 'textContent';
        var gLanguage = '';
        var gMacros = {};
        var gReadyState = 'loading';
        var gAsyncResourceLoading = true;

        function getL10nResourceLinks() {
          return document.querySelectorAll('link[type="application/l10n"]');
        }

        function getL10nDictionary() {
          var script = document.querySelector('script[type="application/l10n"]');
          return script ? JSON.parse(script.innerHTML) : null;
        }

        function getTranslatableChildren(element) {
          return element ? element.querySelectorAll('*[data-l10n-id]') : [];
        }

        function getL10nAttributes(element) {
          if (!element) return {};
          var l10nId = element.getAttribute('data-l10n-id');
          var l10nArgs = element.getAttribute('data-l10n-args');
          var args = {};

          if (l10nArgs) {
            try {
              args = JSON.parse(l10nArgs);
            } catch (e) {
              console.warn('could not parse arguments for #' + l10nId);
            }
          }

          return {
            id: l10nId,
            args: args
          };
        }

        function xhrLoadText(url, onSuccess, onFailure) {
          onSuccess = onSuccess || function _onSuccess(data) {};

          onFailure = onFailure || function _onFailure() {};

          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, gAsyncResourceLoading);

          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=utf-8');
          }

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200 || xhr.status === 0) {
                onSuccess(xhr.responseText);
              } else {
                onFailure();
              }
            }
          };

          xhr.onerror = onFailure;
          xhr.ontimeout = onFailure;

          try {
            xhr.send(null);
          } catch (e) {
            onFailure();
          }
        }

        function parseResource(href, lang, successCallback, failureCallback) {
          var baseURL = href.replace(/[^\/]*$/, '') || './';

          function evalString(text) {
            if (text.lastIndexOf('\\') < 0) return text;
            return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'");
          }

          function parseProperties(text, parsedPropertiesCallback) {
            var dictionary = {};
            var reBlank = /^\s*|\s*$/;
            var reComment = /^\s*#|^\s*$/;
            var reSection = /^\s*\[(.*)\]\s*$/;
            var reImport = /^\s*@import\s+url\((.*)\)\s*$/i;
            var reSplit = /^([^=\s]*)\s*=\s*(.+)$/;

            function parseRawLines(rawText, extendedSyntax, parsedRawLinesCallback) {
              var entries = rawText.replace(reBlank, '').split(/[\r\n]+/);
              var currentLang = '*';
              var genericLang = lang.split('-', 1)[0];
              var skipLang = false;
              var match = '';

              function nextEntry() {
                while (true) {
                  if (!entries.length) {
                    parsedRawLinesCallback();
                    return;
                  }

                  var line = entries.shift();
                  if (reComment.test(line)) continue;

                  if (extendedSyntax) {
                    match = reSection.exec(line);

                    if (match) {
                      currentLang = match[1].toLowerCase();
                      skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang;
                      continue;
                    } else if (skipLang) {
                      continue;
                    }

                    match = reImport.exec(line);

                    if (match) {
                      loadImport(baseURL + match[1], nextEntry);
                      return;
                    }
                  }

                  var tmp = line.match(reSplit);

                  if (tmp && tmp.length == 3) {
                    dictionary[tmp[1]] = evalString(tmp[2]);
                  }
                }
              }

              nextEntry();
            }

            function loadImport(url, callback) {
              xhrLoadText(url, function (content) {
                parseRawLines(content, false, callback);
              }, function () {
                console.warn(url + ' not found.');
                callback();
              });
            }

            parseRawLines(text, true, function () {
              parsedPropertiesCallback(dictionary);
            });
          }

          xhrLoadText(href, function (response) {
            gTextData += response;
            parseProperties(response, function (data) {
              for (var key in data) {
                var id,
                    prop,
                    index = key.lastIndexOf('.');

                if (index > 0) {
                  id = key.substring(0, index);
                  prop = key.substring(index + 1);
                } else {
                  id = key;
                  prop = gTextProp;
                }

                if (!gL10nData[id]) {
                  gL10nData[id] = {};
                }

                gL10nData[id][prop] = data[key];
              }

              if (successCallback) {
                successCallback();
              }
            });
          }, failureCallback);
        }

        function loadLocale(lang, callback) {
          if (lang) {
            lang = lang.toLowerCase();
          }

          callback = callback || function _callback() {};

          clear();
          gLanguage = lang;
          var langLinks = getL10nResourceLinks();
          var langCount = langLinks.length;

          if (langCount === 0) {
            var dict = getL10nDictionary();

            if (dict && dict.locales && dict.default_locale) {
              console.log('using the embedded JSON directory, early way out');
              gL10nData = dict.locales[lang];

              if (!gL10nData) {
                var defaultLocale = dict.default_locale.toLowerCase();

                for (var anyCaseLang in dict.locales) {
                  anyCaseLang = anyCaseLang.toLowerCase();

                  if (anyCaseLang === lang) {
                    gL10nData = dict.locales[lang];
                    break;
                  } else if (anyCaseLang === defaultLocale) {
                    gL10nData = dict.locales[defaultLocale];
                  }
                }
              }

              callback();
            } else {
              console.log('no resource to load, early way out');
            }

            gReadyState = 'complete';
            return;
          }

          var onResourceLoaded = null;
          var gResourceCount = 0;

          onResourceLoaded = function onResourceLoaded() {
            gResourceCount++;

            if (gResourceCount >= langCount) {
              callback();
              gReadyState = 'complete';
            }
          };

          function L10nResourceLink(link) {
            var href = link.href;

            this.load = function (lang, callback) {
              parseResource(href, lang, callback, function () {
                console.warn(href + ' not found.');
                console.warn('"' + lang + '" resource not found');
                gLanguage = '';
                callback();
              });
            };
          }

          for (var i = 0; i < langCount; i++) {
            var resource = new L10nResourceLink(langLinks[i]);
            resource.load(lang, onResourceLoaded);
          }
        }

        function clear() {
          gL10nData = {};
          gTextData = '';
          gLanguage = '';
        }

        function getPluralRules(lang) {
          var locales2rules = {
            'af': 3,
            'ak': 4,
            'am': 4,
            'ar': 1,
            'asa': 3,
            'az': 0,
            'be': 11,
            'bem': 3,
            'bez': 3,
            'bg': 3,
            'bh': 4,
            'bm': 0,
            'bn': 3,
            'bo': 0,
            'br': 20,
            'brx': 3,
            'bs': 11,
            'ca': 3,
            'cgg': 3,
            'chr': 3,
            'cs': 12,
            'cy': 17,
            'da': 3,
            'de': 3,
            'dv': 3,
            'dz': 0,
            'ee': 3,
            'el': 3,
            'en': 3,
            'eo': 3,
            'es': 3,
            'et': 3,
            'eu': 3,
            'fa': 0,
            'ff': 5,
            'fi': 3,
            'fil': 4,
            'fo': 3,
            'fr': 5,
            'fur': 3,
            'fy': 3,
            'ga': 8,
            'gd': 24,
            'gl': 3,
            'gsw': 3,
            'gu': 3,
            'guw': 4,
            'gv': 23,
            'ha': 3,
            'haw': 3,
            'he': 2,
            'hi': 4,
            'hr': 11,
            'hu': 0,
            'id': 0,
            'ig': 0,
            'ii': 0,
            'is': 3,
            'it': 3,
            'iu': 7,
            'ja': 0,
            'jmc': 3,
            'jv': 0,
            'ka': 0,
            'kab': 5,
            'kaj': 3,
            'kcg': 3,
            'kde': 0,
            'kea': 0,
            'kk': 3,
            'kl': 3,
            'km': 0,
            'kn': 0,
            'ko': 0,
            'ksb': 3,
            'ksh': 21,
            'ku': 3,
            'kw': 7,
            'lag': 18,
            'lb': 3,
            'lg': 3,
            'ln': 4,
            'lo': 0,
            'lt': 10,
            'lv': 6,
            'mas': 3,
            'mg': 4,
            'mk': 16,
            'ml': 3,
            'mn': 3,
            'mo': 9,
            'mr': 3,
            'ms': 0,
            'mt': 15,
            'my': 0,
            'nah': 3,
            'naq': 7,
            'nb': 3,
            'nd': 3,
            'ne': 3,
            'nl': 3,
            'nn': 3,
            'no': 3,
            'nr': 3,
            'nso': 4,
            'ny': 3,
            'nyn': 3,
            'om': 3,
            'or': 3,
            'pa': 3,
            'pap': 3,
            'pl': 13,
            'ps': 3,
            'pt': 3,
            'rm': 3,
            'ro': 9,
            'rof': 3,
            'ru': 11,
            'rwk': 3,
            'sah': 0,
            'saq': 3,
            'se': 7,
            'seh': 3,
            'ses': 0,
            'sg': 0,
            'sh': 11,
            'shi': 19,
            'sk': 12,
            'sl': 14,
            'sma': 7,
            'smi': 7,
            'smj': 7,
            'smn': 7,
            'sms': 7,
            'sn': 3,
            'so': 3,
            'sq': 3,
            'sr': 11,
            'ss': 3,
            'ssy': 3,
            'st': 3,
            'sv': 3,
            'sw': 3,
            'syr': 3,
            'ta': 3,
            'te': 3,
            'teo': 3,
            'th': 0,
            'ti': 4,
            'tig': 3,
            'tk': 3,
            'tl': 4,
            'tn': 3,
            'to': 0,
            'tr': 0,
            'ts': 3,
            'tzm': 22,
            'uk': 11,
            'ur': 3,
            've': 3,
            'vi': 0,
            'vun': 3,
            'wa': 4,
            'wae': 3,
            'wo': 0,
            'xh': 3,
            'xog': 3,
            'yo': 0,
            'zh': 0,
            'zu': 3
          };

          function isIn(n, list) {
            return list.indexOf(n) !== -1;
          }

          function isBetween(n, start, end) {
            return start <= n && n <= end;
          }

          var pluralRules = {
            '0': function _(n) {
              return 'other';
            },
            '1': function _(n) {
              if (isBetween(n % 100, 3, 10)) return 'few';
              if (n === 0) return 'zero';
              if (isBetween(n % 100, 11, 99)) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '2': function _(n) {
              if (n !== 0 && n % 10 === 0) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '3': function _(n) {
              if (n == 1) return 'one';
              return 'other';
            },
            '4': function _(n) {
              if (isBetween(n, 0, 1)) return 'one';
              return 'other';
            },
            '5': function _(n) {
              if (isBetween(n, 0, 2) && n != 2) return 'one';
              return 'other';
            },
            '6': function _(n) {
              if (n === 0) return 'zero';
              if (n % 10 == 1 && n % 100 != 11) return 'one';
              return 'other';
            },
            '7': function _(n) {
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '8': function _(n) {
              if (isBetween(n, 3, 6)) return 'few';
              if (isBetween(n, 7, 10)) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '9': function _(n) {
              if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) return 'few';
              if (n == 1) return 'one';
              return 'other';
            },
            '10': function _(n) {
              if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) return 'few';
              if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) return 'one';
              return 'other';
            },
            '11': function _(n) {
              if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
              if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) return 'many';
              if (n % 10 == 1 && n % 100 != 11) return 'one';
              return 'other';
            },
            '12': function _(n) {
              if (isBetween(n, 2, 4)) return 'few';
              if (n == 1) return 'one';
              return 'other';
            },
            '13': function _(n) {
              if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
              if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) return 'many';
              if (n == 1) return 'one';
              return 'other';
            },
            '14': function _(n) {
              if (isBetween(n % 100, 3, 4)) return 'few';
              if (n % 100 == 2) return 'two';
              if (n % 100 == 1) return 'one';
              return 'other';
            },
            '15': function _(n) {
              if (n === 0 || isBetween(n % 100, 2, 10)) return 'few';
              if (isBetween(n % 100, 11, 19)) return 'many';
              if (n == 1) return 'one';
              return 'other';
            },
            '16': function _(n) {
              if (n % 10 == 1 && n != 11) return 'one';
              return 'other';
            },
            '17': function _(n) {
              if (n == 3) return 'few';
              if (n === 0) return 'zero';
              if (n == 6) return 'many';
              if (n == 2) return 'two';
              if (n == 1) return 'one';
              return 'other';
            },
            '18': function _(n) {
              if (n === 0) return 'zero';
              if (isBetween(n, 0, 2) && n !== 0 && n != 2) return 'one';
              return 'other';
            },
            '19': function _(n) {
              if (isBetween(n, 2, 10)) return 'few';
              if (isBetween(n, 0, 1)) return 'one';
              return 'other';
            },
            '20': function _(n) {
              if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) return 'few';
              if (n % 1000000 === 0 && n !== 0) return 'many';
              if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) return 'two';
              if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) return 'one';
              return 'other';
            },
            '21': function _(n) {
              if (n === 0) return 'zero';
              if (n == 1) return 'one';
              return 'other';
            },
            '22': function _(n) {
              if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) return 'one';
              return 'other';
            },
            '23': function _(n) {
              if (isBetween(n % 10, 1, 2) || n % 20 === 0) return 'one';
              return 'other';
            },
            '24': function _(n) {
              if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) return 'few';
              if (isIn(n, [2, 12])) return 'two';
              if (isIn(n, [1, 11])) return 'one';
              return 'other';
            }
          };
          var index = locales2rules[lang.replace(/-.*$/, '')];

          if (!(index in pluralRules)) {
            console.warn('plural form unknown for [' + lang + ']');
            return function () {
              return 'other';
            };
          }

          return pluralRules[index];
        }

        gMacros.plural = function (str, param, key, prop) {
          var n = parseFloat(param);
          if (isNaN(n)) return str;
          if (prop != gTextProp) return str;

          if (!gMacros._pluralRules) {
            gMacros._pluralRules = getPluralRules(gLanguage);
          }

          var index = '[' + gMacros._pluralRules(n) + ']';

          if (n === 0 && key + '[zero]' in gL10nData) {
            str = gL10nData[key + '[zero]'][prop];
          } else if (n == 1 && key + '[one]' in gL10nData) {
            str = gL10nData[key + '[one]'][prop];
          } else if (n == 2 && key + '[two]' in gL10nData) {
            str = gL10nData[key + '[two]'][prop];
          } else if (key + index in gL10nData) {
            str = gL10nData[key + index][prop];
          } else if (key + '[other]' in gL10nData) {
            str = gL10nData[key + '[other]'][prop];
          }

          return str;
        };

        function getL10nData(key, args, fallback) {
          var data = gL10nData[key];

          if (!data) {
            console.warn('#' + key + ' is undefined.');

            if (!fallback) {
              return null;
            }

            data = fallback;
          }

          var rv = {};

          for (var prop in data) {
            var str = data[prop];
            str = substIndexes(str, args, key, prop);
            str = substArguments(str, args, key);
            rv[prop] = str;
          }

          return rv;
        }

        function substIndexes(str, args, key, prop) {
          var reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
          var reMatch = reIndex.exec(str);
          if (!reMatch || !reMatch.length) return str;
          var macroName = reMatch[1];
          var paramName = reMatch[2];
          var param;

          if (args && paramName in args) {
            param = args[paramName];
          } else if (paramName in gL10nData) {
            param = gL10nData[paramName];
          }

          if (macroName in gMacros) {
            var macro = gMacros[macroName];
            str = macro(str, param, key, prop);
          }

          return str;
        }

        function substArguments(str, args, key) {
          var reArgs = /\{\{\s*(.+?)\s*\}\}/g;
          return str.replace(reArgs, function (matched_text, arg) {
            if (args && arg in args) {
              return args[arg];
            }

            if (arg in gL10nData) {
              return gL10nData[arg];
            }

            console.log('argument {{' + arg + '}} for #' + key + ' is undefined.');
            return matched_text;
          });
        }

        function translateElement(element) {
          var l10n = getL10nAttributes(element);
          if (!l10n.id) return;
          var data = getL10nData(l10n.id, l10n.args);

          if (!data) {
            console.warn('#' + l10n.id + ' is undefined.');
            return;
          }

          if (data[gTextProp]) {
            if (getChildElementCount(element) === 0) {
              element[gTextProp] = data[gTextProp];
            } else {
              var children = element.childNodes;
              var found = false;

              for (var i = 0, l = children.length; i < l; i++) {
                if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
                  if (found) {
                    children[i].nodeValue = '';
                  } else {
                    children[i].nodeValue = data[gTextProp];
                    found = true;
                  }
                }
              }

              if (!found) {
                var textNode = document.createTextNode(data[gTextProp]);
                element.insertBefore(textNode, element.firstChild);
              }
            }

            delete data[gTextProp];
          }

          for (var k in data) {
            element[k] = data[k];
          }
        }

        function getChildElementCount(element) {
          if (element.children) {
            return element.children.length;
          }

          if (typeof element.childElementCount !== 'undefined') {
            return element.childElementCount;
          }

          var count = 0;

          for (var i = 0; i < element.childNodes.length; i++) {
            count += element.nodeType === 1 ? 1 : 0;
          }

          return count;
        }

        function translateFragment(element) {
          element = element || document.documentElement;
          var children = getTranslatableChildren(element);
          var elementCount = children.length;

          for (var i = 0; i < elementCount; i++) {
            translateElement(children[i]);
          }

          translateElement(element);
        }

        return {
          get: function get(key, args, fallbackString) {
            var index = key.lastIndexOf('.');
            var prop = gTextProp;

            if (index > 0) {
              prop = key.substring(index + 1);
              key = key.substring(0, index);
            }

            var fallback;

            if (fallbackString) {
              fallback = {};
              fallback[prop] = fallbackString;
            }

            var data = getL10nData(key, args, fallback);

            if (data && prop in data) {
              return data[prop];
            }

            return '{{' + key + '}}';
          },
          getData: function getData() {
            return gL10nData;
          },
          getText: function getText() {
            return gTextData;
          },
          getLanguage: function getLanguage() {
            return gLanguage;
          },
          setLanguage: function setLanguage(lang, callback) {
            loadLocale(lang, function () {
              if (callback) callback();
            });
          },
          getDirection: function getDirection() {
            var rtlList = ['ar', 'he', 'fa', 'ps', 'ur'];
            var shortCode = gLanguage.split('-', 1)[0];
            return rtlList.indexOf(shortCode) >= 0 ? 'rtl' : 'ltr';
          },
          translate: translateFragment,
          getReadyState: function getReadyState() {
            return gReadyState;
          },
          ready: function ready(callback) {
            if (!callback) {
              return;
            } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
              window.setTimeout(function () {
                callback();
              });
            } else if (document.addEventListener) {
              document.addEventListener('localized', function once() {
                document.removeEventListener('localized', once);
                callback();
              });
            }
          }
        };
      }(window, document);
      /***/

    },
    /* 12 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFFindController = exports.FindState = void 0;

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdfjsLib = __w_pdfjs_require__(2);

      var _pdf_find_utils = __w_pdfjs_require__(13);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var FindState = {
        FOUND: 0,
        NOT_FOUND: 1,
        WRAPPED: 2,
        PENDING: 3
      };
      exports.FindState = FindState;
      var FIND_TIMEOUT = 250;
      var MATCH_SCROLL_OFFSET_TOP = -50;
      var MATCH_SCROLL_OFFSET_LEFT = -400;
      var CHARACTERS_TO_NORMALIZE = {
        "\u2018": '\'',
        "\u2019": '\'',
        "\u201A": '\'',
        "\u201B": '\'',
        "\u201C": '"',
        "\u201D": '"',
        "\u201E": '"',
        "\u201F": '"',
        "\xBC": '1/4',
        "\xBD": '1/2',
        "\xBE": '3/4'
      };
      var normalizationRegex = null;

      function normalize(text) {
        if (!normalizationRegex) {
          var replace = Object.keys(CHARACTERS_TO_NORMALIZE).join('');
          normalizationRegex = new RegExp("[".concat(replace, "]"), 'g');
        }

        return text.replace(normalizationRegex, function (ch) {
          return CHARACTERS_TO_NORMALIZE[ch];
        });
      }

      var PDFFindController = /*#__PURE__*/function () {
        function PDFFindController(_ref) {
          var linkService = _ref.linkService,
              _ref$eventBus = _ref.eventBus,
              eventBus = _ref$eventBus === void 0 ? (0, _ui_utils.getGlobalEventBus)() : _ref$eventBus;

          _classCallCheck(this, PDFFindController);

          this._linkService = linkService;
          this._eventBus = eventBus;

          this._reset();

          eventBus.on('findbarclose', this._onFindBarClose.bind(this));
        }

        _createClass(PDFFindController, [{
          key: "setDocument",
          value: function setDocument(pdfDocument) {
            if (this._pdfDocument) {
              this._reset();
            }

            if (!pdfDocument) {
              return;
            }

            this._pdfDocument = pdfDocument;

            this._firstPageCapability.resolve();
          }
        }, {
          key: "executeCommand",
          value: function executeCommand(cmd, state) {
            var _this = this;

            if (!state) {
              return;
            }

            var pdfDocument = this._pdfDocument;

            if (this._state === null || this._shouldDirtyMatch(cmd, state)) {
              this._dirtyMatch = true;
            }

            this._state = state;

            if (cmd !== 'findhighlightallchange') {
              this._updateUIState(FindState.PENDING);
            }

            this._firstPageCapability.promise.then(function () {
              if (!_this._pdfDocument || pdfDocument && _this._pdfDocument !== pdfDocument) {
                return;
              }

              _this._extractText();

              var findbarClosed = !_this._highlightMatches;
              var pendingTimeout = !!_this._findTimeout;

              if (_this._findTimeout) {
                clearTimeout(_this._findTimeout);
                _this._findTimeout = null;
              }

              if (cmd === 'find') {
                _this._findTimeout = setTimeout(function () {
                  _this._nextMatch();

                  _this._findTimeout = null;
                }, FIND_TIMEOUT);
              } else if (_this._dirtyMatch) {
                _this._nextMatch();
              } else if (cmd === 'findagain') {
                _this._nextMatch();

                if (findbarClosed && _this._state.highlightAll) {
                  _this._updateAllPages();
                }
              } else if (cmd === 'findhighlightallchange') {
                if (pendingTimeout) {
                  _this._nextMatch();
                } else {
                  _this._highlightMatches = true;
                }

                _this._updateAllPages();
              } else {
                _this._nextMatch();
              }
            });
          }
        }, {
          key: "scrollMatchIntoView",
          value: function scrollMatchIntoView(_ref2) {
            var _ref2$element = _ref2.element,
                element = _ref2$element === void 0 ? null : _ref2$element,
                _ref2$pageIndex = _ref2.pageIndex,
                pageIndex = _ref2$pageIndex === void 0 ? -1 : _ref2$pageIndex,
                _ref2$matchIndex = _ref2.matchIndex,
                matchIndex = _ref2$matchIndex === void 0 ? -1 : _ref2$matchIndex;

            if (!this._scrollMatches || !element) {
              return;
            } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
              return;
            } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
              return;
            }

            this._scrollMatches = false;
            var spot = {
              top: MATCH_SCROLL_OFFSET_TOP,
              left: MATCH_SCROLL_OFFSET_LEFT
            };
            (0, _ui_utils.scrollIntoView)(element, spot, true);
          }
        }, {
          key: "_reset",
          value: function _reset() {
            this._highlightMatches = false;
            this._scrollMatches = false;
            this._pdfDocument = null;
            this._pageMatches = [];
            this._pageMatchesLength = [];
            this._state = null;
            this._selected = {
              pageIdx: -1,
              matchIdx: -1
            };
            this._offset = {
              pageIdx: null,
              matchIdx: null,
              wrapped: false
            };
            this._extractTextPromises = [];
            this._pageContents = [];
            this._matchesCountTotal = 0;
            this._pagesToSearch = null;
            this._pendingFindMatches = Object.create(null);
            this._resumePageIdx = null;
            this._dirtyMatch = false;
            clearTimeout(this._findTimeout);
            this._findTimeout = null;
            this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
          }
        }, {
          key: "_shouldDirtyMatch",
          value: function _shouldDirtyMatch(cmd, state) {
            if (state.query !== this._state.query) {
              return true;
            }

            switch (cmd) {
              case 'findagain':
                var pageNumber = this._selected.pageIdx + 1;
                var linkService = this._linkService;

                if (pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !linkService.isPageVisible(pageNumber)) {
                  return true;
                }

                return false;

              case 'findhighlightallchange':
                return false;
            }

            return true;
          }
        }, {
          key: "_prepareMatches",
          value: function _prepareMatches(matchesWithLength, matches, matchesLength) {
            function isSubTerm(matchesWithLength, currentIndex) {
              var currentElem = matchesWithLength[currentIndex];
              var nextElem = matchesWithLength[currentIndex + 1];

              if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
                currentElem.skipped = true;
                return true;
              }

              for (var i = currentIndex - 1; i >= 0; i--) {
                var prevElem = matchesWithLength[i];

                if (prevElem.skipped) {
                  continue;
                }

                if (prevElem.match + prevElem.matchLength < currentElem.match) {
                  break;
                }

                if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
                  currentElem.skipped = true;
                  return true;
                }
              }

              return false;
            }

            matchesWithLength.sort(function (a, b) {
              return a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match;
            });

            for (var i = 0, len = matchesWithLength.length; i < len; i++) {
              if (isSubTerm(matchesWithLength, i)) {
                continue;
              }

              matches.push(matchesWithLength[i].match);
              matchesLength.push(matchesWithLength[i].matchLength);
            }
          }
        }, {
          key: "_isEntireWord",
          value: function _isEntireWord(content, startIdx, length) {
            if (startIdx > 0) {
              var first = content.charCodeAt(startIdx);
              var limit = content.charCodeAt(startIdx - 1);

              if ((0, _pdf_find_utils.getCharacterType)(first) === (0, _pdf_find_utils.getCharacterType)(limit)) {
                return false;
              }
            }

            var endIdx = startIdx + length - 1;

            if (endIdx < content.length - 1) {
              var last = content.charCodeAt(endIdx);

              var _limit = content.charCodeAt(endIdx + 1);

              if ((0, _pdf_find_utils.getCharacterType)(last) === (0, _pdf_find_utils.getCharacterType)(_limit)) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "_calculatePhraseMatch",
          value: function _calculatePhraseMatch(query, pageIndex, pageContent, entireWord) {
            var matches = [];
            var queryLen = query.length;
            var matchIdx = -queryLen;

            while (true) {
              matchIdx = pageContent.indexOf(query, matchIdx + queryLen);

              if (matchIdx === -1) {
                break;
              }

              if (entireWord && !this._isEntireWord(pageContent, matchIdx, queryLen)) {
                continue;
              }

              matches.push(matchIdx);
            }

            this._pageMatches[pageIndex] = matches;
          }
        }, {
          key: "_calculateWordMatch",
          value: function _calculateWordMatch(query, pageIndex, pageContent, entireWord) {
            var matchesWithLength = [];
            var queryArray = query.match(/\S+/g);

            for (var i = 0, len = queryArray.length; i < len; i++) {
              var subquery = queryArray[i];
              var subqueryLen = subquery.length;
              var matchIdx = -subqueryLen;

              while (true) {
                matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);

                if (matchIdx === -1) {
                  break;
                }

                if (entireWord && !this._isEntireWord(pageContent, matchIdx, subqueryLen)) {
                  continue;
                }

                matchesWithLength.push({
                  match: matchIdx,
                  matchLength: subqueryLen,
                  skipped: false
                });
              }
            }

            this._pageMatchesLength[pageIndex] = [];
            this._pageMatches[pageIndex] = [];

            this._prepareMatches(matchesWithLength, this._pageMatches[pageIndex], this._pageMatchesLength[pageIndex]);
          }
        }, {
          key: "_calculateMatch",
          value: function _calculateMatch(pageIndex) {
            var pageContent = this._pageContents[pageIndex];
            var query = this._query;
            var _this$_state = this._state,
                caseSensitive = _this$_state.caseSensitive,
                entireWord = _this$_state.entireWord,
                phraseSearch = _this$_state.phraseSearch;

            if (query.length === 0) {
              return;
            }

            if (!caseSensitive) {
              pageContent = pageContent.toLowerCase();
              query = query.toLowerCase();
            }

            if (phraseSearch) {
              this._calculatePhraseMatch(query, pageIndex, pageContent, entireWord);
            } else {
              this._calculateWordMatch(query, pageIndex, pageContent, entireWord);
            }

            if (this._state.highlightAll) {
              this._updatePage(pageIndex);
            }

            if (this._resumePageIdx === pageIndex) {
              this._resumePageIdx = null;

              this._nextPageMatch();
            }

            var pageMatchesCount = this._pageMatches[pageIndex].length;

            if (pageMatchesCount > 0) {
              this._matchesCountTotal += pageMatchesCount;

              this._updateUIResultsCount();
            }
          }
        }, {
          key: "_extractText",
          value: function _extractText() {
            var _this2 = this;

            if (this._extractTextPromises.length > 0) {
              return;
            }

            var promise = Promise.resolve();

            var _loop = function _loop(i, ii) {
              var extractTextCapability = (0, _pdfjsLib.createPromiseCapability)();
              _this2._extractTextPromises[i] = extractTextCapability.promise;
              promise = promise.then(function () {
                return _this2._pdfDocument.getPage(i + 1).then(function (pdfPage) {
                  return pdfPage.getTextContent({
                    normalizeWhitespace: true
                  });
                }).then(function (textContent) {
                  var textItems = textContent.items;
                  var strBuf = [];

                  for (var j = 0, jj = textItems.length; j < jj; j++) {
                    strBuf.push(textItems[j].str);
                  }

                  _this2._pageContents[i] = normalize(strBuf.join(''));
                  extractTextCapability.resolve(i);
                }, function (reason) {
                  console.error("Unable to get text content for page ".concat(i + 1), reason);
                  _this2._pageContents[i] = '';
                  extractTextCapability.resolve(i);
                });
              });
            };

            for (var i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
              _loop(i, ii);
            }
          }
        }, {
          key: "_updatePage",
          value: function _updatePage(index) {
            if (this._scrollMatches && this._selected.pageIdx === index) {
              this._linkService.page = index + 1;
            }

            this._eventBus.dispatch('updatetextlayermatches', {
              source: this,
              pageIndex: index
            });
          }
        }, {
          key: "_updateAllPages",
          value: function _updateAllPages() {
            this._eventBus.dispatch('updatetextlayermatches', {
              source: this,
              pageIndex: -1
            });
          }
        }, {
          key: "_nextMatch",
          value: function _nextMatch() {
            var _this3 = this;

            var previous = this._state.findPrevious;
            var currentPageIndex = this._linkService.page - 1;
            var numPages = this._linkService.pagesCount;
            this._highlightMatches = true;

            if (this._dirtyMatch) {
              this._dirtyMatch = false;
              this._selected.pageIdx = this._selected.matchIdx = -1;
              this._offset.pageIdx = currentPageIndex;
              this._offset.matchIdx = null;
              this._offset.wrapped = false;
              this._resumePageIdx = null;
              this._pageMatches.length = 0;
              this._pageMatchesLength.length = 0;
              this._matchesCountTotal = 0;

              this._updateAllPages();

              for (var i = 0; i < numPages; i++) {
                if (this._pendingFindMatches[i] === true) {
                  continue;
                }

                this._pendingFindMatches[i] = true;

                this._extractTextPromises[i].then(function (pageIdx) {
                  delete _this3._pendingFindMatches[pageIdx];

                  _this3._calculateMatch(pageIdx);
                });
              }
            }

            if (this._query === '') {
              this._updateUIState(FindState.FOUND);

              return;
            }

            if (this._resumePageIdx) {
              return;
            }

            var offset = this._offset;
            this._pagesToSearch = numPages;

            if (offset.matchIdx !== null) {
              var numPageMatches = this._pageMatches[offset.pageIdx].length;

              if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
                offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;

                this._updateMatch(true);

                return;
              }

              this._advanceOffsetPage(previous);
            }

            this._nextPageMatch();
          }
        }, {
          key: "_matchesReady",
          value: function _matchesReady(matches) {
            var offset = this._offset;
            var numMatches = matches.length;
            var previous = this._state.findPrevious;

            if (numMatches) {
              offset.matchIdx = previous ? numMatches - 1 : 0;

              this._updateMatch(true);

              return true;
            }

            this._advanceOffsetPage(previous);

            if (offset.wrapped) {
              offset.matchIdx = null;

              if (this._pagesToSearch < 0) {
                this._updateMatch(false);

                return true;
              }
            }

            return false;
          }
        }, {
          key: "_nextPageMatch",
          value: function _nextPageMatch() {
            if (this._resumePageIdx !== null) {
              console.error('There can only be one pending page.');
            }

            var matches = null;

            do {
              var pageIdx = this._offset.pageIdx;
              matches = this._pageMatches[pageIdx];

              if (!matches) {
                this._resumePageIdx = pageIdx;
                break;
              }
            } while (!this._matchesReady(matches));
          }
        }, {
          key: "_advanceOffsetPage",
          value: function _advanceOffsetPage(previous) {
            var offset = this._offset;
            var numPages = this._linkService.pagesCount;
            offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
            offset.matchIdx = null;
            this._pagesToSearch--;

            if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
              offset.pageIdx = previous ? numPages - 1 : 0;
              offset.wrapped = true;
            }
          }
        }, {
          key: "_updateMatch",
          value: function _updateMatch() {
            var found = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var state = FindState.NOT_FOUND;
            var wrapped = this._offset.wrapped;
            this._offset.wrapped = false;

            if (found) {
              var previousPage = this._selected.pageIdx;
              this._selected.pageIdx = this._offset.pageIdx;
              this._selected.matchIdx = this._offset.matchIdx;
              state = wrapped ? FindState.WRAPPED : FindState.FOUND;

              if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
                this._updatePage(previousPage);
              }
            }

            this._updateUIState(state, this._state.findPrevious);

            if (this._selected.pageIdx !== -1) {
              this._scrollMatches = true;

              this._updatePage(this._selected.pageIdx);
            }
          }
        }, {
          key: "_onFindBarClose",
          value: function _onFindBarClose(evt) {
            var _this4 = this;

            var pdfDocument = this._pdfDocument;

            this._firstPageCapability.promise.then(function () {
              if (!_this4._pdfDocument || pdfDocument && _this4._pdfDocument !== pdfDocument) {
                return;
              }

              if (_this4._findTimeout) {
                clearTimeout(_this4._findTimeout);
                _this4._findTimeout = null;
              }

              if (_this4._resumePageIdx) {
                _this4._resumePageIdx = null;
                _this4._dirtyMatch = true;
              }

              _this4._updateUIState(FindState.FOUND);

              _this4._highlightMatches = false;

              _this4._updateAllPages();
            });
          }
        }, {
          key: "_requestMatchesCount",
          value: function _requestMatchesCount() {
            var _this$_selected = this._selected,
                pageIdx = _this$_selected.pageIdx,
                matchIdx = _this$_selected.matchIdx;
            var current = 0,
                total = this._matchesCountTotal;

            if (matchIdx !== -1) {
              for (var i = 0; i < pageIdx; i++) {
                current += this._pageMatches[i] && this._pageMatches[i].length || 0;
              }

              current += matchIdx + 1;
            }

            if (current < 1 || current > total) {
              current = total = 0;
            }

            return {
              current: current,
              total: total
            };
          }
        }, {
          key: "_updateUIResultsCount",
          value: function _updateUIResultsCount() {
            this._eventBus.dispatch('updatefindmatchescount', {
              source: this,
              matchesCount: this._requestMatchesCount()
            });
          }
        }, {
          key: "_updateUIState",
          value: function _updateUIState(state, previous) {
            this._eventBus.dispatch('updatefindcontrolstate', {
              source: this,
              state: state,
              previous: previous,
              matchesCount: this._requestMatchesCount()
            });
          }
        }, {
          key: "highlightMatches",
          get: function get() {
            return this._highlightMatches;
          }
        }, {
          key: "pageMatches",
          get: function get() {
            return this._pageMatches;
          }
        }, {
          key: "pageMatchesLength",
          get: function get() {
            return this._pageMatchesLength;
          }
        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "_query",
          get: function get() {
            if (this._state.query !== this._rawQuery) {
              this._rawQuery = this._state.query;
              this._normalizedQuery = normalize(this._state.query);
            }

            return this._normalizedQuery;
          }
        }]);

        return PDFFindController;
      }();

      exports.PDFFindController = PDFFindController;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getCharacterType = getCharacterType;
      exports.CharacterType = void 0;
      var CharacterType = {
        SPACE: 0,
        ALPHA_LETTER: 1,
        PUNCT: 2,
        HAN_LETTER: 3,
        KATAKANA_LETTER: 4,
        HIRAGANA_LETTER: 5,
        HALFWIDTH_KATAKANA_LETTER: 6,
        THAI_LETTER: 7
      };
      exports.CharacterType = CharacterType;

      function isAlphabeticalScript(charCode) {
        return charCode < 0x2E80;
      }

      function isAscii(charCode) {
        return (charCode & 0xFF80) === 0;
      }

      function isAsciiAlpha(charCode) {
        return charCode >= 0x61 && charCode <= 0x7A || charCode >= 0x41 && charCode <= 0x5A;
      }

      function isAsciiDigit(charCode) {
        return charCode >= 0x30 && charCode <= 0x39;
      }

      function isAsciiSpace(charCode) {
        return charCode === 0x20 || charCode === 0x09 || charCode === 0x0D || charCode === 0x0A;
      }

      function isHan(charCode) {
        return charCode >= 0x3400 && charCode <= 0x9FFF || charCode >= 0xF900 && charCode <= 0xFAFF;
      }

      function isKatakana(charCode) {
        return charCode >= 0x30A0 && charCode <= 0x30FF;
      }

      function isHiragana(charCode) {
        return charCode >= 0x3040 && charCode <= 0x309F;
      }

      function isHalfwidthKatakana(charCode) {
        return charCode >= 0xFF60 && charCode <= 0xFF9F;
      }

      function isThai(charCode) {
        return (charCode & 0xFF80) === 0x0E00;
      }

      function getCharacterType(charCode) {
        if (isAlphabeticalScript(charCode)) {
          if (isAscii(charCode)) {
            if (isAsciiSpace(charCode)) {
              return CharacterType.SPACE;
            } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 0x5F) {
              return CharacterType.ALPHA_LETTER;
            }

            return CharacterType.PUNCT;
          } else if (isThai(charCode)) {
            return CharacterType.THAI_LETTER;
          } else if (charCode === 0xA0) {
            return CharacterType.SPACE;
          }

          return CharacterType.ALPHA_LETTER;
        }

        if (isHan(charCode)) {
          return CharacterType.HAN_LETTER;
        } else if (isKatakana(charCode)) {
          return CharacterType.KATAKANA_LETTER;
        } else if (isHiragana(charCode)) {
          return CharacterType.HIRAGANA_LETTER;
        } else if (isHalfwidthKatakana(charCode)) {
          return CharacterType.HALFWIDTH_KATAKANA_LETTER;
        }

        return CharacterType.ALPHA_LETTER;
      }
      /***/

    },
    /* 14 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isDestHashesEqual = isDestHashesEqual;
      exports.isDestArraysEqual = isDestArraysEqual;
      exports.PDFHistory = void 0;

      var _ui_utils = __w_pdfjs_require__(3);

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
          return;
        }

        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var HASH_CHANGE_TIMEOUT = 1000;
      var POSITION_UPDATED_THRESHOLD = 50;
      var UPDATE_VIEWAREA_TIMEOUT = 1000;

      function getCurrentHash() {
        return document.location.hash;
      }

      function parseCurrentHash(linkService) {
        var hash = unescape(getCurrentHash()).substring(1);
        var params = (0, _ui_utils.parseQueryString)(hash);
        var page = params.page | 0;

        if (!(Number.isInteger(page) && page > 0 && page <= linkService.pagesCount)) {
          page = null;
        }

        return {
          hash: hash,
          page: page,
          rotation: linkService.rotation
        };
      }

      var PDFHistory = /*#__PURE__*/function () {
        function PDFHistory(_ref) {
          var _this = this;

          var linkService = _ref.linkService,
              eventBus = _ref.eventBus;

          _classCallCheck(this, PDFHistory);

          this.linkService = linkService;
          this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
          this.initialized = false;
          this.initialBookmark = null;
          this.initialRotation = null;
          this._boundEvents = Object.create(null);
          this._isViewerInPresentationMode = false;
          this._isPagesLoaded = false;
          this.eventBus.on('presentationmodechanged', function (evt) {
            _this._isViewerInPresentationMode = evt.active || evt.switchInProgress;
          });
          this.eventBus.on('pagesloaded', function (evt) {
            _this._isPagesLoaded = !!evt.pagesCount;
          });
        }

        _createClass(PDFHistory, [{
          key: "initialize",
          value: function initialize(_ref2) {
            var fingerprint = _ref2.fingerprint,
                _ref2$resetHistory = _ref2.resetHistory,
                resetHistory = _ref2$resetHistory === void 0 ? false : _ref2$resetHistory,
                _ref2$updateUrl = _ref2.updateUrl,
                updateUrl = _ref2$updateUrl === void 0 ? false : _ref2$updateUrl;

            if (!fingerprint || typeof fingerprint !== 'string') {
              console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
              return;
            }

            var reInitialized = this.initialized && this.fingerprint !== fingerprint;
            this.fingerprint = fingerprint;
            this._updateUrl = updateUrl === true;

            if (!this.initialized) {
              this._bindEvents();
            }

            var state = window.history.state;
            this.initialized = true;
            this.initialBookmark = null;
            this.initialRotation = null;
            this._popStateInProgress = false;
            this._blockHashChange = 0;
            this._currentHash = getCurrentHash();
            this._numPositionUpdates = 0;
            this._uid = this._maxUid = 0;
            this._destination = null;
            this._position = null;

            if (!this._isValidState(state, true) || resetHistory) {
              var _parseCurrentHash = parseCurrentHash(this.linkService),
                  hash = _parseCurrentHash.hash,
                  page = _parseCurrentHash.page,
                  rotation = _parseCurrentHash.rotation;

              if (!hash || reInitialized || resetHistory) {
                this._pushOrReplaceState(null, true);

                return;
              }

              this._pushOrReplaceState({
                hash: hash,
                page: page,
                rotation: rotation
              }, true);

              return;
            }

            var destination = state.destination;

            this._updateInternalState(destination, state.uid, true);

            if (this._uid > this._maxUid) {
              this._maxUid = this._uid;
            }

            if (destination.rotation !== undefined) {
              this.initialRotation = destination.rotation;
            }

            if (destination.dest) {
              this.initialBookmark = JSON.stringify(destination.dest);
              this._destination.page = null;
            } else if (destination.hash) {
              this.initialBookmark = destination.hash;
            } else if (destination.page) {
              this.initialBookmark = "page=".concat(destination.page);
            }
          }
        }, {
          key: "push",
          value: function push(_ref3) {
            var _this2 = this;

            var _ref3$namedDest = _ref3.namedDest,
                namedDest = _ref3$namedDest === void 0 ? null : _ref3$namedDest,
                explicitDest = _ref3.explicitDest,
                pageNumber = _ref3.pageNumber;

            if (!this.initialized) {
              return;
            }

            if (namedDest && typeof namedDest !== 'string') {
              console.error('PDFHistory.push: ' + "\"".concat(namedDest, "\" is not a valid namedDest parameter."));
              return;
            } else if (!Array.isArray(explicitDest)) {
              console.error('PDFHistory.push: ' + "\"".concat(explicitDest, "\" is not a valid explicitDest parameter."));
              return;
            } else if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.linkService.pagesCount)) {
              if (pageNumber !== null || this._destination) {
                console.error('PDFHistory.push: ' + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
                return;
              }
            }

            var hash = namedDest || JSON.stringify(explicitDest);

            if (!hash) {
              return;
            }

            var forceReplace = false;

            if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
              if (this._destination.page) {
                return;
              }

              forceReplace = true;
            }

            if (this._popStateInProgress && !forceReplace) {
              return;
            }

            this._pushOrReplaceState({
              dest: explicitDest,
              hash: hash,
              page: pageNumber,
              rotation: this.linkService.rotation
            }, forceReplace);

            if (!this._popStateInProgress) {
              this._popStateInProgress = true;
              Promise.resolve().then(function () {
                _this2._popStateInProgress = false;
              });
            }
          }
        }, {
          key: "pushCurrentPosition",
          value: function pushCurrentPosition() {
            if (!this.initialized || this._popStateInProgress) {
              return;
            }

            this._tryPushCurrentPosition();
          }
        }, {
          key: "back",
          value: function back() {
            if (!this.initialized || this._popStateInProgress) {
              return;
            }

            var state = window.history.state;

            if (this._isValidState(state) && state.uid > 0) {
              window.history.back();
            }
          }
        }, {
          key: "forward",
          value: function forward() {
            if (!this.initialized || this._popStateInProgress) {
              return;
            }

            var state = window.history.state;

            if (this._isValidState(state) && state.uid < this._maxUid) {
              window.history.forward();
            }
          }
        }, {
          key: "_pushOrReplaceState",
          value: function _pushOrReplaceState(destination) {
            var forceReplace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var shouldReplace = forceReplace || !this._destination;
            var newState = {
              fingerprint: this.fingerprint,
              uid: shouldReplace ? this._uid : this._uid + 1,
              destination: destination
            };

            this._updateInternalState(destination, newState.uid);

            var newUrl;

            if (this._updateUrl && destination && destination.hash) {
              var baseUrl = document.location.href.split('#')[0];

              if (!baseUrl.startsWith('file://')) {
                newUrl = "".concat(baseUrl, "#").concat(destination.hash);
              }
            }

            if (shouldReplace) {
              if (newUrl) {
                window.history.replaceState(newState, '', newUrl);
              } else {
                window.history.replaceState(newState, '');
              }
            } else {
              this._maxUid = this._uid;

              if (newUrl) {
                window.history.pushState(newState, '', newUrl);
              } else {
                window.history.pushState(newState, '');
              }
            }
          }
        }, {
          key: "_tryPushCurrentPosition",
          value: function _tryPushCurrentPosition() {
            var temporary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this._position) {
              return;
            }

            var position = this._position;

            if (temporary) {
              position = Object.assign(Object.create(null), this._position);
              position.temporary = true;
            }

            if (!this._destination) {
              this._pushOrReplaceState(position);

              return;
            }

            if (this._destination.temporary) {
              this._pushOrReplaceState(position, true);

              return;
            }

            if (this._destination.hash === position.hash) {
              return;
            }

            if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
              return;
            }

            var forceReplace = false;

            if (this._destination.page >= position.first && this._destination.page <= position.page) {
              if (this._destination.dest || !this._destination.first) {
                return;
              }

              forceReplace = true;
            }

            this._pushOrReplaceState(position, forceReplace);
          }
        }, {
          key: "_isValidState",
          value: function _isValidState(state) {
            var checkReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!state) {
              return false;
            }

            if (state.fingerprint !== this.fingerprint) {
              if (checkReload) {
                if (typeof state.fingerprint !== 'string' || state.fingerprint.length !== this.fingerprint.length) {
                  return false;
                }

                var _performance$getEntri = performance.getEntriesByType('navigation'),
                    _performance$getEntri2 = _slicedToArray(_performance$getEntri, 1),
                    perfEntry = _performance$getEntri2[0];

                if (!perfEntry || perfEntry.type !== 'reload') {
                  return false;
                }
              } else {
                return false;
              }
            }

            if (!Number.isInteger(state.uid) || state.uid < 0) {
              return false;
            }

            if (state.destination === null || _typeof(state.destination) !== 'object') {
              return false;
            }

            return true;
          }
        }, {
          key: "_updateInternalState",
          value: function _updateInternalState(destination, uid) {
            var removeTemporary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (this._updateViewareaTimeout) {
              clearTimeout(this._updateViewareaTimeout);
              this._updateViewareaTimeout = null;
            }

            if (removeTemporary && destination && destination.temporary) {
              delete destination.temporary;
            }

            this._destination = destination;
            this._uid = uid;
            this._numPositionUpdates = 0;
          }
        }, {
          key: "_updateViewarea",
          value: function _updateViewarea(_ref4) {
            var _this3 = this;

            var location = _ref4.location;

            if (this._updateViewareaTimeout) {
              clearTimeout(this._updateViewareaTimeout);
              this._updateViewareaTimeout = null;
            }

            this._position = {
              hash: this._isViewerInPresentationMode ? "page=".concat(location.pageNumber) : location.pdfOpenParams.substring(1),
              page: this.linkService.page,
              first: location.pageNumber,
              rotation: location.rotation
            };

            if (this._popStateInProgress) {
              return;
            }

            if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
              this._numPositionUpdates++;
            }

            if (UPDATE_VIEWAREA_TIMEOUT > 0) {
              this._updateViewareaTimeout = setTimeout(function () {
                if (!_this3._popStateInProgress) {
                  _this3._tryPushCurrentPosition(true);
                }

                _this3._updateViewareaTimeout = null;
              }, UPDATE_VIEWAREA_TIMEOUT);
            }
          }
        }, {
          key: "_popState",
          value: function _popState(_ref5) {
            var _this4 = this;

            var state = _ref5.state;
            var newHash = getCurrentHash(),
                hashChanged = this._currentHash !== newHash;
            this._currentHash = newHash;

            if (!state || false) {
              this._uid++;

              var _parseCurrentHash2 = parseCurrentHash(this.linkService),
                  hash = _parseCurrentHash2.hash,
                  page = _parseCurrentHash2.page,
                  rotation = _parseCurrentHash2.rotation;

              this._pushOrReplaceState({
                hash: hash,
                page: page,
                rotation: rotation
              }, true);

              return;
            }

            if (!this._isValidState(state)) {
              return;
            }

            this._popStateInProgress = true;

            if (hashChanged) {
              this._blockHashChange++;
              (0, _ui_utils.waitOnEventOrTimeout)({
                target: window,
                name: 'hashchange',
                delay: HASH_CHANGE_TIMEOUT
              }).then(function () {
                _this4._blockHashChange--;
              });
            }

            var destination = state.destination;

            this._updateInternalState(destination, state.uid, true);

            if (this._uid > this._maxUid) {
              this._maxUid = this._uid;
            }

            if ((0, _ui_utils.isValidRotation)(destination.rotation)) {
              this.linkService.rotation = destination.rotation;
            }

            if (destination.dest) {
              this.linkService.navigateTo(destination.dest);
            } else if (destination.hash) {
              this.linkService.setHash(destination.hash);
            } else if (destination.page) {
              this.linkService.page = destination.page;
            }

            Promise.resolve().then(function () {
              _this4._popStateInProgress = false;
            });
          }
        }, {
          key: "_bindEvents",
          value: function _bindEvents() {
            var _this5 = this;

            var _boundEvents = this._boundEvents,
                eventBus = this.eventBus;
            _boundEvents.updateViewarea = this._updateViewarea.bind(this);
            _boundEvents.popState = this._popState.bind(this);

            _boundEvents.pageHide = function (evt) {
              if (!_this5._destination || _this5._destination.temporary) {
                _this5._tryPushCurrentPosition();
              }
            };

            eventBus.on('updateviewarea', _boundEvents.updateViewarea);
            window.addEventListener('popstate', _boundEvents.popState);
            window.addEventListener('pagehide', _boundEvents.pageHide);
          }
        }, {
          key: "popStateInProgress",
          get: function get() {
            return this.initialized && (this._popStateInProgress || this._blockHashChange > 0);
          }
        }]);

        return PDFHistory;
      }();

      exports.PDFHistory = PDFHistory;

      function isDestHashesEqual(destHash, pushHash) {
        if (typeof destHash !== 'string' || typeof pushHash !== 'string') {
          return false;
        }

        if (destHash === pushHash) {
          return true;
        }

        var _parseQueryString = (0, _ui_utils.parseQueryString)(destHash),
            nameddest = _parseQueryString.nameddest;

        if (nameddest === pushHash) {
          return true;
        }

        return false;
      }

      function isDestArraysEqual(firstDest, secondDest) {
        function isEntryEqual(first, second) {
          if (_typeof(first) !== _typeof(second)) {
            return false;
          }

          if (Array.isArray(first) || Array.isArray(second)) {
            return false;
          }

          if (first !== null && _typeof(first) === 'object' && second !== null) {
            if (Object.keys(first).length !== Object.keys(second).length) {
              return false;
            }

            for (var key in first) {
              if (!isEntryEqual(first[key], second[key])) {
                return false;
              }
            }

            return true;
          }

          return first === second || Number.isNaN(first) && Number.isNaN(second);
        }

        if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
          return false;
        }

        if (firstDest.length !== secondDest.length) {
          return false;
        }

        for (var i = 0, ii = firstDest.length; i < ii; i++) {
          if (!isEntryEqual(firstDest[i], secondDest[i])) {
            return false;
          }
        }

        return true;
      }
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFPageView = void 0;

      var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdfjsLib = __w_pdfjs_require__(2);

      var _pdf_rendering_queue = __w_pdfjs_require__(16);

      var _viewer_compatibility = __w_pdfjs_require__(17);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var MAX_CANVAS_PIXELS = _viewer_compatibility.viewerCompatibilityParams.maxCanvasPixels || 16777216;

      var PDFPageView = /*#__PURE__*/function () {
        function PDFPageView(options) {
          _classCallCheck(this, PDFPageView);

          var container = options.container;
          var defaultViewport = options.defaultViewport;
          this.id = options.id;
          this.renderingId = 'page' + this.id;
          this.pdfPage = null;
          this.pageLabel = null;
          this.rotation = 0;
          this.scale = options.scale || _ui_utils.DEFAULT_SCALE;
          this.viewport = defaultViewport;
          this.pdfPageRotate = defaultViewport.rotation;
          this.hasRestrictedScaling = false;
          this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
          this.imageResourcesPath = options.imageResourcesPath || '';
          this.renderInteractiveForms = options.renderInteractiveForms || false;
          this.useOnlyCssZoom = options.useOnlyCssZoom || false;
          this.maxCanvasPixels = options.maxCanvasPixels || MAX_CANVAS_PIXELS;
          this.eventBus = options.eventBus || (0, _ui_utils.getGlobalEventBus)();
          this.renderingQueue = options.renderingQueue;
          this.textLayerFactory = options.textLayerFactory;
          this.annotationLayerFactory = options.annotationLayerFactory;
          this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
          this.enableWebGL = options.enableWebGL || false;
          this.l10n = options.l10n || _ui_utils.NullL10n;
          this.paintTask = null;
          this.paintedViewportMap = new WeakMap();
          this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
          this.resume = null;
          this.error = null;
          this.annotationLayer = null;
          this.textLayer = null;
          this.zoomLayer = null;
          var div = document.createElement('div');
          div.className = 'page';
          div.style.width = Math.floor(this.viewport.width) + 'px';
          div.style.height = Math.floor(this.viewport.height) + 'px';
          div.setAttribute('data-page-number', this.id);
          this.div = div;
          container.appendChild(div);
        }

        _createClass(PDFPageView, [{
          key: "setPdfPage",
          value: function setPdfPage(pdfPage) {
            this.pdfPage = pdfPage;
            this.pdfPageRotate = pdfPage.rotate;
            var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
            this.viewport = pdfPage.getViewport({
              scale: this.scale * _ui_utils.CSS_UNITS,
              rotation: totalRotation
            });
            this.stats = pdfPage.stats;
            this.reset();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.reset();

            if (this.pdfPage) {
              this.pdfPage.cleanup();
            }
          }
        }, {
          key: "_resetZoomLayer",
          value: function _resetZoomLayer() {
            var removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this.zoomLayer) {
              return;
            }

            var zoomLayerCanvas = this.zoomLayer.firstChild;
            this.paintedViewportMap["delete"](zoomLayerCanvas);
            zoomLayerCanvas.width = 0;
            zoomLayerCanvas.height = 0;

            if (removeFromDOM) {
              this.zoomLayer.remove();
            }

            this.zoomLayer = null;
          }
        }, {
          key: "reset",
          value: function reset() {
            var keepZoomLayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var keepAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.cancelRendering(keepAnnotations);
            this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
            var div = this.div;
            div.style.width = Math.floor(this.viewport.width) + 'px';
            div.style.height = Math.floor(this.viewport.height) + 'px';
            var childNodes = div.childNodes;
            var currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null;
            var currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null;

            for (var i = childNodes.length - 1; i >= 0; i--) {
              var node = childNodes[i];

              if (currentZoomLayerNode === node || currentAnnotationNode === node) {
                continue;
              }

              div.removeChild(node);
            }

            div.removeAttribute('data-loaded');

            if (currentAnnotationNode) {
              this.annotationLayer.hide();
            } else if (this.annotationLayer) {
              this.annotationLayer.cancel();
              this.annotationLayer = null;
            }

            if (!currentZoomLayerNode) {
              if (this.canvas) {
                this.paintedViewportMap["delete"](this.canvas);
                this.canvas.width = 0;
                this.canvas.height = 0;
                delete this.canvas;
              }

              this._resetZoomLayer();
            }

            if (this.svg) {
              this.paintedViewportMap["delete"](this.svg);
              delete this.svg;
            }

            this.loadingIconDiv = document.createElement('div');
            this.loadingIconDiv.className = 'loadingIcon';
            div.appendChild(this.loadingIconDiv);
          }
        }, {
          key: "update",
          value: function update(scale, rotation) {
            this.scale = scale || this.scale;

            if (typeof rotation !== 'undefined') {
              this.rotation = rotation;
            }

            var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
            this.viewport = this.viewport.clone({
              scale: this.scale * _ui_utils.CSS_UNITS,
              rotation: totalRotation
            });

            if (this.svg) {
              this.cssTransform(this.svg, true);
              this.eventBus.dispatch('pagerendered', {
                source: this,
                pageNumber: this.id,
                cssTransform: true,
                timestamp: performance.now()
              });
              return;
            }

            var isScalingRestricted = false;

            if (this.canvas && this.maxCanvasPixels > 0) {
              var outputScale = this.outputScale;

              if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > this.maxCanvasPixels) {
                isScalingRestricted = true;
              }
            }

            if (this.canvas) {
              if (this.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
                this.cssTransform(this.canvas, true);
                this.eventBus.dispatch('pagerendered', {
                  source: this,
                  pageNumber: this.id,
                  cssTransform: true,
                  timestamp: performance.now()
                });
                return;
              }

              if (!this.zoomLayer && !this.canvas.hasAttribute('hidden')) {
                this.zoomLayer = this.canvas.parentNode;
                this.zoomLayer.style.position = 'absolute';
              }
            }

            if (this.zoomLayer) {
              this.cssTransform(this.zoomLayer.firstChild);
            }

            this.reset(true, true);
          }
        }, {
          key: "cancelRendering",
          value: function cancelRendering() {
            var keepAnnotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.paintTask) {
              this.paintTask.cancel();
              this.paintTask = null;
            }

            this.resume = null;

            if (this.textLayer) {
              this.textLayer.cancel();
              this.textLayer = null;
            }

            if (!keepAnnotations && this.annotationLayer) {
              this.annotationLayer.cancel();
              this.annotationLayer = null;
            }
          }
        }, {
          key: "cssTransform",
          value: function cssTransform(target) {
            var redrawAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var width = this.viewport.width;
            var height = this.viewport.height;
            var div = this.div;
            target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + 'px';
            target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + 'px';
            var relativeRotation = this.viewport.rotation - this.paintedViewportMap.get(target).rotation;
            var absRotation = Math.abs(relativeRotation);
            var scaleX = 1,
                scaleY = 1;

            if (absRotation === 90 || absRotation === 270) {
              scaleX = height / width;
              scaleY = width / height;
            }

            var cssTransform = 'rotate(' + relativeRotation + 'deg) ' + 'scale(' + scaleX + ',' + scaleY + ')';
            target.style.transform = cssTransform;

            if (this.textLayer) {
              var textLayerViewport = this.textLayer.viewport;
              var textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation;
              var textAbsRotation = Math.abs(textRelativeRotation);
              var scale = width / textLayerViewport.width;

              if (textAbsRotation === 90 || textAbsRotation === 270) {
                scale = width / textLayerViewport.height;
              }

              var textLayerDiv = this.textLayer.textLayerDiv;
              var transX, transY;

              switch (textAbsRotation) {
                case 0:
                  transX = transY = 0;
                  break;

                case 90:
                  transX = 0;
                  transY = '-' + textLayerDiv.style.height;
                  break;

                case 180:
                  transX = '-' + textLayerDiv.style.width;
                  transY = '-' + textLayerDiv.style.height;
                  break;

                case 270:
                  transX = '-' + textLayerDiv.style.width;
                  transY = 0;
                  break;

                default:
                  console.error('Bad rotation value.');
                  break;
              }

              textLayerDiv.style.transform = 'rotate(' + textAbsRotation + 'deg) ' + 'scale(' + scale + ', ' + scale + ') ' + 'translate(' + transX + ', ' + transY + ')';
              textLayerDiv.style.transformOrigin = '0% 0%';
            }

            if (redrawAnnotations && this.annotationLayer) {
              this.annotationLayer.render(this.viewport, 'display');
            }
          }
        }, {
          key: "getPagePoint",
          value: function getPagePoint(x, y) {
            return this.viewport.convertToPdfPoint(x, y);
          }
        }, {
          key: "draw",
          value: function draw() {
            var _this = this;

            if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
              console.error('Must be in new state before drawing');
              this.reset();
            }

            if (!this.pdfPage) {
              this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
              return Promise.reject(new Error('Page is not loaded'));
            }

            this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
            var pdfPage = this.pdfPage;
            var div = this.div;
            var canvasWrapper = document.createElement('div');
            canvasWrapper.style.width = div.style.width;
            canvasWrapper.style.height = div.style.height;
            canvasWrapper.classList.add('canvasWrapper');

            if (this.annotationLayer && this.annotationLayer.div) {
              div.insertBefore(canvasWrapper, this.annotationLayer.div);
            } else {
              div.appendChild(canvasWrapper);
            }

            var textLayer = null;

            if (this.textLayerMode !== _ui_utils.TextLayerMode.DISABLE && this.textLayerFactory) {
              var textLayerDiv = document.createElement('div');
              textLayerDiv.className = 'textLayer';
              textLayerDiv.style.width = canvasWrapper.style.width;
              textLayerDiv.style.height = canvasWrapper.style.height;

              if (this.annotationLayer && this.annotationLayer.div) {
                div.insertBefore(textLayerDiv, this.annotationLayer.div);
              } else {
                div.appendChild(textLayerDiv);
              }

              textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.textLayerMode === _ui_utils.TextLayerMode.ENABLE_ENHANCE);
            }

            this.textLayer = textLayer;
            var renderContinueCallback = null;

            if (this.renderingQueue) {
              renderContinueCallback = function renderContinueCallback(cont) {
                if (!_this.renderingQueue.isHighestPriority(_this)) {
                  _this.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;

                  _this.resume = function () {
                    _this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
                    cont();
                  };

                  return;
                }

                cont();
              };
            }

            var finishPaintTask = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(error) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (paintTask === _this.paintTask) {
                          _this.paintTask = null;
                        }

                        if (!(error instanceof _pdfjsLib.RenderingCancelledException)) {
                          _context.next = 4;
                          break;
                        }

                        _this.error = null;
                        return _context.abrupt("return");

                      case 4:
                        _this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

                        if (_this.loadingIconDiv) {
                          div.removeChild(_this.loadingIconDiv);
                          delete _this.loadingIconDiv;
                        }

                        _this._resetZoomLayer(true);

                        _this.error = error;
                        _this.stats = pdfPage.stats;

                        _this.eventBus.dispatch('pagerendered', {
                          source: _this,
                          pageNumber: _this.id,
                          cssTransform: false,
                          timestamp: performance.now()
                        });

                        if (!error) {
                          _context.next = 12;
                          break;
                        }

                        throw error;

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function finishPaintTask(_x) {
                return _ref.apply(this, arguments);
              };
            }();

            var paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper);
            paintTask.onRenderContinue = renderContinueCallback;
            this.paintTask = paintTask;
            var resultPromise = paintTask.promise.then(function () {
              return finishPaintTask(null).then(function () {
                if (textLayer) {
                  var readableStream = pdfPage.streamTextContent({
                    normalizeWhitespace: true
                  });
                  textLayer.setTextContentStream(readableStream);
                  textLayer.render();
                }
              });
            }, function (reason) {
              return finishPaintTask(reason);
            });

            if (this.annotationLayerFactory) {
              if (!this.annotationLayer) {
                this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, pdfPage, this.imageResourcesPath, this.renderInteractiveForms, this.l10n);
              }

              this.annotationLayer.render(this.viewport, 'display');
            }

            div.setAttribute('data-loaded', true);
            this.eventBus.dispatch('pagerender', {
              source: this,
              pageNumber: this.id
            });
            return resultPromise;
          }
        }, {
          key: "paintOnCanvas",
          value: function paintOnCanvas(canvasWrapper) {
            var renderCapability = (0, _pdfjsLib.createPromiseCapability)();
            var result = {
              promise: renderCapability.promise,
              onRenderContinue: function onRenderContinue(cont) {
                cont();
              },
              cancel: function cancel() {
                renderTask.cancel();
              }
            };
            var viewport = this.viewport;
            var canvas = document.createElement('canvas');
            canvas.id = this.renderingId;
            canvas.setAttribute('hidden', 'hidden');
            var isCanvasHidden = true;

            var showCanvas = function showCanvas() {
              if (isCanvasHidden) {
                canvas.removeAttribute('hidden');
                isCanvasHidden = false;
              }
            };

            canvasWrapper.appendChild(canvas);
            this.canvas = canvas;
            canvas.mozOpaque = true;
            var ctx = canvas.getContext('2d', {
              alpha: false
            });
            var outputScale = (0, _ui_utils.getOutputScale)(ctx);
            this.outputScale = outputScale;

            if (this.useOnlyCssZoom) {
              var actualSizeViewport = viewport.clone({
                scale: _ui_utils.CSS_UNITS
              });
              outputScale.sx *= actualSizeViewport.width / viewport.width;
              outputScale.sy *= actualSizeViewport.height / viewport.height;
              outputScale.scaled = true;
            }

            if (this.maxCanvasPixels > 0) {
              var pixelsInViewport = viewport.width * viewport.height;
              var maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);

              if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
                outputScale.sx = maxScale;
                outputScale.sy = maxScale;
                outputScale.scaled = true;
                this.hasRestrictedScaling = true;
              } else {
                this.hasRestrictedScaling = false;
              }
            }

            var sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
            var sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
            canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0]);
            canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0]);
            canvas.style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + 'px';
            canvas.style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + 'px';
            this.paintedViewportMap.set(canvas, viewport);
            var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
            var renderContext = {
              canvasContext: ctx,
              transform: transform,
              viewport: this.viewport,
              enableWebGL: this.enableWebGL,
              renderInteractiveForms: this.renderInteractiveForms
            };
            var renderTask = this.pdfPage.render(renderContext);

            renderTask.onContinue = function (cont) {
              showCanvas();

              if (result.onRenderContinue) {
                result.onRenderContinue(cont);
              } else {
                cont();
              }
            };

            renderTask.promise.then(function () {
              showCanvas();
              renderCapability.resolve(undefined);
            }, function (error) {
              showCanvas();
              renderCapability.reject(error);
            });
            return result;
          }
        }, {
          key: "paintOnSvg",
          value: function paintOnSvg(wrapper) {
            var _this2 = this;

            var cancelled = false;

            var ensureNotCancelled = function ensureNotCancelled() {
              if (cancelled) {
                throw new _pdfjsLib.RenderingCancelledException('Rendering cancelled, page ' + _this2.id, 'svg');
              }
            };

            var pdfPage = this.pdfPage;
            var actualSizeViewport = this.viewport.clone({
              scale: _ui_utils.CSS_UNITS
            });
            var promise = pdfPage.getOperatorList().then(function (opList) {
              ensureNotCancelled();
              var svgGfx = new _pdfjsLib.SVGGraphics(pdfPage.commonObjs, pdfPage.objs);
              return svgGfx.getSVG(opList, actualSizeViewport).then(function (svg) {
                ensureNotCancelled();
                _this2.svg = svg;

                _this2.paintedViewportMap.set(svg, actualSizeViewport);

                svg.style.width = wrapper.style.width;
                svg.style.height = wrapper.style.height;
                _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
                wrapper.appendChild(svg);
              });
            });
            return {
              promise: promise,
              onRenderContinue: function onRenderContinue(cont) {
                cont();
              },
              cancel: function cancel() {
                cancelled = true;
              }
            };
          }
        }, {
          key: "setPageLabel",
          value: function setPageLabel(label) {
            this.pageLabel = typeof label === 'string' ? label : null;

            if (this.pageLabel !== null) {
              this.div.setAttribute('data-page-label', this.pageLabel);
            } else {
              this.div.removeAttribute('data-page-label');
            }
          }
        }, {
          key: "width",
          get: function get() {
            return this.viewport.width;
          }
        }, {
          key: "height",
          get: function get() {
            return this.viewport.height;
          }
        }]);

        return PDFPageView;
      }();

      exports.PDFPageView = PDFPageView;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFRenderingQueue = exports.RenderingStates = void 0;

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var CLEANUP_TIMEOUT = 30000;
      var RenderingStates = {
        INITIAL: 0,
        RUNNING: 1,
        PAUSED: 2,
        FINISHED: 3
      };
      exports.RenderingStates = RenderingStates;

      var PDFRenderingQueue = /*#__PURE__*/function () {
        function PDFRenderingQueue() {
          _classCallCheck(this, PDFRenderingQueue);

          this.pdfViewer = null;
          this.pdfThumbnailViewer = null;
          this.onIdle = null;
          this.highestPriorityPage = null;
          this.idleTimeout = null;
          this.printing = false;
          this.isThumbnailViewEnabled = false;
        }

        _createClass(PDFRenderingQueue, [{
          key: "setViewer",
          value: function setViewer(pdfViewer) {
            this.pdfViewer = pdfViewer;
          }
        }, {
          key: "setThumbnailViewer",
          value: function setThumbnailViewer(pdfThumbnailViewer) {
            this.pdfThumbnailViewer = pdfThumbnailViewer;
          }
        }, {
          key: "isHighestPriority",
          value: function isHighestPriority(view) {
            return this.highestPriorityPage === view.renderingId;
          }
        }, {
          key: "renderHighestPriority",
          value: function renderHighestPriority(currentlyVisiblePages) {
            if (this.idleTimeout) {
              clearTimeout(this.idleTimeout);
              this.idleTimeout = null;
            }

            if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
              return;
            }

            if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
              if (this.pdfThumbnailViewer.forceRendering()) {
                return;
              }
            }

            if (this.printing) {
              return;
            }

            if (this.onIdle) {
              this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
            }
          }
        }, {
          key: "getHighestPriority",
          value: function getHighestPriority(visible, views, scrolledDown) {
            var visibleViews = visible.views;
            var numVisible = visibleViews.length;

            if (numVisible === 0) {
              return null;
            }

            for (var i = 0; i < numVisible; ++i) {
              var view = visibleViews[i].view;

              if (!this.isViewFinished(view)) {
                return view;
              }
            }

            if (scrolledDown) {
              var nextPageIndex = visible.last.id;

              if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
                return views[nextPageIndex];
              }
            } else {
              var previousPageIndex = visible.first.id - 2;

              if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
                return views[previousPageIndex];
              }
            }

            return null;
          }
        }, {
          key: "isViewFinished",
          value: function isViewFinished(view) {
            return view.renderingState === RenderingStates.FINISHED;
          }
        }, {
          key: "renderView",
          value: function renderView(view) {
            var _this = this;

            switch (view.renderingState) {
              case RenderingStates.FINISHED:
                return false;

              case RenderingStates.PAUSED:
                this.highestPriorityPage = view.renderingId;
                view.resume();
                break;

              case RenderingStates.RUNNING:
                this.highestPriorityPage = view.renderingId;
                break;

              case RenderingStates.INITIAL:
                this.highestPriorityPage = view.renderingId;
                view.draw()["finally"](function () {
                  _this.renderHighestPriority();
                });
                break;
            }

            return true;
          }
        }]);

        return PDFRenderingQueue;
      }();

      exports.PDFRenderingQueue = PDFRenderingQueue;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      var compatibilityParams = Object.create(null);
      {
        var userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
        var isAndroid = /Android/.test(userAgent);
        var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent);

        (function checkCanvasSizeLimitation() {
          if (isIOS || isAndroid) {
            compatibilityParams.maxCanvasPixels = 5242880;
          }
        })();
      }
      exports.viewerCompatibilityParams = Object.freeze(compatibilityParams);
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFSinglePageViewer = void 0;

      var _base_viewer = __w_pdfjs_require__(19);

      var _pdfjsLib = __w_pdfjs_require__(2);

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      var PDFSinglePageViewer = /*#__PURE__*/function (_BaseViewer) {
        _inherits(PDFSinglePageViewer, _BaseViewer);

        function PDFSinglePageViewer(options) {
          var _this;

          _classCallCheck(this, PDFSinglePageViewer);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(PDFSinglePageViewer).call(this, options));

          _this.eventBus.on('pagesinit', function (evt) {
            _this._ensurePageViewVisible();
          });

          return _this;
        }

        _createClass(PDFSinglePageViewer, [{
          key: "_resetView",
          value: function _resetView() {
            _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_resetView", this).call(this);

            this._previousPageNumber = 1;
            this._shadowViewer = document.createDocumentFragment();
            this._updateScrollDown = null;
          }
        }, {
          key: "_ensurePageViewVisible",
          value: function _ensurePageViewVisible() {
            var pageView = this._pages[this._currentPageNumber - 1];
            var previousPageView = this._pages[this._previousPageNumber - 1];
            var viewerNodes = this.viewer.childNodes;

            switch (viewerNodes.length) {
              case 0:
                this.viewer.appendChild(pageView.div);
                break;

              case 1:
                if (viewerNodes[0] !== previousPageView.div) {
                  throw new Error('_ensurePageViewVisible: Unexpected previously visible page.');
                }

                if (pageView === previousPageView) {
                  break;
                }

                this._shadowViewer.appendChild(previousPageView.div);

                this.viewer.appendChild(pageView.div);
                this.container.scrollTop = 0;
                break;

              default:
                throw new Error('_ensurePageViewVisible: Only one page should be visible at a time.');
            }

            this._previousPageNumber = this._currentPageNumber;
          }
        }, {
          key: "_scrollUpdate",
          value: function _scrollUpdate() {
            if (this._updateScrollDown) {
              this._updateScrollDown();
            }

            _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollUpdate", this).call(this);
          }
        }, {
          key: "_scrollIntoView",
          value: function _scrollIntoView(_ref) {
            var _this2 = this;

            var pageDiv = _ref.pageDiv,
                _ref$pageSpot = _ref.pageSpot,
                pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
                _ref$pageNumber = _ref.pageNumber,
                pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;

            if (pageNumber) {
              this._setCurrentPageNumber(pageNumber);
            }

            var scrolledDown = this._currentPageNumber >= this._previousPageNumber;

            this._ensurePageViewVisible();

            this.update();

            _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollIntoView", this).call(this, {
              pageDiv: pageDiv,
              pageSpot: pageSpot,
              pageNumber: pageNumber
            });

            this._updateScrollDown = function () {
              _this2.scroll.down = scrolledDown;
              _this2._updateScrollDown = null;
            };
          }
        }, {
          key: "_getVisiblePages",
          value: function _getVisiblePages() {
            return this._getCurrentVisiblePage();
          }
        }, {
          key: "_updateHelper",
          value: function _updateHelper(visiblePages) {}
        }, {
          key: "_updateScrollMode",
          value: function _updateScrollMode() {}
        }, {
          key: "_updateSpreadMode",
          value: function _updateSpreadMode() {}
        }, {
          key: "_setDocumentViewerElement",
          get: function get() {
            return (0, _pdfjsLib.shadow)(this, '_setDocumentViewerElement', this._shadowViewer);
          }
        }, {
          key: "_isScrollModeHorizontal",
          get: function get() {
            return (0, _pdfjsLib.shadow)(this, '_isScrollModeHorizontal', false);
          }
        }]);

        return PDFSinglePageViewer;
      }(_base_viewer.BaseViewer);

      exports.PDFSinglePageViewer = PDFSinglePageViewer;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BaseViewer = void 0;

      var _ui_utils = __w_pdfjs_require__(3);

      var _pdf_rendering_queue = __w_pdfjs_require__(16);

      var _annotation_layer_builder = __w_pdfjs_require__(1);

      var _pdfjsLib = __w_pdfjs_require__(2);

      var _pdf_page_view = __w_pdfjs_require__(15);

      var _pdf_link_service = __w_pdfjs_require__(7);

      var _text_layer_builder = __w_pdfjs_require__(8);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var DEFAULT_CACHE_SIZE = 10;

      function PDFPageViewBuffer(size) {
        var data = [];

        this.push = function (view) {
          var i = data.indexOf(view);

          if (i >= 0) {
            data.splice(i, 1);
          }

          data.push(view);

          if (data.length > size) {
            data.shift().destroy();
          }
        };

        this.resize = function (newSize, pagesToKeep) {
          size = newSize;

          if (pagesToKeep) {
            var pageIdsToKeep = new Set();

            for (var i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
              pageIdsToKeep.add(pagesToKeep[i].id);
            }

            (0, _ui_utils.moveToEndOfArray)(data, function (page) {
              return pageIdsToKeep.has(page.id);
            });
          }

          while (data.length > size) {
            data.shift().destroy();
          }
        };
      }

      function isSameScale(oldScale, newScale) {
        if (newScale === oldScale) {
          return true;
        }

        if (Math.abs(newScale - oldScale) < 1e-15) {
          return true;
        }

        return false;
      }

      var BaseViewer = /*#__PURE__*/function () {
        function BaseViewer(options) {
          var _this = this;

          _classCallCheck(this, BaseViewer);

          if (this.constructor === BaseViewer) {
            throw new Error('Cannot initialize BaseViewer.');
          }

          this._name = this.constructor.name;
          this.container = options.container;
          this.viewer = options.viewer || options.container.firstElementChild;
          this.eventBus = options.eventBus || (0, _ui_utils.getGlobalEventBus)();
          this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
          this.downloadManager = options.downloadManager || null;
          this.findController = options.findController || null;
          this.removePageBorders = options.removePageBorders || false;
          this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
          this.imageResourcesPath = options.imageResourcesPath || '';
          this.renderInteractiveForms = options.renderInteractiveForms || false;
          this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
          this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
          this.enableWebGL = options.enableWebGL || false;
          this.useOnlyCssZoom = options.useOnlyCssZoom || false;
          this.maxCanvasPixels = options.maxCanvasPixels;
          this.l10n = options.l10n || _ui_utils.NullL10n;
          this.defaultRenderingQueue = !options.renderingQueue;

          if (this.defaultRenderingQueue) {
            this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
            this.renderingQueue.setViewer(this);
          } else {
            this.renderingQueue = options.renderingQueue;
          }

          this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
          this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
          this._onBeforeDraw = this._onAfterDraw = null;

          this._resetView();

          if (this.removePageBorders) {
            this.viewer.classList.add('removePageBorders');
          }

          Promise.resolve().then(function () {
            _this.eventBus.dispatch('baseviewerinit', {
              source: _this
            });
          });
        }

        _createClass(BaseViewer, [{
          key: "getPageView",
          value: function getPageView(index) {
            return this._pages[index];
          }
        }, {
          key: "_setCurrentPageNumber",
          value: function _setCurrentPageNumber(val) {
            var resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this._currentPageNumber === val) {
              if (resetCurrentPageView) {
                this._resetCurrentPageView();
              }

              return true;
            }

            if (!(0 < val && val <= this.pagesCount)) {
              return false;
            }

            this._currentPageNumber = val;
            this.eventBus.dispatch('pagechanging', {
              source: this,
              pageNumber: val,
              pageLabel: this._pageLabels && this._pageLabels[val - 1]
            });

            if (resetCurrentPageView) {
              this._resetCurrentPageView();
            }

            return true;
          }
        }, {
          key: "setDocument",
          value: function setDocument(pdfDocument) {
            var _this2 = this;

            if (this.pdfDocument) {
              this._cancelRendering();

              this._resetView();

              if (this.findController) {
                this.findController.setDocument(null);
              }
            }

            this.pdfDocument = pdfDocument;

            if (!pdfDocument) {
              return;
            }

            var pagesCount = pdfDocument.numPages;
            var pagesCapability = (0, _pdfjsLib.createPromiseCapability)();
            this.pagesPromise = pagesCapability.promise;
            pagesCapability.promise.then(function () {
              _this2._pageViewsReady = true;

              _this2.eventBus.dispatch('pagesloaded', {
                source: _this2,
                pagesCount: pagesCount
              });
            });
            var onePageRenderedCapability = (0, _pdfjsLib.createPromiseCapability)();
            this.onePageRendered = onePageRenderedCapability.promise;
            var firstPagePromise = pdfDocument.getPage(1);
            this.firstPagePromise = firstPagePromise;

            this._onBeforeDraw = function (evt) {
              var pageView = _this2._pages[evt.pageNumber - 1];

              if (!pageView) {
                return;
              }

              _this2._buffer.push(pageView);
            };

            this.eventBus.on('pagerender', this._onBeforeDraw);

            this._onAfterDraw = function (evt) {
              if (evt.cssTransform || onePageRenderedCapability.settled) {
                return;
              }

              onePageRenderedCapability.resolve();

              _this2.eventBus.off('pagerendered', _this2._onAfterDraw);

              _this2._onAfterDraw = null;
            };

            this.eventBus.on('pagerendered', this._onAfterDraw);
            firstPagePromise.then(function (pdfPage) {
              var scale = _this2.currentScale;
              var viewport = pdfPage.getViewport({
                scale: scale * _ui_utils.CSS_UNITS
              });

              for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
                var textLayerFactory = null;

                if (_this2.textLayerMode !== _ui_utils.TextLayerMode.DISABLE) {
                  textLayerFactory = _this2;
                }

                var pageView = new _pdf_page_view.PDFPageView({
                  container: _this2._setDocumentViewerElement,
                  eventBus: _this2.eventBus,
                  id: pageNum,
                  scale: scale,
                  defaultViewport: viewport.clone(),
                  renderingQueue: _this2.renderingQueue,
                  textLayerFactory: textLayerFactory,
                  textLayerMode: _this2.textLayerMode,
                  annotationLayerFactory: _this2,
                  imageResourcesPath: _this2.imageResourcesPath,
                  renderInteractiveForms: _this2.renderInteractiveForms,
                  renderer: _this2.renderer,
                  enableWebGL: _this2.enableWebGL,
                  useOnlyCssZoom: _this2.useOnlyCssZoom,
                  maxCanvasPixels: _this2.maxCanvasPixels,
                  l10n: _this2.l10n
                });

                _this2._pages.push(pageView);
              }

              if (_this2._spreadMode !== _ui_utils.SpreadMode.NONE) {
                _this2._updateSpreadMode();
              }

              onePageRenderedCapability.promise.then(function () {
                if (_this2.findController) {
                  _this2.findController.setDocument(pdfDocument);
                }

                if (pdfDocument.loadingParams['disableAutoFetch']) {
                  pagesCapability.resolve();
                  return;
                }

                var getPagesLeft = pagesCount;

                var _loop = function _loop(_pageNum) {
                  pdfDocument.getPage(_pageNum).then(function (pdfPage) {
                    var pageView = _this2._pages[_pageNum - 1];

                    if (!pageView.pdfPage) {
                      pageView.setPdfPage(pdfPage);
                    }

                    _this2.linkService.cachePageRef(_pageNum, pdfPage.ref);

                    if (--getPagesLeft === 0) {
                      pagesCapability.resolve();
                    }
                  }, function (reason) {
                    console.error("Unable to get page ".concat(_pageNum, " to initialize viewer"), reason);

                    if (--getPagesLeft === 0) {
                      pagesCapability.resolve();
                    }
                  });
                };

                for (var _pageNum = 1; _pageNum <= pagesCount; ++_pageNum) {
                  _loop(_pageNum);
                }
              });

              _this2.eventBus.dispatch('pagesinit', {
                source: _this2
              });

              if (_this2.defaultRenderingQueue) {
                _this2.update();
              }
            })["catch"](function (reason) {
              console.error('Unable to initialize viewer', reason);
            });
          }
        }, {
          key: "setPageLabels",
          value: function setPageLabels(labels) {
            if (!this.pdfDocument) {
              return;
            }

            if (!labels) {
              this._pageLabels = null;
            } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
              this._pageLabels = null;
              console.error("".concat(this._name, ".setPageLabels: Invalid page labels."));
            } else {
              this._pageLabels = labels;
            }

            for (var i = 0, ii = this._pages.length; i < ii; i++) {
              var pageView = this._pages[i];
              var label = this._pageLabels && this._pageLabels[i];
              pageView.setPageLabel(label);
            }
          }
        }, {
          key: "_resetView",
          value: function _resetView() {
            this._pages = [];
            this._currentPageNumber = 1;
            this._currentScale = _ui_utils.UNKNOWN_SCALE;
            this._currentScaleValue = null;
            this._pageLabels = null;
            this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
            this._location = null;
            this._pagesRotation = 0;
            this._pagesRequests = [];
            this._pageViewsReady = false;
            this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
            this._spreadMode = _ui_utils.SpreadMode.NONE;

            if (this._onBeforeDraw) {
              this.eventBus.off('pagerender', this._onBeforeDraw);
              this._onBeforeDraw = null;
            }

            if (this._onAfterDraw) {
              this.eventBus.off('pagerendered', this._onAfterDraw);
              this._onAfterDraw = null;
            }

            this.viewer.textContent = '';

            this._updateScrollMode();
          }
        }, {
          key: "_scrollUpdate",
          value: function _scrollUpdate() {
            if (this.pagesCount === 0) {
              return;
            }

            this.update();
          }
        }, {
          key: "_scrollIntoView",
          value: function _scrollIntoView(_ref) {
            var pageDiv = _ref.pageDiv,
                _ref$pageSpot = _ref.pageSpot,
                pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
                _ref$pageNumber = _ref.pageNumber,
                pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;
            (0, _ui_utils.scrollIntoView)(pageDiv, pageSpot);
          }
        }, {
          key: "_setScaleUpdatePages",
          value: function _setScaleUpdatePages(newScale, newValue) {
            var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var preset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            this._currentScaleValue = newValue.toString();

            if (isSameScale(this._currentScale, newScale)) {
              if (preset) {
                this.eventBus.dispatch('scalechanging', {
                  source: this,
                  scale: newScale,
                  presetValue: newValue
                });
              }

              return;
            }

            for (var i = 0, ii = this._pages.length; i < ii; i++) {
              this._pages[i].update(newScale);
            }

            this._currentScale = newScale;

            if (!noScroll) {
              var page = this._currentPageNumber,
                  dest;

              if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
                page = this._location.pageNumber;
                dest = [null, {
                  name: 'XYZ'
                }, this._location.left, this._location.top, null];
              }

              this.scrollPageIntoView({
                pageNumber: page,
                destArray: dest,
                allowNegativeOffset: true
              });
            }

            this.eventBus.dispatch('scalechanging', {
              source: this,
              scale: newScale,
              presetValue: preset ? newValue : undefined
            });

            if (this.defaultRenderingQueue) {
              this.update();
            }
          }
        }, {
          key: "_setScale",
          value: function _setScale(value) {
            var noScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var scale = parseFloat(value);

            if (scale > 0) {
              this._setScaleUpdatePages(scale, value, noScroll, false);
            } else {
              var currentPage = this._pages[this._currentPageNumber - 1];

              if (!currentPage) {
                return;
              }

              var noPadding = this.isInPresentationMode || this.removePageBorders;
              var hPadding = noPadding ? 0 : _ui_utils.SCROLLBAR_PADDING;
              var vPadding = noPadding ? 0 : _ui_utils.VERTICAL_PADDING;

              if (!noPadding && this._isScrollModeHorizontal) {
                var _ref2 = [vPadding, hPadding];
                hPadding = _ref2[0];
                vPadding = _ref2[1];
              }

              var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale;
              var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;

              switch (value) {
                case 'page-actual':
                  scale = 1;
                  break;

                case 'page-width':
                  scale = pageWidthScale;
                  break;

                case 'page-height':
                  scale = pageHeightScale;
                  break;

                case 'page-fit':
                  scale = Math.min(pageWidthScale, pageHeightScale);
                  break;

                case 'auto':
                  var horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
                  scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
                  break;

                default:
                  console.error("".concat(this._name, "._setScale: \"").concat(value, "\" is an unknown zoom value."));
                  return;
              }

              this._setScaleUpdatePages(scale, value, noScroll, true);
            }
          }
        }, {
          key: "_resetCurrentPageView",
          value: function _resetCurrentPageView() {
            if (this.isInPresentationMode) {
              this._setScale(this._currentScaleValue, true);
            }

            var pageView = this._pages[this._currentPageNumber - 1];

            this._scrollIntoView({
              pageDiv: pageView.div
            });
          }
        }, {
          key: "scrollPageIntoView",
          value: function scrollPageIntoView(_ref3) {
            var pageNumber = _ref3.pageNumber,
                _ref3$destArray = _ref3.destArray,
                destArray = _ref3$destArray === void 0 ? null : _ref3$destArray,
                _ref3$allowNegativeOf = _ref3.allowNegativeOffset,
                allowNegativeOffset = _ref3$allowNegativeOf === void 0 ? false : _ref3$allowNegativeOf;

            if (!this.pdfDocument) {
              return;
            }

            var pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];

            if (!pageView) {
              console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
              return;
            }

            if (this.isInPresentationMode || !destArray) {
              this._setCurrentPageNumber(pageNumber, true);

              return;
            }

            var x = 0,
                y = 0;
            var width = 0,
                height = 0,
                widthScale,
                heightScale;
            var changeOrientation = pageView.rotation % 180 === 0 ? false : true;
            var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS;
            var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS;
            var scale = 0;

            switch (destArray[1].name) {
              case 'XYZ':
                x = destArray[2];
                y = destArray[3];
                scale = destArray[4];
                x = x !== null ? x : 0;
                y = y !== null ? y : pageHeight;
                break;

              case 'Fit':
              case 'FitB':
                scale = 'page-fit';
                break;

              case 'FitH':
              case 'FitBH':
                y = destArray[2];
                scale = 'page-width';

                if (y === null && this._location) {
                  x = this._location.left;
                  y = this._location.top;
                }

                break;

              case 'FitV':
              case 'FitBV':
                x = destArray[2];
                width = pageWidth;
                height = pageHeight;
                scale = 'page-height';
                break;

              case 'FitR':
                x = destArray[2];
                y = destArray[3];
                width = destArray[4] - x;
                height = destArray[5] - y;
                var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
                var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
                widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS;
                heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS;
                scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
                break;

              default:
                console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(destArray[1].name, "\" is not a valid destination type."));
                return;
            }

            if (scale && scale !== this._currentScale) {
              this.currentScaleValue = scale;
            } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
              this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
            }

            if (scale === 'page-fit' && !destArray[4]) {
              this._scrollIntoView({
                pageDiv: pageView.div,
                pageNumber: pageNumber
              });

              return;
            }

            var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
            var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
            var top = Math.min(boundingRect[0][1], boundingRect[1][1]);

            if (!allowNegativeOffset) {
              left = Math.max(left, 0);
              top = Math.max(top, 0);
            }

            this._scrollIntoView({
              pageDiv: pageView.div,
              pageSpot: {
                left: left,
                top: top
              },
              pageNumber: pageNumber
            });
          }
        }, {
          key: "_updateLocation",
          value: function _updateLocation(firstPage) {
            var currentScale = this._currentScale;
            var currentScaleValue = this._currentScaleValue;
            var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
            var pageNumber = firstPage.id;
            var pdfOpenParams = '#page=' + pageNumber;
            pdfOpenParams += '&zoom=' + normalizedScaleValue;
            var currentPageView = this._pages[pageNumber - 1];
            var container = this.container;
            var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
            var intLeft = Math.round(topLeft[0]);
            var intTop = Math.round(topLeft[1]);
            pdfOpenParams += ',' + intLeft + ',' + intTop;
            this._location = {
              pageNumber: pageNumber,
              scale: normalizedScaleValue,
              top: intTop,
              left: intLeft,
              rotation: this._pagesRotation,
              pdfOpenParams: pdfOpenParams
            };
          }
        }, {
          key: "_updateHelper",
          value: function _updateHelper(visiblePages) {
            throw new Error('Not implemented: _updateHelper');
          }
        }, {
          key: "update",
          value: function update() {
            var visible = this._getVisiblePages();

            var visiblePages = visible.views,
                numVisiblePages = visiblePages.length;

            if (numVisiblePages === 0) {
              return;
            }

            var newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

            this._buffer.resize(newCacheSize, visiblePages);

            this.renderingQueue.renderHighestPriority(visible);

            this._updateHelper(visiblePages);

            this._updateLocation(visible.first);

            this.eventBus.dispatch('updateviewarea', {
              source: this,
              location: this._location
            });
          }
        }, {
          key: "containsElement",
          value: function containsElement(element) {
            return this.container.contains(element);
          }
        }, {
          key: "focus",
          value: function focus() {
            this.container.focus();
          }
        }, {
          key: "_getCurrentVisiblePage",
          value: function _getCurrentVisiblePage() {
            if (!this.pagesCount) {
              return {
                views: []
              };
            }

            var pageView = this._pages[this._currentPageNumber - 1];
            var element = pageView.div;
            var view = {
              id: pageView.id,
              x: element.offsetLeft + element.clientLeft,
              y: element.offsetTop + element.clientTop,
              view: pageView
            };
            return {
              first: view,
              last: view,
              views: [view]
            };
          }
        }, {
          key: "_getVisiblePages",
          value: function _getVisiblePages() {
            return (0, _ui_utils.getVisibleElements)(this.container, this._pages, true, this._isScrollModeHorizontal);
          }
        }, {
          key: "isPageVisible",
          value: function isPageVisible(pageNumber) {
            if (!this.pdfDocument) {
              return false;
            }

            if (this.pageNumber < 1 || pageNumber > this.pagesCount) {
              console.error("".concat(this._name, ".isPageVisible: \"").concat(pageNumber, "\" is out of bounds."));
              return false;
            }

            return this._getVisiblePages().views.some(function (view) {
              return view.id === pageNumber;
            });
          }
        }, {
          key: "cleanup",
          value: function cleanup() {
            for (var i = 0, ii = this._pages.length; i < ii; i++) {
              if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
                this._pages[i].reset();
              }
            }
          }
        }, {
          key: "_cancelRendering",
          value: function _cancelRendering() {
            for (var i = 0, ii = this._pages.length; i < ii; i++) {
              if (this._pages[i]) {
                this._pages[i].cancelRendering();
              }
            }
          }
        }, {
          key: "_ensurePdfPageLoaded",
          value: function _ensurePdfPageLoaded(pageView) {
            var _this3 = this;

            if (pageView.pdfPage) {
              return Promise.resolve(pageView.pdfPage);
            }

            var pageNumber = pageView.id;

            if (this._pagesRequests[pageNumber]) {
              return this._pagesRequests[pageNumber];
            }

            var promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
              if (!pageView.pdfPage) {
                pageView.setPdfPage(pdfPage);
              }

              _this3._pagesRequests[pageNumber] = null;
              return pdfPage;
            })["catch"](function (reason) {
              console.error('Unable to get page for page view', reason);
              _this3._pagesRequests[pageNumber] = null;
            });
            this._pagesRequests[pageNumber] = promise;
            return promise;
          }
        }, {
          key: "forceRendering",
          value: function forceRendering(currentlyVisiblePages) {
            var _this4 = this;

            var visiblePages = currentlyVisiblePages || this._getVisiblePages();

            var scrollAhead = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down;
            var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead);

            if (pageView) {
              this._ensurePdfPageLoaded(pageView).then(function () {
                _this4.renderingQueue.renderView(pageView);
              });

              return true;
            }

            return false;
          }
        }, {
          key: "createTextLayerBuilder",
          value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
            var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return new _text_layer_builder.TextLayerBuilder({
              textLayerDiv: textLayerDiv,
              eventBus: this.eventBus,
              pageIndex: pageIndex,
              viewport: viewport,
              findController: this.isInPresentationMode ? null : this.findController,
              enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
            });
          }
        }, {
          key: "createAnnotationLayerBuilder",
          value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
            var imageResourcesPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var renderInteractiveForms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var l10n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _ui_utils.NullL10n;
            return new _annotation_layer_builder.AnnotationLayerBuilder({
              pageDiv: pageDiv,
              pdfPage: pdfPage,
              imageResourcesPath: imageResourcesPath,
              renderInteractiveForms: renderInteractiveForms,
              linkService: this.linkService,
              downloadManager: this.downloadManager,
              l10n: l10n
            });
          }
        }, {
          key: "getPagesOverview",
          value: function getPagesOverview() {
            var pagesOverview = this._pages.map(function (pageView) {
              var viewport = pageView.pdfPage.getViewport({
                scale: 1
              });
              return {
                width: viewport.width,
                height: viewport.height,
                rotation: viewport.rotation
              };
            });

            if (!this.enablePrintAutoRotate) {
              return pagesOverview;
            }

            var isFirstPagePortrait = (0, _ui_utils.isPortraitOrientation)(pagesOverview[0]);
            return pagesOverview.map(function (size) {
              if (isFirstPagePortrait === (0, _ui_utils.isPortraitOrientation)(size)) {
                return size;
              }

              return {
                width: size.height,
                height: size.width,
                rotation: (size.rotation + 90) % 360
              };
            });
          }
        }, {
          key: "_updateScrollMode",
          value: function _updateScrollMode() {
            var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var scrollMode = this._scrollMode,
                viewer = this.viewer;
            viewer.classList.toggle('scrollHorizontal', scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
            viewer.classList.toggle('scrollWrapped', scrollMode === _ui_utils.ScrollMode.WRAPPED);

            if (!this.pdfDocument || !pageNumber) {
              return;
            }

            if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
              this._setScale(this._currentScaleValue, true);
            }

            this._setCurrentPageNumber(pageNumber, true);

            this.update();
          }
        }, {
          key: "_updateSpreadMode",
          value: function _updateSpreadMode() {
            var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!this.pdfDocument) {
              return;
            }

            var viewer = this.viewer,
                pages = this._pages;
            viewer.textContent = '';

            if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
              for (var i = 0, iMax = pages.length; i < iMax; ++i) {
                viewer.appendChild(pages[i].div);
              }
            } else {
              var parity = this._spreadMode - 1;
              var spread = null;

              for (var _i = 0, _iMax = pages.length; _i < _iMax; ++_i) {
                if (spread === null) {
                  spread = document.createElement('div');
                  spread.className = 'spread';
                  viewer.appendChild(spread);
                } else if (_i % 2 === parity) {
                  spread = spread.cloneNode(false);
                  viewer.appendChild(spread);
                }

                spread.appendChild(pages[_i].div);
              }
            }

            if (!pageNumber) {
              return;
            }

            this._setCurrentPageNumber(pageNumber, true);

            this.update();
          }
        }, {
          key: "pagesCount",
          get: function get() {
            return this._pages.length;
          }
        }, {
          key: "pageViewsReady",
          get: function get() {
            return this._pageViewsReady;
          }
        }, {
          key: "currentPageNumber",
          get: function get() {
            return this._currentPageNumber;
          },
          set: function set(val) {
            if (!Number.isInteger(val)) {
              throw new Error('Invalid page number.');
            }

            if (!this.pdfDocument) {
              return;
            }

            if (!this._setCurrentPageNumber(val, true)) {
              console.error("".concat(this._name, ".currentPageNumber: \"").concat(val, "\" is not a valid page."));
            }
          }
        }, {
          key: "currentPageLabel",
          get: function get() {
            return this._pageLabels && this._pageLabels[this._currentPageNumber - 1];
          },
          set: function set(val) {
            if (!this.pdfDocument) {
              return;
            }

            var page = val | 0;

            if (this._pageLabels) {
              var i = this._pageLabels.indexOf(val);

              if (i >= 0) {
                page = i + 1;
              }
            }

            if (!this._setCurrentPageNumber(page, true)) {
              console.error("".concat(this._name, ".currentPageLabel: \"").concat(val, "\" is not a valid page."));
            }
          }
        }, {
          key: "currentScale",
          get: function get() {
            return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
          },
          set: function set(val) {
            if (isNaN(val)) {
              throw new Error('Invalid numeric scale.');
            }

            if (!this.pdfDocument) {
              return;
            }

            this._setScale(val, false);
          }
        }, {
          key: "currentScaleValue",
          get: function get() {
            return this._currentScaleValue;
          },
          set: function set(val) {
            if (!this.pdfDocument) {
              return;
            }

            this._setScale(val, false);
          }
        }, {
          key: "pagesRotation",
          get: function get() {
            return this._pagesRotation;
          },
          set: function set(rotation) {
            if (!(0, _ui_utils.isValidRotation)(rotation)) {
              throw new Error('Invalid pages rotation angle.');
            }

            if (!this.pdfDocument) {
              return;
            }

            if (this._pagesRotation === rotation) {
              return;
            }

            this._pagesRotation = rotation;
            var pageNumber = this._currentPageNumber;

            for (var i = 0, ii = this._pages.length; i < ii; i++) {
              var pageView = this._pages[i];
              pageView.update(pageView.scale, rotation);
            }

            if (this._currentScaleValue) {
              this._setScale(this._currentScaleValue, true);
            }

            this.eventBus.dispatch('rotationchanging', {
              source: this,
              pagesRotation: rotation,
              pageNumber: pageNumber
            });

            if (this.defaultRenderingQueue) {
              this.update();
            }
          }
        }, {
          key: "_setDocumentViewerElement",
          get: function get() {
            throw new Error('Not implemented: _setDocumentViewerElement');
          }
        }, {
          key: "_isScrollModeHorizontal",
          get: function get() {
            return this.isInPresentationMode ? false : this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL;
          }
        }, {
          key: "isInPresentationMode",
          get: function get() {
            return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
          }
        }, {
          key: "isChangingPresentationMode",
          get: function get() {
            return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
          }
        }, {
          key: "isHorizontalScrollbarEnabled",
          get: function get() {
            return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
          }
        }, {
          key: "isVerticalScrollbarEnabled",
          get: function get() {
            return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
          }
        }, {
          key: "hasEqualPageSizes",
          get: function get() {
            var firstPageView = this._pages[0];

            for (var i = 1, ii = this._pages.length; i < ii; ++i) {
              var pageView = this._pages[i];

              if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "scrollMode",
          get: function get() {
            return this._scrollMode;
          },
          set: function set(mode) {
            if (this._scrollMode === mode) {
              return;
            }

            if (!(0, _ui_utils.isValidScrollMode)(mode)) {
              throw new Error("Invalid scroll mode: ".concat(mode));
            }

            this._scrollMode = mode;
            this.eventBus.dispatch('scrollmodechanged', {
              source: this,
              mode: mode
            });

            this._updateScrollMode(this._currentPageNumber);
          }
        }, {
          key: "spreadMode",
          get: function get() {
            return this._spreadMode;
          },
          set: function set(mode) {
            if (this._spreadMode === mode) {
              return;
            }

            if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
              throw new Error("Invalid spread mode: ".concat(mode));
            }

            this._spreadMode = mode;
            this.eventBus.dispatch('spreadmodechanged', {
              source: this,
              mode: mode
            });

            this._updateSpreadMode(this._currentPageNumber);
          }
        }]);

        return BaseViewer;
      }();

      exports.BaseViewer = BaseViewer;
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFViewer = void 0;

      var _base_viewer = __w_pdfjs_require__(19);

      var _pdfjsLib = __w_pdfjs_require__(2);

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      var PDFViewer = /*#__PURE__*/function (_BaseViewer) {
        _inherits(PDFViewer, _BaseViewer);

        function PDFViewer() {
          _classCallCheck(this, PDFViewer);

          return _possibleConstructorReturn(this, _getPrototypeOf(PDFViewer).apply(this, arguments));
        }

        _createClass(PDFViewer, [{
          key: "_scrollIntoView",
          value: function _scrollIntoView(_ref) {
            var pageDiv = _ref.pageDiv,
                _ref$pageSpot = _ref.pageSpot,
                pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
                _ref$pageNumber = _ref.pageNumber,
                pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;

            if (!pageSpot && !this.isInPresentationMode) {
              var left = pageDiv.offsetLeft + pageDiv.clientLeft;
              var right = left + pageDiv.clientWidth;
              var _this$container = this.container,
                  scrollLeft = _this$container.scrollLeft,
                  clientWidth = _this$container.clientWidth;

              if (this._isScrollModeHorizontal || left < scrollLeft || right > scrollLeft + clientWidth) {
                pageSpot = {
                  left: 0,
                  top: 0
                };
              }
            }

            _get(_getPrototypeOf(PDFViewer.prototype), "_scrollIntoView", this).call(this, {
              pageDiv: pageDiv,
              pageSpot: pageSpot,
              pageNumber: pageNumber
            });
          }
        }, {
          key: "_getVisiblePages",
          value: function _getVisiblePages() {
            if (this.isInPresentationMode) {
              return this._getCurrentVisiblePage();
            }

            return _get(_getPrototypeOf(PDFViewer.prototype), "_getVisiblePages", this).call(this);
          }
        }, {
          key: "_updateHelper",
          value: function _updateHelper(visiblePages) {
            if (this.isInPresentationMode) {
              return;
            }

            var currentId = this._currentPageNumber;
            var stillFullyVisible = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = visiblePages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var page = _step.value;

                if (page.percent < 100) {
                  break;
                }

                if (page.id === currentId) {
                  stillFullyVisible = true;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            if (!stillFullyVisible) {
              currentId = visiblePages[0].id;
            }

            this._setCurrentPageNumber(currentId);
          }
        }, {
          key: "_setDocumentViewerElement",
          get: function get() {
            return (0, _pdfjsLib.shadow)(this, '_setDocumentViewerElement', this.viewer);
          }
        }]);

        return PDFViewer;
      }(_base_viewer.BaseViewer);

      exports.PDFViewer = PDFViewer;
      /***/
    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var getMethod = __webpack_require__("dc4a");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aConstructor = __webpack_require__("5087");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4a9b":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isPrototypeOf = __webpack_require__("3a9b");
var isRegExp = __webpack_require__("44e7");
var toString = __webpack_require__("577e");
var regExpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var enforceInternalState = __webpack_require__("69f3").enforce;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4d90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $padStart = __webpack_require__("0ccb").start;
var WEBKIT_BUG = __webpack_require__("9a0c");

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var isConstructor = __webpack_require__("68ee");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var internalSort = __webpack_require__("addb");
var arrayMethodIsStrict = __webpack_require__("a640");
var FF = __webpack_require__("04d1");
var IE_OR_EDGE = __webpack_require__("d998");
var V8 = __webpack_require__("2d00");
var WEBKIT = __webpack_require__("512c");

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__("d86b");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "5087":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isConstructor = __webpack_require__("68ee");
var tryToString = __webpack_require__("0d51");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var toIntegerOrInfinity = __webpack_require__("5926");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getMethod = __webpack_require__("dc4a");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var classof = __webpack_require__("f5df");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isRegExp = __webpack_require__("44e7");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5cc6":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "5d41":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var isDataDescriptor = __webpack_require__("c60d");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var getPrototypeOf = __webpack_require__("e163");

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "5f96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var uncurryThis = __webpack_require__("e330");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
  return $join(aTypedArray(this), separator);
});


/***/ }),

/***/ "5fb2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var RangeError = global.RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line max-statements -- TODO
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "6069":
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "60bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayIterators = __webpack_require__("e260");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var PROPER_ARRAY_VALUES_NAME = !!nativeTypedArrayIterator && nativeTypedArrayIterator.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, PROPER_FUNCTION_NAME && !PROPER_ARRAY_VALUES_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, PROPER_FUNCTION_NAME && !PROPER_ARRAY_VALUES_NAME);


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var call = __webpack_require__("c65b");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "621a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var FunctionName = __webpack_require__("5e77");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefineAll = __webpack_require__("e2cc");
var fails = __webpack_require__("d039");
var anInstance = __webpack_require__("19aa");
var toIntegerOrInfinity = __webpack_require__("5926");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var IEEE754 = __webpack_require__("77a7");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var defineProperty = __webpack_require__("9bf2").f;
var arrayFill = __webpack_require__("81d5");
var arraySlice = __webpack_require__("f36a");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
  /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return new NativeArrayBuffer(toIndex(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "649e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $some = __webpack_require__("b727").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6c57":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var $propertyIsEnumerable = __webpack_require__("d1e7").f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7037":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d3b7");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "7039":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("057f").f;

// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: getOwnPropertyNames
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "72a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2f5a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "72f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__("ebb5").exportTypedArrayMethod;
var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis([].join);

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "735e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var call = __webpack_require__("c65b");
var $fill = __webpack_require__("81d5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  return call(
    $fill,
    aTypedArray(this),
    value,
    length > 1 ? arguments[1] : undefined,
    length > 2 ? arguments[2] : undefined
  );
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var hasOwn = __webpack_require__("1a2d");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "74e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var DESCRIPTORS = __webpack_require__("83ab");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("8aa7");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayBufferModule = __webpack_require__("621a");
var anInstance = __webpack_require__("19aa");
var createPropertyDescriptor = __webpack_require__("5c6c");
var createNonEnumerableProperty = __webpack_require__("9112");
var isIntegralNumber = __webpack_require__("eac5");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var toOffset = __webpack_require__("182d");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var classof = __webpack_require__("f5df");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var create = __webpack_require__("7c73");
var isPrototypeOf = __webpack_require__("3a9b");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var typedArrayFrom = __webpack_require__("a078");
var forEach = __webpack_require__("b727").forEach;
var setSpecies = __webpack_require__("2626");
var definePropertyModule = __webpack_require__("9bf2");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var InternalStateModule = __webpack_require__("69f3");
var inheritIfRequired = __webpack_require__("7156");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "77a7":
/***/ (function(module, exports, __webpack_require__) {

// IEEE754 conversions based on https://github.com/feross/ieee754
var global = __webpack_require__("da84");

var Array = global.Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var requireObjectCoercible = __webpack_require__("1d80");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "82f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $includes = __webpack_require__("4d64").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "841c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var sameValue = __webpack_require__("129f");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var regExpExec = __webpack_require__("14c3");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "843c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $padEnd = __webpack_require__("0ccb").end;
var WEBKIT_BUG = __webpack_require__("9a0c");

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "84f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "7f9ebfad849b2bfdfe92.worker.js");
};

/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8a59":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "8a79":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var un$EndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return un$EndsWith
      ? un$EndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8aa7":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new -- required for testing */
var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__("ebb5").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "8ba4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var isIntegralNumber = __webpack_require__("eac5");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber
});


/***/ }),

/***/ "8d32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "907a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIntegerOrInfinity = __webpack_require__("5926");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "90d7":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");

var log = Math.log;
var LN2 = Math.LN2;

// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
$({ target: 'Math', stat: true }, {
  log2: function log2(x) {
    return log(x) / LN2;
  }
});


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9129":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "91dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "944a":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "9861":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__("e260");
var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var USE_NATIVE_URL = __webpack_require__("0d3b");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var createIteratorConstructor = __webpack_require__("9ed3");
var InternalStateModule = __webpack_require__("69f3");
var anInstance = __webpack_require__("19aa");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var bind = __webpack_require__("0366");
var classof = __webpack_require__("f5df");
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var $toString = __webpack_require__("577e");
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var wellKnownSymbol = __webpack_require__("b622");
var arraySort = __webpack_require__("addb");

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var n$Fetch = getBuiltIn('fetch');
var N$Request = getBuiltIn('Request');
var Headers = getBuiltIn('Headers');
var RequestPrototype = N$Request && N$Request.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = split(query, '&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = split(attribute, '=');
        push(result, {
          key: deserialize(shift(entry)),
          value: deserialize(join(entry, '='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (iteratorMethod) {
        iterator = getIterator(init, iteratorMethod);
        next = iterator.next;
        while (!(step = call(next, iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = call(entryNext, entryIterator)).done ||
            (second = call(entryNext, entryIterator)).done ||
            !call(entryNext, entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          push(entries, { key: $toString(first.value), value: $toString(second.value) });
        }
      } else for (key in init) if (hasOwn(init, key)) push(entries, { key: key, value: $toString(init[key]) });
    } else {
      parseSearchParams(
        entries,
        typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init)
      );
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    push(result, serialize(entry.key) + '=' + serialize(entry.value));
  } return join(result, '&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(n$Fetch)) {
    $({ global: true, enumerable: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return n$Fetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(N$Request)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new N$Request(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a0c":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__("342f");

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var getIteratorMethod = __webpack_require__("35a1");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9a8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var $ArrayCopyWithin = __webpack_require__("145e");

var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a078":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var aConstructor = __webpack_require__("5087");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var isArrayIteratorMethod = __webpack_require__("e95a");
var aTypedArrayConstructor = __webpack_require__("ebb5").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var toAbsoluteIndex = __webpack_require__("23cb");
var toIntegerOrInfinity = __webpack_require__("5926");
var lengthOfArrayLike = __webpack_require__("07fa");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var isArray = __webpack_require__("e8b5");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var isPrototypeOf = __webpack_require__("3a9b");
var isSymbol = __webpack_require__("d9b5");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var arraySlice = __webpack_require__("f36a");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a79d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var NativePromise = __webpack_require__("fea9");
var fails = __webpack_require__("d039");
var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var speciesConstructor = __webpack_require__("4840");
var promiseResolve = __webpack_require__("cdf9");
var redefine = __webpack_require__("6eeb");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromise)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ "a975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $every = __webpack_require__("b727").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "a981":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isPrototypeOf = __webpack_require__("3a9b");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "acac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var redefineAll = __webpack_require__("e2cc");
var getWeakData = __webpack_require__("f183").getWeakData;
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var ArrayIterationModule = __webpack_require__("b727");
var hasOwn = __webpack_require__("1a2d");
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "addb":
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__("f36a");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var uncurryThis = __webpack_require__("e330");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /^\s*function ([^ (]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b383":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("91dd");
exports.encode = exports.stringify = __webpack_require__("e099");


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var fails = __webpack_require__("d039");
var arraySlice = __webpack_require__("f36a");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var bind = __webpack_require__("0366");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_IOS_PEBBLE = __webpack_require__("d4c3");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b636":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var thisNumberValue = __webpack_require__("408a");
var $repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var RangeError = global.RangeError;
var String = global.String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var un$ToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' ||
    un$ToFixed(0.9, 0) !== '1' ||
    un$ToFixed(1.255, 2) !== '1.25' ||
    un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b6b7":
/***/ (function(module, exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__("ebb5");
var speciesConstructor = __webpack_require__("4840");

var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bf19":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call(URL.prototype.toString, this);
  }
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c19f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var arrayBufferModule = __webpack_require__("621a");
var setSpecies = __webpack_require__("2626");

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),

/***/ "c1ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $filter = __webpack_require__("b727").filter;
var fromSpeciesAndList = __webpack_require__("1448");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c5d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
  italics: function italics() {
    return createHTML(this, 'i', '', '');
  }
});


/***/ }),

/***/ "c607":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var classof = __webpack_require__("c6b6");
var defineProperty = __webpack_require__("9bf2").f;
var getInternalState = __webpack_require__("69f3").get;

var RegExpPrototype = RegExp.prototype;
var TypeError = global.TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineProperty(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function () {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "c60d":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ "c65b":
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__("5e77").PROPER;
var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "c906":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $isExtensible = __webpack_require__("4fad");

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
$({ target: 'Object', stat: true, forced: Object.isExtensible !== $isExtensible }, {
  isExtensible: $isExtensible
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "ca91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduce = __webpack_require__("d58f").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cd26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cee8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var onFreeze = __webpack_require__("f183").onFreeze;
var FREEZING = __webpack_require__("bb2f");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function () { $preventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "cf3f":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, process, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2=__webpack_require__("7037").default;__webpack_require__("a4d3");__webpack_require__("e01a");__webpack_require__("d3b7");__webpack_require__("944a");__webpack_require__("0c47");__webpack_require__("23dc");__webpack_require__("d28b");__webpack_require__("e260");__webpack_require__("3ca3");__webpack_require__("ddb0");__webpack_require__("3410");__webpack_require__("8ba4");__webpack_require__("a9e3");__webpack_require__("2b3d");__webpack_require__("9861");__webpack_require__("b0c0");__webpack_require__("ac1f");__webpack_require__("5319");__webpack_require__("a15b");__webpack_require__("5cc6");__webpack_require__("907a");__webpack_require__("9a8c");__webpack_require__("a975");__webpack_require__("735e");__webpack_require__("c1ac");__webpack_require__("d139");__webpack_require__("3a7b");__webpack_require__("d5d6");__webpack_require__("82f8");__webpack_require__("e91f");__webpack_require__("60bd");__webpack_require__("5f96");__webpack_require__("3280");__webpack_require__("3fcc");__webpack_require__("ca91");__webpack_require__("25a1");__webpack_require__("cd26");__webpack_require__("3c5d");__webpack_require__("2954");__webpack_require__("649e");__webpack_require__("219c");__webpack_require__("170b");__webpack_require__("b39a");__webpack_require__("72f7");__webpack_require__("90d7");__webpack_require__("fb2c");__webpack_require__("fb6a");__webpack_require__("4e82");__webpack_require__("e6cf");__webpack_require__("25f0");__webpack_require__("2ca0");__webpack_require__("8a79");__webpack_require__("2532");__webpack_require__("caad");__webpack_require__("a630");__webpack_require__("cca6");__webpack_require__("9129");__webpack_require__("a79d");__webpack_require__("f5b2");__webpack_require__("f6d6");__webpack_require__("4d90");__webpack_require__("843c");__webpack_require__("07ac");__webpack_require__("6c57");__webpack_require__("e439");__webpack_require__("1276");__webpack_require__("00b4");__webpack_require__("99af");__webpack_require__("7039");__webpack_require__("b64b");__webpack_require__("159b");__webpack_require__("841c");__webpack_require__("bf19");__webpack_require__("4d63");__webpack_require__("c607");__webpack_require__("2c3e");__webpack_require__("a434");__webpack_require__("c906");__webpack_require__("cee8");__webpack_require__("7db0");__webpack_require__("c740");__webpack_require__("38cf");__webpack_require__("d81d");__webpack_require__("c19f");__webpack_require__("10d1");__webpack_require__("8a59");__webpack_require__("1fe2");__webpack_require__("b636");__webpack_require__("dca8");__webpack_require__("143c");__webpack_require__("cb29");__webpack_require__("cc71");__webpack_require__("c5d0");__webpack_require__("498a");__webpack_require__("f8c9");__webpack_require__("5d41");__webpack_require__("cfc3");__webpack_require__("4a9b");__webpack_require__("e9c4");__webpack_require__("b680");/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */(function webpackUniversalModuleDefinition(root,factory){if(( false?undefined:_typeof2(exports))==='object'&&( false?undefined:_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __w_pdfjs_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__w_pdfjs_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__w_pdfjs_require__.m=modules;/******/ /******/ // expose the module cache
/******/__w_pdfjs_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__w_pdfjs_require__.d=function(exports,name,getter){/******/if(!__w_pdfjs_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__w_pdfjs_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__w_pdfjs_require__.t=function(value,mode){/******/if(mode&1)value=__w_pdfjs_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof2(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__w_pdfjs_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__w_pdfjs_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__w_pdfjs_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__w_pdfjs_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__w_pdfjs_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__w_pdfjs_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';var smaskFragmentShaderCode='\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';var smaskCache=null;function initSmaskGL(){var canvas,gl;generateGL();canvas=currentCanvas;currentCanvas=null;gl=currentGL;currentGL=null;var vertexShader=createVertexShader(gl,smaskVertexShaderCode);var fragmentShader=createFragmentShader(gl,smaskFragmentShaderCode);var program=createProgram(gl,[vertexShader,fragmentShader]);gl.useProgram(program);var cache={};cache.gl=gl;cache.canvas=canvas;cache.resolutionLocation=gl.getUniformLocation(program,'u_resolution');cache.positionLocation=gl.getAttribLocation(program,'a_position');cache.backdropLocation=gl.getUniformLocation(program,'u_backdrop');cache.subtypeLocation=gl.getUniformLocation(program,'u_subtype');var texCoordLocation=gl.getAttribLocation(program,'a_texCoord');var texLayerLocation=gl.getUniformLocation(program,'u_image');var texMaskLocation=gl.getUniformLocation(program,'u_mask');var texCoordBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0.0,0.0,1.0,0.0,0.0,1.0,0.0,1.0,1.0,0.0,1.0,1.0]),gl.STATIC_DRAW);gl.enableVertexAttribArray(texCoordLocation);gl.vertexAttribPointer(texCoordLocation,2,gl.FLOAT,false,0,0);gl.uniform1i(texLayerLocation,0);gl.uniform1i(texMaskLocation,1);smaskCache=cache;}function composeSMask(layer,mask,properties){var width=layer.width,height=layer.height;if(!smaskCache){initSmaskGL();}var cache=smaskCache,canvas=cache.canvas,gl=cache.gl;canvas.width=width;canvas.height=height;gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight);gl.uniform2f(cache.resolutionLocation,width,height);if(properties.backdrop){gl.uniform4f(cache.resolutionLocation,properties.backdrop[0],properties.backdrop[1],properties.backdrop[2],1);}else{gl.uniform4f(cache.resolutionLocation,0,0,0,0);}gl.uniform1i(cache.subtypeLocation,properties.subtype==='Luminosity'?1:0);var texture=createTexture(gl,layer,gl.TEXTURE0);var maskTexture=createTexture(gl,mask,gl.TEXTURE1);var buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,0,width,0,0,height,0,height,width,0,width,height]),gl.STATIC_DRAW);gl.enableVertexAttribArray(cache.positionLocation);gl.vertexAttribPointer(cache.positionLocation,2,gl.FLOAT,false,0,0);gl.clearColor(0,0,0,0);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLES,0,6);gl.flush();gl.deleteTexture(texture);gl.deleteTexture(maskTexture);gl.deleteBuffer(buffer);return canvas;}var figuresVertexShaderCode='\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';var figuresFragmentShaderCode='\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';var figuresCache=null;function initFiguresGL(){var canvas,gl;generateGL();canvas=currentCanvas;currentCanvas=null;gl=currentGL;currentGL=null;var vertexShader=createVertexShader(gl,figuresVertexShaderCode);var fragmentShader=createFragmentShader(gl,figuresFragmentShaderCode);var program=createProgram(gl,[vertexShader,fragmentShader]);gl.useProgram(program);var cache={};cache.gl=gl;cache.canvas=canvas;cache.resolutionLocation=gl.getUniformLocation(program,'u_resolution');cache.scaleLocation=gl.getUniformLocation(program,'u_scale');cache.offsetLocation=gl.getUniformLocation(program,'u_offset');cache.positionLocation=gl.getAttribLocation(program,'a_position');cache.colorLocation=gl.getAttribLocation(program,'a_color');figuresCache=cache;}function drawFigures(width,height,backgroundColor,figures,context){if(!figuresCache){initFiguresGL();}var cache=figuresCache,canvas=cache.canvas,gl=cache.gl;canvas.width=width;canvas.height=height;gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight);gl.uniform2f(cache.resolutionLocation,width,height);var count=0;var i,ii,rows;for(i=0,ii=figures.length;i<ii;i++){switch(figures[i].type){case'lattice':rows=figures[i].coords.length/figures[i].verticesPerRow|0;count+=(rows-1)*(figures[i].verticesPerRow-1)*6;break;case'triangles':count+=figures[i].coords.length;break;}}var coords=new Float32Array(count*2);var colors=new Uint8Array(count*3);var coordsMap=context.coords,colorsMap=context.colors;var pIndex=0,cIndex=0;for(i=0,ii=figures.length;i<ii;i++){var figure=figures[i],ps=figure.coords,cs=figure.colors;switch(figure.type){case'lattice':var cols=figure.verticesPerRow;rows=ps.length/cols|0;for(var row=1;row<rows;row++){var offset=row*cols+1;for(var col=1;col<cols;col++,offset++){coords[pIndex]=coordsMap[ps[offset-cols-1]];coords[pIndex+1]=coordsMap[ps[offset-cols-1]+1];coords[pIndex+2]=coordsMap[ps[offset-cols]];coords[pIndex+3]=coordsMap[ps[offset-cols]+1];coords[pIndex+4]=coordsMap[ps[offset-1]];coords[pIndex+5]=coordsMap[ps[offset-1]+1];colors[cIndex]=colorsMap[cs[offset-cols-1]];colors[cIndex+1]=colorsMap[cs[offset-cols-1]+1];colors[cIndex+2]=colorsMap[cs[offset-cols-1]+2];colors[cIndex+3]=colorsMap[cs[offset-cols]];colors[cIndex+4]=colorsMap[cs[offset-cols]+1];colors[cIndex+5]=colorsMap[cs[offset-cols]+2];colors[cIndex+6]=colorsMap[cs[offset-1]];colors[cIndex+7]=colorsMap[cs[offset-1]+1];colors[cIndex+8]=colorsMap[cs[offset-1]+2];coords[pIndex+6]=coords[pIndex+2];coords[pIndex+7]=coords[pIndex+3];coords[pIndex+8]=coords[pIndex+4];coords[pIndex+9]=coords[pIndex+5];coords[pIndex+10]=coordsMap[ps[offset]];coords[pIndex+11]=coordsMap[ps[offset]+1];colors[cIndex+9]=colors[cIndex+3];colors[cIndex+10]=colors[cIndex+4];colors[cIndex+11]=colors[cIndex+5];colors[cIndex+12]=colors[cIndex+6];colors[cIndex+13]=colors[cIndex+7];colors[cIndex+14]=colors[cIndex+8];colors[cIndex+15]=colorsMap[cs[offset]];colors[cIndex+16]=colorsMap[cs[offset]+1];colors[cIndex+17]=colorsMap[cs[offset]+2];pIndex+=12;cIndex+=18;}}break;case'triangles':for(var j=0,jj=ps.length;j<jj;j++){coords[pIndex]=coordsMap[ps[j]];coords[pIndex+1]=coordsMap[ps[j]+1];colors[cIndex]=colorsMap[cs[j]];colors[cIndex+1]=colorsMap[cs[j]+1];colors[cIndex+2]=colorsMap[cs[j]+2];pIndex+=2;cIndex+=3;}break;}}if(backgroundColor){gl.clearColor(backgroundColor[0]/255,backgroundColor[1]/255,backgroundColor[2]/255,1.0);}else{gl.clearColor(0,0,0,0);}gl.clear(gl.COLOR_BUFFER_BIT);var coordsBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,coordsBuffer);gl.bufferData(gl.ARRAY_BUFFER,coords,gl.STATIC_DRAW);gl.enableVertexAttribArray(cache.positionLocation);gl.vertexAttribPointer(cache.positionLocation,2,gl.FLOAT,false,0,0);var colorsBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,colorsBuffer);gl.bufferData(gl.ARRAY_BUFFER,colors,gl.STATIC_DRAW);gl.enableVertexAttribArray(cache.colorLocation);gl.vertexAttribPointer(cache.colorLocation,3,gl.UNSIGNED_BYTE,false,0,0);gl.uniform2f(cache.scaleLocation,context.scaleX,context.scaleY);gl.uniform2f(cache.offsetLocation,context.offsetX,context.offsetY);gl.drawArrays(gl.TRIANGLES,0,count);gl.flush();gl.deleteBuffer(coordsBuffer);gl.deleteBuffer(colorsBuffer);return canvas;}return{tryInitGL:function tryInitGL(){try{generateGL();return!!currentGL;}catch(ex){}return false;},composeSMask:composeSMask,drawFigures:drawFigures,cleanup:function cleanup(){if(smaskCache&&smaskCache.canvas){smaskCache.canvas.width=0;smaskCache.canvas.height=0;}if(figuresCache&&figuresCache.canvas){figuresCache.canvas.width=0;figuresCache.canvas.height=0;}smaskCache=null;figuresCache=null;}};}();/***/},/* 194 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.renderTextLayer=void 0;var _util=__w_pdfjs_require__(1);var _global_scope=_interopRequireDefault(__w_pdfjs_require__(3));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var renderTextLayer=function renderTextLayerClosure(){var MAX_TEXT_DIVS_TO_RENDER=100000;var NonWhitespaceRegexp=/\S/;function isAllWhitespace(str){return!NonWhitespaceRegexp.test(str);}function appendText(task,geom,styles){var textDiv=document.createElement('span');var textDivProperties={angle:0,canvasWidth:0,isWhitespace:false,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1};task._textDivs.push(textDiv);if(isAllWhitespace(geom.str)){textDivProperties.isWhitespace=true;task._textDivProperties.set(textDiv,textDivProperties);return;}var tx=_util.Util.transform(task._viewport.transform,geom.transform);var angle=Math.atan2(tx[1],tx[0]);var style=styles[geom.fontName];if(style.vertical){angle+=Math.PI/2;}var fontHeight=Math.sqrt(tx[2]*tx[2]+tx[3]*tx[3]);var fontAscent=fontHeight;if(style.ascent){fontAscent=style.ascent*fontAscent;}else if(style.descent){fontAscent=(1+style.descent)*fontAscent;}var left,top;if(angle===0){left=tx[4];top=tx[5]-fontAscent;}else{left=tx[4]+fontAscent*Math.sin(angle);top=tx[5]-fontAscent*Math.cos(angle);}textDiv.style.left="".concat(left,"px");textDiv.style.top="".concat(top,"px");textDiv.style.fontSize="".concat(fontHeight,"px");textDiv.style.fontFamily=style.fontFamily;textDiv.textContent=geom.str;if(task._fontInspectorEnabled){textDiv.dataset.fontName=geom.fontName;}if(angle!==0){textDivProperties.angle=angle*(180/Math.PI);}if(geom.str.length>1){if(style.vertical){textDivProperties.canvasWidth=geom.height*task._viewport.scale;}else{textDivProperties.canvasWidth=geom.width*task._viewport.scale;}}task._textDivProperties.set(textDiv,textDivProperties);if(task._textContentStream){task._layoutText(textDiv);}if(task._enhanceTextSelection){var angleCos=1,angleSin=0;if(angle!==0){angleCos=Math.cos(angle);angleSin=Math.sin(angle);}var divWidth=(style.vertical?geom.height:geom.width)*task._viewport.scale;var divHeight=fontHeight;var m,b;if(angle!==0){m=[angleCos,angleSin,-angleSin,angleCos,left,top];b=_util.Util.getAxialAlignedBoundingBox([0,0,divWidth,divHeight],m);}else{b=[left,top,left+divWidth,top+divHeight];}task._bounds.push({left:b[0],top:b[1],right:b[2],bottom:b[3],div:textDiv,size:[divWidth,divHeight],m:m});}}function render(task){if(task._canceled){return;}var textDivs=task._textDivs;var capability=task._capability;var textDivsLength=textDivs.length;if(textDivsLength>MAX_TEXT_DIVS_TO_RENDER){task._renderingDone=true;capability.resolve();return;}if(!task._textContentStream){for(var i=0;i<textDivsLength;i++){task._layoutText(textDivs[i]);}}task._renderingDone=true;capability.resolve();}function expand(task){var bounds=task._bounds;var viewport=task._viewport;var expanded=expandBounds(viewport.width,viewport.height,bounds);for(var i=0;i<expanded.length;i++){var div=bounds[i].div;var divProperties=task._textDivProperties.get(div);if(divProperties.angle===0){divProperties.paddingLeft=bounds[i].left-expanded[i].left;divProperties.paddingTop=bounds[i].top-expanded[i].top;divProperties.paddingRight=expanded[i].right-bounds[i].right;divProperties.paddingBottom=expanded[i].bottom-bounds[i].bottom;task._textDivProperties.set(div,divProperties);continue;}var e=expanded[i],b=bounds[i];var m=b.m,c=m[0],s=m[1];var points=[[0,0],[0,b.size[1]],[b.size[0],0],b.size];var ts=new Float64Array(64);points.forEach(function(p,i){var t=_util.Util.applyTransform(p,m);ts[i+0]=c&&(e.left-t[0])/c;ts[i+4]=s&&(e.top-t[1])/s;ts[i+8]=c&&(e.right-t[0])/c;ts[i+12]=s&&(e.bottom-t[1])/s;ts[i+16]=s&&(e.left-t[0])/-s;ts[i+20]=c&&(e.top-t[1])/c;ts[i+24]=s&&(e.right-t[0])/-s;ts[i+28]=c&&(e.bottom-t[1])/c;ts[i+32]=c&&(e.left-t[0])/-c;ts[i+36]=s&&(e.top-t[1])/-s;ts[i+40]=c&&(e.right-t[0])/-c;ts[i+44]=s&&(e.bottom-t[1])/-s;ts[i+48]=s&&(e.left-t[0])/s;ts[i+52]=c&&(e.top-t[1])/-c;ts[i+56]=s&&(e.right-t[0])/s;ts[i+60]=c&&(e.bottom-t[1])/-c;});var findPositiveMin=function findPositiveMin(ts,offset,count){var result=0;for(var i=0;i<count;i++){var t=ts[offset++];if(t>0){result=result?Math.min(t,result):t;}}return result;};var boxScale=1+Math.min(Math.abs(c),Math.abs(s));divProperties.paddingLeft=findPositiveMin(ts,32,16)/boxScale;divProperties.paddingTop=findPositiveMin(ts,48,16)/boxScale;divProperties.paddingRight=findPositiveMin(ts,0,16)/boxScale;divProperties.paddingBottom=findPositiveMin(ts,16,16)/boxScale;task._textDivProperties.set(div,divProperties);}}function expandBounds(width,height,boxes){var bounds=boxes.map(function(box,i){return{x1:box.left,y1:box.top,x2:box.right,y2:box.bottom,index:i,x1New:undefined,x2New:undefined};});expandBoundsLTR(width,bounds);var expanded=new Array(boxes.length);bounds.forEach(function(b){var i=b.index;expanded[i]={left:b.x1New,top:0,right:b.x2New,bottom:0};});boxes.map(function(box,i){var e=expanded[i],b=bounds[i];b.x1=box.top;b.y1=width-e.right;b.x2=box.bottom;b.y2=width-e.left;b.index=i;b.x1New=undefined;b.x2New=undefined;});expandBoundsLTR(height,bounds);bounds.forEach(function(b){var i=b.index;expanded[i].top=b.x1New;expanded[i].bottom=b.x2New;});return expanded;}function expandBoundsLTR(width,bounds){bounds.sort(function(a,b){return a.x1-b.x1||a.index-b.index;});var fakeBoundary={x1:-Infinity,y1:-Infinity,x2:0,y2:Infinity,index:-1,x1New:0,x2New:0};var horizon=[{start:-Infinity,end:Infinity,boundary:fakeBoundary}];bounds.forEach(function(boundary){var i=0;while(i<horizon.length&&horizon[i].end<=boundary.y1){i++;}var j=horizon.length-1;while(j>=0&&horizon[j].start>=boundary.y2){j--;}var horizonPart,affectedBoundary;var q,k,maxXNew=-Infinity;for(q=i;q<=j;q++){horizonPart=horizon[q];affectedBoundary=horizonPart.boundary;var xNew;if(affectedBoundary.x2>boundary.x1){xNew=affectedBoundary.index>boundary.index?affectedBoundary.x1New:boundary.x1;}else if(affectedBoundary.x2New===undefined){xNew=(affectedBoundary.x2+boundary.x1)/2;}else{xNew=affectedBoundary.x2New;}if(xNew>maxXNew){maxXNew=xNew;}}boundary.x1New=maxXNew;for(q=i;q<=j;q++){horizonPart=horizon[q];affectedBoundary=horizonPart.boundary;if(affectedBoundary.x2New===undefined){if(affectedBoundary.x2>boundary.x1){if(affectedBoundary.index>boundary.index){affectedBoundary.x2New=affectedBoundary.x2;}}else{affectedBoundary.x2New=maxXNew;}}else if(affectedBoundary.x2New>maxXNew){affectedBoundary.x2New=Math.max(maxXNew,affectedBoundary.x2);}}var changedHorizon=[],lastBoundary=null;for(q=i;q<=j;q++){horizonPart=horizon[q];affectedBoundary=horizonPart.boundary;var useBoundary=affectedBoundary.x2>boundary.x2?affectedBoundary:boundary;if(lastBoundary===useBoundary){changedHorizon[changedHorizon.length-1].end=horizonPart.end;}else{changedHorizon.push({start:horizonPart.start,end:horizonPart.end,boundary:useBoundary});lastBoundary=useBoundary;}}if(horizon[i].start<boundary.y1){changedHorizon[0].start=boundary.y1;changedHorizon.unshift({start:horizon[i].start,end:boundary.y1,boundary:horizon[i].boundary});}if(boundary.y2<horizon[j].end){changedHorizon[changedHorizon.length-1].end=boundary.y2;changedHorizon.push({start:boundary.y2,end:horizon[j].end,boundary:horizon[j].boundary});}for(q=i;q<=j;q++){horizonPart=horizon[q];affectedBoundary=horizonPart.boundary;if(affectedBoundary.x2New!==undefined){continue;}var used=false;for(k=i-1;!used&&k>=0&&horizon[k].start>=affectedBoundary.y1;k--){used=horizon[k].boundary===affectedBoundary;}for(k=j+1;!used&&k<horizon.length&&horizon[k].end<=affectedBoundary.y2;k++){used=horizon[k].boundary===affectedBoundary;}for(k=0;!used&&k<changedHorizon.length;k++){used=changedHorizon[k].boundary===affectedBoundary;}if(!used){affectedBoundary.x2New=maxXNew;}}Array.prototype.splice.apply(horizon,[i,j-i+1].concat(changedHorizon));});horizon.forEach(function(horizonPart){var affectedBoundary=horizonPart.boundary;if(affectedBoundary.x2New===undefined){affectedBoundary.x2New=Math.max(width,affectedBoundary.x2);}});}function TextLayerRenderTask(_ref){var _this=this;var textContent=_ref.textContent,textContentStream=_ref.textContentStream,container=_ref.container,viewport=_ref.viewport,textDivs=_ref.textDivs,textContentItemsStr=_ref.textContentItemsStr,enhanceTextSelection=_ref.enhanceTextSelection;this._textContent=textContent;this._textContentStream=textContentStream;this._container=container;this._viewport=viewport;this._textDivs=textDivs||[];this._textContentItemsStr=textContentItemsStr||[];this._enhanceTextSelection=!!enhanceTextSelection;this._fontInspectorEnabled=!!(_global_scope["default"].FontInspector&&_global_scope["default"].FontInspector.enabled);this._reader=null;this._layoutTextLastFontSize=null;this._layoutTextLastFontFamily=null;this._layoutTextCtx=null;this._textDivProperties=new WeakMap();this._renderingDone=false;this._canceled=false;this._capability=(0,_util.createPromiseCapability)();this._renderTimer=null;this._bounds=[];this._capability.promise["finally"](function(){if(_this._layoutTextCtx){_this._layoutTextCtx.canvas.width=0;_this._layoutTextCtx.canvas.height=0;_this._layoutTextCtx=null;}})["catch"](function(){});}TextLayerRenderTask.prototype={get promise(){return this._capability.promise;},cancel:function TextLayer_cancel(){this._canceled=true;if(this._reader){this._reader.cancel(new _util.AbortException('TextLayer task cancelled.'));this._reader=null;}if(this._renderTimer!==null){clearTimeout(this._renderTimer);this._renderTimer=null;}this._capability.reject(new Error('TextLayer task cancelled.'));},_processItems:function _processItems(items,styleCache){for(var i=0,len=items.length;i<len;i++){this._textContentItemsStr.push(items[i].str);appendText(this,items[i],styleCache);}},_layoutText:function _layoutText(textDiv){var textDivProperties=this._textDivProperties.get(textDiv);if(textDivProperties.isWhitespace){return;}var transform='';if(textDivProperties.canvasWidth!==0){var _textDiv$style=textDiv.style,fontSize=_textDiv$style.fontSize,fontFamily=_textDiv$style.fontFamily;if(fontSize!==this._layoutTextLastFontSize||fontFamily!==this._layoutTextLastFontFamily){this._layoutTextCtx.font="".concat(fontSize," ").concat(fontFamily);this._layoutTextLastFontSize=fontSize;this._layoutTextLastFontFamily=fontFamily;}var _this$_layoutTextCtx$=this._layoutTextCtx.measureText(textDiv.textContent),width=_this$_layoutTextCtx$.width;if(width>0){textDivProperties.scale=textDivProperties.canvasWidth/width;transform="scaleX(".concat(textDivProperties.scale,")");}}if(textDivProperties.angle!==0){transform="rotate(".concat(textDivProperties.angle,"deg) ").concat(transform);}if(transform.length>0){if(this._enhanceTextSelection){textDivProperties.originalTransform=transform;}textDiv.style.transform=transform;}this._textDivProperties.set(textDiv,textDivProperties);this._container.appendChild(textDiv);},_render:function TextLayer_render(timeout){var _this2=this;var capability=(0,_util.createPromiseCapability)();var styleCache=Object.create(null);var canvas=document.createElement('canvas');canvas.mozOpaque=true;this._layoutTextCtx=canvas.getContext('2d',{alpha:false});if(this._textContent){var textItems=this._textContent.items;var textStyles=this._textContent.styles;this._processItems(textItems,textStyles);capability.resolve();}else if(this._textContentStream){var pump=function pump(){_this2._reader.read().then(function(_ref2){var value=_ref2.value,done=_ref2.done;if(done){capability.resolve();return;}Object.assign(styleCache,value.styles);_this2._processItems(value.items,styleCache);pump();},capability.reject);};this._reader=this._textContentStream.getReader();pump();}else{throw new Error('Neither "textContent" nor "textContentStream"'+' parameters specified.');}capability.promise.then(function(){styleCache=null;if(!timeout){render(_this2);}else{_this2._renderTimer=setTimeout(function(){render(_this2);_this2._renderTimer=null;},timeout);}},this._capability.reject);},expandTextDivs:function TextLayer_expandTextDivs(expandDivs){if(!this._enhanceTextSelection||!this._renderingDone){return;}if(this._bounds!==null){expand(this);this._bounds=null;}var NO_PADDING='0 0 0 0';var transformBuf=[],paddingBuf=[];for(var i=0,ii=this._textDivs.length;i<ii;i++){var div=this._textDivs[i];var divProps=this._textDivProperties.get(div);if(divProps.isWhitespace){continue;}if(expandDivs){transformBuf.length=0;paddingBuf.length=0;if(divProps.originalTransform){transformBuf.push(divProps.originalTransform);}if(divProps.paddingTop>0){paddingBuf.push("".concat(divProps.paddingTop,"px"));transformBuf.push("translateY(".concat(-divProps.paddingTop,"px)"));}else{paddingBuf.push(0);}if(divProps.paddingRight>0){paddingBuf.push("".concat(divProps.paddingRight/divProps.scale,"px"));}else{paddingBuf.push(0);}if(divProps.paddingBottom>0){paddingBuf.push("".concat(divProps.paddingBottom,"px"));}else{paddingBuf.push(0);}if(divProps.paddingLeft>0){paddingBuf.push("".concat(divProps.paddingLeft/divProps.scale,"px"));transformBuf.push("translateX(".concat(-divProps.paddingLeft/divProps.scale,"px)"));}else{paddingBuf.push(0);}var padding=paddingBuf.join(' ');if(padding!==NO_PADDING){div.style.padding=padding;}if(transformBuf.length){div.style.transform=transformBuf.join(' ');}}else{div.style.padding=null;div.style.transform=divProps.originalTransform;}}}};function renderTextLayer(renderParameters){var task=new TextLayerRenderTask({textContent:renderParameters.textContent,textContentStream:renderParameters.textContentStream,container:renderParameters.container,viewport:renderParameters.viewport,textDivs:renderParameters.textDivs,textContentItemsStr:renderParameters.textContentItemsStr,enhanceTextSelection:renderParameters.enhanceTextSelection});task._render(renderParameters.timeout);return task;}return renderTextLayer;}();exports.renderTextLayer=renderTextLayer;/***/},/* 195 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.AnnotationLayer=void 0;var _display_utils=__w_pdfjs_require__(183);var _util=__w_pdfjs_require__(1);function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return _typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var AnnotationElementFactory=/*#__PURE__*/function(){function AnnotationElementFactory(){_classCallCheck(this,AnnotationElementFactory);}_createClass(AnnotationElementFactory,null,[{key:"create",value:function create(parameters){var subtype=parameters.data.annotationType;switch(subtype){case _util.AnnotationType.LINK:return new LinkAnnotationElement(parameters);case _util.AnnotationType.TEXT:return new TextAnnotationElement(parameters);case _util.AnnotationType.WIDGET:var fieldType=parameters.data.fieldType;switch(fieldType){case'Tx':return new TextWidgetAnnotationElement(parameters);case'Btn':if(parameters.data.radioButton){return new RadioButtonWidgetAnnotationElement(parameters);}else if(parameters.data.checkBox){return new CheckboxWidgetAnnotationElement(parameters);}return new PushButtonWidgetAnnotationElement(parameters);case'Ch':return new ChoiceWidgetAnnotationElement(parameters);}return new WidgetAnnotationElement(parameters);case _util.AnnotationType.POPUP:return new PopupAnnotationElement(parameters);case _util.AnnotationType.FREETEXT:return new FreeTextAnnotationElement(parameters);case _util.AnnotationType.LINE:return new LineAnnotationElement(parameters);case _util.AnnotationType.SQUARE:return new SquareAnnotationElement(parameters);case _util.AnnotationType.CIRCLE:return new CircleAnnotationElement(parameters);case _util.AnnotationType.POLYLINE:return new PolylineAnnotationElement(parameters);case _util.AnnotationType.CARET:return new CaretAnnotationElement(parameters);case _util.AnnotationType.INK:return new InkAnnotationElement(parameters);case _util.AnnotationType.POLYGON:return new PolygonAnnotationElement(parameters);case _util.AnnotationType.HIGHLIGHT:return new HighlightAnnotationElement(parameters);case _util.AnnotationType.UNDERLINE:return new UnderlineAnnotationElement(parameters);case _util.AnnotationType.SQUIGGLY:return new SquigglyAnnotationElement(parameters);case _util.AnnotationType.STRIKEOUT:return new StrikeOutAnnotationElement(parameters);case _util.AnnotationType.STAMP:return new StampAnnotationElement(parameters);case _util.AnnotationType.FILEATTACHMENT:return new FileAttachmentAnnotationElement(parameters);default:return new AnnotationElement(parameters);}}}]);return AnnotationElementFactory;}();var AnnotationElement=/*#__PURE__*/function(){function AnnotationElement(parameters){var isRenderable=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var ignoreBorder=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;_classCallCheck(this,AnnotationElement);this.isRenderable=isRenderable;this.data=parameters.data;this.layer=parameters.layer;this.page=parameters.page;this.viewport=parameters.viewport;this.linkService=parameters.linkService;this.downloadManager=parameters.downloadManager;this.imageResourcesPath=parameters.imageResourcesPath;this.renderInteractiveForms=parameters.renderInteractiveForms;this.svgFactory=parameters.svgFactory;if(isRenderable){this.container=this._createContainer(ignoreBorder);}}_createClass(AnnotationElement,[{key:"_createContainer",value:function _createContainer(){var ignoreBorder=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var data=this.data,page=this.page,viewport=this.viewport;var container=document.createElement('section');var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];container.setAttribute('data-annotation-id',data.id);var rect=_util.Util.normalizeRect([data.rect[0],page.view[3]-data.rect[1]+page.view[1],data.rect[2],page.view[3]-data.rect[3]+page.view[1]]);container.style.transform="matrix(".concat(viewport.transform.join(','),")");container.style.transformOrigin="-".concat(rect[0],"px -").concat(rect[1],"px");if(!ignoreBorder&&data.borderStyle.width>0){container.style.borderWidth="".concat(data.borderStyle.width,"px");if(data.borderStyle.style!==_util.AnnotationBorderStyleType.UNDERLINE){width=width-2*data.borderStyle.width;height=height-2*data.borderStyle.width;}var horizontalRadius=data.borderStyle.horizontalCornerRadius;var verticalRadius=data.borderStyle.verticalCornerRadius;if(horizontalRadius>0||verticalRadius>0){var radius="".concat(horizontalRadius,"px / ").concat(verticalRadius,"px");container.style.borderRadius=radius;}switch(data.borderStyle.style){case _util.AnnotationBorderStyleType.SOLID:container.style.borderStyle='solid';break;case _util.AnnotationBorderStyleType.DASHED:container.style.borderStyle='dashed';break;case _util.AnnotationBorderStyleType.BEVELED:(0,_util.warn)('Unimplemented border style: beveled');break;case _util.AnnotationBorderStyleType.INSET:(0,_util.warn)('Unimplemented border style: inset');break;case _util.AnnotationBorderStyleType.UNDERLINE:container.style.borderBottomStyle='solid';break;default:break;}if(data.color){container.style.borderColor=_util.Util.makeCssRgb(data.color[0]|0,data.color[1]|0,data.color[2]|0);}else{container.style.borderWidth=0;}}container.style.left="".concat(rect[0],"px");container.style.top="".concat(rect[1],"px");container.style.width="".concat(width,"px");container.style.height="".concat(height,"px");return container;}},{key:"_createPopup",value:function _createPopup(container,trigger,data){if(!trigger){trigger=document.createElement('div');trigger.style.height=container.style.height;trigger.style.width=container.style.width;container.appendChild(trigger);}var popupElement=new PopupElement({container:container,trigger:trigger,color:data.color,title:data.title,modificationDate:data.modificationDate,contents:data.contents,hideWrapper:true});var popup=popupElement.render();popup.style.left=container.style.width;container.appendChild(popup);}},{key:"render",value:function render(){(0,_util.unreachable)('Abstract method `AnnotationElement.render` called');}}]);return AnnotationElement;}();var LinkAnnotationElement=/*#__PURE__*/function(_AnnotationElement){_inherits(LinkAnnotationElement,_AnnotationElement);function LinkAnnotationElement(parameters){_classCallCheck(this,LinkAnnotationElement);var isRenderable=!!(parameters.data.url||parameters.data.dest||parameters.data.action);return _possibleConstructorReturn(this,_getPrototypeOf(LinkAnnotationElement).call(this,parameters,isRenderable));}_createClass(LinkAnnotationElement,[{key:"render",value:function render(){this.container.className='linkAnnotation';var data=this.data,linkService=this.linkService;var link=document.createElement('a');if(data.url){(0,_display_utils.addLinkAttributes)(link,{url:data.url,target:data.newWindow?_display_utils.LinkTarget.BLANK:linkService.externalLinkTarget,rel:linkService.externalLinkRel,enabled:linkService.externalLinkEnabled});}else if(data.action){this._bindNamedAction(link,data.action);}else{this._bindLink(link,data.dest);}this.container.appendChild(link);return this.container;}},{key:"_bindLink",value:function _bindLink(link,destination){var _this=this;link.href=this.linkService.getDestinationHash(destination);link.onclick=function(){if(destination){_this.linkService.navigateTo(destination);}return false;};if(destination){link.className='internalLink';}}},{key:"_bindNamedAction",value:function _bindNamedAction(link,action){var _this2=this;link.href=this.linkService.getAnchorUrl('');link.onclick=function(){_this2.linkService.executeNamedAction(action);return false;};link.className='internalLink';}}]);return LinkAnnotationElement;}(AnnotationElement);var TextAnnotationElement=/*#__PURE__*/function(_AnnotationElement2){_inherits(TextAnnotationElement,_AnnotationElement2);function TextAnnotationElement(parameters){_classCallCheck(this,TextAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(TextAnnotationElement).call(this,parameters,isRenderable));}_createClass(TextAnnotationElement,[{key:"render",value:function render(){this.container.className='textAnnotation';var image=document.createElement('img');image.style.height=this.container.style.height;image.style.width=this.container.style.width;image.src=this.imageResourcesPath+'annotation-'+this.data.name.toLowerCase()+'.svg';image.alt='[{{type}} Annotation]';image.dataset.l10nId='text_annotation_type';image.dataset.l10nArgs=JSON.stringify({type:this.data.name});if(!this.data.hasPopup){this._createPopup(this.container,image,this.data);}this.container.appendChild(image);return this.container;}}]);return TextAnnotationElement;}(AnnotationElement);var WidgetAnnotationElement=/*#__PURE__*/function(_AnnotationElement3){_inherits(WidgetAnnotationElement,_AnnotationElement3);function WidgetAnnotationElement(){_classCallCheck(this,WidgetAnnotationElement);return _possibleConstructorReturn(this,_getPrototypeOf(WidgetAnnotationElement).apply(this,arguments));}_createClass(WidgetAnnotationElement,[{key:"render",value:function render(){return this.container;}}]);return WidgetAnnotationElement;}(AnnotationElement);var TextWidgetAnnotationElement=/*#__PURE__*/function(_WidgetAnnotationElem){_inherits(TextWidgetAnnotationElement,_WidgetAnnotationElem);function TextWidgetAnnotationElement(parameters){_classCallCheck(this,TextWidgetAnnotationElement);var isRenderable=parameters.renderInteractiveForms||!parameters.data.hasAppearance&&!!parameters.data.fieldValue;return _possibleConstructorReturn(this,_getPrototypeOf(TextWidgetAnnotationElement).call(this,parameters,isRenderable));}_createClass(TextWidgetAnnotationElement,[{key:"render",value:function render(){var TEXT_ALIGNMENT=['left','center','right'];this.container.className='textWidgetAnnotation';var element=null;if(this.renderInteractiveForms){if(this.data.multiLine){element=document.createElement('textarea');element.textContent=this.data.fieldValue;}else{element=document.createElement('input');element.type='text';element.setAttribute('value',this.data.fieldValue);}element.disabled=this.data.readOnly;if(this.data.maxLen!==null){element.maxLength=this.data.maxLen;}if(this.data.comb){var fieldWidth=this.data.rect[2]-this.data.rect[0];var combWidth=fieldWidth/this.data.maxLen;element.classList.add('comb');element.style.letterSpacing="calc(".concat(combWidth,"px - 1ch)");}}else{element=document.createElement('div');element.textContent=this.data.fieldValue;element.style.verticalAlign='middle';element.style.display='table-cell';var font=null;if(this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)){font=this.page.commonObjs.get(this.data.fontRefName);}this._setTextStyle(element,font);}if(this.data.textAlignment!==null){element.style.textAlign=TEXT_ALIGNMENT[this.data.textAlignment];}this.container.appendChild(element);return this.container;}},{key:"_setTextStyle",value:function _setTextStyle(element,font){var style=element.style;style.fontSize="".concat(this.data.fontSize,"px");style.direction=this.data.fontDirection<0?'rtl':'ltr';if(!font){return;}style.fontWeight=font.black?font.bold?'900':'bold':font.bold?'bold':'normal';style.fontStyle=font.italic?'italic':'normal';var fontFamily=font.loadedName?"\"".concat(font.loadedName,"\", "):'';var fallbackName=font.fallbackName||'Helvetica, sans-serif';style.fontFamily=fontFamily+fallbackName;}}]);return TextWidgetAnnotationElement;}(WidgetAnnotationElement);var CheckboxWidgetAnnotationElement=/*#__PURE__*/function(_WidgetAnnotationElem2){_inherits(CheckboxWidgetAnnotationElement,_WidgetAnnotationElem2);function CheckboxWidgetAnnotationElement(parameters){_classCallCheck(this,CheckboxWidgetAnnotationElement);return _possibleConstructorReturn(this,_getPrototypeOf(CheckboxWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms));}_createClass(CheckboxWidgetAnnotationElement,[{key:"render",value:function render(){this.container.className='buttonWidgetAnnotation checkBox';var element=document.createElement('input');element.disabled=this.data.readOnly;element.type='checkbox';if(this.data.fieldValue&&this.data.fieldValue!=='Off'){element.setAttribute('checked',true);}this.container.appendChild(element);return this.container;}}]);return CheckboxWidgetAnnotationElement;}(WidgetAnnotationElement);var RadioButtonWidgetAnnotationElement=/*#__PURE__*/function(_WidgetAnnotationElem3){_inherits(RadioButtonWidgetAnnotationElement,_WidgetAnnotationElem3);function RadioButtonWidgetAnnotationElement(parameters){_classCallCheck(this,RadioButtonWidgetAnnotationElement);return _possibleConstructorReturn(this,_getPrototypeOf(RadioButtonWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms));}_createClass(RadioButtonWidgetAnnotationElement,[{key:"render",value:function render(){this.container.className='buttonWidgetAnnotation radioButton';var element=document.createElement('input');element.disabled=this.data.readOnly;element.type='radio';element.name=this.data.fieldName;if(this.data.fieldValue===this.data.buttonValue){element.setAttribute('checked',true);}this.container.appendChild(element);return this.container;}}]);return RadioButtonWidgetAnnotationElement;}(WidgetAnnotationElement);var PushButtonWidgetAnnotationElement=/*#__PURE__*/function(_LinkAnnotationElemen){_inherits(PushButtonWidgetAnnotationElement,_LinkAnnotationElemen);function PushButtonWidgetAnnotationElement(){_classCallCheck(this,PushButtonWidgetAnnotationElement);return _possibleConstructorReturn(this,_getPrototypeOf(PushButtonWidgetAnnotationElement).apply(this,arguments));}_createClass(PushButtonWidgetAnnotationElement,[{key:"render",value:function render(){var container=_get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype),"render",this).call(this);container.className='buttonWidgetAnnotation pushButton';return container;}}]);return PushButtonWidgetAnnotationElement;}(LinkAnnotationElement);var ChoiceWidgetAnnotationElement=/*#__PURE__*/function(_WidgetAnnotationElem4){_inherits(ChoiceWidgetAnnotationElement,_WidgetAnnotationElem4);function ChoiceWidgetAnnotationElement(parameters){_classCallCheck(this,ChoiceWidgetAnnotationElement);return _possibleConstructorReturn(this,_getPrototypeOf(ChoiceWidgetAnnotationElement).call(this,parameters,parameters.renderInteractiveForms));}_createClass(ChoiceWidgetAnnotationElement,[{key:"render",value:function render(){this.container.className='choiceWidgetAnnotation';var selectElement=document.createElement('select');selectElement.disabled=this.data.readOnly;if(!this.data.combo){selectElement.size=this.data.options.length;if(this.data.multiSelect){selectElement.multiple=true;}}var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.data.options[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var option=_step.value;var optionElement=document.createElement('option');optionElement.textContent=option.displayValue;optionElement.value=option.exportValue;if(this.data.fieldValue.includes(option.displayValue)){optionElement.setAttribute('selected',true);}selectElement.appendChild(optionElement);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator["return"]!=null){_iterator["return"]();}}finally{if(_didIteratorError){throw _iteratorError;}}}this.container.appendChild(selectElement);return this.container;}}]);return ChoiceWidgetAnnotationElement;}(WidgetAnnotationElement);var PopupAnnotationElement=/*#__PURE__*/function(_AnnotationElement4){_inherits(PopupAnnotationElement,_AnnotationElement4);function PopupAnnotationElement(parameters){_classCallCheck(this,PopupAnnotationElement);var isRenderable=!!(parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(PopupAnnotationElement).call(this,parameters,isRenderable));}_createClass(PopupAnnotationElement,[{key:"render",value:function render(){var IGNORE_TYPES=['Line','Square','Circle','PolyLine','Polygon','Ink'];this.container.className='popupAnnotation';if(IGNORE_TYPES.includes(this.data.parentType)){return this.container;}var selector="[data-annotation-id=\"".concat(this.data.parentId,"\"]");var parentElement=this.layer.querySelector(selector);if(!parentElement){return this.container;}var popup=new PopupElement({container:this.container,trigger:parentElement,color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents});var parentLeft=parseFloat(parentElement.style.left);var parentWidth=parseFloat(parentElement.style.width);this.container.style.transformOrigin="-".concat(parentLeft+parentWidth,"px -").concat(parentElement.style.top);this.container.style.left="".concat(parentLeft+parentWidth,"px");this.container.appendChild(popup.render());return this.container;}}]);return PopupAnnotationElement;}(AnnotationElement);var PopupElement=/*#__PURE__*/function(){function PopupElement(parameters){_classCallCheck(this,PopupElement);this.container=parameters.container;this.trigger=parameters.trigger;this.color=parameters.color;this.title=parameters.title;this.modificationDate=parameters.modificationDate;this.contents=parameters.contents;this.hideWrapper=parameters.hideWrapper||false;this.pinned=false;}_createClass(PopupElement,[{key:"render",value:function render(){var BACKGROUND_ENLIGHT=0.7;var wrapper=document.createElement('div');wrapper.className='popupWrapper';this.hideElement=this.hideWrapper?wrapper:this.container;this.hideElement.setAttribute('hidden',true);var popup=document.createElement('div');popup.className='popup';var color=this.color;if(color){var r=BACKGROUND_ENLIGHT*(255-color[0])+color[0];var g=BACKGROUND_ENLIGHT*(255-color[1])+color[1];var b=BACKGROUND_ENLIGHT*(255-color[2])+color[2];popup.style.backgroundColor=_util.Util.makeCssRgb(r|0,g|0,b|0);}var title=document.createElement('h1');title.textContent=this.title;popup.appendChild(title);var dateObject=_display_utils.PDFDateString.toDateObject(this.modificationDate);if(dateObject){var modificationDate=document.createElement('span');modificationDate.textContent='{{date}}, {{time}}';modificationDate.dataset.l10nId='annotation_date_string';modificationDate.dataset.l10nArgs=JSON.stringify({date:dateObject.toLocaleDateString(),time:dateObject.toLocaleTimeString()});popup.appendChild(modificationDate);}var contents=this._formatContents(this.contents);popup.appendChild(contents);this.trigger.addEventListener('click',this._toggle.bind(this));this.trigger.addEventListener('mouseover',this._show.bind(this,false));this.trigger.addEventListener('mouseout',this._hide.bind(this,false));popup.addEventListener('click',this._hide.bind(this,true));wrapper.appendChild(popup);return wrapper;}},{key:"_formatContents",value:function _formatContents(contents){var p=document.createElement('p');var lines=contents.split(/(?:\r\n?|\n)/);for(var i=0,ii=lines.length;i<ii;++i){var line=lines[i];p.appendChild(document.createTextNode(line));if(i<ii-1){p.appendChild(document.createElement('br'));}}return p;}},{key:"_toggle",value:function _toggle(){if(this.pinned){this._hide(true);}else{this._show(true);}}},{key:"_show",value:function _show(){var pin=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(pin){this.pinned=true;}if(this.hideElement.hasAttribute('hidden')){this.hideElement.removeAttribute('hidden');this.container.style.zIndex+=1;}}},{key:"_hide",value:function _hide(){var unpin=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(unpin){this.pinned=false;}if(!this.hideElement.hasAttribute('hidden')&&!this.pinned){this.hideElement.setAttribute('hidden',true);this.container.style.zIndex-=1;}}}]);return PopupElement;}();var FreeTextAnnotationElement=/*#__PURE__*/function(_AnnotationElement5){_inherits(FreeTextAnnotationElement,_AnnotationElement5);function FreeTextAnnotationElement(parameters){_classCallCheck(this,FreeTextAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(FreeTextAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(FreeTextAnnotationElement,[{key:"render",value:function render(){this.container.className='freeTextAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return FreeTextAnnotationElement;}(AnnotationElement);var LineAnnotationElement=/*#__PURE__*/function(_AnnotationElement6){_inherits(LineAnnotationElement,_AnnotationElement6);function LineAnnotationElement(parameters){_classCallCheck(this,LineAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(LineAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(LineAnnotationElement,[{key:"render",value:function render(){this.container.className='lineAnnotation';var data=this.data;var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];var svg=this.svgFactory.create(width,height);var line=this.svgFactory.createElement('svg:line');line.setAttribute('x1',data.rect[2]-data.lineCoordinates[0]);line.setAttribute('y1',data.rect[3]-data.lineCoordinates[1]);line.setAttribute('x2',data.rect[2]-data.lineCoordinates[2]);line.setAttribute('y2',data.rect[3]-data.lineCoordinates[3]);line.setAttribute('stroke-width',data.borderStyle.width);line.setAttribute('stroke','transparent');svg.appendChild(line);this.container.append(svg);this._createPopup(this.container,line,data);return this.container;}}]);return LineAnnotationElement;}(AnnotationElement);var SquareAnnotationElement=/*#__PURE__*/function(_AnnotationElement7){_inherits(SquareAnnotationElement,_AnnotationElement7);function SquareAnnotationElement(parameters){_classCallCheck(this,SquareAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(SquareAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(SquareAnnotationElement,[{key:"render",value:function render(){this.container.className='squareAnnotation';var data=this.data;var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];var svg=this.svgFactory.create(width,height);var borderWidth=data.borderStyle.width;var square=this.svgFactory.createElement('svg:rect');square.setAttribute('x',borderWidth/2);square.setAttribute('y',borderWidth/2);square.setAttribute('width',width-borderWidth);square.setAttribute('height',height-borderWidth);square.setAttribute('stroke-width',borderWidth);square.setAttribute('stroke','transparent');square.setAttribute('fill','none');svg.appendChild(square);this.container.append(svg);this._createPopup(this.container,square,data);return this.container;}}]);return SquareAnnotationElement;}(AnnotationElement);var CircleAnnotationElement=/*#__PURE__*/function(_AnnotationElement8){_inherits(CircleAnnotationElement,_AnnotationElement8);function CircleAnnotationElement(parameters){_classCallCheck(this,CircleAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(CircleAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(CircleAnnotationElement,[{key:"render",value:function render(){this.container.className='circleAnnotation';var data=this.data;var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];var svg=this.svgFactory.create(width,height);var borderWidth=data.borderStyle.width;var circle=this.svgFactory.createElement('svg:ellipse');circle.setAttribute('cx',width/2);circle.setAttribute('cy',height/2);circle.setAttribute('rx',width/2-borderWidth/2);circle.setAttribute('ry',height/2-borderWidth/2);circle.setAttribute('stroke-width',borderWidth);circle.setAttribute('stroke','transparent');circle.setAttribute('fill','none');svg.appendChild(circle);this.container.append(svg);this._createPopup(this.container,circle,data);return this.container;}}]);return CircleAnnotationElement;}(AnnotationElement);var PolylineAnnotationElement=/*#__PURE__*/function(_AnnotationElement9){_inherits(PolylineAnnotationElement,_AnnotationElement9);function PolylineAnnotationElement(parameters){var _this3;_classCallCheck(this,PolylineAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);_this3=_possibleConstructorReturn(this,_getPrototypeOf(PolylineAnnotationElement).call(this,parameters,isRenderable,true));_this3.containerClassName='polylineAnnotation';_this3.svgElementName='svg:polyline';return _this3;}_createClass(PolylineAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName;var data=this.data;var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];var svg=this.svgFactory.create(width,height);var points=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=data.vertices[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var coordinate=_step2.value;var x=coordinate.x-data.rect[0];var y=data.rect[3]-coordinate.y;points.push(x+','+y);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2["return"]!=null){_iterator2["return"]();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}points=points.join(' ');var polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute('points',points);polyline.setAttribute('stroke-width',data.borderStyle.width);polyline.setAttribute('stroke','transparent');polyline.setAttribute('fill','none');svg.appendChild(polyline);this.container.append(svg);this._createPopup(this.container,polyline,data);return this.container;}}]);return PolylineAnnotationElement;}(AnnotationElement);var PolygonAnnotationElement=/*#__PURE__*/function(_PolylineAnnotationEl){_inherits(PolygonAnnotationElement,_PolylineAnnotationEl);function PolygonAnnotationElement(parameters){var _this4;_classCallCheck(this,PolygonAnnotationElement);_this4=_possibleConstructorReturn(this,_getPrototypeOf(PolygonAnnotationElement).call(this,parameters));_this4.containerClassName='polygonAnnotation';_this4.svgElementName='svg:polygon';return _this4;}return PolygonAnnotationElement;}(PolylineAnnotationElement);var CaretAnnotationElement=/*#__PURE__*/function(_AnnotationElement10){_inherits(CaretAnnotationElement,_AnnotationElement10);function CaretAnnotationElement(parameters){_classCallCheck(this,CaretAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(CaretAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(CaretAnnotationElement,[{key:"render",value:function render(){this.container.className='caretAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return CaretAnnotationElement;}(AnnotationElement);var InkAnnotationElement=/*#__PURE__*/function(_AnnotationElement11){_inherits(InkAnnotationElement,_AnnotationElement11);function InkAnnotationElement(parameters){var _this5;_classCallCheck(this,InkAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);_this5=_possibleConstructorReturn(this,_getPrototypeOf(InkAnnotationElement).call(this,parameters,isRenderable,true));_this5.containerClassName='inkAnnotation';_this5.svgElementName='svg:polyline';return _this5;}_createClass(InkAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName;var data=this.data;var width=data.rect[2]-data.rect[0];var height=data.rect[3]-data.rect[1];var svg=this.svgFactory.create(width,height);var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=data.inkLists[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var inkList=_step3.value;var points=[];var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=inkList[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var coordinate=_step4.value;var x=coordinate.x-data.rect[0];var y=data.rect[3]-coordinate.y;points.push("".concat(x,",").concat(y));}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4["return"]!=null){_iterator4["return"]();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}points=points.join(' ');var polyline=this.svgFactory.createElement(this.svgElementName);polyline.setAttribute('points',points);polyline.setAttribute('stroke-width',data.borderStyle.width);polyline.setAttribute('stroke','transparent');polyline.setAttribute('fill','none');this._createPopup(this.container,polyline,data);svg.appendChild(polyline);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3["return"]!=null){_iterator3["return"]();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}this.container.append(svg);return this.container;}}]);return InkAnnotationElement;}(AnnotationElement);var HighlightAnnotationElement=/*#__PURE__*/function(_AnnotationElement12){_inherits(HighlightAnnotationElement,_AnnotationElement12);function HighlightAnnotationElement(parameters){_classCallCheck(this,HighlightAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(HighlightAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(HighlightAnnotationElement,[{key:"render",value:function render(){this.container.className='highlightAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return HighlightAnnotationElement;}(AnnotationElement);var UnderlineAnnotationElement=/*#__PURE__*/function(_AnnotationElement13){_inherits(UnderlineAnnotationElement,_AnnotationElement13);function UnderlineAnnotationElement(parameters){_classCallCheck(this,UnderlineAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(UnderlineAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(UnderlineAnnotationElement,[{key:"render",value:function render(){this.container.className='underlineAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return UnderlineAnnotationElement;}(AnnotationElement);var SquigglyAnnotationElement=/*#__PURE__*/function(_AnnotationElement14){_inherits(SquigglyAnnotationElement,_AnnotationElement14);function SquigglyAnnotationElement(parameters){_classCallCheck(this,SquigglyAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(SquigglyAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(SquigglyAnnotationElement,[{key:"render",value:function render(){this.container.className='squigglyAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return SquigglyAnnotationElement;}(AnnotationElement);var StrikeOutAnnotationElement=/*#__PURE__*/function(_AnnotationElement15){_inherits(StrikeOutAnnotationElement,_AnnotationElement15);function StrikeOutAnnotationElement(parameters){_classCallCheck(this,StrikeOutAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(StrikeOutAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(StrikeOutAnnotationElement,[{key:"render",value:function render(){this.container.className='strikeoutAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return StrikeOutAnnotationElement;}(AnnotationElement);var StampAnnotationElement=/*#__PURE__*/function(_AnnotationElement16){_inherits(StampAnnotationElement,_AnnotationElement16);function StampAnnotationElement(parameters){_classCallCheck(this,StampAnnotationElement);var isRenderable=!!(parameters.data.hasPopup||parameters.data.title||parameters.data.contents);return _possibleConstructorReturn(this,_getPrototypeOf(StampAnnotationElement).call(this,parameters,isRenderable,true));}_createClass(StampAnnotationElement,[{key:"render",value:function render(){this.container.className='stampAnnotation';if(!this.data.hasPopup){this._createPopup(this.container,null,this.data);}return this.container;}}]);return StampAnnotationElement;}(AnnotationElement);var FileAttachmentAnnotationElement=/*#__PURE__*/function(_AnnotationElement17){_inherits(FileAttachmentAnnotationElement,_AnnotationElement17);function FileAttachmentAnnotationElement(parameters){var _this6;_classCallCheck(this,FileAttachmentAnnotationElement);_this6=_possibleConstructorReturn(this,_getPrototypeOf(FileAttachmentAnnotationElement).call(this,parameters,true));var _this6$data$file=_this6.data.file,filename=_this6$data$file.filename,content=_this6$data$file.content;_this6.filename=(0,_display_utils.getFilenameFromUrl)(filename);_this6.content=content;if(_this6.linkService.eventBus){_this6.linkService.eventBus.dispatch('fileattachmentannotation',{source:_assertThisInitialized(_this6),id:(0,_util.stringToPDFString)(filename),filename:filename,content:content});}return _this6;}_createClass(FileAttachmentAnnotationElement,[{key:"render",value:function render(){this.container.className='fileAttachmentAnnotation';var trigger=document.createElement('div');trigger.style.height=this.container.style.height;trigger.style.width=this.container.style.width;trigger.addEventListener('dblclick',this._download.bind(this));if(!this.data.hasPopup&&(this.data.title||this.data.contents)){this._createPopup(this.container,trigger,this.data);}this.container.appendChild(trigger);return this.container;}},{key:"_download",value:function _download(){if(!this.downloadManager){(0,_util.warn)('Download cannot be started due to unavailable download manager');return;}this.downloadManager.downloadData(this.content,this.filename,'');}}]);return FileAttachmentAnnotationElement;}(AnnotationElement);var AnnotationLayer=/*#__PURE__*/function(){function AnnotationLayer(){_classCallCheck(this,AnnotationLayer);}_createClass(AnnotationLayer,null,[{key:"render",value:function render(parameters){var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=parameters.annotations[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var data=_step5.value;if(!data){continue;}var element=AnnotationElementFactory.create({data:data,layer:parameters.div,page:parameters.page,viewport:parameters.viewport,linkService:parameters.linkService,downloadManager:parameters.downloadManager,imageResourcesPath:parameters.imageResourcesPath||'',renderInteractiveForms:parameters.renderInteractiveForms||false,svgFactory:new _display_utils.DOMSVGFactory()});if(element.isRenderable){parameters.div.appendChild(element.render());}}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5["return"]!=null){_iterator5["return"]();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}},{key:"update",value:function update(parameters){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=parameters.annotations[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var data=_step6.value;var element=parameters.div.querySelector("[data-annotation-id=\"".concat(data.id,"\"]"));if(element){element.style.transform="matrix(".concat(parameters.viewport.transform.join(','),")");}}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6["return"]!=null){_iterator6["return"]();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}parameters.div.removeAttribute('hidden');}}]);return AnnotationLayer;}();exports.AnnotationLayer=AnnotationLayer;/***/},/* 196 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.SVGGraphics=void 0;var _util=__w_pdfjs_require__(1);var _display_utils=__w_pdfjs_require__(183);var _is_node=_interopRequireDefault(__w_pdfjs_require__(4));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var SVGGraphics=function SVGGraphics(){throw new Error('Not implemented: SVGGraphics');};exports.SVGGraphics=SVGGraphics;{var opListToTree=function opListToTree(opList){var opTree=[];var tmp=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=opList[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var opListElement=_step.value;if(opListElement.fn==='save'){opTree.push({'fnId':92,'fn':'group','items':[]});tmp.push(opTree);opTree=opTree[opTree.length-1].items;continue;}if(opListElement.fn==='restore'){opTree=tmp.pop();}else{opTree.push(opListElement);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator["return"]!=null){_iterator["return"]();}}finally{if(_didIteratorError){throw _iteratorError;}}}return opTree;};var pf=function pf(value){if(Number.isInteger(value)){return value.toString();}var s=value.toFixed(10);var i=s.length-1;if(s[i]!=='0'){return s;}do{i--;}while(s[i]==='0');return s.substring(0,s[i]==='.'?i:i+1);};var pm=function pm(m){if(m[4]===0&&m[5]===0){if(m[1]===0&&m[2]===0){if(m[0]===1&&m[3]===1){return'';}return"scale(".concat(pf(m[0])," ").concat(pf(m[3]),")");}if(m[0]===m[3]&&m[1]===-m[2]){var a=Math.acos(m[0])*180/Math.PI;return"rotate(".concat(pf(a),")");}}else{if(m[0]===1&&m[1]===0&&m[2]===0&&m[3]===1){return"translate(".concat(pf(m[4])," ").concat(pf(m[5]),")");}}return"matrix(".concat(pf(m[0])," ").concat(pf(m[1])," ").concat(pf(m[2])," ").concat(pf(m[3])," ").concat(pf(m[4])," ")+"".concat(pf(m[5]),")");};var SVG_DEFAULTS={fontStyle:'normal',fontWeight:'normal',fillColor:'#000000'};var XML_NS='http://www.w3.org/XML/1998/namespace';var XLINK_NS='http://www.w3.org/1999/xlink';var LINE_CAP_STYLES=['butt','round','square'];var LINE_JOIN_STYLES=['miter','round','bevel'];var convertImgDataToPng=function(){var PNG_HEADER=new Uint8Array([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);var CHUNK_WRAPPER_SIZE=12;var crcTable=new Int32Array(256);for(var i=0;i<256;i++){var c=i;for(var h=0;h<8;h++){if(c&1){c=0xedB88320^c>>1&0x7fffffff;}else{c=c>>1&0x7fffffff;}}crcTable[i]=c;}function crc32(data,start,end){var crc=-1;for(var _i=start;_i<end;_i++){var a=(crc^data[_i])&0xff;var b=crcTable[a];crc=crc>>>8^b;}return crc^-1;}function writePngChunk(type,body,data,offset){var p=offset;var len=body.length;data[p]=len>>24&0xff;data[p+1]=len>>16&0xff;data[p+2]=len>>8&0xff;data[p+3]=len&0xff;p+=4;data[p]=type.charCodeAt(0)&0xff;data[p+1]=type.charCodeAt(1)&0xff;data[p+2]=type.charCodeAt(2)&0xff;data[p+3]=type.charCodeAt(3)&0xff;p+=4;data.set(body,p);p+=body.length;var crc=crc32(data,offset+4,p);data[p]=crc>>24&0xff;data[p+1]=crc>>16&0xff;data[p+2]=crc>>8&0xff;data[p+3]=crc&0xff;}function adler32(data,start,end){var a=1;var b=0;for(var _i2=start;_i2<end;++_i2){a=(a+(data[_i2]&0xff))%65521;b=(b+a)%65521;}return b<<16|a;}function deflateSync(literals){if(!(0,_is_node["default"])()){return deflateSyncUncompressed(literals);}try{var input;if(parseInt(process.versions.node)>=8){input=literals;}else{input=new Buffer(literals);}var output=__webpack_require__(0).deflateSync(input,{level:9});return output instanceof Uint8Array?output:new Uint8Array(output);}catch(e){(0,_util.warn)('Not compressing PNG because zlib.deflateSync is unavailable: '+e);}return deflateSyncUncompressed(literals);}function deflateSyncUncompressed(literals){var len=literals.length;var maxBlockLength=0xFFFF;var deflateBlocks=Math.ceil(len/maxBlockLength);var idat=new Uint8Array(2+len+deflateBlocks*5+4);var pi=0;idat[pi++]=0x78;idat[pi++]=0x9c;var pos=0;while(len>maxBlockLength){idat[pi++]=0x00;idat[pi++]=0xff;idat[pi++]=0xff;idat[pi++]=0x00;idat[pi++]=0x00;idat.set(literals.subarray(pos,pos+maxBlockLength),pi);pi+=maxBlockLength;pos+=maxBlockLength;len-=maxBlockLength;}idat[pi++]=0x01;idat[pi++]=len&0xff;idat[pi++]=len>>8&0xff;idat[pi++]=~len&0xffff&0xff;idat[pi++]=(~len&0xffff)>>8&0xff;idat.set(literals.subarray(pos),pi);pi+=literals.length-pos;var adler=adler32(literals,0,literals.length);idat[pi++]=adler>>24&0xff;idat[pi++]=adler>>16&0xff;idat[pi++]=adler>>8&0xff;idat[pi++]=adler&0xff;return idat;}function encode(imgData,kind,forceDataSchema,isMask){var width=imgData.width;var height=imgData.height;var bitDepth,colorType,lineSize;var bytes=imgData.data;switch(kind){case _util.ImageKind.GRAYSCALE_1BPP:colorType=0;bitDepth=1;lineSize=width+7>>3;break;case _util.ImageKind.RGB_24BPP:colorType=2;bitDepth=8;lineSize=width*3;break;case _util.ImageKind.RGBA_32BPP:colorType=6;bitDepth=8;lineSize=width*4;break;default:throw new Error('invalid format');}var literals=new Uint8Array((1+lineSize)*height);var offsetLiterals=0,offsetBytes=0;for(var y=0;y<height;++y){literals[offsetLiterals++]=0;literals.set(bytes.subarray(offsetBytes,offsetBytes+lineSize),offsetLiterals);offsetBytes+=lineSize;offsetLiterals+=lineSize;}if(kind===_util.ImageKind.GRAYSCALE_1BPP&&isMask){offsetLiterals=0;for(var _y=0;_y<height;_y++){offsetLiterals++;for(var _i3=0;_i3<lineSize;_i3++){literals[offsetLiterals++]^=0xFF;}}}var ihdr=new Uint8Array([width>>24&0xff,width>>16&0xff,width>>8&0xff,width&0xff,height>>24&0xff,height>>16&0xff,height>>8&0xff,height&0xff,bitDepth,colorType,0x00,0x00,0x00]);var idat=deflateSync(literals);var pngLength=PNG_HEADER.length+CHUNK_WRAPPER_SIZE*3+ihdr.length+idat.length;var data=new Uint8Array(pngLength);var offset=0;data.set(PNG_HEADER,offset);offset+=PNG_HEADER.length;writePngChunk('IHDR',ihdr,data,offset);offset+=CHUNK_WRAPPER_SIZE+ihdr.length;writePngChunk('IDATA',idat,data,offset);offset+=CHUNK_WRAPPER_SIZE+idat.length;writePngChunk('IEND',new Uint8Array(0),data,offset);return(0,_util.createObjectURL)(data,'image/png',forceDataSchema);}return function convertImgDataToPng(imgData,forceDataSchema,isMask){var kind=imgData.kind===undefined?_util.ImageKind.GRAYSCALE_1BPP:imgData.kind;return encode(imgData,kind,forceDataSchema,isMask);};}();var SVGExtraState=/*#__PURE__*/function(){function SVGExtraState(){_classCallCheck(this,SVGExtraState);this.fontSizeScale=1;this.fontWeight=SVG_DEFAULTS.fontWeight;this.fontSize=0;this.textMatrix=_util.IDENTITY_MATRIX;this.fontMatrix=_util.FONT_IDENTITY_MATRIX;this.leading=0;this.textRenderingMode=_util.TextRenderingMode.FILL;this.textMatrixScale=1;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRise=0;this.fillColor=SVG_DEFAULTS.fillColor;this.strokeColor='#000000';this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.lineJoin='';this.lineCap='';this.miterLimit=0;this.dashArray=[];this.dashPhase=0;this.dependencies=[];this.activeClipUrl=null;this.clipGroup=null;this.maskId='';}_createClass(SVGExtraState,[{key:"clone",value:function clone(){return Object.create(this);}},{key:"setCurrentPoint",value:function setCurrentPoint(x,y){this.x=x;this.y=y;}}]);return SVGExtraState;}();var clipCount=0;var maskCount=0;var shadingCount=0;exports.SVGGraphics=SVGGraphics=/*#__PURE__*/function(){function SVGGraphics(commonObjs,objs,forceDataSchema){_classCallCheck(this,SVGGraphics);this.svgFactory=new _display_utils.DOMSVGFactory();this.current=new SVGExtraState();this.transformMatrix=_util.IDENTITY_MATRIX;this.transformStack=[];this.extraStack=[];this.commonObjs=commonObjs;this.objs=objs;this.pendingClip=null;this.pendingEOFill=false;this.embedFonts=false;this.embeddedFonts=Object.create(null);this.cssStyle=null;this.forceDataSchema=!!forceDataSchema;this._operatorIdMapping=[];for(var op in _util.OPS){this._operatorIdMapping[_util.OPS[op]]=op;}}_createClass(SVGGraphics,[{key:"save",value:function save(){this.transformStack.push(this.transformMatrix);var old=this.current;this.extraStack.push(old);this.current=old.clone();}},{key:"restore",value:function restore(){this.transformMatrix=this.transformStack.pop();this.current=this.extraStack.pop();this.pendingClip=null;this.tgrp=null;}},{key:"group",value:function group(items){this.save();this.executeOpTree(items);this.restore();}},{key:"loadDependencies",value:function loadDependencies(operatorList){var _this=this;var fnArray=operatorList.fnArray;var argsArray=operatorList.argsArray;for(var i=0,ii=fnArray.length;i<ii;i++){if(fnArray[i]!==_util.OPS.dependency){continue;}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{var _loop=function _loop(){var obj=_step2.value;var objsPool=obj.startsWith('g_')?_this.commonObjs:_this.objs;var promise=new Promise(function(resolve){objsPool.get(obj,resolve);});_this.current.dependencies.push(promise);};for(var _iterator2=argsArray[i][Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){_loop();}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2["return"]!=null){_iterator2["return"]();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}return Promise.all(this.current.dependencies);}},{key:"transform",value:function transform(a,b,c,d,e,f){var transformMatrix=[a,b,c,d,e,f];this.transformMatrix=_util.Util.transform(this.transformMatrix,transformMatrix);this.tgrp=null;}},{key:"getSVG",value:function getSVG(operatorList,viewport){var _this2=this;this.viewport=viewport;var svgElement=this._initialize(viewport);return this.loadDependencies(operatorList).then(function(){_this2.transformMatrix=_util.IDENTITY_MATRIX;_this2.executeOpTree(_this2.convertOpList(operatorList));return svgElement;});}},{key:"convertOpList",value:function convertOpList(operatorList){var operatorIdMapping=this._operatorIdMapping;var argsArray=operatorList.argsArray;var fnArray=operatorList.fnArray;var opList=[];for(var i=0,ii=fnArray.length;i<ii;i++){var fnId=fnArray[i];opList.push({'fnId':fnId,'fn':operatorIdMapping[fnId],'args':argsArray[i]});}return opListToTree(opList);}},{key:"executeOpTree",value:function executeOpTree(opTree){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=opTree[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var opTreeElement=_step3.value;var fn=opTreeElement.fn;var fnId=opTreeElement.fnId;var args=opTreeElement.args;switch(fnId|0){case _util.OPS.beginText:this.beginText();break;case _util.OPS.dependency:break;case _util.OPS.setLeading:this.setLeading(args);break;case _util.OPS.setLeadingMoveText:this.setLeadingMoveText(args[0],args[1]);break;case _util.OPS.setFont:this.setFont(args);break;case _util.OPS.showText:this.showText(args[0]);break;case _util.OPS.showSpacedText:this.showText(args[0]);break;case _util.OPS.endText:this.endText();break;case _util.OPS.moveText:this.moveText(args[0],args[1]);break;case _util.OPS.setCharSpacing:this.setCharSpacing(args[0]);break;case _util.OPS.setWordSpacing:this.setWordSpacing(args[0]);break;case _util.OPS.setHScale:this.setHScale(args[0]);break;case _util.OPS.setTextMatrix:this.setTextMatrix(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.setTextRise:this.setTextRise(args[0]);break;case _util.OPS.setTextRenderingMode:this.setTextRenderingMode(args[0]);break;case _util.OPS.setLineWidth:this.setLineWidth(args[0]);break;case _util.OPS.setLineJoin:this.setLineJoin(args[0]);break;case _util.OPS.setLineCap:this.setLineCap(args[0]);break;case _util.OPS.setMiterLimit:this.setMiterLimit(args[0]);break;case _util.OPS.setFillRGBColor:this.setFillRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeRGBColor:this.setStrokeRGBColor(args[0],args[1],args[2]);break;case _util.OPS.setStrokeColorN:this.setStrokeColorN(args);break;case _util.OPS.setFillColorN:this.setFillColorN(args);break;case _util.OPS.shadingFill:this.shadingFill(args[0]);break;case _util.OPS.setDash:this.setDash(args[0],args[1]);break;case _util.OPS.setRenderingIntent:this.setRenderingIntent(args[0]);break;case _util.OPS.setFlatness:this.setFlatness(args[0]);break;case _util.OPS.setGState:this.setGState(args[0]);break;case _util.OPS.fill:this.fill();break;case _util.OPS.eoFill:this.eoFill();break;case _util.OPS.stroke:this.stroke();break;case _util.OPS.fillStroke:this.fillStroke();break;case _util.OPS.eoFillStroke:this.eoFillStroke();break;case _util.OPS.clip:this.clip('nonzero');break;case _util.OPS.eoClip:this.clip('evenodd');break;case _util.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case _util.OPS.paintJpegXObject:this.paintJpegXObject(args[0],args[1],args[2]);break;case _util.OPS.paintImageXObject:this.paintImageXObject(args[0]);break;case _util.OPS.paintInlineImageXObject:this.paintInlineImageXObject(args[0]);break;case _util.OPS.paintImageMaskXObject:this.paintImageMaskXObject(args[0]);break;case _util.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(args[0],args[1]);break;case _util.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case _util.OPS.closePath:this.closePath();break;case _util.OPS.closeStroke:this.closeStroke();break;case _util.OPS.closeFillStroke:this.closeFillStroke();break;case _util.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case _util.OPS.nextLine:this.nextLine();break;case _util.OPS.transform:this.transform(args[0],args[1],args[2],args[3],args[4],args[5]);break;case _util.OPS.constructPath:this.constructPath(args[0],args[1]);break;case _util.OPS.endPath:this.endPath();break;case 92:this.group(opTreeElement.items);break;default:(0,_util.warn)("Unimplemented operator ".concat(fn));break;}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3["return"]!=null){_iterator3["return"]();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}},{key:"setWordSpacing",value:function setWordSpacing(wordSpacing){this.current.wordSpacing=wordSpacing;}},{key:"setCharSpacing",value:function setCharSpacing(charSpacing){this.current.charSpacing=charSpacing;}},{key:"nextLine",value:function nextLine(){this.moveText(0,this.current.leading);}},{key:"setTextMatrix",value:function setTextMatrix(a,b,c,d,e,f){var current=this.current;current.textMatrix=current.lineMatrix=[a,b,c,d,e,f];current.textMatrixScale=Math.sqrt(a*a+b*b);current.x=current.lineX=0;current.y=current.lineY=0;current.xcoords=[];current.tspan=this.svgFactory.createElement('svg:tspan');current.tspan.setAttributeNS(null,'font-family',current.fontFamily);current.tspan.setAttributeNS(null,'font-size',"".concat(pf(current.fontSize),"px"));current.tspan.setAttributeNS(null,'y',pf(-current.y));current.txtElement=this.svgFactory.createElement('svg:text');current.txtElement.appendChild(current.tspan);}},{key:"beginText",value:function beginText(){var current=this.current;current.x=current.lineX=0;current.y=current.lineY=0;current.textMatrix=_util.IDENTITY_MATRIX;current.lineMatrix=_util.IDENTITY_MATRIX;current.textMatrixScale=1;current.tspan=this.svgFactory.createElement('svg:tspan');current.txtElement=this.svgFactory.createElement('svg:text');current.txtgrp=this.svgFactory.createElement('svg:g');current.xcoords=[];}},{key:"moveText",value:function moveText(x,y){var current=this.current;current.x=current.lineX+=x;current.y=current.lineY+=y;current.xcoords=[];current.tspan=this.svgFactory.createElement('svg:tspan');current.tspan.setAttributeNS(null,'font-family',current.fontFamily);current.tspan.setAttributeNS(null,'font-size',"".concat(pf(current.fontSize),"px"));current.tspan.setAttributeNS(null,'y',pf(-current.y));}},{key:"showText",value:function showText(glyphs){var current=this.current;var font=current.font;var fontSize=current.fontSize;if(fontSize===0){return;}var charSpacing=current.charSpacing;var wordSpacing=current.wordSpacing;var fontDirection=current.fontDirection;var textHScale=current.textHScale*fontDirection;var vertical=font.vertical;var widthAdvanceScale=fontSize*current.fontMatrix[0];var x=0;var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=glyphs[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var glyph=_step4.value;if(glyph===null){x+=fontDirection*wordSpacing;continue;}else if((0,_util.isNum)(glyph)){x+=-glyph*fontSize*0.001;continue;}var width=glyph.width;var character=glyph.fontChar;var spacing=(glyph.isSpace?wordSpacing:0)+charSpacing;var charWidth=width*widthAdvanceScale+spacing*fontDirection;if(!glyph.isInFont&&!font.missingFile){x+=charWidth;continue;}current.xcoords.push(current.x+x*textHScale);current.tspan.textContent+=character;x+=charWidth;}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4["return"]!=null){_iterator4["return"]();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}if(vertical){current.y-=x*textHScale;}else{current.x+=x*textHScale;}current.tspan.setAttributeNS(null,'x',current.xcoords.map(pf).join(' '));current.tspan.setAttributeNS(null,'y',pf(-current.y));current.tspan.setAttributeNS(null,'font-family',current.fontFamily);current.tspan.setAttributeNS(null,'font-size',"".concat(pf(current.fontSize),"px"));if(current.fontStyle!==SVG_DEFAULTS.fontStyle){current.tspan.setAttributeNS(null,'font-style',current.fontStyle);}if(current.fontWeight!==SVG_DEFAULTS.fontWeight){current.tspan.setAttributeNS(null,'font-weight',current.fontWeight);}var fillStrokeMode=current.textRenderingMode&_util.TextRenderingMode.FILL_STROKE_MASK;if(fillStrokeMode===_util.TextRenderingMode.FILL||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){if(current.fillColor!==SVG_DEFAULTS.fillColor){current.tspan.setAttributeNS(null,'fill',current.fillColor);}if(current.fillAlpha<1){current.tspan.setAttributeNS(null,'fill-opacity',current.fillAlpha);}}else if(current.textRenderingMode===_util.TextRenderingMode.ADD_TO_PATH){current.tspan.setAttributeNS(null,'fill','transparent');}else{current.tspan.setAttributeNS(null,'fill','none');}if(fillStrokeMode===_util.TextRenderingMode.STROKE||fillStrokeMode===_util.TextRenderingMode.FILL_STROKE){var lineWidthScale=1/(current.textMatrixScale||1);this._setStrokeAttributes(current.tspan,lineWidthScale);}var textMatrix=current.textMatrix;if(current.textRise!==0){textMatrix=textMatrix.slice();textMatrix[5]+=current.textRise;}current.txtElement.setAttributeNS(null,'transform',"".concat(pm(textMatrix)," scale(1, -1)"));current.txtElement.setAttributeNS(XML_NS,'xml:space','preserve');current.txtElement.appendChild(current.tspan);current.txtgrp.appendChild(current.txtElement);this._ensureTransformGroup().appendChild(current.txtElement);}},{key:"setLeadingMoveText",value:function setLeadingMoveText(x,y){this.setLeading(-y);this.moveText(x,y);}},{key:"addFontStyle",value:function addFontStyle(fontObj){if(!this.cssStyle){this.cssStyle=this.svgFactory.createElement('svg:style');this.cssStyle.setAttributeNS(null,'type','text/css');this.defs.appendChild(this.cssStyle);}var url=(0,_util.createObjectURL)(fontObj.data,fontObj.mimetype,this.forceDataSchema);this.cssStyle.textContent+="@font-face { font-family: \"".concat(fontObj.loadedName,"\";")+" src: url(".concat(url,"); }\n");}},{key:"setFont",value:function setFont(details){var current=this.current;var fontObj=this.commonObjs.get(details[0]);var size=details[1];current.font=fontObj;if(this.embedFonts&&fontObj.data&&!this.embeddedFonts[fontObj.loadedName]){this.addFontStyle(fontObj);this.embeddedFonts[fontObj.loadedName]=fontObj;}current.fontMatrix=fontObj.fontMatrix?fontObj.fontMatrix:_util.FONT_IDENTITY_MATRIX;var bold=fontObj.black?fontObj.bold?'bolder':'bold':fontObj.bold?'bold':'normal';var italic=fontObj.italic?'italic':'normal';if(size<0){size=-size;current.fontDirection=-1;}else{current.fontDirection=1;}current.fontSize=size;current.fontFamily=fontObj.loadedName;current.fontWeight=bold;current.fontStyle=italic;current.tspan=this.svgFactory.createElement('svg:tspan');current.tspan.setAttributeNS(null,'y',pf(-current.y));current.xcoords=[];}},{key:"endText",value:function endText(){var current=this.current;if(current.textRenderingMode&_util.TextRenderingMode.ADD_TO_PATH_FLAG&&current.txtElement&&current.txtElement.hasChildNodes()){current.element=current.txtElement;this.clip('nonzero');this.endPath();}}},{key:"setLineWidth",value:function setLineWidth(width){if(width>0){this.current.lineWidth=width;}}},{key:"setLineCap",value:function setLineCap(style){this.current.lineCap=LINE_CAP_STYLES[style];}},{key:"setLineJoin",value:function setLineJoin(style){this.current.lineJoin=LINE_JOIN_STYLES[style];}},{key:"setMiterLimit",value:function setMiterLimit(limit){this.current.miterLimit=limit;}},{key:"setStrokeAlpha",value:function setStrokeAlpha(strokeAlpha){this.current.strokeAlpha=strokeAlpha;}},{key:"setStrokeRGBColor",value:function setStrokeRGBColor(r,g,b){this.current.strokeColor=_util.Util.makeCssRgb(r,g,b);}},{key:"setFillAlpha",value:function setFillAlpha(fillAlpha){this.current.fillAlpha=fillAlpha;}},{key:"setFillRGBColor",value:function setFillRGBColor(r,g,b){this.current.fillColor=_util.Util.makeCssRgb(r,g,b);this.current.tspan=this.svgFactory.createElement('svg:tspan');this.current.xcoords=[];}},{key:"setStrokeColorN",value:function setStrokeColorN(args){this.current.strokeColor=this._makeColorN_Pattern(args);}},{key:"setFillColorN",value:function setFillColorN(args){this.current.fillColor=this._makeColorN_Pattern(args);}},{key:"shadingFill",value:function shadingFill(args){var width=this.viewport.width;var height=this.viewport.height;var inv=_util.Util.inverseTransform(this.transformMatrix);var bl=_util.Util.applyTransform([0,0],inv);var br=_util.Util.applyTransform([0,height],inv);var ul=_util.Util.applyTransform([width,0],inv);var ur=_util.Util.applyTransform([width,height],inv);var x0=Math.min(bl[0],br[0],ul[0],ur[0]);var y0=Math.min(bl[1],br[1],ul[1],ur[1]);var x1=Math.max(bl[0],br[0],ul[0],ur[0]);var y1=Math.max(bl[1],br[1],ul[1],ur[1]);var rect=this.svgFactory.createElement('svg:rect');rect.setAttributeNS(null,'x',x0);rect.setAttributeNS(null,'y',y0);rect.setAttributeNS(null,'width',x1-x0);rect.setAttributeNS(null,'height',y1-y0);rect.setAttributeNS(null,'fill',this._makeShadingPattern(args));this._ensureTransformGroup().appendChild(rect);}},{key:"_makeColorN_Pattern",value:function _makeColorN_Pattern(args){if(args[0]==='TilingPattern'){return this._makeTilingPattern(args);}return this._makeShadingPattern(args);}},{key:"_makeTilingPattern",value:function _makeTilingPattern(args){var color=args[1];var operatorList=args[2];var matrix=args[3]||_util.IDENTITY_MATRIX;var _args$=_slicedToArray(args[4],4),x0=_args$[0],y0=_args$[1],x1=_args$[2],y1=_args$[3];var xstep=args[5];var ystep=args[6];var paintType=args[7];var tilingId="shading".concat(shadingCount++);var _Util$applyTransform=_util.Util.applyTransform([x0,y0],matrix),_Util$applyTransform2=_slicedToArray(_Util$applyTransform,2),tx0=_Util$applyTransform2[0],ty0=_Util$applyTransform2[1];var _Util$applyTransform3=_util.Util.applyTransform([x1,y1],matrix),_Util$applyTransform4=_slicedToArray(_Util$applyTransform3,2),tx1=_Util$applyTransform4[0],ty1=_Util$applyTransform4[1];var _Util$singularValueDe=_util.Util.singularValueDecompose2dScale(matrix),_Util$singularValueDe2=_slicedToArray(_Util$singularValueDe,2),xscale=_Util$singularValueDe2[0],yscale=_Util$singularValueDe2[1];var txstep=xstep*xscale;var tystep=ystep*yscale;var tiling=this.svgFactory.createElement('svg:pattern');tiling.setAttributeNS(null,'id',tilingId);tiling.setAttributeNS(null,'patternUnits','userSpaceOnUse');tiling.setAttributeNS(null,'width',txstep);tiling.setAttributeNS(null,'height',tystep);tiling.setAttributeNS(null,'x',"".concat(tx0));tiling.setAttributeNS(null,'y',"".concat(ty0));var svg=this.svg;var transformMatrix=this.transformMatrix;var fillColor=this.current.fillColor;var strokeColor=this.current.strokeColor;var bbox=this.svgFactory.create(tx1-tx0,ty1-ty0);this.svg=bbox;this.transformMatrix=matrix;if(paintType===2){var cssColor=_util.Util.makeCssRgb.apply(_util.Util,_toConsumableArray(color));this.current.fillColor=cssColor;this.current.strokeColor=cssColor;}this.executeOpTree(this.convertOpList(operatorList));this.svg=svg;this.transformMatrix=transformMatrix;this.current.fillColor=fillColor;this.current.strokeColor=strokeColor;tiling.appendChild(bbox.childNodes[0]);this.defs.appendChild(tiling);return"url(#".concat(tilingId,")");}},{key:"_makeShadingPattern",value:function _makeShadingPattern(args){switch(args[0]){case'RadialAxial':var shadingId="shading".concat(shadingCount++);var colorStops=args[2];var gradient;switch(args[1]){case'axial':var point0=args[3];var point1=args[4];gradient=this.svgFactory.createElement('svg:linearGradient');gradient.setAttributeNS(null,'id',shadingId);gradient.setAttributeNS(null,'gradientUnits','userSpaceOnUse');gradient.setAttributeNS(null,'x1',point0[0]);gradient.setAttributeNS(null,'y1',point0[1]);gradient.setAttributeNS(null,'x2',point1[0]);gradient.setAttributeNS(null,'y2',point1[1]);break;case'radial':var focalPoint=args[3];var circlePoint=args[4];var focalRadius=args[5];var circleRadius=args[6];gradient=this.svgFactory.createElement('svg:radialGradient');gradient.setAttributeNS(null,'id',shadingId);gradient.setAttributeNS(null,'gradientUnits','userSpaceOnUse');gradient.setAttributeNS(null,'cx',circlePoint[0]);gradient.setAttributeNS(null,'cy',circlePoint[1]);gradient.setAttributeNS(null,'r',circleRadius);gradient.setAttributeNS(null,'fx',focalPoint[0]);gradient.setAttributeNS(null,'fy',focalPoint[1]);gradient.setAttributeNS(null,'fr',focalRadius);break;default:throw new Error("Unknown RadialAxial type: ".concat(args[1]));}var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=colorStops[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var colorStop=_step5.value;var stop=this.svgFactory.createElement('svg:stop');stop.setAttributeNS(null,'offset',colorStop[0]);stop.setAttributeNS(null,'stop-color',colorStop[1]);gradient.appendChild(stop);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5["return"]!=null){_iterator5["return"]();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}this.defs.appendChild(gradient);return"url(#".concat(shadingId,")");case'Mesh':(0,_util.warn)('Unimplemented pattern Mesh');return null;case'Dummy':return'hotpink';default:throw new Error("Unknown IR type: ".concat(args[0]));}}},{key:"setDash",value:function setDash(dashArray,dashPhase){this.current.dashArray=dashArray;this.current.dashPhase=dashPhase;}},{key:"constructPath",value:function constructPath(ops,args){var current=this.current;var x=current.x,y=current.y;var d=[];var j=0;var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=ops[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var op=_step6.value;switch(op|0){case _util.OPS.rectangle:x=args[j++];y=args[j++];var width=args[j++];var height=args[j++];var xw=x+width;var yh=y+height;d.push('M',pf(x),pf(y),'L',pf(xw),pf(y),'L',pf(xw),pf(yh),'L',pf(x),pf(yh),'Z');break;case _util.OPS.moveTo:x=args[j++];y=args[j++];d.push('M',pf(x),pf(y));break;case _util.OPS.lineTo:x=args[j++];y=args[j++];d.push('L',pf(x),pf(y));break;case _util.OPS.curveTo:x=args[j+4];y=args[j+5];d.push('C',pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]),pf(x),pf(y));j+=6;break;case _util.OPS.curveTo2:x=args[j+2];y=args[j+3];d.push('C',pf(x),pf(y),pf(args[j]),pf(args[j+1]),pf(args[j+2]),pf(args[j+3]));j+=4;break;case _util.OPS.curveTo3:x=args[j+2];y=args[j+3];d.push('C',pf(args[j]),pf(args[j+1]),pf(x),pf(y),pf(x),pf(y));j+=4;break;case _util.OPS.closePath:d.push('Z');break;}}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6["return"]!=null){_iterator6["return"]();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}d=d.join(' ');if(current.path&&ops.length>0&&ops[0]!==_util.OPS.rectangle&&ops[0]!==_util.OPS.moveTo){d=current.path.getAttributeNS(null,'d')+d;}else{current.path=this.svgFactory.createElement('svg:path');this._ensureTransformGroup().appendChild(current.path);}current.path.setAttributeNS(null,'d',d);current.path.setAttributeNS(null,'fill','none');current.element=current.path;current.setCurrentPoint(x,y);}},{key:"endPath",value:function endPath(){var current=this.current;current.path=null;if(!this.pendingClip){return;}if(!current.element){this.pendingClip=null;return;}var clipId="clippath".concat(clipCount++);var clipPath=this.svgFactory.createElement('svg:clipPath');clipPath.setAttributeNS(null,'id',clipId);clipPath.setAttributeNS(null,'transform',pm(this.transformMatrix));var clipElement=current.element.cloneNode(true);if(this.pendingClip==='evenodd'){clipElement.setAttributeNS(null,'clip-rule','evenodd');}else{clipElement.setAttributeNS(null,'clip-rule','nonzero');}this.pendingClip=null;clipPath.appendChild(clipElement);this.defs.appendChild(clipPath);if(current.activeClipUrl){current.clipGroup=null;this.extraStack.forEach(function(prev){prev.clipGroup=null;});clipPath.setAttributeNS(null,'clip-path',current.activeClipUrl);}current.activeClipUrl="url(#".concat(clipId,")");this.tgrp=null;}},{key:"clip",value:function clip(type){this.pendingClip=type;}},{key:"closePath",value:function closePath(){var current=this.current;if(current.path){var d="".concat(current.path.getAttributeNS(null,'d'),"Z");current.path.setAttributeNS(null,'d',d);}}},{key:"setLeading",value:function setLeading(leading){this.current.leading=-leading;}},{key:"setTextRise",value:function setTextRise(textRise){this.current.textRise=textRise;}},{key:"setTextRenderingMode",value:function setTextRenderingMode(textRenderingMode){this.current.textRenderingMode=textRenderingMode;}},{key:"setHScale",value:function setHScale(scale){this.current.textHScale=scale/100;}},{key:"setRenderingIntent",value:function setRenderingIntent(intent){}},{key:"setFlatness",value:function setFlatness(flatness){}},{key:"setGState",value:function setGState(states){var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=states[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var _step7$value=_slicedToArray(_step7.value,2),key=_step7$value[0],value=_step7$value[1];switch(key){case'LW':this.setLineWidth(value);break;case'LC':this.setLineCap(value);break;case'LJ':this.setLineJoin(value);break;case'ML':this.setMiterLimit(value);break;case'D':this.setDash(value[0],value[1]);break;case'RI':this.setRenderingIntent(value);break;case'FL':this.setFlatness(value);break;case'Font':this.setFont(value);break;case'CA':this.setStrokeAlpha(value);break;case'ca':this.setFillAlpha(value);break;default:(0,_util.warn)("Unimplemented graphic state operator ".concat(key));break;}}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7["return"]!=null){_iterator7["return"]();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}}},{key:"fill",value:function fill(){var current=this.current;if(current.element){current.element.setAttributeNS(null,'fill',current.fillColor);current.element.setAttributeNS(null,'fill-opacity',current.fillAlpha);this.endPath();}}},{key:"stroke",value:function stroke(){var current=this.current;if(current.element){this._setStrokeAttributes(current.element);current.element.setAttributeNS(null,'fill','none');this.endPath();}}},{key:"_setStrokeAttributes",value:function _setStrokeAttributes(element){var lineWidthScale=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var current=this.current;var dashArray=current.dashArray;if(lineWidthScale!==1&&dashArray.length>0){dashArray=dashArray.map(function(value){return lineWidthScale*value;});}element.setAttributeNS(null,'stroke',current.strokeColor);element.setAttributeNS(null,'stroke-opacity',current.strokeAlpha);element.setAttributeNS(null,'stroke-miterlimit',pf(current.miterLimit));element.setAttributeNS(null,'stroke-linecap',current.lineCap);element.setAttributeNS(null,'stroke-linejoin',current.lineJoin);element.setAttributeNS(null,'stroke-width',pf(lineWidthScale*current.lineWidth)+'px');element.setAttributeNS(null,'stroke-dasharray',dashArray.map(pf).join(' '));element.setAttributeNS(null,'stroke-dashoffset',pf(lineWidthScale*current.dashPhase)+'px');}},{key:"eoFill",value:function eoFill(){if(this.current.element){this.current.element.setAttributeNS(null,'fill-rule','evenodd');}this.fill();}},{key:"fillStroke",value:function fillStroke(){this.stroke();this.fill();}},{key:"eoFillStroke",value:function eoFillStroke(){if(this.current.element){this.current.element.setAttributeNS(null,'fill-rule','evenodd');}this.fillStroke();}},{key:"closeStroke",value:function closeStroke(){this.closePath();this.stroke();}},{key:"closeFillStroke",value:function closeFillStroke(){this.closePath();this.fillStroke();}},{key:"closeEOFillStroke",value:function closeEOFillStroke(){this.closePath();this.eoFillStroke();}},{key:"paintSolidColorImageMask",value:function paintSolidColorImageMask(){var rect=this.svgFactory.createElement('svg:rect');rect.setAttributeNS(null,'x','0');rect.setAttributeNS(null,'y','0');rect.setAttributeNS(null,'width','1px');rect.setAttributeNS(null,'height','1px');rect.setAttributeNS(null,'fill',this.current.fillColor);this._ensureTransformGroup().appendChild(rect);}},{key:"paintJpegXObject",value:function paintJpegXObject(objId,w,h){var imgObj=this.objs.get(objId);var imgEl=this.svgFactory.createElement('svg:image');imgEl.setAttributeNS(XLINK_NS,'xlink:href',imgObj.src);imgEl.setAttributeNS(null,'width',pf(w));imgEl.setAttributeNS(null,'height',pf(h));imgEl.setAttributeNS(null,'x','0');imgEl.setAttributeNS(null,'y',pf(-h));imgEl.setAttributeNS(null,'transform',"scale(".concat(pf(1/w)," ").concat(pf(-1/h),")"));this._ensureTransformGroup().appendChild(imgEl);}},{key:"paintImageXObject",value:function paintImageXObject(objId){var imgData=this.objs.get(objId);if(!imgData){(0,_util.warn)("Dependent image with object ID ".concat(objId," is not ready yet"));return;}this.paintInlineImageXObject(imgData);}},{key:"paintInlineImageXObject",value:function paintInlineImageXObject(imgData,mask){var width=imgData.width;var height=imgData.height;var imgSrc=convertImgDataToPng(imgData,this.forceDataSchema,!!mask);var cliprect=this.svgFactory.createElement('svg:rect');cliprect.setAttributeNS(null,'x','0');cliprect.setAttributeNS(null,'y','0');cliprect.setAttributeNS(null,'width',pf(width));cliprect.setAttributeNS(null,'height',pf(height));this.current.element=cliprect;this.clip('nonzero');var imgEl=this.svgFactory.createElement('svg:image');imgEl.setAttributeNS(XLINK_NS,'xlink:href',imgSrc);imgEl.setAttributeNS(null,'x','0');imgEl.setAttributeNS(null,'y',pf(-height));imgEl.setAttributeNS(null,'width',pf(width)+'px');imgEl.setAttributeNS(null,'height',pf(height)+'px');imgEl.setAttributeNS(null,'transform',"scale(".concat(pf(1/width)," ").concat(pf(-1/height),")"));if(mask){mask.appendChild(imgEl);}else{this._ensureTransformGroup().appendChild(imgEl);}}},{key:"paintImageMaskXObject",value:function paintImageMaskXObject(imgData){var current=this.current;var width=imgData.width;var height=imgData.height;var fillColor=current.fillColor;current.maskId="mask".concat(maskCount++);var mask=this.svgFactory.createElement('svg:mask');mask.setAttributeNS(null,'id',current.maskId);var rect=this.svgFactory.createElement('svg:rect');rect.setAttributeNS(null,'x','0');rect.setAttributeNS(null,'y','0');rect.setAttributeNS(null,'width',pf(width));rect.setAttributeNS(null,'height',pf(height));rect.setAttributeNS(null,'fill',fillColor);rect.setAttributeNS(null,'mask',"url(#".concat(current.maskId,")"));this.defs.appendChild(mask);this._ensureTransformGroup().appendChild(rect);this.paintInlineImageXObject(imgData,mask);}},{key:"paintFormXObjectBegin",value:function paintFormXObjectBegin(matrix,bbox){if(Array.isArray(matrix)&&matrix.length===6){this.transform(matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5]);}if(bbox){var width=bbox[2]-bbox[0];var height=bbox[3]-bbox[1];var cliprect=this.svgFactory.createElement('svg:rect');cliprect.setAttributeNS(null,'x',bbox[0]);cliprect.setAttributeNS(null,'y',bbox[1]);cliprect.setAttributeNS(null,'width',pf(width));cliprect.setAttributeNS(null,'height',pf(height));this.current.element=cliprect;this.clip('nonzero');this.endPath();}}},{key:"paintFormXObjectEnd",value:function paintFormXObjectEnd(){}},{key:"_initialize",value:function _initialize(viewport){var svg=this.svgFactory.create(viewport.width,viewport.height);var definitions=this.svgFactory.createElement('svg:defs');svg.appendChild(definitions);this.defs=definitions;var rootGroup=this.svgFactory.createElement('svg:g');rootGroup.setAttributeNS(null,'transform',pm(viewport.transform));svg.appendChild(rootGroup);this.svg=rootGroup;return svg;}},{key:"_ensureClipGroup",value:function _ensureClipGroup(){if(!this.current.clipGroup){var clipGroup=this.svgFactory.createElement('svg:g');clipGroup.setAttributeNS(null,'clip-path',this.current.activeClipUrl);this.svg.appendChild(clipGroup);this.current.clipGroup=clipGroup;}return this.current.clipGroup;}},{key:"_ensureTransformGroup",value:function _ensureTransformGroup(){if(!this.tgrp){this.tgrp=this.svgFactory.createElement('svg:g');this.tgrp.setAttributeNS(null,'transform',pm(this.transformMatrix));if(this.current.activeClipUrl){this._ensureClipGroup().appendChild(this.tgrp);}else{this.svg.appendChild(this.tgrp);}}return this.tgrp;}}]);return SVGGraphics;}();}/***/},/* 197 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNodeStream=void 0;var _regenerator=_interopRequireDefault(__w_pdfjs_require__(180));var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(198);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return _typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var fs=__webpack_require__(1);var http=__webpack_require__(2);var https=__webpack_require__(3);var url=__webpack_require__("0b16");var fileUriRegex=/^file:\/\/\/[a-zA-Z]:\//;function parseUrl(sourceUrl){var parsedUrl=url.parse(sourceUrl);if(parsedUrl.protocol==='file:'||parsedUrl.host){return parsedUrl;}if(/^[a-z]:[/\\]/i.test(sourceUrl)){return url.parse("file:///".concat(sourceUrl));}if(!parsedUrl.host){parsedUrl.protocol='file:';}return parsedUrl;}var PDFNodeStream=/*#__PURE__*/function(){function PDFNodeStream(source){_classCallCheck(this,PDFNodeStream);this.source=source;this.url=parseUrl(source.url);this.isHttp=this.url.protocol==='http:'||this.url.protocol==='https:';this.isFsUrl=this.url.protocol==='file:';this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}_createClass(PDFNodeStream,[{key:"getFullReader",value:function getFullReader(){(0,_util.assert)(!this._fullRequestReader);this._fullRequestReader=this.isFsUrl?new PDFNodeStreamFsFullReader(this):new PDFNodeStreamFullReader(this);return this._fullRequestReader;}},{key:"getRangeReader",value:function getRangeReader(start,end){if(end<=this._progressiveDataLength){return null;}var rangeReader=this.isFsUrl?new PDFNodeStreamFsRangeReader(this,start,end):new PDFNodeStreamRangeReader(this,start,end);this._rangeRequestReaders.push(rangeReader);return rangeReader;}},{key:"cancelAllRequests",value:function cancelAllRequests(reason){if(this._fullRequestReader){this._fullRequestReader.cancel(reason);}var readers=this._rangeRequestReaders.slice(0);readers.forEach(function(reader){reader.cancel(reason);});}},{key:"_progressiveDataLength",get:function get(){return this._fullRequestReader?this._fullRequestReader._loaded:0;}}]);return PDFNodeStream;}();exports.PDFNodeStream=PDFNodeStream;var BaseFullReader=/*#__PURE__*/function(){function BaseFullReader(stream){_classCallCheck(this,BaseFullReader);this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;var source=stream.source;this._contentLength=source.length;this._loaded=0;this._filename=null;this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._readableStream=null;this._readCapability=(0,_util.createPromiseCapability)();this._headersCapability=(0,_util.createPromiseCapability)();}_createClass(BaseFullReader,[{key:"read",value:function(){var _read=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var chunk,buffer;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return this._readCapability.promise;case 2:if(!this._done){_context.next=4;break;}return _context.abrupt("return",{value:undefined,done:true});case 4:if(!this._storedError){_context.next=6;break;}throw this._storedError;case 6:chunk=this._readableStream.read();if(!(chunk===null)){_context.next=10;break;}this._readCapability=(0,_util.createPromiseCapability)();return _context.abrupt("return",this.read());case 10:this._loaded+=chunk.length;if(this.onProgress){this.onProgress({loaded:this._loaded,total:this._contentLength});}buffer=new Uint8Array(chunk).buffer;return _context.abrupt("return",{value:buffer,done:false});case 14:case"end":return _context.stop();}}},_callee,this);}));function read(){return _read.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}},{key:"_error",value:function _error(reason){this._storedError=reason;this._readCapability.resolve();}},{key:"_setReadableStream",value:function _setReadableStream(readableStream){var _this=this;this._readableStream=readableStream;readableStream.on('readable',function(){_this._readCapability.resolve();});readableStream.on('end',function(){readableStream.destroy();_this._done=true;_this._readCapability.resolve();});readableStream.on('error',function(reason){_this._error(reason);});if(!this._isStreamingSupported&&this._isRangeSupported){this._error(new _util.AbortException('streaming is disabled'));}if(this._storedError){this._readableStream.destroy(this._storedError);}}},{key:"headersReady",get:function get(){return this._headersCapability.promise;}},{key:"filename",get:function get(){return this._filename;}},{key:"contentLength",get:function get(){return this._contentLength;}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported;}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported;}}]);return BaseFullReader;}();var BaseRangeReader=/*#__PURE__*/function(){function BaseRangeReader(stream){_classCallCheck(this,BaseRangeReader);this._url=stream.url;this._done=false;this._storedError=null;this.onProgress=null;this._loaded=0;this._readableStream=null;this._readCapability=(0,_util.createPromiseCapability)();var source=stream.source;this._isStreamingSupported=!source.disableStream;}_createClass(BaseRangeReader,[{key:"read",value:function(){var _read2=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){var chunk,buffer;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this._readCapability.promise;case 2:if(!this._done){_context2.next=4;break;}return _context2.abrupt("return",{value:undefined,done:true});case 4:if(!this._storedError){_context2.next=6;break;}throw this._storedError;case 6:chunk=this._readableStream.read();if(!(chunk===null)){_context2.next=10;break;}this._readCapability=(0,_util.createPromiseCapability)();return _context2.abrupt("return",this.read());case 10:this._loaded+=chunk.length;if(this.onProgress){this.onProgress({loaded:this._loaded});}buffer=new Uint8Array(chunk).buffer;return _context2.abrupt("return",{value:buffer,done:false});case 14:case"end":return _context2.stop();}}},_callee2,this);}));function read(){return _read2.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){if(!this._readableStream){this._error(reason);return;}this._readableStream.destroy(reason);}},{key:"_error",value:function _error(reason){this._storedError=reason;this._readCapability.resolve();}},{key:"_setReadableStream",value:function _setReadableStream(readableStream){var _this2=this;this._readableStream=readableStream;readableStream.on('readable',function(){_this2._readCapability.resolve();});readableStream.on('end',function(){readableStream.destroy();_this2._done=true;_this2._readCapability.resolve();});readableStream.on('error',function(reason){_this2._error(reason);});if(this._storedError){this._readableStream.destroy(this._storedError);}}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported;}}]);return BaseRangeReader;}();function createRequestOptions(url,headers){return{protocol:url.protocol,auth:url.auth,host:url.hostname,port:url.port,path:url.path,method:'GET',headers:headers};}var PDFNodeStreamFullReader=/*#__PURE__*/function(_BaseFullReader){_inherits(PDFNodeStreamFullReader,_BaseFullReader);function PDFNodeStreamFullReader(stream){var _this3;_classCallCheck(this,PDFNodeStreamFullReader);_this3=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFullReader).call(this,stream));var handleResponse=function handleResponse(response){if(response.statusCode===404){var error=new _util.MissingPDFException("Missing PDF \"".concat(_this3._url,"\"."));_this3._storedError=error;_this3._headersCapability.reject(error);return;}_this3._headersCapability.resolve();_this3._setReadableStream(response);var getResponseHeader=function getResponseHeader(name){return _this3._readableStream.headers[name.toLowerCase()];};var _validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:stream.isHttp,rangeChunkSize:_this3._rangeChunkSize,disableRange:_this3._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength;_this3._isRangeSupported=allowRangeRequests;_this3._contentLength=suggestedLength||_this3._contentLength;_this3._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);};_this3._request=null;if(_this3._url.protocol==='http:'){_this3._request=http.request(createRequestOptions(_this3._url,stream.httpHeaders),handleResponse);}else{_this3._request=https.request(createRequestOptions(_this3._url,stream.httpHeaders),handleResponse);}_this3._request.on('error',function(reason){_this3._storedError=reason;_this3._headersCapability.reject(reason);});_this3._request.end();return _this3;}return PDFNodeStreamFullReader;}(BaseFullReader);var PDFNodeStreamRangeReader=/*#__PURE__*/function(_BaseRangeReader){_inherits(PDFNodeStreamRangeReader,_BaseRangeReader);function PDFNodeStreamRangeReader(stream,start,end){var _this4;_classCallCheck(this,PDFNodeStreamRangeReader);_this4=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamRangeReader).call(this,stream));_this4._httpHeaders={};for(var property in stream.httpHeaders){var value=stream.httpHeaders[property];if(typeof value==='undefined'){continue;}_this4._httpHeaders[property]=value;}_this4._httpHeaders['Range']="bytes=".concat(start,"-").concat(end-1);var handleResponse=function handleResponse(response){if(response.statusCode===404){var error=new _util.MissingPDFException("Missing PDF \"".concat(_this4._url,"\"."));_this4._storedError=error;return;}_this4._setReadableStream(response);};_this4._request=null;if(_this4._url.protocol==='http:'){_this4._request=http.request(createRequestOptions(_this4._url,_this4._httpHeaders),handleResponse);}else{_this4._request=https.request(createRequestOptions(_this4._url,_this4._httpHeaders),handleResponse);}_this4._request.on('error',function(reason){_this4._storedError=reason;});_this4._request.end();return _this4;}return PDFNodeStreamRangeReader;}(BaseRangeReader);var PDFNodeStreamFsFullReader=/*#__PURE__*/function(_BaseFullReader2){_inherits(PDFNodeStreamFsFullReader,_BaseFullReader2);function PDFNodeStreamFsFullReader(stream){var _this5;_classCallCheck(this,PDFNodeStreamFsFullReader);_this5=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFsFullReader).call(this,stream));var path=decodeURIComponent(_this5._url.path);if(fileUriRegex.test(_this5._url.href)){path=path.replace(/^\//,'');}fs.lstat(path,function(error,stat){if(error){if(error.code==='ENOENT'){error=new _util.MissingPDFException("Missing PDF \"".concat(path,"\"."));}_this5._storedError=error;_this5._headersCapability.reject(error);return;}_this5._contentLength=stat.size;_this5._setReadableStream(fs.createReadStream(path));_this5._headersCapability.resolve();});return _this5;}return PDFNodeStreamFsFullReader;}(BaseFullReader);var PDFNodeStreamFsRangeReader=/*#__PURE__*/function(_BaseRangeReader2){_inherits(PDFNodeStreamFsRangeReader,_BaseRangeReader2);function PDFNodeStreamFsRangeReader(stream,start,end){var _this6;_classCallCheck(this,PDFNodeStreamFsRangeReader);_this6=_possibleConstructorReturn(this,_getPrototypeOf(PDFNodeStreamFsRangeReader).call(this,stream));var path=decodeURIComponent(_this6._url.path);if(fileUriRegex.test(_this6._url.href)){path=path.replace(/^\//,'');}_this6._setReadableStream(fs.createReadStream(path,{start:start,end:end-1}));return _this6;}return PDFNodeStreamFsRangeReader;}(BaseRangeReader);/***/},/* 198 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.createResponseStatusError=createResponseStatusError;exports.extractFilenameFromHeader=extractFilenameFromHeader;exports.validateRangeRequestCapabilities=validateRangeRequestCapabilities;exports.validateResponseStatus=validateResponseStatus;var _util=__w_pdfjs_require__(1);var _content_disposition=__w_pdfjs_require__(199);function validateRangeRequestCapabilities(_ref){var getResponseHeader=_ref.getResponseHeader,isHttp=_ref.isHttp,rangeChunkSize=_ref.rangeChunkSize,disableRange=_ref.disableRange;(0,_util.assert)(rangeChunkSize>0,'Range chunk size must be larger than zero');var returnValues={allowRangeRequests:false,suggestedLength:undefined};var length=parseInt(getResponseHeader('Content-Length'),10);if(!Number.isInteger(length)){return returnValues;}returnValues.suggestedLength=length;if(length<=2*rangeChunkSize){return returnValues;}if(disableRange||!isHttp){return returnValues;}if(getResponseHeader('Accept-Ranges')!=='bytes'){return returnValues;}var contentEncoding=getResponseHeader('Content-Encoding')||'identity';if(contentEncoding!=='identity'){return returnValues;}returnValues.allowRangeRequests=true;return returnValues;}function extractFilenameFromHeader(getResponseHeader){var contentDisposition=getResponseHeader('Content-Disposition');if(contentDisposition){var filename=(0,_content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);if(filename.includes('%')){try{filename=decodeURIComponent(filename);}catch(ex){}}if(/\.pdf$/i.test(filename)){return filename;}}return null;}function createResponseStatusError(status,url){if(status===404||status===0&&/^file:/.test(url)){return new _util.MissingPDFException('Missing PDF "'+url+'".');}return new _util.UnexpectedResponseException('Unexpected server response ('+status+') while retrieving PDF "'+url+'".',status);}function validateResponseStatus(status){return status===200||status===206;}/***/},/* 199 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getFilenameFromContentDispositionHeader=getFilenameFromContentDispositionHeader;function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function getFilenameFromContentDispositionHeader(contentDisposition){var needsEncodingFixup=true;var tmp=toParamRegExp('filename\\*','i').exec(contentDisposition);if(tmp){tmp=tmp[1];var filename=rfc2616unquote(tmp);filename=unescape(filename);filename=rfc5987decode(filename);filename=rfc2047decode(filename);return fixupEncoding(filename);}tmp=rfc2231getparam(contentDisposition);if(tmp){var _filename=rfc2047decode(tmp);return fixupEncoding(_filename);}tmp=toParamRegExp('filename','i').exec(contentDisposition);if(tmp){tmp=tmp[1];var _filename2=rfc2616unquote(tmp);_filename2=rfc2047decode(_filename2);return fixupEncoding(_filename2);}function toParamRegExp(attributePattern,flags){return new RegExp('(?:^|;)\\s*'+attributePattern+'\\s*=\\s*'+'('+'[^";\\s][^;\\s]*'+'|'+'"(?:[^"\\\\]|\\\\"?)+"?'+')',flags);}function textdecode(encoding,value){if(encoding){if(!/^[\x00-\xFF]+$/.test(value)){return value;}try{var decoder=new TextDecoder(encoding,{fatal:true});var bytes=Array.from(value,function(ch){return ch.charCodeAt(0)&0xFF;});value=decoder.decode(new Uint8Array(bytes));needsEncodingFixup=false;}catch(e){if(/^utf-?8$/i.test(encoding)){try{value=decodeURIComponent(escape(value));needsEncodingFixup=false;}catch(err){}}}}return value;}function fixupEncoding(value){if(needsEncodingFixup&&/[\x80-\xff]/.test(value)){value=textdecode('utf-8',value);if(needsEncodingFixup){value=textdecode('iso-8859-1',value);}}return value;}function rfc2231getparam(contentDisposition){var matches=[],match;var iter=toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)','ig');while((match=iter.exec(contentDisposition))!==null){var _match=match,_match2=_slicedToArray(_match,4),n=_match2[1],quot=_match2[2],part=_match2[3];n=parseInt(n,10);if(n in matches){if(n===0){break;}continue;}matches[n]=[quot,part];}var parts=[];for(var n=0;n<matches.length;++n){if(!(n in matches)){break;}var _matches$n=_slicedToArray(matches[n],2),quot=_matches$n[0],part=_matches$n[1];part=rfc2616unquote(part);if(quot){part=unescape(part);if(n===0){part=rfc5987decode(part);}}parts.push(part);}return parts.join('');}function rfc2616unquote(value){if(value.startsWith('"')){var parts=value.slice(1).split('\\"');for(var i=0;i<parts.length;++i){var quotindex=parts[i].indexOf('"');if(quotindex!==-1){parts[i]=parts[i].slice(0,quotindex);parts.length=i+1;}parts[i]=parts[i].replace(/\\(.)/g,'$1');}value=parts.join('"');}return value;}function rfc5987decode(extvalue){var encodingend=extvalue.indexOf('\'');if(encodingend===-1){return extvalue;}var encoding=extvalue.slice(0,encodingend);var langvalue=extvalue.slice(encodingend+1);var value=langvalue.replace(/^[^']*'/,'');return textdecode(encoding,value);}function rfc2047decode(value){if(!value.startsWith('=?')||/[\x00-\x19\x80-\xff]/.test(value)){return value;}return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(_,charset,encoding,text){if(encoding==='q'||encoding==='Q'){text=text.replace(/_/g,' ');text=text.replace(/=([0-9a-fA-F]{2})/g,function(_,hex){return String.fromCharCode(parseInt(hex,16));});return textdecode(charset,text);}try{text=atob(text);}catch(e){}return textdecode(charset,text);});}return'';}/***/},/* 200 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PDFNetworkStream=void 0;var _regenerator=_interopRequireDefault(__w_pdfjs_require__(180));var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(198);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;};var OK_RESPONSE=200;var PARTIAL_CONTENT_RESPONSE=206;function getArrayBuffer(xhr){var data=xhr.response;if(typeof data!=='string'){return data;}var array=(0,_util.stringToBytes)(data);return array.buffer;}var NetworkManager=/*#__PURE__*/function(){function NetworkManager(url,args){_classCallCheck(this,NetworkManager);this.url=url;args=args||{};this.isHttp=/^https?:/i.test(url);this.httpHeaders=this.isHttp&&args.httpHeaders||{};this.withCredentials=args.withCredentials||false;this.getXhr=args.getXhr||function NetworkManager_getXhr(){return new XMLHttpRequest();};this.currXhrId=0;this.pendingRequests=Object.create(null);}_createClass(NetworkManager,[{key:"requestRange",value:function requestRange(begin,end,listeners){var args={begin:begin,end:end};for(var prop in listeners){args[prop]=listeners[prop];}return this.request(args);}},{key:"requestFull",value:function requestFull(listeners){return this.request(listeners);}},{key:"request",value:function request(args){var xhr=this.getXhr();var xhrId=this.currXhrId++;var pendingRequest=this.pendingRequests[xhrId]={xhr:xhr};xhr.open('GET',this.url);xhr.withCredentials=this.withCredentials;for(var property in this.httpHeaders){var value=this.httpHeaders[property];if(typeof value==='undefined'){continue;}xhr.setRequestHeader(property,value);}if(this.isHttp&&'begin'in args&&'end'in args){xhr.setRequestHeader('Range',"bytes=".concat(args.begin,"-").concat(args.end-1));pendingRequest.expectedStatus=PARTIAL_CONTENT_RESPONSE;}else{pendingRequest.expectedStatus=OK_RESPONSE;}xhr.responseType='arraybuffer';if(args.onError){xhr.onerror=function(evt){args.onError(xhr.status);};}xhr.onreadystatechange=this.onStateChange.bind(this,xhrId);xhr.onprogress=this.onProgress.bind(this,xhrId);pendingRequest.onHeadersReceived=args.onHeadersReceived;pendingRequest.onDone=args.onDone;pendingRequest.onError=args.onError;pendingRequest.onProgress=args.onProgress;xhr.send(null);return xhrId;}},{key:"onProgress",value:function onProgress(xhrId,evt){var pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}if(pendingRequest.onProgress){pendingRequest.onProgress(evt);}}},{key:"onStateChange",value:function onStateChange(xhrId,evt){var pendingRequest=this.pendingRequests[xhrId];if(!pendingRequest){return;}var xhr=pendingRequest.xhr;if(xhr.readyState>=2&&pendingRequest.onHeadersReceived){pendingRequest.onHeadersReceived();delete pendingRequest.onHeadersReceived;}if(xhr.readyState!==4){return;}if(!(xhrId in this.pendingRequests)){return;}delete this.pendingRequests[xhrId];if(xhr.status===0&&this.isHttp){if(pendingRequest.onError){pendingRequest.onError(xhr.status);}return;}var xhrStatus=xhr.status||OK_RESPONSE;var ok_response_on_range_request=xhrStatus===OK_RESPONSE&&pendingRequest.expectedStatus===PARTIAL_CONTENT_RESPONSE;if(!ok_response_on_range_request&&xhrStatus!==pendingRequest.expectedStatus){if(pendingRequest.onError){pendingRequest.onError(xhr.status);}return;}var chunk=getArrayBuffer(xhr);if(xhrStatus===PARTIAL_CONTENT_RESPONSE){var rangeHeader=xhr.getResponseHeader('Content-Range');var matches=/bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);pendingRequest.onDone({begin:parseInt(matches[1],10),chunk:chunk});}else if(chunk){pendingRequest.onDone({begin:0,chunk:chunk});}else if(pendingRequest.onError){pendingRequest.onError(xhr.status);}}},{key:"hasPendingRequests",value:function hasPendingRequests(){for(var xhrId in this.pendingRequests){return true;}return false;}},{key:"getRequestXhr",value:function getRequestXhr(xhrId){return this.pendingRequests[xhrId].xhr;}},{key:"isPendingRequest",value:function isPendingRequest(xhrId){return xhrId in this.pendingRequests;}},{key:"abortAllRequests",value:function abortAllRequests(){for(var xhrId in this.pendingRequests){this.abortRequest(xhrId|0);}}},{key:"abortRequest",value:function abortRequest(xhrId){var xhr=this.pendingRequests[xhrId].xhr;delete this.pendingRequests[xhrId];xhr.abort();}}]);return NetworkManager;}();var PDFNetworkStream=/*#__PURE__*/function(){function PDFNetworkStream(source){_classCallCheck(this,PDFNetworkStream);this._source=source;this._manager=new NetworkManager(source.url,{httpHeaders:source.httpHeaders,withCredentials:source.withCredentials});this._rangeChunkSize=source.rangeChunkSize;this._fullRequestReader=null;this._rangeRequestReaders=[];}_createClass(PDFNetworkStream,[{key:"_onRangeRequestReaderClosed",value:function _onRangeRequestReaderClosed(reader){var i=this._rangeRequestReaders.indexOf(reader);if(i>=0){this._rangeRequestReaders.splice(i,1);}}},{key:"getFullReader",value:function getFullReader(){(0,_util.assert)(!this._fullRequestReader);this._fullRequestReader=new PDFNetworkStreamFullRequestReader(this._manager,this._source);return this._fullRequestReader;}},{key:"getRangeReader",value:function getRangeReader(begin,end){var reader=new PDFNetworkStreamRangeRequestReader(this._manager,begin,end);reader.onClosed=this._onRangeRequestReaderClosed.bind(this);this._rangeRequestReaders.push(reader);return reader;}},{key:"cancelAllRequests",value:function cancelAllRequests(reason){if(this._fullRequestReader){this._fullRequestReader.cancel(reason);}var readers=this._rangeRequestReaders.slice(0);readers.forEach(function(reader){reader.cancel(reason);});}}]);return PDFNetworkStream;}();exports.PDFNetworkStream=PDFNetworkStream;var PDFNetworkStreamFullRequestReader=/*#__PURE__*/function(){function PDFNetworkStreamFullRequestReader(manager,source){_classCallCheck(this,PDFNetworkStreamFullRequestReader);this._manager=manager;var args={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=source.url;this._fullRequestId=manager.requestFull(args);this._headersReceivedCapability=(0,_util.createPromiseCapability)();this._disableRange=source.disableRange||false;this._contentLength=source.length;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}this._isStreamingSupported=false;this._isRangeSupported=false;this._cachedChunks=[];this._requests=[];this._done=false;this._storedError=undefined;this._filename=null;this.onProgress=null;}_createClass(PDFNetworkStreamFullRequestReader,[{key:"_onHeadersReceived",value:function _onHeadersReceived(){var fullRequestXhrId=this._fullRequestId;var fullRequestXhr=this._manager.getRequestXhr(fullRequestXhrId);var getResponseHeader=function getResponseHeader(name){return fullRequestXhr.getResponseHeader(name);};var _validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength;if(allowRangeRequests){this._isRangeSupported=true;}this._contentLength=suggestedLength||this._contentLength;this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);if(this._isRangeSupported){this._manager.abortRequest(fullRequestXhrId);}this._headersReceivedCapability.resolve();}},{key:"_onDone",value:function _onDone(args){if(args){if(this._requests.length>0){var requestCapability=this._requests.shift();requestCapability.resolve({value:args.chunk,done:false});}else{this._cachedChunks.push(args.chunk);}}this._done=true;if(this._cachedChunks.length>0){return;}this._requests.forEach(function(requestCapability){requestCapability.resolve({value:undefined,done:true});});this._requests=[];}},{key:"_onError",value:function _onError(status){var url=this._url;var exception=(0,_network_utils.createResponseStatusError)(status,url);this._storedError=exception;this._headersReceivedCapability.reject(exception);this._requests.forEach(function(requestCapability){requestCapability.reject(exception);});this._requests=[];this._cachedChunks=[];}},{key:"_onProgress",value:function _onProgress(data){if(this.onProgress){this.onProgress({loaded:data.loaded,total:data.lengthComputable?data.total:this._contentLength});}}},{key:"read",value:function(){var _read=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var chunk,requestCapability;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this._storedError){_context.next=2;break;}throw this._storedError;case 2:if(!(this._cachedChunks.length>0)){_context.next=5;break;}chunk=this._cachedChunks.shift();return _context.abrupt("return",{value:chunk,done:false});case 5:if(!this._done){_context.next=7;break;}return _context.abrupt("return",{value:undefined,done:true});case 7:requestCapability=(0,_util.createPromiseCapability)();this._requests.push(requestCapability);return _context.abrupt("return",requestCapability.promise);case 10:case"end":return _context.stop();}}},_callee,this);}));function read(){return _read.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){this._done=true;this._headersReceivedCapability.reject(reason);this._requests.forEach(function(requestCapability){requestCapability.resolve({value:undefined,done:true});});this._requests=[];if(this._manager.isPendingRequest(this._fullRequestId)){this._manager.abortRequest(this._fullRequestId);}this._fullRequestReader=null;}},{key:"filename",get:function get(){return this._filename;}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported;}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported;}},{key:"contentLength",get:function get(){return this._contentLength;}},{key:"headersReady",get:function get(){return this._headersReceivedCapability.promise;}}]);return PDFNetworkStreamFullRequestReader;}();var PDFNetworkStreamRangeRequestReader=/*#__PURE__*/function(){function PDFNetworkStreamRangeRequestReader(manager,begin,end){_classCallCheck(this,PDFNetworkStreamRangeRequestReader);this._manager=manager;var args={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)};this._requestId=manager.requestRange(begin,end,args);this._requests=[];this._queuedChunk=null;this._done=false;this.onProgress=null;this.onClosed=null;}_createClass(PDFNetworkStreamRangeRequestReader,[{key:"_close",value:function _close(){if(this.onClosed){this.onClosed(this);}}},{key:"_onDone",value:function _onDone(data){var chunk=data.chunk;if(this._requests.length>0){var requestCapability=this._requests.shift();requestCapability.resolve({value:chunk,done:false});}else{this._queuedChunk=chunk;}this._done=true;this._requests.forEach(function(requestCapability){requestCapability.resolve({value:undefined,done:true});});this._requests=[];this._close();}},{key:"_onProgress",value:function _onProgress(evt){if(!this.isStreamingSupported&&this.onProgress){this.onProgress({loaded:evt.loaded});}}},{key:"read",value:function(){var _read2=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){var chunk,requestCapability;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(this._queuedChunk!==null)){_context2.next=4;break;}chunk=this._queuedChunk;this._queuedChunk=null;return _context2.abrupt("return",{value:chunk,done:false});case 4:if(!this._done){_context2.next=6;break;}return _context2.abrupt("return",{value:undefined,done:true});case 6:requestCapability=(0,_util.createPromiseCapability)();this._requests.push(requestCapability);return _context2.abrupt("return",requestCapability.promise);case 9:case"end":return _context2.stop();}}},_callee2,this);}));function read(){return _read2.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){this._done=true;this._requests.forEach(function(requestCapability){requestCapability.resolve({value:undefined,done:true});});this._requests=[];if(this._manager.isPendingRequest(this._requestId)){this._manager.abortRequest(this._requestId);}this._close();}},{key:"isStreamingSupported",get:function get(){return false;}}]);return PDFNetworkStreamRangeRequestReader;}();/***/},/* 201 */ /***/function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.PDFFetchStream=void 0;var _regenerator=_interopRequireDefault(__w_pdfjs_require__(180));var _util=__w_pdfjs_require__(1);var _network_utils=__w_pdfjs_require__(198);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function createFetchOptions(headers,withCredentials,abortController){return{method:'GET',headers:headers,signal:abortController&&abortController.signal,mode:'cors',credentials:withCredentials?'include':'same-origin',redirect:'follow'};}var PDFFetchStream=/*#__PURE__*/function(){function PDFFetchStream(source){_classCallCheck(this,PDFFetchStream);this.source=source;this.isHttp=/^https?:/i.test(source.url);this.httpHeaders=this.isHttp&&source.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[];}_createClass(PDFFetchStream,[{key:"getFullReader",value:function getFullReader(){(0,_util.assert)(!this._fullRequestReader);this._fullRequestReader=new PDFFetchStreamReader(this);return this._fullRequestReader;}},{key:"getRangeReader",value:function getRangeReader(begin,end){if(end<=this._progressiveDataLength){return null;}var reader=new PDFFetchStreamRangeReader(this,begin,end);this._rangeRequestReaders.push(reader);return reader;}},{key:"cancelAllRequests",value:function cancelAllRequests(reason){if(this._fullRequestReader){this._fullRequestReader.cancel(reason);}var readers=this._rangeRequestReaders.slice(0);readers.forEach(function(reader){reader.cancel(reason);});}},{key:"_progressiveDataLength",get:function get(){return this._fullRequestReader?this._fullRequestReader._loaded:0;}}]);return PDFFetchStream;}();exports.PDFFetchStream=PDFFetchStream;var PDFFetchStreamReader=/*#__PURE__*/function(){function PDFFetchStreamReader(stream){var _this=this;_classCallCheck(this,PDFFetchStreamReader);this._stream=stream;this._reader=null;this._loaded=0;this._filename=null;var source=stream.source;this._withCredentials=source.withCredentials||false;this._contentLength=source.length;this._headersCapability=(0,_util.createPromiseCapability)();this._disableRange=source.disableRange||false;this._rangeChunkSize=source.rangeChunkSize;if(!this._rangeChunkSize&&!this._disableRange){this._disableRange=true;}if(typeof AbortController!=='undefined'){this._abortController=new AbortController();}this._isStreamingSupported=!source.disableStream;this._isRangeSupported=!source.disableRange;this._headers=new Headers();for(var property in this._stream.httpHeaders){var value=this._stream.httpHeaders[property];if(typeof value==='undefined'){continue;}this._headers.append(property,value);}var url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(response){if(!(0,_network_utils.validateResponseStatus)(response.status)){throw(0,_network_utils.createResponseStatusError)(response.status,url);}_this._reader=response.body.getReader();_this._headersCapability.resolve();var getResponseHeader=function getResponseHeader(name){return response.headers.get(name);};var _validateRangeRequest=(0,_network_utils.validateRangeRequestCapabilities)({getResponseHeader:getResponseHeader,isHttp:_this._stream.isHttp,rangeChunkSize:_this._rangeChunkSize,disableRange:_this._disableRange}),allowRangeRequests=_validateRangeRequest.allowRangeRequests,suggestedLength=_validateRangeRequest.suggestedLength;_this._isRangeSupported=allowRangeRequests;_this._contentLength=suggestedLength||_this._contentLength;_this._filename=(0,_network_utils.extractFilenameFromHeader)(getResponseHeader);if(!_this._isStreamingSupported&&_this._isRangeSupported){_this.cancel(new _util.AbortException('Streaming is disabled.'));}})["catch"](this._headersCapability.reject);this.onProgress=null;}_createClass(PDFFetchStreamReader,[{key:"read",value:function(){var _read=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _ref,value,done,buffer;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return this._headersCapability.promise;case 2:_context.next=4;return this._reader.read();case 4:_ref=_context.sent;value=_ref.value;done=_ref.done;if(!done){_context.next=9;break;}return _context.abrupt("return",{value:value,done:done});case 9:this._loaded+=value.byteLength;if(this.onProgress){this.onProgress({loaded:this._loaded,total:this._contentLength});}buffer=new Uint8Array(value).buffer;return _context.abrupt("return",{value:buffer,done:false});case 13:case"end":return _context.stop();}}},_callee,this);}));function read(){return _read.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){if(this._reader){this._reader.cancel(reason);}if(this._abortController){this._abortController.abort();}}},{key:"headersReady",get:function get(){return this._headersCapability.promise;}},{key:"filename",get:function get(){return this._filename;}},{key:"contentLength",get:function get(){return this._contentLength;}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported;}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported;}}]);return PDFFetchStreamReader;}();var PDFFetchStreamRangeReader=/*#__PURE__*/function(){function PDFFetchStreamRangeReader(stream,begin,end){var _this2=this;_classCallCheck(this,PDFFetchStreamRangeReader);this._stream=stream;this._reader=null;this._loaded=0;var source=stream.source;this._withCredentials=source.withCredentials||false;this._readCapability=(0,_util.createPromiseCapability)();this._isStreamingSupported=!source.disableStream;if(typeof AbortController!=='undefined'){this._abortController=new AbortController();}this._headers=new Headers();for(var property in this._stream.httpHeaders){var value=this._stream.httpHeaders[property];if(typeof value==='undefined'){continue;}this._headers.append(property,value);}this._headers.append('Range',"bytes=".concat(begin,"-").concat(end-1));var url=source.url;fetch(url,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(response){if(!(0,_network_utils.validateResponseStatus)(response.status)){throw(0,_network_utils.createResponseStatusError)(response.status,url);}_this2._readCapability.resolve();_this2._reader=response.body.getReader();});this.onProgress=null;}_createClass(PDFFetchStreamRangeReader,[{key:"read",value:function(){var _read2=_asyncToGenerator(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){var _ref2,value,done,buffer;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this._readCapability.promise;case 2:_context2.next=4;return this._reader.read();case 4:_ref2=_context2.sent;value=_ref2.value;done=_ref2.done;if(!done){_context2.next=9;break;}return _context2.abrupt("return",{value:value,done:done});case 9:this._loaded+=value.byteLength;if(this.onProgress){this.onProgress({loaded:this._loaded});}buffer=new Uint8Array(value).buffer;return _context2.abrupt("return",{value:buffer,done:false});case 13:case"end":return _context2.stop();}}},_callee2,this);}));function read(){return _read2.apply(this,arguments);}return read;}()},{key:"cancel",value:function cancel(reason){if(this._reader){this._reader.cancel(reason);}if(this._abortController){this._abortController.abort();}}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported;}}]);return PDFFetchStreamRangeReader;}();/***/}/******/]));});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer, __webpack_require__("c8ba"), __webpack_require__("4362"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "cfc3":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d139":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $find = __webpack_require__("b727").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("e330");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4c3":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");
var global = __webpack_require__("da84");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var TypeError = global.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d5d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $forEach = __webpack_require__("b727").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var uncurryThis = __webpack_require__("e330");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d86b":
/***/ (function(module, exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__("d039");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "d998":
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__("342f");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "dca8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var FREEZING = __webpack_require__("bb2f");
var fails = __webpack_require__("d039");
var isObject = __webpack_require__("861d");
var onFreeze = __webpack_require__("f183").onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "dfb9":
/***/ (function(module, exports) {

module.exports = function (Constructor, list) {
  var index = 0;
  var length = list.length;
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var toString = __webpack_require__("577e");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e099":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e58c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__("2ba4");
var toIndexedObject = __webpack_require__("fc6a");
var toIntegerOrInfinity = __webpack_require__("5926");
var lengthOfArrayLike = __webpack_require__("07fa");
var arrayMethodIsStrict = __webpack_require__("a640");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var call = __webpack_require__("c65b");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var aCallable = __webpack_require__("59ed");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_BROWSER = __webpack_require__("6069");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            call(then, result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reactions = state.reactions;
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      reactions[reactions.length] = reaction;
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e91f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $indexOf = __webpack_require__("4d64").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e9c4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var apply = __webpack_require__("2ba4");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");

var Array = global.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array(l); i < l; i++) args[i] = arguments[i];
      var result = apply($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}


/***/ }),

/***/ "eac5":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "ebb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var hasOwn = __webpack_require__("1a2d");
var classof = __webpack_require__("f5df");
var tryToString = __webpack_require__("0d51");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var defineProperty = __webpack_require__("9bf2").f;
var isPrototypeOf = __webpack_require__("3a9b");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var wellKnownSymbol = __webpack_require__("b622");
var uid = __webpack_require__("90e3");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) { /* empty */ }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var hasOwn = __webpack_require__("1a2d");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternalModule = __webpack_require__("057f");
var isExtensible = __webpack_require__("4fad");
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f36a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "f5b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var codeAt = __webpack_require__("6547").codeAt;

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f6d6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var toAbsoluteIndex = __webpack_require__("23cb");

var RangeError = global.RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8c9":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var setToStringTag = __webpack_require__("d44e");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ "f8cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var toIntegerOrInfinity = __webpack_require__("5926");

var RangeError = global.RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a19cd28c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/cafe-pdf/src/index.vue?vue&type=template&id=23412fae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-box",style:({ width: _vm.formateWidth, height: _vm.formateHeight })},[(_vm.$slots.header)?_c('div',{staticClass:"pdf-header"},[_vm._t("header")],2):_vm._e(),_c('div',{staticClass:"pdf-body"},[(_vm.catalogue && _vm.catalogue.length > 0 && _vm.showNav)?_c('div',{staticClass:"pdf-catalogue"},[_c('tree',{attrs:{"list":_vm.catalogue},on:{"item-click":_vm.nav}})],1):_vm._e(),_c('div',{ref:"container",staticClass:"pdf-container",on:{"scroll":_vm.fnScroll}},[_c('div',{ref:"viewer",staticClass:"pdf-viewer"})])]),(_vm.$slots.footer)?_c('div',{staticClass:"pdf-footer"},[_vm._t("footer")],2):_vm._e(),(_vm.pageLoading)?_c('div',{staticClass:"page-loading"},[_c('em',[_vm._v(_vm._s(_vm.loadingNum)+" / "+_vm._s(_vm.countNum))]),_c('progress',{staticClass:"page-progress",attrs:{"max":_vm.countNum},domProps:{"value":_vm.loadingNum}})]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./lib/cafe-pdf/src/index.vue?vue&type=template&id=23412fae&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a19cd28c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/cafe-pdf/src/tree/index.vue?vue&type=template&id=b8faaf0e&
var treevue_type_template_id_b8faaf0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',_vm._l((_vm.list),function(item,index){return _c('li',{key:item.title + index,staticClass:"item"},[_c('div',{staticClass:"item-title",on:{"click":function($event){return _vm.itemClick(item)}}},[(item.items.length > 0)?_c('i',{staticClass:"icon",class:[{ 'up-arrow': item.show }],on:{"click":function($event){$event.stopPropagation();return _vm.toggle(item)}}}):_vm._e(),_c('em',[_vm._v(_vm._s(item.title))])]),_c('transition',{attrs:{"name":"fade"}},[(item.items.length > 0)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.show),expression:"item.show"}],key:item.title,staticClass:"item-children"},[_c('tree-list',_vm._g(_vm._b({attrs:{"list":item.items}},'tree-list',_vm.$attrs,false),_vm.$listeners))],1):_vm._e()])],1)}),0)}
var treevue_type_template_id_b8faaf0e_staticRenderFns = []


// CONCATENATED MODULE: ./lib/cafe-pdf/src/tree/index.vue?vue&type=template&id=b8faaf0e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/cafe-pdf/src/tree/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 组件名称 from '组件路径';
/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'tree-list',
  //引入组件
  props: {
    list: {
      type: Array
    }
  },
  //引入混淆
  mixins: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data: function data() {
    //这里存放数据
    return {
      select: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    itemClick: function itemClick(item) {
      this.$emit('item-click', item);
    },
    toggle: function toggle(item) {
      item.show = !item.show;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created: function created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted: function mounted() {},
  //生命周期 - 创建之前
  beforeCreate: function beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount: function beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate: function beforeUpdate() {},
  //生命周期 - 更新之后
  updated: function updated() {},
  //生命周期 - 销毁之前
  beforeDestroy: function beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed: function destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated: function activated() {}
});
// CONCATENATED MODULE: ./lib/cafe-pdf/src/tree/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./lib/cafe-pdf/src/tree/index.vue?vue&type=style&index=0&lang=css&
var treevue_type_style_index_0_lang_css_ = __webpack_require__("0af4");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./lib/cafe-pdf/src/tree/index.vue






/* normalize component */

var component = normalizeComponent(
  src_treevue_type_script_lang_js_,
  treevue_type_template_id_b8faaf0e_render,
  treevue_type_template_id_b8faaf0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tree = (component.exports);
// EXTERNAL MODULE: ./lib/cafe-pdf/src/pdfjs-dist/webpack.js
var webpack = __webpack_require__("134b");
var webpack_default = /*#__PURE__*/__webpack_require__.n(webpack);

// EXTERNAL MODULE: ./lib/cafe-pdf/src/pdfjs-dist/web/pdf_viewer.js
var pdf_viewer = __webpack_require__("4000");

// EXTERNAL MODULE: ./lib/cafe-pdf/src/pdfjs-dist/web/pdf_viewer.css
var web_pdf_viewer = __webpack_require__("8d32");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./lib/cafe-pdf/src/pdfjs-dist/build/pdf.js
var build_pdf = __webpack_require__("cf3f");

// CONCATENATED MODULE: ./lib/cafe-pdf/src/CMapReaderFactory.js






 // see https://github.com/mozilla/pdf.js/blob/628e70fbb5dea3b9066aa5c34cca70aaafef8db2/src/display/dom_utils.js#L64

/* harmony default export */ var CMapReaderFactory = (function () {
  this.fetch = function (query) {
    return __webpack_require__("0472")("./" + query.name + ".bcmap").then(function (bcmap) {
      return {
        cMapData: bcmap.default,
        compressionType: build_pdf["CMapCompressionType"].BINARY
      };
    });
  };
});
;
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/cafe-pdf/src/index.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'cafe-pdf',
  props: {
    filePath: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    showNav: {
      type: Boolean,
      default: true
    },
    useOnlyCssZoom: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    textLayerMode: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      countPage: null,
      currentPage: 1,
      pageLoading: false,
      loadingNum: 0,
      countNum: 100,
      timer: null,
      pdfViewer: null,
      pdfLoadingTask: null,
      linkService: null,
      catalogue: null,
      scale: 'auto',
      fnScroll: function fnScroll() {}
    };
  },
  components: {
    Tree: tree
  },
  computed: {
    formateWidth: function formateWidth() {
      return /(%|px)/.test(this.width) ? this.width : this.width + 'px';
    },
    formateHeight: function formateHeight() {
      return /(%|px)/.test(this.height) ? this.height : this.height + 'px';
    }
  },
  watch: {
    filePath: {
      handler: function handler(newVal) {
        if (newVal) {
          this.initViewer();
        }
      }
    }
  },
  created: function created() {
    this.fnScroll = this.fnThrottle(this.handleScroll, 200);
  },
  mounted: function mounted() {
    this.initViewer();
  },
  beforeDestroy: function beforeDestroy() {
    this.pdfLoadingTask.destroy();
    this.pdfViewer = null;
    this.linkService = null;
    this.pdfLoadingTask = null;
    this.timer = null;
  },
  methods: {
    traversalData: function traversalData(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].show = false;

        if (data[i].items.length > 0) {
          this.traversalData(data[i].items);
        }
      }

      return data;
    },
    nav: function nav(item) {
      this.linkService.navigateTo(item.dest);
    },
    initViewer: function initViewer() {
      var _this2 = this;

      var _this = this;

      var eventBus = new pdf_viewer["EventBus"]();
      this.loading();
      this.linkService = new pdf_viewer["PDFLinkService"]();
      this.pdfViewer = new pdf_viewer["PDFViewer"]({
        container: this.$refs.container,
        useOnlyCssZoom: this.useOnlyCssZoom,
        textLayerMode: this.textLayerMode,
        linkService: this.linkService,
        eventBus: eventBus
      });
      this.linkService.setViewer(this.pdfViewer);
      this.pdfViewer.currentScaleValue = this.scale;
      eventBus.on('pagesinit', function () {
        _this.pdfViewer.currentScaleValue = _this.scale;
      });
      this.pdfLoadingTask = webpack_default.a.getDocument({
        url: this.filePath,
        CMapReaderFactory: CMapReaderFactory
      });
      this.pdfLoadingTask.promise.then(function (pdfDoc) {
        _this2.catalogue = null;

        _this2.pdfViewer.setDocument(pdfDoc);

        _this2.linkService.setDocument(pdfDoc);

        if (_this2.showNav) {
          pdfDoc.getOutline().then(function (outline) {
            if (outline) {
              _this2.catalogue = _this2.traversalData(outline);
            }
          });
        }

        ;
        _this2.countPage = pdfDoc.numPages;

        _this2.$emit('on-success', _this2.countPage, pdfDoc);

        _this2.pdfViewer._currentScale = 1;
        _this2.loadingNum = 100;
        clearInterval(_this2.timer);
        _this2.pageLoading = false;
      }).catch(function (error) {
        clearInterval(_this2.timer);
        _this2.pageLoading = false;

        _this2.$emit('on-error', error);
      });
    },
    fnThrottle: function fnThrottle(fn, delay, atleast) {
      var timer = null;
      var previous = null;
      return function () {
        var now = +new Date();
        if (!previous) previous = now;

        if (atleast && now - previous > atleast) {
          fn();
          previous = now;
          clearTimeout(timer);
        } else {
          clearTimeout(timer);
          timer = setTimeout(function () {
            fn();
            previous = null;
          }, delay);
        }
      };
    },
    handleScroll: function handleScroll() {
      var scrolled = this.$refs.container.scrollTop;
      this.currentPage = this.pdfViewer._currentPageNumber;
      this.$emit('on-scroll', this.currentPage, this.pdfViewer, scrolled);
    },
    prePage: function prePage() {
      this.goToPage(--this.currentPage);
    },
    nextPage: function nextPage() {
      this.goToPage(++this.currentPage);
    },
    changeScale: function changeScale(scale) {
      this.scale = scale;
      this.pdfViewer.currentScaleValue = this.scale;
    },
    goToPage: function goToPage(page) {
      if (page < 1 || page > this.countPage) return;
      this.pdfViewer.currentPageNumber = page;
    },
    loading: function loading() {
      var _this3 = this;

      this.pageLoading = true;
      this.loadingNum = 0;
      this.countNum = 100;
      this.timer = setInterval(function () {
        _this3.loadingNum += Math.floor(Math.random() * 3 + 1);

        if (_this3.loadingNum > 95) {
          clearInterval(_this3.timer);
        }
      }, 40);
    },
    getPDF: function getPDF(scale) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var print, container, pdf, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this4.pageLoading = true;
                _this4.loadingNum = 0;
                _this4.countNum = _this4.countPage;
                print = document.querySelector('#print-container');

                if (!print) {
                  container = document.createElement('div');
                  container.setAttribute('id', 'print-container');
                  document.body.appendChild(container);
                } else {
                  print.innerHTML = '';
                }

                _context.next = 7;
                return webpack_default.a.getDocument(_this4.filePath);

              case 7:
                pdf = _context.sent;
                i = 1;

              case 9:
                if (!(i <= pdf.numPages)) {
                  _context.next = 22;
                  break;
                }

                _context.prev = 10;
                _context.next = 13;
                return _this4.rendPDF(pdf, i, scale);

              case 13:
                _this4.loadingNum = i;
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](10);
                _this4.pageLoading = false;

              case 19:
                i++;
                _context.next = 9;
                break;

              case 22:
                _this4.pageLoading = false;
                window.print();

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 16]]);
      }))();
    },
    rendPDF: function rendPDF(pdf, num, scale) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var page, container, viewport, pageDiv, canvas, context, renderContext;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return pdf.getPage(num);

              case 2:
                page = _context2.sent;
                container = document.querySelector('#print-container');
                viewport = page.getViewport(scale);
                pageDiv = document.createElement('div');
                pageDiv.setAttribute('id', 'page-' + (page.pageIndex + 1));
                container.appendChild(pageDiv);
                canvas = document.createElement('canvas');
                pageDiv.appendChild(canvas);
                context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };
                _context2.next = 16;
                return page.render(renderContext);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    printFile: function printFile() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.5;
      this.getPDF(scale);
    }
  }
});
// CONCATENATED MODULE: ./lib/cafe-pdf/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var cafe_pdf_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./lib/cafe-pdf/src/index.vue?vue&type=style&index=0&lang=css&
var srcvue_type_style_index_0_lang_css_ = __webpack_require__("72a5");

// CONCATENATED MODULE: ./lib/cafe-pdf/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  cafe_pdf_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cafe_pdf_src = (src_component.exports);
// CONCATENATED MODULE: ./lib/cafe-pdf/index.js



cafe_pdf_src.install = function (Vue) {
  Vue.component(cafe_pdf_src.name, cafe_pdf_src);
};

/* harmony default export */ var cafe_pdf = (cafe_pdf_src);
// CONCATENATED MODULE: ./lib/index.js



cafe_pdf.install = function (Vue) {
  Vue.component(cafe_pdf.name, cafe_pdf);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.cafePdf = cafe_pdf;
  window.Vue.use(cafe_pdf);
}

/* harmony default export */ var lib = (cafe_pdf);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fb2c":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var un$Slice = __webpack_require__("f36a");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
});