//Ejercicio 10 Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(arr) {
  const totalArr = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const calculateAverage = totalArr / arr.length;
  return calculateAverage;
}

const calculateAverage = average(numbers);

console.log(calculateAverage);
