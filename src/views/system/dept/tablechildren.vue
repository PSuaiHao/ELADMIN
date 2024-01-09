<template>
    <div>
        <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="deptSort" label="排序" />
      <el-table-column prop="address" label="状态" >
        <template #default="scope">
            <el-switch v-model="scope.row.enabled" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建日期" />
      <el-table-column prop="address" label="操作">
        <template #default="scope">
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script setup lang="ts">
import {querydept} from '@/api/api'
import {ref,reactive} from 'vue'
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
const params=reactive({
    page:0,
    size:10,
    sort:'id,desc'
})
interface User {
  id: number
  name: string
  hasChildren?: boolean
  children?: User[]
}
const tableData = ref<User[]>([])

const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
    console.log(row,'111');
    console.log(treeNode,'222');
    
    
  setTimeout(() => {
    resolve([])
  }, 1000)
}

const setdept=()=>{
    querydept(params).then(res=>{
        console.log(res,'bueb');
        tableData.value=res.content
    })
}
setdept()
</script>

<style lang="scss" scoped>

</style>