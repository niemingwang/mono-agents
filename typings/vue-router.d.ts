import type { RouteComponent } from 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		desc?: string
		nav: RouteComponent
		[key: string]: unknown
	}
}

export {}
