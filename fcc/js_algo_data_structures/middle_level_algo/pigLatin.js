// ピッグ・ラテン

function translatePigLatin(str) {

  let pattern = /[aiueo]/;

  // 最初が子音
  if(!pattern.test(str[0])) {
    let index = str.indexOf(str.match(pattern));

    // console.log(str.substring(index) + str.substring(0, index) + "ay");
    // console.log();
    // console.log(index);

    return str.substring(index) + str.substring(0, index) + "ay";
    
  } else {
    return str + "way";
  }
 
}

translatePigLatin("gcalifornia");