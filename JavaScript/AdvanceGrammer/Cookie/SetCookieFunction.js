/*
* Cookie值设置函数
* @parm cname      cookie名称
* @parm cvalue     cookie值
* @parm exdays     过期天数
* */
function setCookie(cname , cvalue , exdays) {
    var d = new Date()

    d.setTime(d.getTime() + (exdays * 24 * 60 * 1000))

    var expires = "expires=" + d.toString()

    document.cookie = canme + "+" + cvalue + ";" + expires

}