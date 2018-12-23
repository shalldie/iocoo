const path = require('path');

module.exports = {
    // devServer: {
    //     disableHostCheck: true
    // },
    // devServer: {
    //     hot: true,
    //     hotOnly: true,
    //     before: function (app, server) {

    //         app.post('/api/*', function (req, res) {
    //             const key = path.join(__dirname, 'mockup', req.path.replace(/\.js$/, '') + '.js');

    //             const result = require(key);
    //             res.json(result);
    //             delete require.cache[key];
    //         });
    //     }
    // },
    chainWebpack: config => {
        config.resolve
            .symlinks(true)
        return config
    },
    css: {
        extract: false,
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                data: `@import "@/assets/styles/variables.scss";`
            }
        }
    }
};
