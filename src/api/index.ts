// 导入axios实例
import request from './request.ts';
// 定义常量记录服务器地址
const host_url = `http://localhost:3000`;
// 封装GET请求：
export const getFn = (url:string, data = {}) => {
    return request.get(`${host_url}${url}`, { params: data })
}

// 封装POST请求：
export const postFn = (url:string, data = {}) => {
    return request.post(`${host_url}${url}`, data)
}

// 调用服务端测试接口
// 接口地址：/api/
// 请求方式： get
// 返回值：json
export const showTest = (data = {}) => {
    return getFn('/', data)
}

// 注册管理员接口
// 接口地址：/api/private/register
// 请求方式： post
// 返回值：json
export const register = (data = {}) => {
    return postFn('/api/private/register', data)
}

// 登录管理员接口
// 接口地址：/api/private/login
// 请求方式： post
// 返回值：json
export const login = (data = {}) => {
    return postFn('/api/private/login', data)
}