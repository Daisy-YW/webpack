//入口文件

//这是A模块
var a = 10;
var b = 999;

var bModule = require('./b.js');
console.log(a,b);
console.log(bModule);

