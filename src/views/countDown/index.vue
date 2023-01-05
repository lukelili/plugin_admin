<template>
	<div class="count-down">
		<!-- <video class="bg_video" muted autoplay src="@/assets/bg_video.mp4"></video> -->
		<el-space class="set-time">
			<el-select v-model="state.minute" @change="clearTimer" sizi="small">
				<el-option v-for="item in options" :value="item.value" :label="item.label"></el-option>
			</el-select>
			<el-button type="primary" sizi="small" icon="VideoPlay" @click="onStartCountDown">开始倒计时</el-button>
			<el-button type="default" sizi="small" icon="RefreshLeft" circle @click="onResetCountDown"></el-button>
		</el-space>
		<div class="center-time">
			<div className="counter">
				<div class="block">
					<div class="time m">
						{{ timeArray[0] }}
					</div>
					<div class="tip">分</div>
				</div>
				<div class="block">
					<div class="time s">
						{{ timeArray[1] }}
					</div>
					<div class="tip">秒</div>
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
	color: #fff;
	.bg_video {
		width: 100%;
		height: 100%;
		background-color: #000;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.set-time {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
	.center-time {
		position: relative;
		z-index: 10;
		.counter {
			display: grid;
			grid-column-gap: 20px;
			grid-template-columns: repeat(2, 1fr);
			.block {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 10px;
				border: 1px solid #fff;
				text-align: center;
				.time {
					font-size: 180px;
					font-weight: bold;
				}
			}
		}
	}
}
</style>
