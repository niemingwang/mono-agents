<template>
	<div class="scroll-shadow" :style="containerStyle">
		<div ref="scrollRef" class="scroll-content" :class="directionClass" @scroll="onScroll">
			<slot />
		</div>

		<!-- 顶部柔和阴影 -->
		<div v-show="showTopShadow" class="shadow-top" :style="{ '--shadow-color': shadowColor }" />
		<!-- 底部柔和阴影 -->
		<div v-show="showBottomShadow" class="shadow-bottom" :style="{ '--shadow-color': shadowColor }" />
		<!-- 左侧柔和阴影 -->
		<div v-show="showLeftShadow" class="shadow-left" :style="{ '--shadow-color': shadowColor }" />
		<!-- 右侧柔和阴影 -->
		<div v-show="showRightShadow" class="shadow-right" :style="{ '--shadow-color': shadowColor }" />
	</div>
</template>

<script setup lang="ts">
import useTheme from '@/style/theme'

defineOptions({ name: 'ScrollShadow' })

type ScrollDirection = 'vertical' | 'horizontal'

interface Props {
	direction?: ScrollDirection
	height?: string | number
	width?: string | number
}

const { theme } = useTheme()
const shadowColor = computed(() => (theme.value === 'light' ? 'rgba(255,255,255,0.86)' : 'rgba(20,20,20,0.86)'))

const props = withDefaults(defineProps<Props>(), {
	direction: 'vertical',
	height: '100%',
	width: '100%'
})

const scrollRef = ref<HTMLDivElement | null>(null)
const showTopShadow = ref(false)
const showBottomShadow = ref(false)
const showLeftShadow = ref(false)
const showRightShadow = ref(false)

const containerStyle = computed(() => {
	const style: Record<string, any> = {}
	if (props.direction === 'vertical') {
		style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
	} else {
		style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
	}
	return style
})

const directionClass = computed(() => `scroll-${props.direction}`)

const onScroll = () => {
	const el = scrollRef.value
	if (!el) return

	if (props.direction === 'vertical') {
		showTopShadow.value = el.scrollTop > 2
		showBottomShadow.value = el.scrollTop + el.clientHeight < el.scrollHeight - 2
	} else {
		showLeftShadow.value = el.scrollLeft > 2
		showRightShadow.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 2
	}
}

onMounted(() => onScroll())
</script>

<style scoped lang="scss">
.scroll-shadow {
	position: relative;
	width: 100%;
	height: 100%;
}

.scroll-content {
	width: 100%;
	height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	scroll-behavior: smooth;
}

.scroll-vertical {
	overflow-y: auto;
	overflow-x: hidden;
}

.scroll-horizontal {
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}

/*
  HeroUI 同款超柔和阴影
  多层半透明渐变 + 低透明度 = 自然不刺眼
*/
.shadow-top,
.shadow-bottom,
.shadow-left,
.shadow-right {
	position: absolute;
	pointer-events: none;
	z-index: 10;
	transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	opacity: 0;
}

.shadow-top {
	opacity: 1;
	top: 0;
	left: 0;
	right: 0;
	height: 40px;
	background: linear-gradient(to bottom, var(--shadow-color), transparent 80%);
}

.shadow-bottom {
	opacity: 1;
	bottom: 0;
	left: 0;
	right: 0;
	height: 40px;
	background: linear-gradient(to top, var(--shadow-color), transparent 80%);
}

.shadow-left {
	opacity: 1;
	left: 0;
	top: 0;
	bottom: 0;
	width: 40px;
	background: linear-gradient(to right, var(--shadow-color), transparent 80%);
}

.shadow-right {
	opacity: 1;
	right: 0;
	top: 0;
	bottom: 0;
	width: 40px;
	background: linear-gradient(to left, var(--shadow-color), transparent 80%);
}
</style>
