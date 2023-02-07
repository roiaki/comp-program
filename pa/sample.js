var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var N = lines[0];

console.log(lines[0],lines[1]);

// for(var i = 0; i < N; i++) {
//   var line = lines[i+1].split(" ");
//   console.log("hello = " + line[0] + ", world = " + line[1]);
// }