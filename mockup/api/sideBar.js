const Mock = require('mockjs');

module.exports = Mock.mock([
    {
        label: '概览页',
        link: '/'
    },
    {
        label: '基础',
        children: [
            {
                label: 'Button'
            },
            {
                label: 'Input'
            },
            {
                label: 'Select'
            }
        ]
    }, {
        label: '表单',
        children: [
            {
                label: 'Form'
            }
        ]
    }
]);
