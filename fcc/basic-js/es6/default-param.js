// 関数のデフォルトパラメーターを設定する

// この行の下にあるコードのみを変更
const increment = (number, value= 1) => number + value;
// この行の上にあるコードのみを変更

console.log(increment(1));