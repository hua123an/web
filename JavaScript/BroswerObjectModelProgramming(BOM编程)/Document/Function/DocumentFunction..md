<style>
h2{
text-align:center;
color:red;
}
p{
color:aqua;
font-size:20px;
}
</style>
<h2>Document Function</h2>
<p>
常见的Document方法：<br>
.getElementById():根据元素id获取元素信息。<br>
.getElementByTagName():根据标签名称获取元素信息。<br>
.createElement():创建一个新元素。具体用法如下:<br>
var newElem = document.createElement("p")  //创建元素<br>
newElem.setAttribute("class","intro")     //为元素添加属性值<br>
document.body.appendChild(newElem)        //选择元素插入位置
close():关闭用document.open()方法打开的输出流，并显示选定数据
open():打开一个流(I/O,即Input/Output),收集来自于document.write()或document.writeln()方法的输出。<br>
write():向文档写入HTML表达式或者JavaScript表达式。<br>
writeln():和write()一样的作用，只是执行完一个表达式后自动换行。





</p>