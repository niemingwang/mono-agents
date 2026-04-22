<template>
	<div class="p-2 mt-auto w-full">
		<a-button class="w-full">
			升级到专业版
			<a-tag variant="outlined" color="gold">Pro</a-tag>
		</a-button>
		<a-dropdown :menu="{ items }" :trigger="['click']">
			<a-button type="text" size="large" block>
				<a-space class="w-full" align="baseline">
					<a-avatar :style="{ backgroundColor: '#7265e6', verticalAlign: 'middle' }" size="small">nmw</a-avatar>
					<a-typography-text>niemingwang_</a-typography-text>
				</a-space>
			</a-button>
		</a-dropdown>
	</div>
</template>

<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'

defineOptions({ name: 'UserAvatar' })

const items: MenuItemType[] = [
	{
		key: '1',
		label: '1st menu item'
	},
	{
		key: '2',
		label: '2nd menu item (disabled)'
	},
	{
		key: '3',
		label: '3rd menu item (disabled)'
	},
	{
		key: '4',
		danger: true,
		label: 'a danger item'
	}
]
</script>

<style scoped></style>
