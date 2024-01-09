<template>
	<div>
	<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>角色列表</span>
  </div>
	<el-table
    ref="multipleTableRef"
    :data="list"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />=
    <el-table-column property="name" label="名称"/>
    <el-table-column property="dataScope" label="数据权限" show-overflow-tooltip />
    <el-table-column property="level" label="角色级别" show-overflow-tooltip />
    <el-table-column property="description" label="描述" show-overflow-tooltip />
    <el-table-column property="createTime" label="创建日期" show-overflow-tooltip />
		<el-table-column label="操作" >
      <template #default="scope">
				<el-button type="primary" :icon="ElementPlusIconsVue.Edit"  />
    		<el-button type="danger" :icon="ElementPlusIconsVue.Delete"  />
			</template>
    </el-table-column>
  </el-table>
</el-card>
	</div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { defineProps } from 'vue';
const proprs=defineProps({
	list:{
		type:Array,
	}
})
const handleSelectionChange=()=>{

}

</script>

<style lang="scss" scoped>

</style>