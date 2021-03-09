/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api.js":
/*!********************!*\
  !*** ./src/Api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var enableDevTools = window.__GRPCWEB_DEVTOOLS__ || function () {};

var _require = __webpack_require__(/*! ./energy_pb.js */ "./src/energy_pb.js"),
    StringResponse = _require.StringResponse,
    StringRequest = _require.StringRequest,
    ChartDataRequest = _require.ChartDataRequest,
    ChartDataResponse = _require.ChartDataResponse,
    EventsRequest = _require.EventsRequest;

var _require2 = __webpack_require__(/*! ./energy_grpc_web_pb.js */ "./src/energy_grpc_web_pb.js"),
    EnergyClient = _require2.EnergyClient;

var api = new EnergyClient(window.location.protocol + "//" + window.location.host);
enableDevTools([api]);

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "test",
    value: function test() {
      var request = new StringRequest();
      request.setMessage('Ping');
      api.ping(request, {}, function (err, response) {
        if (err != null) {
          alert("Code: " + err.code + "\nMessage: " + err.message);
        } else {
          alert(response.getMessage());
        }
      });
    }
  }, {
    key: "loadChartData",
    value: function loadChartData(start, end, step, callback) {
      var r = new ChartDataRequest();
      r.setStart(Math.round(start.getTime() / 1000));
      r.setEnd(Math.round(end.getTime() / 1000));
      r.setStep(step);
      api.chartData(r, {}, function (err, response) {
        if (err != null) {
          console.log("chartDataErr: " + err.code + ":" + err.message);
          callback(err);
          return;
        }

        callback(null, response);
      });
    }
  }, {
    key: "loadEventsForward",
    value: function loadEventsForward(start, limit, callback) {
      var r = new EventsRequest();
      r.setCount(limit);
      r.setForward(Math.round(start.getTime() / 1000));
      api.events(r, {}, function (err, response) {
        if (err != null) {
          console.log("EventsErr: " + err.code + ":" + err.message);
          callback(err);
          return;
        }

        callback(null, response);
      });
    }
  }, {
    key: "loadEventsBackward",
    value: function loadEventsBackward(start, limit, callback) {
      var r = new EventsRequest();
      r.setCount(limit);
      r.setBackward(Math.round(start.getTime() / 1000));
      api.events(r, {}, function (err, response) {
        if (err != null) {
          console.log("EventsErr: " + err.code + ":" + err.message);
          callback(err);
          return;
        }

        callback(null, response);
      });
    }
  }, {
    key: "receiveLastData",
    value: function receiveLastData() {
      var r = new StringRequest();
      var deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 1);
      return api.lastData(r, {
        deadline: deadline.getTime()
      });
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      return this.twoDigit(date.getDate()) + "/" + this.twoDigit(date.getMonth() + 1) + "/" + date.getFullYear() + " " + this.twoDigit(date.getHours()) + ":" + this.twoDigit(date.getMinutes()) + ":" + this.twoDigit(date.getSeconds());
    }
  }, {
    key: "twoDigit",
    value: function twoDigit(val) {
      var res = "" + val;

      if (res.length == 1) {
        return "0" + res;
      }

      return res;
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _VoltageChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoltageChart */ "./src/VoltageChart.js");
/* harmony import */ var _OperativeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperativeData */ "./src/OperativeData.js");
/* harmony import */ var _EventsCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventsCarousel */ "./src/EventsCarousel.js");






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OperativeData__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EventsCarousel__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_VoltageChart__WEBPACK_IMPORTED_MODULE_2__.default, null));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/EventItem.js":
/*!**************************!*\
  !*** ./src/EventItem.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventItem.css */ "./src/EventItem.css");
/* harmony import */ var _EventItem_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_EventItem_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var EventItem = /*#__PURE__*/function (_Component) {
  _inherits(EventItem, _Component);

  var _super = _createSuper(EventItem);

  function EventItem(props) {
    var _this;

    _classCallCheck(this, EventItem);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_2___default()(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "event-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "event-item-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: "event-item-card-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        color: "textSecondary"
      }, "\u0410\u0432\u0430\u0440\u0438\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "h5",
        component: "h5"
      }, this.props.item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        color: "textSecondary"
      }, "\u041D\u0430\u0447\u0430\u043B\u043E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "h5",
        component: "h5"
      }, this.props.item.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        color: "textSecondary"
      }, "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "h5",
        component: "h5"
      }, this.props.item.end), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        color: "textSecondary"
      }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        variant: "h5",
        component: "h5"
      }, this.props.item.params))));
    }
  }]);

  return EventItem;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ __webpack_exports__["default"] = (EventItem);

/***/ }),

/***/ "./src/EventsCarousel.js":
/*!*******************************!*\
  !*** ./src/EventsCarousel.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventItem */ "./src/EventItem.js");
/* harmony import */ var _EventsCarousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventsCarousel.css */ "./src/EventsCarousel.css");
/* harmony import */ var _EventsCarousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EventsCarousel_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Api */ "./src/Api.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EVENTS_TO_LOAD = 5;
var MAX_EVENTS = 10;

var EventsCarousel = /*#__PURE__*/function (_Component) {
  _inherits(EventsCarousel, _Component);

  var _super = _createSuper(EventsCarousel);

  function EventsCarousel(props) {
    var _this;

    _classCallCheck(this, EventsCarousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "index", 0);

    _defineProperty(_assertThisInitialized(_this), "events", []);

    react_autobind__WEBPACK_IMPORTED_MODULE_2___default()(_assertThisInitialized(_this));
    _this.state = {
      nextDisabled: false,
      prevDisabled: true,
      loadingActive: true,
      items: [{
        name: "---",
        start: "---",
        end: "---",
        params: "---"
      }, {
        name: "---",
        start: "---",
        end: "---",
        params: "---"
      }, {
        name: "---",
        start: "---",
        end: "---",
        params: "---"
      }]
    };
    return _this;
  }

  _createClass(EventsCarousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("EventsCarousel render");
      var r = this.state.items.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EventItem__WEBPACK_IMPORTED_MODULE_3__.default, {
          key: i,
          item: item
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__.default, {
        active: this.state.loadingActive,
        spinner: true,
        text: "Loading your content..."
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "events-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
        next: function next(_next, active) {
          return _this2.handleNext(_next, active);
        },
        prev: function prev(_prev, active) {
          return _this2.handlePrev(_prev, active);
        },
        indicators: false,
        autoPlay: false,
        className: "carousel",
        NavButton: function NavButton(_ref) {
          var onClick = _ref.onClick,
              className = _ref.className,
              style = _ref.style,
              next = _ref.next,
              prev = _ref.prev;
          style = {
            height: "100%"
          };
          console.log("NavButton" + style);

          if (next) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
              disabled: _this2.state.nextDisabled,
              color: "primary",
              "margin-left": "auto",
              onClick: onClick,
              style: style
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__.default, null));
          } else {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
              disabled: _this2.state.prevDisabled,
              color: "primary",
              "margin-left": "auto",
              onClick: onClick,
              style: style
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__.default, null));
          }
        }
      }, r)));
    }
  }, {
    key: "handleNext",
    value: function handleNext(next, active) {
      this.index++;
      this.setState({
        prevDisabled: false
      });
      console.log("index ".concat(this.index));
      console.log("NEXT! we left ".concat(active, ", and are now at ").concat(next, ", index ").concat(this.index));
      this.mapItems(next);

      if (this.index + 1 == this.events.length - 1) {
        this.loadNextData();
      }
    }
  }, {
    key: "handlePrev",
    value: function handlePrev(prev, active) {
      this.index--;
      this.setState({
        nextDisabled: false
      });
      console.log("PREV! we left ".concat(active, ", and are now at ").concat(prev, ", index ").concat(this.index));
      this.mapItems(prev);

      if (this.index - 1 == 0) {
        this.loadPrevData();
      }
    }
  }, {
    key: "mapItems",
    value: function mapItems(currentIndex) {
      var next = currentIndex + 1;

      if (next == this.state.items.length) {
        next = 0;
      }

      var prev = currentIndex - 1;

      if (prev < 0) {
        prev = this.state.items.length - 1;
      }

      if (this.index == this.events.length - 1) {
        this.setState({
          nextDisabled: true
        });
      } else {
        this.mapItem(next, this.index + 1);
      }

      if (this.index == 0) {
        this.setState({
          prevDisabled: true
        });
      } else {
        this.mapItem(prev, this.index - 1);
      }

      console.log("( Next == ".concat(next, ", Number == ").concat(this.state.items[next].number, " ), (Prev == ").concat(prev, ", Number == ").concat(this.state.items[prev].number, ")"));
    }
  }, {
    key: "mapItem",
    value: function mapItem(itemIndex, eventIndex) {
      var items = this.state.items;
      var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
      items[itemIndex].name = this.events[eventIndex].getName();
      items[itemIndex].start = api.formatDate(new Date(this.events[eventIndex].getStart() * 1000));
      items[itemIndex].end = api.formatDate(new Date(this.events[eventIndex].getEnd() * 1000));
      items[itemIndex].params = this.events[eventIndex].getParams();
      this.setState({
        items: items
      });
    }
  }, {
    key: "loadNextData",
    value: function loadNextData() {
      var _this3 = this;

      this.setState({
        loadingActive: true
      });
      console.log("Load NEXT data before: index = ".concat(this.index, " ; events = ").concat(this.events));
      var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
      api.loadEventsBackward(new Date((this.events[this.events.length - 1].getStart() - 1) * 1000), EVENTS_TO_LOAD, function (err, resp) {
        if (err != null) {
          console.log(err);
          return;
        }

        resp.getEventsList().forEach(function (v, i) {
          console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());

          _this3.events.push(v);

          if (_this3.events.length > MAX_EVENTS) {
            _this3.events.shift();

            _this3.index--;
          }
        });
        console.log("Load NEXT data after: index = ".concat(_this3.index, " ; events = ").concat(_this3.events));

        _this3.setState({
          loadingActive: false
        });
      });
    }
  }, {
    key: "loadPrevData",
    value: function loadPrevData() {
      var _this4 = this;

      this.setState({
        loadingActive: true
      });
      console.log("Load PREV data before: index = ".concat(this.index, " ; events = ").concat(this.events));
      var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
      api.loadEventsForward(new Date((this.events[0].getStart() + 1) * 1000), EVENTS_TO_LOAD, function (err, resp) {
        resp.getEventsList().forEach(function (v, i) {
          console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());

          _this4.events.unshift(v);

          _this4.index++;

          if (_this4.events.length > MAX_EVENTS) {
            _this4.events.pop();
          }
        });
        console.log("Load PREV data after: index = ".concat(_this4.index, " ; events = ").concat(_this4.events));

        _this4.setState({
          loadingActive: false
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      console.log("EventsTable did mount!");
      var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
      api.loadEventsBackward(new Date(), EVENTS_TO_LOAD, function (err, resp) {
        if (err != null) {
          console.log(err);
          return;
        }

        console.log("Events Loaded");
        console.log("haveMore: " + resp.getHavemore());
        console.log("firstDate: " + resp.getFirstdate());
        console.log("lastDate: " + resp.getLastdate());
        var data = [];
        var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
        resp.getEventsList().forEach(function (v, i) {
          console.log(v.getName() + " " + v.getStart() + " " + v.getEnd() + " " + v.getParams());

          _this5.events.push(v);
        });

        _this5.mapItem(0, 0);

        _this5.mapItem(1, 1);

        _this5.mapItem(2, 2);

        _this5.setState({
          loadingActive: false
        });
      });
    }
  }]);

  return EventsCarousel;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (EventsCarousel);

/***/ }),

/***/ "./src/InfoPanel.js":
/*!**************************!*\
  !*** ./src/InfoPanel.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPanel.css */ "./src/InfoPanel.css");
/* harmony import */ var _InfoPanel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InfoPanel_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var GOOD = './good.svg';
var BAD = './bad.svg';
var UNKNOWN = './unknown.svg';

var InfoPanel = /*#__PURE__*/function (_Component) {
  _inherits(InfoPanel, _Component);

  var _super = _createSuper(InfoPanel);

  function InfoPanel(props) {
    var _this;

    _classCallCheck(this, InfoPanel);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_2___default()(_assertThisInitialized(_this));
    _this.state = {
      image: UNKNOWN
    };
    return _this;
  }

  _createClass(InfoPanel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "infopanel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: "infopanel-media",
        image: this.state.image
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "infopanel-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
        color: "textSecondary",
        gutterBottom: true,
        align: "center"
      }, this.props.caption), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
        variant: "h3",
        component: "h3",
        align: "center"
      }, this.props.value)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value == " ") {
        return {
          image: UNKNOWN
        };
      } else if (props.value > props.max || props.value < props.min) {
        return {
          image: BAD
        };
      } else {
        return {
          image: GOOD
        };
      }
    }
  }]);

  return InfoPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ __webpack_exports__["default"] = (InfoPanel);

/***/ }),

/***/ "./src/OperativeData.js":
/*!******************************!*\
  !*** ./src/OperativeData.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPanel.css */ "./src/InfoPanel.css");
/* harmony import */ var _InfoPanel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InfoPanel_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OperativeData_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperativeData.css */ "./src/OperativeData.css");
/* harmony import */ var _OperativeData_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OperativeData_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InfoPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoPanel */ "./src/InfoPanel.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Api */ "./src/Api.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var MIN_PHAZE_VOLTAGE = 200;
var MAX_PHAZE_VOLTAGE = 250;
var MIN_BETWEEN_PHAZE_VOLTAGE = 360;
var MAX_BETWEEN_PHAZE_VOLTAGE = 410;
var GOOD = './good.svg';
var BAD = './bad.svg';
var UNKNOWN = './unknown.svg';

var OperativeData = /*#__PURE__*/function (_Component) {
  _inherits(OperativeData, _Component);

  var _super = _createSuper(OperativeData);

  function OperativeData(props) {
    var _this;

    _classCallCheck(this, OperativeData);

    _this = _super.call(this, props);
    react_autobind__WEBPACK_IMPORTED_MODULE_3___default()(_assertThisInitialized(_this));
    _this.state = {
      image: UNKNOWN,
      lastDate: "12/12/2020 14:00:00",
      alarms: "НЕТ",
      online: "ОНЛАЙН",
      values: [" ", " ", " ", " ", " ", " "]
    };
    return _this;
  }

  _createClass(OperativeData, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "operative-data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "operative-data-row-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "infopanel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "infopanel-media-large",
        image: this.state.image
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: "infopanel-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        color: "textSecondary"
      }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "h6",
        component: "h6"
      }, this.state.online), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        color: "textSecondary"
      }, "\u0410\u0432\u0430\u0440\u0438\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "h6",
        component: "h6"
      }, this.state.alarms), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        color: "textSecondary"
      }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "h6",
        component: "h6"
      }, this.state.lastDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: "operative-data-row-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Напряжение на фазе А",
        value: this.state.values[0],
        min: MIN_PHAZE_VOLTAGE,
        max: MAX_PHAZE_VOLTAGE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Напряжение на фазе B",
        value: this.state.values[1],
        min: MIN_PHAZE_VOLTAGE,
        max: MAX_PHAZE_VOLTAGE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Напряжение на фазе C",
        value: this.state.values[2],
        min: MIN_PHAZE_VOLTAGE,
        max: MAX_PHAZE_VOLTAGE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Межфазное напряжение AB",
        value: this.state.values[3],
        min: MIN_BETWEEN_PHAZE_VOLTAGE,
        max: MAX_BETWEEN_PHAZE_VOLTAGE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Межфазное напряжение AC",
        value: this.state.values[4],
        min: MIN_BETWEEN_PHAZE_VOLTAGE,
        max: MAX_BETWEEN_PHAZE_VOLTAGE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        caption: "Межфазное напряжение BC",
        value: this.state.values[5],
        min: MIN_BETWEEN_PHAZE_VOLTAGE,
        max: MAX_BETWEEN_PHAZE_VOLTAGE
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("LastDataTable mounted!");
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var api = new _Api__WEBPACK_IMPORTED_MODULE_5__.default();
      var stream = api.receiveLastData();
      stream.on('data', function (response) {
        // console.log(response.getDatatime());
        var values = [];
        response.getLastdataList().forEach(function (v) {
          var name = v.getParamname();
          var value = v.getValue(); // console.log(name);
          // console.log(value);

          values.push(value);
        });
        var img = UNKNOWN;

        if (response.getOnline()) {
          img = GOOD;
        }

        if (response.getAlarm()) {
          img = BAD;
        }

        _this2.setState({
          values: values,
          lastDate: api.formatDate(new Date(response.getDatatime() * 1000)),
          online: response.getOnline() ? "ОНЛАЙН" : "ОФФЛАЙН",
          alarms: response.getAlarm() ? "ЕСТЬ" : "НЕТ",
          image: img
        });
      });
      stream.on('status', function (status) {
        console.log(status.code);
        console.log(status.details);
        console.log(status.metadata);

        _this2.startLoadData();
      });
      stream.on('end', function (end) {
        console.log("stream end");

        _this2.startLoadData();
      });
    }
  }, {
    key: "startLoadData",
    value: function startLoadData() {
      var _this3 = this;

      this.setState({
        values: [" ", " ", " ", " ", " ", " "],
        lastDate: "--/--/---- --:--:--",
        online: "--------",
        alarms: "--------",
        image: UNKNOWN
      });
      setTimeout(function () {
        _this3.loadData();
      }, 5000);
    }
  }]);

  return OperativeData;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/* harmony default export */ __webpack_exports__["default"] = (OperativeData);

/***/ }),

/***/ "./src/VoltageChart.js":
/*!*****************************!*\
  !*** ./src/VoltageChart.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VoltageChart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoltageChart.css */ "./src/VoltageChart.css");
