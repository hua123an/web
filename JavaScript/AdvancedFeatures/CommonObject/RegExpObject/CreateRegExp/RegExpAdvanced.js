/*正则进阶：
* 需求说明：创建一个正则表达式，检查字符串中是否含有a或b
* 使用|表示或者的意思
 */
var reg = /a|b|c/;
var str = 'abc'
var result = reg.test(str)
console.log(result)
//简单方法判断是否含有判断字符
//检查字符串中是否含有字母
var reg1 = /[A-z]/;
var str = 'abc'
var result = reg.test(str)
console.log(result);
//常见组合
/*[a-z]:任意小写字母
*[A-Z]:任意大写字母
* [A-z]:任意字母
*[0-9]:任意数字
* */
//创建一个正则，判断一个字符串中是否含有abc,adc,aec字符
var reg = /a[bcd]c/;
var str = 'abc123'
var result = reg.test(str)
console.log(result)
//判断字符序列
/*
*常见组合：
* [^a-z]:除了任意小写字母
* [^A-Z]: 除了大写字母
* [^A-z]:除了任意字母
*[^0-9]:除了任意数字
* */
//创建一个正则，检查一个字符串中是否是除了数字其他字符
var reg = /[^0-9]/;
var str = 'abc123'
var result = reg.test(str)
console.log(result);
