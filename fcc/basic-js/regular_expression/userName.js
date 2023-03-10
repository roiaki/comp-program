//ユーザー名の候補を制限する

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;// この行を変更
let result = userCheck.test(username);