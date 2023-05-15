// @ts-ignore
let name : string = "HarmonyOS"
// @ts-ignore           //抛异常
name = "HarmonyOS"
//还可以使用模版字符串，它可以定义多行文本和内嵌表达式。这种字符串是被饭引用包围起来的"'"，并且以${expr}这种形式嵌入表达式，实例代码如下：
// @ts-ignore
let name : string = 'Gene';
let age : number = 37;
const sentence : string = "Hello,my name is${name}.I'll be ${age + 1} years old next month."
// 下面的定义方式与上面基本一致：
const sentence1 : string = "Hello,my name is '+name+''.\n\n'+'I'll be'+(age + 1)+'years old next month'";



/*String和string的区别：
* string表示的是一种基本数据类型
* String表示的是一个对象，只要是对象就可以调用其对应的方法
*
* */
