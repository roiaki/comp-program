// 分割代入を使用してオブジェクトから値を抽出する

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// この行の下にあるコードのみを変更

const {today, tomorrow} = HIGH_TEMPERATURES; 

console.log(today, tomorrow);
// この行の上にあるコードのみを変更