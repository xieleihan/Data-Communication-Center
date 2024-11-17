// 导入views目录下的组件
import App from '../App.tsx'
import Register from '../views/Register.tsx'
import Login from '../views/Login.tsx'
import HomeView from '../views/HomeView.tsx'
import ServerView from '../views/ServerstatusView.tsx'
import About from '../views/AboutView.tsx'
import UserInfo from '../components/UserInfo.tsx'
import UserDistributed from '../components/UserDistributed.tsx'
import InfoAdd from '../components/InfoAdd.tsx'
import WordInfo from '../components/WordInfo.tsx'

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
        element: <HomeView />,
        children: [
            {
                path: 'userinfo',
                element: <UserInfo/>
            },
            {
                path: 'userdistributed',
                element: <UserDistributed/>
            },
            {
                path: 'infoadd',
                element: <InfoAdd/>
            },
            {
                path: 'wordinfo',
                element: <WordInfo/>
            }
        ]
    },
    {
        path: '/server',
        element: <ServerView/>
    },
    {
        path: '/about',
        element: <About/>
    }
]

// 导出路由表
export default routes