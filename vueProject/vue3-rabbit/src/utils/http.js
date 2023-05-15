import axios from 'axios'

// 创建axios实例
const httpIntance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpIntance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpIntance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default httpIntance