const DEFAULT_COLLAPSED = JSON.parse(localStorage.getItem('collapsed') ?? 'false')

const collapsed = ref<boolean>(DEFAULT_COLLAPSED)

function toggleCollapsed(val?: boolean) {
	collapsed.value = val ?? !collapsed.value
	localStorage.setItem('collapsed', collapsed.value.toString())
}

export default function useCollapsed() {
	return {
		collapsed,
		toggleCollapsed
	}
}
