<style>
h2{
text-align:center;
color:red;
}
p{
color:aqua;;
font-size:18px;
}
</style>
<h2>LevelSelector</h2>
<p>
选择器        &nbsp;&nbsp;&nbsp;     在jQuary里的表示方式<br>
$('ancestor descendant')        $('div span')，表示匹配div元素下面的span元素<br>
$('parent > child')             $('div > span'),表示匹配div元素下面元素名为span的子元素<br>
$('prev + next')                $('div + span'),表示匹配div元素的下一个span元素<br>
$('prev~siblings')              $('div~span'),表示匹配div元素后面的元素名为span的所有元素<br>
</p>