function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

let ans = convertCtoF(30);

console.log(ans);