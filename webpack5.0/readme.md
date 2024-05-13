## 配置文件
- webpack 5.x
- node v16.15.1
- webpack-cli 5.1.4
- webpack-dev-server 5.0.4 https://webpack.docschina.org/configuration/dev-server/


- Q: npm i xxx --legacy-peer-deps 忽略npm的各个三方包的共享机制，让无法共享的三方包自行安装自己需要的包版本
- Q: npm i xxx --force 

```
    安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。
    如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数。
```