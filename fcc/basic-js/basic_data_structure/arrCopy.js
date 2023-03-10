function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // この行の下にあるコードのみを変更
    newArr.push([...arr]);

    // この行の上にあるコードのみを変更
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));