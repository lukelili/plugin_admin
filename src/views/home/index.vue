<template>
	<div class="home"></div>
</template>
<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
</script>
<style lang="scss" scoped>
.home {
	display: grid;
	grid-template-columns: 1fr 460px;
	color: #333;
}
.ant-collapse {
	width: 460px;
}
</style>
