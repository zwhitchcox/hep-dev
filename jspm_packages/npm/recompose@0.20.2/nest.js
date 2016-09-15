/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  var _createEagerFactory = require('./createEagerFactory');
  var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  var nest = function nest() {
    for (var _len = arguments.length,
        Components = Array(_len),
        _key = 0; _key < _len; _key++) {
      Components[_key] = arguments[_key];
    }
    var factories = Components.map(_createEagerFactory2.default);
    var Nest = function Nest(_ref) {
      var props = _objectWithoutProperties(_ref, []);
      var children = _ref.children;
      return factories.reduceRight(function(child, factory) {
        return factory(props, child);
      }, children);
    };
    if (process.env.NODE_ENV !== 'production') {
      var getDisplayName = require('./getDisplayName').default;
      var displayNames = Components.map(getDisplayName);
      Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
    }
    return Nest;
  };
  exports.default = nest;
})(require('process'));
