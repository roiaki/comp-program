// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  a = parseInt(input[0]);
  b = parseInt(input[1]);
  c = parseInt(input[2]);

  x = parseInt(input[3]);

  let cnt = 0;
  for(i = 0; i <= a; i++) {
    for(j = 0; j <= b; j++) {
      for(k = 0; k <= c; k++) {
        if(x === (i * 500 + j * 100 + k * 50)) {
          cnt++;
        }
      }
    }
  }

  //出力
  console.log(cnt);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));