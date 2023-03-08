// 関数パラメーターで残余引数を使用する

const sum = (...num) => {

  let sum = 0;
  for(let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(sum(1, 3, 5));