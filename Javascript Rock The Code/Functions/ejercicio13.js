//Ejercicio 13
//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar
//que existe dentro de dicho array - comprueba si existe el elemento,
//en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      return { exist: true, position: i };
    }
  }
  return { exist: false };
}

console.log(finderName(nameFinder, "Logan"));
console.log(finderName(nameFinder, "Miriam"));
console.log(finderName(nameFinder, "Claudia"));
console.log(finderName(nameFinder, "Jessica"));
console.log(finderName(nameFinder, "Marc"));
