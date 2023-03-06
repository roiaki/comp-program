// プロトタイプを新しいオブジェクトに変更する
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // この行の下にあるコードのみを変更
  numLegs: 4,
  eat: function() {
    console.log("mow")
  },
  describe: function() {
    console.log("my name is " + this.name);
  }

};

let a = new Dog("taro");
a.eat();
a.describe();