// プロトタイプのプロパティを使用して重複コードを減らす
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// console.log(beagle.numLegs);

// 全てのプロパティを反復処理する
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// // この行の下にあるコードのみを変更

// for(let property in beagle) {
//   if(beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);

// プロトタイプオブジェクト
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   numLegs: 2, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// let a = new Dog("a");

// console.log(a.describe());

// プロトタイプの変更時に constructor プロパティを必ず設定する
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// let aa = new Dog("aa");
// console.log(aa);

// スーパータイプから動作を継承
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();