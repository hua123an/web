/*
* WebStorage是本地存储的一种解决方式，浏览器兼容的本地存储方案只有cookie。但是作为浏览器唯一兼容的，其缺点也显而易见：
* 1.数据大小：作为存储容器，cookie的大小限制在4KB左右，基本就只能存储简单数据
* 2.安全性问题：由于在http请求中的cookie是明文传递的(https是加密传递的)，因此问题很大
* 3.网络负担：cookie会被附加在每个http请求中，在HttpRequest和HttpResponse的header种都是要被传递的，所以在无形之中增加了一些不必要的流量损失
*因此storage只处理cookie不涉及的范围，依赖于cookie作为本地存储
* */