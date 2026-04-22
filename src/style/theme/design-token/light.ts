import type { ThemeConfig } from 'antdv-next'

const lightTheme: ThemeConfig = {
	token: {
		// colorBgContainer: '#FFFFFF',
		colorBgElevated: '#F9F9F9',
		borderRadius: 8,
		colorText: '#333'
	},
	components: {
		Button: {
			paddingInline: 16
		},
		Dropdown: {
			motionDurationMid: '0.12s',
			borderRadiusSM: 8,
			controlItemBgActive: 'rgba(0,0,0,0)'
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
			colorFillAlter: 'transparent',
			itemColor: 'rgba(51,51,51,0.9)',
			itemSelectedColor: '#333',
			itemSelectedBg: 'rgba(0,0,0,0.06)',
			itemActiveBg: 'rgba(0,0,0,0.1)'
		}
	}
}

export default lightTheme
