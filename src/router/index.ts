import type { App } from 'vue'
import { router } from '@/router/create-router.ts'

export function setupRouter(app: App) {
	app.use(router)
}
