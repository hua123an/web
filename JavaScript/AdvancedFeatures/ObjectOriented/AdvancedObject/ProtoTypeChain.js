/*原型链
* 访问一个对象的属性时，先在自身属性中查找，找到返回，如果没有，再沿着_proto_这条链向上查找，找到返回，如果最终没有找到，此时会返回undefined，这就是原型链，又称隐式原型链，它的作用就是查找对象的属性和方法
* Object对象是所有对象的祖宗，Object的原型对象指向null，也就是没有原型对象
*
*
*
*
*
* */