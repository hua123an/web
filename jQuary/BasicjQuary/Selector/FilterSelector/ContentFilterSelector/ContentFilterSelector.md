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
<h2>ContentFilterSelector</h2>
<p>
选择器                       在jQuary中的表现形式
:contains(text)             $("div:contains('我')")，选取文本内容还有‘我‘的div元素<br>
:empty                      $('div:empty'),选取不包含子元素（包含文本内容的）div空元素<br>
:has(selector)              $('div:has(p)'),选取含有p元素的div元素<br>
:parent                     $('div:parent'),选取含有子元素（包含文本内容的）子元素<br>
</p>