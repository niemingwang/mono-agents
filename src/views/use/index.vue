<template>
	<div class="w-full h-screen p-4 overflow-auto bg-#f9f9f9 flex justify-center">
		<a-space class="w-[800px] max-w-full" direction="vertical" wrap>
			<a-typography-title :level="3" class="font-500!">Agents</a-typography-title>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<router-link v-for="agent in getAgentList()" :key="agent.path" :to="agent.path">
					<a-card hoverable>
						<a-space direction="vertical" size="large">
							<a-space direction="vertical" :size="0">
								<a-typography-title :level="4" class="font-500!">{{ agent.meta?.title }}</a-typography-title>
								<a-typography-text type="secondary">{{ agent.meta?.desc }}</a-typography-text>
							</a-space>
							<a-typography-link>点击进入></a-typography-link>
						</a-space>
					</a-card>
				</router-link>
			</div>
		</a-space>
	</div>
</template>

<script setup lang="ts">
import { getAgentList } from '@/router/create-router.ts'

defineOptions({ name: 'UseAgent' })
</script>

<style scoped></style>
