/**
 * @file jasmine
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import path from 'path';
import * as util from '../util';

export default function getHandler() {
    let jasmineDir = path.resolve('../../node_modules/jasmine-core/lib/jasmine-core/');
    return function handler(context) {
        let urlPath = context.getUrlPath();
        let fileReading;
        if (urlPath === '/jasmine.js') {
            let contents = [];
            fileReading = util.readFile(path.join(jasmineDir, 'jasmine.js'))
                .then(content => {
                    contents.push(content);
                    return util.readFile(path.join(jasmineDir, 'jasmine-html.js'));
                })
                .then(content => {
                    contents.push(content);
                    return util.readFile(path.join(jasmineDir, 'boot.js'));
                })
                .then(content => {
                    contents.push(content);
                    context.js(contents.join('\n\n'));
                    context.end();
                });
        }
        else if (urlPath === '/jasmine.css') {
            fileReading = util.readFile(path.join(jasmineDir, 'jasmine.css'))
                .then(content => {
                    context.css(content);
                    context.end();
                });
        }

        return fileReading;
    };
}
