<template>
	<el-card title="表单组件">
		<popupCreateForm @handleConfirm="handleConfirm" />
		<renderForm :formState="formState" />
	</el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import renderForm from './renderForm/renderForm.vue'
import popupCreateForm from './popupCreateForm/popupCreateForm.vue'
import { IformState } from '@/typeings/Imodel'
import { cloneDeep } from 'lodash'

const formState = ref<IformState>({
	attrs: {
		'label-position': 'top',
	},
	inputDatas: [],
	functions: [],
	events: [],
})

function handleConfirm(state: IformState) {
	formState.value = cloneDeep(state)
}
</script>
<style lang="scss" scoped></style>
