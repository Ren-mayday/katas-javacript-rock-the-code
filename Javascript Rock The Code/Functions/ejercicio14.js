//Ejercicio 14
//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite
//cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(arr) {
  const timesWordAppears = {};
  for (i = 0; i < arr.length; i++) {
    if (arr[i] in timesWordAppears) {
      //indica si la key existe
      timesWordAppears[arr[i]] = timesWordAppears[arr[i]] + 1; // sumando 1
    } else {
      timesWordAppears[arr[i]] = 1;
    }
  }
  return timesWordAppears;
}

console.log(repeatCounter(counterWords));
