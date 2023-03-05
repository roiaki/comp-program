// 引数を受け取るためにコンストラクターを拡張する
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;

}

let terrier = new Dog("taro", "brown");

console.log(terrier);