/* harmony import */ var _VoltageChart_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VoltageChart_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Api */ "./src/Api.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var VoltageChart = /*#__PURE__*/function (_Component) {
  _inherits(VoltageChart, _Component);

  var _super = _createSuper(VoltageChart);

  function VoltageChart(props) {
    var _this;

    _classCallCheck(this, VoltageChart);

    _this = _super.call(this, props);
    _this.state = {
      options: {
        chart: {
          id: "voltage",
          width: "100%",
          height: 700,
          events: {
            scrolled: function scrolled(chartContext, _ref) {
              var xaxis = _ref.xaxis;
              console.log("Scrolled!");
              console.log(xaxis.min + " : " + xaxis.max);
            },
            zoomed: function zoomed(chartContext, _ref2) {
              var xaxis = _ref2.xaxis,
                  yaxis = _ref2.yaxis;
              console.log("Zoomed!");

              _this.loadData(new Date(xaxis.min), new Date(xaxis.max));

              console.log(xaxis.min + " : " + xaxis.max);
            }
          },
          toolbar: {
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: false,
              home: false,
              reset: false
            }
          }
        },
        xaxis: {
          type: "datetime" //datetimeUTC: false -- не работает

        },
        noData: {
          text: "Loading..."
        }
      },
      series: []
    };
    return _this;
  }

  _createClass(VoltageChart, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "voltage-chart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: "voltage-chart-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "voltage-chart-card-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__.default, {
        options: this.state.options,
        series: this.state.series,
        type: "line",
        width: "100%",
        "max-width": "100%",
        height: "400px"
      }))));
    }
  }, {
    key: "loadData",
    value: function loadData(start, end) {
      var _this2 = this;

      this.setState({
        series: []
      });
      var api = new _Api__WEBPACK_IMPORTED_MODULE_3__.default();
      api.loadChartData(start, end, 500, function (err, resp) {
        if (err != null) {
          console.log(err);
          return;
        }

        var seriesList = [];
        resp.getSeriesList().forEach(function (s) {
          var data = [];
          s.getValuesList().forEach(function (v) {
            data.push({
              x: v.getX() + 3 * 60 * 60 * 1000,
              y: v.getY()
            });
          });
          var ser = {
            name: s.getName(),
            data: data
          };
          seriesList.push(ser);
        });

        _this2.setState({
          series: seriesList
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Component did mount!");
      this.loadData(new Date(Date.now() - 24 * 60 * 60 * 1000), new Date());
    }
  }]);

  return VoltageChart;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ __webpack_exports__["default"] = (VoltageChart);

/***/ }),

/***/ "./src/energy_grpc_web_pb.js":
/*!***********************************!*\
  !*** ./src/energy_grpc_web_pb.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var grpc = {};
grpc.web = __webpack_require__(/*! grpc-web */ "./node_modules/grpc-web/index.js");
var proto = {};
proto.service = __webpack_require__(/*! ./energy_pb.js */ "./src/energy_pb.js");
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */

proto.service.EnergyClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';
  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */

  this.client_ = new grpc.web.GrpcWebClientBase(options);
  /**
   * @private @const {string} The hostname
   */

  this.hostname_ = hostname;
};
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */


proto.service.EnergyPromiseClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';
  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */

  this.client_ = new grpc.web.GrpcWebClientBase(options);
  /**
   * @private @const {string} The hostname
   */

  this.hostname_ = hostname;
};
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.StringRequest,
 *   !proto.service.StringResponse>}
 */


var methodDescriptor_Energy_Ping = new grpc.web.MethodDescriptor('/service.Energy/Ping', grpc.web.MethodType.UNARY, proto.service.StringRequest, proto.service.StringResponse,
/**
 * @param {!proto.service.StringRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.StringResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.StringRequest,
 *   !proto.service.StringResponse>}
 */

var methodInfo_Energy_Ping = new grpc.web.AbstractClientBase.MethodInfo(proto.service.StringResponse,
/**
 * @param {!proto.service.StringRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.StringResponse.deserializeBinary);
/**
 * @param {!proto.service.StringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.StringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.StringResponse>|undefined}
 *     The XHR Node Readable Stream
 */

proto.service.EnergyClient.prototype.ping = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/service.Energy/Ping', request, metadata || {}, methodDescriptor_Energy_Ping, callback);
};
/**
 * @param {!proto.service.StringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.StringResponse>}
 *     A native promise that resolves to the response
 */


proto.service.EnergyPromiseClient.prototype.ping = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/service.Energy/Ping', request, metadata || {}, methodDescriptor_Energy_Ping);
};
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.ChartDataRequest,
 *   !proto.service.ChartDataResponse>}
 */


var methodDescriptor_Energy_ChartData = new grpc.web.MethodDescriptor('/service.Energy/ChartData', grpc.web.MethodType.UNARY, proto.service.ChartDataRequest, proto.service.ChartDataResponse,
/**
 * @param {!proto.service.ChartDataRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.ChartDataResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.ChartDataRequest,
 *   !proto.service.ChartDataResponse>}
 */

var methodInfo_Energy_ChartData = new grpc.web.AbstractClientBase.MethodInfo(proto.service.ChartDataResponse,
/**
 * @param {!proto.service.ChartDataRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.ChartDataResponse.deserializeBinary);
/**
 * @param {!proto.service.ChartDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.ChartDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.ChartDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */

proto.service.EnergyClient.prototype.chartData = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/service.Energy/ChartData', request, metadata || {}, methodDescriptor_Energy_ChartData, callback);
};
/**
 * @param {!proto.service.ChartDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.ChartDataResponse>}
 *     A native promise that resolves to the response
 */


proto.service.EnergyPromiseClient.prototype.chartData = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/service.Energy/ChartData', request, metadata || {}, methodDescriptor_Energy_ChartData);
};
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.EventsRequest,
 *   !proto.service.EventsResponse>}
 */


var methodDescriptor_Energy_Events = new grpc.web.MethodDescriptor('/service.Energy/Events', grpc.web.MethodType.UNARY, proto.service.EventsRequest, proto.service.EventsResponse,
/**
 * @param {!proto.service.EventsRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.EventsResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.EventsRequest,
 *   !proto.service.EventsResponse>}
 */

var methodInfo_Energy_Events = new grpc.web.AbstractClientBase.MethodInfo(proto.service.EventsResponse,
/**
 * @param {!proto.service.EventsRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.EventsResponse.deserializeBinary);
/**
 * @param {!proto.service.EventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.EventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.EventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */

proto.service.EnergyClient.prototype.events = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/service.Energy/Events', request, metadata || {}, methodDescriptor_Energy_Events, callback);
};
/**
 * @param {!proto.service.EventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.EventsResponse>}
 *     A native promise that resolves to the response
 */


proto.service.EnergyPromiseClient.prototype.events = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/service.Energy/Events', request, metadata || {}, methodDescriptor_Energy_Events);
};
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.StringRequest,
 *   !proto.service.LastDataResponse>}
 */


var methodDescriptor_Energy_LastData = new grpc.web.MethodDescriptor('/service.Energy/LastData', grpc.web.MethodType.SERVER_STREAMING, proto.service.StringRequest, proto.service.LastDataResponse,
/**
 * @param {!proto.service.StringRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.LastDataResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.StringRequest,
 *   !proto.service.LastDataResponse>}
 */

var methodInfo_Energy_LastData = new grpc.web.AbstractClientBase.MethodInfo(proto.service.LastDataResponse,
/**
 * @param {!proto.service.StringRequest} request
 * @return {!Uint8Array}
 */
function (request) {
  return request.serializeBinary();
}, proto.service.LastDataResponse.deserializeBinary);
/**
 * @param {!proto.service.StringRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.service.LastDataResponse>}
 *     The XHR Node Readable Stream
 */

proto.service.EnergyClient.prototype.lastData = function (request, metadata) {
  return this.client_.serverStreaming(this.hostname_ + '/service.Energy/LastData', request, metadata || {}, methodDescriptor_Energy_LastData);
};
/**
 * @param {!proto.service.StringRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.service.LastDataResponse>}
 *     The XHR Node Readable Stream
 */


proto.service.EnergyPromiseClient.prototype.lastData = function (request, metadata) {
  return this.client_.serverStreaming(this.hostname_ + '/service.Energy/LastData', request, metadata || {}, methodDescriptor_Energy_LastData);
};

module.exports = proto.service;

/***/ }),

/***/ "./src/energy_pb.js":
/*!**************************!*\
  !*** ./src/energy_pb.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// source: energy.proto

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.service.ChartDataRequest', null, global);
goog.exportSymbol('proto.service.ChartDataResponse', null, global);
goog.exportSymbol('proto.service.ChartSeriesData', null, global);
goog.exportSymbol('proto.service.Event', null, global);
goog.exportSymbol('proto.service.EventsRequest', null, global);
goog.exportSymbol('proto.service.EventsResponse', null, global);
goog.exportSymbol('proto.service.LastData', null, global);
goog.exportSymbol('proto.service.LastDataResponse', null, global);
goog.exportSymbol('proto.service.SeriesValues', null, global);
goog.exportSymbol('proto.service.StringRequest', null, global);
goog.exportSymbol('proto.service.StringResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.service.StringRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.StringRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.StringRequest.displayName = 'proto.service.StringRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.StringResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.StringResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.StringResponse.displayName = 'proto.service.StringResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.ChartDataRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.ChartDataRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ChartDataRequest.displayName = 'proto.service.ChartDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.ChartDataResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ChartDataResponse.repeatedFields_, null);
};

goog.inherits(proto.service.ChartDataResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ChartDataResponse.displayName = 'proto.service.ChartDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.ChartSeriesData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.ChartSeriesData.repeatedFields_, null);
};

goog.inherits(proto.service.ChartSeriesData, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.ChartSeriesData.displayName = 'proto.service.ChartSeriesData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.SeriesValues = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.SeriesValues, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.SeriesValues.displayName = 'proto.service.SeriesValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.EventsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.EventsRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.EventsRequest.displayName = 'proto.service.EventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.EventsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.EventsResponse.repeatedFields_, null);
};

goog.inherits(proto.service.EventsResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.EventsResponse.displayName = 'proto.service.EventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.Event = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.Event, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.Event.displayName = 'proto.service.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.LastDataResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.service.LastDataResponse.repeatedFields_, null);
};

goog.inherits(proto.service.LastDataResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.LastDataResponse.displayName = 'proto.service.LastDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.service.LastData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.service.LastData, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.service.LastData.displayName = 'proto.service.LastData';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.StringRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.service.StringRequest.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.StringRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.StringRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.StringRequest}
 */


proto.service.StringRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.StringRequest();
  return proto.service.StringRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.StringRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.StringRequest}
 */


proto.service.StringRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMessage(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.StringRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.StringRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.StringRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.StringRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessage();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};
/**
 * optional string message = 1;
 * @return {string}
 */


proto.service.StringRequest.prototype.getMessage = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.StringRequest} returns this
 */


proto.service.StringRequest.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.StringResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.service.StringResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.StringResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.StringResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.StringResponse}
 */


proto.service.StringResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.StringResponse();
  return proto.service.StringResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.StringResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.StringResponse}
 */


proto.service.StringResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMessage(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.StringResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.StringResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.StringResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.StringResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessage();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};
/**
 * optional string message = 1;
 * @return {string}
 */


proto.service.StringResponse.prototype.getMessage = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.StringResponse} returns this
 */


proto.service.StringResponse.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.ChartDataRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.service.ChartDataRequest.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.ChartDataRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.ChartDataRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      start: jspb.Message.getFieldWithDefault(msg, 1, 0),
      end: jspb.Message.getFieldWithDefault(msg, 2, 0),
      step: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ChartDataRequest}
 */


proto.service.ChartDataRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ChartDataRequest();
  return proto.service.ChartDataRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ChartDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ChartDataRequest}
 */


proto.service.ChartDataRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setStart(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setEnd(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setStep(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.ChartDataRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.ChartDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ChartDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.ChartDataRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStart();

  if (f !== 0) {
    writer.writeInt64(1, f);
  }

  f = message.getEnd();

  if (f !== 0) {
    writer.writeInt64(2, f);
  }

  f = message.getStep();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};
/**
 * optional int64 start = 1;
 * @return {number}
 */


proto.service.ChartDataRequest.prototype.getStart = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.ChartDataRequest} returns this
 */


proto.service.ChartDataRequest.prototype.setStart = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int64 end = 2;
 * @return {number}
 */


proto.service.ChartDataRequest.prototype.getEnd = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.ChartDataRequest} returns this
 */


proto.service.ChartDataRequest.prototype.setEnd = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional int64 step = 3;
 * @return {number}
 */


proto.service.ChartDataRequest.prototype.getStep = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.ChartDataRequest} returns this
 */


proto.service.ChartDataRequest.prototype.setStep = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.service.ChartDataResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.ChartDataResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.service.ChartDataResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.ChartDataResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.ChartDataResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      seriesList: jspb.Message.toObjectList(msg.getSeriesList(), proto.service.ChartSeriesData.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ChartDataResponse}
 */


proto.service.ChartDataResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ChartDataResponse();
  return proto.service.ChartDataResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ChartDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ChartDataResponse}
 */


proto.service.ChartDataResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.service.ChartSeriesData();
        reader.readMessage(value, proto.service.ChartSeriesData.deserializeBinaryFromReader);
        msg.addSeries(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.ChartDataResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.ChartDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ChartDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.ChartDataResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSeriesList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.service.ChartSeriesData.serializeBinaryToWriter);
  }
};
/**
 * repeated ChartSeriesData series = 1;
 * @return {!Array<!proto.service.ChartSeriesData>}
 */


proto.service.ChartDataResponse.prototype.getSeriesList = function () {
  return (
    /** @type{!Array<!proto.service.ChartSeriesData>} */
    jspb.Message.getRepeatedWrapperField(this, proto.service.ChartSeriesData, 1)
  );
};
/**
 * @param {!Array<!proto.service.ChartSeriesData>} value
 * @return {!proto.service.ChartDataResponse} returns this
*/


proto.service.ChartDataResponse.prototype.setSeriesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.service.ChartSeriesData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.ChartSeriesData}
 */


proto.service.ChartDataResponse.prototype.addSeries = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.ChartSeriesData, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ChartDataResponse} returns this
 */


proto.service.ChartDataResponse.prototype.clearSeriesList = function () {
  return this.setSeriesList([]);
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.service.ChartSeriesData.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.ChartSeriesData.prototype.toObject = function (opt_includeInstance) {
    return proto.service.ChartSeriesData.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.ChartSeriesData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.ChartSeriesData.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      name: jspb.Message.getFieldWithDefault(msg, 1, ""),
      valuesList: jspb.Message.toObjectList(msg.getValuesList(), proto.service.SeriesValues.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.ChartSeriesData}
 */


proto.service.ChartSeriesData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.ChartSeriesData();
  return proto.service.ChartSeriesData.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.ChartSeriesData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.ChartSeriesData}
 */


proto.service.ChartSeriesData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 2:
        var value = new proto.service.SeriesValues();
        reader.readMessage(value, proto.service.SeriesValues.deserializeBinaryFromReader);
        msg.addValues(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.ChartSeriesData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.ChartSeriesData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.ChartSeriesData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.ChartSeriesData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getValuesList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.service.SeriesValues.serializeBinaryToWriter);
  }
};
/**
 * optional string name = 1;
 * @return {string}
 */


proto.service.ChartSeriesData.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.ChartSeriesData} returns this
 */


proto.service.ChartSeriesData.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * repeated SeriesValues values = 2;
 * @return {!Array<!proto.service.SeriesValues>}
 */


proto.service.ChartSeriesData.prototype.getValuesList = function () {
  return (
    /** @type{!Array<!proto.service.SeriesValues>} */
    jspb.Message.getRepeatedWrapperField(this, proto.service.SeriesValues, 2)
  );
};
/**
 * @param {!Array<!proto.service.SeriesValues>} value
 * @return {!proto.service.ChartSeriesData} returns this
*/


proto.service.ChartSeriesData.prototype.setValuesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};
/**
 * @param {!proto.service.SeriesValues=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.SeriesValues}
 */


proto.service.ChartSeriesData.prototype.addValues = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.service.SeriesValues, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.ChartSeriesData} returns this
 */


proto.service.ChartSeriesData.prototype.clearValuesList = function () {
  return this.setValuesList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.SeriesValues.prototype.toObject = function (opt_includeInstance) {
    return proto.service.SeriesValues.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.SeriesValues} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.SeriesValues.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      x: jspb.Message.getFieldWithDefault(msg, 1, 0),
      y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.SeriesValues}
 */


proto.service.SeriesValues.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.SeriesValues();
  return proto.service.SeriesValues.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.SeriesValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.SeriesValues}
 */


proto.service.SeriesValues.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setX(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readDouble();
        msg.setY(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.SeriesValues.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.SeriesValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.SeriesValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.SeriesValues.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getX();

  if (f !== 0) {
    writer.writeInt64(1, f);
  }

  f = message.getY();

  if (f !== 0.0) {
    writer.writeDouble(2, f);
  }
};
/**
 * optional int64 x = 1;
 * @return {number}
 */


proto.service.SeriesValues.prototype.getX = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.SeriesValues} returns this
 */


proto.service.SeriesValues.prototype.setX = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional double y = 2;
 * @return {number}
 */


proto.service.SeriesValues.prototype.getY = function () {
  return (
    /** @type {number} */
    jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.SeriesValues} returns this
 */


proto.service.SeriesValues.prototype.setY = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.EventsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.service.EventsRequest.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.EventsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.EventsRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      count: jspb.Message.getFieldWithDefault(msg, 1, 0),
      forward: jspb.Message.getFieldWithDefault(msg, 2, 0),
      backward: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.EventsRequest}
 */


proto.service.EventsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.EventsRequest();
  return proto.service.EventsRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.EventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.EventsRequest}
 */


