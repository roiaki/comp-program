// ローマ数字への変換
// M 1000, CM 900, D 500, CD 400, C 100, XC 90, L 50, XL 40, X 10, IX 9, V 5, IV 4, I 1 へ与えられた数字を変換する
let arr ={M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
console.log(arr["M"]);

function convertToRoman(num) {
  
  let ans = "";

  while(num >= 1000) {
    num = num - 1000;
    ans += "M";
  }

  while(num >= 900) {
    num = num - 900;
    ans += "CM"; 
  }

  while(num >= 500) {
    num = num - 500;
    ans += "D";
  }

  while(num >= 400) {
    num = num - 400;
    ans += "CD";
  }

  while(num >= 100) {
    num = num - 100;
    ans += "C";
  }

  while(num >= 90) {
    num = num - 90;
    ans += "XC";
  }

  while(num >= 50) {
    num = num - 50;
    ans += "L";
  }
  
  while(num >= 40) {
    num = num - 40;
    ans += "XL";
  }

  while(num >= 10) {
    num = num - 10;
    ans += "X";
  }

  while(num >= 9) {
    num = num - 9;
    ans += "IX";
  }

  while(num >= 5) {
    num = num - 5;
    ans += "V";
  }

  while(num >= 4) {
    num = num - 4;
    ans += "IV";
  }

  while(num >= 1) {
    num = num - 1;
    ans += "I";
  }
  return ans;
 }
 
 console.log(convertToRoman(9));