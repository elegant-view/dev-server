'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * @file 主入口文件
                                                                                                                                                                                                                                                   * @author yibuyisheng(yibuyisheng@163.com)
                                                                                                                                                                                                                                                   */

exports.start = start;

var _connect = require('connect');

var _connect2 = _interopRequireDefault(_connect);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _babel = require('./handlers/babel');

var _babel2 = _interopRequireDefault(_babel);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _HandlerManager = require('./HandlerManager');

var _HandlerManager2 = _interopRequireDefault(_HandlerManager);

var _jasmine = require('./handlers/jasmine');

var _jasmine2 = _interopRequireDefault(_jasmine);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
        throw new TypeError('illegal `options`');
    }

    options.rootPath = options.rootPath || './';

    var handlerManager = new _HandlerManager2.default();
    handlerManager.registerHandlers([(0, _babel2.default)(options)]);
    handlerManager.registerHandlers([(0, _jasmine2.default)(options)]);
    var staticHandler = (0, _serveStatic2.default)(options.rootPath);

    var app = (0, _connect2.default)();
    app.use(function (req, res, next) {
        var context = new _Context2.default(req, res);

        var urlPath = context.getUrlPath();
        var localPath = context.getLocalPath(options.rootPath);
        _winston2.default.info(req.method, urlPath, localPath);

        context.loadFile(localPath).catch(function (error) {
            return _winston2.default.info('load file failed. ' + error.message);
        }).then(function () {
            return handlerManager.handle(context);
        }).then(function () {
            if (!context.isEnd()) {
                staticHandler(req, res, next);
            }
        }).catch(function (error) {
            _winston2.default.error(error);
            res.statusCode = 500;
            res.end('server error');
        });
    });

    var port = process.argv[2] || options.port || 3000;
    _http2.default.createServer(app).listen(port);
    _winston2.default.info('server is listening on port:', port);
}