let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number);

let a = array[0];
let b = array[1];
let c = array[2];

while(a > b || b > c) {
  if(a > b) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  
  if(b > c) {
    let tmp = b;
    b = c;
    c = tmp;
  }
}

console.log(a, b, c);