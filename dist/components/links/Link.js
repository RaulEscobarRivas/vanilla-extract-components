'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../modules/tslib/tslib.es6.js');
var React = require('react');
var classNames = require('classnames');
var base_css = require('./base.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function Link(props) {
    var className = props.className, otherProps = tslib_es6.__rest(props, ["className"]);
    var classes = classNames__default["default"](base_css.linkBase, className);
    return (React__default["default"].createElement("a", tslib_es6.__assign({ className: classes }, otherProps)));
}

exports.Link = Link;
