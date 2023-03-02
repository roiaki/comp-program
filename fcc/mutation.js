function mutation(arr) {

  let strArr = arr;
  console.log(strArr[0], strArr[1]);
  let pattern = strArr[1];

  let reg = new RegExp(pattern);
  let result = strArr[0].match(reg);
  console.log(result);

  return arr;
}

mutation(["hello", "hey"]);