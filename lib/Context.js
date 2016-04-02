'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file 贯穿整个请求过程的上下文对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author yibuyisheng(yibuyisheng@163.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var REQ = Symbol('req');
var RES = Symbol('res');
var FILE_CONTENT = Symbol('fileContent');
var FILE_PATH = Symbol('filePath');
var ORIGIN_FILE_CONTENT = Symbol('originFileContent');
var IS_RESPONSED = Symbol('isResponsed');

var FILE_TYPE = Symbol('fileType');
var JS_FILE = Symbol('jsFile');
var CSS_FILE = Symbol('cssFile');
var HTML_FILE = Symbol('htmlFile');

var Context = function () {
    function Context(req, res) {
        _classCallCheck(this, Context);

        this[REQ] = req;
        this[RES] = res;
        this[IS_RESPONSED] = false;
    }

    _createClass(Context, [{
        key: 'loadFile',
        value: function loadFile(localPath) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _fs2.default.access(localPath, _fs2.default.R_OK, function (error) {
                    if (error) {
                        return reject(error);
                    }

                    resolve();
                });
            }).then(function () {
                return new Promise(function (resolve, reject) {
                    _fs2.default.readFile(localPath, function (error, data) {
                        if (error) {
                            return reject(error);
                        }

                        _this[ORIGIN_FILE_CONTENT] = data;
                        _this[FILE_CONTENT] = data;
                        _this[FILE_PATH] = localPath;
                        resolve(data);
                    });
                }).catch(function (error) {
                    _winston2.default.error(error);
                });
            });
        }
    }, {
        key: 'getFilePath',
        value: function getFilePath() {
            return this[FILE_PATH];
        }
    }, {
        key: 'getOriginFileContent',
        value: function getOriginFileContent() {
            return this[ORIGIN_FILE_CONTENT];
        }
    }, {
        key: 'getFileContent',
        value: function getFileContent() {
            return this[FILE_CONTENT];
        }
    }, {
        key: 'js',
        value: function js(content) {
            this[FILE_TYPE] = JS_FILE;
            this[FILE_CONTENT] = content;
        }
    }, {
        key: 'css',
        value: function css(content) {
            this[FILE_TYPE] = CSS_FILE;
            this[FILE_CONTENT] = content;
        }
    }, {
        key: 'html',
        value: function html(content) {
            this[FILE_TYPE] = HTML_FILE;
            this[FILE_CONTENT] = content;
        }
    }, {
        key: 'hasContent',
        value: function hasContent() {
            return !!this[FILE_CONTENT];
        }
    }, {
        key: 'end',
        value: function end() {
            if (this[IS_RESPONSED]) {
                return;
            }

            this[RES].setHeader('Content-Type', {
                JS_FILE: 'text/javascript',
                CSS_FILE: 'text/css',
                HTML_FILE: 'text/html'
            }[this[FILE_TYPE]] || 'text/plain');
            this[RES].statusCode = 200;
            this[RES].write(this[FILE_CONTENT]);
            this[RES].end();
        }
    }, {
        key: 'isEnd',
        value: function isEnd() {
            return this[IS_RESPONSED];
        }
    }]);

    return Context;
}();

exports.default = Context;