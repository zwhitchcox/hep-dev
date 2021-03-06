/* */ 
'use strict';
exports.__esModule = true;
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _createHelper = require('./createHelper');
var _createHelper2 = _interopRequireDefault(_createHelper);
var _createEagerFactory = require('./createEagerFactory');
var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
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
var branch = function branch(test, left, right) {
  return function(BaseComponent) {
    return function(_React$Component) {
      _inherits(_class2, _React$Component);
      function _class2(props, context) {
        _classCallCheck(this, _class2);
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
        _this.LeftComponent = null;
        _this.RightComponent = null;
        _this.computeChildComponent(_this.props);
        return _this;
      }
      _class2.prototype.computeChildComponent = function computeChildComponent(props) {
        if (test(props)) {
          this.leftFactory = this.leftFactory || (0, _createEagerFactory2.default)(left(BaseComponent));
          this.factory = this.leftFactory;
        } else {
          this.rightFactory = this.rightFactory || (0, _createEagerFactory2.default)(right(BaseComponent));
          this.factory = this.rightFactory;
        }
      };
      _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.computeChildComponent(nextProps);
      };
      _class2.prototype.render = function render() {
        return this.factory(this.props);
      };
      return _class2;
    }(_react2.default.Component);
  };
};
exports.default = (0, _createHelper2.default)(branch, 'branch');
