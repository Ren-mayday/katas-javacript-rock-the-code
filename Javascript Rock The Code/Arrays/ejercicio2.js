//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const firstElementDeleted = avengers.shift();
console.log(avengers);

avengers.unshift("IRONMAN");

console.log(avengers);
