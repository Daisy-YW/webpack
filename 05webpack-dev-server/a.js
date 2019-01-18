//入口文件

//这是A模块
var a = 10;
var b = 999;

let bModule = require('./b.js');
console.log(a,b);
console.log(bModule);

require('./index.less');

//加载url资源
var img1 = require("./images/img1.jpg");
console.log(img1);
var img2 = require("./images/img2.jpg");
console.log(img2);


document.getElementById("img1").innerHTML = `<img src=${img1}>`;
document.getElementById("img2").innerHTML = `<img src='${img2}'>`;