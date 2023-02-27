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
<h2>EventObject</h2>
<p>
event常见对象属性<br>
属性名称                                               描述<br>
type                                               获取这个事件的事件类型，例如：click<br>
target                                             获取绑定事件的DOM元素<br>
data                                               获取事件调用时传入的额外参数<br>
relatedTarget                                      对于鼠标事件，标示触发事件时离开或者进入的DOM元素<br>
currentTarget                                      冒泡前的当前触发事件的DOM对象，等同于this<br>
pageX/pageY                                        鼠标事件中，事件相对于页面原点的水平/竖直坐标<br>
result                                             上一个事件处理函数返回的值<br>
timeStamp                                          事件发生时的时间戳<br>
which                                              获取鼠标的左、中、右键(1,2,3)，或者获取键盘按键<br>







</p>