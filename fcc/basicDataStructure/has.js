let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // この行の下にあるコードのみを変更

  let a = userObj.hasOwnProperty("Alan");
  let b = userObj.hasOwnProperty("Jeff");
  let c = userObj.hasOwnProperty("Sarah");
  let d = userObj.hasOwnProperty("Ryan");

  if(a && b && c && d) {
    return true;
  } else {
    return false;
  }

  // この行の上にあるコードのみを変更
}

console.log(isEveryoneHere(users));