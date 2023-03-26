/*在TypeScript中，undefined和nul，两者都有各自的数据类型，分别为null和undefined。和void类似，他们本身作用不是很大
* */
//除了可以赋值给自身之外，不可以赋给其他值
let u : undefined = undefined
let n : null = null
//在默认情况下，null和undefined是所有类型的子类型。就是说可以把null和undefined赋值给number类型的变量
//当指定了--strictNullChecks标记时，null和undefined只能赋值给void和它们本身。它能避免很多问题。想传入一个string、null或undefined，可以使用联合类型string | null | undefined