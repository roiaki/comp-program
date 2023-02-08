// let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

// let N = parseInt(list[0]);
// let array = list[1].split(" ").map(Number);


//ソート前の配列データ
let array = [7, 3,10, 5, 1];

let newarr = array.join(" ");

console.log(newarr);
let cnt = 0;
// 配列の要素数ループ
for(let i = 0; i < array.length - 1; i++){
  // 右から左へ
  for(let j = array.length - 1; j > i; j--){    
    // 比較して　右 > 左ならば
    if(array[j - 1] > array[j]){
      let tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      cnt++;
    }
  }
  console.log(i + 1 + "周目");

  // 出力する
  let N = array.length;
  for(let k = 0; k < N; k++) {
    if(k < N - 1) {
      process.stdout.write(array[k] + " ");
    }
    if(k == N - 1) {
      process.stdout.write(array[k] + "\n");
    }
  }
}
console.log(cnt);
console.log(array); // [1, 3, 5, 7, 10]

let array2 = [1,2, 3, 3, 2, 6];

let N = array2.length;
for(s = N - 1; 0 < s; s--) {
  for(k = 0; k < s; k++) {
    
    if(array2[k] < array2[k + 1]) {
      let tmp = array2[k];
      array2[k] = array2[k+1];
      array2[k+1] = tmp;
    }
  }
}
console.log(array2);
