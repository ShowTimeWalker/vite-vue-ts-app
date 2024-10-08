import App from '@/App.vue'
import '@/style.css'
import * as AntdIcons from '@ant-design/icons-vue'
import router from '@/router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { Component, createApp } from 'vue'
import store from './store'

const app = createApp(App)

for (const iconName in AntdIcons) {
    if ((AntdIcons as Record<string, unknown>)[iconName] instanceof Function) {
        app.component(iconName, (AntdIcons as Record<string, Component>)[iconName])
    }
}

app.use(router)
app.use(Antd)
app.use(store)

app.mount('#app')
