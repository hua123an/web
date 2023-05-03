/*
* Check object whether create by reactive or readonly proxy
* */
import {reactive ,isProxy , readonly} from "vue"
export default{
    setup(){
        const status = 0
        const obj = reactive({name : "huaan"})
        const obj2 = readonly({name : "zhangsan"})

        console.log(isProxy(status))
        console.log(isProxy(obj2))
        console.log(isProxy(obj))
    }



}