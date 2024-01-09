<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="$route.path"
      text-color="#fff"
      router
    >
      <el-menu-item index="/dashboard">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>
			<el-menu-item-group v-for="item,index in menus" v-show="item.redirect!=='noredirect'" >
				<el-menu-item  :index="item.children[0].meta.path">
					<el-icon><setting /></el-icon>
					{{ item.children[0].meta.title }}
				</el-menu-item>
			</el-menu-item-group>

      <el-sub-menu v-for="(item, index) in menus" :index="item.path" v-show="item.redirect==='noredirect'">
					<template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
        <el-menu-item v-for="(o, i) in item.children" :index="item.path+'/'+o.path">
          <el-icon><setting /></el-icon>
          <span>{{ o.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Menu as  Location, Setting } from '@element-plus/icons-vue'
defineProps(['menus'])
</script>

<style lang="scss" scoped></style>
