'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToLocalPath = convertToLocalPath;
exports.getUrlPath = getUrlPath;
exports.isMatch = isMatch;
exports.find = find;
exports.readFile = readFile;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 一些辅助性的方法
 * @author yibuyisheng(yibuyisheng@163.com)
 */

function convertToLocalPath(urlPath, rootPath) {
    return _path2.default.join(rootPath, urlPath);
}

function getUrlPath(request) {
    return _url2.default.parse(request.url).pathname;
}

function isMatch(include, urlPath) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = include[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var includePath = _step.value;

            if (_underscore2.default.isString(includePath) && includePath === urlPath) {
                return true;
            }

            if (_underscore2.default.isRegExp(includePath) && includePath.test(urlPath)) {
                return true;
            }

            if (_underscore2.default.isFunction(includePath) && includePath(urlPath)) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function find(arr, iteraterFn, context) {
    if (!_underscore2.default.isArray(arr)) {
        return null;
    }

    return next(arr, iteraterFn, context, 0);

    function next(arr, iteraterFn, context, index) {
        if (arr.length <= index) {
            return Promise.resolve(null);
        }
        return Promise.resolve(iteraterFn.call(context, arr[index], index, arr)).then(function (result) {
            return result ? result : next(arr, iteraterFn, context, index + 1);
        });
    }
}

function readFile() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
        _fs2.default.readFile.apply(_fs2.default, args.concat([function (error, content) {
            if (error) {
                return reject(error);
            }
            resolve(content);
        }]));
    });
}