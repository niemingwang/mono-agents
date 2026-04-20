import * as path from 'node:path'
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// @ts-ignore
import eslint from 'vite-plugin-eslint'
import progress from 'vite-plugin-progress'

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		Unocss(),
		progress(),
		eslint({
			cache: false,
			include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'src/**/*.jsx']
		}),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			dts: path.resolve(__dirname, 'typings/auto-imports.d.ts')
		}),
		Components({
			resolvers: [AntdvNextResolver()],
			dts: path.resolve(__dirname, 'typings/components.d.ts')
		})
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.css', '.scss'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@drama-studio': path.resolve(__dirname, 'src/agents/drama-studio/index.ts')
		}
	}
})
