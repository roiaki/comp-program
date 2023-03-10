// ケバブケースに変換する

function spinalCase(str) {

  let pattern01 = /([a-z])([A-Z])/g;
  const regex = /[\s|_]/g;
  str = str.replace(pattern01, "$1 $2");
  str = str.replace(regex, "-").toLowerCase();


  console.log(str);
  
  // let a = str1.replace(regex, "-");
  // a = str1.replace(/[A-Z]/, " ")
  return str;
}

console.log(spinalCase("This Is Spinal Tap"));