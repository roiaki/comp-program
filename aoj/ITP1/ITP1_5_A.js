let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");

let i = 0;

while(true) {
  let array = list[i].split(" ").map(Number);
  let tate  = array[0];
  let yoko  = array[1];
  
  if(tate == 0 && yoko == 0) {
    break;
  }
  for(let j = 0; j < tate; j++) {
    for(let k = 0; k < yoko; k++) {
      process.stdout.write("#");
      if(k == (yoko - 1)) {
        process.stdout.write("\n");
      }
    }
  }
  process.stdout.write("\n");
  i++;
}


