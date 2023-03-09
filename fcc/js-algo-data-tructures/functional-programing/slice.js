// slice メソッドを使用して配列の一部分を返す

function sliceArray(anim, beginSlice, endSlice) {
  // この行の下にあるコードのみを変更

  let ans = anim.slice(beginSlice, endSlice);
  return ans;


  // この行の上にあるコードのみを変更
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));