function randomFraction(min, max) {

  let ans = Math.floor(Math.random() * (max - min + 1) + min);
  return ans;
}

console.log(randomFraction(2, 6));