// 回文チェッカー

function palindrome(str) {

  // 方針；小文字へ変換、空白除去して真ん中の文字を中心線として左右比較
  let str1 = str.toLowerCase();
  str1 = str1.replace(/[^a-z0-9]/g, "");

  let len = str1.length;
  
  let midNumber = Math.ceil(len / 2);

  // console.log(str1);
  // console.log(len);
  // console.log(midNumber);

  for(let i = 0; i < midNumber; i++) {
    // console.log(str1[i], str1[len - 1], str1[len]);
    // console.log(str1[0]);
    if(str1[i] != str1[len - 1]) {
      return false;
    }
    len--;
  }

  return true;
}

console.log(palindrome("_My age is 0, 0 si ega ym."));
