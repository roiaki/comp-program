// 改行で区切って数値変換
const arg = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n").map(Number);
let i = 0;

while(true) {
  x = arg[i];
  if(x === 0) {
    break;
  }
  console.log("Case " + (i + 1) + ": " + x);
  i++;
}