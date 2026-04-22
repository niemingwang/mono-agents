<template>
	<!--	<router-link to="/use">-->
	<div class="px-4 h-52px flex items-center justify-between">
		<div class="flex items-center gap-2">
			<SvgIcon icon="vite" :size="28" />
			<span class="text-16px font-500">{{ title }}</span>
		</div>
		<a-button type="text" @click="toggleCollapsed(!collapsed)">
			<template #icon>
				<SvgIcon icon="collapse" />
			</template>
		</a-button>
	</div>
	<!--	</router-link>-->
</template>

<script setup lang="ts">
import useCollapsed from '@/composables/use-collapsed.ts'
import { SvgIcon } from '@/ui/svg-icon'

defineOptions({ name: 'AgentSwitch' })

defineProps({
	title: {
		type: String,
		default: 'Agent Switch'
	}
})

const { collapsed, toggleCollapsed } = useCollapsed()
</script>

<style scoped></style>
