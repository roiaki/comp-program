function Main(input) {
  console.log('inputの中身は' + input + 'ですよ');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));