//Crea una función que devuelva la cantidad de true valores que hay en una matriz.

//Ejemplos
//countTrue([true, false, false, true, false]) ➞ 2

//countTrue([false, false, false, false]) ➞ 0

//countTrue([]) ➞ 0
//Notas
//Regresa 0 si se da una matriz vacía.
//Todos los elementos de la matriz son del tipo bool ( trueo false).

function countTrue(arr) {
  const initialValue = 0;
  //creamos la variable initialValue para almacenar todos los elementos del array
  return arr.reduce((accumulator, currentValue) => {
    //insertamos el método reduce dentro necesita dos parámetros (accumulator) que es el parámetro donde se irá sumando cada elemento en cada iteración y
    //(currentValue) es el parámetro donde almacenamos el valor actual
    if (currentValue) {
      // en esta primera sentencia de la condicional estamos comprobando si currentValue es true
      return accumulator + 1;
      // en caso que esta primera comprobación sea correcta cogerá el accumulator y le sumará 1
    }
    return accumulator;
    // de lo contrario tiene que devolver el accumulator (es la suma de todos los elementos), en este caso sería 0 porque si fuera true, le suma 1
  }, initialValue);
}

console.log(countTrue([true, false, false, true, false]));

console.log(countTrue([false, false, false, false]));

console.log(countTrue([]));

// for, for...of, for..in, arr.forEach(()=> {})
// const -> tipos de datos inmutables
// deberes.
