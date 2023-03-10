// unstoppablePromiseConstructor.js
const promise = new Promise((resolve, reject) => {

  let reason = false;
  if (reason) {
    resolve("😁 true なので履行する");
  } else {
    reject("😭 false なので拒否する");
  }
  console.log("👻 関数は止まらない");
});

promise
  .then((value) => console.log("🍓 履行値:", value))
  .catch((reason) => console.error("🥦 拒否理由:", reason))
  .finally(() => console.log("👍 チェーン最後に実行"));