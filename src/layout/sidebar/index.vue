<template>
	<aside class="w-200px p-2 flex flex-col bg-#F9F9F9">
		<AgentSwitch :title="navMeta.title" />
		<nav class="flex-1">
			<component :is="nav" />
		</nav>
		<UserAvatar class="h-52px" />
	</aside>
</template>

<script setup lang="ts">
import AgentSwitch from '@/layout/sidebar/agent-switch.vue'
import UserAvatar from '@/layout/sidebar/user-avatar.vue'

defineOptions({ name: 'LayoutSidebar' })

const route = useRoute()

const navMeta = computed(() => route.matched[1].meta)

const nav = computed(() => navMeta.value.nav || null)
</script>

<style scoped></style>
