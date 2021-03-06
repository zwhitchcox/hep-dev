/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _simpleAssign = require('simple-assign');
var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _transitions = require('../styles/transitions');
var _transitions2 = _interopRequireDefault(_transitions);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor;
  var show = props.show;
  return {root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }};
}
var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles;
  var style = props.style;
  var text = props.text;
  var styles = getStyles(props);
  return _react2.default.createElement('div', {style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))}, text);
};
TextFieldHint.propTypes = {
  muiTheme: _react.PropTypes.object.isRequired,
  show: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  text: _react.PropTypes.node
};
TextFieldHint.defaultProps = {show: true};
exports.default = TextFieldHint;
