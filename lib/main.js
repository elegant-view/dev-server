'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
        throw new TypeError('illegal `options`');
    }

    options.rootPath = options.rootPath || './';

    var app = (0, _connect2.default)();
    app.use(function (req, res, next) {
        var url = require('url').parse(req.url);
        _winston2.default.info(req.method, url.pathname);
        next();
    });
    app.use((0, _babel2.default)(options));
    app.use((0, _serveStatic2.default)(options.rootPath));

    var port = process.argv[2] || 3000;
    _http2.default.createServer(app).listen(port);
    _winston2.default.info('server is listening on port:', port);
}
//# sourceMappingURL=/Users/baidu/elegant-view/dev-server/main.js.map