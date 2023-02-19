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
<h2>BasicFilterSelector</h2>
<p>
选择器                       在jQuary中表现方式
:first                       $('div:first'),选取所有div元素中的第一个元素<br>
:last                        $('div:last'),选取所有div元素的最后一个元素<br>
:not(selector)               $("div:not('p')"),选取div元素中不是p元素的其他元素
:even                        $('div:even'),选取div元素下面的所有偶元素<br>
:odd                         $('div:odd'),选取div元素下面的所有奇元素<br>
:eq(index)                   $('div:eq(0)'),选取div元素下面的第0个元素，索引从0开始<br>
:gt(index)                   $('div:gt(0)'),选取div元素下面索引大于1的元素<br>
:lt(index)                   $('div:lt(2)'),选取div元素下面索引小于2的元素<br>
:header                      $(':header'),选取header下面的所有元素<br>
:animated                    $('div:animated'),选取正在执行动画的div元素<br>






</p>