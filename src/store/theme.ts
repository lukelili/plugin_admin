import { defineStore } from 'pinia'

interface ITheme {
	color: string
	mark: string
	title: string
	children?: ITheme[]
}
interface IState {
	'--next-bg-primary': string
	'--el-color-primary': string
	'--next-bg-menu-bar': string
	'--next-bg-menu-bar-color': string
	'--next-bg-top-bar': string
	'--next-bg-top-bar-color': string
	themeList: ITheme[]
}

export const useThemeStore = defineStore('themeStore', {
	state: (): IState => ({
		'--next-bg-primary': '#fff',
		'--el-color-primary': '#117064',
		'--next-bg-menu-bar': '#064A41',
		'--next-bg-menu-bar-color': '#eaeaea',
		'--next-bg-top-bar': '#00796A',
		'--next-bg-top-bar-color': '#ffffff',
		themeList: [
			{
				color: '#fff',
				mark: '--next-bg-primary',
				title: '背景色',
				children: [
					{
						color: '#117064',
						mark: '--el-color-primary',
						title: '主题色',
					},
					{
						color: '#064A41',
						mark: '--next-bg-menu-bar',
						title: '菜单背景色',
					},
					{
						color: '#eaeaea',
						mark: '--next-bg-menu-bar-color',
						title: '菜单文本色',
					},
					{
						color: '#00796A',
						mark: '--next-bg-top-bar',
						title: '顶栏背景色',
					},
					{
						color: '#ffffff',
						mark: '--next-bg-top-bar-color',
						title: '顶栏文本色',
					},
				],
			},
			{
				color: 'rgb(51, 51, 51)',
				mark: '--next-bg-primary',
				title: '背景色',
				children: [
					{
						color: 'rgb(221, 107, 102)',
						mark: '--el-color-primary',
						title: '主题色',
					},
					{
						color: 'rgb(117, 154, 160)',
						mark: '--next-bg-menu-bar',
						title: '菜单背景色',
					},
					{
						color: 'rgb(230, 157, 135)',
						mark: '--next-bg-menu-bar-color',
						title: '菜单文本色',
					},
					{
						color: 'rgb(141, 193, 169)',
						mark: '--next-bg-top-bar',
						title: '顶栏背景色',
					},
					{
						color: 'rgb(234, 126, 83)',
						mark: '--next-bg-top-bar-color',
						title: '顶栏文本色',
					},
				],
			},
		],
	}),
	actions: {
		onSelectedTheme(theme: ITheme) {
			console.log(theme)
		},
	},
})
