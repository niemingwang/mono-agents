import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: 'gen',
		name: 'gen',
		component: () => import('@/agents/gen-x/views/gen/index.vue')
	}
]

export default routes
