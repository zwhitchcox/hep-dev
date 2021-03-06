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
var CommunicationImportExport = function CommunicationImportExport(props) {
  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', {d: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z'}));
};
CommunicationImportExport = (0, _pure2.default)(CommunicationImportExport);
CommunicationImportExport.displayName = 'CommunicationImportExport';
CommunicationImportExport.muiName = 'SvgIcon';
exports.default = CommunicationImportExport;
