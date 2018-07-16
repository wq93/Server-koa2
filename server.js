const Woa = require('./application')
const app = new Woa()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hello node')
})

app.listen(9092, () => {
  console.log('server is running')
})


// const http = require('http')
//
// const server = http.createServer((req,res)=>{
//   res.writeHead(200)
//   res.end('hello node')
// })
//
// server.listen(9090,()=>{
//   console.log('server running....')
// })