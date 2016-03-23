import url from 'url';
import path from 'path';
import u from 'underscore';

export function convertToLocalPath(urlPath, rootPath) {
    return path.resolve(urlPath, rootPath);
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
