// 検索して破棄する 引数：配列、1つ以上の整数。整数と同じ値の要素を、引数の配列から削除

function destroyer(arr, ...manyMore) {
  console.log(manyMore);
  console.log(arr);

  for(let i = 0; i < manyMore.length; i++) {
    // console.log(typeof(manyMore[i]), manyMore[i]);
    let a = manyMore[i];
    arr = arr.filter(i => i != a);
  }
  // console.log(arr.filter(i => i != a));
  return arr;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));