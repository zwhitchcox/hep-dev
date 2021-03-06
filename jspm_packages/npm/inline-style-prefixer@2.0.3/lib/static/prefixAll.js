/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = prefixAll;
var _prefixProps = require('./prefixProps');
var _prefixProps2 = _interopRequireDefault(_prefixProps);
var _capitalizeString = require('../utils/capitalizeString');
var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
var _calc = require('./plugins/calc');
var _calc2 = _interopRequireDefault(_calc);
var _cursor = require('./plugins/cursor');
var _cursor2 = _interopRequireDefault(_cursor);
var _flex = require('./plugins/flex');
var _flex2 = _interopRequireDefault(_flex);
var _sizing = require('./plugins/sizing');
var _sizing2 = _interopRequireDefault(_sizing);
var _gradient = require('./plugins/gradient');
var _gradient2 = _interopRequireDefault(_gradient);
var _transition = require('./plugins/transition');
var _transition2 = _interopRequireDefault(_transition);
var _flexboxIE = require('./plugins/flexboxIE');
var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
var _flexboxOld = require('./plugins/flexboxOld');
var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var plugins = [_calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];
function prefixAll(styles) {
  Object.keys(styles).forEach(function(property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function(prefix) {
        var properties = _prefixProps2.default[prefix];
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });
  Object.keys(styles).forEach(function(property) {
    [].concat(styles[property]).forEach(function(value, index) {
      plugins.forEach(function(plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });
  return styles;
}
function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  Object.keys(extend).forEach(function(property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function(value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
