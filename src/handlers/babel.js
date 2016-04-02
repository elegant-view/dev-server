/**
 * @file babel编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import * as babelCore from 'babel-core';
import * as util from '../util';
import winston from 'winston';

export default function getHandler(options) {
    let babel = options.babel || {};
    let include = babel.include || [];
    return function handler(context) {
        let localPath = context.getFilePath();
        if (!util.isMatch(include, localPath)) {
            return;
        }

        return new Promise((resolve, reject) => {
            babelCore.transformFile(localPath, babel.compileOptions, (err, result) => {
                if (err) {
                    winston.error(err);
                    context.end(err.message, null, 500);
                    return reject(err);
                }

                context.js(result.code);
                resolve();
            });
        });
    };
}
