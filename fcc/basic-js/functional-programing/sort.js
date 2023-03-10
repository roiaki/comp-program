// sort メソッドを使用して配列をアルファベット順に並べ替える

function alphabeticalOrder(arr) {
  // この行の下にあるコードのみを変更

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // この行の上にあるコードのみを変更
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);