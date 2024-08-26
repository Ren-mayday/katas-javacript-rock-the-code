//Ejercicio 18
//Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
//Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (place of placesToTravel) {
  if (place.id === 11 || place.id === 40) {
    let index = placesToTravel.indexOf(place);
    console.log(index);
    placesToTravel.splice(index, 1);
    console.log(placesToTravel);
  }
}

/*for (let i = 0; i < placesToTravel.length; i++) {
  console.log(placesToTravel[i]);
}

placesToTravel.splice(1, 1);
console.log(placesToTravel);
placesToTravel.splice(2, 1);
console.log(placesToTravel); */

/*
for (let key in placesToTravel) {
  console.log(key, placesToTravel[key]);
}*/
