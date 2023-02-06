// 改行で区切って数値変
let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number); // 空白区切りで分割する

let a = array[0];
let b = array[1];

let div  = Math.floor(a / b);
let over = a % b;
let ans  = a / b;
let s = ans.toFixed(6);

console.log(div, over, s);
