// 操作する配列
const arr = ['value1', 'value2', 'value3'];

const converted = arr.map((value, idx) => {
  return `${idx} is ${value}`
});

console.log(converted);

//文字列の中で変数を使う
let firstName = "yamada";
let lastName = "taro";
let age = 12;

console.log(`Hi my name is ${firstName} ${lastName}.`);

let items = [1,2,3,4,5,6,7,8,9];
let ab = [];
let result = items.map( function(value) {
 
    //「value」が偶数の時だけ2倍にする
    if( value % 2 === 0 ) {
        return value * 2;
    }
    else {
        return value;
    }
});
 
console.log(result);