import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'
import {getToken} from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component:layout,
		redirect:'/dashboard',
		children:[
			{
				path: 'system/user',
				name: 'user',
				component: () => import('../views/system/user/index.vue')
			},{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('../views/dashboard/index.vue')
			},{
				path: 'system/dept',
				name: 'dept',
				component: () => import('../views/system/dept/index.vue')
			},{
				path: 'system/job',
				name: 'job',
				component: () => import('../views/system/job/index.vue')
			},{
				path: 'system/role',
				name: 'role',
				component: () => import('../views/system/role/index.vue')
			},{
				path:'system/timing',
				name:'timing',
				component:()=>import('../views/system/timing/index.vue')
			},{
				path:'system/dict',
				name:'dict',
				component:()=>import('../views/system/dict/index.vue')
			},{
				path:'components/tinymce',
				name:'tinymce',
				component:()=>import('../views/components/tinymce/index.vue')
			}
		]
  },{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/common/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,form,next)=>{
	let token=getToken()
	if(!token && to.path!=='/login'){
		next('/login')
	}else if(token && to.path=='/login'){
		next('/')
	}else{
		next()
	}
})

export default router
