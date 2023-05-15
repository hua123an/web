import "@/styles/common.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// axios测试
import {getConnect} from "@/apis/testApi";
getConnect().then(res => {
    console.log(res)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
