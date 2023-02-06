let x = require("fs").readFileSync("/dev/stdin", "utf8");

let array = x.split(" ").map(Number);// 空白区切りで数値変換