

/*通过泛型类可以定义一个操作数据库的库，支持MySQL，MS-SQL-MongoDB,要求数据库都一样，都有增删改查功能
* */
//定义数据库的泛型类
class MySQLAccess <T> {
    //@ts-ignore
    add(info : T) : boolean {
        console.log(info);
        return true;
}
}
class MongoDBAccess <T> {
    add(info : T) : boolean {
        console.log(info);
        return true;
    }
}
//定义数据信息和数据库映射
class User {
    userName : string | undefined
    passWord : string | undefined
}
//创建新对象
var user = new User();
user.userName = "root";
user.userName = "wanwbgq12"
var md1 = new MySQLAccess <User>()
md1.add(user);
//想给Article增加数据，定义一个Article类和数据库映射
class Article {
    title : string | undefined
    desc : string | undefined
    status : string | undefined
    constructor(params : {
        title : string | undefined
        desc : string | undefined
        status? : string | undefined
    }) {
        this.title = params.title
        this.desc = params.desc
        this.status = params.status
    }
}
var article = new Article({
    title : "这是文章标题",
    desc : "这是文章描述",
    //@ts-ignore
    status : 1
})
var md2 = new MongoDBAccess();
md2.add(article)