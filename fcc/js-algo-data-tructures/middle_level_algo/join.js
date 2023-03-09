// 並べて結合する

function uniteUnique(...arr) {

  // console.log(arr);
  let ans = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if(ans.indexOf(arr[i][j]) < 0) {
        ans.push(arr[i][j]);
      }
    }
  }
  
  return ans;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));