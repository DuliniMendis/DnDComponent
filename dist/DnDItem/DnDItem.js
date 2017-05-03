'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

require('./DnDItem.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var applicantSource = {
  beginDrag: function beginDrag(props) {
    return props;
  },
  endDrag: function endDrag(props, monitor, component) {
    // const item = monitor.getItem();
    // const dropResult = monitor.getDropResult();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    menuVisible: false
  };
}

var propTypes = {
  connectDragSource: _react.PropTypes.func.isRequired,
  isDragging: _react.PropTypes.bool.isRequired

};

var DnDItem = function (_React$Component) {
  _inherits(DnDItem, _React$Component);

  function DnDItem() {
    _classCallCheck(this, DnDItem);

    return _possibleConstructorReturn(this, (DnDItem.__proto__ || Object.getPrototypeOf(DnDItem)).apply(this, arguments));
  }

  _createClass(DnDItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging;


      return connectDragSource(_react2.default.createElement(
        'div',
        { style: { opacity: isDragging ? 0.5 : 1 } },
        _react2.default.createElement(
          'div',
          { className: 'dnd-item' },
          _react2.default.createElement(
            'div',
            null,
            this.props.label
          )
        )
      ));
    }
  }]);

  return DnDItem;
}(_react2.default.Component);

var ItemTypes = {
  DNDITEM: 'dndItem'
};

// Export the wrapped component:
exports.default = (0, _reactDnd.DragSource)(ItemTypes.DNDITEM, applicantSource, collect)(DnDItem);