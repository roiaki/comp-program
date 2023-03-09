// 子のプロトタイプに親のインスタンスを設定する

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// この行の下にあるコードのみを変更

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();

beagle.eat();