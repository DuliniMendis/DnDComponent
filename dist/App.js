'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputBox = require('./components/InputBox');

var _InputBox2 = _interopRequireDefault(_InputBox);

var _DnDComponent = require('./components/DnDComponent');

var _DnDComponent2 = _interopRequireDefault(_DnDComponent);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      data: [{
        code: 0,
        label: "Applied",
        items: [{
          code: 0,
          label: "Apple"
        }, {
          code: 1,
          label: "Orange"
        }]
      }, {
        code: 1,
        label: "Screened",
        items: []
      }, {
        code: 2,
        label: "Interviewed",
        items: []
      }, {
        code: 3,
        label: "Shortlisted",
        items: []
      }, {
        code: 4,
        label: "Offer",
        items: []
      }, {
        code: 5,
        label: "Placed",
        items: []
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'handleDrag',
    value: function handleDrag(newData) {
      this.setState({ data: newData });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_DnDComponent2.default, { id: 0, data: this.state.data, dragAction: this.handleDrag.bind(this) })
      );
    }
  }]);

  return App;
}(_react.Component);

// <div className="wrapper">


//       <InputBox id={0}/>
//       <InputBox id={1}/>
//       <InputBox id={2}/>
//       <InputBox id={3}/>
//       <InputBox id={4}/>
//       <InputBox id={5}/>
//       <InputBox id={6}/>
//       <InputBox id={7}/>
//       <InputBox id={8}/>
//       <InputBox id={9}/>
//       <InputBox id={10}/>
//       <InputBox id={11}/>
//       <InputBox id={12}/>

//       </div>


exports.default = App;