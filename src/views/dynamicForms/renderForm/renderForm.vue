<template>
	<el-form ref="formRef" hide-required-asterisk status-icon :model="stateData.data" v-bind="formState?.attrs">
		<formItem :input-datas="props.formState.inputDatas" :data="stateData.data" />
		<el-form-item v-if="props.formState.functions">
			<template v-for="(btn, index) in props.formState.functions" :key="index">
				<el-button :type="btn.type" :icon="btn.icon" @click="onBtnFunction(btn.fun_type)">{{ btn.name }}</el-button>
			</template>
		</el-form-item>
	</el-form>
</template>
<script setup lang="ts">
import { withDefaults, reactive, defineProps, watch, ref, provide, computed } from 'vue'
import { IformState } from '@/typeings/Imodel'
import formItem from './formItem.vue'
import type { FormInstance } from 'element-plus'
import { useFormEvent, useWatchFun } from './hook'

interface PROPS {
	formState: IformState
}
const props = withDefaults(defineProps<PROPS>(), {
	formState: Object,
})

console.log(props)

const formRef = ref<FormInstance | undefined>()

const stateData: any = reactive({
	data: {},
})

provide(
	'events',
	computed(() => props.formState.events)
)

const [onBtnFunction] = useFormEvent(formRef)

const { setDeepVal } = useWatchFun()

watch(
	() => props.formState.inputDatas,
	(inputDatas) => {
		setDeepVal(inputDatas, stateData.data)
	},
	{
		deep: true,
		immediate: true,
	}
)
</script>
