<template>
  <div>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
				<img :src="userInfo.userinfo.avatarName" alt="">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">布局设置</el-dropdown-item>
          <el-dropdown-item command="b">个人中心</el-dropdown-item>
          <el-dropdown-item command="e" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from '../store'
const userInfo: any = useInfoStore()
import { removeToken } from '../utils/auth'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(userInfo.userinfo,'pinia');

const handleCommand = (command: string | number | object) => {
  if (command === 'e') {
    ElMessageBox.confirm('确定注销并退出系统吗?', 'Warning', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        removeToken()
        router.push('/login')
        ElMessage.success('退出登录成功')
        ElMessage({
          type: 'success',
          message: 'Delete completed'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
