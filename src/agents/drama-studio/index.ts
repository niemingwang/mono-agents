import { defineAgent } from '@/agents/define.ts'
import { DramaStudioMenu } from '@/agents/drama-studio/layout'
import { subRoutes } from '@/agents/drama-studio/router'

const DramaStudio = defineAgent({
	title: 'Genx',
	desc: 'AI 短剧制作',
	basePath: '/drama-studio',
	nav: DramaStudioMenu,
	routes: subRoutes
})

export default DramaStudio
