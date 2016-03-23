/**
 * @file 默认静态文件处理器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import * as util from '../util';
import fs from 'fs';
import winston from 'winston';

export default function getHandler(options) {
    return function (req, res) {
        let localPath = util.convertToLocalPath(util.getUrlPath(req), options.rootPath);

        fs.access(localPath, fs.F_OK, err => {
            if (err) {
                winston.error(err);
                res.statusCode = 404;
                res.statusMessage = err.message;
                res.end();
            }

            fs.access(localPath, fs.R_OK, err => {
                if (err) {
                    winston.error(err);
                    res.statusCode = 401;
                    res.statusMessage = err.message;
                    res.end();
                }

                res.end(fs.readFileSync(localPath).toString());
            });
        });
    };
}
