/**
 * @file babel编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import * as babelCore from 'babel-core';
import * as util from '../util';
import winston from 'winston';
import findConfig from '../findConfig';
import path from 'path';
import u from 'underscore';

export default function getHandler(options) {
    let babel = options.babel || {};
    let include = babel.include || [];
    return function handler(context) {
        let localPath = context.getFilePath();
        localPath = path.resolve(localPath);
        if (!util.isMatch(include, localPath)) {
            return;
        }

        return new Promise((resolve, reject) => {
            let packageConfig = findConfig(localPath.slice(0, localPath.lastIndexOf(path.sep)));
            if (packageConfig && packageConfig.ev && packageConfig.ev.babel) {
                babel.compileOptions = u.extend({}, babel.compileOptions, packageConfig.ev.babel.compileOptions);
            }
            babelCore.transformFile(localPath, babel.compileOptions, (err, result) => {
                if (err) {
                    winston.error(err);
                    context.end();
                    return reject(err);
                }

                context.js(result.code);
                resolve();
            });
        });
    };
}
