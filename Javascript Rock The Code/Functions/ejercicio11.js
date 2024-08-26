//Ejercicio 11
//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
//Puedes usar este array para probar tu función: pista (typeof)

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (typeof currentValue === "number") {
      return currentValue + accumulator;
    }
    if (typeof currentValue === "string") {
      return currentValue.length + accumulator;
    }
    return accumulator;
  }, 0);
}

console.log(averageWord(mixedElements));
