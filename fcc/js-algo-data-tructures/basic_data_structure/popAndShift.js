function popShift(arr) {
  let popped = arr.pop(); // この行を変更
  let shifted = arr.shift(); // この行を変更
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));