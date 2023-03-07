// 混在する文字のグループをチェックする

let myString = "Eleanor Roosevelt";
// Flanklin またはEleanor A~Zの間の1文字　. 直前文字0回か1回マッチ　または　A~Za~z1文字
let myRegex =  /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // この行を変更
let result = myRegex.test(myString); // この行を変更
// myString の実験チャレンジに合格した後、グループ化がどのように機能するか確認する

console.log(result);