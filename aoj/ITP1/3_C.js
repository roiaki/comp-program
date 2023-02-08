// 改行で区切って数値変換
let x = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n");

let i = 0;
let cnt = 0;

while(true) {
  let array = x[i].split(" ").map(Number);     // 空白区切りで分割する
  let a = array[0];
  let b = array[1];

  if(a == 0 && b == 0) {
    break;
  }

  if(a > b) {
    let tmp = a;
    a = b;
    b = tmp;

  }
  console.log(a, b);
  cnt++;
  i++;
}
  