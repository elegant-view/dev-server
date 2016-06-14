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
import fs from 'fs';

export default function getHandler(options) {
    let babel = options.babel || {};
    let include = babel.include || [];

    const cache = {};
    return function handler(context) {
        let urlPath = context.getUrlPath();
        if (!util.isMatch(include, urlPath)) {
            return;
        }

        let localPath = context.getFilePath();
        localPath = path.resolve(localPath);

        return new Promise((resolve, reject) => {
            let packageConfig = findConfig(localPath.slice(0, localPath.lastIndexOf(path.sep)));
            if (packageConfig && packageConfig.ev && packageConfig.ev.babel) {
                babel.compileOptions = u.extend({}, babel.compileOptions, packageConfig.ev.babel.compileOptions);
            }

            fs.stat(localPath, (error, stats) => {
                if (error) {
                    winston.error(error);
                    context.end();
                    return reject(error);
                }

                if (cache[localPath] && cache[localPath].time >= stats.mtime.getTime()) {
                    context.js(cache[localPath].code);
                    resolve();
                }
                else {
                    babelCore.transformFile(localPath, babel.compileOptions, (err, result) => {
                        if (err) {
                            winston.error(err);
                            context.end();
                            return reject(err);
                        }

                        context.js(result.code);
                        resolve();

                        cache[localPath] = {
                            time: Date.now(),
                            code: result.code
                        };
                    });
                }
            });
        });
    };
}
