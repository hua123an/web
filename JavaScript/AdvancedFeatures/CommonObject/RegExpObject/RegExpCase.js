/*
* 正则案例
* 检查手机号
* */
var phoneStr = '15399341569'
var phoneReg = /^1[3-9]{0-9}{9}$/;
console.log(phoneReg.test(phoneStr))
//检查邮箱
var emailStr = "1994843581@qq.com"
var emailReg = /^\w{3,}(\.w+)*@[A-z0-9] + (\.[A-z]{2,5}){1,2}$/
console.log(emailReg.test(emailStr))