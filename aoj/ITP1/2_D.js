let lines = require("fs").readFileSync("/dev/stdin", "utf8");
let array = lines.split(" ").map(Number);

let W = array[0];
let H = array[1];
let x = array[2];
let y = array[3];
let r = array[4];

if(r <= x && r <= y && x <= W - r && y <= H - r) {
  console.log("Yes");
} else {
  console.log("No");
}
