import {defineStore} from "pinia";
import {ref} from "vue";
// define function initialization data and function
export const useCounterStore = defineStore("counter" , () => {
    const count = ref(0)
    const changeData = () => {
        count.value++
    }
//     use getter 
//     return data and function
    return {
        count ,
        changeData
    }
})


