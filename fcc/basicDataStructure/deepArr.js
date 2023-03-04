let myNestedArray = [
  // この行の下にあるコードのみを変更
  [["deep"]],
  [[["deeper"]]],
  [[[["deepset"]]]],
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // この行の上にあるコードのみを変更
];

console.log(myNestedArray);
console.log(myNestedArray[0]);