/*
* cookie获取
* document.cooke将以字符串的形式返回所有cookie，类型格式为：cookie1=value,cookie2=value,cookie3=value
* */
//获取cookie
document.cookie = "username=zhangsan"
var cookie = document.cookie
console.log(cookie)