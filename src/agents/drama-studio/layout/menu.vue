<template>
	<a-menu
		v-model:selected-keys="selectedKeys"
		:default-selected-keys="selectedKeys"
		:items="items"
		mode="inline"
		:inline-indent="12"
		@click="handleClick"
	>
		<template #iconRender="item">
			<SvgIcon v-if="item.icon" :icon="item.icon" />
		</template>
	</a-menu>
</template>

<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import SvgIcon from '@/ui/svg-icon/src/index.vue'

defineOptions({ name: 'DramaStudioMenu' })

const route = useRoute()

const selectedKeys = ref([route.name as string])
const items: MenuItemType[] = [
	{
		key: 'create',
		label: '创作',
		type: 'group',
		children: [
			{ key: 'create', label: '剧本生短剧', icon: 'drama' },
			{ key: 'gen-img', label: '图片生成', icon: 'gen-img' },
			{ key: 'gen-video', label: '视频生成', icon: 'gen-video' }
		]
	},
	{
		key: 'mine',
		label: '我的',
		type: 'group',
		children: [
			{ key: 'project', label: '项目', icon: 'project' },
			{ key: 'asset', label: '资产', icon: 'assets' }
		]
	}
]

function handleClick() {}
</script>

<style scoped></style>
