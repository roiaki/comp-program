// スプレッド演算子を使用して配列をインプレースで評価する

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // この行を変更

console.log(arr2);