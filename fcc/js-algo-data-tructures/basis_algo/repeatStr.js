// 同じ文字列の繰り返し

function repeatStringNumTimes(str, num) {
  let ans = "";
  for(let i = 0; i < num; i++) {
    ans += str;
    
  }
  return ans;
}

let ansstr = repeatStringNumTimes("abc", 3);
console.log(ansstr);