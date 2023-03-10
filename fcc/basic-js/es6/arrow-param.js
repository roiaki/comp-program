// パラメーターのあるアロー関数を記述する

var myConcat = (arr1, arr2, arr3) => {
  return arr1.concat(arr2).concat(arr3);
};

console.log(myConcat([1, 2], [3, 4, 5], [0, 0]));