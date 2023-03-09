// Slice と Splice

function frankenSplice(arr1, arr2, n) {

  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(arr1, arr2);
  return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));