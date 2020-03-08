'use strict';

const tmp = new Map();
tmp.set(0, 0);
tmp.set(1, 1);

function fib(n) {
  if (tmp.has(n)) {
    return tmp.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  tmp.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
// console.log(tmp);