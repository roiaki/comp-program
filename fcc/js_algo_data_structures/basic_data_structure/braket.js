let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // この行の下にあるコードのみを変更
  let ans = foods[scannedItem];

  return ans;

  // この行の上にあるコードのみを変更
}

console.log(checkInventory("apples"));