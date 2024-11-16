// 导入views目录下的组件
import App from '../App.tsx'
import Register from '../views/Register.tsx'
import Login from '../views/Login.tsx'
import HomeView from '../views/HomeView.tsx'

// 配置路由表(设置URL和组件的映射关系  URL和组件一一对应 )
const routes = [
    // 嵌套路由
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/home',
        element: <HomeView/>
    }
]

// 导出路由表
export default routes