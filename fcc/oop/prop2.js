// すべてのプロパティを反復処理する

function Dog(name) {
  this.name = name;
  
}

Dog.prototype.numLegs = 4;
Dog.prototype.tail = true;
Dog.prototype.numEyes = 2;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// この行の下にあるコードのみを変更

for(let p in beagle) {
  if(beagle.hasOwnProperty(p)) {
    ownProps.push(p);
  } else {
    prototypeProps.push(p);
  }

}

console.log(ownProps, prototypeProps);