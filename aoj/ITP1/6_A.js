// 入力1行目は1つの数字、2列目以降は2つの数字
let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");
let array = list[1].split(" ");
let N = parseInt(list[0]);

// console.log(array);

let newarray = [];
for(let i = N - 1; i >= 0; i--) {
  newarray.push(array[i]); 
}

for(let j = 0; j < N; j++) {
  if(j < N - 1) {
    process.stdout.write(newarray[j] + " ");
  } else {
    process.stdout.write(newarray[j] + "\n");
  }
  
}


