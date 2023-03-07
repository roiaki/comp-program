// 文字列で最も長い単語の長さを取得する

function findLongestWordLength(str) {
  let arr = str.split(" ");
  // console.log(arr);
  // console.log(arr[0].length);
  let maxNumber = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > maxNumber) {
      maxNumber = arr[i].length
    }
  }
  return maxNumber;
}

let ans = findLongestWordLength("The quick brownsss fox jumped over the lazy dog");
console.log(ans);