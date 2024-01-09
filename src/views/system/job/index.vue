<template>

  <div class="jobgl">
    <searchild @onSubmit="onSubmit"></searchild>
    
    <div class="btn">
      <el-button type="primary" :icon="Plus">新增</el-button>
      <el-button type="success" :icon="EditPen">修改</el-button>
      <el-button type="danger" :icon="Delete">删除</el-button>
      <xlsx :tableData="tableData" :tableTitle="tableTitle" :title="title" @sx="setjob"></xlsx>
    </div>

    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="名称" width="120" />
      <el-table-column property="jobSort" label="排序" width="120" />
      <el-table-column label="状态" show-overflow-tooltip>
        <template #default="scope">
          <el-switch v-model="scope.row.enabled" />
        </template>
      </el-table-column>
      <el-table-column property="createTime" label="创建日期" show-overflow-tooltip />
      <el-table-column label="操作" show-overflow-tooltip fixed="right">
        <template #default="scope">
          <el-button type="primary" :icon="EditPen" circle />
          <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination class="fy" current-page.size="formInline.page+1" page-size.size="formInline.size"
      :page-sizes="[2, 5, 8, 10]" layout="total, sizes, prev, pager, next, jumper" :total="total"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script setup lang="ts">
import { queryjobstatus, queryjob } from '@/api/api'
import {
  Plus,
  Delete,
  EditPen,
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import searchild from '@/components/searchild.vue'
import { ElTable } from 'element-plus'
import xlsx from '@/components/xlsx.vue'
const formInline=reactive({
name:'',
createTime:[],
enabled:'',
page:0,
size:10
})
const tableTitle={
  name:'名称',
  jobSort:'排序',
  enabled:'状态',
  createTime:'创建日期'
}
const title='岗位管理'
const total = ref(0)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const tableData= ref([])
const jobst=ref([])
const params = reactive({
  page: 0,
  size: 10
})
// 搜索
const onSubmit=()=>{
formInline.page=0
setjob()
}
// 重置
const rest=()=>{

}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  formInline.size = val
  setjob()
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  formInline.page = val-1
  console.log( formInline.page);
  setjob()
}
const setjobstatus = () => {
  queryjobstatus(params).then(res => {
    console.log(res, 'jobs');
    jobst.value=res.content
  })
}
setjobstatus()

// 获取岗位表格信息
const setjob = () => {
  queryjob(formInline).then(res => {
    console.log(res, 'job');
    tableData.value = res.content
    total.value = res.totalElements
  })
}
setjob()


</script>

<style lang="scss" scoped>
.jobgl {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.btn {
  margin: 20px;
  display: flex;
  align-items: center;
}

.fy {
  margin-top: 10px;
}
</style>