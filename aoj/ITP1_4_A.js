let list = require('fs').readFileSync('/dev/stdin', 'utf8');
let array = list.split(" ").map(Number);

let a = array[0];
let b = array[1];


let ans1 = Math.floor(a / b);
let ans2 = a % b;
let ans3 = parseFloat(a / b);
let aa = ans3.toFixed(4);

console.log(ans1, ans2, aa);
// var num = 1.23456;
// console.log(num.toFixed(1));

