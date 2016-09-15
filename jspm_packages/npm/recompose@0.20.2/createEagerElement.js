/* */ 
'use strict';
exports.__esModule = true;
var _createEagerElementUtil = require('./utils/createEagerElementUtil');
var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);
var _isReferentiallyTransparentFunctionComponent = require('./isReferentiallyTransparentFunctionComponent');
var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var createEagerElement = function createEagerElement(type, props, children) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  var hasKey = props && props.hasOwnProperty('key');
  return (0, _createEagerElementUtil2.default)(hasKey, isReferentiallyTransparent, type, props, children);
};
exports.default = createEagerElement;
