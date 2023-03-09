// 分割代入を使用してオブジェクトから変数を代入する

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// この行の下にあるコードのみを変更
const {today: a, tomorrow: b} = HIGH_TEMPERATURES;

console.log(a, b);

// この行の上にあるコードのみを変更