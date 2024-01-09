import http from '../utils/httpRequest'
import * as TS from '@/utils/defind'
// 验证码
const querycode = () => http.get('/auth/code')
//  登录
const querylogin = (data: TS.Logindata) => http.post('/auth/login', data)
// 路由菜单
const querymenus = () => http.get('/api/menus/build')
// 左侧树一级菜单
const queryTree = () => http.get('/api/dept?sort=id,desc')
// 左侧二级菜单
const queryErtree = (id: number) => http.get(`/api/dept?sort=id,desc&pid=${id}`)
// 搜索左侧
const querysearchdata = (name: string) => http.get(`/api/dept?sort=id,desc&name=${name}`)
// 获取搜索区域的状态
const queryuserstatus = () => http.get('/api/dictDetail?dictName=user_status&page=0&size=9999')
// 搜索右侧表格
const querynametable = (paramsn: TS.Ntable) => http.get('/api/users' + '?', paramsn)
// 获取岗位
const queryvolume = (params: TS.Colume) => http.get('/api/job', params)
//获取角色
const queryroles = () => http.get('/api/roles/all')
// 角色管理
export const rolesAPI=(params:TS.rolesAPI)=>http.get(('/api/roles'),{params})
//系统管理角色管理的
export const lazyAPI=(params:{pid:number})=>http.get((`/api/menus/lazy`),params)
// 单个删除用户
const querydel=(params:[])=>http.delete('/api/users',params)
// 获取部门
const querydept=(params:TS.Paradept)=>http.get('/api/dept',params)
// 获取岗位状态
const queryjobstatus=(params:TS.Jobparams)=>http.get('/api/dictDetail?dictName=job_status',params)
// 获取岗位信息
const queryjob=(params:TS.Jobparams)=>http.get('/api/job?sort=jobSort%2Casc&sort=id%2Cdesc',params)
// 任务调度
const timingApi = (params:TS.Jobparams) => http.get(`/api/jobs?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)
// 字典管理
const getDictListApi = (params:TS.IDictList) => http.get("/api/dict", { params })
export {
	querycode,
	querylogin,
	querymenus,
	queryTree,
	queryErtree,
	querysearchdata,
	queryuserstatus,
	querynametable,
	queryvolume,
	queryroles,
	querydel,
	querydept,
	queryjob,
	queryjobstatus,
	timingApi,
	getDictListApi
}