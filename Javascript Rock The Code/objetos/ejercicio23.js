//Ejercicio 23
//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
//Pelicula pequeña, menos de 100 minutos, pelicula mediana,
//mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos.
//Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let shortMovie = []; // < 100min
let mediumMovie = []; // >= 100 min && < 200
let longMovie = []; // >= 200min

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    shortMovie.push(movies[i]);
    console.log("Añadido shortMovie");
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes < 200
  ) {
    mediumMovie.push(movies[i]);
    console.log("Añadido mediumMovie");
  } else {
    longMovie.push(movies[i]);
    console.log("Añadido longMovie");
  }
}

console.log(shortMovie);
console.log(mediumMovie);
console.log(longMovie);

// Nota mía para Erik: NO ESTÁ BIEN DEL TODO PORQUE ITERA MUCHAS VECES,
//SOLAMENTE QUEREMOS QUE SE AÑADAN EN LOS ARRAYS 1 VEZ
