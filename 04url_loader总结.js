/* 
2中url-loader的区别?
    url-loader:会把资源转化为base64格式,打包进入js文件
        加载base64格式图片,无需再次加载,但是会让那个js变大

    file-loader: 把资源单独打包,放入出口文件夹
        需要再次加载文件
*/