// 人を作成する

const Person = function(firstAndLast) {
  // この行の下にあるコードのみを変更
  // 下のメソッドを完成させ、他のメソッドも同様に実装する

  let fname = firstAndLast;
  let first = fname.split(" ")[0];
  let last = fname.split(" ")[1];

  this.getFullName = function() {
    return first + " " + last;
  };

  this.getFirstName = function() {
    return first;

  }

  this.getLastName = function() {
    return last;
  }

  this.setFirstName = function(name) {
    first = name;
  }

  this.setLastName = function(name) {
    last = name;
  }

  this.setFullName = function(name) {
    fname = name;
    first = name.split(" ")[0];
    last = name.split(" ")[1];
  }

};

const bob = new Person('Bob Ross');

// bob.setFirstName("Haskell");
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());