import express from 'express';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import router from '../router';
// clint ReactDOm.render( ,root)
// server renderToString
import Header from '../common/Header/Header.jsx';
// <Header />
const app = express();
//把public目录映射成静态资源的目录
app.use(express.static('public'))
app.get('*', (req, res) => {
  console.log(req.url, req.path)
  // const root = <Header />
  const root = (
    <StaticRouter location={req.url}>
      {renderRoutes(router)}
    </StaticRouter>
  )
  // 把 vnode -> html string
  // 有事件 addEventListener (浏览器专用的 api)
  const htmlStr = renderToString(root);
  // console.log(htmlStr);
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
  </body>
  </html>
  `)
})
app.listen(3000, () => {
  console.log('server is running 3000');
})