<style>
h2{
text-align:center;
color:red;
}
p{
color:aqua;
font-size:20px
}
</style>
<h2>CommonEvents</h2>
<p>
方法名                   触发条件                           描述<br>
click(fn)               鼠标触发                           每一个匹配元素的click(单击)事件<br>
dbclick(fn)             鼠标触发                           每一个匹配元素的dbcilck(双击)事件<br>
mouseover(fn)           鼠标触发                           每一个匹配元素的mouseout光标移入事件 <br>
mousedown(fn)           鼠标触发                           每一个匹配元素的mousedown光标点击后事件<br>
mouseup(fn)             鼠标触发                           每一个匹配元素的mouseup点击弹起事件<br>
mouseout(fn)            鼠标触发                           每一个匹配元素的mouseout光标移出事件<br>
mousemove(fn)           鼠标触发                           每一个匹配元素的mousemove光标移动事件<br>
mouseenter(fn)          鼠标触发                           每一个匹配元素的mouseenter光标穿过事件<br>
mouseleave(fn)          鼠标触发                           每一个匹配元素的mouseleave光标穿出事件<br>
keydown(fn)             键盘触发                           每一个匹配元素的keydown键盘按下事件<br>
keyup(fn)               键盘触发                           每一个匹配元素的keyup键盘按下弹起事件<br>
keypress(fn)            键盘触发                           每一个匹配元素的keypress键盘按下事件<br>
unload(fn)               文档                             当卸载本页面时绑定的一个要执行的函数<br>
resize(fn)               文档                             触发每一个匹配元素的resize文档改变大小事件<br>
scroll(fn)               文档                             触发每一个匹配元素的scroll滚动条拖动事件<br>
focus(fn)                表单                             触发每一个匹配元素的focus焦点激活事件<br>
blur(fn)                 表单                             触发每一个匹配元素的blur焦点丢失事件<br>
select(fn)               表单                             触发每一个匹配元素的select文本选定事件<br>
change(fn)               表单                             触发每一个匹配元素的change值改变事件<br>
submit(fn)               表单                             触发每一个匹配元素的subnit提交表单事件<br>
</p>
<p>
.mouseover()和.mouseout()表示光标移入或者移出的时候触发；<br>
.mouseenter()和.mouseleave()表示光标穿过和穿出时候触发;<br>
.mouseenter()和.mouseleave()表示光标穿过或者穿出子元素不会触发；<br>
.mouseover()和.mouseout()则会触发


</p>