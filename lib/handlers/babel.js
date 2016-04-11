'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

var _babelCore = require('babel-core');

var babelCore = _interopRequireWildcard(_babelCore);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _findConfig = require('../findConfig');

var _findConfig2 = _interopRequireDefault(_findConfig);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @file babel编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

function getHandler(options) {
    var babel = options.babel || {};
    var include = babel.include || [];
    return function handler(context) {
        var urlPath = context.getUrlPath();
        if (!util.isMatch(include, urlPath)) {
            return;
        }

        var localPath = context.getFilePath();
        localPath = _path2.default.resolve(localPath);

        return new Promise(function (resolve, reject) {
            var packageConfig = (0, _findConfig2.default)(localPath.slice(0, localPath.lastIndexOf(_path2.default.sep)));
            if (packageConfig && packageConfig.ev && packageConfig.ev.babel) {
                babel.compileOptions = _underscore2.default.extend({}, babel.compileOptions, packageConfig.ev.babel.compileOptions);
            }
            babelCore.transformFile(localPath, babel.compileOptions, function (err, result) {
                if (err) {
                    _winston2.default.error(err);
                    context.end();
                    return reject(err);
                }

                context.js(result.code);
                resolve();
            });
        });
    };
}