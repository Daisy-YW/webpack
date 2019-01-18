/* 
    1.异步模块加载定义函数
    require.ensure([],function(require){
        //回调函数,在此函数内定义的所有require加载,都会变为异步模块,单独打包
    },'chunkName');

    2.在webpack.config.js的output配置中,添加chunkFilename配置
        output:{
            ..
            ...
            //异步chunk模块打包文件的明见
            chunlFilename:'[name].js
        }

    3. 在ensure回调函数内,写上想要异步加载的模块
    require.ensure([],function(require){
        require('依赖加载的异步文件)
    },'chunk文件名')

    4. 只要使用到异步,必定会使用到publicPath配置!!!!!!!!!!!!!!!!!!!!!!
*/