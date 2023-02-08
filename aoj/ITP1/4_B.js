// 改行で区切って数値変
const x = require("fs").readFileSync("/dev/stdin", "utf8");
const a = parseFloat(x);

let area = x * x * 3.141592653589;
let length = 2 * x * 3.141592653589;

let ans1 = area.toFixed(6);
let ans2 = length.toFixed(6);

console.log(ans1, ans2);

