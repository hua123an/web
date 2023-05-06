/*
* XMLHttpRequest对象用于服务器交换数据，这意味着可以更新网页数据，而不需要加载整个页面
* 基本语法：
* */
//创建XMLHttpRequest对象
variable = new XMLHttpRequest();
//老版本创建方式
variable = new ActiveXObject("Microsoft.XMLHTTP")
//ES5、ES6为了检查浏览器是否支持XMLHttpRequest。如果支持，再创建XMLHttpRequest对象，如果不支持，则创建ActiveX对象
var xhttp ;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest()
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP")
}
//但是需要注意的是，处于安全原因，现代浏览器不允许跨域访问，这意味着尝试加载的网页和XML文件必须位于相同的服务器
