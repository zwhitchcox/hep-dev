/* */ 
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('fbjs/lib/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function on(target, eventName, callback, capture) {
  if (target.addEventListener) {
    target.addEventListener(eventName, callback, capture);
  } else if (target.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}
function off(target, eventName, callback, capture) {
  if (target.removeEventListener) {
    target.removeEventListener(eventName, callback, capture);
  } else if (target.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

function forEachListener(props, iteratee) {
  for (var name in props) {
    if (name.substring(0, 2) === 'on' && props[name] instanceof Function) {
      var _eventName = name.substring(2).toLowerCase();
      iteratee(_eventName, props[name]);
    }
  }
}

var EventListener = function (_Component) {
  _inherits(EventListener, _Component);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventListener).apply(this, arguments));
  }

  _createClass(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      var _this2 = this;

      var _props = this.props;
      var capture = _props.capture;
      var target = _props.target;


      if (target) {
        (function () {
          var element = target;

          if (typeof target === 'string') {
            element = window[target];
          }

          forEachListener(_this2.props, function (eventName, listener) {
            return on(element, eventName, listener, capture);
          });
        })();
      }
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      var _this3 = this;

      var _props2 = this.props;
      var capture = _props2.capture;
      var target = _props2.target;


      if (target) {
        (function () {
          var element = target;

          if (typeof target === 'string') {
            element = window[target];
          }

          forEachListener(_this3.props, function (eventName, listener) {
            return off(element, eventName, listener, capture);
          });
        })();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return EventListener;
}(_react.Component);

EventListener.propTypes = {
  /**
   * Whether to use capturing listeners.
   */
  capture: _react.PropTypes.bool.isRequired,
  /**
   * You can provide a children too.
   */
  children: _react.PropTypes.node,
  /**
   * The DOM target to listen to.
   */
  target: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.string])
};
EventListener.defaultProps = {
  capture: false
};
exports.default = EventListener;