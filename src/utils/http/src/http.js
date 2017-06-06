function getType(sender) {
    return sender === null ? (sender + '') : Object.prototype.toString.call(sender).toLowerCase().match(/\s(\S+?)\]/)[1];
}

/**
 * 基础 ajax 方法
 * 
 * @param {any} options ajax 配置参数
 * @returns 
 */
function ajax(options) {
    let defaults = {
        url: '',
        body: '',
        method: 'GET'
    };

    let opt = Object.assign({}, defaults, options);
    // opt.data = opt.body;  // 习惯用名
    let dataType = getType(opt.body);

    let actionDict = {
        /**
         * 参数是object类型
         */
        object: function () {
            // 处理参数
            opt.body = Object
                .keys(opt.body)
                .map(n => n + '=' + encodeURIComponent(opt.body[n]))
                .join('&');
            // 添加header
            opt.headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
        },
        /**
         * 如果是 FormData 类型
         */
        formdata: function () {
            // 无需处理
        },
        /**
         * 如果是字符串
         */
        string: function () {
            // 添加header
            opt.headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
        }
    };

    actionDict[dataType] && actionDict[dataType]();
    return fetch(opt.url, opt);
}

/**
 * post 数据
 * 
 * @param {any} url 地址
 * @param {any} data 参数
 * @returns {Promise<Response>}
 */
function post(url, data) {
    return ajax({
        url: url,
        method: 'POST',
        body: data
    });
}

/**
 * post 数据，并将返回内容转化成 js 对象
 * 
 * @param {any} url 地址
 * @param {any} data 参数
 * @returns {Promise<object>}
 */
function postJSON(url, data) {
    return post(url, data).then(n => n.json());
}

function get(url, data) {
    return ajax({
        url: url,
        method: 'GET',
        body: data
    })
}

function getJSON(url, data) {
    return get(url, data).then(n => n.json());
}

export default {
    ajax,
    get,
    getJSON,
    post,
    postJSON
};
