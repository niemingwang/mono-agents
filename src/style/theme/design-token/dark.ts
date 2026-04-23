import type { ThemeConfig } from 'antdv-next'
import { theme } from 'antdv-next'

const darkTheme: ThemeConfig = {
	algorithm: theme.darkAlgorithm,
	token: {
		// colorTextHeading: '#fff',
		// colorBgContainer: '#181818',
		// colorPrimary: '#1d1d1f',
		colorBgElevated: '#1f1f1f',
		colorSplit: 'rgba(0,0,0,0.8)',
		borderRadius: 8
	},
	components: {
		Button: {
			paddingInline: 16,
			primaryShadow: 'transparent',
			defaultShadow: 'transparent',
			colorFill: 'rgba(255,255,255,0.16)'
		},
		Dropdown: {
			boxShadowSecondary: '0 0 0 1px rgba(255,255,255,0.16)',
			motionDurationMid: '0.12s',
			borderRadiusSM: 8,
			controlItemBgActive: 'rgba(0,0,0,0)',
			controlItemBgActiveHover: 'rgba(255,255,255,0.16)',
			colorPrimary: '#fff'
		},
		Select: {
			motionDurationMid: '0.08s',
			controlItemBgActive: 'rgba(0,0,0,0)',
			borderRadiusSM: 8
		},
		Popover: {
			motionDurationMid: '0.08s'
		},
		Menu: {
			itemHeight: 36,
			collapsedWidth: 48,
			groupTitleFontSize: 12,
			itemBg: 'transparent',
			colorSplit: 'transparent',
			itemColor: 'rgba(255,255,255,0.85)',
			itemSelectedBg: 'rgba(255,255,255,0.16)',
			itemActiveBg: 'rgba(255,255,255,0.2)',
			itemSelectedColor: '#fff'
		}
	}
}

export default darkTheme
