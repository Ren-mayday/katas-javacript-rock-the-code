//ejercicio 7: Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`${numberOne} es el número más alto`);
  } else if (numberOne < numberTwo) {
    console.log(`${numberTwo} es el número más alto`);
  } else {
    console.log("Ambos números son iguales");
  }
}

console.log(sum(5, 3));
console.log(sum(700, 8540));
console.log(sum(455424, 8598));
console.log(sum(10, 30));
