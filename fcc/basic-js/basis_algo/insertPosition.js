// 挿入位置

function getIndexToIns(arr, num) {

  let newArr = arr;
  // コールバック関数分からない
  newArr.sort(function(a, b) {
    return a - b;
  });

  // console.log(newArr);
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] >= num) {
      return i;
    }
  }
  return newArr.length;
}

console.log(getIndexToIns([40, 60, 1, 4 ], 50));