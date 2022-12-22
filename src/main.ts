import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Router
import router from './router'
app.use(router)
// Store
import { createPinia } from 'pinia'
app.use(createPinia())
// SVG-ICON
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

import './permission'
import './style/index.scss'

// Grid
import VueGridLayout from 'vue-grid-layout'
app.use(VueGridLayout)

app.mount('#app')
