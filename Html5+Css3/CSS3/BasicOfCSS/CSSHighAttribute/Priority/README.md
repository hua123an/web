[//]: # (Height)
There are three common types of selectors.
The tag,class,id.
As the same tag,we use different selectors.As the result of
weight then priority displayed at this time.
The weight:id(100)>class(10)>tag(1)

[//]: # (Inheritance)
Easy to see,there is a parent tag.And then can inherit it.
The parent element has a weight of 0 in the children.
In other words,the attribute value is overwritten by quilt element.

[//]: # (In-line element attribute than pther)
When a label uses multiple selectors,in-line attribute take precedence.

[//]: # (When the weight is same,follow the proximity principle)
If a link style is imported(被引用) at this point,then an in-line style
is imported.The in-line style is preferred(首选的).
[//]: # (For example)
[//]: # (<link href="style.css" type="text/css">)
[//]: # (<style>)
[//]: # ({ css attribute })
[//]: # (</style>)
In this case,the in-line mode is preferred.
[//]: # (By add !important)
By add !important attribute directly specifies the highest level of the attribute.