proto.service.EventsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setCount(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setForward(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setBackward(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.EventsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.EventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.EventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.EventsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCount();

  if (f !== 0) {
    writer.writeInt64(1, f);
  }

  f = message.getForward();

  if (f !== 0) {
    writer.writeInt64(2, f);
  }

  f = message.getBackward();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};
/**
 * optional int64 count = 1;
 * @return {number}
 */


proto.service.EventsRequest.prototype.getCount = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.EventsRequest} returns this
 */


proto.service.EventsRequest.prototype.setCount = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int64 forward = 2;
 * @return {number}
 */


proto.service.EventsRequest.prototype.getForward = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.EventsRequest} returns this
 */


proto.service.EventsRequest.prototype.setForward = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional int64 backward = 3;
 * @return {number}
 */


proto.service.EventsRequest.prototype.getBackward = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.EventsRequest} returns this
 */


proto.service.EventsRequest.prototype.setBackward = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.service.EventsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.EventsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.service.EventsResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.EventsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.EventsResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      eventsList: jspb.Message.toObjectList(msg.getEventsList(), proto.service.Event.toObject, includeInstance),
      lastdate: jspb.Message.getFieldWithDefault(msg, 2, 0),
      firstdate: jspb.Message.getFieldWithDefault(msg, 3, 0),
      havemore: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.EventsResponse}
 */


proto.service.EventsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.EventsResponse();
  return proto.service.EventsResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.EventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.EventsResponse}
 */


proto.service.EventsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.service.Event();
        reader.readMessage(value, proto.service.Event.deserializeBinaryFromReader);
        msg.addEvents(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setLastdate(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setFirstdate(value);
        break;

      case 4:
        var value =
        /** @type {boolean} */
        reader.readBool();
        msg.setHavemore(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.EventsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.EventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.EventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.EventsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEventsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.service.Event.serializeBinaryToWriter);
  }

  f = message.getLastdate();

  if (f !== 0) {
    writer.writeInt64(2, f);
  }

  f = message.getFirstdate();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }

  f = message.getHavemore();

  if (f) {
    writer.writeBool(4, f);
  }
};
/**
 * repeated Event Events = 1;
 * @return {!Array<!proto.service.Event>}
 */


proto.service.EventsResponse.prototype.getEventsList = function () {
  return (
    /** @type{!Array<!proto.service.Event>} */
    jspb.Message.getRepeatedWrapperField(this, proto.service.Event, 1)
  );
};
/**
 * @param {!Array<!proto.service.Event>} value
 * @return {!proto.service.EventsResponse} returns this
*/


proto.service.EventsResponse.prototype.setEventsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.service.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.Event}
 */


proto.service.EventsResponse.prototype.addEvents = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.Event, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.EventsResponse} returns this
 */


proto.service.EventsResponse.prototype.clearEventsList = function () {
  return this.setEventsList([]);
};
/**
 * optional int64 lastDate = 2;
 * @return {number}
 */


proto.service.EventsResponse.prototype.getLastdate = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.EventsResponse} returns this
 */


proto.service.EventsResponse.prototype.setLastdate = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional int64 firstDate = 3;
 * @return {number}
 */


proto.service.EventsResponse.prototype.getFirstdate = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.EventsResponse} returns this
 */


proto.service.EventsResponse.prototype.setFirstdate = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional bool haveMore = 4;
 * @return {boolean}
 */


proto.service.EventsResponse.prototype.getHavemore = function () {
  return (
    /** @type {boolean} */
    jspb.Message.getBooleanFieldWithDefault(this, 4, false)
  );
};
/**
 * @param {boolean} value
 * @return {!proto.service.EventsResponse} returns this
 */


proto.service.EventsResponse.prototype.setHavemore = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.Event.prototype.toObject = function (opt_includeInstance) {
    return proto.service.Event.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.Event} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.Event.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      start: jspb.Message.getFieldWithDefault(msg, 1, 0),
      end: jspb.Message.getFieldWithDefault(msg, 2, 0),
      name: jspb.Message.getFieldWithDefault(msg, 3, ""),
      params: jspb.Message.getFieldWithDefault(msg, 4, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.Event}
 */


proto.service.Event.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.Event();
  return proto.service.Event.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.Event}
 */


proto.service.Event.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setStart(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setEnd(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setParams(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.Event.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.Event.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStart();

  if (f !== 0) {
    writer.writeInt64(1, f);
  }

  f = message.getEnd();

  if (f !== 0) {
    writer.writeInt64(2, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getParams();

  if (f.length > 0) {
    writer.writeString(4, f);
  }
};
/**
 * optional int64 start = 1;
 * @return {number}
 */


proto.service.Event.prototype.getStart = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.Event} returns this
 */


proto.service.Event.prototype.setStart = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int64 end = 2;
 * @return {number}
 */


proto.service.Event.prototype.getEnd = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.Event} returns this
 */


proto.service.Event.prototype.setEnd = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string name = 3;
 * @return {string}
 */


proto.service.Event.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.Event} returns this
 */


proto.service.Event.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string params = 4;
 * @return {string}
 */


proto.service.Event.prototype.getParams = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.Event} returns this
 */


proto.service.Event.prototype.setParams = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.service.LastDataResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.LastDataResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.service.LastDataResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.LastDataResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.LastDataResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      lastdataList: jspb.Message.toObjectList(msg.getLastdataList(), proto.service.LastData.toObject, includeInstance),
      datatime: jspb.Message.getFieldWithDefault(msg, 2, 0),
      online: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
      alarm: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.LastDataResponse}
 */


proto.service.LastDataResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.LastDataResponse();
  return proto.service.LastDataResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.LastDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.LastDataResponse}
 */


proto.service.LastDataResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.service.LastData();
        reader.readMessage(value, proto.service.LastData.deserializeBinaryFromReader);
        msg.addLastdata(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setDatatime(value);
        break;

      case 3:
        var value =
        /** @type {boolean} */
        reader.readBool();
        msg.setOnline(value);
        break;

      case 4:
        var value =
        /** @type {boolean} */
        reader.readBool();
        msg.setAlarm(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.LastDataResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.LastDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.LastDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.LastDataResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getLastdataList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.service.LastData.serializeBinaryToWriter);
  }

  f = message.getDatatime();

  if (f !== 0) {
    writer.writeInt64(2, f);
  }

  f = message.getOnline();

  if (f) {
    writer.writeBool(3, f);
  }

  f = message.getAlarm();

  if (f) {
    writer.writeBool(4, f);
  }
};
/**
 * repeated LastData lastData = 1;
 * @return {!Array<!proto.service.LastData>}
 */


proto.service.LastDataResponse.prototype.getLastdataList = function () {
  return (
    /** @type{!Array<!proto.service.LastData>} */
    jspb.Message.getRepeatedWrapperField(this, proto.service.LastData, 1)
  );
};
/**
 * @param {!Array<!proto.service.LastData>} value
 * @return {!proto.service.LastDataResponse} returns this
*/


proto.service.LastDataResponse.prototype.setLastdataList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.service.LastData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.service.LastData}
 */


proto.service.LastDataResponse.prototype.addLastdata = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.service.LastData, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.service.LastDataResponse} returns this
 */


proto.service.LastDataResponse.prototype.clearLastdataList = function () {
  return this.setLastdataList([]);
};
/**
 * optional int64 dataTime = 2;
 * @return {number}
 */


proto.service.LastDataResponse.prototype.getDatatime = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/**
 * @param {number} value
 * @return {!proto.service.LastDataResponse} returns this
 */


proto.service.LastDataResponse.prototype.setDatatime = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional bool online = 3;
 * @return {boolean}
 */


proto.service.LastDataResponse.prototype.getOnline = function () {
  return (
    /** @type {boolean} */
    jspb.Message.getBooleanFieldWithDefault(this, 3, false)
  );
};
/**
 * @param {boolean} value
 * @return {!proto.service.LastDataResponse} returns this
 */


proto.service.LastDataResponse.prototype.setOnline = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};
/**
 * optional bool alarm = 4;
 * @return {boolean}
 */


proto.service.LastDataResponse.prototype.getAlarm = function () {
  return (
    /** @type {boolean} */
    jspb.Message.getBooleanFieldWithDefault(this, 4, false)
  );
};
/**
 * @param {boolean} value
 * @return {!proto.service.LastDataResponse} returns this
 */


proto.service.LastDataResponse.prototype.setAlarm = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.service.LastData.prototype.toObject = function (opt_includeInstance) {
    return proto.service.LastData.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.service.LastData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.service.LastData.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      paramname: jspb.Message.getFieldWithDefault(msg, 1, ""),
      value: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.service.LastData}
 */


proto.service.LastData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.service.LastData();
  return proto.service.LastData.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.service.LastData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.service.LastData}
 */


proto.service.LastData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setParamname(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setValue(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.service.LastData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.service.LastData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.service.LastData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.service.LastData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getParamname();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getValue();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};
/**
 * optional string paramName = 1;
 * @return {string}
 */


proto.service.LastData.prototype.getParamname = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.LastData} returns this
 */


proto.service.LastData.prototype.setParamname = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string value = 2;
 * @return {string}
 */


proto.service.LastData.prototype.getValue = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.service.LastData} returns this
 */


proto.service.LastData.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

