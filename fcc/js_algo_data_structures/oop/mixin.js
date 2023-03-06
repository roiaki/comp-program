// ミックスインを使用して互いに関連性のないオブジェクト間に共通の動作を追加する

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// この行の下にあるコードのみを変更
function Bird() { }
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("glide");
  }
};

glideMixin(bird);
glideMixin(boat);

