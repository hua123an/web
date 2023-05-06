/*在JavaScript中，date对象表示的是时间，使用时需要先创建一个date对象，输出时直接调用date的方法就行了
* */
//创建一个date对象
var date = new Date()
console.log(date);
//输出当前日期对象的年份
console.log(date.getFullYear())
//输出当前对象的月份
console.log(date.getMonth())
//输出当前对象的日数
console.log(date.getDate())
//输出当前对象的小时数
console.log(date.getHours())
//输出当前对象的分钟
console.log(date.getMinutes())
//输出当前对象的秒数
console.log(date.getSeconds());
//返回当前对象的毫秒
console.log(date.getMilliseconds())