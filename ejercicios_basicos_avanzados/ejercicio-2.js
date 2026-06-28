//EJERCICIO 2
// 2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log(jedi);

// 2.2
let nombre = "Luke";
let apellido = "Skywalker";
let edad = 25;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy un jedi.");

// 2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let precioTotal = sable1.precio + sable2.precio;
console.log(precioTotal);

// 2.4
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2);