'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHandler() {
    var jasmineDir = _path2.default.join(process.cwd(), './node_modules/jasmine-core/lib/jasmine-core/');
    return function handler(context) {
        var urlPath = context.getUrlPath();
        var fileReading = void 0;
        if (urlPath === '/jasmine.js') {
            (function () {
                var contents = [];
                fileReading = util.readFile(_path2.default.join(jasmineDir, 'jasmine.js')).then(function (content) {
                    contents.push(content);
                    return util.readFile(_path2.default.join(jasmineDir, 'jasmine-html.js'));
                }).then(function (content) {
                    contents.push(content);
                    return util.readFile(_path2.default.join(jasmineDir, 'boot.js'));
                }).then(function (content) {
                    contents.push(content);
                    context.js(contents.join('\n\n'));
                    context.end();
                }).catch(function (error) {
                    return _winston2.default.error(error);
                });
            })();
        } else if (urlPath === '/jasmine.css') {
            fileReading = util.readFile(_path2.default.join(jasmineDir, 'jasmine.css')).then(function (content) {
                context.css(content);
                context.end();
            }).catch(function (error) {
                return _winston2.default.error(error);
            });
        }

        return fileReading;
    };
} /**
   * @file jasmine
   * @author yibuyisheng(yibuyisheng@163.com)
   */