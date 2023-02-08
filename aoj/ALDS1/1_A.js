let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

let N = parseInt(list[0]);
let array = list[1].split(" ").map(Number);


// トレース
for(let i = 0; i < N; i++){
  // 退避する
  let tmp = array[i];
  let j = i - 1;
  
  // ループを抜けた時のインデックス「j」が要素を挿入する時のインデックスへと反映される
  // i 1, j 0, array[0] -> array[1], j -> -1, tmp -> array[0] 
  while(0 <= j && tmp < array[j]){
    // 要素を右へずらす
    array[j + 1] = array[j];
    j--;
  }
  // 要素を挿入する
  array[j + 1] = tmp;

  // 出力する
  for(let k = 0; k < N; k++) {
    if(k < N - 1) {
      process.stdout.write(array[k] + " ");
    }
    if(k == N - 1) {
      process.stdout.write(array[k] + "\n");
    }
  }
}
// console.log(array);



