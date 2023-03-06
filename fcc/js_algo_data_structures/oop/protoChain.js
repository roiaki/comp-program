// プロトタイプチェーンを理解する
// ??
// objectはDog beagleに対するスーパータイプ　ObjectはJavaScriptにおいて、
// すべてのオブジェクトのスーパータイプ

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // true を生成

// 下のコードを、true に評価されるように修正
console.log(Object.isPrototypeOf(Dog.prototype));