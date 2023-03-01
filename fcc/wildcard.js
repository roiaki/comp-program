// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result1 = unRegex.test(exampleStr);
// console.log(unRegex.test(exampleStr));

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aiueo]/gi;
// let result2 = quoteSample.match(vowelRegex);

// console.log(result2);

// number and alfabet match
// g:global, i:ignoreCase
// let quoteSample3 = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample3.match(myRegex);
// console.log(result);

// matches a single unspecified character
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aiueo0-9]/gi;
// let result = quoteSample.match(myRegex);

// console.log(result);

// 1 回以上出現する文字にマッチさせる
// let difficultSpelling = "Mississippi";
// let myRegex2 = /s+/gi;
// let result2 = difficultSpelling.match(myRegex2);

// console.log(result2);

// 0 回以上出現する文字にマッチさせる
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/;
// let result3 = chewieQuote.match(chewieRegex);

// console.log(result3);

// ?	直前の文字が0個または1個の場合に一致
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // この行を変更
let result = text.match(myRegex);

console.log(result);

// 先頭の文字パターンにマッチ
let target = /^targetstr/;

// 末尾マッチ
let targetLast = /str$/;

// 全ての英数字マッチ
let str = /\w/g;

// 英数字以外
let str2 = /\W/;

// 全ての数字
let str3 = /\d/g;

// 数字以外
let str4 = /\D/g;


let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

//　空白マッチ
let str5 = /\s/g;

// 最小マッチ数(4回)
let str6 = /Haz{4,}ah/;


