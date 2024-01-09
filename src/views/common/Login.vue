<template>
	<div class="login">
		<el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="demo-ruleForm"
    status-icon
  >
	<h2>ELADMIN 后台管理系统</h2>
    <el-form-item  prop="username">

      <el-input v-model="ruleForm.username" />
    </el-form-item>

		<el-form-item  prop="password">
      <el-input v-model="ruleForm.password" type="password"/>
    </el-form-item>

		<el-form-item  prop="code">
			<div class="img">
				<el-input v-model="ruleForm.code" placeholder="验证码"/>
			<img :src="ruleForm.img" alt="">
			</div>

    </el-form-item>

		<el-form-item>
			<el-checkbox v-model="ruleForm.rememberMe" style="margin:0 0 25px 0;">
        记住我
      </el-checkbox>
		</el-form-item>
		<el-form-item>
			<div class="btn">
				<el-button type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
			</div>

    </el-form-item>
		</el-form>

	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import {RuleForm} from '@/utils/defind'
import { querycode ,querylogin} from '@/api/api';
import {encrypt} from '@/utils/rsaEncrypt'
import {setToken} from '@/utils/auth'
import {useInfoStore} from '../../store/index'
const router=useRouter()
const userInfo = useInfoStore()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username:'admin',
	password:'123456',
	code:'',
	rememberMe:false,
	uuid: '',
	img:''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
	password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
	code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ],
})
const setcode=()=>{
  querycode().then(res=>{
		// @ts-ignore
		let {img ,uuid}=res
		ruleForm.uuid=uuid
		ruleForm.img=img
	})
}
setcode()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
			// @ts-ignore
			ruleForm.password=encrypt(ruleForm.password)
			querylogin(ruleForm).then(res=>{
				console.log(res,'res');
				userInfo.$patch((state)=>{
					// @ts-ignore
					state.userinfo=res.user.user
				})
				// @ts-ignore
				setToken(res.token)

				router.push('/')
			})
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="scss" scoped>
.login{
	width: 100vw;
	height: 100vh;
	background-image: url(../../assets/background.webp);
	display: flex;
	align-items: center;
	justify-content: center;
	h2{
		text-align: center;
		margin-bottom: 20px;
	}
}
.demo-ruleForm{
	width: 30%;
	background-color: #fff;
	border-radius: 5px;
	padding: 20px;
	.btn{
		width: 100%;
		.el-button{
			width: 100%;
		}
	}
	.img{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.el-input,img{
			width: 48%;
		}
	}
}
</style>