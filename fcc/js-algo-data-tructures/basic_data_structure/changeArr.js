let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // この行の下にあるコードのみを変更
  console.log(userObj.data.friends);

  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // この行の上にあるコードのみを変更
}

console.log(addFriend(user, 'Pete'));