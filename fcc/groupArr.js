function chunkArrayInGroups(arr, size) {

  let stArr = arr;
  let newArr = [];

  let n = arr.length;
  let cnt = 0;
  for(let i = 0; i < arr.length; i = i + size) {
    newArr.push(stArr.slice(cnt * size, ((cnt + 1) * size)));
    cnt++;
   
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));