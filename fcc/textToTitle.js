// 最初の1文字を大文字残りを小文字へ
function titleCase(str) {
  let arr = str.split(" ");
  let ansArr = [];

  for(let i = 0; i < arr.length; i++) {
    let ans = arr[i];
    ansArr.push(ans[0].toUpperCase() + ans.substr(1).toLowerCase());
  }
  return ansArr.join(" ");

  // samplecase
  // let ansStr = "";
  // for(let i = 0; i < ansArr.length; i++) {
  //   // if(i < ansArr.length - 1) {
  //   //   ansStr += ansArr[i] + " ";
  //   // } else {
  //   //   ansStr += ansArr[i];
  //   // }
  //   let t = ansArr.length;
  //   if(i == t - 1) {
  //     ansStr += ansArr[i];
  //   } else {
  //     ansStr += ansArr[i] + " ";
  //   }
  // }

  // console.log(ansStr);
  // return ansStr;
}

console.log(titleCase("heRe iS MY hAdDLE HeRE iS my SpOuT"));