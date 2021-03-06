/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _react = require('react');
  var _createEagerFactory = require('./createEagerFactory');
  var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
  var _createHelper = require('./createHelper');
  var _createHelper2 = _interopRequireDefault(_createHelper);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var mapValues = function mapValues(obj, func) {
    var result = [];
    var i = 0;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        i += 1;
        result[key] = func(obj[key], key, i);
      }
    }
    return result;
  };
  var withHandlers = function withHandlers(handlers) {
    return function(BaseComponent) {
      var _class,
          _temp2,
          _initialiseProps;
      var factory = (0, _createEagerFactory2.default)(BaseComponent);
      return _temp2 = _class = function(_Component) {
        _inherits(_class, _Component);
        function _class() {
          var _temp,
              _this,
              _ret;
          _classCallCheck(this, _class);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
        }
        _class.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
          this.cachedHandlers = {};
        };
        _class.prototype.render = function render() {
          return factory(_extends({}, this.props, this.handlers));
        };
        return _class;
      }(_react.Component), _initialiseProps = function _initialiseProps() {
        var _this2 = this;
        this.cachedHandlers = {};
        this.handlers = mapValues(handlers, function(createHandler, handlerName) {
          return function() {
            var cachedHandler = _this2.cachedHandlers[handlerName];
            if (cachedHandler) {
              return cachedHandler.apply(undefined, arguments);
            }
            var handler = createHandler(_this2.props);
            _this2.cachedHandlers[handlerName] = handler;
            if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
              console.error('withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
            }
            return handler.apply(undefined, arguments);
          };
        });
      }, _temp2;
    };
  };
  exports.default = (0, _createHelper2.default)(withHandlers, 'withHandlers');
})(require('process'));
