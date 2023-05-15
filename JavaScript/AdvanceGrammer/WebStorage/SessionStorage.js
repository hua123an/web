/*sessionStorage对象存储于特地对话数据，也就是说它的的生命周期未当前窗口或标签页，一旦窗口或者标签页关闭，所有的sessionStorage数据也会被清空。
sessionStorage中的数据可以跨越页面刷新而存在，因为sessionStorage对象的的绑定某个服务器会话，所以在本地运行时不可能的。存储在sessionStorage中的数据只能在最初给对象存储数据的页面访问到，多页面会限制
* 常见方法：
* 保存单个数据：sessionStorage.setItem(key , value)
读取单个数据 ：sessionStorage.getItem(key)
* 删除单个数据：sessionStorage.removeItem(key)
删除所有数据：sessionStorage.clear()
获取某个索引的key：sessionStorage.key(index)
* */
//保存数据
sessionStorage.setItem("username" , "zhangsan")
//读取单个数据
console.log(sessionStorage.getItem("username"))
console.log("==========")
//删除单个数据
console.log(sessionStorage.removeItem("username"))
console.log("==================")
//保存两个数据，输出
sessionStorage.setItem("age" , 18)
sessionStorage.setItem("sex" , "nan")
console.log("age = " + sessionStorage.getItem("age"))
console.log("sex = " + sessionStorage.getItem("sex"))
console.log("===============")
//使用for....in循环来迭代sessionStorage中的键值对、属性和方法
for (var key in sessionStorage) {
    console.log(key + "=" + sessionStorage[key])
}
console.log("=================")
//使用for循环来迭代sessionStorage中的键值对
for (var i = 0 ; i < sessionStorage.length ; i++){
    var key = sessionStorage.key[i]
    var value = sessionStorage.getItem(key)
    console.log(key + "=" + value)
}
console.log("==============")
//清除全部数据
sessionStorage.clear()