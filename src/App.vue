<template>
	<a-config-provider :wave="{ disabled: true }" :theme="themeToken">
		<a-app>
			<router-view></router-view>
		</a-app>
	</a-config-provider>
</template>

<script setup lang="ts">
import useTheme from '@/style/theme'

const { themeToken } = useTheme()
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
