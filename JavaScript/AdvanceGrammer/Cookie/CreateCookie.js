/*
* 创建cookie
* */
document.cookie = "username=zhangsan"
//还可以为cookie添加一个过期时间
document.cookei = "username=zhangsan;expires=Thu, 18 Dec 2043 12:00:00 GMT"
//可以加入path参数设置cookie的路径.现在默认情况下，cookie属于当前页面
document.cookei = "username=zhangsan;expires=Thu, 18 Dec 2043 12:00:00 GMT path=/"
