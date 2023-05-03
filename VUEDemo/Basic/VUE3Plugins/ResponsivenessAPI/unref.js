/*
* If props is a ref function,return value,else return itself
* */
import {ref , unref} from "vue";
export default {
    setup(){
        const status = 0
        const obj = ref({name : "huaan"})

        console.log(unref(status));

        console.log(unref(obj))
        return{}
    }
}