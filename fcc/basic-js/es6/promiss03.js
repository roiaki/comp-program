// 成功したプロミスを then メソッドで処理する

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer が true に設定され、サーバーからの応答が成功したことを示す
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});


makeServerRequest.then(result => {
  console.log(result);
});