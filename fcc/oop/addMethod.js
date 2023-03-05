function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// この行の下にあるコードのみを変更
Dog.prototype.constructor = Dog;



// この行の上にあるコードのみを変更

let beagle = new Dog();