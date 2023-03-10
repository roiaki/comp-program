// resolve と reject を使用してプロミスを完了する

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer はサーバーからの応答を表す
  let responseFromServer;

  if(responseFromServer) {
    resolve("Promise was fulfilled");
  } else {  
    reject("Promise was rejected");
  }
});