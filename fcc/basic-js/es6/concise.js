// ES6 を使用して簡潔な宣言的関数を記述する

// この行の下にあるコードのみを変更
const bicycle = {
  gear: 2,
  setGear(newGear){
    this.gear = newGear;
  }
};
// この行の上にあるコードのみを変更
bicycle.setGear(3);
console.log(bicycle.gear);