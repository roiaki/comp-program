// 先頭と末尾から空白を削除する

let hello = "   Hello, World!  ";

// 先頭スペース１～　末尾スペース1文字～
let wsRegex = /^\s+|\s+$/g; // この行を変更
let result = hello.replace(wsRegex, ""); // この行を変更

console.log(result);