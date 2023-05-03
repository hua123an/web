/*
* Check the object whether create by ref
* */
import {isRef, reactive, ref, toRef} from "vue"
export default {
    setup() {
        // ref
        const status = 0;
        const obj = ref({name : 'huaan'})
    //     toRef
        const obj2 = reactive({name : 'zhangsan'})
        const name = toRef(obj2 , "name")

        console.log(isRef(obj))
        console.log(isRef(status))
        console.log(isRef(name));
        // create return method
        return {}
    }
}


