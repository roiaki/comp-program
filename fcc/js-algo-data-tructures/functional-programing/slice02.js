// splice の代わりに slice を使用して配列から要素を削除する

function nonMutatingSplice(cities) {
  // この行の下にあるコードのみを変更
  return cities.slice(0,3);

  // この行の上にあるコードのみを変更
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));