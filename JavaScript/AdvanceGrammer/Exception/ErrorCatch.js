/*
* 异常捕获
* 基本语法格式：
* */
try {
    //写入可能异发生异常的代码
}catch(error) {
    //发生错误时执行的代码
} finally {
    //无论错误与否都会执行的代码
}
/*
* 在异常捕获语句中，try一旦出现错误则其他语句不能执行，如果不出现错误，异常捕获语句不会执行。
* finally是一定会执行的语句，先执行try没有catch则会直接执行finally，有catch执行catch再执行catch。
* 当一个语句中，出现了catch就可以不用写finally，出现finally就不用写catch
* 实例代码：
* */
try {
    console.log(a)
    console.log("a未定义肯定报错");
} catch (error) {
    console.log(error)
}
finally {
    //无论是否出错都会执行
    console.log("finally执行了")
}