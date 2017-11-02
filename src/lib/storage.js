import { getType } from './utils';

/**
 * 根据key获取localstorage存储内容
 * 
 * @export
 * @param {string} key 
 * @returns {any}
 */
export function getStorage(key) {
    let content = localStorage[key];
    if (content) {
        return JSON.parse(content);
    } else {
        return null;
    }
}

/**
 * 向localstorage根据key存储内容
 * 
 * @export
 * @param {string} key 存储关键字
 * @param {any} info 存储内容
 */
export function saveStorage(key, info) {
    let type = getType(info);

    if (type != 'string') {
        info = JSON.stringify(info);
    }

    localStorage[key] = info;
}