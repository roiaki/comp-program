// push の代わりに concat を使用して要素を配列の末尾に追加する

function nonMutatingPush(original, newItem) {
  // この行の下にあるコードのみを変更
  return original.concat(newItem);

  // この行の上にあるコードのみを変更
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));