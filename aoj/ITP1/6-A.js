// 入力1行目は1つの数字、2列目以降は2つの数字
let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");
let array = list[1].split(" ");

let a = parseInt(list[0]);
let b = array[0];
let c = array[1];


array.reverse();
for(let i = 0; i < a; i++) {
  process.stdout.write(array[i] + " ");
  if(i == a - 1) {
    process.stdout.write("\n");
  }
}





