//Ejercicio 25
//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos
//y mostrar por consola la media de ventas.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSellCount = 0;

for (let product of products) {
  totalSellCount += product.sellCount;
  console.log(product.sellCount);
}

//console.log(totalSellCount);

const average = totalSellCount / products.length;
console.log(average);

//Nota para Erik: No entiendo por qué no me calcula la media
//si la media es la suma total dividido por el número de sellCounts
