// 2 つの配列の違い いずれか一方に存在する要素を含み、両方にある要素を含まない配列を作成する

function diffArray(arr1, arr2) {
  const newArr = [];

  // for(let i = 0; i < arr1.length; i++) {
  //   if(arr2.indexOf(arr1[i]) >= 0) {

  //   } else {
  //     newArr.push(arr1[i]);
  //   }
  // }

  for(let i = 0; i < arr1.length; i++) {
    console.log();
    if(arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }

  // for(let i = 0; i < arr2.length; i++) {
  //   if(arr1.indexOf(arr2[i]) >= 0) {

  //   } else {
  //     newArr.push(arr2[i]);
  //   }
  // }

  for(let i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));