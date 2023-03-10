// 人を作成する

const Person = function(firstAndLast) {
  // この行の下にあるコードのみを変更
  // 下のメソッドを完成させ、他のメソッドも同様に実装する

  let fname = firstAndLast;
  let first = fname.split(" ")[0];
  let last = fname.split(" ")[1];

  this.name = firstAndLast;
  this.first = firstAndLast.split(" ")[0];
  this.last = firstAndLast.split(" ")[1];

  this.age = 19;
  
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

var Person2 = function(name, age) {
  this.name = name;
  this.age  = age;

  this.setName = function(name) {
      this.name = name;
  }
  this.getName = function() {
      return this.name;
  }

  
}

let obj = {
  get propName() {
    // getter, obj.propName を取得するときにコードが実行されます
  },

  set propName(value) {
    // setter, obj.propName = value 時にコードが実行されます
  }
};
const bob = new Person('Bob Ross');

const aki = new Person2("aa", 10);
aki.setName("aaa")
console.log(bob);

// bob.setFirstName("Haskell");
bob.setFullName("Haskell Curry");
// console.log(bob.getFullName());
// console.log(bob.getFirstName());