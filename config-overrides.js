const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    (config) => {
        // loader 数组在 module.rules.oneOf 内，自己的loader也要配置在这里
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        // 自己的loader放在loader数组的最前面确保正确工作。
        loaders.unshift({
            test: /\.svg$/,
            use: [
                {loader: 'svg-sprite-loader', options: {}},
                {
                    loader: 'svgo-loader', options: {
                        plugins: [
                            {removeAttrs: {attrs: 'fill'}}
                        ]
                    }
                },
            ],
        })
        return config
    }
);