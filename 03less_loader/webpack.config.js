// 引进webpack
//引进path模块,可以进行路径拼接
var webpack = require('webpack');
var path = require('path');

//导出配置对象(这里是ES5的方式)
/* webpack.config.js的三大重点
    1.入口文件(必须是js文件)
    2.出口
    3.loader
*/
module.exports = {
    //入口文件(入口文件必须是一个js文件)
    entry:"./a.js",
    //配置输出
    output:{
        //webpack2.0之后只能使用完整的绝对路径
        //resolve是进行路径拼接
        //__dirname指向当前项目的根目录的绝对地址
        //‪C:\Users\12162\Desktop\个人内容\个人学习内容\webpack\02webpack
        //第二个参数是具体文件夹的名字---"dist/"

        //输出路径
        path:path.resolve(__dirname,"dist/"),
        filename:"bundle.js",
        //配置完成后直接在命令行运行webpck

    },
    //开启观察者模式,自动检测文件更新打包
    watch:true,

   module:{
       rules:[
           {
               test:/\.css$/,
               use:['style-loader','css-loader']
           },
           //创建less打包工具
           {
                test:/\.less$/,
                /* use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        oader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ] */
                //以上内容等同于
                use:['style-loader','css-loader','less-loader']
           }
       ]
   }
    
}