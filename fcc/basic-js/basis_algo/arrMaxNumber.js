// 各配列の最大数値を返

function largestOfFour1(arr) {
  // console.log(arr.length);
  // console.log(Math.max(arr[0][0], arr[0][1], arr[0][2], arr[0][3]));
  // console.log(Math.max(arr[1][0], arr[1][1], arr[1][2], arr[1][3]));
  // console.log(Math.max(arr[2][0], arr[2][1], arr[2][2], arr[2][3]));
  // console.log(Math.max(arr[3][0], arr[3][1], arr[3][2], arr[3][3]));
  let a = Math.max(arr[0][0], arr[0][1], arr[0][2], arr[0][3]);
  let b = Math.max(arr[1][0], arr[1][1], arr[1][2], arr[1][3]);
  let c = Math.max(arr[2][0], arr[2][1], arr[2][2], arr[2][3]);
  let d = Math.max(arr[3][0], arr[3][1], arr[3][2], arr[3][3]);

  let ansArr = [a, b, c, d];
  return ansArr;
}

function largestOfFour2(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result[i] = max;
  }
  return result;
}

let ans = largestOfFour1([[4, 5, 1, 3], 
                          [13, 27, 18, 26], 
                          [32, 35, 37, 39], 
                          [1000, 1001, 857, 1]]);
console.log(ans);