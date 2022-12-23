import { defineStore } from 'pinia'

export const useSettingStore = defineStore('settingStore', {
	state: () => ({
		isCollapsed: false,
		isDrawer: false,
	}),
	actions: {
		toggleCollapsed() {
			this.isCollapsed = !this.isCollapsed
		},
		toggleDrawer() {
			this.isDrawer = !this.isDrawer
		},
	},
})
