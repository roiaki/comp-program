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

  let line = lines[0].split(" ");
  let N = line[0];
  let x = line[1];
  let y = line[2];

  for(i = 1; i <= N; i++) {
    if(i % x == 0 && i % y == 0) {
      console.log("AB");
    } else if(i % x == 0) {
      console.log("A");
    } else if(i % y == 0) {
      console.log("B");
    } else {
      console.log("N");
    }

  }
});