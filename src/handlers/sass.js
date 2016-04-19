/**
 * @file sass编译器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import * as util from '../util';
import winston from 'winston';
import findConfig from '../findConfig';
import path from 'path';
import u from 'underscore';
import sass from 'node-sass';

export default function getHandler(options) {
    let sassOption = options.sass || {};
    let include = sassOption.include || [];
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
                sassOption.compileOptions = u.extend(
                    {},
                    sassOption.compileOptions,
                    packageConfig.ev.sass.compileOptions
                );
            }
            sass.render(u.extend({file: localPath}, sassOption.compileOptions), (err, result) => {
                if (err) {
                    winston.error(err);
                    context.end();
                    return reject(err);
                }

                context.css(result.css);
                resolve();
            });
        });
    };
}
