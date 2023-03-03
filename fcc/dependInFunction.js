// グローバル変数
let fixedValue = 4;

// この行の下にあるコードのみを変更
function incrementer(fixedValue) {
  return fixedValue + 1;

  // この行の上にあるコードのみを変更
}

console.log(incrementer(fixedValue));