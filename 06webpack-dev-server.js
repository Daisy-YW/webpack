/* 
当使用了webpack-dev-server搭建服务器环境之后
所有打包后的文件,都会被产生创建在服务器内存中
也就是说,不会在硬盘内产生真实文件

//配置输出
output:{
        //在服务器环境下内存输出地址
        publicPath:"/dist"
}

path和publicPath的区别/
    path: 本地打包文件的目录(输出在硬盘里的文件目录)
            使用webpack把文件打包进硬盘
    publicPath: 在服务器环境下内存的输入目录,webpack-dev-server
            使用webpack-dev-server,启动服务器,把文件打包放入服务器中
*/