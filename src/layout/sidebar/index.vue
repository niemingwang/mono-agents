<template>
	<DefineTemplate>
		<aside class="w-200px h-full flex flex-col bg-elevated">
			<AgentSwitch :title="navMeta.title" />
			<nav class="flex-1 overflow-hidden">
				<component :is="nav" class="p-2" />
			</nav>
			<UserAvatar />
		</aside>
	</DefineTemplate>

	<a-drawer
		v-if="mobile"
		:open="!collapsed"
		:styles="stylesObject"
		:size="200"
		:closable="false"
		placement="left"
		@close="toggleCollapsed(true)"
	>
		<ReuseTemplate />
	</a-drawer>

	<Transition v-else name="fade">
		<ReuseTemplate v-show="!collapsed" class="fixed left-0 top-0 right-0" />
	</Transition>
</template>

<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import type { DrawerProps } from 'antdv-next'
import useCollapsed from '@/composables/use-collapsed.ts'
import useMobile from '@/composables/use-mobile.ts'
import AgentSwitch from '@/layout/sidebar/agent-switch.vue'
import UserAvatar from '@/layout/sidebar/user-avatar.vue'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

defineOptions({ name: 'LayoutSidebar' })

const route = useRoute()

const navMeta = computed(() => route.matched[1].meta)

const nav = computed(() => navMeta.value.nav || null)

const { mobile } = useMobile()
const { collapsed, toggleCollapsed } = useCollapsed()

const stylesObject: DrawerProps['styles'] = {
	body: {
		padding: '0'
	}
}
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
