<style>
h2{
text-align:center;
color:red;
}
p{
font-size:20px;
color:aqua;
}
</style>
<h2>InsertNode</h2>
<p>
方法                 功能                         示例代码                                               显示结果                <br>       
append()         向元素内部追加内容             $("p").append("<b>hello</b>")                      <p><b>hello</b></p>          <br>
appendTo()       将内容追加到指定元素           $("<b>hello</b>").appendTo("p")                    <p><b>hello</b></p>          <br>                             
prepend()        在指定元素内容前增加新元素      $("<p>world</p>").prepend("<b>hello</b>")          <P><b>hello</b>world</P>     <br>
prependTo()      将内容增加到指定元素内容前      $("<p>world</p>").prependTo("<b>hello</b>")        <p><b>hello</b>world</p>     <br>
after()          在匹配元素之后加入内容         $("<p>world</p>").after("<b>hello</b>")            <p>world</p><b>hello</b>      <br>                        
insertAfter()    将内容加入匹配元素之后         $("<b>hello</b>").insertAfter("<p>world</p>")      <P>world</P><b>hello</b>       <br>
before()         在匹配元素之前加入内容         $("<p>world</p>").before("<b>hello</b>")           <b>hello</b><p>world</p>       <br>
insertBefore()   将内容加入匹配元素之前         $("<b>hello</b>").insertBefore("<p>world</p>")     <b>hello</b><p>world</p>       <br>              




</p>