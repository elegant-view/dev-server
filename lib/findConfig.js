'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findConfig;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 找到配置。会到最近的package.json里面去找。
 * @author yibuyisheng(yibuyisheng@163.com)
 */

function findConfig(relativeDir) {
    var fullPath = _path2.default.join(relativeDir, 'package.json');
    var jsonData = void 0;
    try {
        jsonData = require(fullPath);
    } catch (error) {
        _winston2.default.info('try to load package.json under `' + fullPath + '` but failed!', error);
    }

    return relativeDir === _path2.default.sep || jsonData ? jsonData ? jsonData.ev : null : findConfig(relativeDir.slice(0, relativeDir.lastIndexOf(_path2.default.sep)));
}