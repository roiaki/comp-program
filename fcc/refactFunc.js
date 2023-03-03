// グローバル変数
const bookList = ["The Hound of the Baskervilles", 
                  "On The Electrodynamics of Moving Bodies", 
                  "Philosophiæ Naturalis Principia Mathematica", 
                  "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}


function remove(arr, bookName) {
  let newArr = [...arr];

  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    
    return newArr;
    }
}

console.log(add(bookList, "A Brief History of Time"), bookList);

console.log(remove(bookList, "The Hound of the Baskervilles"), bookList);
