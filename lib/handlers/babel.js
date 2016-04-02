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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getHandler(options) {
    var babel = options.babel || {};
    var include = babel.include || [];
    return function handler(context) {
        var localPath = context.getFilePath();
        if (!util.isMatch(include, localPath)) {
            return;
        }

        return new Promise(function (resolve, reject) {
            babelCore.transformFile(localPath, babel.compileOptions, function (err, result) {
                if (err) {
                    _winston2.default.error(err);
                    context.end(err.message, null, 500);
                    return reject(err);
                }

                context.js(result.code);
                resolve();
            });
        });
    };
} /**
   * @file babel编译器
   * @author yibuyisheng(yibuyisheng@163.com)
   */