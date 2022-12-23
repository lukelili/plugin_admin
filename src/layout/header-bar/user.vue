<template>
	<div class="user">
		<el-button circle @click="settingStore.toggleDrawer">
			<template #icon>
				<el-icon>
					<svg-icon name="peeling" />
				</el-icon>
			</template>
		</el-button>
		<setting />
	</div>
</template>
<script setup lang="ts">
import setting from './setting.vue'
import { useSettingStore } from '@/store/setting'
const settingStore = useSettingStore()
</script>
