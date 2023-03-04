function zeroArray(m, n) {
  // m 行 n 列のゼロで構成される 2 次元配列を作成
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // m 行目を newArray に追加
    let row = [];
    for (let j = 0; j < n; j++) {
      // 現在の行に n 個のゼロを push して列を作成
      row.push(0);
    }
    // 現在の行 (中に n 個のゼロが含まれている) を配列に push
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
