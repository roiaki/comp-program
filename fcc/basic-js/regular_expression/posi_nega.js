// 肯定先読みと否定先読み

// ???

let sampleWord = "abcdef33";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

console.log(result);