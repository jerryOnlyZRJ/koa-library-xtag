// loader是链式调用的，上一个loader会将处理结果传给下一个loader
//content是loader匹配到的单个文件内容 【String】
// 如果use是个loaders数组，则从后往前执行，pitch会被挂载在数组末端，最先执行

const loaderUtils = require("loader-utils");

/**
 * @param {String | Buffer} content 上一个loader传入的文件内容
 * @return {String | Buffer} content 经过处理的文件内容，向下传递
 */
module.exports = function(content){
    // 获取用户配置的options
    const options = loaderUtils.getOptions(this);
    // 开启loader资源缓存
    this.cacheable();
    console.log('***options***', options)
    console.log('***content***', content)
    console.log('***this data***', this.data.value)
    // return "{};" + content
    return content
}

module.exports.pitch = (remaining, preceding, data) => {
    // remaining: loader匹配到的资源文件路径
    console.log('***remaining***', remaining)
    console.log('***preceding***', preceding)
    // data会被挂在到当前loader的上下文this上在loaders之间传递
    data.value = "test"
}

// 将loader的数据转换为Buffer
// module.exports.raw = true