function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// この行の下にあるコードのみを変更

let duck = Object.create(Animal.prototype); // この行を変更
let beagle = Object.create(Animal.prototype);; // この行を変更

duck.eat();
beagle.eat();