/* 
模块化规范：
模块化为了解决什么问题？？？ 
    当一个项目引入太多JS文件后，有一定概率会引起变量污染问题，使用模块化为了而解决JS变量污染

模块化规范：3个点
    1. 模块的定义
    2. 模块内部的暴露接口
    3. 模块的加载

commonJS  AMD  CMD

commonJS
    模块的定义：
        每一个文件就是一个模块，内部变量或函数私有
    内部暴露：
        module。exports = XXX；
    模块的加载：
        require（）; //模块加载
            ./   加载相对路径
            /    加载绝对路径
            没有./或者/,表示加载node_modules内部依赖模块(先找node_modules,如果没有找到, 到全局寻找)

    commonJS是最典型的同步模块规范,一般用于服务器(因为是同步,所以不适合用于浏览器环境)


AMD (异步模块)
    模块定义:
        define(function(){
            //模块内容
        })
        使用define定义模块,所有模块的内容写在define的函数里
    内部暴露:
        在函数内使用return
    模块的加载:
        return('./a.js',function(){回调函数})
        在文件最开始的时候 ,把所有依赖的模块全部进行加载
        require([a.js,b.js,c,d...],function(){
            //首次加载资源很大
        })


CMD(通用异步模块加载规范)
    结合了AMD和commonJS两种语法
    模块的定义:
        define(function(module,exports){
            module.exports = xxx;
        })
    内部的暴露:
        module.exports = xxx;
    模块的加载:
        require();

重点:
    AMD和CMD的区别和CommonJS?(经典面试题)
        AMD: 依赖前置, 实现者(最好的实现者)是require.js
        CMD: 依赖就近(用到谁,再去加载谁),实现者是sea.js
        commonJs: 同步模块加载规范,实现者是NodeJS

ES6模块化(官方版,仍有兼容性问题)
    import 导入
    export 导出
    一个文件就是一个模块,文件内部导出用export,导入使用import

    //示例:
        var  a = 10;
        var  b = 10;

        支持export {a,b};
        export a;
        也支持 export var a = 10;
        export function test(){

        }

        //示例加载
        import {b,test} from "file address"

        可以使用Babel/'bebl/解决浏览器的兼容性问题


Webpack:
    1.webpack是什么?
        Webpack是前端"模块化管理"和"打包工具,可以将许多宋丹的模块按照依赖和规则打包符合盛传环境部署的前端资源, 还可以将按需加载的模块进行代码分隔
    2.webpack的特点:
        -代码拆分: 同时支持同步与异步的模块加载
        -Loader: 支持各种类型资源的加载(webpack本身只能解析原生js模块,有了Loader以后,支持各类资源加载)
        -智能解析: 支持各类第三方库及各类模块化规范
        -插件系统: 配套丰富




*/