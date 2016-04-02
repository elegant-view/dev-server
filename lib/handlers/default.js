'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getHandler(options) {
    return function (req, res) {
        var localPath = util.convertToLocalPath(util.getUrlPath(req), options.rootPath);

        _fs2.default.access(localPath, _fs2.default.F_OK, function (err) {
            if (err) {
                _winston2.default.error(err);
                res.statusCode = 404;
                res.statusMessage = err.message;
                res.end();
            }

            _fs2.default.access(localPath, _fs2.default.R_OK, function (err) {
                if (err) {
                    _winston2.default.error(err);
                    res.statusCode = 401;
                    res.statusMessage = err.message;
                    res.end();
                }

                res.end(_fs2.default.readFileSync(localPath).toString());
            });
        });
    };
} /**
   * @file 默认静态文件处理器
   * @author yibuyisheng(yibuyisheng@163.com)
   */