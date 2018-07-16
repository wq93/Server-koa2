async function fn1(next) {
  console.log('fn1')
  await next()
  console.log('end fn1')
}

async function fn2(next) {
  console.log('fn2')
  await delay()
  await next()
  console.log('end fn2')
}

function fn3() {
  console.log('fn3')
}

// 等待
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    },2000)
  })
}

function compose(middlewares) {
  return function () {
    return dispatch(0)

    function dispatch(i) {
      let fn = middlewares[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(fn(function next() {
        return dispatch(i + 1)
      }))
    }
  }
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()


// function add(x, y) {
//   return x + y
// }
//
// function double(z) {
//   return z * 2
// }
//
// const middllewares = [add, double]
// let len = middllewares.length
//
// function componse(midds) {
//   return (...args) => {
//     // 初始值
//     let res = midds[0](...args)
//     for (let i = 1; i < len; i++) {
//       res = midds[i](res)
//     }
//     return res
//   }
// }
//
// const fn = componse(middllewares)
// const res = fn(1,2)
//
// console.log(res)