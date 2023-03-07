// 検索して置換する

function myReplace(str, before, after) {
  let pat = /[A-Z]/;
  console.log(before[0].match(pat));

  let ans = "";
  if(before[0].match(pat) != null) {
    // console.log(after.substring(1));
    // console.log(after[0].toUpperCase() + after.substring(1));
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  ans = str.replace(before, after);

  console.log(ans);
  return ans;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");