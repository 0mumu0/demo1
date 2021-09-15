console.log(global)
function require(modulePath) {
    // 1.将modulePath转换为据对路径
    // 2.判断是否该模块已有缓存
    // if(require.cache['']){
    //     return require.cache[''].result
    // }
    // 3.读取文件内容
    // 4.包裹到一个函数中
    // 5.function __temp(module,exports,require,__dirname,__filename){
    //     内容
    // }
    // 6.创建module对象
    // module.exports = {}
    // const exports = module.exports
    // __temp.call(module.exports,module,exports,require,module.path
    //     ,module.filename)
    // return module.exports
}
// require.cache = {}
const result = require('')

console.log()