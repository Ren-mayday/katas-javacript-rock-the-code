//Ejercicio 12
//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
//pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(arr) {
  const arrNoDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arrNoDuplicates.includes(arr[i])) {
      arrNoDuplicates.push(arr[i]);
      console.log(arrNoDuplicates);
    }
  }

  return arrNoDuplicates;
}

const newArray = removeDuplicates(duplicates);
console.log(newArray);

/*
function removeDuplicates(arr) {
  let arrNoDuplicates = new Set(arr);
  let result = [...arrNoDuplicates];
  return result;
}

console.log(removeDuplicates(duplicates));
*/
