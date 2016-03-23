/**
 * @file babel编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import * as babelCore from 'babel-core';
import * as util from '../util';
import fs from 'fs';
import winston from 'winston';

export default function getHandler(options) {
    let babel = options.babel || {};
    let include = babel.include || [];
    return function handler(req, res, next) {
        let urlPath = util.getUrlPath(req);
        if (!util.isMatch(include, urlPath)) {
            return next();
        }

        let localPath = util.convertToLocalPath(urlPath, options.rootPath);
        try {
            fs.accessSync(localPath, fs.R_OK);
        }
        catch (error) {
            winston.error(error);
            res.statusCode = 401;
            res.statusMessage = error.message;
            res.end();
            return;
        }

        try {
            let code = babelCore.transformFileSync(localPath, babel.compileOptions).code;
            res.end(code);
        }
        catch (error) {
            winston.error(error);

            res.statusCode = 500;
            res.statusMessage = error.message;
            res.end();
        }
    };
}
