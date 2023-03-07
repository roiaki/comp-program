const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // この行の下にあるコードのみを変更
  let cnt = 0;
  for(let user in usersObj) {
    
    if(usersObj[user].online === true) {
      cnt++;
    }
  }
  return cnt;
  // この行の上にあるコードのみを変更
}

console.log(countOnline(users));