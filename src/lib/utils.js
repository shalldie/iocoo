/**
 * 获取参数类型
 * 
 * @export
 * @param {any} sender 想要知道类型的参数
 * @returns {string}
 */
export function getType(sender) {
    return sender === null ?
        (sender + '') :
        Object.prototype.toString.call(sender).toLowerCase().match(/\s([^\]])+/)[1];
}