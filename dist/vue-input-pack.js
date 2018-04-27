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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimeInput = exports.DateInput = undefined;
	
	var _DateInput = __webpack_require__(5);
	
	var _DateInput2 = _interopRequireDefault(_DateInput);
	
	var _TimeInput = __webpack_require__(6);
	
	var _TimeInput2 = _interopRequireDefault(_TimeInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DateInput = _DateInput2.default;
	exports.TimeInput = _TimeInput2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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
	    value: Object // { year: 2016, month: 3, day: 17 }
	  },
	  data: function data() {
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var day = date.getDate();
	
	    return {
	      year: year,
	      years: [year, year + 1],
	      month: month,
	      day: day
	    };
	  },
	
	  methods: {
	    updateInput: function updateInput(e) {
	      this.$emit('input', { year: this.year, month: this.month, day: this.day });
	    }
	  },
	  computed: {
	    daysInMonth: function daysInMonth() {
	      return new Date(this.year, this.month, 0).getDate();
	    }
	  },
	  created: function created() {
	    if (this.value) {
	      this.year = this.value.year;
	      this.month = this.value.month;
	      this.day = this.value.day;
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
	    value: Object // { HH: 00, mm: 00 }
	  },
	  data: function data() {
	    return {
	      hour: 0,
	      minute: 0
	    };
	  },
	
	  methods: {
	    updateInput: function updateInput(e) {
	      this.$emit('input', { HH: this.hour, mm: this.minute });
	    },
	
	    range: _util2.default.range,
	    zeroFill: _util2.default.zeroFill
	  },
	  created: function created() {
	    if (this.value) {
	      this.hour = this.value.HH;
	      this.minute = this.value.mm;
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(3),
	  /* template */
	  __webpack_require__(8),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/rramsden/Degica/vue-input-pack/src/DateInput.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] DateInput.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e49963da", Component.options)
	  } else {
	    hotAPI.reload("data-v-e49963da", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(4),
	  /* template */
	  __webpack_require__(7),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/rramsden/Degica/vue-input-pack/src/TimeInput.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] TimeInput.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bda00458", Component.options)
	  } else {
	    hotAPI.reload("data-v-bda00458", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.hour = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.minute = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
	     require("vue-hot-reload-api").rerender("data-v-bda00458", module.exports)
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.day = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
	     require("vue-hot-reload-api").rerender("data-v-e49963da", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-input-pack.js.map