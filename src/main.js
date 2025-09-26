import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
//./同级 ../上一级 @/根目录 src
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'


const app= createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// createApp(App).use(router).mount('#app')

