<template>
	<svg aria-hidden="true" :style="{ color: color, width: `${size}px`, height: `${size}px` }">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'SvgIcon' })

const props = withDefaults(
	defineProps<{
		icon: string
		color?: string
		size?: number
	}>(),
	{
		color: 'currentColor',
		size: 16
	}
)

const symbolId = computed(() => `#icon-${props.icon}`)
</script>
