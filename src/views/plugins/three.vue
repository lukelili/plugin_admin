<template>
	<div id="webGl" class="webGl"></div>
</template>
<script setup lang="ts">
import { onMounted, computed, ComputedRef } from 'vue'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

onMounted(() => {
	setCamera()
	createBox()
	setRender()
	renderLoop()
})

const container = computed(() => document.querySelector('#webGl') as HTMLElement)

// 场景
const scene = new THREE.Scene()
// 相机
const camera = new THREE.PerspectiveCamera()
// 渲染器
const renderer = new THREE.WebGLRenderer({
	antialias: true,
})
// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
// 坐标轴
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

function setCamera() {
	camera.fov = 50
	camera.aspect = 1
	camera.near = 0.1
	camera.far = 1000
	camera.position.set(1, 1, 5)

	scene.add(camera)
}

function createBox() {
	const geometry = new THREE.CircleGeometry()
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
	const cube = new THREE.Mesh(geometry, material)
	scene.add(cube)
}

function setRender() {
	renderer.setSize(container.value.clientWidth, container.value.clientHeight)
	container.value.appendChild(renderer.domElement)
}

function renderLoop() {
	controls.update()
	renderer.render(scene, camera)
	requestAnimationFrame(renderLoop)
}
</script>
<style lang="scss" scoped>
.webGl {
	border: 2px solid red;
	border-radius: 6px;
}
</style>
