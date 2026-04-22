import darkTheme from '@/style/theme/design-token/dark.ts'
import lightTheme from '@/style/theme/design-token/light.ts'

const ThemeTypes = ['light', 'dark'] as const
type ThemeType = (typeof ThemeTypes)[number]

const DEFAULT_THEME: ThemeType = (localStorage.getItem('theme') as ThemeType) || 'light'

const themeTokenMap = {
	light: lightTheme,
	dark: darkTheme
}
const theme = ref(DEFAULT_THEME)
const themeToken = computed(() => themeTokenMap[theme.value])
if (theme.value === 'dark') {
	document.body.style.backgroundColor = '#1f1f1f'
} else {
	document.body.style.backgroundColor = '#fff'
}

const setTheme = (newTheme: ThemeType) => {
	if (!ThemeTypes.includes(newTheme)) {
		return
	}
	theme.value = newTheme
	localStorage.setItem('theme', newTheme)

	if (theme.value === 'dark') {
		document.body.style.backgroundColor = '#1f1f1f'
	} else {
		document.body.style.backgroundColor = '#fff'
	}
}

const useTheme = () => {
	return {
		ThemeTypes,
		theme,
		themeToken,
		setTheme
	}
}

export default useTheme
