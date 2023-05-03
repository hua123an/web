/*
* 删除cookie
* 删除cookie只需要设置expires参数设置为以前的参数就行了
* */
document.cookie = "username=zhangsan"
document.cookie = "username=; expires=Thu , 01 Jan 1970 00:00:00 GMT"
var cookie = document.cookie
console.log(cookie)