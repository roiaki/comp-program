// function reverseString(str) {
//   let arr = str.split("");
//   let ans = [];
//   let strans = "";
//   let i = arr.length;

//   while(i > 0) {
//     ans.push(arr.pop());
//     i--;
//   }
 
//   for(let i = 0; i < ans.length; i++) {
//     strans += ans[i];
//   }
  
//   return strans;
// }

function reverseString(str) {
  let reverseStr = "";
  let i = str.length - 1;
  
  while(i >= 0) {
    reverseStr += str[i];
    i--;
  }
  return reverseStr;
}


console.log(reverseString("hello"));