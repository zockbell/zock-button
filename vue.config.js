const path = require('path');

module.exports = {
    // 关闭eslint检查
    lintOnSave: false,
    
    // 修改入口文件
    pages: {
        index: {
            entry: 'src/main.js',   // 入口
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
}

// webpack的基本配置
chinaWebpack: config => {
    config.module
        .rule('js')
        .include.add(path.resolve(__dirname, 'packages')).end()
        .use('babel')
        .loader('babel-loader')
    
    // 修改配置
    .tap(options => {
        return options;
    });
}