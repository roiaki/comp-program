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
    this.fullName = firstname + " " + lastName;
  };
  this.setLastName = function(lastname) {
    this.fullName = firstName + " " + lastname;
  };
  
  this.setFullName = function(fullname) {
    this.fullName = fullname;
    console.log("fullName" + " " + fullName);
    console.log("this.fullName" + " " + this.fullName);
  };
};

const bob = new Person("Bob Ross");
// bob.setFirstName("Haskell");
bob.setFullName("Haskell Curry");

console.log(bob.getLastName());
// console.log(bob.getFullName());