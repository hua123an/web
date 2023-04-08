/*
* localStorage可以将数据永久性的存储在本地，除非显式将其删除或清空
* 常见方法：
* 保存单个数据：localstorage.setItem(key , value)
* 获取的单个数据：localstorage.getItem(key)
* 删除单个数据：localstorage.remove(key)
* 删除所有数据：localstorage.clear()
* 获取某个索引的key：localstorage.key(index)
*实例代码：
* */
//保存数据
localStorage.setItem("username" , "zhangsan")
//读取单个数据
console.log(localStorage.getItem("username"))
console.log("=============");
//删除单个元素
console.log(localStorage.removeItem("username"))
//保存两个数据
localStorage.setItem("age" , 18)
localStorage.setItem("sex" , "nan")
//获取数据
console.log(localStorage.getItem("age"))
console.log(localStorage.getItem("sex"))
console.log("==================")
//使用for循环来迭代localStorage中的键值对
for (var i = 0 ; i < localStorage.length ; i++) {
    var key = localStorage.key(i)
    var value = localStorage.getItem(key)
    console.log(key + "=" + value)
}
console.log("=============")
//删除所有数据
localStorage.clear()