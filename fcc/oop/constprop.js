// コンストラクタープロパティを理解する

function Dog(name) {
  this.name = name;
}

function Cat(name) {
  this.name = name;
}

// この行の下にあるコードのみを変更
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

let a = new Cat("a");
console.log(joinDogFraternity(a));