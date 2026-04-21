import vueParser from 'vue-eslint-parser'
import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tslint from 'typescript-eslint'

const ignores = ['**/dist/**', '**/node_modules/**', '.*', '**/*.d.ts', '**/auto-imports.d.ts', '**/components.d.ts']

export default defineConfig([
	// 通用配置
	{
		ignores,
		files: ['src/**/*.{js,ts,tsx,jsx,mjs,cjs}'],
		extends: [eslint.configs.recommended, ...tslint.configs.recommended, eslintPluginPrettier],
		languageOptions: {
			ecmaVersion: 'latest', // ecma愈发支持版本
			sourceType: 'module', // 模块化类型
			parser: tslint.parser // 解析器
		},
		rules: {
			// 允许使用 @ts-ignore
			'@typescript-eslint/ban-ts-comment': 'off',
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			// 	对象结尾不加逗号
			'comma-dangle': ['warn', 'never']
		}
	},
	{
		ignores,
		files: ['src/**/*.vue'],
		extends: [...eslintPluginVue.configs['flat/recommended'], eslintPluginPrettier],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tslint.parser
			},
			globals: {
				...globals.browser
			}
		},
		rules: {
			'vue/multi-word-component-names': 'off'
		}
	}
])
