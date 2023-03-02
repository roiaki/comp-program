function bouncer(arr) {
  let storageArr = arr;
  let newArr = [];

  for(let i = 0; i < storageArr.length; i++) {
    // console.log(Boolean(!storageArr[i]));
    if(!Boolean(!storageArr[i])) {
      newArr.push(storageArr[i]);
    }
  }
  // console.log(newArr);
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));