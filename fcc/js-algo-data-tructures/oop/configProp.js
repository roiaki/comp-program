// プロトタイプの変更時に constructor プロパティを必ず設定する
// プロトタイプオブジェクトを作成するとconstructorプロパティが削除されるので定義する

function Dog(name) {
  this.name = name;
}

// この行の下にあるコードのみを変更
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let a = new Dog("a");

console.log(a.constructor === Dog);