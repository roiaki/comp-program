// 独自のプロパティを理解する

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// この行の下にあるコードのみを変更

for(let p in canary) {
  if(canary.hasOwnProperty(p)) {
    ownProps.push(p);
  }
}

console.log(ownProps);