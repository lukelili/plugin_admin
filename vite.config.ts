import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

const pathResolve = (dir: string): any => {
	return resolve(__dirname, './', dir)
}

export default defineConfig({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
			inject: 'body-last' || 'body-first',
			customDomId: '__svg__icons__dom__',
		}),
		ElementPlus({}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': pathResolve('src'),
			components: pathResolve('src/components'),
		},
	},
	base: './',
	build: {
		assetsDir: 'static',
	},
	server: {
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/dfdcb909418cae662050b8993ef89675/admin',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/upload': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/upload/, ''),
			},
		},
	},
})
