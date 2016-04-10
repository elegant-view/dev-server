/**
 * @file 一些辅助性的方法
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import url from 'url';
import path from 'path';
import u from 'underscore';
import fs from 'fs';

export function convertToLocalPath(urlPath, rootPath) {
    return path.join(rootPath, urlPath);
}

export function getUrlPath(request) {
    return url.parse(request.url).pathname;
}

export function isMatch(include, urlPath) {
    for (let includePath of include) {
        if (u.isString(includePath) && includePath === urlPath) {
            return true;
        }

        if (u.isRegExp(includePath) && includePath.test(urlPath)) {
            return true;
        }

        if (u.isFunction(includePath) && includePath(urlPath)) {
            return true;
        }
    }
}

export function find(arr, iteraterFn, context) {
    if (!u.isArray(arr)) {
        return null;
    }

    return next(arr, iteraterFn, context, 0);

    function next(arr, iteraterFn, context, index) {
        if (arr.length <= index) {
            return Promise.resolve(null);
        }
        return Promise.resolve(iteraterFn.call(context, arr[index], index, arr))
            .then(result => {
                return result ? result : next(arr, iteraterFn, context, index + 1);
            });
    }
}

export function readFile(...args) {
    return new Promsie((resolve, reject) => {
        fs.readFile(...args, (error, content) => {
            if (error) {
                return reject(error);
            }
            resolve(content);
        });
    });
}
