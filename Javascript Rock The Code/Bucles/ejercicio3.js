/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

for (let i = 0; i <= 9; i++) {
  if (i < 9) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido");
  }
}
