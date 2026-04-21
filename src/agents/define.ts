import { type RouteMeta, type RouteRecordRaw } from 'vue-router'

export interface AgentConfig {
	title?: string
	desc?: string
	basePath: string
	nav: Component
	meta?: RouteMeta
	routes: RouteRecordRaw[]
}

export function defineAgent<const T extends AgentConfig>(config: T): T {
	return {
		...config,
		routes: resolveAgentRoutes(config)
	}
}

export function resolveAgentRoutes(config: AgentConfig): RouteRecordRaw[] {
	const { basePath, routes: subRoutes } = config
	const path = basePath.startsWith('/') ? basePath.slice(1) : basePath
	return [
		{
			path: path,
			name: path,
			component: () => import(`@/agents/${path}/layout/index.vue`),
			meta: {
				title: config.title,
				desc: config.desc,
				nav: config.nav
			},
			children: subRoutes
		}
	]
}
