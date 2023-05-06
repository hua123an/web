(function (window) {
    var msg = "Hello,World"
    //闭包函数
    function doSomething() {
        console.log("doSomething" + msg.toUpperCase())
    }
    function do0therthing() {
        console.log("do0therthing" + msg.toLowerCase())
    }
    window.myModule = {
        doSomething : doSomething(),
        do0therthing : do0therthing()
    }
})(window)