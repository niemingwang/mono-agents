import { createRouter, createWebHistory } from 'vue-router'
import { DramaStudio, GenX } from '@/agents'
import setupGuard from '@/router/guard.ts'

const mergedAgentRoutes = [...DramaStudio.routes, ...GenX.routes]
function getAgentList() {
	return mergedAgentRoutes.filter((route) => route.path !== '/' && route.children?.length)
}

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '',
			redirect: '/use'
		},
		{
			path: '/use',
			component: () => import('@/views/use/index.vue')
		},
		{
			path: '/',
			component: () => import('@/layout/index.vue'),
			children: mergedAgentRoutes
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/'
		}
	]
})

router.beforeResolve(async (to) => {
	const currentRoute = to.matched[to.matched.length - 1]
	if (currentRoute.children && currentRoute.children.length > 0) {
		const firstChildRoute = currentRoute.children[0]
		const resolved = router.resolve(firstChildRoute)
		return {
			...resolved,
			replace: true
		}
	}
})

setupGuard(router)

export { router, getAgentList }
