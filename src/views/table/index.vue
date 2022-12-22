<template>
	<div class="table-wrap">
		<el-card id="card-search" class="card-search">
			<el-form inline>
				<el-form-item label="名称搜索">
					<el-input placeholder="按名称搜索" />
				</el-form-item>
				<el-form-item label="时间搜索">
					<el-input placeholder="按时间搜索" />
				</el-form-item>
				<el-form-item>
					<el-button>重置</el-button>
					<el-button>搜索</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card class="card-table">
			<template #header>
				<span>表格一</span>
				<el-button-group>
					<el-button icon="Refresh" circle />
					<el-button icon="Download" circle />
					<el-button icon="Setting" circle />
				</el-button-group>
			</template>
			<div>
				<el-table :data="data" :height="tableHeight">
					<el-table-column type="selection" width="55" />
					<el-table-column type="index" label="序号" width="60" align="center" />
					<el-table-column prop="name" label="监测点名称" align="center"></el-table-column>
					<el-table-column prop="address" label="详细地址" align="center"></el-table-column>
					<el-table-column prop="phone" label="联系电话" align="center"></el-table-column>
					<el-table-column prop="run_time" label="运营时间" align="center"></el-table-column>
					<el-table-column prop="isAll" label="24小时制" align="center"></el-table-column>
					<el-table-column prop="scene" label="现场图" align="center"></el-table-column>
					<el-table-column label="操作" align="center">
						<el-button type="primary" size="small">修改</el-button>
						<el-button type="danger" size="small">删除</el-button>
					</el-table-column>
				</el-table>
			</div>
		</el-card>
		<el-card>
			<el-pagination />
		</el-card>
	</div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import elementResizeDetectorMaker from 'element-resize-detector'

const erd = elementResizeDetectorMaker()

const data: any[] = []

for (let i = 0; i < 100; i++) {
	data.push({
		name: '核酸检测点',
		address: '东湖渠东湖街道',
		phone: '64873546',
		run_time: '08:00-18:00',
		isAll: '是',
		scene: '',
	})
}

const searchHeight = ref<number>(52)

onMounted(() => {
	erd.listenTo(document.getElementById('card-search'), function (element: any) {
		const height = element.offsetHeight
		searchHeight.value = height
	})
})

const tableHeight = computed(() => {
	const height = 220 + searchHeight.value + 'px'
	return `calc(100vh - ${height})`
})
</script>
<style lang="scss" scoped>
.table-wrap {
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-row-gap: 10px;
}
.card-search {
	.el-form-item {
		margin-bottom: 0;
	}
	:deep .el-card__body {
		padding: 10px !important;
	}
}
.card-table {
	:deep .el-card__header {
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}
	:deep .el-card__body {
		padding: 0 !important;
	}
}
</style>
