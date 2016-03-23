'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

var _babelCore = require('babel-core');

var babelCore = _interopRequireWildcard(_babelCore);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @file babel编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

function getHandler(options) {
    var babel = options.babel || {};
    var include = babel.include || [];
    return function handler(req, res, next) {
        var urlPath = util.getUrlPath(req);
        if (!util.isMatch(include, urlPath)) {
            return next();
        }

        var localPath = util.convertToLocalPath(urlPath, options.rootPath);
        try {
            _fs2.default.accessSync(localPath, _fs2.default.R_OK);
        } catch (error) {
            _winston2.default.error(error);
            res.statusCode = 401;
            res.statusMessage = error.message;
            res.end();
            return;
        }

        try {
            var code = babelCore.transformFileSync(localPath, babel.compileOptions).code;
            res.end(code);
        } catch (error) {
            _winston2.default.error(error);

            res.statusCode = 500;
            res.statusMessage = error.message;
            res.end();
        }
    };
}
//# sourceMappingURL=/Users/baidu/elegant-view/dev-server/handlers/babel.js.map