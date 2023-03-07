// 末尾の一致判定

function confirmEnding(str, target) {
  let strLen = str.length;
  let targetLen = target.length;
  let str01 = str.substring(strLen - targetLen);

  console.log(str.substring(strLen - targetLen));
  if(target === str01) {
    return true;
  } else {
    return false;
  }
  
}

console.log(confirmEnding("Bastian", "n"));