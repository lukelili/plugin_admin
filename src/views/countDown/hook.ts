import { reactive, computed } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

interface IState {
	showTime: string
	minute: number
	ms: number
}

const DEFULT_TIME = '00:30'
// 倒计时间
const state: IState = reactive({
	showTime: DEFULT_TIME,
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
				setShowTime(m)
			} else {
				clearTimer()
			}
		}, 1000)
	}
	function onResetCountDown() {
		state.minute = 30000
		state.showTime = DEFULT_TIME
		clearTimer()
	}
	function onTimeChange() {
		setShowTime(state.minute)
		clearTimer()
	}
	function clearTimer() {
		clearInterval(timer)
		timer = null
	}
	function setShowTime(ms: number) {
		state.showTime = dayjs(ms).format('mm:ss')
	}
	return {
		state,
		onStartCountDown,
		onResetCountDown,
		onTimeChange,
		clearTimer,
	}
}
