// 分割代入を使用してネストされたオブジェクトから変数を代入する

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// この行の下にあるコードのみを変更


const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

console.log(lowToday);

// この行の上にあるコードのみを変更