'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToLocalPath = convertToLocalPath;
exports.getUrlPath = getUrlPath;
exports.isMatch = isMatch;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=/Users/baidu/elegant-view/dev-server/util.js.map