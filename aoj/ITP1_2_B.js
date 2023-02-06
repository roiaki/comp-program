let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number);

let a = array[0];
let b = array[1];
let c = array[2];

if(a < b && b < c) {
  console.log("Yes");
} else {
  console.log("No");
}