/*
* AJax的get请求
*
* */
//创建异步对象
var ajax = new XMLHttpRequest();
//获取请求
ajax.open("get" , "users.json")
//发送请求
ajax.send()
//注册事件onreadystatechange,改变状态时就会调用
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.responseText)
    }
}