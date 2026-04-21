import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: 'create',
		name: 'create',
		component: () => import('@/agents/drama-studio/views/create/index.vue')
	}
]

export default routes
