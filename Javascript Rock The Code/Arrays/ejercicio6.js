//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

let newArray = rickAndMortyCharacters.splice(1, 1);
console.log(newArray);
