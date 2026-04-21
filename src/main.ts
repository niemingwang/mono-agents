import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import { setupRouter } from '@/router'
import { setupPinia } from '@/store'
// @ts-ignore
import 'virtual:svg-icons-register'

function setup() {
	const app = createApp(App)

	setupRouter(app)

	setupPinia(app)

	app.mount('#app')
}

setup()
