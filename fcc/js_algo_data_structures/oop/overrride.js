// 継承されたメソッドを上書きする

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// この行の下にあるコードのみを変更
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}


// この行の上にあるコードのみを変更

let penguin = new Penguin();
console.log(penguin.fly());