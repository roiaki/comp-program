let dog = {
  name: "Spot",
  numLegs: 4,
  // 変数名を変更した場合参照しているコードも変更しなくてはいけないがthisを使うと参照元はthisのままでＯＫなので楽
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

// this → メソッドが関連付けられているオブジェクトを参照する
console.log(dog.sayLegs());