let x = parseInt(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(x);


let hour   = String(Math.floor(x / (60 * 60)));
let minute = String(Math.floor(x % (60 * 60) /60));
let sec    = String(Math.floor(x % 60));

let ans = hour + ":" + minute + ":" + sec;

console.log(ans)


