import connect from 'connect';
import http from 'http';
import serveStatic from 'serve-static';
import getBabelHandler from './handlers/babel';
import winston from 'winston';

export function start(options={}) {
    if (typeof options !== 'object') {
        throw new TypeError('illegal `options`');
    }

    options.rootPath = options.rootPath || './';

    let app = connect();
    app.use(function (req, res, next) {
        let url = require('url').parse(req.url);
        winston.info(req.method, url.pathname);
        next();
    });
    app.use(getBabelHandler(options));
    app.use(serveStatic(options.rootPath));

    let port = process.argv[2] || 3000;
    http.createServer(app).listen(port);
    winston.info('server is listening on port:', port);
}
