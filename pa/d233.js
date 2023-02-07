var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);

let ans = a + b + c;


console.log(ans);

// for(var i = 0; i < N; i++) {
//   var line = lines[i+1].split(" ");
//   console.log("hello = " + line[0] + ", world = " + line[1]);
// }