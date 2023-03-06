let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// この行の下にあるコードのみを変更
userActivity.data.online = 45;
userActivity["data"]["online"] =2;

// この行の上にあるコードのみを変更

console.log(userActivity);