import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default function useMobile() {
	const breakpoints = useBreakpoints(breakpointsTailwind)

	const mobile = computed(() => {
		return breakpoints.between('sm', 'md').value || breakpoints.smallerOrEqual('sm').value
	})

	return {
		mobile
	}
}
