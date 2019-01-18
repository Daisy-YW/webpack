//入口文件

//这是A模块
var a = 10;
var b = 999;

document.getElementById("btn").onclick = function(){
    // 这里是同步加载方式
    //无论js代码中的什么地方，什么方式，只要是require引入的文件，统统当做是同步被加载
    // var bModule = require('./b.js');
    // console.log(bModule);

    //异步加载方式require.ensure()
    //参数一: 模块依赖,默认为空
    //参数二: 异步模块回调
    //参数三: (选填) 异步模块的名称,还需要在webpack中output属性中配置chunkFilename属性配置
    require.ensure([],function(require){
        //异步模块代码(只要在此回调函数内部加载的模块,都会单独打包,然后按需加载)
        var bModule = require('./b.js');
        console.log(bModule);
    },'b')
    //使用异步,必定会使用到publicPath配置
}

console.log(a,b);


