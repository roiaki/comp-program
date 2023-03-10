function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// この行の下にあるコードのみを変更
Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

console.log(duck);
console.log(beagle);