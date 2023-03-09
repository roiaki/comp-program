// ブール型の確認

function booWho1(bool) {
  if(typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

function booWho2(bool) {
  return typeof bool === "boolean";
}

console.log(booWho2(null));