import { defineAgent } from '@/agents/define.ts'
import { GenXMenu } from '@/agents/gen-x/layout'
import { subRoutes } from '@/agents/gen-x/router'

const GenX = defineAgent({
	title: 'GenX',
	desc: 'AI 生成图片、视频...',
	basePath: '/gen-x',
	nav: GenXMenu,
	routes: subRoutes
})

export default GenX
