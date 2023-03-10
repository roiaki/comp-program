// すべてが True かどうか

function truthCheck(collection, pre) {
  // let a = collection[0];
  // console.log(a["name"]);
  // console.log(collection[0].isBot, collection[0]["isBot"]);

  for(let i = 0; i < collection.length; i++) {
    if(!Boolean(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

let aa = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

console.log(aa);