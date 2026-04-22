<template>
	<LayoutSidebar />
	<main
		:style="{ marginLeft: mobile ? '0' : collapsed ? '0' : '200px' }"
		class="bg-container min-h-screen transition-[margin] pos-relative border-1px border-l-solid border-split"
	>
		<router-view />
	</main>
</template>

<script setup lang="ts">
import useCollapsed from '@/composables/use-collapsed.ts'
import useMobile from '@/composables/use-mobile.ts'
import LayoutSidebar from '@/layout/sidebar/index.vue'

defineOptions({
	name: 'AppMain'
})

const { collapsed } = useCollapsed()
const { mobile } = useMobile()
</script>

<style scoped></style>
