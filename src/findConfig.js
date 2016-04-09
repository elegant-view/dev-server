/**
 * @file 找到配置。会到最近的package.json里面去找。
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import path from 'path';
import winston from 'winston';

export default function findConfig(relativeDir) {
    let fullPath = path.join(relativeDir, 'package.json');
    let jsonData;
    try {
        jsonData = require(fullPath);
    }
    catch (error) {
        winston.info(`try to load package.json under \`${fullPath}\` but failed!`, error);
    }

    return relativeDir === path.sep || jsonData
        ? jsonData ? jsonData.ev : null
        : findConfig(relativeDir.slice(0, relativeDir.lastIndexOf(path.sep)));
}
