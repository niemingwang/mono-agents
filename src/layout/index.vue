<template>
	<div class="flex h-screen">
		<LayoutSidebar />
		<a-divider vertical class="m-0 h-full" />
		<main class="flex-1">
			<router-view></router-view>
		</main>
	</div>
</template>

<script setup lang="ts">
import LayoutSidebar from '@/layout/sidebar/index.vue'

defineOptions({
	name: 'AppMain'
})
</script>

<style scoped></style>
