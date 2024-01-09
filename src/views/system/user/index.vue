<template>
  <div class="use">
    <div class="buttom">
      <el-row :gutter="23" justify="space-between">
        <el-col :span="5">
          <div class="grid-content ep-bg-purple">
            <!-- 树形结构 -->
            <treechild @djtree="djtree"></treechild>
          </div>
        </el-col>

        <el-col :span="18">
          <div class="grid-content ep-bg-purple">
            <searchchild @namesearch="namesearch"></searchchild>
            <div class="fl">
              <div class="btn">
                <el-button type="primary" :icon="Plus" @click="dialogFormVisible = true">新增</el-button>
                <el-button type="success" :icon="EditPen">修改</el-button>
                <el-button type="danger" :icon="Delete">删除</el-button>
                <el-button type="warning" :icon="Download">导出</el-button>
                <el-button type="primary" :icon="RefreshLeft">重置密码</el-button>
              </div>
              <div class="right">
                <el-button-group class="ml-4">
                  <el-button style="border: 1px solid #ccc" color="#ffffff" :icon="Search" />
                  <el-button type="default" :icon="Refresh" />
                  <el-button type="default" :icon="Grid" />
                </el-button-group>
              </div>
            </div>

            <!-- 表格 -->
            <usertabel :tableData="tableData" @del="del"></usertabel>
            <!-- 分页 -->
            <div class="paging">
              <pagechild :totalElements="totalElements" :params="params" @handleCurrentChange="handleCurrentChange"
                @handleSizeChange="handleSizeChange">
              </pagechild>
            </div>
          </div>
        </el-col>
      </el-row>
      <dialogchildren @close="close" :dialogFormVisible="dialogFormVisible"></dialogchildren>
    </div>
  </div>
</template>

<script lang="ts" setup>
import usertabel from './usertabel.vue'
import searchchild from './searchchild.vue'
import treechild from './treechild.vue'
import pagechild from './pagechild.vue'
import dialogchildren from './dialogchildren.vue'
import { ref, reactive } from 'vue'
import { Plus, Delete, EditPen, RefreshLeft, Download, Search, Refresh, Grid } from '@element-plus/icons-vue'
import { querynametable, querydel } from '../../../api/api'

// 右侧表格
const tableData = ref([])
const totalElements = ref(0)
const params = reactive({
  page: 0,
  size: 10,
  blurry: '',
  enabled: true,
  createTime: [],
  deptId: ''
})
const djtree = (val: number) => {
  params.deptId = val
  settable(params)
}
//右侧表格接口
const settable = () => {
  querynametable(params).then((res) => {
    console.log(res, 'tabkkkkk');
    tableData.value = res.content
    totalElements.value = res.totalElements
  })
}
settable()
const handleCurrentChange = (val: number) => {
  params.page = val
  settable()
}
const handleSizeChange = (val: number) => {
  params.size = val
  settable()
}
// 表格搜索
const namesearch = (val) => {
  params.blurry = val.blurry
  params.enabled = val.enabled
  params.createTime = val.createTime
  settable(params)
}
// 弹出框
const dialogFormVisible = ref(false)
const close = () => {
  dialogFormVisible.value = false
}
// 删除单个数据
const del = (val: number) => {
  querydel([val]).then(res => {
    settable()
  })
}
</script>
<style lang="scss" scoped>
.use {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
}

.btn {
  margin-bottom: 10px;
}
.fl{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
