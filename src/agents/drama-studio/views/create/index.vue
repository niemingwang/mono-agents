<template>
	<div>create-center</div>
	<a-button v-for="item in ThemeTypes" :key="item" type="primary" @click="setTheme(item)"> {{ item }}</a-button>
	<a-button @click="toggleCollapsed(!collapsed)">折叠</a-button>

	<br />
	<br />
	<br />
	<br />
	<br />
	<dropdown-select v-model="val" :items="items">{{ val }}</dropdown-select>
</template>

<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import useCollapsed from '@/composables/use-collapsed.ts'
import useTheme from '@/style/theme'
import DropdownSelect from '@/ui/dropdown-select/src/index.vue'

defineOptions({ name: 'Create' })

const { setTheme, ThemeTypes } = useTheme()
const { collapsed, toggleCollapsed } = useCollapsed()

const val = ref('GPT-5.4')
const items: MenuItemType[] = [
	{
		key: 'GPT-5.4',
		label: 'GPT-5.4'
	},
	{
		key: 'GPT-5.3-Codex',
		label: 'GPT-5.3-Codex'
	}
]
</script>

<style scoped></style>
