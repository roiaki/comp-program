//getter と setter を使用してリクエストへのアクセスを管理する

// この行の下にあるコードのみを変更
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

console.log(Thermostat);
const thermos = new Thermostat(76); // 華氏スケールで設定
let temp = thermos.temperature; // 24.44℃
thermos.temperature = 26;
temp = thermos.temperature; // 26℃

console.log(temp);