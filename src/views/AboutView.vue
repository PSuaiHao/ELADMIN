<template>
  <div class="about">
    <!-- <h1>名字:{{ userInfo.name }}</h1>
		<p>年龄:{{ userInfo.age }}</p> -->
		<!-- <el-button @click="changeAge">方式一、修改pinia中的值</el-button>
		<el-button @click="change">方式二、用$patch修改pinia中的值</el-button>
		<el-button @click="change1">方式三、用$patch函数修改pinia中的值</el-button>
		<el-button @click="change5">方式五、在pinia中修改pinia中的值</el-button> -->
		<el-button @click="reset">$reset</el-button>
  </div>
</template>
<script lang="ts" setup>
import {useInfoStore} from '@/store/index'
const userInfo = useInfoStore()
import { storeToRefs } from 'pinia'
// 方式一
// const changeAge=()=>{
// 	userInfo.age++
// 	userInfo.name="你好"
// }
// 方式二
// const change = () => {
//     userInfo.$patch({
//       age: 11,
//       name: '𝒆𝒅.'
//     })
//   }
 // 方式三
//  const change1 = () => {
// 		userInfo.$patch((state)=>{
// 			state.age=25
// 			state.name='王五'
// 		})
//   }
	// 方式五
	// const change5=()=>{
	// 	userInfo.setAge()
	// }

	//结构赋值
	// 用refs结构出来的是响应式的
	// let {name, age} = storeToRefs (userInfo)
	const fuzhi=()=>{
        // name='ooo'
				// age=50
	}
	// 重置
	let reset = () => {
    userInfo.$reset()
  }

</script>
<style lang="scss" scoped>
</style>
