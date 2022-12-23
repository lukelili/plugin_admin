<template>
	<el-drawer v-model="settingStore.isDrawer" title="布局配置" size="280px">
		<el-divider content-position="left">配色方案</el-divider>
		<ul class="theme-content">
			<li
				v-for="line in themeStore.themeList"
				class="theme-line"
				:style="{ backgroundColor: line.color }"
				:title="line.title"
				@click="themeStore.onSelectedTheme(line)"
			>
				<span v-for="item in line.children" :title="item.title" :style="{ backgroundColor: item.color }" class="color" />
			</li>
		</ul>
	</el-drawer>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/store/theme'
import { useSettingStore } from '@/store/setting'
const settingStore = useSettingStore()
const themeStore = useThemeStore()
</script>
<style lang="scss" scoped>
.theme-content {
	.theme-line {
		display: flex;
		justify-content: space-around;
		padding: 6px;
		margin-bottom: 10px;
		border-radius: 4px;
		cursor: pointer;
		.color {
			width: 24px;
			height: 24px;
			border-radius: 4px;
		}
	}
}
</style>
