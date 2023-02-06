// 改行で区切って数値変
let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number);     // 空白区切りで分割する

let a = array[0];
let b = array[1];
let c = array[2];

console.log(a, b, c);
let cnt = 0;

for(let i = a; i <= b; i++) {
  if(c % i === 0) {
    cnt++;
  }
}
console.log(cnt);
