/**
 * @file 贯穿整个请求过程的上下文对象
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import fs from 'fs';
import winston from 'winston';

const REQ = Symbol('req');
const RES = Symbol('res');
const FILE_CONTENT = Symbol('fileContent');
const FILE_PATH = Symbol('filePath');
const ORIGIN_FILE_CONTENT = Symbol('originFileContent');
const IS_RESPONSED = Symbol('isResponsed');

const FILE_TYPE = Symbol('fileType');
const JS_FILE = Symbol('jsFile');
const CSS_FILE = Symbol('cssFile');
const HTML_FILE = Symbol('htmlFile');

export default class Context {
    constructor(req, res) {
        this[REQ] = req;
        this[RES] = res;
        this[IS_RESPONSED] = false;
    }

    loadFile(localPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(localPath, (error, data) => {
                if (error) {
                    return reject(error);
                }

                this[ORIGIN_FILE_CONTENT] = data;
                this[FILE_CONTENT] = data;
                this[FILE_PATH] = localPath;

                let suffix = localPath.slice(localPath.lastIndexOf('.') + 1, localPath.length).toLowerCase();
                this[FILE_TYPE] = {
                    css: CSS_FILE,
                    html: HTML_FILE,
                    js: JS_FILE,
                    htm: HTML_FILE
                }[suffix];
                resolve(data);
            });
        });
    }

    getFilePath() {
        return this[FILE_PATH];
    }

    getOriginFileContent() {
        return this[ORIGIN_FILE_CONTENT];
    }

    getFileContent() {
        return this[FILE_CONTENT];
    }

    js(content) {
        this[FILE_TYPE] = JS_FILE;
        this[FILE_CONTENT] = content;
    }

    css(content) {
        this[FILE_TYPE] = CSS_FILE;
        this[FILE_CONTENT] = content;
    }

    html(content) {
        this[FILE_TYPE] = HTML_FILE;
        this[FILE_CONTENT] = content;
    }

    hasContent() {
        return !!this[FILE_CONTENT];
    }

    end() {
        if (this[IS_RESPONSED]) {
            return;
        }

        this[RES].setHeader('Content-Type', {
            [JS_FILE]: 'text/javascript',
            [CSS_FILE]: 'text/css',
            [HTML_FILE]: 'text/html'
        }[this[FILE_TYPE]] || 'text/plain');
        this[RES].statusCode = 200;
        this[RES].write(this[FILE_CONTENT]);
        this[RES].end();

        this[IS_RESPONSED] = true;
    }

    isEnd() {
        return this[IS_RESPONSED];
    }
}
