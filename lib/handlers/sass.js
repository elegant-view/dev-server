'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

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

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @file sass编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

function getHandler(options) {
    var sassOption = options.sass || {};
    var include = sassOption.include || [];
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
                sassOption.compileOptions = _underscore2.default.extend({}, sassOption.compileOptions, packageConfig.ev.sass.compileOptions);
            }
            _nodeSass2.default.render(_underscore2.default.extend({ file: localPath }, sassOption.compileOptions), function (err, result) {
                if (err) {
                    _winston2.default.error(err);
                    context.end();
                    return reject(err);
                }

                context.css(result.css);
                resolve();
            });
        });
    };
}