//21.1
//let taula = [];

//taula.push("Hola");
//taula.push("Adeu"); 

//console.log(taula);

//21.2
// let taula = [];

// taula.push("Hola");
// taula.push("Adeu");

// console.log(taula);

// taula[2] = "Nom";

// console.log(taula);

// taula[1] = ", ";

// console.log(taula);

//21.3
// let taula = [23, 45, 98, 73];

// let suma = taula[0] + taula[2];
// console.log("Suma:", suma);

// taula[6] = suma;

// // console.log(taula);

//21.4
// let numero = Number(prompt("Introduïu un número:"));

// let taula = [];
// taula.push(numero * 2);
// taula.push(numero * 3);

// console.log(taula);

//21.5
// let a = Number(prompt("Introduïu el primer número:"));
// let b = Number(prompt("Introduïu el segon número:"));

// let taula = [];
// taula.push(a + b);
// taula.push(a - b);
// taula.push(a * b);
// taula.push(a / b);

// console.log(taula);

//Exercici amb objectes
// function Auto(marca, modelo, potencia, antiguedad, precio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.potencia = potencia;
//   this.antiguedad = antiguedad;
//   this.precio = precio;
// }

// let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);

// let masAntiguo = miAuto.antiguedad < otroAuto.antiguedad ? miAuto : otroAuto;

// console.log(masAntiguo.marca, masAntiguo.modelo);