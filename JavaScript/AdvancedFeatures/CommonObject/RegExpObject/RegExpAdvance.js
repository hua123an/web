/*
* 检查一个字符串是否是以某个字母开头
* */
var str = 'abc'
var reg = /^a/;
console.log(reg.test(str))
//判断字符串是否以某个字母结尾
var reg = /a$/;
console.log(reg.test(str))
//判断一个字符串中是否含有.或\就会使用\转义字符
/*
* \. ： 表示.
* \\ : 表示\
* */
/*使用构造函数时，由于传入的参数是一个字符串，而\是字符串中的转义字符，这是需要将\改成\\
* */
var reg1 = /\./;
var reg2 = /\\/;
//构造函数表示
var reg3 = new RegExp("\\.")
var reg4 = new RegExp('\\\\')
/*
* 其他转义符号：
* \w : 任意字母、数字、下划线,相当于[A-z0-9]
* \W : 除了字母、数字、下划线，相当于[^A-z0-9]
* \d : 任意数字，相当于[0-9]
* \D : 除了任意数字，相当于[^0-9]
* \s : 空格
* \S : 除了空格
* \b: 单词边界
* \B : 除了单词边界
*
* 创建一个字符串，去掉字符串中的前后的空格
* */
var str = "Hello child"
var reg= /^\s*|\s*$/g;
console.log(str)
str = str.replace(reg , "")
console.log(str);
//创建一个正则，检查一个字符串中是否含有单词child
var str = 'Hello child'
var reg = /\child\b/
console.log(reg.test(str))



