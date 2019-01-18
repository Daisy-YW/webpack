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
    // entry:"./a.js",    //默认单入口,单出口
    // entry:['./a.js','./c.js'],   //多入口,单出口(项目中相对使用的比较多)
    entry:{    //多入口多出口
        aModule:'./a.js',       //key(打包后模块输出的文字):value(文件路径)
        cModule:'./c.js'
        //多入多出配置完成后,记得配套修改output的filename的属性
    },

    //配置输出
    output:{
        //webpack2.0之后只能使用完整的绝对路径
        //resolve是进行路径拼接
        //__dirname指向当前项目的根目录的绝对地址
        //‪C:\Users\12162\Desktop\个人内容\个人学习内容\webpack\02webpack
        //第二个参数是具体文件夹的名字---"dist/"

        //输出路径
        path:path.resolve(__dirname,"dist/"),
        filename:"[name].js",    //这里的name配套自动配置到entry中的key
        //配置完成后直接在命令行运行webpck

    },
    //开启观察者模式,自动检测文件更新打包
    // watch:true,

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
           },
           //url图片资源加载器
           {
               test:/\.(jpg|png|gif)$/,
               use:[
                   {
                       loader:'url-loader',   //对应的加载器
                       options:{
                           limit: 8192    //数据大小,字节(b),数字大小除以1024就是文件的KB大小
                           //如果加载的图片资源小于limit大小,则使用url-loader
                           //如果大于limit大小,则自动转化为file-loader
                       }
                   }
               ]
           }
       ]
   },

   //插件属性
   plugins:[
        // new webpack.BannerPlugin('author:0813'),    //在chunk顶部生成注释
        // new webpack.optimize.CommonsChunkPlugin('common'),    //提取模块中公共的内容,后面的参数是公共模块的名称
        //压缩插件---只支持ES5的语法,这里可以配合babel一起使用
        new webpack.optimize.UglifyJsPlugin({
            //去掉所有注释
            comments:false,
            //抑制警告
            compress:{
                warnings:false
            }
        })
   ]
    
}