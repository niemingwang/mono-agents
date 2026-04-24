<template>
	<a-select
		v-model:value="modelValue"
		:options="items"
		:mode="mode"
		:styles="{ popup: { root: { width: 'fit-content' } } }"
		placement="topLeft"
		:variant="variant"
	>
		<template #optionRender="{ option }">
			<span style="display: flex; justify-content: space-between; gap: 8px">
				<span>{{ option.label }}</span>
				<span>
					<CheckOutlined v-if="modelValue === option.value" style="font-size: 12px" />
				</span>
			</span>
		</template>
	</a-select>
</template>

<script setup lang="ts">
import { CheckOutlined } from '@antdv-next/icons'
import type { SelectProps } from 'antdv-next'

defineOptions({ name: 'CommonSelect' })

defineProps<{
	items: any[]
	variant?: SelectProps['variant']
	mode?: SelectProps['mode']
}>()

const modelValue = defineModel<any>({ default: null })
</script>

<style scoped></style>
