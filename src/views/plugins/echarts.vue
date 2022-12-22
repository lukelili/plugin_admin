<template>
	<div class="line">
		<chart-line :option="lineOption" />
	</div>
</template>
<script setup lang="ts">
import { provide, reactive } from 'vue'
import chartLine from './chart/line.vue'
import * as echarts from 'echarts'
import { min } from 'lodash'

import mockData from './mockData.json'

provide('echarts', echarts)

const minVal = min(Object.values(mockData.data).map((item) => Number(item.data[0].value[0])))

console.log(mockData.data)

for (const key in mockData.data) {
	const item = mockData.data[key]
	item.symbolSize = 0
	console.log(item)
}

const lineOption = reactive({
	xAxis: {
		type: 'value',
		min: minVal,
	},
	series: [...Object.values(mockData.data)],
})
console.log(lineOption)
</script>
<style lang="scss" scoped>
.line {
	width: 1200x;
	height: 600px;
}
</style>
