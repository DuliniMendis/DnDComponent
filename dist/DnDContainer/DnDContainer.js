'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _DnDPanel = require('../DnDPanel');

var _DnDPanel2 = _interopRequireDefault(_DnDPanel);

require('./DnDContainer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DnDContainer = function (_React$Component) {
  _inherits(DnDContainer, _React$Component);

  function DnDContainer(props) {
    _classCallCheck(this, DnDContainer);

    var _this = _possibleConstructorReturn(this, (DnDContainer.__proto__ || Object.getPrototypeOf(DnDContainer)).call(this, props));

    _this.state = {
      data: props.data
    };

    return _this;
  }

  _createClass(DnDContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'dnd-container' },
        this.state.data.map(function (item, i) {
          return _react2.default.createElement(_DnDPanel2.default, {
            key: "panel" + i,
            position: i,
            code: item.code,
            label: item.label,
            items: item.items,
            data: _this2.props.data,
            dragAction: _this2.props.dragAction,
            width: _this2.props.width,
            numPanels: _this2.state.data.length });
        })
      );
    }
  }]);

  return DnDContainer;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(DnDContainer);