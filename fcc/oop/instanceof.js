// instanceof を使用してオブジェクトのコンストラクターを検証する

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// この行の下にあるコードのみを変更
let myHouse =  new House(4);

let ans = myHouse instanceof House;

console.log(ans);