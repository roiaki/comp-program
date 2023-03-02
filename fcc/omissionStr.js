function truncateString(str, num) {
  // console.log(str.length);
  let ans;
  // console.log(str.substr(0,num));
  if(str.length > num) {
    ans = str.substr(0, num) + "...";
  } else {
    ans = str;
  }
  return ans;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));