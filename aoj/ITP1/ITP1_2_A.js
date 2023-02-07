let x = require("fs").readFileSync("/dev/stdin", "utf8");

let array = x.split(" ").map(Number);

let a = array[0];
let b = array[1];

if(a > b) {
  console.log("a > b");
} else if(a < b) {
  console.log("a < b");
} else if(a == b) {
  console.log("a == b");
}
