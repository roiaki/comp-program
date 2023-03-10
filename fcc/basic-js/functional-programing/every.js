// every メソッドを使用して、配列内のすべての要素が基準を満たしていることを確認する

function checkPositive(arr) {
  // この行の下にあるコードのみを変更

  let a = arr.every(function(num) {
    return num > 0;
  })

  return a;


  // この行の上にあるコードのみを変更
}

console.log(checkPositive([1, 2, 3, -4, 5]));