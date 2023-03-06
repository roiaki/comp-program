// どうしてあなたは◯◯◯なの？

function whatIsInAName(collection, source) {

  console.log(collection, source);

  Object.keys.apply(collection).indexOf()

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });