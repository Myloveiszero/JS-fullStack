import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import router from '../router'

function App() {
    return(
        <BrowserRouter>
          { renderRoutes(router) }
        </BrowserRouter>
    )
}
//root 节点 下面已经有东西了
// 客户端不需要再构造 DOM节点 只需要服务端完成不了的
//事件绑定
ReactDOM.hydrate(<App/>,document.getElementById("root"));