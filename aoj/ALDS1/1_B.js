let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

// let N = parseInt(list[0]);
let array = list[0].split(" ").map(Number);

let a = array[0];
let b = array[1];

function gcp(x, y) {
  let r;
  if(x < y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  while(y > 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
}

let ans = gcp(a, b);
console.log(ans);