/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
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
var _simpleAssign = require('simple-assign');
var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _TextField = require('../TextField/index');
var _TextField2 = _interopRequireDefault(_TextField);
var _DropDownMenu = require('../DropDownMenu/index');
var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);
var _deprecatedPropType = require('../utils/deprecatedPropType');
var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
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
function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 22 : 14
    },
    hideDropDownUnderline: {borderTop: 'none'},
    dropDownMenu: {display: 'block'}
  };
}
var SelectField = function(_Component) {
  _inherits(SelectField, _Component);
  function SelectField() {
    _classCallCheck(this, SelectField);
    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).apply(this, arguments));
  }
  _createClass(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var autoWidth = _props.autoWidth;
      var children = _props.children;
      var style = _props.style;
      var labelStyle = _props.labelStyle;
      var iconStyle = _props.iconStyle;
      var id = _props.id;
      var underlineDisabledStyle = _props.underlineDisabledStyle;
      var underlineFocusStyle = _props.underlineFocusStyle;
      var underlineStyle = _props.underlineStyle;
      var errorStyle = _props.errorStyle;
      var selectFieldRoot = _props.selectFieldRoot;
      var disabled = _props.disabled;
      var floatingLabelFixed = _props.floatingLabelFixed;
      var floatingLabelText = _props.floatingLabelText;
      var floatingLabelStyle = _props.floatingLabelStyle;
      var hintStyle = _props.hintStyle;
      var hintText = _props.hintText;
      var fullWidth = _props.fullWidth;
      var errorText = _props.errorText;
      var maxHeight = _props.maxHeight;
      var menuStyle = _props.menuStyle;
      var onFocus = _props.onFocus;
      var onBlur = _props.onBlur;
      var onChange = _props.onChange;
      var value = _props.value;
      var other = _objectWithoutProperties(_props, ['autoWidth', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineStyle', 'errorStyle', 'selectFieldRoot', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'value']);
      var styles = getStyles(this.props, this.context);
      return _react2.default.createElement(_TextField2.default, _extends({}, other, {
        style: style,
        disabled: disabled,
        floatingLabelFixed: floatingLabelFixed,
        floatingLabelText: floatingLabelText,
        floatingLabelStyle: floatingLabelStyle,
        hintStyle: hintStyle,
        hintText: !hintText && !floatingLabelText ? ' ' : hintText,
        fullWidth: fullWidth,
        errorText: errorText,
        underlineStyle: underlineStyle,
        errorStyle: errorStyle,
        onFocus: onFocus,
        onBlur: onBlur,
        id: id,
        underlineDisabledStyle: underlineDisabledStyle,
        underlineFocusStyle: underlineFocusStyle
      }), _react2.default.createElement(_DropDownMenu2.default, {
        disabled: disabled,
        style: (0, _simpleAssign2.default)(styles.dropDownMenu, selectFieldRoot, menuStyle),
        labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
        iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
        underlineStyle: styles.hideDropDownUnderline,
        autoWidth: autoWidth,
        value: value,
        onChange: onChange,
        maxHeight: maxHeight
      }, children));
    }
  }]);
  return SelectField;
}(_react.Component);
SelectField.propTypes = {
  autoWidth: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  errorStyle: _react.PropTypes.object,
  errorText: _react.PropTypes.node,
  floatingLabelFixed: _react.PropTypes.bool,
  floatingLabelStyle: _react.PropTypes.object,
  floatingLabelText: _react.PropTypes.node,
  fullWidth: _react.PropTypes.bool,
  hintStyle: _react.PropTypes.object,
  hintText: _react.PropTypes.node,
  iconStyle: _react.PropTypes.object,
  id: _react.PropTypes.string,
  labelStyle: _react.PropTypes.object,
  maxHeight: _react.PropTypes.number,
  menuStyle: _react.PropTypes.object,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  selectFieldRoot: (0, _deprecatedPropType2.default)(_react.PropTypes.object, 'Instead, use `menuStyle`. It will be removed with v0.16.0.'),
  style: _react.PropTypes.object,
  underlineDisabledStyle: _react.PropTypes.object,
  underlineFocusStyle: _react.PropTypes.object,
  underlineStyle: _react.PropTypes.object,
  value: _react.PropTypes.any
};
SelectField.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false
};
SelectField.contextTypes = {muiTheme: _react.PropTypes.object.isRequired};
exports.default = SelectField;
