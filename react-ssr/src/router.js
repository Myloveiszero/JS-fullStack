import App from './App'
import Home from './pages/Home/index'
import Detail from './pages/Detail/detail'
import Login from './pages/Login/login'

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path:"/",
                exact: true,
                component: Home 
            },
            {
                path:"/login",
                component: Login
            },
            {
                path:"/detail",
                component: Detail
            }
        ]
    }
]