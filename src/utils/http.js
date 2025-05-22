import axios from 'axios'

// 创建axios实例
const http = axios.create({
    baseURL: 'https://apifox.com/apidoc/shared-c05cb8d7-e591-4d9c-aff8-11065a0ec1de',
    timeout: 5000
})

// axios请求拦截器
// 一般会进行token身份验证等
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
// 一般进行错误的统一提示，token失效的处理等
http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default http