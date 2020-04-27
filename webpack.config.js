const path = require('path');
const _ = require('lodash');

module.exports = env => {
    const childConfig = require(path.join(__dirname, env.webpackpath, 'webpack.config.js'));
    const config = _.merge(
        {
            entry: './index.js',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                port: 9000,
                allowedHosts: [
                    'localhost',
                    'test.com', // 给个域名，方便虚拟机访问
                ]
            }
        },
        childConfig
    );
    return config;
}