/*
* JSON简答介绍：
*JSON数据就是以键值对的形式组成的，但是键必须是字符串，且必须要包裹在双引号里面，而且值必须是以下几种数据类型：
* 字符串(在JSON中，字符串必须要包裹在双引号中)
* 数字
*对象(JSON对象)
* 数组
* 布尔值
* null
* JSON的值不能是以下数据类型之一：
* 函数
*日期
*undefined
*因为JSON的键值对形式类似于对象形式看，其定义方式与对象定义方式类似
* */
//创建简单的JSON对象
var person = {"name" : "huaan" , "age" : 20}
console.log(person.age);