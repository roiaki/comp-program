let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

let i = 0;
while(true) {
  let li = list[i].split(" ");
  let x = parseInt(li[0]);
  let op = li[1];
  let y = parseInt(li[2]);
  i++;

  let ans
  if(op == "+") {
    ans = x + y;
    
  } else if(op == "-") {
    ans = x - y;
   
  } else if(op == "*") {
    ans = x * y;
   
  } else if(op == "/") {
    ans = Math.floor(x / y);
    
  } else if(op == "?") {
    break;
  }
  console.log(ans);
}
