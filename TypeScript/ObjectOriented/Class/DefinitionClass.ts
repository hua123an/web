//在TypeScript中定义类和EC6中一样，唯一不同的是，ts可以加入修饰属性
class Phone {
    private brandName : string
    private cpu : string
    private width : number
    private height : number
//     构造对象
    constructor(brandName : string , cpu : string , width : number , height : number) {
        this.cpu = cpu
        this.brandName = brandName
        this.height = height
        this.width = width
    }
//     构造函数
    private takeCall() : void{
        console.log("打电话给......")

    }
}