// プロトタイプのプロパティを使用して重複コードを減らす
// プロトタイプとはのちの改良を見込んで大筋として作る模型

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;


// この行の上にあるコードのみを変更
let beagle = new Dog("Snoopy");

console.log(beagle);