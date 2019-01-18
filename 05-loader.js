/* 
    webpack本身只支持js模块加载,如果需要加载其他类型,需要安装loader

    安装想对应解析文件的loader,都需要提前安装

    1.确定要加载的模块类型,到webpack官网寻找对应的loader
    http://www.webpackjs.com/loaders/

    2. 下载安装杜英loader加载器

    3. 配置,找到webpack.config.js
    module:{
        //规则的配置
        rules:[
            //每一个小规则
            {
                //文件匹配规则(正则表达式)
                test:/\.css$/,   //这个正则只匹配css文件
                use:['style-loader','css-loader']      //此类文件使用加载类
                //这里的use加载,是从右到左依次加载的
            },
            {...}
        ]
    }
    
*/