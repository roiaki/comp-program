// ミューテーション

function mutation(arr) {

  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));