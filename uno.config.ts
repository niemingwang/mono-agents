import { presetAntd } from '@antdv-next/unocss'
import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
	presets: [
		presetAttributify(),
		presetWind3(),
		presetAntd({
			prefix: 'a',
			allowUnprefixed: true,
			antPrefix: 'ant'
		})
	]
	// // ...UnoCSS options
	// theme: {
	//   colors: {
	//     primary: '#fed401',
	//     secondary: '#fff6c9',
	//     gray: '#f2f2f2'
	//   },
	//   breakpoints: {
	//     xs: '500px', // 小屏手机
	//     sm: '768px', // 小屏手机
	//     md: '992px', // 你自定义的 Pad/PC 断点（替代默认 768px）
	//     lg: '1200px', // 大屏PC
	//     xl: '1920px' // 2K屏
	//   },
	//   fontFamily: {
	//     // 你可以取任意名字，例如 pingfang、roboto、myfont
	//     sans: ['Inter', 'system-ui', 'sans-serif'], // 全局默认字体
	//     pingfang: ['PingFang SC', 'Helvetica Neue', 'Arial', 'sans-serif'],
	//     roboto: ['Roboto', 'Arial', 'sans-serif']
	//   }
	// },
	// shortcuts: {
	//   // 自定义列表样式：隐藏原生标记 + 伪元素自定义圆点
	//   'custom-list': 'list-none pl-0',
	//   'custom-list-item': 'relative pl-6 my-2',
	//   // 不同大小的圆点样式（可自定义尺寸/颜色）
	//   'dot-sm':
	//     'before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-black',
	//   'dot-md':
	//     'before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-black',
	//   'dot-lg':
	//     'before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black'
	// }
})
