<template>
    
        <el-button type="warning" @click="outExcel" :icon="Download">导出excel</el-button>
   
</template>

<script lang="ts" setup>
import {xlsx} from '@/utils/xlsx'
import {Download} from '@element-plus/icons-vue'
const emit=defineEmits()
const props=defineProps(['tableData','tableTitle','title'])
const outExcel=()=>{
      // this.jsonData是要导出的数据内容（表格里的内容），
        // this.listHander对应要导出内容的表头
        // 学生：指向的是excel文件名
        xlsx(props.tableData,props.tableTitle,props.title)
        emit('sx')
}
</script>

<style lang="scss" scoped>

</style>