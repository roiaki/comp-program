// 範囲内のすべての数値を合計する

function sumAll(arr) {

  let a = arr[0];
  let b = arr[1];

  let sum = 0;
  if(a > b) {
    for(let i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    for(let i = a; i <= b; i++) {
      sum += i;
    }
  }

  // console.log(sum);
  return sum;
}

console.log(sumAll([1, 4]));