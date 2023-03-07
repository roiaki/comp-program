// キャプチャグループを使用して検索と置換をする

let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // この行を変更
let replaceText = "$3 $2 $1"; // この行を変更
let result = str.replace(fixRegex, replaceText);

console.log(result);