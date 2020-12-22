// app.js
const express = require('express')
const app = express()
const port = 3000

//app.use(function (req, res, next){...
//將使用者送入的每個req在進入路由處理前，先經過以下的middleware處理
app.use(function (req, res, next) {
  const date = new Date()
  if (req.originalUrl !== "/favicon.ico") {
    console.log(date.toLocaleString(), `| ${req.method} from ${req.originalUrl}`)
  }
  next()
})

app.get('/', (req, res) => {
  // console.log(`${req.method} from ${req.originalUrl}`);
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})