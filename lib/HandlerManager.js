'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file handler管理器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author yibuyisheng(yibuyisheng@163.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _util = require('./util');

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HANDLERS = Symbol('handlers');

var HandlerManager = function () {
    function HandlerManager() {
        _classCallCheck(this, HandlerManager);
    }

    _createClass(HandlerManager, [{
        key: 'registerHandlers',
        value: function registerHandlers(handlers) {
            this[HANDLERS] = _underscore2.default.filter(handlers, function (handler) {
                return _underscore2.default.isFunction(handler);
            });
        }
    }, {
        key: 'handle',
        value: function handle(context) {
            return (0, _util.find)(this[HANDLERS], function (handler) {
                return Promise.resolve(handler(context)).then(function () {
                    if (context.hasContent()) {
                        context.end();
                    }
                }).catch(function (error) {
                    _winston2.default.error(error);
                    return true;
                });
            });
        }
    }]);

    return HandlerManager;
}();

exports.default = HandlerManager;