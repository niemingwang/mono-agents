<template>
	<a-config-provider :theme="{ components: { Button: { borderRadius: 20 } } }">
		<a-dropdown
			placement="topLeft"
			:menu="{ items, selectable: true }"
			:trigger="['click']"
			@open-change="onChange"
			@menu-click="onMenuClick"
		>
			<a-button color="default" :variant="isOpen ? 'filled' : 'text'">
				<a-space>
					<slot></slot>
					<DownOutlined />
				</a-space>
			</a-button>
			<template #labelRender="item">
				<div class="flex items-center justify-between gap-3">
					{{ item.label }}
					<CheckOutlined v-if="modelValue === item.key" />
				</div>
			</template>
		</a-dropdown>
	</a-config-provider>
</template>

<script setup lang="ts">
import { CheckOutlined, DownOutlined } from '@antdv-next/icons'
import type { MenuItemType } from 'antdv-next'

defineOptions({ name: 'DropdownSelect' })
const emit = defineEmits(['change'])

defineProps<{
	items: MenuItemType[]
}>()

const modelValue = defineModel({
	type: String
})
function onMenuClick(val: any) {
	modelValue.value = val.key
	emit('change', val)
}

const isOpen = ref(false)
function onChange(open: boolean) {
	isOpen.value = open
}
</script>

<style scoped></style>
