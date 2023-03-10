const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// この行の下にあるコードのみを変更
let narr = arr.splice(0, 1);
console.log(arr);
let sarr = arr.splice(3);

// この行の上にあるコードのみを変更
console.log(arr);