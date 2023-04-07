/*
* 通过量词可以设置一个内容重复出现的次数，量词只对他前面的内容起作用，出现多个内容需要处理可以加入()括起来。常见的量词：
* {n} : 正好出现n次
* {m , } : 出现m次以上
* {m , n} : 出现m-n次
* + ： 至少出现一次，类似于{1}
* * ： 0个或多个
* ？ ： 0或1个 ： 相当于{0 , 1}
* */
var str = "abc";

reg = /(ab){3}/;
console.log(reg.test(str));
console.log("===============");
reg = /b{3}/;
console.log(reg.test(str));
console.log("===============");
reg = /ab{1,3}c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab{3,}c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab+c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab*c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab?c/;
console.log(reg.test(str));
console.log("===============");
