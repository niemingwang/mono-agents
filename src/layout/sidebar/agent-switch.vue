<template>
	<router-link to="/use">
		<div class="h-52px flex items-center justify-between">
			<div class="flex items-center gap-2">
				<SvgIcon icon="vite" :size="28" />
				<span class="text-16px font-500">{{ title }}</span>
			</div>
			<SvgIcon icon="chevron-expand-outline" :size="20" color="#bbb" />
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { SvgIcon } from '@/ui/svg-icon'

defineOptions({ name: 'AgentSwitch' })

defineProps({
	title: {
		type: String,
		default: 'Agent Switch'
	}
})
</script>

<style scoped></style>
