/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _pure = require('recompose/pure');
var _pure2 = _interopRequireDefault(_pure);
var _SvgIcon = require('../../SvgIcon/index');
var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var DeviceBrightnessMedium = function DeviceBrightnessMedium(props) {
  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', {d: 'M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z'}));
};
DeviceBrightnessMedium = (0, _pure2.default)(DeviceBrightnessMedium);
DeviceBrightnessMedium.displayName = 'DeviceBrightnessMedium';
DeviceBrightnessMedium.muiName = 'SvgIcon';
exports.default = DeviceBrightnessMedium;
