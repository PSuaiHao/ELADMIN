<template>
  <div>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="用户名" property="username" width="120"> </el-table-column>
      <el-table-column property="nickName" label="昵称" width="120" />
      <el-table-column property="gender" label="性别" show-overflow-tooltip />
      <el-table-column label="电话" property="phone" width="120"> </el-table-column>
      <el-table-column label="邮箱" property="email" width="180"> </el-table-column>
      <el-table-column label="部门" property="dept.name" width="120"> </el-table-column>
      <el-table-column label="状态" width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.enabled" style="--el-switch-off-color: #ff4949" />
        </template>
      </el-table-column>
      <el-table-column label="创建日期" width="180" property="createTime"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" :icon="Edit" />
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="取消"
            title="确定要删除数据吗?"
            @confirm="confirmEvent(scope.row.id)"
          >
					<template #reference>
						<el-button type="danger" :icon="Delete" />
					</template>
				</el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElTable } from 'element-plus'
defineProps(['tableData'])
const emit=defineEmits()
interface User {
  date: string
  name: string
  address: string
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
	console.log(val,'vallll');

}
const confirmEvent=(id:number)=>{
	 emit('del',id)
}
</script>

<style lang="scss" scoped></style>
