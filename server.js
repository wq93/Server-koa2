const Woa = require('./application')
const app = new Woa()

function delay(){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      reslove()
    },2000)
  })
}

app.use(async (ctx,next)=>{
  ctx.body = '1'
  await next()
  ctx.body += '2'
})
app.use(async (ctx,next)=>{
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})
app.use(async (ctx,next)=>{
  ctx.body += '5'
})

// app.use(async ctx => {
//   ctx.body = 'hello voa' + ctx.url
// })

app.listen(9090, () => {
  console.log('server running....')
})

// const Woa = require('./application')
// const app = new Woa()
//
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hello node')
// })
//
// app.listen(9092, () => {
//   console.log('server is running')
// })


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