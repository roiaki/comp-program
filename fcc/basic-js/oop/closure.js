// クロージャーを使用してオブジェクト内のプロパティを外部から変更されないように保護する

function Bird() {
  this.weight = 15;
  this.getWeight = function() {
    return this.weight;
  };

}