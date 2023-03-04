function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; // この行を変更
  return sentence;
}

console.log(spreadOut());