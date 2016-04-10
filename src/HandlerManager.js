/**
 * @file handler管理器
 * @author yibuyisheng(yibuyisheng@163.com)
 */

import u from 'underscore';
import {find} from './util';
import winston from 'winston';

const HANDLERS = Symbol('handlers');

export default class HandlerManager {
    registerHandlers(handlers) {
        this[HANDLERS] = u.filter(handlers, handler => u.isFunction(handler));
    }

    handle(context) {
        return find(this[HANDLERS], handler => {
            return Promise.resolve(handler(context))
                .then(() => {
                    if (context.hasContent()) {
                        context.end();
                    }
                })
                .catch(error => {
                    winston.error(error);
                    return true;
                });
        });
    }
}
