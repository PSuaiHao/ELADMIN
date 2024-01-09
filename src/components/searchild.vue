<template>
    <div class="one">
      <el-input style="width: 14%" v-model="params.name" placeholder="输入名称或者邮箱搜索" />
      <el-date-picker
        style="width: 20%; margin: 0 10px"
        type="daterange"
        unlink-panels
        v-model="params.createTime"
        range-separator=":"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      />
      <el-select
        style="width: 8%"
        class="m-2"
        placeholder="状态"
        size="default"
        v-model="params.enabled"
      >
        <el-option
          v-for="item in statusList"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        style="margin-left: 10px; color: white"
        color="#13ce66"
        :icon="ElementPlusIconsVue.Search"
        @click="onsubmit"
        >搜索</el-button
      >
      <el-button style="color: white" color="#ffba00" :icon="ElementPlusIconsVue.RefreshLeft"
        >重置</el-button
      >
    </div>
    <div class="bun">
      <div class="left">
        <el-button
          @click="add"
          style="background-color: #1890ff; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.Plus /></el-icon>新增</el-button
        >
        <el-button style="background-color: #13ce66; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.EditPen /></el-icon>修改</el-button
        >
        <el-button style="background-color: #ff4949; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.Delete /></el-icon>删除</el-button
        >
        <el-button style="background-color: #ffba00; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.Download /></el-icon>导出</el-button
        >
      </div>
      <div class="rigth">
        <button>
          <el-icon><ElementPlusIconsVue.Search /></el-icon>
        </button>
        <button>
          <el-icon><ElementPlusIconsVue.Refresh /></el-icon>
        </button>
        <button>
          <el-icon><ElementPlusIconsVue.Grid /></el-icon>
        </button>
      </div>
    </div>
</template>

<script lang="ts" setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { emit } from 'process';
import { ref, defineEmits,reactive } from 'vue'
const emits = defineEmits()
const params=reactive({
  name:'',
  createTime:'',
  enabled:''
})

const onsubmit=()=>{
  
}

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
</script>

<style lang="scss" scoped>
</style>
    