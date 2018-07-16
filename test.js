function add(x, y) {
  return x + y
}

function double(z) {
  return z * 2
}

const middllewares = [add, double]
let len = middllewares.length

function componse(midds) {
  return (...args) => {
    // 初始值
    let res = midds[0](...args)
    for (let i = 1; i < len; i++) {
      res = midds[i](res)
    }
    return res
  }
}

const fn = componse(middllewares)
const res = fn(1,2)

console.log(res)