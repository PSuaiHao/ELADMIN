import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia'
const state = createPinia()
import './icon/iconfont.css'

createApp(App).use(router).use(ElementPlus).use(state).mount('#app')