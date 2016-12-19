(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueInputPack", [], factory);
	else if(typeof exports === 'object')
		exports["VueInputPack"] = factory();
	else
		root["VueInputPack"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimeInput = exports.DateInput = undefined;
	
	var _DateInput = __webpack_require__(4);
	
	var _DateInput2 = _interopRequireDefault(_DateInput);
	
	var _TimeInput = __webpack_require__(5);
	
	var _TimeInput2 = _interopRequireDefault(_TimeInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DateInput = _DateInput2.default;
	exports.TimeInput = _TimeInput2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  zeroFill: function zeroFill(number) {
	    var width = 2;
	    width -= number.toString().length;
	    if (width > 0) {
	      return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
	    }
	    return number + "";
	  },
	  range: function range(x, y) {
	    var range = [];
	    for (var i = x; i <= y; i++) {
	      range.push(i);
	    }
	    return range;
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'DateInput',
	  props: {
	    value: String
	  },
	  data: function data() {
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var day = date.getDate();
	    var daysInMonth = new Date(year, month, 0).getDate();
	
	    return {
	      year: year,
	      years: [year, year + 1],
	      month: month,
	      day: day,
	      daysInMonth: daysInMonth
	    };
	  },
	
	  methods: {
	    updateInput: function updateInput(e) {
	      this.$emit('input', this.year + '-' + _util2.default.zeroFill(this.month) + '-' + _util2.default.zeroFill(this.day));
	    }
	  },
	  created: function created() {
	    if (this.value) {
	      var re = /(\d*)-(\d*)-(\d*)/;
	      var found = this.value.match(re);
	
	      this.year = parseInt(found[1]);
	      this.month = parseInt(found[2]);
	      this.day = parseInt(found[3]);
	      this.daysInMonth = new Date(this.year, this.month, 0).getDate();
	    }
	  }
	}; //
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'TimeInput',
	  props: {
	    value: String
	  },
	  data: function data() {
	    return {
	      hour: 0,
	      minute: 0
	    };
	  },
	
	  methods: {
	    updateInput: function updateInput(e) {
	      var value = this.zeroFill(this.hour) + ':' + this.zeroFill(this.minute) + ':00';
	      this.$emit('input', value);
	    },
	
	    range: _util2.default.range,
	    zeroFill: _util2.default.zeroFill
	  },
	  created: function created() {
	    if (this.value) {
	      var re = /(\d\d):(\d\d):(\d\d)/;
	      var found = this.value.match(re);
	      this.hour = parseInt(found[1]);
	      this.minute = parseInt(found[2]);
	    }
	  }
	}; //
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/richardramsden/Projects/Degica/vue-input-pack/src/DateInput.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-febff438", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-febff438", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DateInput.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/richardramsden/Projects/Degica/vue-input-pack/src/TimeInput.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d7c694b6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d7c694b6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TimeInput.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "input time"
	  }, [_c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.hour),
	      expression: "hour"
	    }],
	    staticClass: "time",
	    on: {
	      "change": [function($event) {
	        _vm.hour = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.updateInput]
	    }
	  }, _vm._l((_vm.range(0, 23)), function(n) {
	    return _c('option', {
	      domProps: {
	        "value": n
	      }
	    }, [_vm._v("\n      " + _vm._s(_vm.zeroFill(n)) + "\n    ")])
	  })), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.minute),
	      expression: "minute"
	    }],
	    staticClass: "time",
	    on: {
	      "change": [function($event) {
	        _vm.minute = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.updateInput]
	    }
	  }, _vm._l((_vm.range(0, 59)), function(n) {
	    return _c('option', {
	      domProps: {
	        "value": n
	      }
	    }, [_vm._v("\n      " + _vm._s(_vm.zeroFill(n)) + "\n    ")])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d7c694b6", module.exports)
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "input date"
	  }, [_c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.year),
	      expression: "year"
	    }],
	    staticClass: "date",
	    on: {
	      "change": [function($event) {
	        _vm.year = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.updateInput]
	    }
	  }, _vm._l((_vm.years), function(year) {
	    return _c('option', [_vm._v("\n      " + _vm._s(year) + "\n    ")])
	  })), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.month),
	      expression: "month"
	    }],
	    staticClass: "date",
	    on: {
	      "change": [function($event) {
	        _vm.month = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.updateInput]
	    }
	  }, _vm._l((12), function(n) {
	    return _c('option', [_vm._v("\n      " + _vm._s(n) + "\n    ")])
	  })), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.day),
	      expression: "day"
	    }],
	    staticClass: "date",
	    on: {
	      "change": [function($event) {
	        _vm.day = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }, _vm.updateInput]
	    }
	  }, _vm._l((_vm.daysInMonth), function(n) {
	    return _c('option', [_vm._v("\n      " + _vm._s(n) + "\n    ")])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-febff438", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-input-pack.js.map