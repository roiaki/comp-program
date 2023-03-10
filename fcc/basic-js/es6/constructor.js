// class 構文を使用してコンストラクター関数を定義する

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'