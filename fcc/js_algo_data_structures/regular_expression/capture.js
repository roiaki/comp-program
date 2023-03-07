// キャプチャグループを使用してパターンを再利用する

let repeatNum = "42 42 42";
//^先頭　$末尾
let reRegex = /^(\d+) \1 \1$/; // この行を変更
let result = reRegex.test(repeatNum);

console.log(result);