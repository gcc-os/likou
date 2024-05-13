const path = require('path')

module.exports = {
    mode:'development',
    entry: {
        main: './src/main.ts',
    },
    output: {
        // filename 定义打包的文件名称
        // [name] 对应entry配置中的入口文件名称（如上面的main）
        // [hash] 根据文件内容生成的一段随机字符串
        filename: 'bundle.js',
        // path 定义整个打包文件夹的路径，文件夹名为 dist
        path: path.join(__dirname, 'dist')
    },
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        client: {
            overlay: true,
            progress: true,
        },
        open: false,
        compress: false,
        port: 9000,
    }
}