function checkPositive(arr) {
  // この行の下にあるコードのみを変更
  return arr.some(function(num) {
    return num > 0;
  })


  // この行の上にあるコードのみを変更
}

console.log(checkPositive([1, 2, 3, -4, 5]));