// すべての素数を合計する
// 割り切れるかの判定を√Nで打ち切るかの理由は、Nを√Nより大きい数値で割った商は√N以下になり、√Nより大きい数値で割り切れるなら、√N以下の商で既に割り切れているためです。

function sumPrimes(num) {

  // 素数判定
  for(let i = 2; i < num; i++) {
    if(num % i != 0);
  }
  return num;
}

sumPrimes(10);