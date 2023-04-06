/*Math对象：
* Math就是调用一些常见的数学运算相关的属性和方法
* */
//固定值
console.log("PI = " + Math.PI)
console.log("E = " + Math.E)
console.log("================")
//正数
//计算绝对值
console.log(Math.abs(1))
//向上取整
console.log(Math.ceil(1.1))
//向下取整
console.log(Math.floor(1.9))
//四舍五入
console.log(Math.round(1.4))
//负数
//计算绝对值
console.log(Math.abs(-1))
//向上取整
console.log(Math.ceil(-1.1))
//向下取整
console.log(Math.floor(-1.9))
//四舍五入
console.log(Math.round(-1.4))
console.log("==================")
//生成随机数
//生成一个0~10之间的数，但是不包括10
console.log(Math.random() * 10)
// 生成一个1~10之间的随机数，还是不包括10
console.log(Math.random() * (10 - 1) + 1);
//数学运算
//返回x的y次幂
console.log(Math.pow(12 , 3))
//返回一个数的平方
consoel.log(Math.sqrt(20))