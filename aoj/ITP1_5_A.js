let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

let n = parseInt(list[0]);
let array = list[1].split(" ").map(Number);


let ansMax = Math.max.apply(null, array);
let ansMin = Math.min.apply(null, array);

let sum = 0;
for(let i = 0; i < n; i++) {
  sum = sum + array[i];
}
console.log(ansMin, ansMax, sum);


