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
var DeviceBatteryCharging90 = function DeviceBatteryCharging90(props) {
  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', {
    fillOpacity: '.3',
    d: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z'
  }), _react2.default.createElement('path', {d: 'M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z'}));
};
DeviceBatteryCharging90 = (0, _pure2.default)(DeviceBatteryCharging90);
DeviceBatteryCharging90.displayName = 'DeviceBatteryCharging90';
DeviceBatteryCharging90.muiName = 'SvgIcon';
exports.default = DeviceBatteryCharging90;
