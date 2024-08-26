//ejercicio 8: Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo,
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(arrayOfWords) {
  let longestWordPosition = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[longestWordPosition].length < arrayOfWords[i].length) {
      longestWordPosition = i;
    }
  }
  return arrayOfWords[longestWordPosition];
}

console.log(findLongestWord(avengers));
