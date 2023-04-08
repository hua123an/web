/*
* AJAX的post请求
*
*
*
* */
//创建异步对象
var ajax = new XMLHttpRequest()

//设置请求类型以及url。post需要加入请求头才行不然会报错
ajax.open("post" , "users.json")
ajax.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
//发送请求
ajax.send()
//注册事件
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4  && ajax.status == 200) {
        console.log(ajax.responseText)
    }

}