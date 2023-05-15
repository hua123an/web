/*
* AJAX请求合集
* */
var ajax = {
    //get请求
    get : function (url , fn) {
        var xhr = new XMLHttpRequest()
        xhr.open("get" , url , true)
        xhr.onreadystatechange = function () {
            //判断状态信息
            if (xhr.readyState == 4 && xhr.status == 200 ) {
                console.log(this, xhr.responseText)
            }
        }
        //发送请求
        xhr.send()
    },
    //post请求
    post : function(url , data , fn) {
        //获取异步请求
        var xhr = new XMLHttpRequest()
        //设置参数访问
        xhr.open("post" , url , true)
        xhr.setRequestHeader("Content-Type" , "application/www-form-url")
        //判断请求状态，并返回状态信息
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText)
            }
        }
        //发送请求
        xhr.send()
    }
}
//实例化
ajax.get("users.json" , function (response) {
console.log(response)
})
ajax.post("users.json" , "" , function (response) {
    console.log(response)

})