let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// この行の下にあるコードのみを変更
foods.banana = 13;
foods['grapes'] = 35;
let a = 'strawberries';
foods[a] = 27;

// この行の上にあるコードのみを変更

console.log(foods);