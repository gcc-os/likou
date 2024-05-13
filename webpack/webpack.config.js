const path = require('path')

module.exports = {
    mode:'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        // filename 定义打包的文件名称
        // [name] 对应entry配置中的入口文件名称（如上面的main）
        // [hash] 根据文件内容生成的一段随机字符串
        filename: 'bundle.js',
        // path 定义整个打包文件夹的路径，文件夹名为 dist
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        compress: true,
        port: 9000
    }
}