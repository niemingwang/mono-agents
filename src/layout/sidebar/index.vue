<template>
	<Transition name="fade">
		<aside v-show="!collapsed" class="w-200px p-2 fixed top-0 left-0 bottom-0 flex flex-col bg-elevated">
			<AgentSwitch :title="navMeta.title" />
			<nav class="flex-1">
				<component :is="nav" />
			</nav>
			<UserAvatar class="h-52px" />
		</aside>
	</Transition>
</template>

<script setup lang="ts">
import useCollapsed from '@/composables/use-collapsed.ts'
import AgentSwitch from '@/layout/sidebar/agent-switch.vue'
import UserAvatar from '@/layout/sidebar/user-avatar.vue'

defineOptions({ name: 'LayoutSidebar' })

const route = useRoute()

const navMeta = computed(() => route.matched[1].meta)

const nav = computed(() => navMeta.value.nav || null)

const { collapsed } = useCollapsed()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
