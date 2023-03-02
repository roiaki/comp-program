function frankenSplice(arr1, arr2, n) {
  let arr01 = arr1;
  let arr02 = arr2;

  for(let i = n; i < arr01.length + n; i++) {
   
      arr02[i] = arr01[j];
    
    
  }
  // arr02[n] = arr01;

  console.log(arr01, arr02);
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);