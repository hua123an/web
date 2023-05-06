/*
v-model指令在表单<select>,<textarea>,<input>元素上创建双向数据绑定,他会根据控件类型自动选取正确的方法来跟新元素.
v-model的本质就是语法糖.基本只是用来监听数据,做一些特殊处理
v-model在内部为不同的输入元素使用不同属性并抛出不同的事件:
text和textarea元素使用value属性和input事件
checkbox和radio使用checked属性和change事件
select字段将value作为props,并将change作为事件
*/
