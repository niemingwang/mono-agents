<template>
	<div>create-center</div>
	<a-button v-for="item in ThemeTypes" :key="item" type="primary" @click="setTheme(item)"> {{ item }}</a-button>
	<a-button @click="toggleCollapsed(!collapsed)">折叠</a-button>

	<br />
	<br />
	<br />
	<br />
	<br />
	<common-select v-model="val" mode="tags" variant="borderless" :items="items" />
</template>

<script setup lang="ts">
import useCollapsed from '@/composables/use-collapsed.ts'
import useTheme from '@/style/theme'
import CommonSelect from '@/ui/common-select/src/index.vue'

defineOptions({ name: 'Create' })

const { setTheme, ThemeTypes } = useTheme()
const { collapsed, toggleCollapsed } = useCollapsed()

const val = ref([])
const items = [
	{
		value: '1',
		label: 'GPT-5.4'
	},
	{
		value: '2',
		label: 'GPT-5.3-Codex'
	}
]
</script>

<style scoped></style>
