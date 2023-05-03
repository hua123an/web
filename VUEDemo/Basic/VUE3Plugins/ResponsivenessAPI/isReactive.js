/*
* Check object whether create by reactive
*
* */
import {isReactive , reactive} from "vue";
export default{
    setup() {
        const status = 0
        const obj = {
            city : "xi'an"
        }
        console.log(isReactive(obj))
        console.log(isReactive(status))
        return{}
    }
}