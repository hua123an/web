﻿//嵌套函数
function fn() {
    function fn1(){
        console.log("我是嵌套")
    }
    fn1()
}
fn()
//嵌套函数只能在函数内部访问，嵌套函数只能在当前函数中访问，在当前函数外面无法访问，在当前函数外只能访问
