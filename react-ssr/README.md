## SPA
vue/react -> webpack -> html/css/js

html -> <div id="root"></div>
等 js 把所有的 内容渲染到 root 里面去
用户不能第一时间看到有价值的内容(白屏时间长)

## SSR
vue/react -> webpack -> 后端(node)
用户 第一次访问 html <div id="root">你网页的内容</div>

## 同构组件
1.  服务端 bundle.js 是一个 node 项目
2.  客户端 index.js 就是一个静态资源
3.  node 服务 让react组件 通过 renderToString 渲染成 html 字符串
4.  node 返回的就是带有内容的字符串 （缩短首屏白屏的时间）
5.  node 返回 html 结构， 也把客户端的 index.js 返回给浏览器， 让 react 组件在客户端也会渲染一次，绑定事件

##  同构路由
1.  目的： 需要根据当前的url 渲染页面
2.  客户端 BrowserRouter
3.  服务端 手动传 req.url 告诉 StaticRouter
4.  两端都知道 用户正在访问的 url, 两端渲染页面都能保持一致
5.  ？？ 鼠标点击Link vs 刷新浏览器地址栏 页面由谁构造出来的

## MPA
