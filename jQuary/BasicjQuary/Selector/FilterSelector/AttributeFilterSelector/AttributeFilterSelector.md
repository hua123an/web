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
<h2>AttributeFilterSelector</h2>
<p>
选择器                                      在jQuary中的表现形式
[attribute]                                $('div[id]'),选取拥有id的所有div元素<br>
[attribute = value]                        $('div[id = test]'),选取id为test的div元素<br>
[attribute != value]                       $('div[id != test]'),选取id不是test的div元素，但是此时没有id属性的div元素也会被选取<br>
[attribute ^ = value]                      $('div[id ^= test]'),选取id为test的开始的div元素<br>
[attribute $ = value]                      $('div[id $= test]'),选取id为test结束的div元素<br>
[attribute * = value]                      $('div[id * = test]'),选取id为test的所有div元素<br>
[attribute1,attribute2]                    $('div[id][title $ = test]'),选取拥有id属性，title含有test的div元素<br>




</p>