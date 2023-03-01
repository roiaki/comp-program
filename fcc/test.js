let Person = function(firstAndLast) {
  let full = firstAndLast;
  let first = full.split(" ")[0];
  let last = full.split(" ")[1];
  // console.log(first, full.split(" ")[0]);

  let ages = 0;

  this.getAge = function() {
    this.ages = 13;
    return ages;
  }

  this.setAge = function(age){
    console.log(this.ages);
    this.ages = age;
  }

  // getter
  // this.getFirstName = function() {
  //   console.log("start");
  //   console.log(full);
  //   console.log("first = " + first);
  //   console.log("full.split(\" \")[0] = " + full.split(" ")[0]);
  //   console.log("end");
  //   // return full.split(" ")[0];
  //   return first;
  // };
  // this.getLastName = function() {
  //   return last;
  // };
  // this.getFullName = function() {
  //   return full;
  // };

  // // setter
  // this.setFirstName = function(firstname) {
  //   full = firstname + " " + full.split(" ")[1];
  // };
  // this.setLastName = function(lastname) {
  //   full = full.split(" ")[0] + " " + lastname;
  // };
  // this.setFullName = function(fullname) {
  //   first = fullname.split(" ")[0];
  //   last  = fullname.split(" ")[1];
  //   full  = fullname;
  // };
};

let bob = new Person("Bob Ross");
// bob.setFullName("Haskell Curry");
// console.log("bob.getFirstName() = " + bob.getFirstName());
// console.log(bob.getFullName());
bob.setAge(19);
console.log(bob.getAge());