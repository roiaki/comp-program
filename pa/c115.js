process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  // let line = lines[0];
  let tmp = lines[0].split(" ");
  let N = tmp[0];
  let M = tmp[1];
// console.log("M= ", M);
  var sum = 0;
  for(i = 1; i < N; i++) {
    let distance = parseInt(lines[i]);
    // console.log(distance);
    if(distance <= M) {
      sum = sum + distance;
    }
  }
  console.log(sum);
});