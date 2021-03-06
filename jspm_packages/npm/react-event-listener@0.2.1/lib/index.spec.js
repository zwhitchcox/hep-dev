/* */ 
'use strict';
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _enzyme = require('enzyme');
var _chai = require('chai');
var _sinon = require('sinon');
var _index = require('./index');
var _index2 = _interopRequireDefault(_index);
var _reactDom = require('react-dom');
var _reactAddonsTestUtils = require('react-addons-test-utils');
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
describe('EventListener', function() {
  describe('props: children', function() {
    it('should work without', function() {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      _chai.assert.strictEqual(wrapper.children().length, 0, 'Should work without children');
    });
    it('should render it', function() {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null, _react2.default.createElement('div', null, 'Foo')));
      _chai.assert.strictEqual(wrapper.children().length, 1, 'Should render his children.');
    });
  });
  var node = void 0;
  beforeEach(function() {
    node = document.createElement('div');
    document.body.appendChild(node);
  });
  afterEach(function() {
    (0, _reactDom.unmountComponentAtNode)(node);
    node.parentNode.removeChild(node);
  });
  describe('props: target', function() {
    it('should work with a string', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: 'document',
        onClick: handleClick
      }), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 1);
    });
    it('should work with a node', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 1);
    });
  });
  [{
    contextName: 'using Simulate.click(extraNode)',
    name: 'should not invoke event listener to document',
    invokeFn: function invokeFn(extraNode) {
      _reactAddonsTestUtils.Simulate.click(extraNode);
    },
    expectFn: function expectFn(handle) {
      _chai.assert.strictEqual(handle.callCount, 0);
    }
  }, {
    contextName: 'using extraNode.click()',
    name: 'should invoke event listener to document',
    invokeFn: function invokeFn(extraNode) {
      extraNode.click();
    },
    expectFn: function expectFn(handle) {
      _chai.assert.strictEqual(handle.callCount, 1);
    }
  }].forEach(function(_ref) {
    var contextName = _ref.contextName;
    var name = _ref.name;
    var invokeFn = _ref.invokeFn;
    var expectFn = _ref.expectFn;
    describe(contextName, function() {
      it(name, function() {
        var TextComponent = function(_Component) {
          _inherits(TextComponent, _Component);
          function TextComponent() {
            var _Object$getPrototypeO;
            var _temp,
                _this,
                _ret;
            _classCallCheck(this, TextComponent);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function() {
              _this.props.onClick();
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(TextComponent, [{
            key: 'render',
            value: function render() {
              return _react2.default.createElement(_index2.default, {
                target: document,
                onClick: this.handleClick
              });
            }
          }]);
          return TextComponent;
        }(_react.Component);
        TextComponent.propTypes = {onClick: _react2.default.PropTypes.func};
        var handleClick = (0, _sinon.spy)();
        (0, _reactDom.render)(_react2.default.createElement(TextComponent, {onClick: handleClick}), node);
        _chai.assert.strictEqual(handleClick.callCount, 0);
        var extraNode = document.createElement('button');
        document.body.appendChild(extraNode);
        invokeFn(extraNode);
        expectFn(handleClick);
        extraNode.parentNode.removeChild(extraNode);
      });
    });
  });
  describe('when props change', function() {
    it('removes old listeners', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {target: document}), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 0);
    });
    it('adds new listeners', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {target: document}), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 0);
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 1);
    });
    it('removes listeners from old node', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {onClick: handleClick}), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 0);
    });
    it('adds listeners to new node', function() {
      var handleClick = (0, _sinon.spy)();
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {onClick: handleClick}), node);
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      document.body.click();
      _chai.assert.strictEqual(handleClick.callCount, 1);
    });
    it("doesn't update if props are shallow equal", function() {
      var handleClick = (0, _sinon.spy)();
      var inst = (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      var _componentWillUpdate = inst.componentWillUpdate;
      var updated = false;
      inst.componentWillUpdate = function() {
        updated = true;
        _componentWillUpdate.apply(undefined, arguments);
      };
      (0, _reactDom.render)(_react2.default.createElement(_index2.default, {
        target: document,
        onClick: handleClick
      }), node);
      _chai.assert.strictEqual(updated, false);
    });
  });
  describe('props: capture', function() {
    it('attaches listeners with capture', function() {
      var button = void 0;
      var calls = [];
      (0, _reactDom.render)(_react2.default.createElement('div', null, _react2.default.createElement(_index2.default, {
        target: document,
        capture: true,
        onClick: function onClick() {
          return calls.push('outer');
        }
      }), _react2.default.createElement('button', {
        ref: function ref(c) {
          return button = c;
        },
        onClick: function onClick() {
          return calls.push('inner');
        }
      })), node);
      _chai.assert.strictEqual(calls.length, 0);
      button.click();
      _chai.assert.deepEqual(calls, ['outer', 'inner'], 'Should be called in the right order.');
    });
  });
});