goog.object.extend(exports, proto.service);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
/*#__PURE__*/
// <React.StrictMode>
react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.default, null), // </React.StrictMode>,
document.getElementById('root'));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spk_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spk.jpg */ "./src/spk.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_spk_jpg__WEBPACK_IMPORTED_MODULE_2__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  overflow: auto;\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,yDAAgC;EAChC,sBAAsB;EACtB,cAAc;AAChB","sourcesContent":[".body {\n  background-image: url(./spk.jpg);\n  background-size: cover;\n  overflow: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/EventItem.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/EventItem.css ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".event-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.event-item-card {\n    width: 100%;\n}\n\n.event-item-card-content {\n    width: 100%;\n    padding-left: 50px !important;\n}\n", "",{"version":3,"sources":["webpack://src/EventItem.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,6BAA6B;AACjC","sourcesContent":[".event-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.event-item-card {\n    width: 100%;\n}\n\n.event-item-card-content {\n    width: 100%;\n    padding-left: 50px !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/EventsCarousel.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/EventsCarousel.css ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".events-container {\n    display: flex;\n    width: 100vw;\n    justify-content: center;\n}\n\n.carousel {\n    width: 800px;\n}\n\n.events-nav-button {\n    margin-top: 120px;\n}\n\n.CarouselItem {\n    margin: 12px;\n}\n", "",{"version":3,"sources":["webpack://src/EventsCarousel.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".events-container {\n    display: flex;\n    width: 100vw;\n    justify-content: center;\n}\n\n.carousel {\n    width: 800px;\n}\n\n.events-nav-button {\n    margin-top: 120px;\n}\n\n.CarouselItem {\n    margin: 12px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/InfoPanel.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/InfoPanel.css ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".infopanel-card {\n    display: flex;\n    padding: 8px;\n    min-width: 342px;\n    margin-top: 12px;\n    margin-left: 6px;\n    margin-right: 6px;\n    margin-bottom: 0px;\n}\n\n.MuiCardContent-root {\n    padding: 3px !important;\n}\n.infopanel-media {\n    width: 130px;\n    height: 130px;\n}\n\n.infopanel-media-large {\n    width: 176px;\n    height: 157px;\n}\n\n.infopanel-content {\n    flex: 1 1 auto;\n    flex-direction: column;\n    white-space: nowrap;\n}\n\n.infopanel-content-row {\n    flex: 1 1 auto;\n    flex-direction: row;\n    white-space: nowrap;\n}\n\n.infopanel-header {\n}\n\n", "",{"version":3,"sources":["webpack://src/InfoPanel.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;AACA","sourcesContent":[".infopanel-card {\n    display: flex;\n    padding: 8px;\n    min-width: 342px;\n    margin-top: 12px;\n    margin-left: 6px;\n    margin-right: 6px;\n    margin-bottom: 0px;\n}\n\n.MuiCardContent-root {\n    padding: 3px !important;\n}\n.infopanel-media {\n    width: 130px;\n    height: 130px;\n}\n\n.infopanel-media-large {\n    width: 176px;\n    height: 157px;\n}\n\n.infopanel-content {\n    flex: 1 1 auto;\n    flex-direction: column;\n    white-space: nowrap;\n}\n\n.infopanel-content-row {\n    flex: 1 1 auto;\n    flex-direction: row;\n    white-space: nowrap;\n}\n\n.infopanel-header {\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/OperativeData.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/OperativeData.css ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".operative-data {\n    display: flex;\n    flex-direction: column;\n}\n\n.operative-data-row-0 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin: 12px;\n}\n\n.operative-data-row-1 {\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n", "",{"version":3,"sources":["webpack://src/OperativeData.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B","sourcesContent":[".operative-data {\n    display: flex;\n    flex-direction: column;\n}\n\n.operative-data-row-0 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin: 12px;\n}\n\n.operative-data-row-1 {\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/VoltageChart.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/VoltageChart.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".voltage-chart {\n    margin-top: 12px;\n}\n\n.voltage-chart {\n    margin-top: 24px;\n}\n\n.voltage-chart-card {\n    margin: 12px;\n}\n.voltage-chart-card-content {\n}\n", "",{"version":3,"sources":["webpack://src/VoltageChart.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;AACA;AACA","sourcesContent":[".voltage-chart {\n    margin-top: 12px;\n}\n\n.voltage-chart {\n    margin-top: 24px;\n}\n\n.voltage-chart-card {\n    margin: 12px;\n}\n.voltage-chart-card-content {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/EventItem.css":
/*!***************************!*\
  !*** ./src/EventItem.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./EventItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/EventItem.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/EventsCarousel.css":
/*!********************************!*\
  !*** ./src/EventsCarousel.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./EventsCarousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/EventsCarousel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/InfoPanel.css":
/*!***************************!*\
  !*** ./src/InfoPanel.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./InfoPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/InfoPanel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/OperativeData.css":
/*!*******************************!*\
  !*** ./src/OperativeData.css ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./OperativeData.css */ "./node_modules/css-loader/dist/cjs.js!./src/OperativeData.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/VoltageChart.css":
/*!******************************!*\
  !*** ./src/VoltageChart.css ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./VoltageChart.css */ "./node_modules/css-loader/dist/cjs.js!./src/VoltageChart.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/spk.jpg":
/*!*********************!*\
  !*** ./src/spk.jpg ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/jpeg;base64,/9j/4RzSRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAdAAAAcgEyAAIAAAAUAAAAj4dpAAQAAAABAAAApAAAANAACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKQAyMDIxOjAzOjA0IDEwOjUzOjMwAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAHMKADAAQAAAABAAADowAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAEeARsABQAAAAEAAAEmASgAAwAAAAEAAgAAAgEABAAAAAEAAAEuAgIABAAAAAEAABucAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAUQCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9EGPV4BSGPX4Bcc3qbySBl2SIEEuEk+f8lXPteVU+tr8w/pGl4h5doPzf0e9zXf12p1LXpvs1fgE/wBmr/dWDX+133+i19u/TcBJgH6Lj+bt/lKYszfTe5t1j3Uz6mjhAAdZuc3+Vt9iVKt3BjVfu/gn+zVfuhY7B1Qta8PtIfyCDIPIj6W72/nKT29TZsD7HbnxtG7XUwGwdqFJdcY1X7oT/Zav3VjR1QwGmwzMc9v/ACKTa+qvqNkv2xLZdBd/JY36W5KvFVuz9lr/AHQl9lr/AHQsF/7RaYc/ae4dYz2x/pPd7UI29RD9jQ95J2tLQXNcf+Df9FyVJ4vB6P7LX+7+Cb7LX+7+C5wZHUZH6O2XEho2O1I+lt/qpm5mVYYaHOIG7SeB+clSLek+y1/u/gm+yM/d/Bc4bs57Q5gdtcdoJIbrG7b73N/NKrPzMpr/AE3F5cPzQSePDb9JGkW9X9jZ+7+CX2Vg/N/BcY7PyHTse/TmC4/9Sh/tDPkhpsdAk/T0B4cf5Lv3kqVb2/2ar91McWr91cO3q2UeLPxP/klIdZyAY9bXw3H+9KlW9ocOvwCicSnvC479sZMx6rp8iZUT1fLnV7piYPMfva/mo0q/B//QtY2CXua7ItbiMe0vpvsE1ue0tApdYD+hc7d7Vp41NrQBTm1C7e9mQ3J9On0yz9H7t/rX27/8DtZ9D6fpq8LLeq5LqciivKZQQwt/RstAaN/6T12vud+kbsf6Poqtf0vpTS6ux2SzKyHGuhpu9YbzO3XKfu+l+Y+7ZYiSa0UAL12bjMjFYX4zsukgvmn072PY2ocjIx3uY19jnss/o+O/+dUup5vTcbB9L1Kr2Wuf6W5wDmEtMO/TF7r/APz5/wBb/mxjouPj47NtttLt73XmwUlthZu+nVfY7Hrpbs+jV+k/0i5XrXUuq15noYmNiYrcgNNQxG12Od9F23IdiOus/Tfme6v/AIPehqnTo9hWOou6fXfh5lWZY5ssNwFYex0tYzYWeru/4yz/AINQodlNxH+ri3PyHuD3McCamFv87/Nv+g5tb20uqb/ov31kY/1kuxqbqMnHd0ija0dONldlnpObDLPtN1tbv0d1r/0f+Fpr9VWaczqeKWU2ZTdtbLbbG1gy+xrjNWIK66qf0Vjm/aK7a/8ADU2/pfVQJUHYbn5j8SyymlrnCC7dbAaHbbD6j3NZaz9F7mOq+0Kk7q4y2XMAtIaHu+0V1l1QZ7v1a33WstftH6O/b+m/wfprNt6z0zOsBym/aH1sdZbVZQ5727XeyuzJra/7JR/pHs/Rf6T9xPuvwPfTlNxi82GvEoY2ysvJ2+hkMcG5NzbGf9qr2sZXWzf/ADaQKuref1Xp1FljLaqhXVW4syW2MuZ7Ax3rO9Nnq1+7b6u7f+l/R+nZ9NSo6rgZjhiMy6rb7SBU1lD7SQ4eof0zGPx9uwM3PfVbXX6X6b+RmX5fVQw5lvph7AKg/GfRYwbg4OsrxBZ787c5te//AEH82rmFR1vqt32i+39n20bG23VMaLL2kbvSfkVfme1jt/8ANs9RK08Ol2PJ0Lcy6zF3WY11VFpDn3Nc97gYbs9GvdU9m632MZ/0P0iK3dk5FlLbvSNTKnumqyu1rXy+qt22xtLtrG/6P2LBxr8WnIsf1BlVPVKS51uQ+wsbBa2l32ilnr+rb+k9j/S/S/orP9KtC5z78Gx1ZsZY/a9tVRDara3HY6it/U66GVetV+76aNoKeMX1jhGwZVs2P9MlwtstZ7Sa37tm+pn5r/Z/xSHjbn2GkMsaytwFzXA22hpDGbHvqa92yyyve+plzP8ACep+h/RqhkYnUcwY+RSLGvxbG2MFD6bNxrc9rWuoqymt9nqfpX1P9b+cr/Tfo/SAet5uNXk15lzDhMsLbX7NzarRue5uax9lzvs/qfTpqsvu/wDBarCtdxraLWXNpJxrccNqBc97WuLQXCp0BuVWz+Z9RZrM27IGY59lLSW/Z8m91lj3Q5zmNrx2Vtf6dG0eo/d+m/Sp/XZ0u1uRl4/2rJtLBScOlrqa6C1o+1Mb+77f9J/1vHrVbqPUOt9U6hTj0NpGDXkV2121sfaXUBjbH5N2NXv9Wt9m6qv+a9K5/oXfzf2hK003s7Lw8y9uHTjNyfTa4XZTzs9NjP0LLGFv6N3qb/Uxa/8ACobuqZjdvTcllWPV6Z9TIqax5rDT6La/Qa/09zn/AM42muz2fzdf6ZB651h2HYx1tO+wEvoybL3U2VwK3FuXhYnoNdaxlns9/wDMq1t6j1yinMwRdTRY1217rmuG4b2sux/U9T6L2+9l1P6RiVoaN2WMUPbfVVluMso+zbKnkuOwU14+RVV9qfv+j6P5/wDNqOX1hlFtt1u6rKrFbvQurdiAsczY1u7c+7L2v3Vek/0P0VFln+hssvtstblsxc7ObjemKxc1rHVtYXDez0N36t/g/wCcyG3V/wBv6FjPbn3Y1npdXwsmmtjnvruqreCWy5rn7X7f+ilxKp//0eoyuu9Fx8bHyR03MzcircNgp231na5tjsj13U+DvU91qN1NnTOtY7j080WZFsNbksDnuBe1zWvLq27v0bXPdZv+ggYn1gx+oOtx8mi5hn9IynHsuaIb7ckPqNvpM9m39JTvesH623/VVtN3R6N46mHVOve7cwBoDbovdkPa330XfQZ+f/SP0SNhVPRdP6X9bq624fUbsXJxMeCwmsvte072eg2/1Mf0vRrbX+mtx7n27/f6n0Fn9W6L1fBtw83DyDhOpbaLLjcxtItsf+hZ9myX+k/7V+ix9u//AEf+jYuAxmPeKfs77RY9zK62seQPe5zWV1ei91vvd/Ms9P3vsWkML6x5QOFa/Jsax0jHu9a4hxbtL2Y5Zbb9F3p+rsqq2f4WtCwmne66/rmYxr+s4d2ECa/tN251lLNh2N+z42ORjNc511z2Mu/aOR+m/pf6tUqttt3TTdi2hl1DwyzfktZdtLmCuu+pn0ab31fovUrs+h/xa18Do9t5rxc+i/LycGDTi3ZrJrDx6bMi+vF9R+I1tbfTp/WbbLv0v6JX/wDmJVlZJt6jkk4zG7cfDo3RWJ3e7LyH3ZVm15e7Yz0Kv+DSUh6DZVeWOqOO3Gqa1t36E1bzt2t/nB+l/R12Mfu/Rep/o1uYteB0up7MNldWPtL3VsbA9g2u9S3993sZXv8A+LVTqPVesdPpNX2fEYBFdNlmQXMA3Q12Qx7arWtfQ1/0fW/SrA6r1L6wZD6WWYuNk0Uw7Ldgviqx7x6rKn37/V9GpzfXd9CyyytNkDvaQ6WZ1ttD3s6VjuNd1b6QcfYxpuI31uqbG/1q/VZZ/wAJv/m/UVnp/UKKbGNyrMw2Fzi1ls2b3WhlbbK21B+yv9G/7NVVb6TPXs/63y+DmU4DKnZOHblPa627HBeCw2kA0Purb7t9e299Xs311+j+etN/1p6liZ1Is6ca6xW0nHDH7iLS1rrqr9vs930f3P5pIGt9UEPQ9QGKz1KW3u6Y+xlllmW2GkNZ9N2+8bdrHXerv/mli9WdlMa09L6kzOdLLbarclrKnUhzPU3erdZ6vr+6j6Po+9Gtxek9exP2v1Ky13TsMPP2Sytzcioj3W/byyy7I/m9mTXjbaf0fpX3VXexV8of4vOtYw+1dUZcCKw31s11ThtD/RZ6V9lXp/Tf9KpGrVZ6NzHsy8J7n4vSGjHc91lT2ZOprf6ba7GY36ZzX3Pe/Zs/Ren/ANtq19kpz8Vld+LVh5eSH7QXTcQwnV2+ge9/+E9v829UbqfqbhVY4+1NfQ/bU1tVj73P9Nv6Kj9W9R2x/p/pP9Ls9L/CIXSvrh0HPynYuZiswKcc+piWWtDW1itwO3Jt/m8W71G+q39J6P8AgN/rfzpsDqkRkRdaIcTp/wBU8gfZ8/CrxmVOcaJs3VuZUfSa5jmvda3n+c/Q2WW/9sqWYeg4XVK8LNccHGY39Up6hkOdQ4h8HJroyrb6/d6llVW6v9F/wfs9MWdhdNx625vQXHrLW3BllX2s247dRbb9sc+51f8AxX6SiiqzZ6/q+n6audPzOp00vd1PfmhzyyjFfZQ5oY5vrtqpfTS39pZ3oVvt9Kv/AAP83/LERIXxEHtSJEbCx5r4GP7hdgNxnum1tOH67LajW71P5tw9S31bKv57G/mf+HsUum/snGZkHrGF03pGZf721OdUx76y36bmueHVt3M2+1/856i56zrP1SxHNt6/0z0rLbHX9N6jiVMqdZjuH6v69mI7Hs+1V0v25NOz0Ve6Sz/F99ZM12LjY9+fcG77PV3wwDT1nXOe3Z+bXtrs/Sf6JG0Uat0/2WcnpleP61rep4NReCJFttRd6jcVzbbHWvx/Uq+zss9b+coZfXZ+kXOdKxM/L6lhZdfUKXVZXtyMEXM9ahsvsx22VXtyLMnZaz9ZZbjVX7/579H6l6vddozfq7mPz+k4OU9tI9mRRlPymBstsycXMwctr30V/Z913su9P+btq9FaGeMPI6fX9aMM2ZTX0BuU7Ha1lrmiN15refY6t9fo9Qx3f4D/AIj9KaQ//9Lr+n9AY24O6nWW5BrFVNrLdrXH+duZXUyz6bn1+r/N/wA0z+cVLqmB0DIw30szrqSARVlANvcSC21wosc1znewen/o7KbNihR9V+oXZVObZe71XTuybLC64McCx1lL27m1sdSf5v8AlrpendJxMCtra2h9gkm1wG8k8vkfR/sIRjwikyPEbeV+qnR+m4mU/P6hk03Ghvq4gyq6ca+lpB9TItood9Ha2z07r/fs/m9la0up/X3oTOiZOd0vNqy8lrSzHoa6HutJ9Nn6Gza/063O9W32fzPvQfrJ9Uejdbz67ctl4dXR6DLaLCHkse6z0nNtZdj2e22z6f6RZfU8D6jMzn0dK6U7qnV6xD8DCLmUMIEbs303MwMavd/O/wDntORbP/F1mZdPSrGs6YMgeuWWZ+MahZYf5xrc9731vyMqn1vff9D/AK56i6HD+t/Rsl2Q5t7jVQ/Y9/pO9Otwa59lTsqv1KLnNbU65/pP/Rses/C+q3UOpYddX1hyTVhNkN6Lg/oMcNkwzJur235Tdv5n6GtaXWK8PpXQnY+P01+bjMaWVdMx6yWO0c5tVram7GY73fz9l7Lf+LuegrVpN/ZH1wcx9t97aq2Ofj4haccvYfa3qVfqj18jGdur9F/sq/09X+DQP+beR0Y2/s2g5VmUz0zYSdgdp6d2XRv9/p2fpPTrZ9BZDur9DpfTl5H1Zz8LNqIZh2YZOxr3DTHquotor/nLfStxm02M/wBJT+YtfDp+tH1gL8nNupwaK22U149TfWYy7cW+to9jL8rC2eh+mdbi15PqfoPV/RUogKtzX/8AOqhlRzekYuVi1vIP2DHtqyA5wd7qxZ6jGN31/rF3ofzP9F3+pWtm/N6bVi9Qbd1U43UMyl1dV+X6mK2iWPZjfZ/tDa31em5+99u/17LP0iw6/qr9VKTk5ON1fLvz8Pcc0tynM9a5m42MyjWG2Mba9vpfor/+ueop43+NSws2WdOr9Vmj2MyCCCPpfo3UOc3agSBuvETLYNb6pdC6t0/qzcnpnWMDIxXva3PFF3rG2r6cvqaP6R/ob9/qs9T8+revQ8j7NZYKLdj7HMc8UP2kuY3a1ztrw72MfYz/AD1xLP8AGJ9XsxhOd0iwvDXuaHNptEV/zkuscxzWt/qLg+pXfWB2W7Lz8J9Bub61VVQsqZTTZ9FlYYa2VM9Pa1/t9/8AOX77bLEbHRBBHR77J+qt2WGX4jMS/I+1OuyWYlooayos9KnGovpr3Nez+cfb6e+z0lit+p31nrpyizHfZXk0vaHY99ZD9x3t9fc5rr6v+m+xc3R1vrIw33YlvUW41O1tt/q3GhggNqpt9Pbj0+7+a3uXoOH0j/GgKqbj1rGeHgOfi5FTHFkw7Y7Ix6X77a/3mP8AT/4xNMQTa6OWURQ2btGFkVfVy49dczGora02V49Yc+uprBX+vNr9X1/Zts9v8x/pP3OO/ZeNk52OMjHyukXV2B77/tGO/ZtDb35rcVs5lFzoxvfj/o/R9D/RLoTifXzBZecqrptmJYxwy7fXsraa3Gcp1tlw9u2t12y9zP0X/CfzaavrnSH23ZmR9XLrH41lmOMjGbTkexjvQyPU/SstfX6tdm39B6f+jT4gkUGMmjbsU4n1dxumV/ac2plNzntbc60NY55c+xzWHJLm+o1Lp3T8TFodR0fqFN1dzgbrfUqFsDdtZXZiVt/f/O/sfzi5LM+tvQ72txndObXQN005dDnNaHau2tbt9Oz1W/Trcs6x/wBTcjGb6WDivyrS0ObXk24pZJ97t+Y++j2f8VZvTxEV6uLzjHigtN36eHyJqT3eXQ/Btfi49x+05ABAFYDA0z6e959tvvDv+E/629Zb+k5P1a6F1DDe37T07LAF7aSWGqt/6vnX1Mc57v5h3qfufo/+3G6VndE6JgVYXTrp35FljWPtZYHborPp2srrY9uyv2/ueoui+z/tbp2RjXCA5wdTbt3Rr6jH17v3HhCgDobH2Ks9RT//0+p6/gYNmMa7us/YBiONtgDmyA76Y9uyz/i6vp/9uLJ6f13B6G8NqyMjKffLX3dROwCtnvrP2posq9Jtbv0C0bcs9QssZiYFWP1DBe5pvtDCWvmQ2v2ub7mu3b31v/8ARilR9WMT1WZF7q33sYGC1zA4jjcaWO/R1v8Abt3o0EasczovWvrLY+zIzn4vRXlvo4lLDTba38+zIteGXNq/cq/wv/B+yxbWJidN6DiDE6fQ2mtgB9NgIBJEepPu3bn/AE1cZkVMY1gdo0ACedFC12Lc5rrPdt4EwPj/AGUrTTR699Y39Kw68nG6dk9UNpILcVu9rIAfuyLG7/Tr/wCEayxYPSf8ZmPZTfV1XEsr6pW+MbFw2Pt+0tcZqbiSGv8AVrb/ADvqfo7P6TR/OelTr9dvZh4zs89StxcSl1O7Faa2VQLat+22un7d7q/U3013/pv9H/g1wv1n+szeodZqz+nEVihlbqMky6wn9HkbHMta1mP6V1bPUxq2e+31fVufXZ6aSJT4d3d6v9Yeo9XyGYeGx3Segsg5nUMpp33se0vqqxcVs2+nfV+me/8Antn8/wDZf5u/ab9Vul4/Shi9GL8XcRaM3GefUE/pGux9jvTcyzf/AEf+jel/g1xfTfq1T1bC/beBlXDMqD32NkPtOadz8llu0M3V5P6O1mz/AEis/VvE+v1WJVbi5f2PEiGYOVtDwAfza76rPTa78z9IgkEHV73pHSMTpfTa+nY9La62MO8H3bnTJtuf+e6z6SWV0vormNGTj0uY0GGvYwghxiPe13sbuXmGF9Y+s19fxcnL6i2rIvvfRlNvreWMZWGs/Wasb02v9Vm/7Pj0/wCEq9TJvXcda+uPRW9PN2Bbj9VvdayirErsa15fY7bq9+9uPsr9RzrLa/TSU2cb6r/Vl+Q+9nT6XWY1kCxzIO8Br3eFdn0vpo3V/rP0HoIcMq2cktL/ALJV+kuIM2S6qdtLXb3++91NS88+vP1mrdZi4Ta7+n5NZZZlVOcx4dW5u9gF2FdkU5NPu/P/AO2lzGL100k6YtjbC71PVx6XT+7r6ddm7/ribI1sF8Y3qT9H03p/+MfpduUcTq+N+z6by5tTn+9jW/R9LMhobV6k+o+3+Y9+y3+a9azT6f8AVL6nY3VrsjExKjk2sbkCuN1VbLC5gsxW/wAzV6zq/wDB/wDW9la8lb1TCtNfqdOxwQ1xBx320wRv/MNuRT+b/ol0f1O+t9fS8irEqZe7HtcK/srzVYAHEn9TyD9ksr2Pdv8Asu2yu7f+hq9axIT6FModQ9l9dsmz7Lj9Nw9rndXt+wZMHc5tTa7brW1V7vSbd+a7e3+b/wCtKH1K+rWHR9XqGZ+DVZa99lgbfU172te721u9Rvt+j9Bq5arpz6frJf1GhovzuoV5FjqxpbWb37f1Noltttdfrfzj/wBFRRd/OexdBVgZ2c3HdjdQZkWY9jXWX9PzGh1u0BrqMpnpta6l3u/RttT+jHeujo/WX6o4XUOj3YuBT9kyBL6BjRU0vP8ApK/ZS5rvzvz/APhFn5/1NxsTExqcJuNmXtfY+5/U2i620beKWQ1n6P8AkfQUcnq+Xj9aY13ULsWrGaWZPT3M9QPeQbGXMy91u1tfqVezZs/R/vqhgfWLMrzaWdS6lT1c0FzmZAa3Gcz1AKHVuobWGWexz/e96QsFRlYol47qXTrWPttOBTVW52xxxwQ2Z93s3e3dWx710n1NxaM7EvfjZZwLabHNsp9a9pFYaPSc19duO9zP5xzP57/0pr5z8LE6U01U/bBkvs0aCBtLvRNvs3+3873Iv7M6CzPbaMXZfSA5todEgsH8/wDm+2v9Ejrdg6rdKov/1Ojb/T7/AOqz/qWqyvn5JJQfoFOF8+pJJfVv8YH810v/AMMWf9QuK/wY/rH+C55JEMGT5n0r6l/0Pq/xxvy2Lu7f513xXz0kkyQ+V9K63/4obf8AiD/6NXN9b/5Ryvg78jVzKSSXqs3/AMS+D/Wu/KsCz+YHxP8ABVEklzZZ9I/69lexv52v+t/ArISTJbheNj5Pq3R/+U3f+myr8ty8qZ9IJkk87MY3fTrv6Ni/1f8A0XSsDM/P+D/+qXIJI9Fpe1+qP9MzP/TZl/8AVVLq8L+iX/8AFt/K5ePpIhRf/9n/7SU8UGhvdG9zaG9wIDMuMAA4QklNBCUAAAAAABAAAAAAAAAAAAAAAAAAAAAAOEJJTQQ6AAAAAAFXAAAAEAAAAAEAAAAAAAtwcmludE91dHB1dAAAAAcAAAAAQ2xyU2VudW0AAAAAQ2xyUwAAAABSR0JDAAAAAE5tICBURVhUAAAAEQBBAGQAbwBiAGUAIABSAEcAQgAgACgAMQA5ADkAOAApAAAAAAAASW50ZWVudW0AAAAASW50ZQAAAABDbHJtAAAAAE1wQmxib29sAQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAATAEMAYQBuAG8AbgBfAE0ARgAyADIAMABfAFMAZQByAGkAZQBzAAAAAAAPcHJpbnRQcm9vZlNldHVwT2JqYwAAAAwAUAByAG8AbwBmACAAUwBlAHQAdQBwAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0kAAAAGAAAAAAAAAAAAAAOjAAAHMAAAAAoAVQBuAHQAaQB0AGwAZQBkAC0AMQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAHMAAAA6MAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAA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MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTA0VDEwOjUzOjMwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTA0VDEwOjUzOjMwKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0wNFQxMDo1MzozMCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OGZlMzAzOS1kMDc0LTA0NGQtYWEwNy1lOWQzNWYyZDYxYWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OWM4NThiNjctOThkNS01NDQ3LWIzOTUtYzU4YWZiNzI5ZTFkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OWM4NThiNjctOThkNS01NDQ3LWIzOTUtYzU4YWZiNzI5ZTFkIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWM4NThiNjctOThkNS01NDQ3LWIzOTUtYzU4YWZiNzI5ZTFkIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTA0VDEwOjUzOjMwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OGZlMzAzOS1kMDc0LTA0NGQtYWEwNy1lOWQzNWYyZDYxYWMiIHN0RXZ0OndoZW49IjIwMjEtMDMtMDRUMTA6NTM6MzArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRi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EEEEEEEEEEEEEHzzzz330EEEEEEMM8/vPPMMMc80/wD/AAw//wD8vfsMEMf3/wDD+AMA9xNN/wAw8Tzzzjjws888/wD/AP8Azzwzww//AP3000EEEEEEEHzwEDz0EEEEEEEEEEEEEEEEEEAwEwxwEEEEEH7r/wD/AP8A/sMMMM988PO8888+8/8APDD/AP8AvMLjHE32EkPI/wD/AP8AwIL8IILLb/8A/wDwwww//wD/ALxxBB999999998oxAwh999999999999999999999xwB999999+++u++/wC//wD/APHDDD//AP8A+/P/AP7A8UDDTz+88899CCONwMIxxOOPeyyyOPPPPfzzzzPPf/qyxB9NNNNNNMMcxhNMNNNNNNNNNNNNNNNNNNYwMMMNNNNNNOOOPPPzzzzPDjDDDDdxxhzPz+8NNN/9BAO/3zyyAz+O8wBxT9PDCCA++DBBB99999999PDDBRCC99xxAAAAhx88999999999991919994NEMNAA1999DDDDDDDD/wD/APP9PMMN3/8A/wD/AP8A/wCtfccQXf8A8uPc/EFXPMaYfP8An399xJtBw0K/PCDEA0wwxOy//PLdxJFPrDDPBlxCP/8AzjAPDCADADgAA0/TPDQz93/8z+v/APOM88scMcfLPOPr4c008/PPfP8AHyy+CCiSIKSgU0m8/La3vf67XDfnrfXjnXfXzz+iWc8w8QwM4QMUEJJB9x1088MD+7PP/Xf99JBAs8wAUMdZ5wUGaO6KuOWoY5zMELvfLv7++TD/ALy/88skrpgnqnplwW0TPPgrjgosk52khstptsqkx24zy62ENKUASAJBcNDFw28x0yadMHD694gDPCDFMbTTRfOnjsu2y34wxy33x+vwhgjtirz0r199jutsinjt+AMCIAABN0WPth9qqitiknlglk/qnngvsp3hi5y/MQCWFPNOPLrq88a83SSUcHINKwQQOIzXcccQcS9ir7919wzGz42881/sju5zw6y/uvutupnwxgpMOhHPLGKJOQSdabQAR1wy4aXHce06W/yYw+y239oGJKFTGKHHIBAJhjLBoZ8mOrPIGebTcTXODPMNDPPAp+Cp45//AN47zaZttvvNuMMf/M9P/Ns/+881Glm003VkHNL4LLIjYzq5A7BbRayt1VwX2CEq2N/YU2lhcvtu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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksite"] = self["webpackChunksite"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vc3JjL0FwaS5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL0V2ZW50SXRlbS5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL0V2ZW50c0Nhcm91c2VsLmpzIiwid2VicGFjazovL3NpdGUvLi9zcmMvSW5mb1BhbmVsLmpzIiwid2VicGFjazovL3NpdGUvLi9zcmMvT3BlcmF0aXZlRGF0YS5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL1ZvbHRhZ2VDaGFydC5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL2VuZXJneV9ncnBjX3dlYl9wYi5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL2VuZXJneV9wYi5qcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NpdGUvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly9zaXRlLy4vc3JjL0V2ZW50SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3NyYy9FdmVudHNDYXJvdXNlbC5jc3MiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3NyYy9JbmZvUGFuZWwuY3NzIiwid2VicGFjazovL3NpdGUvLi9zcmMvT3BlcmF0aXZlRGF0YS5jc3MiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3NyYy9Wb2x0YWdlQ2hhcnQuY3NzIiwid2VicGFjazovL3NpdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3NpdGUvLi9zcmMvQXBwLmNzcz9kOWNkIiwid2VicGFjazovL3NpdGUvLi9zcmMvRXZlbnRJdGVtLmNzcz8wODRkIiwid2VicGFjazovL3NpdGUvLi9zcmMvRXZlbnRzQ2Fyb3VzZWwuY3NzPzJlY2MiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3NyYy9JbmZvUGFuZWwuY3NzPzI4NjAiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3NyYy9PcGVyYXRpdmVEYXRhLmNzcz85ZWZjIiwid2VicGFjazovL3NpdGUvLi9zcmMvVm9sdGFnZUNoYXJ0LmNzcz9lMjJjIiwid2VicGFjazovL3NpdGUvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vc2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2l0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZW5hYmxlRGV2VG9vbHMiLCJ3aW5kb3ciLCJfX0dSUENXRUJfREVWVE9PTFNfXyIsInJlcXVpcmUiLCJTdHJpbmdSZXNwb25zZSIsIlN0cmluZ1JlcXVlc3QiLCJDaGFydERhdGFSZXF1ZXN0IiwiQ2hhcnREYXRhUmVzcG9uc2UiLCJFdmVudHNSZXF1ZXN0IiwiRW5lcmd5Q2xpZW50IiwiYXBpIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJBcGkiLCJyZXF1ZXN0Iiwic2V0TWVzc2FnZSIsInBpbmciLCJlcnIiLCJyZXNwb25zZSIsImFsZXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwic3RhcnQiLCJlbmQiLCJzdGVwIiwiY2FsbGJhY2siLCJyIiwic2V0U3RhcnQiLCJNYXRoIiwicm91bmQiLCJnZXRUaW1lIiwic2V0RW5kIiwic2V0U3RlcCIsImNoYXJ0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaW1pdCIsInNldENvdW50Iiwic2V0Rm9yd2FyZCIsImV2ZW50cyIsInNldEJhY2t3YXJkIiwiZGVhZGxpbmUiLCJEYXRlIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJsYXN0RGF0YSIsImRhdGUiLCJ0d29EaWdpdCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwidmFsIiwicmVzIiwibGVuZ3RoIiwiQXBwIiwiRXZlbnRJdGVtIiwicHJvcHMiLCJhdXRvQmluZCIsIml0ZW0iLCJuYW1lIiwicGFyYW1zIiwiQ29tcG9uZW50IiwiRVZFTlRTX1RPX0xPQUQiLCJNQVhfRVZFTlRTIiwiRXZlbnRzQ2Fyb3VzZWwiLCJzdGF0ZSIsIm5leHREaXNhYmxlZCIsInByZXZEaXNhYmxlZCIsImxvYWRpbmdBY3RpdmUiLCJpdGVtcyIsIm1hcCIsImkiLCJuZXh0IiwiYWN0aXZlIiwiaGFuZGxlTmV4dCIsInByZXYiLCJoYW5kbGVQcmV2Iiwib25DbGljayIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiaW5kZXgiLCJzZXRTdGF0ZSIsIm1hcEl0ZW1zIiwibG9hZE5leHREYXRhIiwibG9hZFByZXZEYXRhIiwiY3VycmVudEluZGV4IiwibWFwSXRlbSIsIm51bWJlciIsIml0ZW1JbmRleCIsImV2ZW50SW5kZXgiLCJnZXROYW1lIiwiZm9ybWF0RGF0ZSIsImdldFN0YXJ0IiwiZ2V0RW5kIiwiZ2V0UGFyYW1zIiwibG9hZEV2ZW50c0JhY2t3YXJkIiwicmVzcCIsImdldEV2ZW50c0xpc3QiLCJmb3JFYWNoIiwidiIsInB1c2giLCJzaGlmdCIsImxvYWRFdmVudHNGb3J3YXJkIiwidW5zaGlmdCIsInBvcCIsImdldEhhdmVtb3JlIiwiZ2V0Rmlyc3RkYXRlIiwiZ2V0TGFzdGRhdGUiLCJkYXRhIiwiR09PRCIsIkJBRCIsIlVOS05PV04iLCJJbmZvUGFuZWwiLCJpbWFnZSIsImNhcHRpb24iLCJ2YWx1ZSIsIm1heCIsIm1pbiIsIk1JTl9QSEFaRV9WT0xUQUdFIiwiTUFYX1BIQVpFX1ZPTFRBR0UiLCJNSU5fQkVUV0VFTl9QSEFaRV9WT0xUQUdFIiwiTUFYX0JFVFdFRU5fUEhBWkVfVk9MVEFHRSIsIk9wZXJhdGl2ZURhdGEiLCJsYXN0RGF0ZSIsImFsYXJtcyIsIm9ubGluZSIsInZhbHVlcyIsImxvYWREYXRhIiwic3RyZWFtIiwicmVjZWl2ZUxhc3REYXRhIiwib24iLCJnZXRMYXN0ZGF0YUxpc3QiLCJnZXRQYXJhbW5hbWUiLCJnZXRWYWx1ZSIsImltZyIsImdldE9ubGluZSIsImdldEFsYXJtIiwiZ2V0RGF0YXRpbWUiLCJzdGF0dXMiLCJkZXRhaWxzIiwibWV0YWRhdGEiLCJzdGFydExvYWREYXRhIiwic2V0VGltZW91dCIsIlZvbHRhZ2VDaGFydCIsIm9wdGlvbnMiLCJjaGFydCIsImlkIiwid2lkdGgiLCJzY3JvbGxlZCIsImNoYXJ0Q29udGV4dCIsInhheGlzIiwiem9vbWVkIiwieWF4aXMiLCJ0b29sYmFyIiwidG9vbHMiLCJkb3dubG9hZCIsInNlbGVjdGlvbiIsInpvb20iLCJ6b29taW4iLCJ6b29tb3V0IiwicGFuIiwiaG9tZSIsInJlc2V0IiwidHlwZSIsIm5vRGF0YSIsInRleHQiLCJzZXJpZXMiLCJsb2FkQ2hhcnREYXRhIiwic2VyaWVzTGlzdCIsImdldFNlcmllc0xpc3QiLCJzIiwiZ2V0VmFsdWVzTGlzdCIsIngiLCJnZXRYIiwieSIsImdldFkiLCJzZXIiLCJub3ciLCJncnBjIiwid2ViIiwicHJvdG8iLCJzZXJ2aWNlIiwiaG9zdG5hbWUiLCJjcmVkZW50aWFscyIsImNsaWVudF8iLCJHcnBjV2ViQ2xpZW50QmFzZSIsImhvc3RuYW1lXyIsIkVuZXJneVByb21pc2VDbGllbnQiLCJtZXRob2REZXNjcmlwdG9yX0VuZXJneV9QaW5nIiwiTWV0aG9kRGVzY3JpcHRvciIsIk1ldGhvZFR5cGUiLCJVTkFSWSIsInNlcmlhbGl6ZUJpbmFyeSIsImRlc2VyaWFsaXplQmluYXJ5IiwibWV0aG9kSW5mb19FbmVyZ3lfUGluZyIsIkFic3RyYWN0Q2xpZW50QmFzZSIsIk1ldGhvZEluZm8iLCJwcm90b3R5cGUiLCJycGNDYWxsIiwidW5hcnlDYWxsIiwibWV0aG9kRGVzY3JpcHRvcl9FbmVyZ3lfQ2hhcnREYXRhIiwibWV0aG9kSW5mb19FbmVyZ3lfQ2hhcnREYXRhIiwibWV0aG9kRGVzY3JpcHRvcl9FbmVyZ3lfRXZlbnRzIiwiRXZlbnRzUmVzcG9uc2UiLCJtZXRob2RJbmZvX0VuZXJneV9FdmVudHMiLCJtZXRob2REZXNjcmlwdG9yX0VuZXJneV9MYXN0RGF0YSIsIlNFUlZFUl9TVFJFQU1JTkciLCJMYXN0RGF0YVJlc3BvbnNlIiwibWV0aG9kSW5mb19FbmVyZ3lfTGFzdERhdGEiLCJzZXJ2ZXJTdHJlYW1pbmciLCJtb2R1bGUiLCJleHBvcnRzIiwianNwYiIsImdvb2ciLCJnbG9iYWwiLCJGdW5jdGlvbiIsImV4cG9ydFN5bWJvbCIsIm9wdF9kYXRhIiwiTWVzc2FnZSIsImluaXRpYWxpemUiLCJpbmhlcml0cyIsIkRFQlVHIiwiQ09NUElMRUQiLCJkaXNwbGF5TmFtZSIsInJlcGVhdGVkRmllbGRzXyIsIkNoYXJ0U2VyaWVzRGF0YSIsIlNlcmllc1ZhbHVlcyIsIkV2ZW50IiwiTGFzdERhdGEiLCJHRU5FUkFURV9UT19PQkpFQ1QiLCJ0b09iamVjdCIsIm9wdF9pbmNsdWRlSW5zdGFuY2UiLCJpbmNsdWRlSW5zdGFuY2UiLCJtc2ciLCJmIiwib2JqIiwiZ2V0RmllbGRXaXRoRGVmYXVsdCIsIiRqc3BiTWVzc2FnZUluc3RhbmNlIiwiYnl0ZXMiLCJyZWFkZXIiLCJCaW5hcnlSZWFkZXIiLCJkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIiLCJuZXh0RmllbGQiLCJpc0VuZEdyb3VwIiwiZmllbGQiLCJnZXRGaWVsZE51bWJlciIsInJlYWRTdHJpbmciLCJza2lwRmllbGQiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJzZXJpYWxpemVCaW5hcnlUb1dyaXRlciIsImdldFJlc3VsdEJ1ZmZlciIsInVuZGVmaW5lZCIsIndyaXRlU3RyaW5nIiwic2V0UHJvdG8zU3RyaW5nRmllbGQiLCJyZWFkSW50NjQiLCJ3cml0ZUludDY0IiwiZ2V0U3RlcCIsInNldFByb3RvM0ludEZpZWxkIiwidG9PYmplY3RMaXN0IiwicmVhZE1lc3NhZ2UiLCJhZGRTZXJpZXMiLCJ3cml0ZVJlcGVhdGVkTWVzc2FnZSIsImdldFJlcGVhdGVkV3JhcHBlckZpZWxkIiwic2V0U2VyaWVzTGlzdCIsInNldFJlcGVhdGVkV3JhcHBlckZpZWxkIiwib3B0X3ZhbHVlIiwib3B0X2luZGV4IiwiYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZCIsImNsZWFyU2VyaWVzTGlzdCIsInZhbHVlc0xpc3QiLCJzZXROYW1lIiwiYWRkVmFsdWVzIiwic2V0VmFsdWVzTGlzdCIsImNsZWFyVmFsdWVzTGlzdCIsImdldEZsb2F0aW5nUG9pbnRGaWVsZFdpdGhEZWZhdWx0Iiwic2V0WCIsInJlYWREb3VibGUiLCJzZXRZIiwid3JpdGVEb3VibGUiLCJzZXRQcm90bzNGbG9hdEZpZWxkIiwiY291bnQiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJnZXRDb3VudCIsImdldEZvcndhcmQiLCJnZXRCYWNrd2FyZCIsImV2ZW50c0xpc3QiLCJsYXN0ZGF0ZSIsImZpcnN0ZGF0ZSIsImhhdmVtb3JlIiwiZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQiLCJhZGRFdmVudHMiLCJzZXRMYXN0ZGF0ZSIsInNldEZpcnN0ZGF0ZSIsInJlYWRCb29sIiwic2V0SGF2ZW1vcmUiLCJ3cml0ZUJvb2wiLCJzZXRFdmVudHNMaXN0IiwiY2xlYXJFdmVudHNMaXN0Iiwic2V0UHJvdG8zQm9vbGVhbkZpZWxkIiwic2V0UGFyYW1zIiwibGFzdGRhdGFMaXN0IiwiZGF0YXRpbWUiLCJhbGFybSIsImFkZExhc3RkYXRhIiwic2V0RGF0YXRpbWUiLCJzZXRPbmxpbmUiLCJzZXRBbGFybSIsInNldExhc3RkYXRhTGlzdCIsImNsZWFyTGFzdGRhdGFMaXN0IiwicGFyYW1uYW1lIiwic2V0UGFyYW1uYW1lIiwic2V0VmFsdWUiLCJvYmplY3QiLCJleHRlbmQiLCJSZWFjdERPTSIsImRvY3Vt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RjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtEQUFrRDtXQUNsRDtXQUNBLEU7Ozs7O1VDdkZBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW5hYmxlRGV2VG9vbHMgPSB3aW5kb3cuX19HUlBDV0VCX0RFVlRPT0xTX18gfHwgKCgpID0+IHt9KTtcbmNvbnN0IHtTdHJpbmdSZXNwb25zZSwgU3RyaW5nUmVxdWVzdCwgQ2hhcnREYXRhUmVxdWVzdCwgQ2hhcnREYXRhUmVzcG9uc2UsIEV2ZW50c1JlcXVlc3R9ID0gcmVxdWlyZSgnLi9lbmVyZ3lfcGIuanMnKTtcbmNvbnN0IHtFbmVyZ3lDbGllbnR9ID0gcmVxdWlyZSgnLi9lbmVyZ3lfZ3JwY193ZWJfcGIuanMnKTtcbmNvbnN0IGFwaSA9IG5ldyBFbmVyZ3lDbGllbnQod2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QpO1xuXG5lbmFibGVEZXZUb29scyhbXG4gICAgYXBpLFxuXSk7XG5cbmNsYXNzIEFwaSB7XG4gICAgdGVzdCgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgU3RyaW5nUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0LnNldE1lc3NhZ2UoJ1BpbmcnKTtcbiAgICAgICAgYXBpLnBpbmcocmVxdWVzdCwge30sIGZ1bmN0aW9uIChlcnIsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvZGU6IFwiICsgZXJyLmNvZGUgKyBcIlxcbk1lc3NhZ2U6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5nZXRNZXNzYWdlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkQ2hhcnREYXRhKHN0YXJ0LCBlbmQsIHN0ZXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCByID0gbmV3IENoYXJ0RGF0YVJlcXVlc3QoKTtcbiAgICAgICAgci5zZXRTdGFydChNYXRoLnJvdW5kKChzdGFydC5nZXRUaW1lKCkvMTAwMCkpKTtcbiAgICAgICAgci5zZXRFbmQoTWF0aC5yb3VuZChlbmQuZ2V0VGltZSgpLzEwMDApKTtcbiAgICAgICAgci5zZXRTdGVwKHN0ZXApO1xuICAgICAgICBhcGkuY2hhcnREYXRhKHIsIHt9LCBmdW5jdGlvbiAoZXJyLCByZXNwb25zZSl7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJ0RGF0YUVycjogXCIgKyBlcnIuY29kZSArIFwiOlwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRFdmVudHNGb3J3YXJkKHN0YXJ0LCBsaW1pdCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgRXZlbnRzUmVxdWVzdCgpO1xuICAgICAgICByLnNldENvdW50KGxpbWl0KTtcbiAgICAgICAgci5zZXRGb3J3YXJkKE1hdGgucm91bmQoc3RhcnQuZ2V0VGltZSgpLzEwMDApKTtcbiAgICAgICAgYXBpLmV2ZW50cyhyLCB7fSwgZnVuY3Rpb24gKGVyciwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnRzRXJyOiBcIiArIGVyci5jb2RlICsgXCI6XCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50c0JhY2t3YXJkKHN0YXJ0LCBsaW1pdCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgRXZlbnRzUmVxdWVzdCgpO1xuICAgICAgICByLnNldENvdW50KGxpbWl0KTtcbiAgICAgICAgci5zZXRCYWNrd2FyZChNYXRoLnJvdW5kKHN0YXJ0LmdldFRpbWUoKS8xMDAwKSk7XG4gICAgICAgIGFwaS5ldmVudHMociwge30sIGZ1bmN0aW9uIChlcnIsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50c0VycjogXCIgKyBlcnIuY29kZSArIFwiOlwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVMYXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgU3RyaW5nUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZGVhZGxpbmUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkZWFkbGluZS5zZXRTZWNvbmRzKGRlYWRsaW5lLmdldFNlY29uZHMoKSArIDEpO1xuXG4gICAgICAgIHJldHVybiBhcGkubGFzdERhdGEociwge2RlYWRsaW5lOiBkZWFkbGluZS5nZXRUaW1lKCl9KTtcbiAgICB9XG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHdvRGlnaXQoZGF0ZS5nZXREYXRlKCkpICsgXCIvXCIgKyB0aGlzLnR3b0RpZ2l0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIiBcIlxuICAgICAgICAgICAgKyB0aGlzLnR3b0RpZ2l0KGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIHRoaXMudHdvRGlnaXQoZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyB0aGlzLnR3b0RpZ2l0KGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICB9XG5cbiAgICB0d29EaWdpdCh2YWwpIHtcbiAgICAgICAgbGV0IHJlcyA9IFwiXCIgKyB2YWw7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoID09IDEpICB7XG4gICAgICAgICAgICByZXR1cm4gXCIwXCIgKyByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwaTtcblxuIiwiaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWb2x0YWdlQ2hhcnQgZnJvbSBcIi4vVm9sdGFnZUNoYXJ0XCI7XG5pbXBvcnQgT3BlcmF0aXZlRGF0YSBmcm9tICcuL09wZXJhdGl2ZURhdGEnXG5pbXBvcnQgRXZlbnRzQ2Fyb3VzZWwgZnJvbSBcIi4vRXZlbnRzQ2Fyb3VzZWxcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJvZHlcIn0+XG4gICAgICAgICAgICA8T3BlcmF0aXZlRGF0YS8+XG4gICAgICAgICAgICA8RXZlbnRzQ2Fyb3VzZWwvPlxuICAgICAgICAgICAgPFZvbHRhZ2VDaGFydC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCAnLi9FdmVudEl0ZW0uY3NzJ1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBhdXRvQmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJldmVudC1pdGVtXCJ9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJldmVudC1pdGVtLWNhcmRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e1wiZXZlbnQtaXRlbS1jYXJkLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLQsNGA0LjRjzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDQu9C+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtLnN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntC60L7QvdGH0LDQvdC40LU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW0uZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9Cw0YDQsNC80LXRgtGA0Ys6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW0ucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCBhdXRvQmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5pbXBvcnQgRXZlbnRJdGVtIGZyb20gJy4vRXZlbnRJdGVtJ1xuaW1wb3J0ICcuL0V2ZW50c0Nhcm91c2VsLmNzcydcbmltcG9ydCBBcGkgZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQgTG9hZGluZ092ZXJsYXkgZnJvbSAncmVhY3QtbG9hZGluZy1vdmVybGF5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiO1xuXG5jb25zdCBFVkVOVFNfVE9fTE9BRCA9IDU7XG5jb25zdCBNQVhfRVZFTlRTID0gMTA7XG5cbmNsYXNzIEV2ZW50c0Nhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBpbmRleCA9IDA7XG4gICAgZXZlbnRzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGF1dG9CaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmV4dERpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWRpbmdBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCItLS1cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCItLS1cIixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBcIi0tLVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi0tLVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogXCItLS1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIi0tLVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCItLS1cIixcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIi0tLVwiLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFwiLS0tXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50c0Nhcm91c2VsIHJlbmRlclwiKTtcblxuICAgICAgICBsZXQgciA9IHRoaXMuc3RhdGUuaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4gPEV2ZW50SXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IC8+IClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvYWRpbmdPdmVybGF5XG4gICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmdBY3RpdmV9XG4gICAgICAgICAgICAgICAgc3Bpbm5lclxuICAgICAgICAgICAgICAgIHRleHQ9J0xvYWRpbmcgeW91ciBjb250ZW50Li4uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImV2ZW50cy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17IChuZXh0LCBhY3RpdmUpID0+IHRoaXMuaGFuZGxlTmV4dChuZXh0LCBhY3RpdmUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY9eyAocHJldiwgYWN0aXZlKSA9PiAgdGhpcy5oYW5kbGVQcmV2KHByZXYsIGFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjYXJvdXNlbFwifVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXZCdXR0b249eyh7b25DbGljaywgY2xhc3NOYW1lLCBzdHlsZSwgbmV4dCwgcHJldn0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hdkJ1dHRvblwiICsgc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge3RoaXMuc3RhdGUubmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge3RoaXMuc3RhdGUucHJldkRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTG9hZGluZ092ZXJsYXk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dChuZXh0LCBhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByZXZEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhgaW5kZXggJHt0aGlzLmluZGV4fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgTkVYVCEgd2UgbGVmdCAke2FjdGl2ZX0sIGFuZCBhcmUgbm93IGF0ICR7bmV4dH0sIGluZGV4ICR7dGhpcy5pbmRleH1gKTtcblxuICAgICAgICB0aGlzLm1hcEl0ZW1zKG5leHQpO1xuICAgICAgICBpZiAodGhpcy5pbmRleCArIDEgPT0gdGhpcy5ldmVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkTmV4dERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByZXYocHJldiwgYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaW5kZXgtLTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5leHREaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBQUkVWISB3ZSBsZWZ0ICR7YWN0aXZlfSwgYW5kIGFyZSBub3cgYXQgJHtwcmV2fSwgaW5kZXggJHt0aGlzLmluZGV4fWApO1xuICAgICAgICB0aGlzLm1hcEl0ZW1zKHByZXYpO1xuXG4gICAgICAgIGlmICh0aGlzLmluZGV4IC0gMSA9PSAwICl7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcmV2RGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFwSXRlbXMoY3VycmVudEluZGV4KSB7XG4gICAgICAgIGxldCBuZXh0ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHQgPT0gdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByZXYgPSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICBpZiAocHJldiA8IDApIHtcbiAgICAgICAgICAgIHByZXYgPSB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXBJdGVtKG5leHQsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcEl0ZW0ocHJldiwgdGhpcy5pbmRleCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYCggTmV4dCA9PSAke25leHR9LCBOdW1iZXIgPT0gJHt0aGlzLnN0YXRlLml0ZW1zW25leHRdLm51bWJlcn0gKSwgKFByZXYgPT0gJHtwcmV2fSwgTnVtYmVyID09ICR7dGhpcy5zdGF0ZS5pdGVtc1twcmV2XS5udW1iZXJ9KWApO1xuICAgIH1cblxuICAgIG1hcEl0ZW0oaXRlbUluZGV4LCBldmVudEluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG5cbiAgICAgICAgbGV0IGFwaSA9IG5ldyBBcGkoKTtcblxuICAgICAgICBpdGVtc1tpdGVtSW5kZXhdLm5hbWUgPSB0aGlzLmV2ZW50c1tldmVudEluZGV4XS5nZXROYW1lKCk7XG4gICAgICAgIGl0ZW1zW2l0ZW1JbmRleF0uc3RhcnQgPSBhcGkuZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aGlzLmV2ZW50c1tldmVudEluZGV4XS5nZXRTdGFydCgpICogMTAwMCkpO1xuICAgICAgICBpdGVtc1tpdGVtSW5kZXhdLmVuZCA9IGFwaS5mb3JtYXREYXRlKG5ldyBEYXRlKHRoaXMuZXZlbnRzW2V2ZW50SW5kZXhdLmdldEVuZCgpICogMTAwMCkpO1xuICAgICAgICBpdGVtc1tpdGVtSW5kZXhdLnBhcmFtcyA9IHRoaXMuZXZlbnRzW2V2ZW50SW5kZXhdLmdldFBhcmFtcygpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbXM6aXRlbXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkTmV4dERhdGEoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYExvYWQgTkVYVCBkYXRhIGJlZm9yZTogaW5kZXggPSAke3RoaXMuaW5kZXh9IDsgZXZlbnRzID0gJHt0aGlzLmV2ZW50c31gKTtcblxuICAgICAgICBsZXQgYXBpID0gbmV3IEFwaSgpO1xuICAgICAgICBhcGkubG9hZEV2ZW50c0JhY2t3YXJkKG5ldyBEYXRlKCh0aGlzLmV2ZW50c1t0aGlzLmV2ZW50cy5sZW5ndGggLSAxXS5nZXRTdGFydCgpIC0gMSkgKiAxMDAwKSwgRVZFTlRTX1RPX0xPQUQsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNwLmdldEV2ZW50c0xpc3QoKS5mb3JFYWNoKCAodixpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codi5nZXROYW1lKCkgKyBcIiBcIiArIHYuZ2V0U3RhcnQoKSArIFwiIFwiICsgdi5nZXRFbmQoKSArIFwiIFwiICsgdi5nZXRQYXJhbXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudHMubGVuZ3RoID4gTUFYX0VWRU5UUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkIE5FWFQgZGF0YSBhZnRlcjogaW5kZXggPSAke3RoaXMuaW5kZXh9IDsgZXZlbnRzID0gJHt0aGlzLmV2ZW50c31gKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkUHJldkRhdGEoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYExvYWQgUFJFViBkYXRhIGJlZm9yZTogaW5kZXggPSAke3RoaXMuaW5kZXh9IDsgZXZlbnRzID0gJHt0aGlzLmV2ZW50c31gKTtcbiAgICAgICAgbGV0IGFwaSA9IG5ldyBBcGkoKTtcblxuICAgICAgICBhcGkubG9hZEV2ZW50c0ZvcndhcmQobmV3IERhdGUoKHRoaXMuZXZlbnRzWzBdLmdldFN0YXJ0KCkgKyAxKSAqIDEwMDApLCBFVkVOVFNfVE9fTE9BRCwgKGVyciwgcmVzcCkgPT4ge1xuXG4gICAgICAgICAgICByZXNwLmdldEV2ZW50c0xpc3QoKS5mb3JFYWNoKCAodixpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codi5nZXROYW1lKCkgKyBcIiBcIiArIHYuZ2V0U3RhcnQoKSArIFwiIFwiICsgdi5nZXRFbmQoKSArIFwiIFwiICsgdi5nZXRQYXJhbXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMudW5zaGlmdCh2KVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudHMubGVuZ3RoID4gTUFYX0VWRU5UUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkIFBSRVYgZGF0YSBhZnRlcjogaW5kZXggPSAke3RoaXMuaW5kZXh9IDsgZXZlbnRzID0gJHt0aGlzLmV2ZW50c31gKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50c1RhYmxlIGRpZCBtb3VudCFcIik7XG4gICAgICAgIGxldCBhcGkgPSBuZXcgQXBpKCk7XG4gICAgICAgIGFwaS5sb2FkRXZlbnRzQmFja3dhcmQobmV3IERhdGUoKSwgRVZFTlRTX1RPX0xPQUQsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50cyBMb2FkZWRcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGF2ZU1vcmU6IFwiICsgcmVzcC5nZXRIYXZlbW9yZSgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3REYXRlOiBcIiArIHJlc3AuZ2V0Rmlyc3RkYXRlKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsYXN0RGF0ZTogXCIgKyByZXNwLmdldExhc3RkYXRlKCkpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gW107XG4gICAgICAgICAgICBsZXQgYXBpID0gbmV3IEFwaSgpO1xuXG4gICAgICAgICAgICByZXNwLmdldEV2ZW50c0xpc3QoKS5mb3JFYWNoKCAodixpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codi5nZXROYW1lKCkgKyBcIiBcIiArIHYuZ2V0U3RhcnQoKSArIFwiIFwiICsgdi5nZXRFbmQoKSArIFwiIFwiICsgdi5nZXRQYXJhbXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBJdGVtKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5tYXBJdGVtKDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5tYXBJdGVtKDIsIDIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgXCIuL0luZm9QYW5lbC5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuXG5jb25zdCBHT09EPScuL2dvb2Quc3ZnJ1xuY29uc3QgQkFEPScuL2JhZC5zdmcnXG5jb25zdCBVTktOT1dOPScuL3Vua25vd24uc3ZnJ1xuXG5jbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgYXV0b0JpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWFnZTogVU5LTk9XTixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJpbmZvcGFuZWwtY2FyZFwifT5cbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbmZvcGFuZWwtbWVkaWFcIn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtcImluZm9wYW5lbC1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20gYWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2FwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiIGFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT0gXCIgXCIpICB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltYWdlOiBVTktOT1dOXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudmFsdWUgPiBwcm9wcy5tYXggfHwgcHJvcHMudmFsdWUgPCBwcm9wcy5taW4pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IEJBRFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogR09PRFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvUGFuZWw7XG4iLCJpbXBvcnQgXCIuL0luZm9QYW5lbC5jc3NcIlxuaW1wb3J0IFwiLi9PcGVyYXRpdmVEYXRhLmNzc1wiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IEluZm9QYW5lbCBmcm9tICcuL0luZm9QYW5lbCc7XG5pbXBvcnQgQXBpIGZyb20gJy4vQXBpJ1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5cbmNvbnN0IE1JTl9QSEFaRV9WT0xUQUdFID0gMjAwO1xuY29uc3QgTUFYX1BIQVpFX1ZPTFRBR0UgPSAyNTA7XG5jb25zdCBNSU5fQkVUV0VFTl9QSEFaRV9WT0xUQUdFID0gMzYwO1xuY29uc3QgTUFYX0JFVFdFRU5fUEhBWkVfVk9MVEFHRSA9IDQxMDtcbmNvbnN0IEdPT0Q9Jy4vZ29vZC5zdmcnXG5jb25zdCBCQUQ9Jy4vYmFkLnN2ZydcbmNvbnN0IFVOS05PV049Jy4vdW5rbm93bi5zdmcnXG5cbmNsYXNzIE9wZXJhdGl2ZURhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgYXV0b0JpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWFnZTogVU5LTk9XTixcbiAgICAgICAgICAgIGxhc3REYXRlOiBcIjEyLzEyLzIwMjAgMTQ6MDA6MDBcIixcbiAgICAgICAgICAgIGFsYXJtczogXCLQndCV0KJcIixcbiAgICAgICAgICAgIG9ubGluZTogXCLQntCd0JvQkNCZ0J1cIixcbiAgICAgICAgICAgIHZhbHVlczogW1wiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCJdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3BlcmF0aXZlLWRhdGFcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3BlcmF0aXZlLWRhdGEtcm93LTBcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJpbmZvcGFuZWwtY2FyZFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5mb3BhbmVsLW1lZGlhLWxhcmdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17XCJpbmZvcGFuZWwtY29udGVudFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGB0YLQvtGP0L3QuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9ubGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLQsNGA0LjQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGFybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0YHQu9C10LTQvdC40LUg0LTQsNC90L3Ri9C1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxhc3REYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvcGVyYXRpdmUtZGF0YS1yb3ctMVwifT5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9QYW5lbCBjYXB0aW9uPXtcItCd0LDQv9GA0Y/QttC10L3QuNC1INC90LAg0YTQsNC30LUg0JBcIn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzWzBdfSBtaW49e01JTl9QSEFaRV9WT0xUQUdFfSBtYXg9e01BWF9QSEFaRV9WT0xUQUdFfS8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvUGFuZWwgY2FwdGlvbj17XCLQndCw0L/RgNGP0LbQtdC90LjQtSDQvdCwINGE0LDQt9C1IEJcIn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzWzFdfSBtaW49e01JTl9QSEFaRV9WT0xUQUdFfSBtYXg9e01BWF9QSEFaRV9WT0xUQUdFfS8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvUGFuZWwgY2FwdGlvbj17XCLQndCw0L/RgNGP0LbQtdC90LjQtSDQvdCwINGE0LDQt9C1IENcIn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzWzJdfSBtaW49e01JTl9QSEFaRV9WT0xUQUdFfSBtYXg9e01BWF9QSEFaRV9WT0xUQUdFfS8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvUGFuZWwgY2FwdGlvbj17XCLQnNC10LbRhNCw0LfQvdC+0LUg0L3QsNC/0YDRj9C20LXQvdC40LUgQUJcIn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzWzNdfSBtaW49e01JTl9CRVRXRUVOX1BIQVpFX1ZPTFRBR0V9IG1heD17TUFYX0JFVFdFRU5fUEhBWkVfVk9MVEFHRX0vPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb1BhbmVsIGNhcHRpb249e1wi0JzQtdC20YTQsNC30L3QvtC1INC90LDQv9GA0Y/QttC10L3QuNC1IEFDXCJ9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlc1s0XX0gbWluPXtNSU5fQkVUV0VFTl9QSEFaRV9WT0xUQUdFfSBtYXg9e01BWF9CRVRXRUVOX1BIQVpFX1ZPTFRBR0V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9QYW5lbCBjYXB0aW9uPXtcItCc0LXQttGE0LDQt9C90L7QtSDQvdCw0L/RgNGP0LbQtdC90LjQtSBCQ1wifSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZXNbNV19IG1pbj17TUlOX0JFVFdFRU5fUEhBWkVfVk9MVEFHRX0gbWF4PXtNQVhfQkVUV0VFTl9QSEFaRV9WT0xUQUdFfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXN0RGF0YVRhYmxlIG1vdW50ZWQhXCIpO1xuICAgICAgICB0aGlzLmxvYWREYXRhKClcbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgbGV0IGFwaSA9IG5ldyBBcGkoKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGFwaS5yZWNlaXZlTGFzdERhdGEoKTtcblxuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5nZXREYXRhdGltZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UuZ2V0TGFzdGRhdGFMaXN0KCkuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHYuZ2V0UGFyYW1uYW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdi5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgaW1nID0gVU5LTk9XTjtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5nZXRPbmxpbmUoKSkge1xuICAgICAgICAgICAgICAgIGltZyA9IEdPT0RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5nZXRBbGFybSgpKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gQkFEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgbGFzdERhdGU6IGFwaS5mb3JtYXREYXRlKG5ldyBEYXRlKHJlc3BvbnNlLmdldERhdGF0aW1lKCkgKiAxMDAwKSksXG4gICAgICAgICAgICAgICAgb25saW5lOiByZXNwb25zZS5nZXRPbmxpbmUoKSA/IFwi0J7QndCb0JDQmdCdXCI6XCLQntCk0KTQm9CQ0JnQnVwiLFxuICAgICAgICAgICAgICAgIGFsYXJtczogcmVzcG9uc2UuZ2V0QWxhcm0oKSA/IFwi0JXQodCi0KxcIjpcItCd0JXQolwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiBpbWcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdzdGF0dXMnLCBzdGF0dXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLmNvZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLmRldGFpbHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLm1ldGFkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGVuZCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0cmVhbSBlbmRcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9hZERhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnRMb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZXM6IFtcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiXSxcbiAgICAgICAgICAgIGxhc3REYXRlOiBcIi0tLy0tLy0tLS0gLS06LS06LS1cIixcbiAgICAgICAgICAgIG9ubGluZTogXCItLS0tLS0tLVwiLFxuICAgICAgICAgICAgYWxhcm1zOiBcIi0tLS0tLS0tXCIsXG4gICAgICAgICAgICBpbWFnZTogVU5LTk9XTixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpdmVEYXRhO1xuIiwiaW1wb3J0IFwiLi9Wb2x0YWdlQ2hhcnQuY3NzXCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi9BcGlcIlxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuXG5cbmNsYXNzIFZvbHRhZ2VDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidm9sdGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGVkOiBmdW5jdGlvbiAoY2hhcnRDb250ZXh0LCB7eGF4aXN9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY3JvbGxlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGF4aXMubWluICsgXCIgOiBcIiArIHhheGlzLm1heCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbWVkOiAoY2hhcnRDb250ZXh0LCB7IHhheGlzLCB5YXhpcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJab29tZWQhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YShuZXcgRGF0ZSh4YXhpcy5taW4pLCBuZXcgRGF0ZSh4YXhpcy5tYXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4YXhpcy5taW4gKyBcIiA6IFwiICsgeGF4aXMubWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbWluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21vdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAvL2RhdGV0aW1lVVRDOiBmYWxzZSAtLSDQvdC1INGA0LDQsdC+0YLQsNC10YJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5vRGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OlwiTG9hZGluZy4uLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2x0YWdlLWNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcInZvbHRhZ2UtY2hhcnQtY2FyZFwifT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17XCJ2b2x0YWdlLWNoYXJ0LWNhcmQtY29udGVudFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGxvYWREYXRhKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZXJpZXM6IFtdXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGFwaSA9IG5ldyBBcGkoKTtcbiAgICAgICAgYXBpLmxvYWRDaGFydERhdGEoc3RhcnQsIGVuZCwgNTAwLCAoZXJyLCByZXNwKSA9PntcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTGlzdCA9IFtdO1xuXG4gICAgICAgICAgICByZXNwLmdldFNlcmllc0xpc3QoKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBzLmdldFZhbHVlc0xpc3QoKS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogdi5nZXRYKCkgKyAzICogNjAgKiA2MCAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB2LmdldFkoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlcmllc0xpc3QucHVzaChzZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlcmllczogc2VyaWVzTGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb21wb25lbnQgZGlkIG1vdW50IVwiKTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YShuZXcgRGF0ZShEYXRlLm5vdygpIC0gMjQgKiA2MCAqIDYwICogMTAwMCksIG5ldyBEYXRlKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9sdGFnZUNoYXJ0O1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGdSUEMtV2ViIGdlbmVyYXRlZCBjbGllbnQgc3R1YiBmb3Igc2VydmljZVxuICogQGVuaGFuY2VhYmxlXG4gKiBAcHVibGljXG4gKi9cblxuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cblxuXG5jb25zdCBncnBjID0ge307XG5ncnBjLndlYiA9IHJlcXVpcmUoJ2dycGMtd2ViJyk7XG5cbmNvbnN0IHByb3RvID0ge307XG5wcm90by5zZXJ2aWNlID0gcmVxdWlyZSgnLi9lbmVyZ3lfcGIuanMnKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWVcbiAqIEBwYXJhbSB7P09iamVjdH0gY3JlZGVudGlhbHNcbiAqIEBwYXJhbSB7P09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAZmluYWxcbiAqL1xucHJvdG8uc2VydmljZS5FbmVyZ3lDbGllbnQgPVxuICAgIGZ1bmN0aW9uKGhvc3RuYW1lLCBjcmVkZW50aWFscywgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgb3B0aW9uc1snZm9ybWF0J10gPSAndGV4dCc7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlIEBjb25zdCB7IWdycGMud2ViLkdycGNXZWJDbGllbnRCYXNlfSBUaGUgY2xpZW50XG4gICAqL1xuICB0aGlzLmNsaWVudF8gPSBuZXcgZ3JwYy53ZWIuR3JwY1dlYkNsaWVudEJhc2Uob3B0aW9ucyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlIEBjb25zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWVcbiAgICovXG4gIHRoaXMuaG9zdG5hbWVfID0gaG9zdG5hbWU7XG5cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWVcbiAqIEBwYXJhbSB7P09iamVjdH0gY3JlZGVudGlhbHNcbiAqIEBwYXJhbSB7P09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAZmluYWxcbiAqL1xucHJvdG8uc2VydmljZS5FbmVyZ3lQcm9taXNlQ2xpZW50ID1cbiAgICBmdW5jdGlvbihob3N0bmFtZSwgY3JlZGVudGlhbHMsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIG9wdGlvbnNbJ2Zvcm1hdCddID0gJ3RleHQnO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSBAY29uc3QgeyFncnBjLndlYi5HcnBjV2ViQ2xpZW50QmFzZX0gVGhlIGNsaWVudFxuICAgKi9cbiAgdGhpcy5jbGllbnRfID0gbmV3IGdycGMud2ViLkdycGNXZWJDbGllbnRCYXNlKG9wdGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSBAY29uc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lXG4gICAqL1xuICB0aGlzLmhvc3RuYW1lXyA9IGhvc3RuYW1lO1xuXG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QsXG4gKiAgICFwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlPn1cbiAqL1xuY29uc3QgbWV0aG9kRGVzY3JpcHRvcl9FbmVyZ3lfUGluZyA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL3NlcnZpY2UuRW5lcmd5L1BpbmcnLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QsXG4gIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlcbik7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuQWJzdHJhY3RDbGllbnRCYXNlLk1ldGhvZEluZm88XG4gKiAgICFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QsXG4gKiAgICFwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlPn1cbiAqL1xuY29uc3QgbWV0aG9kSW5mb19FbmVyZ3lfUGluZyA9IG5ldyBncnBjLndlYi5BYnN0cmFjdENsaWVudEJhc2UuTWV0aG9kSW5mbyhcbiAgcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5zZXJpYWxpemVCaW5hcnkoKTtcbiAgfSxcbiAgcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD9ncnBjLndlYi5FcnJvciwgP3Byb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2U+fHVuZGVmaW5lZH1cbiAqICAgICBUaGUgWEhSIE5vZGUgUmVhZGFibGUgU3RyZWFtXG4gKi9cbnByb3RvLnNlcnZpY2UuRW5lcmd5Q2xpZW50LnByb3RvdHlwZS5waW5nID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2VydmljZS5FbmVyZ3kvUGluZycsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9QaW5nLFxuICAgICAgY2FsbGJhY2spO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshUHJvbWlzZTwhcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZT59XG4gKiAgICAgQSBuYXRpdmUgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5zZXJ2aWNlLkVuZXJneVByb21pc2VDbGllbnQucHJvdG90eXBlLnBpbmcgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8udW5hcnlDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2VydmljZS5FbmVyZ3kvUGluZycsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9QaW5nKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdCxcbiAqICAgIXByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2U+fVxuICovXG5jb25zdCBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9DaGFydERhdGEgPSBuZXcgZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcihcbiAgJy9zZXJ2aWNlLkVuZXJneS9DaGFydERhdGEnLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QsXG4gIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlcbik7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuQWJzdHJhY3RDbGllbnRCYXNlLk1ldGhvZEluZm88XG4gKiAgICFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QsXG4gKiAgICFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlPn1cbiAqL1xuY29uc3QgbWV0aG9kSW5mb19FbmVyZ3lfQ2hhcnREYXRhID0gbmV3IGdycGMud2ViLkFic3RyYWN0Q2xpZW50QmFzZS5NZXRob2RJbmZvKFxuICBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLFxuICAvKipcbiAgICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLkVycm9yLCA/cHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZSl9XG4gKiAgICAgY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSlcbiAqIEByZXR1cm4geyFncnBjLndlYi5DbGllbnRSZWFkYWJsZVN0cmVhbTwhcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZT58dW5kZWZpbmVkfVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8uc2VydmljZS5FbmVyZ3lDbGllbnQucHJvdG90eXBlLmNoYXJ0RGF0YSA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8ucnBjQ2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL3NlcnZpY2UuRW5lcmd5L0NoYXJ0RGF0YScsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9DaGFydERhdGEsXG4gICAgICBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlPn1cbiAqICAgICBBIG5hdGl2ZSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3BvbnNlXG4gKi9cbnByb3RvLnNlcnZpY2UuRW5lcmd5UHJvbWlzZUNsaWVudC5wcm90b3R5cGUuY2hhcnREYXRhID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL3NlcnZpY2UuRW5lcmd5L0NoYXJ0RGF0YScsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9DaGFydERhdGEpO1xufTtcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUgeyFncnBjLndlYi5NZXRob2REZXNjcmlwdG9yPFxuICogICAhcHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0LFxuICogICAhcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZT59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfRW5lcmd5X0V2ZW50cyA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL3NlcnZpY2UuRW5lcmd5L0V2ZW50cycsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdCxcbiAgcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5zZXJpYWxpemVCaW5hcnkoKTtcbiAgfSxcbiAgcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUgeyFncnBjLndlYi5BYnN0cmFjdENsaWVudEJhc2UuTWV0aG9kSW5mbzxcbiAqICAgIXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdCxcbiAqICAgIXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2U+fVxuICovXG5jb25zdCBtZXRob2RJbmZvX0VuZXJneV9FdmVudHMgPSBuZXcgZ3JwYy53ZWIuQWJzdHJhY3RDbGllbnRCYXNlLk1ldGhvZEluZm8oXG4gIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlcbik7XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbig/Z3JwYy53ZWIuRXJyb3IsID9wcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlKX1cbiAqICAgICBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5zZXJ2aWNlLkVuZXJneUNsaWVudC5wcm90b3R5cGUuZXZlbnRzID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2VydmljZS5FbmVyZ3kvRXZlbnRzJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfRW5lcmd5X0V2ZW50cyxcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHJldHVybiB7IVByb21pc2U8IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2U+fVxuICogICAgIEEgbmF0aXZlIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2VcbiAqL1xucHJvdG8uc2VydmljZS5FbmVyZ3lQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5ldmVudHMgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8udW5hcnlDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2VydmljZS5FbmVyZ3kvRXZlbnRzJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfRW5lcmd5X0V2ZW50cyk7XG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QsXG4gKiAgICFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2U+fVxuICovXG5jb25zdCBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9MYXN0RGF0YSA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL3NlcnZpY2UuRW5lcmd5L0xhc3REYXRhJyxcbiAgZ3JwYy53ZWIuTWV0aG9kVHlwZS5TRVJWRVJfU1RSRUFNSU5HLFxuICBwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QsXG4gIHByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5zZXJpYWxpemVCaW5hcnkoKTtcbiAgfSxcbiAgcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLkFic3RyYWN0Q2xpZW50QmFzZS5NZXRob2RJbmZvPFxuICogICAhcHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0LFxuICogICAhcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlPn1cbiAqL1xuY29uc3QgbWV0aG9kSW5mb19FbmVyZ3lfTGFzdERhdGEgPSBuZXcgZ3JwYy53ZWIuQWJzdHJhY3RDbGllbnRCYXNlLk1ldGhvZEluZm8oXG4gIHByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5zZXJpYWxpemVCaW5hcnkoKTtcbiAgfSxcbiAgcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0fSByZXF1ZXN0IFRoZSByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZT59XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5zZXJ2aWNlLkVuZXJneUNsaWVudC5wcm90b3R5cGUubGFzdERhdGEgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8uc2VydmVyU3RyZWFtaW5nKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2VydmljZS5FbmVyZ3kvTGFzdERhdGEnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9FbmVyZ3lfTGFzdERhdGEpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gcmVxdWVzdCBUaGUgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2U+fVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8uc2VydmljZS5FbmVyZ3lQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5sYXN0RGF0YSA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5zZXJ2ZXJTdHJlYW1pbmcodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9zZXJ2aWNlLkVuZXJneS9MYXN0RGF0YScsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX0VuZXJneV9MYXN0RGF0YSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdG8uc2VydmljZTtcblxuIiwiLy8gc291cmNlOiBlbmVyZ3kucHJvdG9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5zZXJ2aWNlLkV2ZW50JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuTGFzdERhdGEnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZScsIG51bGwsIGdsb2JhbCk7XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UuZGlzcGxheU5hbWUgPSAncHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZSc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YS5yZXBlYXRlZEZpZWxkc18sIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YS5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YSc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcyc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2VydmljZS5FdmVudCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuRXZlbnQuZGlzcGxheU5hbWUgPSAncHJvdG8uc2VydmljZS5FdmVudCc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5kaXNwbGF5TmFtZSA9ICdwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGEgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2VydmljZS5MYXN0RGF0YSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNlcnZpY2UuTGFzdERhdGEuZGlzcGxheU5hbWUgPSAncHJvdG8uc2VydmljZS5MYXN0RGF0YSc7XG59XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgbWVzc2FnZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0fVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3Q7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH1cbiAqL1xucHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldE1lc3NhZ2UodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldE1lc3NhZ2UoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBtZXNzYWdlID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uc2VydmljZS5TdHJpbmdSZXF1ZXN0LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1JlcXVlc3QucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBtZXNzYWdlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlfVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZTtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlfVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldE1lc3NhZ2UodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5TdHJpbmdSZXNwb25zZX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRNZXNzYWdlKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgbWVzc2FnZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2UucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuU3RyaW5nUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLlN0cmluZ1Jlc3BvbnNlLnByb3RvdHlwZS5zZXRNZXNzYWdlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBzdGFydDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKSxcbiAgICBlbmQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgMCksXG4gICAgc3RlcDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdH1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0U3RhcnQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldEVuZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0U3RlcCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhcnQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRFbmQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRTdGVwKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBzdGFydCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC5wcm90b3R5cGUuZ2V0U3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVxdWVzdC5wcm90b3R5cGUuc2V0U3RhcnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBlbmQgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QucHJvdG90eXBlLmdldEVuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAyLCAwKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LnByb3RvdHlwZS5zZXRFbmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBzdGVwID0gMztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXF1ZXN0LnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlcXVlc3QucHJvdG90eXBlLnNldFN0ZXAgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnJlcGVhdGVkRmllbGRzXyA9IFsxXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgc2VyaWVzTGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0U2VyaWVzTGlzdCgpLFxuICAgIHByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnRvT2JqZWN0LCBpbmNsdWRlSW5zdGFuY2UpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlfVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZTtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlfVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGE7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5hZGRTZXJpZXModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRTZXJpZXNMaXN0KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIHByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIHJlcGVhdGVkIENoYXJ0U2VyaWVzRGF0YSBzZXJpZXMgPSAxO1xuICogQHJldHVybiB7IUFycmF5PCFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YT59XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnREYXRhUmVzcG9uc2UucHJvdG90eXBlLmdldFNlcmllc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhPn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YSwgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YT59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4qL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZS5wcm90b3R5cGUuc2V0U2VyaWVzTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhPX0gb3B0X3ZhbHVlXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9pbmRleFxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhfVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlLnByb3RvdHlwZS5hZGRTZXJpZXMgPSBmdW5jdGlvbihvcHRfdmFsdWUsIG9wdF9pbmRleCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmFkZFRvUmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMSwgb3B0X3ZhbHVlLCBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YSwgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0RGF0YVJlc3BvbnNlfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydERhdGFSZXNwb25zZS5wcm90b3R5cGUuY2xlYXJTZXJpZXNMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFNlcmllc0xpc3QoW10pO1xufTtcblxuXG5cbi8qKlxuICogTGlzdCBvZiByZXBlYXRlZCBmaWVsZHMgd2l0aGluIHRoaXMgbWVzc2FnZSB0eXBlLlxuICogQHByaXZhdGUgeyFBcnJheTxudW1iZXI+fVxuICogQGNvbnN0XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnJlcGVhdGVkRmllbGRzXyA9IFsyXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIG5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG4gICAgdmFsdWVzTGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0VmFsdWVzTGlzdCgpLFxuICAgIHByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLnRvT2JqZWN0LCBpbmNsdWRlSW5zdGFuY2UpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YX1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YTtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhfVxuICovXG5wcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXROYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcztcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLmFkZFZhbHVlcyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXROYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0VmFsdWVzTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgMixcbiAgICAgIGYsXG4gICAgICBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgbmFtZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgU2VyaWVzVmFsdWVzIHZhbHVlcyA9IDI7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzPn1cbiAqL1xucHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGEucHJvdG90eXBlLmdldFZhbHVlc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzPn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcywgMikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcz59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5DaGFydFNlcmllc0RhdGF9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5zZXRWYWx1ZXNMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXM9fSBvcHRfdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2luZGV4XG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXN9XG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5hZGRWYWx1ZXMgPSBmdW5jdGlvbihvcHRfdmFsdWUsIG9wdF9pbmRleCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmFkZFRvUmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMiwgb3B0X3ZhbHVlLCBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcywgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkNoYXJ0U2VyaWVzRGF0YX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuQ2hhcnRTZXJpZXNEYXRhLnByb3RvdHlwZS5jbGVhclZhbHVlc0xpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzTGlzdChbXSk7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlc30gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHg6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgMCksXG4gICAgeToganNwYi5NZXNzYWdlLmdldEZsb2F0aW5nUG9pbnRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgMC4wKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXN9XG4gKi9cbnByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXM7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlc30gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlc31cbiAqL1xucHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRYKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWREb3VibGUoKSk7XG4gICAgICBtc2cuc2V0WSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRYKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0WSgpO1xuICBpZiAoZiAhPT0gMC4wKSB7XG4gICAgd3JpdGVyLndyaXRlRG91YmxlKFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgaW50NjQgeCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlc30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuU2VyaWVzVmFsdWVzLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgZG91YmxlIHkgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmxvYXRpbmdQb2ludEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgMC4wKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5TZXJpZXNWYWx1ZXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLlNlcmllc1ZhbHVlcy5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zRmxvYXRGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBjb3VudDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKSxcbiAgICBmb3J3YXJkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIDApLFxuICAgIGJhY2t3YXJkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIDApXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdDtcbiAgcmV0dXJuIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0fVxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRDb3VudCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0Rm9yd2FyZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0QmFja3dhcmQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldENvdW50KCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0Rm9yd2FyZCgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEJhY2t3YXJkKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBjb3VudCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5wcm90b3R5cGUuc2V0Q291bnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBmb3J3YXJkID0gMjtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXF1ZXN0LnByb3RvdHlwZS5nZXRGb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1JlcXVlc3QucHJvdG90eXBlLnNldEZvcndhcmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBiYWNrd2FyZCA9IDM7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5wcm90b3R5cGUuZ2V0QmFja3dhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVxdWVzdC5wcm90b3R5cGUuc2V0QmFja3dhcmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLnJlcGVhdGVkRmllbGRzXyA9IFsxXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgZXZlbnRzTGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0RXZlbnRzTGlzdCgpLFxuICAgIHByb3RvLnNlcnZpY2UuRXZlbnQudG9PYmplY3QsIGluY2x1ZGVJbnN0YW5jZSksXG4gICAgbGFzdGRhdGU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMiwgMCksXG4gICAgZmlyc3RkYXRlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIDApLFxuICAgIGhhdmVtb3JlOiBqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQobXNnLCA0LCBmYWxzZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2V9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlO1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2V9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5zZXJ2aWNlLkV2ZW50O1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLnNlcnZpY2UuRXZlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5hZGRFdmVudHModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldExhc3RkYXRlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRGaXJzdGRhdGUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAocmVhZGVyLnJlYWRCb29sKCkpO1xuICAgICAgbXNnLnNldEhhdmVtb3JlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2V9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0RXZlbnRzTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgMSxcbiAgICAgIGYsXG4gICAgICBwcm90by5zZXJ2aWNlLkV2ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRMYXN0ZGF0ZSgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEZpcnN0ZGF0ZSgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEhhdmVtb3JlKCk7XG4gIGlmIChmKSB7XG4gICAgd3JpdGVyLndyaXRlQm9vbChcbiAgICAgIDQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIHJlcGVhdGVkIEV2ZW50IEV2ZW50cyA9IDE7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnNlcnZpY2UuRXZlbnQ+fVxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLnByb3RvdHlwZS5nZXRFdmVudHNMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7IUFycmF5PCFwcm90by5zZXJ2aWNlLkV2ZW50Pn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zZXJ2aWNlLkV2ZW50LCAxKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshQXJyYXk8IXByb3RvLnNlcnZpY2UuRXZlbnQ+fSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLnNldEV2ZW50c0xpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkV2ZW50PX0gb3B0X3ZhbHVlXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9pbmRleFxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnR9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLmFkZEV2ZW50cyA9IGZ1bmN0aW9uKG9wdF92YWx1ZSwgb3B0X2luZGV4KSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCBvcHRfdmFsdWUsIHByb3RvLnNlcnZpY2UuRXZlbnQsIG9wdF9pbmRleCk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBsaXN0IG1ha2luZyBpdCBlbXB0eSBidXQgbm9uLW51bGwuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLmNsZWFyRXZlbnRzTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zZXRFdmVudHNMaXN0KFtdKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBsYXN0RGF0ZSA9IDI7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLmdldExhc3RkYXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZS5wcm90b3R5cGUuc2V0TGFzdGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBmaXJzdERhdGUgPSAzO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLnByb3RvdHlwZS5nZXRGaXJzdGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50c1Jlc3BvbnNlLnByb3RvdHlwZS5zZXRGaXJzdGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBib29sIGhhdmVNb3JlID0gNDtcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLmdldEhhdmVtb3JlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge2Jvb2xlYW59ICovIChqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQodGhpcywgNCwgZmFsc2UpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudHNSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnRzUmVzcG9uc2UucHJvdG90eXBlLnNldEhhdmVtb3JlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCb29sZWFuRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5FdmVudC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnR9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHN0YXJ0OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIDApLFxuICAgIGVuZDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCAwKSxcbiAgICBuYW1lOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpLFxuICAgIHBhcmFtczoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA0LCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudH1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNlcnZpY2UuRXZlbnQ7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkV2ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnR9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudH1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldFN0YXJ0KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRFbmQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXROYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0UGFyYW1zKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uc2VydmljZS5FdmVudC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2VydmljZS5FdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuRXZlbnR9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhcnQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRFbmQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXROYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0UGFyYW1zKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICA0LFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBzdGFydCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQucHJvdG90eXBlLmdldFN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkV2ZW50fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2VydmljZS5FdmVudC5wcm90b3R5cGUuc2V0U3RhcnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBlbmQgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50LnByb3RvdHlwZS5nZXRFbmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnR9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50LnByb3RvdHlwZS5zZXRFbmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgbmFtZSA9IDM7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuRXZlbnR9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkV2ZW50LnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHBhcmFtcyA9IDQ7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQucHJvdG90eXBlLmdldFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA0LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5FdmVudH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNlcnZpY2UuRXZlbnQucHJvdG90eXBlLnNldFBhcmFtcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG5cbi8qKlxuICogTGlzdCBvZiByZXBlYXRlZCBmaWVsZHMgd2l0aGluIHRoaXMgbWVzc2FnZSB0eXBlLlxuICogQHByaXZhdGUgeyFBcnJheTxudW1iZXI+fVxuICogQGNvbnN0XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5yZXBlYXRlZEZpZWxkc18gPSBbMV07XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgbGFzdGRhdGFMaXN0OiBqc3BiLk1lc3NhZ2UudG9PYmplY3RMaXN0KG1zZy5nZXRMYXN0ZGF0YUxpc3QoKSxcbiAgICBwcm90by5zZXJ2aWNlLkxhc3REYXRhLnRvT2JqZWN0LCBpbmNsdWRlSW5zdGFuY2UpLFxuICAgIGRhdGF0aW1lOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIDApLFxuICAgIG9ubGluZToganNwYi5NZXNzYWdlLmdldEJvb2xlYW5GaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgZmFsc2UpLFxuICAgIGFsYXJtOiBqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQobXNnLCA0LCBmYWxzZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZX1cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlO1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnNlcnZpY2UuTGFzdERhdGE7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uc2VydmljZS5MYXN0RGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLmFkZExhc3RkYXRhKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXREYXRhdGltZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChyZWFkZXIucmVhZEJvb2woKSk7XG4gICAgICBtc2cuc2V0T25saW5lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKHJlYWRlci5yZWFkQm9vbCgpKTtcbiAgICAgIG1zZy5zZXRBbGFybSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0TGFzdGRhdGFMaXN0KCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAxLFxuICAgICAgZixcbiAgICAgIHByb3RvLnNlcnZpY2UuTGFzdERhdGEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldERhdGF0aW1lKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0T25saW5lKCk7XG4gIGlmIChmKSB7XG4gICAgd3JpdGVyLndyaXRlQm9vbChcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRBbGFybSgpO1xuICBpZiAoZikge1xuICAgIHdyaXRlci53cml0ZUJvb2woXG4gICAgICA0LFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiByZXBlYXRlZCBMYXN0RGF0YSBsYXN0RGF0YSA9IDE7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnNlcnZpY2UuTGFzdERhdGE+fVxuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLmdldExhc3RkYXRhTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBleyFBcnJheTwhcHJvdG8uc2VydmljZS5MYXN0RGF0YT59ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0UmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8uc2VydmljZS5MYXN0RGF0YSwgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFwcm90by5zZXJ2aWNlLkxhc3REYXRhPn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5wcm90b3R5cGUuc2V0TGFzdGRhdGFMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2VydmljZS5MYXN0RGF0YT19IG9wdF92YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhfVxuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLmFkZExhc3RkYXRhID0gZnVuY3Rpb24ob3B0X3ZhbHVlLCBvcHRfaW5kZXgpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5hZGRUb1JlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIDEsIG9wdF92YWx1ZSwgcHJvdG8uc2VydmljZS5MYXN0RGF0YSwgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLmNsZWFyTGFzdGRhdGFMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldExhc3RkYXRhTGlzdChbXSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgaW50NjQgZGF0YVRpbWUgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLmdldERhdGF0aW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLnNldERhdGF0aW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYm9vbCBvbmxpbmUgPSAzO1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YVJlc3BvbnNlLnByb3RvdHlwZS5nZXRPbmxpbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRCb29sZWFuRmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCBmYWxzZSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLnNldE9ubGluZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQm9vbGVhbkZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBib29sIGFsYXJtID0gNDtcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGFSZXNwb25zZS5wcm90b3R5cGUuZ2V0QWxhcm0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRCb29sZWFuRmllbGRXaXRoRGVmYXVsdCh0aGlzLCA0LCBmYWxzZSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhUmVzcG9uc2UucHJvdG90eXBlLnNldEFsYXJtID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCb29sZWFuRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGEucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uc2VydmljZS5MYXN0RGF0YS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuTGFzdERhdGF9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGEudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHBhcmFtbmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbiAgICB2YWx1ZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5MYXN0RGF0YX1cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNlcnZpY2UuTGFzdERhdGE7XG4gIHJldHVybiBwcm90by5zZXJ2aWNlLkxhc3REYXRhLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNlcnZpY2UuTGFzdERhdGF9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2VydmljZS5MYXN0RGF0YX1cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRQYXJhbW5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGEucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnNlcnZpY2UuTGFzdERhdGEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNlcnZpY2UuTGFzdERhdGEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFBhcmFtbmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFZhbHVlKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgcGFyYW1OYW1lID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YS5wcm90b3R5cGUuZ2V0UGFyYW1uYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zZXJ2aWNlLkxhc3REYXRhfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YS5wcm90b3R5cGUuc2V0UGFyYW1uYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHZhbHVlID0gMjtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8uc2VydmljZS5MYXN0RGF0YS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNlcnZpY2UuTGFzdERhdGF9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zZXJ2aWNlLkxhc3REYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uc2VydmljZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIC8vIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz4sXG4gIC8vIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL3Nway5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5REFBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3BrLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ldmVudC1pdGVtLWNhcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV2ZW50LWl0ZW0tY2FyZC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL0V2ZW50SXRlbS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV2ZW50LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZXZlbnQtaXRlbS1jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ldmVudC1pdGVtLWNhcmQtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uZXZlbnRzLW5hdi1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuLkNhcm91c2VsSXRlbSB7XFxuICAgIG1hcmdpbjogMTJweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9FdmVudHNDYXJvdXNlbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ldmVudHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uZXZlbnRzLW5hdi1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuLkNhcm91c2VsSXRlbSB7XFxuICAgIG1hcmdpbjogMTJweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvcGFuZWwtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbWluLXdpZHRoOiAzNDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLk11aUNhcmRDb250ZW50LXJvb3Qge1xcbiAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcXG59XFxuLmluZm9wYW5lbC1tZWRpYSB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLmluZm9wYW5lbC1tZWRpYS1sYXJnZSB7XFxuICAgIHdpZHRoOiAxNzZweDtcXG4gICAgaGVpZ2h0OiAxNTdweDtcXG59XFxuXFxuLmluZm9wYW5lbC1jb250ZW50IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pbmZvcGFuZWwtY29udGVudC1yb3cge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmluZm9wYW5lbC1oZWFkZXIge1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL0luZm9QYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm9wYW5lbC1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtaW4td2lkdGg6IDM0MnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uTXVpQ2FyZENvbnRlbnQtcm9vdCB7XFxuICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xcbn1cXG4uaW5mb3BhbmVsLW1lZGlhIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbn1cXG5cXG4uaW5mb3BhbmVsLW1lZGlhLWxhcmdlIHtcXG4gICAgd2lkdGg6IDE3NnB4O1xcbiAgICBoZWlnaHQ6IDE1N3B4O1xcbn1cXG5cXG4uaW5mb3BhbmVsLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmluZm9wYW5lbC1jb250ZW50LXJvdyB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW5mb3BhbmVsLWhlYWRlciB7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIub3BlcmF0aXZlLWRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3BlcmF0aXZlLWRhdGEtcm93LTAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbn1cXG5cXG4ub3BlcmF0aXZlLWRhdGEtcm93LTEge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvT3BlcmF0aXZlRGF0YS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm9wZXJhdGl2ZS1kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm9wZXJhdGl2ZS1kYXRhLXJvdy0wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTJweDtcXG59XFxuXFxuLm9wZXJhdGl2ZS1kYXRhLXJvdy0xIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnZvbHRhZ2UtY2hhcnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4udm9sdGFnZS1jaGFydCB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi52b2x0YWdlLWNoYXJ0LWNhcmQge1xcbiAgICBtYXJnaW46IDEycHg7XFxufVxcbi52b2x0YWdlLWNoYXJ0LWNhcmQtY29udGVudCB7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvVm9sdGFnZUNoYXJ0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52b2x0YWdlLWNoYXJ0IHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnZvbHRhZ2UtY2hhcnQge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4udm9sdGFnZS1jaGFydC1jYXJkIHtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbn1cXG4udm9sdGFnZS1jaGFydC1jYXJkLWNvbnRlbnQge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVDs7Y0FFWTtFQUNaLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTthQUNXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FdmVudEl0ZW0uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRXZlbnRzQ2Fyb3VzZWwuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5mb1BhbmVsLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL09wZXJhdGl2ZURhdGEuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVm9sdGFnZUNoYXJ0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBmdW5jdGlvbigpIHt9O1xuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc2l0ZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzaXRlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IGZ1bmN0aW9uKCkge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gZnVuY3Rpb24oKSB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHN0YXJ0dXAgfHwgKGZ1bmN0aW9uKCkge30pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=