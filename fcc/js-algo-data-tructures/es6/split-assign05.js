// 残余要素を使用した分割代入

function removeFirstTwo(list) {
  // この行の下にあるコードのみを変更
  const [a, b, ...shorterList] = list; // この行を変更
  // この行の上にあるコードのみを変更
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);