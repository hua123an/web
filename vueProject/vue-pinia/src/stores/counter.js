<<<<<<< HEAD
// stores/counter.js
import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import axios from "axios";
export const useCounterStore = defineStore("counter" , () => {
    const count = ref(0)
    // define function about change data by sync
    function changeData(){
        count.value++
    }
    // achievement getter
   const doubleCount =  computed(() => count.value * 2)
    //     define function about change  data by async
//      define  list save data
    const API_URL = 'http://geek.itheima.net/v1_0/channels'
    const list =   ref([])
//      define async function  get api
    const returnThis  = async() => {
        const res = await axios.get(API_URL)
        //      get data
//      change data to  list
        list.value = res.data.data.channels
    }
    return  {
        count,changeData,doubleCount,returnThis,list
    }

})
=======
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


>>>>>>> 08ed3c7ff15e653925c1eb1051590576f21d0f3a
