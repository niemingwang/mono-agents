import type { Router } from 'vue-router'

function setupGuard(router: Router) {
	// router.beforeEach((to, from, next) => {
	// 	// TODO: check if user is authenticated
	// 	next()
	// })
	//
	// router.afterEach((to, from) => {})
	console.log(router)
}

export default setupGuard
