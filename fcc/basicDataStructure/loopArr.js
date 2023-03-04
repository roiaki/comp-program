function filteredArray(arr, elem) {
  let newArr = [];
  // この行の下にあるコードのみを変更
  for(let i = 0; i < arr.length; i++) {
    let ans = arr[i].indexOf(elem);
    if(ans < 0) {
      newArr.push(arr[i]);
    }
  }
  // この行の上にあるコードのみを変更
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));