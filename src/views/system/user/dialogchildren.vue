<template>
  <div>
    <el-dialog v-model="qwe.dialogFormVisible" title="新增用户" :before-close="handleClose">
      <el-form :model="form" :rules="rules" ref="FormRef" class="formlog">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickName">
          <el-input v-model="form.nickName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-tree-select
            placeholder="请选择部门"
            v-model="value2"
            lazy
            :props="cacheData"
            :load="load"
            :cache-data="cacheData"
          />
        </el-form-item>

        <el-form-item label="岗位" :label-width="formLabelWidth">
          <el-select v-model="form.jobs" multiple placeholder="请选择" style="width: 240px">
            <el-option v-for="(item, index) in volumedata" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="form.denger">
            <el-radio label="男" value="男" />
            <el-radio label="女" value="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.gender">
            <el-radio label="激活" value="true" />
            <el-radio label="禁用" value="false" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <div class="role">
            <el-select v-model="form.roles" multiple placeholder="请选择" style="width: 240px">
              <el-option v-for="(item, index) in rolesdata" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { queryvolume, queryroles, queryTree, queryErtree } from '../../../api/api'
const qwe = defineProps({
  dialogFormVisible: Boolean
})
const emit = defineEmits()
const FormRef = ref<FormInstance>()
interface RuleForm {
  username: string
  roles: []
  phone: string
  nickName: string
  jobs: []
  gender: string
  enabled: boolean
  email: string
  dept: {}
}
const form = reactive<RuleForm>({
  username: '',
  roles: [],
  nickName: '',
  jobs: [],
  gender: '',
  enabled: false,
  email: '',
  dept: {},
  phone: ''
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在3-5', trigger: 'blur' }
  ],
  nickName: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 5, message: '长度在2-5', trigger: 'blur' }
  ],
  phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
})

const setTree = () => {}
// const cacheData = ref([])
// const value2 = ref(5)
let id = 0
const cacheData = ref([{ value2: 5, label: 'lazy load node5' }])
const props = {
  label: 'label',
  children: 'children',
  isLeaf: 'isLeaf'
}
const load = (node, resolve) => {
  queryTree().then((res) => {
    console.log(res, 'bumennnnnnnnnnnn')
    cacheData.value = res.content.id
    console.log(cacheData, '231232221')
  })
  if (node.isLeaf) return resolve([])
}

setTree()

const handleClose = () => {
  emit('close')
}
const formLabelWidth = '80px'
// 获取岗位
const volumedata = ref([])
const params = reactive({
  page: 0,
  size: 99999,
  enabled: true
})
const setvolume = () => {
  queryvolume(params).then((res) => {
    volumedata.value = res.content
  })
}
setvolume()
// 获取角色
const rolesdata = ref([])
const setroles = () => {
  queryroles().then((res) => {
    console.log(res, '角色')
    rolesdata.value = res
  })
}
setroles()
</script>

<style lang="scss" scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.formlog {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .el-form-item {
    width: 48%;
  }
}
</style>
