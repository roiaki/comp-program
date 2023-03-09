// 分割代入を使用してオブジェクトを関数のパラメーターとして渡す

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// この行の下にあるコードのみを変更
const half = ({max, min}) => (max + min) / 2.0;
half;
console.log(half);
// この行の上にあるコードのみを変更