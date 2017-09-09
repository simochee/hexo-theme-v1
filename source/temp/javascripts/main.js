/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _commonApp = __webpack_require__(2);

	var _commonApp2 = _interopRequireDefault(_commonApp);

	var _homeApp = __webpack_require__(6);

	var _homeApp2 = _interopRequireDefault(_homeApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 全ページのAppを包括するクラス
	 */
	var HelloNewWorld = function HelloNewWorld() {
	    _classCallCheck(this, HelloNewWorld);

	    // 全画面共通のアプリ
	    new HelloNewWorld.CommonApp();

	    // SP PC共通アプリ
	    var appName = $('body').data('script');
	    if (appName && HelloNewWorld['Common' + appName + 'App']) {
	        new HelloNewWorld['Common' + appName + 'App']();
	    }
	};

	// 各モジュールを登録


	HelloNewWorld.CommonApp = _commonApp2.default;
	HelloNewWorld.CommonHomeApp = _homeApp2.default;

	$(function () {
	    console.time('timer');
	});

	window.addEventListener('load', function () {
	    console.timeEnd('timer');
	    window.helloNewWorld = new HelloNewWorld();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _basicApp = __webpack_require__(3);

	var _basicApp2 = _interopRequireDefault(_basicApp);

	var _mainVisual = __webpack_require__(5);

	var _mainVisual2 = _interopRequireDefault(_mainVisual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommonApp = function (_BasicApp) {
	    _inherits(CommonApp, _BasicApp);

	    function CommonApp() {
	        _classCallCheck(this, CommonApp);

	        var _this = _possibleConstructorReturn(this, (CommonApp.__proto__ || Object.getPrototypeOf(CommonApp)).call(this));

	        _this.initMainVisual();
	        return _this;
	    }

	    /**
	     * メインビジュアルの設定
	     */


	    _createClass(CommonApp, [{
	        key: 'initMainVisual',
	        value: function initMainVisual() {
	            new _mainVisual2.default({
	                $wrapper: $('#mainVisual')
	            });
	        }
	    }]);

	    return CommonApp;
	}(_basicApp2.default);

	exports.default = CommonApp;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _abstractApp = __webpack_require__(4);

	var _abstractApp2 = _interopRequireDefault(_abstractApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicApp = function (_AbstractApp) {
	    _inherits(BasicApp, _AbstractApp);

	    function BasicApp() {
	        _classCallCheck(this, BasicApp);

	        return _possibleConstructorReturn(this, (BasicApp.__proto__ || Object.getPrototypeOf(BasicApp)).call(this));
	    }

	    return BasicApp;
	}(_abstractApp2.default);

	exports.default = BasicApp;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 全ページ共通
	 */
	var AbstractApp = function () {
	    function AbstractApp() {
	        _classCallCheck(this, AbstractApp);

	        this.$window = $(window);
	        this.eventListeners = [];
	    }

	    /**
	     * イベントリスナーを登録し、データを保持しておく
	     * @param {string} eventType
	     * @param {jQuery} $triggerElement
	     * @param {function} callbackFunction
	     */


	    _createClass(AbstractApp, [{
	        key: "addEventListener",
	        value: function addEventListener(eventType, $triggerElement, callbackFunction) {
	            $triggerElement.on(eventType, callbackFunction);
	            this.eventListeners.push({
	                eventType: eventType,
	                $triggerElement: $triggerElement,
	                callbackFunction: callbackFunction
	            });
	        }

	        /**
	         * イベントリスナーを解除する
	         * @param {string} eventType
	         * @param {jQuery} $triggerElement
	         * @param {function} callbackFunction
	         */

	    }, {
	        key: "removeEventListener",
	        value: function removeEventListener(eventType, $triggerElement, callbackFunction) {
	            var _this = this;

	            this.eventListeners.forEach(function (eventListener, index) {
	                if (eventListener.eventType === eventType && eventListener.$triggerElement.is($triggerElement) && eventListener.callbackFunction === callbackFunction) {
	                    $triggerElement.off(eventType, callbackFunction);
	                    _this.eventListeners.splice(index, 1);
	                }
	            });
	        }

	        /**
	         * イベントリスナーを全て解除する
	         */

	    }, {
	        key: "removeAllEventListener",
	        value: function removeAllEventListener() {
	            this.eventListeners.forEach(function (eventListener) {
	                eventListener.$triggerElement.off(eventListener.eventType, eventListener.callbackFunction);
	            });
	            this.eventListeners.length = 0;
	        }
	    }]);

	    return AbstractApp;
	}();

	exports.default = AbstractApp;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _abstractApp = __webpack_require__(4);

	var _abstractApp2 = _interopRequireDefault(_abstractApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainVisual = function (_AbstractApp) {
	    _inherits(MainVisual, _AbstractApp);

	    function MainVisual(options) {
	        _classCallCheck(this, MainVisual);

	        var _this = _possibleConstructorReturn(this, (MainVisual.__proto__ || Object.getPrototypeOf(MainVisual)).call(this));

	        var $wrapper = options.$wrapper,
	            _options$rate = options.rate,
	            rate = _options$rate === undefined ? 1.8 : _options$rate;


	        _this.$wrapper = $wrapper;
	        _this.rate = rate;

	        _this.initParallax();
	        return _this;
	    }

	    _createClass(MainVisual, [{
	        key: 'initParallax',
	        value: function initParallax() {
	            var _this2 = this;

	            this.addEventListener('scroll', this.$window, function () {
	                requestAnimationFrame(function () {
	                    if (_this2.$window.scrollTop() > _this2.$wrapper.height() * _this2.rate) {
	                        _this2.$wrapper.css({
	                            top: -_this2.$wrapper.height()
	                        });
	                    } else {
	                        _this2.$wrapper.css({
	                            top: -(_this2.$window.scrollTop() / _this2.rate)
	                        });
	                    }
	                });
	            });
	        }
	    }]);

	    return MainVisual;
	}(_abstractApp2.default);

	exports.default = MainVisual;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeApp = function HomeApp() {
	    _classCallCheck(this, HomeApp);

	    console.log('home!');
	};

	exports.default = HomeApp;

/***/ })
/******/ ]);