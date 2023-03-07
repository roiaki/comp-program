// どうしてあなたは◯◯◯なの？
// とばす

function whatIsInAName(collection, source) {

  console.log(collection, source);
  console.log(source["last"]);

  const souceKeys = Object.keys(collection[0]);
  console.log(souceKeys);

  // Object.values(collection).includes()

  // Object.keys.apply(collection).indexOf()

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });