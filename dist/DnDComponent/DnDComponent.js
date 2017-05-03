'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DnDContainer = require('../DnDContainer');

var _DnDContainer2 = _interopRequireDefault(_DnDContainer);

require('./DnDComponent.css');

var _reactContainerDimensions = require('react-container-dimensions');

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DnDComponent = function (_React$Component) {
  _inherits(DnDComponent, _React$Component);

  function DnDComponent() {
    _classCallCheck(this, DnDComponent);

    return _possibleConstructorReturn(this, (DnDComponent.__proto__ || Object.getPrototypeOf(DnDComponent)).apply(this, arguments));
  }

  _createClass(DnDComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'full-width-height' },
        _react2.default.createElement(
          _reactContainerDimensions2.default,
          null,
          function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return _react2.default.createElement(_DnDContainer2.default, { data: _this2.props.data, dragAction: _this2.props.dragAction, width: width, height: height });
          }
        )
      );
    }
  }]);

  return DnDComponent;
}(_react2.default.Component);

exports.default = DnDComponent;