<template>
	<div>create-center</div>
	<a-button v-for="item in ThemeTypes" :key="item" type="primary" @click="setTheme(item)"> {{ item }}</a-button>
	<a-button @click="toggleCollapsed(!collapsed)">折叠</a-button>
</template>

<script setup lang="ts">
import useCollapsed from '@/composables/use-collapsed.ts'
import useTheme from '@/style/theme'

defineOptions({ name: 'Create' })

const { setTheme, ThemeTypes } = useTheme()
const { collapsed, toggleCollapsed } = useCollapsed()
</script>

<style scoped></style>
