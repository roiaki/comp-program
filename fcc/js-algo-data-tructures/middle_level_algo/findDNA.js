// DNA のペアを求める

function pairElement(str) {
  let arr = str.split("");

  console.log(arr);
  // 1
  let dna = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "G") {
      dna.push(["G", "C"]);
    } else if(arr[i] === "C") {
      dna.push(["C", "G"]);
    } else if(arr[i] === "A") {
      dna.push(["A", "T"]);
    } else if(arr[i] === "T") {
      dna.push(["T", "A"]);
    }
  }
  // 2
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  const dna2 = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return dna;
}

console.log(pairElement("GCG"));