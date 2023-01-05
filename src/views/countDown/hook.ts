import { reactive, computed } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

interface IState {
	showTime: string
	minute: number
	ms: number
}

// 倒计时间
const state: IState = reactive({
	showTime: '00:00',
	minute: 30000,
	ms: 0,
})

export function useComputed() {
	const timeArray = computed(() => state.showTime.split(':'))
	return {
		timeArray,
	}
}

export function useCountDown() {
	let timer: any = null
	function onStartCountDown() {
		clearTimer()
		let m = state.minute
		timer = setInterval(() => {
			if (m !== 0) {
				m = m - 1000
				state.showTime = dayjs(m).format('mm:ss')
			} else {
				clearTimer()
			}
		}, 1000)
	}
	function onResetCountDown() {
		state.minute = 30000
		clearTimer()
	}
	function clearTimer() {
		state.showTime = '00:00'
		clearInterval(timer)
		timer = null
	}
	return {
		state,
		onStartCountDown,
		onResetCountDown,
		clearTimer,
	}
}
