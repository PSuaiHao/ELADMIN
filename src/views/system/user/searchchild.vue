<template>
  <div>
		<div class="bg">
      <div class="top">
        <el-input
                v-model="formInline.blurry"
                placeholder="输入部门名称或者邮箱搜索"
                @keyup.enter="onSubmit"
                style="width: 14%"
                clearable
              />            
              <el-date-picker
                v-model="formInline.createTime"
                style="width: 20%; margin: 0 10px"
                type="daterange"
                unlink-panels
                range-separator=":"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
								value-format="YYYY-MM-DD h:m:s"
                :shortcuts="shortcuts"
                :size="size"
              />           
              <el-select v-model="formInline.enabled" placeholder="状态" clearable @change="onSubmit" style="width: 10%">
                <el-option filterable v-for="(item, index) in userstatus" :label="item.label" :value="item.value" />
              </el-select>          
              <el-button type="success" :icon="Search" @click="onSubmit" class="btn">搜索</el-button>
              <el-button type="warning" :icon="Star" @click="rest">重置</el-button>
      </div>
 
             
           
         
		</div>
  </div>
</template>

<script lang="ts" setup>
import { Search, Star } from '@element-plus/icons-vue'
import { reactive, ref, defineEmits } from 'vue'
import { queryuserstatus } from '../../../api/api'
const emit = defineEmits()
const size = ref<'default' | 'large' | 'small'>('default')
const shortcuts = [
  {
    text: '本周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 5)
      return [start, end]
    }
  },
  {
    text: '上个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '前3个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
const formInline = reactive({
  blurry: '',
  enabled: '',
  createTime:[]
})
// 搜索表格
const onSubmit = () => {
	console.log(formInline.createTime,'createTime');
  emit('namesearch', formInline )
}
// 搜索树状列表



const userstatus = ref([])
const setusertatus = () => {
  queryuserstatus().then((res) => {
    userstatus.value = res.content
  })
}
const rest=()=>{
  formInline.blurry=''
	// formInline.createTime=[]
	formInline.enabled=''
	emit('namesearch',formInline)
}
setusertatus()
</script>

<style lang="scss" scoped>
.top{
  margin: 10px;
  .btn{
    margin-left: 10px;
  }
}
</style>
