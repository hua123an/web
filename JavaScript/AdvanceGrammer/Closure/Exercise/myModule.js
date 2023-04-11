function myModule() {
    //创建私有变量
    var mag = "Hello,World"
    //创建闭包函数
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase())
    }
    function do0therthing(){
        console.log("dootherthing()" + msg.toLowerCase())
    }
    //返回闭包对象
    return {
        doSomething : doSomething,
        do0therthing : do0therthing
    }
}