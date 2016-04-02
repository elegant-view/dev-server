/**
 * @file 主入口文件
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import connect from 'connect';
import http from 'http';
import serveStatic from 'serve-static';
import babel from './handlers/babel';
import winston from 'winston';
import Context from './Context';
import * as util from './util';
import HandlerManager from './HandlerManager';

export function start(options={}) {
    if (typeof options !== 'object') {
        throw new TypeError('illegal `options`');
    }

    options.rootPath = options.rootPath || './';

    let handlerManager = new HandlerManager();
    handlerManager.registerHandlers([babel(options)]);
    let staticHandler = serveStatic(options.rootPath);

    let app = connect();
    app.use((req, res, next) => {
        let urlPath = util.getUrlPath(req);
        let localPath = util.convertToLocalPath(urlPath, options.rootPath);
        winston.info(req.method, urlPath, localPath);

        let context = new Context(req, res);
        context.loadFile(localPath)
            .then(() => {
                return handlerManager.handle(context);
            })
            .then(() => {
                if (!context.isEnd()) {
                    staticHandler(req, res, next);
                }
            })
            .catch(error => {
                winston.error(error);
                res.statusCode = 500;
                res.end('server error');
            });
    });

    let port = process.argv[2] || options.port || 3000;
    http.createServer(app).listen(port);
    winston.info('server is listening on port:', port);
}
