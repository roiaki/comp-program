function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	tmp = input[0].split(" ");
	//文字列から10進数に変換するときはparseIntを使います
	ans = tmp[0] * tmp[1];
  	if (ans % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
	
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));