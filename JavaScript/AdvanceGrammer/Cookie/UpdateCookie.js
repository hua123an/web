/*
* Cookie修改
* 修改cookie就是将旧cookie覆盖
* */
document.cookie = "username=zhangsan"
document.cookie = "username=lisi"
var cookie = document.cookie
console.log(cookie);