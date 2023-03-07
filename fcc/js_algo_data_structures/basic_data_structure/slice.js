function forecast(arr) {
  // この行の下にあるコードのみを変更
  let newArr = arr.slice(2, 4);

  return newArr;
}

// この行の上にあるコードのみを変更
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));