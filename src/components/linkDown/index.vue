<template>
	<div class="link-down" v-if="route.meta.star">
		<h3 class="title">{{ route.name }}</h3>
		<el-alert v-if="route.meta.warning" :message="route.meta.warning" banner />
		<div class="link">
			<a class="star" href="javascript:void(0)" @mouseover="onStart">
				<svg-icon name="star" />
				<span>{{ route.meta.star }}</span>
			</a>
			<a class="github" :href="(route.meta.github as string)" target="_blank" @mouseover="onMouseover($event, '.github')">
				<img :src="githubIcon" alt="github" />
			</a>
			<a class="npm" :href="(route.meta.npm as string)" target="_blank" @mouseover="onMouseover($event, '.npm')">
				<img :src="npmIcon" alt="npm" />
			</a>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import npmIcon from '@/assets/npm_icon.webp'
import githubIcon from '@/assets/github_icon.png'
import anime from 'animejs/lib/anime.es.js'
const onStart = (e: any) => {
	anime({
		targets: '.star',
		scale: [1.5, 1],
	})
}
const onMouseover = (e: any, el: string) => {
	anime({
		targets: el,
		translateY: ['6px', '0'],
	})
}

const route = useRoute()
</script>
<style lang="scss" scoped>
.link-down {
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-radius: 6px;
	background-color: #fff;
	.title {
		margin-bottom: 0;
		margin-right: 10px;
	}
	.ant-alert {
		flex: 1;
	}
	.link {
		display: flex;
		align-items: center;
		a {
			display: flex;
			align-items: center;
			font-size: 30px;
			margin-left: 10px;
			img {
				width: 40px;
				height: 40px;
				border-radius: 6px;
			}
			span {
				font-size: 14px;
				font-weight: bold;
				margin-left: 4px;
			}
		}
		a:last-child {
			margin-left: 6px;
		}
	}
}
</style>
