/*
* Cookie概述
* Cookie是一些数据，用于记录服务端信息
* 当用户访问web网页时，信息会被保存在cookie中
* 当用户下一次访问该网页时，cookie读取上一次访问的信息
* cookie以名/值的形式存储，如下所示：
* */
username=zhangsan
//当浏览器从web服务器上请求web页面时，属于该页面的cookie会被添加到该请求中，服务器端通过这种方式来获取用户信息
//js用document.cookie属性来对cookie操作
