<template>
	<div class="bootstrap-layout">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'BootstrapLayout' })
</script>

<style scoped>
/* 基础 */
.bootstrap-layout {
	height: 100%;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
}

/* sm ≥576px */
@media (min-width: 576px) {
	.bootstrap-layout {
		max-width: 540px;
	}
}

/* md ≥768px */
@media (min-width: 768px) {
	.bootstrap-layout {
		max-width: 720px;
	}
}

/* lg ≥992px */
@media (min-width: 992px) {
	.bootstrap-layout {
		max-width: 960px;
	}
}

/* xl ≥1200px */
@media (min-width: 1200px) {
	.bootstrap-layout {
		max-width: 1140px;
	}
}

/* xxl ≥1400px */
@media (min-width: 1400px) {
	.bootstrap-layout {
		max-width: 1320px;
	}
}
</style>
