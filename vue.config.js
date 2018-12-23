const path = require('path');

module.exports = {
    devServer: {
        before: function (app, server) {

            app.post('/api/*', function (req, res) {
                const key = path.join(__dirname, 'mockup', req.path.replace(/\.js$/, '') + '.js');

                const result = require(key);
                res.json(result);
                delete require.cache[key];
            });

        }
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
