let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // この行の下にあるコードのみを変更
  // let newArr = [];
  // for(let user in obj) {
  //   newArr.push(user);
  // }
  // console.log(Object.keys(obj));
  
  // console.log(newArr);
  // return newArr;
  return Object.keys(obj);
  // この行の上にあるコードのみを変更
}

console.log(getArrayOfUsers(users));