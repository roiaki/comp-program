const Person = function(firstAndLast) {
  let arr = firstAndLast.split(" ");

  let firstName = arr[0];
  let lastName  = arr[1];
  let fullName = firstAndLast;

  // getter
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return fullName;
  };

  // setter
  this.setFirstName = function(firstname) {
    console.log("1 first " + firstname);
    this.fullName = firstname + " " + lastName;
    console.log("2 this.full " + this.fullName);
  };
  this.setLastName = function(lastname) {
    this.fullName = firstName + " " + lastname;
  };
  
  this.setFullName = function(fullname) {
    this.fullName = fullname;
    // 変数の範囲を確認
    console.log("3 fullName:" + ":" + fullName);
    console.log("4 this.fullName:" + ": " + this.fullName);
  };
};

const bob = new Person("Bob Ross");
bob.setFirstName("Has");
bob.setFullName("taro yama");
// bob.setFirstName("aki");
// console.log(bob.getLastName());
// console.log(bob.getFullName());