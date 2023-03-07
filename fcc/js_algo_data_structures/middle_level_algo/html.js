// HTML エンティティに変換する

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  let pattern = /[&<>\"']/g;
  return str.replace(pattern, match => htmlEntities[match]);
}

// test here
console.log(convertHTML("Dolce & Gabbana"));

let p = /\"/g;
let str = "s\"\"s";

let aa = p.test(str);
let bb = str.match(p);


console.log(aa, bb);