<template>
	<header class="header">
		<el-button type="primary" circle plain :icon="icon" @click="settingStore.toggleCollapsed" />
		<user />
	</header>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useSettingStore } from '@/store/setting'
import { Fold, Expand } from '@element-plus/icons-vue'
import user from './user.vue'

const settingStore = useSettingStore()

const icon = computed(() => (settingStore.isCollapsed ? Expand : Fold))
</script>
<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 14px;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
}
</style>
