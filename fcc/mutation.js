function mutation(arr) {

  let strArr = arr;
  console.log(strArr[0], strArr[1]);
  let pattern = strArr[1].toLowerCase();
  let str = strArr[0].toLowerCase();

  for(let i = 0; i < str.length; i++) {
    if(pattern.indexOf(pattern[i]) < 0) {
      return false;
    }

  }
  return true;
}

console.log(mutation(["hello", "hey"]));