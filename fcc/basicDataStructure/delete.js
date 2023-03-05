let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// この行の下にあるコードのみを変更
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// この行の上にあるコードのみを変更

console.log(foods);