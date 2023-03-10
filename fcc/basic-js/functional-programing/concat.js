// concat メソッドを使用して 2 つの配列を連結する

function nonMutatingConcat(original, attach) {
  // この行の下にあるコードのみを変更
  return original.concat(attach);

  // この行の上にあるコードのみを変更
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);