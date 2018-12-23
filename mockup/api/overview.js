const Mock = require('mockjs');

module.exports = Mock.mock({
    preview: Mock.Random.image('500x300'),
    'overviewList|7': [
        {
            name: '@cname',
            'age|1-100': 100,
            'sex|0-1': 1,
            date: '@date'
        }
    ],
    'appList|10': [
        {
            appName: '@name'
        }
    ]
});
