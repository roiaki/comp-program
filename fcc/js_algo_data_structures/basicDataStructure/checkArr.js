function quickCheck(arr, elem) {
  // この行の下にあるコードのみを変更
  let num = arr.indexOf(elem);
  if(num >= 0) {
    return true;
  } else {
    return false;
  } 
  // この行の上にあるコードのみを変更
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));