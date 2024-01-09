<template>
	<div>
		<div class="common-layout">
    <el-container>
      <el-aside width="200px">
				<!-- 左侧 -->
				<h4>
					<img src="../assets/logo.png" alt="">
					ADMIN-后台管理
				</h4>
				<asidemenu :menus="menus"></asidemenu>
			</el-aside>
      <el-container>
        <el-header>
					<div class="left"></div>
					<div class="right">
						<usechildVue></usechildVue>
					</div>
				</el-header>
        <el-main>
					<div class="nbj">
						<router-view></router-view>
					</div>

				</el-main>
      </el-container>
    </el-container>
  </div>
	</div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
import { querymenus } from '@/api/api';
import asidemenu from './asidemenu.vue'
import usechildVue from './usechild.vue';
const menus=ref<any>([])
const setmenus=()=>{
	querymenus().then(res=>{
		menus.value=res
		console.log(res,'menus');
	})
}
setmenus()
</script>

<style lang="scss" scoped>
.el-aside{
	height: 100vh;
	background-color: #304156;
	h4{
		color: #fff;
		margin: 10px auto;
	}
	img{
		width: 40px;
		height: 40px;
		vertical-align: middle;
	}
}
.el-header{
	width: calc(100vw - 200px);
	background-color: pink;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.el-main{
	width: calc(100vw - 200px);
	height: calc(100vh - 60px);
	overflow: scroll;
	margin: 0;
	padding: 0;
}
</style>