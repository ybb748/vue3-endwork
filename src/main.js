import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//const app = createApp(App)请求测试

app.use(createPinia())
app.use(router)

//getCategoryAPI().then(res => {请求测试
//    console.log(res);
//})
app.direction(imageEm)({
    mounted
})
app.mount('#app')
