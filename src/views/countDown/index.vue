<template>
	<div class="count-down">
		<video class="bg_video" muted autoplay src="@/assets/bg_video.mp4"></video>
		<div class="center-time">
			<el-space>
				<el-select v-model="state.minute" @change="clearTimer" sizi="small">
					<el-option v-for="item in options" :value="item.value" :label="item.label"></el-option>
				</el-select>
				<el-button type="primary" sizi="small" icon="VideoPlay" @click="onStartCountDown">开始倒计时</el-button>
				<el-button type="default" sizi="small" icon="RefreshLeft" @click="onResetCountDown">重置</el-button>
			</el-space>
			<div className="counter">
				<div class="block">
					<div class="m">
						{{ timeArray[0] }}
					</div>
					<div>分钟</div>
				</div>
				<div class="block">
					<div class="s">
						{{ timeArray[1] }}
					</div>
					<div>秒钟</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useCountDown, useComputed } from './hook'

const { timeArray } = useComputed()

const { state, clearTimer, onStartCountDown, onResetCountDown } = useCountDown()

const options = [
	{ value: 30000, label: '30秒' },
	{ value: 60000, label: '1分钟' },
	{ value: 120000, label: '2分钟' },
	{ value: 180000, label: '3分钟' },
	{ value: 240000, label: '4分钟' },
	{ value: 300000, label: '5分钟' },
	{ value: 360000, label: '6分钟' },
	{ value: 420000, label: '7分钟' },
	{ value: 480000, label: '8分钟' },
]
</script>
<style lang="scss" scoped>
.count-down {
	width: 100%;
	height: 100vh;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	.bg_video {
		width: 100%;
		height: 100%;
		background-color: #000;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.center-time {
		position: relative;
		z-index: 10;
	}
}
</style>
