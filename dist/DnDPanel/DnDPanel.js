"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require("react-dnd");

var _DnDItem = require("../DnDItem");

var _DnDItem2 = _interopRequireDefault(_DnDItem);

require("./DnDPanel.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var panelTarget = {
  drop: function drop(props, monitor, component) {
    var dndItem = monitor.getItem();

    if (props) {

      var data = props.data;
      var sourceCode = dndItem.parentCode;
      var destCode = props.code;
      var itemIndex = data[sourceCode].items.findIndex(function (item) {
        return item.code === dndItem.code;
      });
      var item = data[sourceCode].items[itemIndex];
      data[sourceCode].items.splice(itemIndex, 1);
      data[destCode].items.push(item);

      props.dragAction(data);
    }
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

var DnDPanel = function (_React$Component) {
  _inherits(DnDPanel, _React$Component);

  function DnDPanel(props) {
    _classCallCheck(this, DnDPanel);

    var _this = _possibleConstructorReturn(this, (DnDPanel.__proto__ || Object.getPrototypeOf(DnDPanel)).call(this, props));

    _this.state = {
      code: props.code,
      label: props.label
    };
    return _this;
  }

  _createClass(DnDPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var width = Math.floor(this.props.width / this.props.numPanels);
      var margin = "1px solid";
      if (this.props.position === this.props.numPanels - 1) width = this.props.width - (this.props.numPanels - 1) * width;else margin = "none";

      var connectDropTarget = this.props.connectDropTarget;


      return connectDropTarget(_react2.default.createElement(
        "div",
        { className: "panel-container", style: { "width": width, "marginRight": margin } },
        _react2.default.createElement(
          "div",
          { className: "panel" },
          _react2.default.createElement(
            "div",
            { className: "panel-heading" },
            _react2.default.createElement(
              "div",
              { className: "header-text" },
              this.props.label
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "scrollbar", id: "scrollbar-style" },
            _react2.default.createElement(
              "div",
              { className: "panel-body" },
              this.props.items.map(function (item) {
                return _react2.default.createElement(_DnDItem2.default, { key: "dndi" + item.code,
                  parentCode: _this2.props.code,
                  code: item.code,
                  dragAction: _this2.props.dragAction,
                  label: item.label });
              })
            )
          )
        )
      ));
    }
  }]);

  return DnDPanel;
}(_react2.default.Component);

var ItemTypes = {
  DNDITEM: 'dndItem'
};

exports.default = (0, _reactDnd.DropTarget)(ItemTypes.DNDITEM, panelTarget, collect)(DnDPanel);