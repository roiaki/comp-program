// オブジェクトのプロトタイプの発生元を理解する

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// この行の下にあるコードのみを変更

let ans = Dog.prototype.isPrototypeOf(beagle);

console.log(ans);