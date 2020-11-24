/**
 * 
 * @param {number} n 
 */
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

function fib(n) {
  let a = 0, b = 1, c = 0;
  let i = 2;
  for (i = 0; i < 9; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

function fibClosure(n) {
  function _fib() {
    let a = 0, b = 1, c = 0;
    return function fib() {
      c = a + b;
      a = b;
      b = c;
      return c
    }
  }

  const f = _fib()
  let ret = 0;
  for (let i = 0; i < n; i++) {
    ret = f();
  }
  return ret;
}


let n = 9;
let sum = 0;

for (let i = 0; i < 10; i++) {
  let begin = process.hrtime();
  let result = fib(n);
  let end = process.hrtime(begin);
  console.log(i, ">", result, end[1]);
  sum += end[1]
}
console.log("Avg:", sum / 10);
console.log("====================");

sum = 0;
for (let i = 0; i < 10; i++) {
  let begin = process.hrtime();
  let result = fibClosure(n);
  let end = process.hrtime(begin);
  console.log(i, ">", result, end[1]);
  sum += end[1]
}
console.log("Avg:", sum / 10);